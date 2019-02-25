$(document).ready(function() {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'FAILTPCD'}, null, load_failtpcd_list , null);
	ajaxCall("./bit/selectFacilnmCate.do",null, null, load_facilnm_list , null);
	$("#startdt").val(new Date().toISOString().substring(0, 10));
	$("#enddt").val(new Date().toISOString().substring(0, 10));
	$("#ocdt_date").val(new Date().toISOString().substring(0, 10));
	$("#treatdt_date").val(new Date().toISOString().substring(0, 10));
	
	$("#btn_modify").attr("class", "disabled");
	$("#btn_modify").css({ 'pointer-events': 'none' });
	$("#btn_delete").attr("class", "disabled");
	$("#btn_delete").css({ 'pointer-events': 'none' });
});

var regdt;
var temp_facilid; 

function load_failtpcd_list(data){
	$.each(data.resultList, function(index, value){
		if(value.cd == '300' || value.cd == '210' || value.cd == '240' || value.cd == '340') {
			var temp = document.createElement('option');
			temp.innerHTML = value.cdnm; 
			temp.value = value.cd; 
			$(".failtpcd").append(temp);
		}
	});
}

function load_facilnm_list(data){
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.installloc; 
		temp.value = value.facilid; 
		$("#facilnm").append(temp);
	});
	$("#facilid").val($("#facilnm option:selected").val());
}

var models = [
              {label:"운수회사", 		name:"compnm", 		index:"compnm",			width: "70", 	align:"center", sorttype:"text"},
              {label:"운수회사지점", 		name:"facnm", 		index:"facnm",			width: "80", 	align:"center", sorttype:"text"},
              {label:"차고지무선랜", 		name:"faccd", 		index:"faccd",			width: "70", 	align:"center", sorttype:"text"},
              {label:"장애발생일시", 		name:"ocdt", 		index:"ocdt",			width: "110", 	align:"center", sorttype:"text"},
              {label:"장애유형", 		name:"failcd", 		index:"failcd",			width: "60", 	align:"center", sorttype:"text"},
              {label:"장애상세내역", 		name:"fail_detail", index:"fail_detail",	width: "110", 	align:"center", sorttype:"text",	type:"I"},
              {label:"선번장", 		name:"descr", 		index:"descr",			width: "250", 	align:"center", sorttype:"text"},
              {label:"주소", 			name:"addr", 		index:"addr",			width: "150", 	align:"center", sorttype:"text"},
              {label:"KT담당자", 		name:"treat_userid",index:"treat_userid",	width: "60", 	align:"center", sorttype:"text",	type:"I"},
              {label:"처리상세내역", 		name:"treat_detail",index:"treat_detail",	width: "250", 	align:"center", sorttype:"text",	type:"I"},
              {name:"reg_userid",	name:"reg_userid",	type:"I",	hidden:true},
              {name:"mobileno",		name:"mobileno",	type:"I",	hidden:true},
              {name:"facilid",		name:"facilid",		hidden:true},
              {name:"asdt",			name:"asdt",		hidden:true},
              {name:"regdt",		name:"regdt",		hidden:true}
              ];

