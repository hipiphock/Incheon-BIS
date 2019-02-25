var model = new Array();

$(document).ready(function(){
	appendLoader("로딩중...");
	initBox();
	initEvent();
});

/**
 * 운행정시성통계조회의 경우, 두 가지 경우가 있음.
 * 1. 버스회사가 전체로 나온 경우
 * 	이 경우에는 각각의 버스회사들이 column으로 하나하나 나온다.
 * 2. 하나의 회사만 선택된 경우,
 * 	이 경우에는 그 회사의 버스가 다니는 노선들이 column으로 하나하나 나온다.
 * 
 */

// basic model for bottom layer
var basic_col = {label:"구분",	name:"DT",	index:"DT",	width:"120",	align:"center",		sorttype:"text"};

// 버스회사에서 "전체" 선택시 사용하는 모델
// initBox에서 initialize한다.
var total_company_model = [
	{label:"구분",	name:"DT",	index:"DT",	width:"120",	align:"center",		sorttype:"text"}
];

function initBox(){
	
	// initializing first box - bus company
	ajaxCall("./route/selectCompList.do", null, null, initial_work, null);
	function initial_work(data){
		dealwithCompany(data);
		make_total_company_model(data);
	}
	// function for company selection box
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
	// make total_company_model
	function make_total_company_model(data){
		var parsedData = data.companyList;
		for(var i in parsedData){
			var new_label = parsedData[i].compnm;
			var new_name = parsedData[i].compid;
			var new_index = parsedData[i].compid;
			var obj_to_append = {label:new_label, name:new_name, index:new_index, width:"100", align:"left", sorttype:"text"};
			total_company_model.push(obj_to_append);
		}
	}
}

function loadGrid(){
	
	var date_option = $("#date_month_selector option:selected").val();
	var comp_option = $("#busCompany option:selected").val();
	
	var startdt, enddt;
	
	if(date_option == "8"){ //일별
		startdt = $("#start_date").val().replace(/-/g, '') + "000000";
		enddt = $("#end_date").val().replace(/-/g, '') + "235959";
	} else if(date_option == "9"){//월별
		startdt = $("#start_date").val().replace(/-/g, '') + "01000000";
		enddt = $("#end_date").val().replace(/-/g, '') + "28235959";
	}
	
	var param = {
		compid:				comp_option,
		proccyclcd:			$("#date_month_selector").val(),
		search_start_date:	startdt,
		search_end_date:	enddt,
	};
	
	console.log(param);
	
	// case: "전체"가 선택됨
	if(comp_option == ""){
		$("#result_table").jqGrid("GridUnload");
		makeGrid("#result_table", total_company_model, null, total_completed, null);
		$(window).bind('resize', function() {
			$("#result_table").jqGrid('setGridHeight', $("#main_table").height() - 23);
			$("#result_table").jqGrid('setGridWidth', $("#main_table").width());
		}).trigger('resize');
		reload("#result_table", "./evaluation/selectOperTiming.do", param, "resultList");
	}
	
	// case: 버스회사 하나가 선택됨
	else{
		model = [];
		model.push(basic_col);
		
		ajaxCall("./evaluation/selectRouteColumn.do", param, null, onCompleted, null);
		function onCompleted(data){
			$.each(data.resultList, function(index, value){
				model.push({label:value.routeno, name:value.routeid, index:value.routeid, width:"80", align:"center"});
			});
			$("#result_table").jqGrid("GridUnload");
			makeGrid("#result_table", model, null, one_completed, null);
			$(window).bind('resize', function() {
				$("#result_table").jqGrid('setGridHeight', $("#main_table").height() - 23);
				$("#result_table").jqGrid('setGridWidth', $("#main_table").width());
			}).trigger('resize');
			reload("#result_table", "./evaluation/selectOperTiming.do", param, "resultList");
		}
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

// case: "전체"를 선택했을 때
// x축: 각각의 회사들
// y축: 위반한 횟수
function total_completed(data){
	console.log(data);
	var chartOpt = {
		xAxis:{
			
		},
		yAxis:{
			
		},
		series:[]
	};
	var chart = setChart2d("main_chart", "column", chartOpt);
}

// case: 특정 회사를 선택했을 때
// x축: 각 노선번호
// y축: 위반한 횟수
function one_completed(data){
	console.log(data);
	var chartOpt = {
		xAxis:{
			
		},
		yAxis:{
			
		},
		series:[]
	};
	var chart = setChart2d("main_chart", "column", chartOpt);
}

function initEvent(){
	
	$("#date_month_selector").change(function(){
		if($("#date_month_selector option:selected").val() == 8){
			var to_date = document.getElementsByClassName("in180");
			to_date[0].type = "date";
			to_date[1].type = "date";
		}
		else{
			var to_month = document.getElementsByClassName("in180");
			to_month[0].type = "month";
			to_month[1].type = "month";
		}
	});
	
	$("#busCompany").change(function(){
		
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