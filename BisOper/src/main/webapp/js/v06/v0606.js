$(document).ready(function() {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'FAILTREATCD'}, null, load_failtreat_list , null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'PROJECTTPCD'}, null, load_projecttpcd_list , null);
	ajaxCall("./stop/selectStopFacilCateList.do",null, null, load_stoplist , null);
	$("#startdt").val(new Date().toISOString().substring(0, 10));
	$("#enddt").val(new Date().toISOString().substring(0, 10));
	$("#fail_occurdt_date").val(new Date().toISOString().substring(0, 10));
	$("#treatdt").val(new Date().toISOString().substring(0, 10));
	$("#btn_modify").attr("class", "disabled");
	$("#btn_modify").css({ 'pointer-events': 'none' });
	$("#btn_delete").attr("class", "disabled");
	$("#btn_delete").css({ 'pointer-events': 'none' });
});

var regdt;
var temp_facilid; 

function load_failtreat_list(data){
	$.each(data.resultList, function(index, value){
		if(value.cd == '250' || value.cd == '280' || value.cd == '290' || value.cd == '300' || value.cd =='320') {
			var temp = document.createElement('option');
			temp.innerHTML = value.cdnm; 
			temp.value = value.cd; 
			$("#failtreat_toplist").append(temp);
		}
		if(value.cd == '510' || value.cd == '500' || value.cd == '520' || value.cd == '530' || value.cd =='290') {
			var temp = document.createElement('option');
			temp.innerHTML = value.cdnm; 
			temp.value = value.cd; 
			$("#failtreat_bottomlist").append(temp);
		}
	});
}

function load_projecttpcd_list(data){
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm; 
		temp.value = value.cd; 
		$("#projecttpcd").append(temp);
	});
}

function load_stoplist(data){
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.bstopnm; 
		temp.value = value.facilid+","+value.short_bstopid;
		$("#bstop").append(temp);
	});
	
	$("#facilid").val($("#bstop").eq(0).val().split(',')[0]);
	$("#short_bstopid").val($("#bstop").eq(0).val().split(',')[1]);
}

var models = [
              {label:"사업구분", 		name:"widearea", 		index:"widearea",		width: "60", 	align:"center", sorttype:"text"},
              {label:"단축ID", 		name:"shortid", 		index:"shortid",		width: "60", 	align:"center", sorttype:"text"},
              {label:"정류소명", 		name:"bstopnm", 		index:"bstopnm",		width: "110", 	align:"center", sorttype:"text", type:"S"},
              {label:"안내기유형", 		name:"bittype", 		index:"bittype",		width: "120", 	align:"center", sorttype:"text"},
              {label:"장애발생일시", 		name:"fail_occurdt", 	index:"fail_occurdt",	width: "100", 	align:"center", sorttype:"text"},
              {label:"장애상세내역", 		name:"fail_detail", 	index:"fail_detail",	width: "110", 	align:"center", sorttype:"text", type:"I"},
              {label:"처리일시", 		name:"fail_treatdt", 	index:"fail_treatdt",	width: "100", 	align:"center", sorttype:"text", type:"I"},
              {label:"처리유형", 		name:"ascd", 			index:"ascd",		 	width: "70", 	align:"center", sorttype:"text", type:"S"},
              {label:"처리상세내역", 		name:"treat_detail", 	index:"treat_detail",	width: "250", 	align:"center", sorttype:"text", type:"I"},
              
              {name:"treat_userid", index:"treat_userid", type:"I", hidden:true},
              {name:"regdt", index:"regdt", hidden:true},
              ];

