$(document).ready(function(){
	appendLoader("조회중..");
	initEvent(); 
	//검색 기간이 한달 넘어가면 안되는 경우와 역전된 경우를 처리하기 위해 datePicker를 사용해야함.
	$("#startdt").val(new Date(Date.now()-86400000).toISOString().substring(0, 10));
	$("#enddt").val(new Date(Date.now()-86400000).toISOString().substring(0, 10));
});

var models = [
              {label:"노선ID", 		name:"routeid", 		index:"routeid",		width: "60", 	align:"center", sorttype:"text"},
              {label:"노선번호", 		name:"routeno", 		index:"routeno",		width: "60", 	align:"center", sorttype:"text"},
             ];

var models2 = [
               {label:"구분", 		name:"", 		index:"",		width: "60", 	align:"center", sorttype:"text"},
               ];

function initGrid(){
	
}

function initEvent(){
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#left_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#left_table");
		else
			showAlert("조회된 내용이 없습니다.");
	}); 
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//검색
	$("#btn_search").click(function(){
		
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
