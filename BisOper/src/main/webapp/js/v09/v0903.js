$(document).ready(function(){
	appendLoader("로딩중...")
	initBox();
	initGrid();
	initEvent();
});

var busrun_model = [
	{label:"버스회사",		name:"compnm",		index:"compnm",			width:"100",	align:"center",		sorttype:"text"},
	{label:"노선번호",		name:"routeno",		index:"routeno",		width:"80",		align:"center",		sorttype:"text"},
	{label:"차량번호",		name:"carno",		index:"carno",			width:"100",	align:"center",		sorttype:"text"},
	{label:"운행회차",		name:"real_runord",	index:"runord",			width:"80",		align:"center",		sorttype:"text"},
	{label:"운행시작일시",	name:"run_startdt",	index:"run_startdt",	width:"140",	align:"center",	sorttype:"text"},
	{label:"운행종료일시",	name:"run_enddt",	index:"run_enddt",		width:"140",	align:"center",	sorttype:"text"},
	{label:"위반건수",		name:"viol_cnt",	index:"viol_cnt",		width:"100",	align:"center",	sorttype:"text"},
	
	{name:"busid",		index:"busid",		type:"I",	hidden:true},
	{name:"routeid",	index:"routeid",	type:"I",	hidden:true}
];

var violence_model = [
	{label:"발생일시",		name:"evt_occurdt",	index:"occurdt",		width:"140",	align:"center",	sorttype:"text",	type:"I"},
	{label:"버스회사",		name:"compnm",		index:"compnm",			width:"100",	align:"center",	sorttype:"text",	type:"I"},
	{label:"버스ID",		name:"busid",		index:"busid",			width:"80",		align:"center",	sorttype:"text"},
	{label:"차량번호",		name:"carno",		index:"carno",			width:"100",	align:"center",	sorttype:"text",	type:"I"},
	{label:"노선번호",		name:"routeno",		index:"routeno",		width:"60",		align:"center",	sorttype:"text",	type:"I"},
	{label:"위반유형",		name:"runvioltype",	index:"runvioltype",	width:"100",	align:"left",	sorttype:"text",	type:"I"},
	{label:"링크ID",		name:"llinkid",		index:"llinkid",		width:"100",	align:"center",	sorttype:"text"},
	{label:"발생위치",		name:"posnm",		index:"posnm",			width:"300",	align:"left",	sorttype:"text"},
	// 지도이동기능을 위한 좌표
	{name:"posx",		index:"posx",		type:"I",	hidden:true},
	{name:"posy",		index:"posy",		type:"I",	hidden:true},
	// penalty 등록을 위한 data
	{name:"compid",		index:"compid",		type:"I",	hidden:true},
	{name:"routeid",	index:"routeid",	type:"I",	hidden:true},
	{name:"runvioltpcd",index:"runvioltpcd",type:"I",	hidden:true}
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
	select.disabled = true;
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
	select.disabled = false;
}

function initGrid(){
	makeGrid("#bus_run_list", busrun_model, 800, "resultList", select_run, load_run_completed, null);
	makeGrid("#violent_operation_list", violence_model, 800, "resultList", select_violence, null, null);
	
	function select_run(rowid){
		var selected_run = $("#bus_run_list").jqGrid("getRowData", rowid);
		load_violence_list(selected_run.busid, selected_run.routeid, selected_run.run_startdt);
	}
	
	function select_violence(rowid){
		selected_violence = $("#violent_operation_list").jqGrid("getRowData", rowid);
	}
	
	function load_run_completed(data){
		$("#run_search_result").text("운행회차 검색결과 " + data.records + "건");
	}
	
	$(window).bind('resize', function() {
		$("#bus_run_list").jqGrid('setGridHeight', $("#run_chart").height() - 23);
		$("#bus_run_list").jqGrid('setGridWidth', $("#run_chart").width());
		$("#violent_operation_list").jqGrid('setGridHeight', $("#violence_chart").height() - 23);
		$("#violent_operation_list").jqGrid('setGridWidth', $("#violence_chart").width());
	}).trigger('resize');
}

function load_run_list(){
	showLoader();
	var param = {
		carregno	:$("#busno").val(),
		compid		:$("#busCompany").val(),
		routeid		:$("#busRoute").val(),
		search_date	:$("#input_date").val(),
	}
	reloadGrid("#bus_run_list", "./run/selectBusRunList.do", param, "resultList");
//	ajaxCall("./run/selectBusRunList.do", param, null, onSuccess, null);
//	function onSuccess(data){
//		console.log(data);
//	}
}

function load_violence_list(busID, routeID, startdt){
	showLoader();
	startdt = startdt.split(" ")[0].replace(/\//g, "-");
	
	var param = {
		evt_occurdt:startdt,
		busid:busID,
		routeid:routeID,
		evttpcd:"",
		runvioltpcd:$("#violenceType").val()
	}
	console.log(param);
	reloadGrid("#violent_operation_list", "./evaluation/selectViolentOperHistList.do", param, "resultList");
}

function initEvent(){
	
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	$("#btn_search").click(function(){
		load_run_list();
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
		}
	});

	// 엑셀 다운로드
	$("#btn_excel").click(function(){
		if(0 < $("#violent_operation_list").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#violent_operation_list");
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