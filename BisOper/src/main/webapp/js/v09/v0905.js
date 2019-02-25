var model = new Array();

$(document).ready(function(){
	appendLoader("로딩중...");
	initBox();
	initGrid();
	initEvent();
});

var bus_model = [
	{label:"차량번호",		name:"carregno",	index:"carno",	width:"85",	align:"center",	sorttype:"text"},
	{label:"버스ID",		name:"busid",		index:"busid",	width:"70",	align:"center",	sorttype:"text"}
];

// append this to the global "model"
var basic_model = [
	{label:"버스ID",		name:"busid",		index:"busid"},
	{label:"차량번호",		name:"carregno",	index:"carno"},
	{label:"운행회수"},
	{label:"운행시작시각",	name:"run_startdt"},
	{label:"운행종료시각",	name:"run_enddt"}
]

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
	opt.text = "노선을 선택해주세요";
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
	makeMultiGrid("#bus_list", bus_model, 600, null, null, null, null);
	$("#bus_list").jqGrid("setGridParam", {multiboxonly:false});
	$(window).bind('resize', function() {
		$("#bus_list").jqGrid('setGridHeight', $("#bus_chart").height() - 23);
		$("#bus_list").jqGrid('setGridWidth', $("#bus_chart").width());

	}).trigger('resize');
}

function load_buslist_grid(compID, routeID){
	showLoader();
	reloadGrid("#bus_list", "./route/selectBusListtoNotify.do", {compid:compID, routeid:routeID}, "resultList");
}

function load_runlist_grid(){
	
	model = [];
	
	model.push.apply(model, basic_model);
	
	var input_date = $("#input_date").val();
	if(input_date == ""){
		showAlert("날짜를 선택해주세요");
		return;
	}
	var selected_route = $("#busRoute option:selected").val();
	if(selected_route == ""){
		showAlert("노선을 선택해주세요");
		return;
	}
	
	var grid_param = {
		search_date : input_date,
		routeid : selected_route
	};
	
	// make model
	ajaxCall("./run/selectStopListforGrid.do", grid_param, null, onSuccess, null);
	function onSuccess(data){
		$.each(data.resultList, function(index, value){
			model.push({label:value.bstopnm, name:value.pathseq, index:value.pathseq, width:"130", align:"center"});
		});
		makeMultiGrid("#run_list", model, 127, "resultList", null, null, null);
		$(window).bind("resize", function(){
			$("#run_list").jqGrid("setGridHeight", $("#run_chart").height() - 23);
			$("#run_list").jqGrid("setGridWidth", $("#run_chart").width());
		}).trigger("resize");
		
		var busList = getBusList();
		if(busList.length == 0){
			showAlert("버스를 선택해주세요.");
			return;
		}
		
		var param = {
			param : {
					search_date : input_date,
					compid : $("#busCompany").val(),
					routeid : $("#busRoute").val(),
					busList : busList
			}
		}
		console.log(param);
		reload("#run_list", "./run/selectTimeSpaceBusRunList.do", param, "resultList");
	}
	
	function getBusList(){
		var arr = [];
		var row_arr = $("#bus_list").getGridParam("selarrrow");
		for(var i in row_arr){
			var selected_row = $("#bus_list").getRowData(row_arr[i]);
			arr.push(selected_row.busid);
		}
		return arr;
	}
}

function reload(gridId, url, params, jsonRoot) {
	showLoader();
	$(gridId).jqGrid("clearGridData");
	ajaxCall(url, params, null, onLoadSuccess, null);
	function onLoadSuccess(data) {
		console.log(data);
		hideLoader();
		console.log(data);
		if(!data[jsonRoot]){
			showAlert("기간에 해당하는 데이터가 없습니다");
			return;
		}
		else {
			$(gridId).jqGrid("setGridParam", {data : data[jsonRoot]});	
			$(gridId).trigger("reloadGrid");
		
			drawChart();
		}
	}
}

function drawChart(){
	setChart2d("container", "column", getChartOption());
}

function getChartOption(){
	Highcharts.setOptions({
		plotOptions : {
			column : {
				minPointLength:3
			}
		}
	});
	var buffdata = $("#result_table").getRowData();
	var chartOption = new Object();
	
	chartOption.xAxis = new Object();
	chartOption.xAxis = {
			categories:[],
			crosshair:true
	}
	chartOption.yAxis = new Object();
	chartOption.yAxis = {
			min : 0,
			minRange : 0.1,
			title : {
				text : null
			}
	}
	chartOption.series = new Array();
	
	$.each(buffdata, function(grid_index, grid_value){
		var dataObject = {};
		dataObject.name = grid_value.DT;
		dataObject.data = [];
		$.each(model, function(model_index, model_value){
			if(model_value.index != "DT"){
				if(grid_index == 0){
					chartOption.xAxis.categories.push(model_value.label);
				}
				var key = model_value.index;
				dataObject.data.push(parseInt(grid_value[key]));
			}
		});
		chartOption.series.push(dataObject);
	});
	return chartOption;
}

function initEvent(){
	
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	// 운행회차이력 업데이트
	$("#btn_search").click(function(){
		load_runlist_grid();
	});
	
	$("#busCompany").change(function(){
		var compID = $("#busCompany option:selected").val();
		if(compID == ""){
			ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
		}
		else ajaxCall("./route/selectRouteListbyCompany.do", {compid:compID}, null, dealwithRoute, null);
	});
	
	$("#busRoute").change(function(){
		var compID = $("#busCompany option:selected").val();
		var routeID = $("#busRoute option:selected").val();
		if(routeID == "") return;
		else load_buslist_grid(compID, routeID);
	});
	
	// select all
//	$("#btn_all").click(function(){
//		$(":checkbox").each(function(){
//			this.checked = true;
//		});
//	});
		
	// 저장기능
	$("#btn_excel").click(function(){
		if(0 < $("#busstop_detail_table").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#run_list");
		else
			showAlert("조회된 내용이 없습니다.");
	})
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