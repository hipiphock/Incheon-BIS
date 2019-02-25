$(document).ready(function() {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	ajaxCall("./comp/selectCompCateList.do",null, null, load_comp_list , null);
	$("#startdt").val(new Date().toISOString().substring(0, 10));
	$("#enddt").val(new Date().toISOString().substring(0, 10));
	initCalendar("startdt", "yy-mm-dd", true);
	initCalendar("enddt", "yy-mm-dd", true);
	
});

function load_comp_list(data){
	$.each(data.resultList, function(index, value){	
		var temp = document.createElement('option');
		temp.innerHTML = value.compnm; 
		temp.value = value.compid; 
		$("#comp_option").append(temp);
	});	
}

var models = [
              {label:"버스회사", 		name:"compnm", 		index:"compnm",		 	width: "160", 	align:"center", sorttype:"text"},
              {name:"compid", 		index:"compid",		hidden:true}
              ];

var models2 = [
              {label:"구분", 		name:"seper", 		index:"seper",		 	width: "100", 	align:"center", sorttype:"text"},
               ];

function initGrid(){
	makeMultiGrid("#top_table",models, 300, "resultList", null, null, null);
	makeMultiGrid("#bottom_table",models2, 300, "resultList", null, null, null);
	
	$(window).bind('resize',function() {
		$("#top_table").jqGrid('setGridHeight', $(".main_chart").eq(0).height()-23);
		$("#top_table").jqGrid('setGridWidth', $(".main_chart").eq(0).width());
		$("#bottom_table").jqGrid('setGridHeight', $(".main_chart").eq(2).height()-23);
		$("#bottom_table").jqGrid('setGridWidth', $(".main_chart").eq(2).width());
	}).trigger('resize');
	
	reloadGrid("#top_table", "./comp/selectCompCateList.do", null, "resultList");
}

function initEvent(){
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#bottom_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#bottom_table");
		else
			showAlert("조회된 내용이 없습니다.");
	}); 
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//조회구분 변경시 기간 변경. 
	$("#select_date").change(function(){
		if($("#select_date option:selected").val()==0){
			initCalendar("startdt", "yy-mm-dd", true);
			initCalendar("enddt", "yy-mm-dd", true);
		}
		else{
			initCalendar("startdt", "yy-mm", true);
			initCalendar("enddt", "yy-mm", true);
		}
	});
	
	//버스회사 선택시 왼쪽 위 테이블
	$("#comp_option").change(function(){
		
	});
	
	//검색
	$("#btn_search").click(function(){
		var params = {
				bitid:$("#bitid").val(),
				detail:$("#detail").val(),
				bittpcd:$("#bittpcd").val()
		};
		//showLoader(); 
		//reloadGrid("#main_table","./bit/selectWStopTerminal.do",params,"resultList");
		//}
	});
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