function initGrid(){
	makeMultiGrid("#main_table",models,300,"resultList",onSelected,onComplete,null);
	
	function onSelected(data){
		var rowData = $("#main_table").jqGrid('getRowData', data);
		$("#bstop option:selected").attr("selected",false);
		if(rowData.bstopnm){ 
			$("#bstop option").each(function(){
		        if($(this).text()==rowData.bstopnm && $(this).val().match(rowData.shortid)){ 
		            $(this).attr("selected","selected");    
		        }
		    });
		}
		if(rowData.ascd)
			$("#failtreat_bottomlist option:contains('"+rowData.ascd+"')").attr("selected","selected");
		if(rowData.fail_occurdt){
			var date = rowData.fail_occurdt.split(" ")[0];
			var time = rowData.fail_occurdt.split(" ")[1];
			$("#fail_occurdt_date").val(date);
			$("#fail_occurdt_time").val(time);
		}
		if(rowData.fail_treatdt){
			var date = rowData.fail_treatdt.split(" ")[0];
			var time = rowData.fail_treatdt.split(" ")[1];
			$("#treatdt").val(date);
			$("#treatdt_time").val(time);
		}
		
		regdt = rowData.regdt;
		$("#bstop").trigger("change");
		temp_facilid=$("#facilid").val(); 
		
		$("#btn_modify").attr("class", "");
		$("#btn_modify").css({ 'pointer-events': 'auto' });
		$("#btn_delete").attr("class", "");
		$("#btn_delete").css({ 'pointer-events': 'auto' });
		$("#btn_sms").attr("class", "");
		$("#btn_sms").css({ 'pointer-events': 'auto' });
		$("#btn_new").attr("class", "disabled"); 
		$("#btn_new").css({ 'pointer-events': 'none' });	
	}
	
	function onComplete(data){
		$(".sub_title").eq(0).find("h3").remove();
		$(".sub_title").eq(0).append("<h3>BIT A/S 이력검색  <span>"+data.records+"<span>건</h3>");
		$("#main_table").jqGrid("setSelection",1);
		hideLoader(); 
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	$("#main_table").jqGrid('filterToolbar',
    {
					autosearch: true,
					stringResult: true,
					searchOnEnter: true,
					defaultSearch: "cn"
    });
	setFilter("main_table", true);
}

function initEvent(){
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#main_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#main_table");
		else
			showAlert("조회된 내용이 없습니다.");
	}); 
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//정류소명 변경 시 해당 정류소에 따른 시설물ID, 단축ID 변경시키기
	$("#bstop").change(function(){
		if($("#bstop").val()) {
			$("#facilid").val($("#bstop option:selected").val().split(',')[0]);
			$("#short_bstopid").val($("#bstop option:selected").val().split(',')[1]);
		}
	});
	
	//검색
	$("#btn_search").click(function() {
		var params={
			projecttpcd:$("#projecttpcd").val(),
			failtreatcd:$("#failtreat_toplist").val(),
			fail_treatdt:$("#fail_treat").val(),
			startdt:$("#startdt").val().replace(/-/g,"").substr(2),
			enddt:$("#enddt").val().replace(/-/g,"").substr(2)
		};	
		showLoader(); 
		reloadGrid("#main_table","./bit/selectBitAsList.do",params,"resultList");
	});
	
	//초기화
	$("#btn_reset").click(function() {
		$("#fail_occurdt_date").val(new Date().toISOString().substring(0, 10));
		$("#treatdt").val(new Date().toISOString().substring(0, 10));
		$("#fail_occurdt_time").val("00:00:00");
		$("#treatdt_time").val("00:00:00");
		$("#input_treat_detail").val("");
		$("#input_treat_userid").val("");
		$("#input_fail_detail").val("");
		
		$("#btn_modify").attr("class", "disabled");
		$("#btn_modify").css({ 'pointer-events': 'none' });
		$("#btn_delete").attr("class", "disabled");
		$("#btn_delete").css({ 'pointer-events': 'none' });
		$("#btn_sms").attr("class", "disabled");
		$("#btn_sms").css({ 'pointer-events': 'none' });
		$("#btn_new").attr("class", ""); 
		$("#btn_new").css({ 'pointer-events': 'auto' });
		$("#main_table").jqGrid("resetSelection");
		
		regdt ="";
		temp_facilid ="";
	});
	
	//신규등록
	$("#btn_new").click(function(){
		showConfirmDlg("시설물 장애를 등록 하시겠습니까?", new_confirm);
		function new_confirm() {
			var params={
				facilid:$("#facilid").val(),
				faciltpcd:12,
				fail_occurdt:$("#fail_occurdt_date").val()+" "+$("#fail_occurdt_time").val(),
				failtpcd:"",
				fail_detail:$("#input_fail_detail").val(),
				fail_treatdt2:$("#treatdt").val()+" "+$("#treatdt_time").val(),
				failtreatcd:$("#failtreat_bottomlist").val(),
				treat_detail:$("#input_treat_detail").val(),
				treat_userid:$("#input_treat_userid").val(),
				treat_gubun:""
			};
			ajaxCall("./bit/insertBitFail.do",params,null,check_new,null);
		}
	});
	
	//수정
	$("#btn_modify").click(function(){
		showConfirmDlg("BIT 장애 처리를 수정 하시겠습니까?", modify_confirm);
		function modify_confirm() {
			var params={
				facilid:temp_facilid,
				regdt:regdt,
				
				fail_occurdt:$("#fail_occurdt_date").val().replace(/-/g,"").substr(2)+$("#fail_occurdt_time").val().replace(/:/g,""),
				failtpcd:$("#failtreat_bottomlist").val(),
				fail_detail:$("#input_fail_detail").val(),
				reg_userid:'bmscenter',
				fail_treatdt:$("#treatdt").val().replace(/-/g,"")+$("#treatdt_time").val().replace(/:/g,""),
				failtreatcd:$("#failtreat_bottomlist").val(),
				treat_detail:$("#input_treat_detail").val(),
				treat_userid:$("#input_treat_userid").val(),
				treat_gubun:"",
				mobileno:""
			};
			
			ajaxCall("./bit/updateBitAs.do",params,null,check_modify,null);
		}
	});
	
	//삭제
	$("#btn_delete").click(function(){
		showConfirmDlg("BIT A/S 정보를 삭제 하시겠습니까?", delete_confirm);
		function delete_confirm() {
			var params={
				facilid:temp_facilid,
				fail_occurdt:$("#fail_occurdt_date").val()+" "+$("#fail_occurdt_time").val()
			};
			ajaxCall("./bit/deleteBitAs.do",params,null,check_delete,null);
		}
	});
	
	//SMS전송
	$("#btn_sms").click(function(){
		if($("#dest_min").val()==""){
			showAlert("SMS 수신 전화번호를 입력하세요.");
			return ;
		}
		if($("#sms_msg").val()==""){
			showAlert("SMS 내용을 입력하세요.");
			return ;
		}
		showConfirmDlg("SMS 메세지를 전송하시겠습니까?", sms_confirm);
		function sms_confirm(){
			var date = new Date(); 
			var params={
					dest_min:$("#dest_min").val(),
					call_back:$("#call_back").val(),
					sms_msg:$("#sms_msg").val(),
					regdt:date.toISOString().substring(2,10).replace(/-/g,"")
					+date.getHours()+date.getMinutes()+date.getSeconds() 
			};
			ajaxCall("./bit/insertSMSready.do",params,null,check_sms,null);
		}
	});
}

