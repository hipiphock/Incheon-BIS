$(document).ready(function(){
	appendLoader("로딩중...");
	initBox();
	initGrid();
	initEvent();
});

var company_route_model = [
	{label:"버스회사",		name:"compnm",		index:"compnm",		width:"120",	align:"center",	sorttype:"text"},
	{label:"노선번호",		name:"routeno",		index:"routeno",	width:"100",	align:"center",	sorttype:"text"}
];

var dispatch_model = [
	{label:"버스회사",		name:"compnm",		index:"compnm",		width:"100",	align:"center",	sorttype:"text"},
	{label:"노선번호",		name:"routeno",		index:"routeno",	width:"100",	align:"center",	sorttype:"text"},
	{label:"차량번호",		name:"",			index:"",			width:"",		align:"",		sorttype:""},
	{label:"운전자명",		name:"",			index:"",			width:"",		aligh:"",		sorttype:""},
	{label:"배차순번",		name:"",			index:"",			width:"",		align:"",		sorttype:""},
	{label:"운행회차",		name:"",			index:"",			width:"",		align:"",		sorttype:""},
	{label:"배차시간",		name:"",			index:"",			width:"",		align:"",		sorttype:""},
	{label:"배차간격(분)",	name:"",			index:"",			width:"",		align:"",		sorttype:""},
	{label:"배차시간",		name:"",			index:"",			width:"",		align:"",		sorttype:""},
	{label:"배차간격",		name:"",			index:"",			width:"",		align:"",		sorttype:""},
	{label:"계획-배차(분)",name:"",			index:"",			width:"",		align:"",		sorttype:""	}
];

var model_3 =[
	{label:"노선번호"},
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

var selectedRoute = 0;

// function for initializing box
function initBox(){
	// initializing first box - bus company
	ajaxCall("./route/selectCompList.do", null, null, dealwithCompany, null);
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
}

function initGrid(){
	makeGrid("#company_route_list", company_route_model, 600, "resultList", onSelected, onCompleted, null);
	makeGrid("#dispatch_follow_list", dispatch_model, 600, "resultList", null, null, null);
	
	function onSelected(rowid){
		var selected_row = $("#search_result").jqGrid("getRowData", rowid);
				
	}
	
	function onCompleted(data){
		$("#total_search").text("회사별 노선리스트 " + data.records + "건");
	}
	$(window).bind("resize", function(){
		$("#company_route_list").jqGrid("setGridHeight", $("#company_route_chart").height() - 23);
		$("#company_route_list").jqGrid("setGridWidth", $("#company_route_chart").width());
		$("#dispatch_follow_list").jqGrid("setGridHeight", $("#dispatch_follow_chart").height() - 23);
		$("#dispatch_follow_list").jqGrid("setGridWidth", $("#dispatch_follow_chart").width());
		$("#selected_route_info").jqGrid("setGridHeight", $("#selected_route_chart").height() - 23);
		$("#selected_route_info").jqGrid("setGridWidth", $("#selected_route_chart").width());
	}).trigger("resize");
	load_company_route_list();
}

function load_company_route_list(){
	showLoader();
	var compID = $("#busCompany option:selected").val();
	reloadGrid("#company_route_list", "./dispatch/selectCompRouteList.do", {compid:compID}, "resultList");
//	ajaxCall("./route/selectRouteListbyCompany.do", {compid:compID}, null, onSuccess, null);
//	function onSuccess(data){
//		console.log(data);
//	}
}

function load_dispatch_list(){
	showLoader();
	reloadGrid("#dispatch_follow_list", "./dispatch/selectComplianceStatusList.do", {}, "resultList");
//	ajaxCall("./route/selectComplianceStatusList.do", {compid:compID}, null, onSuccess, null);
//	function onSuccess(data){
//		console.log(data);
//	}	
}

function load_route_info(){
	showLoader();
	reloadGrid("#selected_route_info", "./dispatch/")
}

function initEvent(){

	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	// 버스 회사 선택이 바뀔 때
	$("#busCompany").change(function(){
		load_company_route_list();
	});
	
	// 검색 버튼 클릭 시
	$("#btn_search").click(function(){
		load_company_route_list();
	});
}