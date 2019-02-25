var model = new Array();

$(document).ready(function(){
	appendLoader("로딩중...");
	initBox();
	initEvent();
});

// basic column in model for bottom layer
var basic_column = {label:"구분",	name:"basic_col",	index:"basic_col",	width:"120",	align:"center",		sorttype:"text"};

// initializing boxes
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

// load the grid in the bottom
function loadGrid(){
	
	// get parameters
	var route_option = $("#busRoute").val();
	var date_option = $("#date_month_selector option:selected").val();
	var startdt, enddt;
	
	if(route_option == ""){
		showAlert("노선을 선택해주세요.");
		return;
	}
	
	if(date_option == "8"){ //일별
		startdt = $("#start_date").val().replace(/-/g, '') + "000000";
		enddt = $("#end_date").val().replace(/-/g, '') + "235959";
	} else if(date_option == "9"){//월별
		startdt = $("#start_date").val().replace(/-/g, '') + "01000000";
		enddt = $("#end_date").val().replace(/-/g, '') + "28235959";
	}
	
	var param = {
		routeid		:	route_option,
		proccyclcd	:	date_option,
		search_start_date	:	startdt,
		search_end_date		:	enddt
	};
	
	// make model
	model = [];
	model.push(basic_column);
	ajaxCall("./evaluation/selectStopColumn.do", param, null, onCompleted, null);
	function onCompleted(data){
		console.log(data);
		$.each(data.resultList, function(index, value){
			// push each data to the model
			model.push({label:value.bstopnm, name:value.pathseq, index:value.pathseq, width:"130", align:"center", sorttype:"text"});
		});
		$("#result_table").jqGrid("GridUnload");
		makeGrid("#result_table", model, null, null, null);
		$(window).bind('resize', function() {
			$("#result_table").jqGrid('setGridHeight', $("#main_table").height() - 23);
			$("#result_table").jqGrid('setGridWidth', $("#main_table").width());
		}).trigger('resize');
		reload("#result_table", "./evaluation/selectCongestion.do", param, "resultList");
	}
	
}

function reload(gridId, url, params, jsonRoot) {
	showLoader();
	$(gridId).jqGrid("clearGridData");
	ajaxCall(url, params, null, onLoadSuccess, null);
	function onLoadSuccess(data) {
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
		dataObject.name = grid_value.basic_col;
		dataObject.data = [];
		$.each(model, function(model_index, model_value){
			if(model_value.index != "basic_col"){
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
	
	$("#date_month_selector").change(function(){
		if($("#date_month_selector option:selected").val() == 8){
			var to_date = document.getElementsByClassName("in145");
			to_date[0].type = "date";
			to_date[1].type = "date";
		}
		else{
			var to_month = document.getElementsByClassName("in145");
			to_month[0].type = "month";
			to_month[1].type = "month";
		}
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
		
	$("#btn_search").click(function(){
		loadGrid();
	});
	
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	// 저장기능
	$("#btn_excel").click(function(){
		if(0 < $("#busstop_detail_table").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#result_table");
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