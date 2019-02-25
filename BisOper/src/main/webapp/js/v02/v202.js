
var cateDlg;
var addID = 0;
var lastRow1 = null, lastRow2 = null;
var isModify1 = false, isModify2 = false;

$(document).ready(function(){
	setDialog();
	initialize();
	createGrid();
});

function setDialog() {
	//사용자 등록, 비밀번호 변경 공통 팝업
	cateDlg = getDialog("pop_category", "container");

	$(".pop_close").click(function() {
		cateDlg.dialog("close");
	});
}

function initialize() {
	
	//코드 탭
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");
		offModify1();
		offModify2();
	});
	
	$("#btn_excel").click(function(){
		execlDownload();
	});
	
	$("#input_searchWord").keydown(function(event){
		if(event.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
   	$("#btn_search").click(function() {
   		$("#code_list").clearGridData();  
   		reloadGrid("#code_cate_list", "./sys/selectCodeCateList.do", {searchWord: $("#input_searchWord").val()}, "resultList");   		
	});
   	
   	$("#btn_clear").click(function() {
   		$("#input_searchWord").val("");
   		reloadGrid("#code_cate_list", "./sys/selectCodeCateList.do", null, "resultList");
	});
   	
	//카테고리 버튼
   	$("#btn1_mod").click(function() {
		if(!isModify1) {
			showAlert("카테고리 수정 모드로 전환 합니다.");
			onModify1();			
		}
	});
	
	$("#btn1_del").click(function(){
		if(isModify1){			
			showConfirmDlg("선택한 카테고리를 삭제하시겠습니까?</br>등록된 코드도 같이 삭제 됩니다.", deleteCategory);
		}
	});
	
	$("#btn1_add").click(function(){
		if(isModify1){
			cateDlg.dialog("open");
			//TODO open dialog		
		}
	})
	
	$("#btn_save_pop").click(function(){
		inquiryInsertCodeCategory();
	})
	
	$("#btn1_save").click(function() {
		if(isModify1){	
			showConfirmDlg("카테고리 수정사항을 저장하시겠습니까?", inquirySaveCodeCategory);
		}
	});
	
	$("#btn1_cancel").click(function() {
		if(isModify1) {
			offModify1();
			lastRow1 = "";
			reloadGrid("#code_cate_list", "./sys/selectCodeCateList.do", null, "resultList");
		}	
	});	
   	
   	//코드 버튼
	$("#btn2_mod").click(function() {
		if(!isModify2) {
			showAlert("코드 수정 모드로 전환 합니다.");
			onModify2();			
			
			$("#code_list :checkbox").attr("disabled",false);
		}
	});
	
	$("#btn2_del").click(function(){
		if(isModify2){			
			var selid = $("#code_list").jqGrid('getGridParam', "selrow" ); 
			var rowData = $("#code_list").jqGrid('getRowData', selid);		
			$("#code_list").delRowData(selid);
		}
	});
	
	$("#btn2_add").click(function(){
		if(isModify2){
			addID++;
			// 현재 선택된 카테고리 id			
			var cate_selid = $("#code_cate_list").getGridParam("selrow");
			var cate_row = $("#code_cate_list").jqGrid('getRowData', cate_selid);
			
			ajaxCall("./sys/selectNewCodeCd.do", {cdcategid: cate_row.cdcategid}, null, onSuccess, null);
			
			function onSuccess(data) {
				var initRow = {
						cdcategid: cate_row.cdcategid, 
						cd: data.result.cd,    		
						useyn: "0",    	
						cdnm: "-",		
						detail: "-",		
						descr: "-"
				}
				
				$("#code_list").jqGrid("addRowData",  "add" + addID, initRow);			
			}
			
		}
	})
	
	$("#btn2_save").click(function() {
		if(isModify2){		
			showConfirmDlg("수정사항을 저장하시겠습니까?", inquirySaveCode);
		}
	});
	
	$("#btn2_cancel").click(function() {
		if(isModify2) {
			offModify2();
			lastRow2 = "";
			
			var selid = $("#code_cate_list").jqGrid('getGridParam', "selrow"); 
			var rowData = $("#code_cate_list").jqGrid('getRowData', selid);
			reloadGrid("#code_list", "./sys/selectCodeList.do", {cdcategid: rowData.cdcategid}, "resultList");
		}	
	});	
}

function onModify1(){
	isModify1 = true;
	$("#btn1_mod").attr("class","disabled");
	$("#btn1_add").attr("class","");
	$("#btn1_del").attr("class","");
	$("#btn1_save").attr("class","");
	$("#btn1_cancel").attr("class","");
}

function offModify1(){
	isModify1 = false;
	$("#btn1_mod").attr("class", "");
	$("#btn1_add").attr("class","disabled");
	$("#btn1_del").attr("class","disabled");
	$("#btn1_save").attr("class","disabled");
	$("#btn1_cancel").attr("class","disabled");
}

function onModify2(){
	isModify2 = true;
	$("#btn2_mod").attr("class","disabled");
	$("#btn2_add").attr("class","");
	$("#btn2_del").attr("class","");
	$("#btn2_save").attr("class","");
	$("#btn2_cancel").attr("class","");
}

function offModify2(){
	isModify2 = false;
	$("#btn2_mod").attr("class", "");
	$("#btn2_add").attr("class","disabled");
	$("#btn2_del").attr("class","disabled");
	$("#btn2_save").attr("class","disabled");
	$("#btn2_cancel").attr("class","disabled");
}

function deleteCategory() {
	var selid = $("#code_cate_list").jqGrid('getGridParam', "selrow"); 
	var rowData = $("#code_cate_list").jqGrid('getRowData', selid);
	
	ajaxCall("./sys/deleteCodecategory.do", {cdcategid: rowData.cdcategid}, null, onSuccess, null);

	function onSuccess(data) {
		if(data.result > 0) {
			reloadGrid("#code_cate_list", "./sys/selectCodeCateList.do", null, "resultList");
			showAlert("정상 삭제 되었습니다.");
			offModify1();
		}else {
			showAlert("삭제 중 오류 발생.");
		}
	}
}

function inquiryInsertCodeCategory() {

	var id = $("#input_p_cdcategid").val();
	var nm = $("#input_p_cdcategnm").val();
	var detail = $("#input_p_detail").val();
	var descr = $("#input_p_descr").val();
	
	if(id == null || id == "") {
		showAlert("아이디를 입력하세요.");
		return;
	}
	
	if(nm == null || nm == "") {
		showAlert("명칭을 입력하세요.");
		return;
	}
	
	
	var params = {
		cdcategid : id,
		cdcategnm : nm,
		detail : detail,
		descr : descr
	}
	
	$.ajaxSettings.traditional = true;
	ajaxCall("./sys/insertCodecategory.do", params, null, onSuccess, null);	
	
	function onSuccess(data) {
		if(data && data.result) {
			
			if(data.result > 0) {
				cateDlg.dialog("close");
				reloadGrid("#code_cate_list", "./sys/selectCodeCateList.do", null, "resultList");
				showAlert("등록 되었습니다.");
				offModify1();
			}else {
				showAlert("등록 중 오류 발생.");
			}
		}else {
			showAlert("오류가 발생하였습니다.");
		}
	}
}

function inquirySaveCodeCategory() {

	var arrCdcategid = [];
	var arrCdcategnm = [];
	var arrDetail    = [];
	var arrDescr     = [];
	
	$("#code_cate_list").jqGrid('saveRow', lastRow1);
	var dataArr = $("#code_cate_list").jqGrid('getRowData');

	$.each(dataArr, function(index, value) {
		arrCdcategid.push(value.cdcategid);
		arrCdcategnm.push(value.cdcategnm);
		arrDetail.push(value.detail);
		arrDescr.push(value.descr);
	});
	
	var params = {
		arrCdcategid : arrCdcategid, // delete 조건절
		arrCdcategnm : arrCdcategnm,
		arrDetail : arrDetail,
		arrDescr : arrDescr
	}
	
	$.ajaxSettings.traditional = true;
	ajaxCall("./sys/updateCodecategory.do", params, null, onSuccess, null);	
	
	function onSuccess(data) {
		if(data && data.result) {
			
			if(data.result > 0) {
				reloadGrid("#code_cate_list", "./sys/selectCodeCateList.do", null, "resultList");
				showAlert("수정 되었습니다.");
				offModify1();
			}else {
				showAlert("삭제 중 오류 발생.");
			}
		}else {
			showAlert("오류가 발생하였습니다.");
		}
	}
}

function inquirySaveCode() {

	var arrCdcategid = [];
	var arrCd = [];
	var arrUseyn = [];
	var arrCdnm = [];
	var arrDetail = [];
	var arrDescr = [];
	
	$("#code_list").jqGrid('saveRow', lastRow2);
	var dataArr = $("#code_list").jqGrid('getRowData');
	$.each(dataArr, function(index, value) {
		arrCdcategid.push(value.cdcategid);
		arrCd.push(value.cd);
		arrUseyn.push(value.useyn);
		arrCdnm.push(value.cdnm);
		arrDetail.push(value.detail == "-" ? "" : value.detail);
		arrDescr.push(value.descr == "-" ? "" : value.descr);
	});
	
	for(var i=0; i < arrCd.length; i++){		
		for(var j=i+1; j< arrCd.length; j++){
			if(arrCd[i] == arrCd[j]){
				showAlert("중복 입력된 코드가 있습니다.(" + arrCd[i] +")");
				return null;
			}
		}
	}
	
	var selid = $("#code_cate_list").jqGrid('getGridParam', "selrow"); 
	var rowData = $("#code_cate_list").jqGrid('getRowData', selid);
	
	var params = {
		cdcategid : rowData.cdcategid, // delete 조건절
		cdcategidList : arrCdcategid,
		cdList : arrCd,
		useynList : arrUseyn,
		cdnmList : arrCdnm,
		detailList : arrDetail,
		descrList : arrDescr
	}
	
	$.ajaxSettings.traditional = true;
	ajaxCall("./sys/saveCode.do", params, null, onSuccess, null);	
	
	function onSuccess(data) {
		if(data && data.result) {
			if(Number(data.result) == -1) {
				showAlert("오류가 발생하였습니다.");
			}else {
				showAlert("수정 되었습니다.");
				offModify2();
				lastRow2 = "";
				
				var selid = $("#code_cate_list").jqGrid('getGridParam', "selrow"); 
				var rowData = $("#code_cate_list").jqGrid('getRowData', selid);
				reloadGrid("#code_list", "./sys/selectCodeList.do", {cdcategid: rowData.cdcategid}, "resultList");
			}
		}else {
			showAlert("오류가 발생하였습니다.");
		}
	}
}

var models3 = [
  		{onlyView: true,
		 label:'카테고리 ID', name:'cdcategid', index:'cdcategid',  width: '110',  sorttype:'text',	    align:'left'},
		{label:'카테고리명',  name:'cdcategnm', index:'cdcategnm',  width: '140',  sorttype:'text',	    align:'left', editable: true},
		{label:'상세',     name:'detail', index:'detail',  width: '200',        sorttype:'text',	    align:'left', editable: true},
		{label:'설명',     name:'descr',  index:'descr',   width: '200',        sorttype:'text',	    align:'left', editable: true}
      	];

var models4 = [ // all edit
  		{onlyView: true,
  		 label:'카테고리',		name:'cdcategid',  	index:'cdcategid',   	width: "150", sorttype:"text",align:"center"},     	
     	{label:'코드' ,		name:'cd',    		index:'cd',         	width: "120", sorttype:"text",align:"center"},
     	{label:'사용여부' ,		name:'useyn',    	index:'useyn',         	width: "120", sorttype:"text",align:"center", formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},	
     	{label:'코드 값',		name:'cdnm',		index:'cdnm', 			width: "150", sorttype:"text",align:"center", editable: true},
     	{label:'설명',		name:'detail',	    index:'detail', 		width: "179", sorttype:"text",align:"center", editable: true},
     	{label:'비고',		name:'descr',	    index:'descr', 			width: "197", sorttype:"text",align:"center", editable: true}
     	];

function createGrid() {
		
	makeGrid("#code_cate_list", models3, 110, "resultList", onSelected3, onCompleted2, null);
	makeGrid("#code_list", models4, 110, "resultList", onSelected4, onCompleted3, null);
	
	function onSelected3(rowid)	{
		offModify2();
		var rowData = $("#code_cate_list").jqGrid('getRowData', rowid);
		reloadGrid("#code_list", "./sys/selectCodeList.do", {cdcategid: rowData.cdcategid}, "resultList");
		
		if(!isModify1) return;
		if(rowid && rowid != lastRow1){
			$("#code_cate_list").jqGrid('saveRow', lastRow1);
			$("#code_cate_list").jqGrid('editRow', rowid, true);
			lastRow1 = rowid;
		}
	}
	
	function onSelected4(rowid) {
		if(!isModify2) return;
		if(rowid && rowid != lastRow2){
			$("#code_list").jqGrid('saveRow', lastRow2);
			$("#code_list").jqGrid('editRow', rowid, true);
			lastRow2 = rowid;
		}
	}
	
	function onCompleted2(data) {
		$('#code_cate_list').jqGrid('setSelection', 1, true);
	}
	
	function onCompleted3(){
		if(!isModify2)
			$("#code_list :checkbox").attr("disabled",true);		
	}
	
	$(window).bind('resize', function() {
		$("#code_cate_list").jqGrid('setGridHeight',$(".div_code").height() - 23);
		$("#code_cate_list").jqGrid('setGridWidth',$(".div_code").width());
		$("#code_list").jqGrid('setGridHeight',548 - 23);
		$("#code_list").jqGrid('setGridWidth',1034);
	}).trigger('resize');
	
	reloadGrid("#code_cate_list", "./sys/selectCodeCateList.do", null, "resultList");
}

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./sys/excelCodeList.do";
	form.method = "POST";
	
	var param = document.createElement('INPUT');     
	var rowData = $("#code_list").jqGrid("getRowData");
	var value = JSON.stringify(rowData);
	
	param.type  = 'HIDDEN';
	param.name  = 'json';
	param.value = value;
	
	form.appendChild(param);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}