function check_new(data){
	if(data.result_code==1)
   		showAlert("등록되었습니다.");
	else
		showAlert("등록실패하였습니다.");
	$("#btn_search").trigger("click");
}

function check_modify(data){
	if(data.result==1)
   		showAlert("수정 되었습니다.");
	else
		showAlert("수정에 실패하였습니다.");
	$("#btn_search").trigger("click");
}

function check_delete(data){
	if(data.result_code==1)
   		showAlert("삭제 되었습니다.");
	else
		showAlert("삭제에 실패하였습니다.");
	$("#btn_search").trigger("click");
}

function check_sms(data){
	if(data.result==1)
   		showAlert("SMS 전송 되었습니다.");
	else
		showAlert("SMS 전송 실패하였습니다.");
}

function excelDownload(title, grid_id) {
	$("#excelDown").remove();
	var grid = $(grid_id);
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST"; 
	
	var fileName = JSON.stringify(title);
	var param = document.createElement('INPUT');
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid('getGridParam','colNames'));
	
	var idData = grid.jqGrid('getGridParam', 'colModel');
	var columnName = []; 
	$.each(idData, function (index,value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type = 'HIDDEN'; 
	param.name = 'json';
	param.value = fileName + columnLabel + columnName + columnData; 
	
	form.appendChild(param);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true); 
}