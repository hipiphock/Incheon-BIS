$(document).ready(function(){
	appendLoader("로딩중...");
	initBox();
	initGrid();
	initEvent();
});

// for bus list result
var left_box = [
//	{label:"선택",	name:"checkbox",	index:"checkbox",		width:"30",	sortable:false, editable: true, align:"center",
//		formatter:'checkbox',	edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}},
    {label:"버스회사",	name:"compnm",		index:"compnm",			width:"80",		align:"center",	sorttype:"text"},
    {label:"노선번호",	name:"routeno",		index:"routeno",		width:"50", 	align:"center",	sorttype:"text"},
    {label:"차량번호",	name:"carregno",	index:"carregno",		width:"100",	align:"center",	sorttype:"text"},
    {label:"운행상태",	name:"rundistinctcd",index:"rundistinctcd",	width:"70",		align:"center",	sorttype:"text"},
    {label:"단말기ID",name:"mdtid",		index:"mdtid",			width:"60",		align:"right",	sorttype:"text"},
    {label:"버스ID",	name:"busid",		index:"busid",			width:"100",	align:"center",	sorttype:"text"},
    {label:"노선ID",	name:"routeid",		index:"routeid",		width:"98",		align:"center",	sorttype:"text"}    
];

// for selection from left
var right_box = [
//	{label:"선택",	name:"checkbox",	index:"checkbox",		width:"30",	sortable:false, editable: true, align:"center",
//		formatter:'checkbox',	edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}},
	{label:"버스회사",	name:"compnm",		index:"compnm",			width:"80",		align:"center",	sorttype:"text"},
	{label:"노선번호",	name:"routeno",		index:"routeno",		width:"50", 	align:"center",	sorttype:"text"},
	{label:"차량번호",	name:"carregno",	index:"carregno",		width:"100",	align:"center",	sorttype:"text"},
	{label:"운행상태",	name:"rundistinctcd",index:"rundistinctcd",	width:"70",		align:"center",	sorttype:"text"},
	{label:"단말기ID",name:"mdtid",		index:"mdtid",			width:"60",		align:"right",	sorttype:"text"},
	{label:"버스ID",	name:"busid",		index:"busid",			width:"100",	align:"center",	sorttype:"text"},
	{label:"노선ID",	name:"routeid",		index:"routeid",		width:"98",		align:"left",	sorttype:"text"}    
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

//function for intial event
function initGrid(){
	// initializing left and right box
	makeMultiGrid("#left_bus_list", left_box, 600, "resultList", null, leftCompleted, null);
	makeMultiGrid("#right_bus_list", right_box, 600, "resultList", null, rightCompleted, null);
	$("#left_bus_list").jqGrid("setGridParam", {multiboxonly:false});
	$("#right_bus_list").jqGrid("setGridParam", {multiboxonly:false});
		
	function leftCompleted(data){
		$("#total_search_result").text("전송대상차량조회결과 " + data.records + "건");
	}
	
	function rightCompleted(data){
		$("selected_bus_result").text("전송대상차량 " + data.records + "대");
	}
	
	$(window).bind('resize', function() {
		$("#left_bus_list").jqGrid('setGridHeight', $("#left_chart").height() - 23);
		$("#left_bus_list").jqGrid('setGridWidth', $("#left_chart").width());
		$("#right_bus_list").jqGrid('setGridHeight', $("#right_chart").height() - 23);
		$("#right_bus_list").jqGrid('setGridWidth', $("#right_chart").width());
	}).trigger('resize');
	
	loadGrid("", "");
}

//load grid in the left
function loadGrid(compID, routeID){
	showLoader();
	reloadGrid("#left_bus_list", "./route/selectBusListtoNotify.do", {compid:compID, routeid:routeID}, "resultList");
}


// for every single events
function initEvent(){
	
	// when you change company
	$("#busCompany").change(function(){
		var compID = $("#busCompany option:selected").val();
		if(compID == ""){
			ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
			loadGrid("", "");
		}
		else ajaxCall("./route/selectRouteListbyCompany.do", {compid:compID}, null, refreshRoute, null);
		function refreshRoute(data){
			dealwithRoute(data);
			var compID = $("#busCompany option:selected").val();
			var routeID = $("#busRoute option:selected").val();
			loadGrid(compID, routeID);
		}
	});
	
	// when you change route
	$("#busRoute").change(function(){
		var compID = $("#busCompany option:selected").val(); 
		var routeID = $("#busRoute option:selected").val();
		loadGrid(compID, routeID);
	});
	
	// when you click search
	$("#btn_search").click(function(){
		var compID = $("#busCompany option:selected").val(); 
		var routeID = $("#busRoute option:selected").val();
		loadGrid(compID, routeID);
	});
	
	// check all element or not
//	$("#checkAll").click(function(){
//		$("input:checkbox").not(this).prop("checked", this.checked);
//	});
	
	// move element from left list to right list
	$(".btn_movRight").click(function(){
		
		var left_row_arr = $("#left_bus_list").getGridParam("selarrrow");
		var right_row_arr = $("#right_bus_list").getDataIDs();
		
		for(var i in left_row_arr){
			var j;
			var selected_row = $("#left_bus_list").getRowData(left_row_arr[i]);
			// check for duplicate
			for(j = 0; j < right_row_arr.length; j++){
				var existing_row = $("#right_bus_list").getRowData(right_row_arr[j]);
				if(selected_row.busid == existing_row.busid){
					j = -1;
					break;
				}
			}
			if(j != -1){
				var param = {
					compnm:			selected_row.compnm,
					routeno:		selected_row.routeno,
					carregno:		selected_row.carregno,
					rundistinctcd:	selected_row.rundistinctcd,
					mdtid:			selected_row.mdtid,
					busid:			selected_row.busid,
					routeid:		selected_row.routeid
				}
				$("#right_bus_list").jqGrid("addRowData", selected_row.busid, param, "last");
			}
		}
	});
	
	// move element from right list to left list
	$(".btn_movLeft").click(function(){
		var right_row_arr = $("#right_bus_list").jqGrid("getGridParam", "selarrrow");
		for(i = right_row_arr.length - 1; i >= 0; i--){
			$("#right_bus_list").jqGrid("delRowData", right_row_arr[i]);
		}
	});
}

function send_message(){
	
}