$(document).ready(function(){
	appendLoader("로딩중");
	initBox();
	initGrid();
	initEvent();
});

var penalty_model = [
	{label:"이력순번",		name:"histno",		index:"histno",			width:"70",		align:"center",	sorttype:"text"},
	{label:"패널티유형",	name:"penaltytype",	index:"pen_type",		width:"100",	align:"center",	sorttype:"text"},
	{label:"등록일시",		name:"regdt",		index:"regdt",			width:"140",	align:"center",	sorttype:"text"},
	{label:"발생일시",		name:"occurdt",		index:"occurdt",		width:"140",	align:"center",	sorttype:"text"},
	{label:"위반유형",		name:"runvioltype",	index:"viol_type",		width:"100",	align:"center",	sorttype:"text"},
	{label:"버스회사",		name:"compnm",		index:"compnm",			width:"100",	align:"center",	sorttype:"text"},
	{label:"노선번호",		name:"routeno",		index:"routeno",		width:"80",		align:"center",	sorttype:"text"},
	{label:"차량번호",		name:"carno",		index:"carno",			width:"100",	align:"center",	sorttype:"text"},
	{label:"처리내역",		name:"treat_detail",index:"detail",			width:"300",	align:"left",	sorttype:"text"}
];

//function for initalizing boxes - first, second
function initBox(){
	// initializing first box - bus company
	ajaxCall("./route/selectCompList.do", null, null, dealwithCompany, null);
	// initializing second box - bus route
	ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
}

//function for company selection box
function dealwithCompany(data){
	var parsedData = data.companyList;
	var select = document.getElementById("busCompany");
	for(var i in parsedData){
		var opt = document.createElement("option");
		opt.value = parsedData[i].compid;
		opt.text = parsedData[i].compnm;
		select.appendChild(opt);
	}
}

//function for route selection box
function dealwithRoute(data){	
	var select = document.getElementById("busRoute");
	select.options.length = 0;
	var opt = document.createElement("option");
	opt.value = "";
	opt.text = "전체";
	select.appendChild(opt);
	select.options[0].selected = "selected";
	var parsedData = data.resultList;
	for(var i in parsedData){
		var opt = document.createElement("option");
		opt.value = parsedData[i].routeid;
		opt.text = parsedData[i].routeno;
		select.appendChild(opt);
	}
}

function initGrid(){
	makeGrid("#penalty_process_list", penalty_model, 800, "resultList", null, null, null);
	$(window).bind('resize', function() {
		$("#penalty_process_list").jqGrid('setGridHeight', $("#penalty_chart").height() - 23);
		$("#penalty_process_list").jqGrid('setGridWidth', $("#penalty_chart").width());
	}).trigger('resize');
	load_penalty_grid();
}

function load_penalty_grid(){
	showLoader();
	var param = {
		search_start_date	: $("#search_start_date").val(),
		search_end_date		: $("#search_end_date").val(),
		compid		: $("#busCompany option:selected").val(),
		routeid		: $("#busRoute option:selected").val(),
		penaltytpcd	: $("#penaltyType option:selected").val(),
		runvioltpcd	: $("#violenceType option:selected").val()
	}
	console.log(param);
	reloadGrid("#penalty_process_list", "./penalty/selectPenaltyProcessList.do", param, "resultList");
}

function initEvent(){
	
	$("#btn_search").click(function(){
		load_penalty_grid();
	});
	
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	// when you change company
	$("#busCompany").change(function(){
		var compID = $("#busCompany option:selected").val();
		if(compID == ""){
			ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
		}
		else ajaxCall("./route/selectRouteListbyCompany.do", {compid:compID}, null, refreshRoute, null);
		function refreshRoute(data){
			dealwithRoute(data);
			var compID = $("#busCompany option:selected").val();
			var routeID = $("#busRoute option:selected").val();
		}
	});
	
	// when you change route
	$("#busRoute").change(function(){
		var compID = $("#busCompany option:selected").val(); 
		var routeID = $("#busRoute option:selected").val();
	});
	
	// 엑셀 다운로드
	$("#btn_excel").click(function(){
		if(0 < $("#penalty_process_list").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#penalty_process_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	
	// 다운로드 함수
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
}