function initGrid(){
	makeGrid("#main_table",models,300,"resultList",onSelected,onComplete,null);
	
	function onSelected(data){
		var rowData = $("#main_table").jqGrid('getRowData', data);
		$("#facilnm option:selected").attr("selected",false);
		regdt="";
	    temp_facilid=""; 
		if(rowData.facnm){
			$("#facilnm option").each(function(){
		        if($(this).text()==rowData.facnm && $(this).val().match(rowData.facilid)){ 
		            $(this).attr("selected","selected");
		            $("#facilnm").trigger('change');
		            temp_facilid=$("#facilid").val(); 
					regdt = rowData.regdt;
		        }
		    });
		}
		if(rowData.ocdt){
			var date = rowData.ocdt.split(" ")[0];
			var time = rowData.ocdt.split(" ")[1];
			$("#ocdt_date").val(date);
			$("#ocdt_time").val(time);
		}
		if(rowData.asdt){
			var date = rowData.asdt.split(" ")[0];
			var time = rowData.asdt.split(" ")[1];
			$("#treatdt_date").val(date);
			$("#treatdt_time").val(time);
		}
		if(rowData.failcd)
			$("#failtpcd option:contains('"+rowData.failcd+"')").attr("selected","selected");
		
		
		$("#btn_modify").attr("class", "");
		$("#btn_modify").css({ 'pointer-events': 'auto' });
		$("#btn_delete").attr("class", "");
		$("#btn_delete").css({ 'pointer-events': 'auto' });
		$("#btn_new").attr("class", "disabled"); 
		$("#btn_new").css({ 'pointer-events': 'none' });
	}
	
	function onComplete(data){
		$(".sub_title").eq(0).find("h3").remove();
		$(".sub_title").eq(0).append("<h3>무선AP A/S 이력검색 <span>"+data.records+"<span>건</h3>");
		$("#main_table").jqGrid("setSelection",1);
		hideLoader(); 
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
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
	
	//시설물명 변경 시 해당 시설물에 따른 시설물ID 변경시키기
	$("#facilnm").change(function(){
		if($("#facilnm").val()) 
			$("#facilid").val($("#facilnm option:selected").val());
	});
	
	//검색
	$("#btn_search").click(function() {
		var params={
			failtpcd:$("#failtpcd_top").val(),
			fail_treatdt:$("#fail_treatdt").val(),
			startdt:$("#startdt").val().replace(/-/g,"").substr(2),
			enddt:$("#enddt").val().replace(/-/g,"").substr(2)
		};	
		showLoader(); 
		reloadGrid("#main_table","./bit/selectWAPAsList.do",params,"resultList");
	});
	
	//초기화
	$("#btn_reset").click(function() {
		$("#ocdt_date").val(new Date().toISOString().substring(0, 10));
		$("#treatdt_date").val(new Date().toISOString().substring(0, 10));
		$("#ocdt_time").val("00:00:00");
		$("#treatdt_time").val("00:00:00");
		$("#input_fail_detail").val("");
		$("#input_reg_userid").val("");
		$("#input_mobileno").val("");
		$("#input_treat_userid").val("");
		$("#input_treat_detail").val("");
		
		$("#btn_modify").attr("class", "disabled");
		$("#btn_modify").css({ 'pointer-events': 'none' });
		$("#btn_delete").attr("class", "disabled");
		$("#btn_delete").css({ 'pointer-events': 'none' });
		$("#btn_new").attr("class", ""); 
		$("#btn_new").css({ 'pointer-events': 'auto' });
		$("#main_table").jqGrid("resetSelection");
		
		regdt ="";
		temp_facilid ="";
	});
	
	//신규등록
	$("#btn_new").click(function(){
		showConfirmDlg("무선AP 장애를 등록 하시겠습니까?", new_confirm);
		function new_confirm() {
			var params={
				facilid:$("#facilid").val(),
				faciltpcd:13,
				fail_occurdt:$("#ocdt_date").val()+" "+$("#ocdt_time").val(),				
				failtpcd:$("#failtpcd_bottom").val(),				
				fail_detail:$("#input_fail_detail").val(),
				mobileno:$("#input_mobileno").val(),
				fail_treatdt2:$("#treatdt_date").val()+" "+$("#treatdt_time").val(),
				treat_detail:$("#input_treat_detail").val(),
				treat_userid:$("#input_treat_userid").val(),
			};
			ajaxCall("./bit/insertBitFail.do",params,null,check_new,null)
		}
	});
	
	//수정
	$("#btn_modify").click(function(){
		showConfirmDlg("무선AP 장애 처리를 수정 하시겠습니까?", modify_confirm);
		function modify_confirm() {
			var params={
				facilid:temp_facilid,
				regdt:regdt,
				
				fail_occurdt:$("#ocdt_date").val().replace(/-/g,"").substr(2)+$("#ocdt_time").val().replace(/:/g,""),
				failtpcd:$("#failtpcd_bottom").val(),
				fail_detail:$("#input_fail_detail").val(),
				mobileno:$("#input_mobileno").val(),
				fail_treatdt:$("#treatdt_date").val().replace(/-/g,"")+$("#treatdt_time").val().replace(/:/g,""),
				treat_detail:$("#input_treat_detail").val(),
				treat_userid:$("#input_treat_userid").val(),
			}
			ajaxCall("./bit/updateBitAs.do",params,null,check_modify,null)
		}
	});
	
	//삭제
	$("#btn_delete").click(function(){
		showConfirmDlg("무선AP A/S 정보를 삭제 하시겠습니까?", delete_confirm);
		function delete_confirm() {
			var params={
				facilid:temp_facilid,
				fail_occurdt:$("#ocdt_date").val()+" "+$("#ocdt_time").val()
			}
			ajaxCall("./bit/deleteBitAs.do",params,null,check_delete,null)
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