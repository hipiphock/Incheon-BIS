$(document).ready(function(){
	appendLoader("로딩중...");
	initGrid();
	initEvent();
})

var model = [
	{label:"발생일시",		name:"incid_occurdt",index:"occurDate",		width:"120",	align:"center",	sorttype:"text"},
	{label:"돌발유형",		name:"incidtpcd",	index:"incidtpcd",		width:"80",		align:"center",	sorttype:"text"},
	{label:"돌발대응유형",	name:"incidresptpcd",index:"incidresptpcd",	width:"120",	align:"center",	sorttype:"text"},
	{label:"진행여부",		name:"incidcuryn",	index:"incidcuryn",		width:"80",		align:"center",	sorttype:"text"},	
	{label:"돌발상세여부",	name:"incid_detail",index:"incidDetail",	width:"300",	align:"left",	sorttype:"text"},
	{label:"차량번호",		name:"carno",		index:"carno",			width:"100",	align:"center",	sorttype:"text"},
	{label:"발생링크",		name:"linknm",		index:"linknm",			width:"180",	align:"center",	sorttype:"text"},
	{label:"수집일시",		name:"incid_colldt",index:"collectDate",	width:"120",	align:"center",	sorttype:"text"},
	{label:"종료일시",		name:"incid_enddt",	index:"endDate",		width:"120",	align:"center",	sorttype:"text"},
	
	{name:"busid",	index:"busid",	type:"I",	hidden:true},
	{name:"posx",	index:"posx",	type:"I",	hidden:true},
	{name:"posy",	index:"posy",	type:"I",	hidden:true}
];

/**
 * GLOBAL VARIABLE
 */
var selected_event;


function initGrid(){
	makeGrid("#search_result", model, 100, "resultList", onSelected, onCompleted, null);
	
	function onSelected(rowid) {
		var rowData = $("#search_result").jqGrid('getRowData', rowid); 
		selected_event = rowData.busid;
	}
	
	function onCompleted(data){
		$("#total_search_result").text("부당운행이력검색 " + data.records + "건");
	}
	
	$(window).bind("resize", function(){
		$("#search_result").jqGrid("setGridHeight", $(".main_chart").height() - 60);
		$("#search_result").jqGrid("setGridWidth", $(".main_chart").width());
	}).trigger("resize");
	loadGrid();
}

function loadGrid(){
	showLoader();
	var param = {
		searchStartDate:$("#searchStartDate").val().replace(/-/g, "").substr(2,8),
		searchEndDate:$("#searchEndDate").val().replace(/-/g, "").substr(2,8),
		incidtpcd:$("#incidType option:selected").val(),
		incidcuryn:$("#onProgress option:selected").val()
	};
	reloadGrid("#search_result", "./usm/selectIncidReactHisList.do", param, "resultList");
//	ajaxCall("./usm/selectIncidReactHisList.do", param, null, dosmas, null);
//	function dosmas(data){
//		console.log(data);
//	}
}

function initEvent(){
	$("#btn_search").click(function(){
		loadGrid();
	});
	
//	$(".topBtn_map").click(function () {
//		// do ajaxCall and get busid's matching posx and posy
//		// then, call nMap's implemented function
//	});
	
	$("#btn_excel").click(function(){
		if(0 < $("#search_result").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#search_result");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	
	$("#btn_refresh").click(function(){
		location.reload();
	});
}

function excelDownload(title, grid_id){
	$("#excelDown").remove();
	var grid = $(grid_id);
	
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST";
	
	var fileName = JSON.stringify(title);
	var param = document.createElement("INPUT");
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid("getGridParam", "colNames"));
	
	var idData = grid.jqGrid("getGridParam", "colModel");
	var columnName = [];
	$.each(idData, function(index, value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type = "HDDEN";
	param.name = "json";
	param.value = fileName + columnLabel + columnName + columnData;
	
	form.appendChild(param);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}