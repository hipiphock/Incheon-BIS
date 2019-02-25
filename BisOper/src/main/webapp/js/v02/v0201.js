/* test script file
 */

$(document).ready(function(){
	// inital works
	appendLoader("로딩중...");
	initBox();
	initGrid();
	initEvent();
});

var model_1 =[
	{label:"버스회사",		name:"compnm",		index:"cnm",	width:"100",	align:"left",	sorttype:"text"},
	{label:"노선번호",		name:"routeno",		index:"rnm",	width:"100",	align:"left",	sorttype:"text"},
	{label:"최대회차수",	name:"max_run",		index:"run",	width:"100",	align:"left",	sorttype:"text"},
	{label:"운행차량수",	name:"org",			index:"org",	width:"100",	align:"left",	sorttype:"text"},
	{label:"총배차수",		name:"tot",			index:"tot",	width:"100",	align:"left",	sorttype:"text"}
];

var model_2 =[
	{label:"배차시간"},
	{label:"운행회차"},
	{label:"배차순번"},
	{label:"노선번호",		name:"routeno",		index:"routeno",	width:"60",		align:"right",	sorttype:"text"},
	{label:"차량번호",		name:"carno",		index:"carno"},
	{label:"운전자명",		name:"driverid",	index:"driverid",	width:"80",		align:"center",	sorttype:"text"},
	{label:"적용일"}
];

var model_3 =[
	{label:"노선번호",		name:"routeno",		index:"routeno"},
	{label:"운행구간"},
	{label:"운행거리(km)"},
	{label:"운행시간(분)"},
	{label:"(인)운행대수"},
	{label:"(인)예비대수"},
	{label:"첫차시간"},
	{label:"막차시간"},
	{label:"운행간격"},
	{label:"첫차시간"},
	{label:"막차시간"},
	{label:"운행간격"}
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

// initializing table grid
function initGrid(){
	makeGrid("#search_result", model_1, 400, "resultList", null, null, null);
	makeGrid("#detail_list", model_2, 400, "resultList", null, null, null);
	makeGrid("#selected_route_list", model_3, 400, "resultList", null, null, null);
	
	$("#selected_route_list").jqGrid("setGroupHeaders", {
		useColSpanStyle:false,
			groupHeader:[
			    {startColumnName:""}
			]
	});
	
	$(window).bind("resize", function(){
		$("#search_result").jqGrid("setGridHeight", $("#search_result_chart").height() - 23);
		$("#search_result").jqGrid("setGridWidth", $("#search_result_chart").width());
		$("#detail_list").jqGrid("setGridHeight", $("#detail_list_chart").height() - 23);
		$("#detail_list").jqGrid("setGridWidth", $("#detail_list_chart").width());
		$("#selected_route_list").jqGrid("setGridHeight", $("#selected_route_list_chart").height() - 23);
		$("#selected_route_list").jqGrid("setGridWidth", $("#selected_route_list_chart").width());
	}).trigger("resize");
	loadResultGrid();
}

function loadResultGrid(){
	var compID = "";
	var routeID = "";
	showLoader();
	reloadGrid("#search_result", "./dispatch/selectDispatchPlanList.do", {compid:compID, routeid:routeID}, "resultList");
}

// initialize
function initEvent(){
	
	// refresh button
	$("#btn_refresh").click(function(){
		location.reload();
	})
	
	// when bus company column changes
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
	
	$("#btn_search").click(function(){
		loadResultGrid();
	});
}