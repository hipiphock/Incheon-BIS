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

var oper_regularity_model = [
	{label:"배차순위"},
	{label:"운행회차"},
	{label:"버스ID"},
	{label:"차량번호"},
	{label:"노선번호"}
]

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
	makeGrid("#oper_regularity_list", oper_regularity_model, 600, "resultList", null, null, null);
	
	function onSelected(rowid){
		
	}
	
	function onCompleted(data){
		$("#total_search").text("회사별 노선리스트 " + data.records + "건");
	}
	
	$(window).bind("resize", function(){
		$("#company_route_list").jqGrid("setGridHeight", $("#company_route_chart").height() - 23);
		$("#company_route_list").jqGrid("setGridWidth", $("#company_route_chart").width());
		$("#oper_regularity_list").jqGrid("setGridHeight", $("#oper_regularity_chart").height() - 23);
		$("#oper_regularity_list").jqGrid("setGridWidth", $("#oper_regularity_chart").width());		
	}).trigger("resize");
	load_company_route_list();
}

function load_company_route_list(){
	showLoader();
	var compID = $("#busCompany option:selected").val();
	reloadGrid("#company_route_list", "./dispatch/selectCompRouteList.do", {compid:compID}, "resultList");
//	ajaxCall("./dispatch/selectCompRouteList.do", null, null, onSuccess, null);
//	function onSuccess(data){
//		console.log(data);
}

function initEvent(){
	// refresh button
	$("#btn_refresh").click(function(){
		location.reload();
	})
	// when you change company
	$("#busCompany").change(function(){
		load_company_route_list();
	});
	// when you click search
	$("#btn_search").click(function(){
		load_company_route_list();
	});
}