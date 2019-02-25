/**
 * get param from jsp
 */

var selectedRoute = "";
var trustMap = new HashMap();
var optText;

$(document).ready(function(){
	var arr = STOP_ID.split("_");
	STOP_ID = arr[0];
	STOP_NAME = arr[1];
	
	initGrid();
	initialize();
});

function initialize() {
	
	//title set
    var y1 = START_DATE_TIME.substr(0, 4);
    var m1 = START_DATE_TIME.substr(4, 2);
    var d1 = START_DATE_TIME.substr(6, 2);
    var h1 = START_DATE_TIME.substr(8, 2);
    var M1 = START_DATE_TIME.substr(10, 2);
    var s1 = START_DATE_TIME.substr(12, 2);
    var y2 = END_DATE_TIME.substr(0, 4);
    var m2 = END_DATE_TIME.substr(4, 2);
    var d2 = END_DATE_TIME.substr(6, 2);
    var h2 = END_DATE_TIME.substr(8, 2);
    var M2 = END_DATE_TIME.substr(10, 2);
    var s2 = END_DATE_TIME.substr(12, 2);
    var tText = "[BIT ID : " + BIT_ID + "] - " + STOP_NAME + "</br>";
	var sDate = "(" + y1+"-"+m1+"-"+d1+ " " + h1+":"+M1+":"+s1+" ~ ";
	var eDate = y2+"-"+m2+"-"+d2+ " " + h2+":"+M2+":"+s2+" )";
	var tRange = " / " + START_RANGE + "~" + END_RANGE +"전 구간 기준" 
	
	$("#text_title").html(tText+sDate+eDate+tRange);
	$("#text_range").text(" " + START_RANGE + " ~ " + END_RANGE +" 전 구간");
	$(".opt").click(function() {
		
		if($(this).hasClass("selected")) return;
		
		$(".opt").removeClass("selected");
		$(this).addClass("selected");
		
		var id = $(this).attr("id");
		optText = getTitleText(id);
		
		$("#chart_opt_txt").text(optText);
		$("#input_chart_opt").val(id);
		
		//TODO draw chart
		drawChart();
	});
	
}


var models1 = [
		{onlyView: true, 
		 label:'노선명',		 name:'route_name',         index:'route_name',        	width: "48",    sorttype:"text", 	        align:"center"},
     	{label:'노선ID',		 name:'route_id',       	index:'route_id', 	        width: "80",    sorttype:"text", 	    	align:"center"},
     	{label:'차량번호',	     name:'plate_no',         	index:'plate_no', 		    width: "85",    sorttype:"text",	    	align:"center"},
     	{label:'남은지점',		 name:'rest_stop',      	index:'rest_stop',        	width: "50",    sorttype:"text", 	    	align:"center"},
     	{label:'현재정류장',		 name:'current_stop',     	index:'current_stop',      	width: "150",   sorttype:"text",		    align:"left"},
     	{label:'모바일ID',		 name:'current_service_id', index:'current_service_id', width: "65",    sorttype:"text",	        align:"center"},
     	{label:'정류장ID',		 name:'current_stop_id',    index:'current_stop_id',    width: "80",    sorttype:"text", 	    	align:"center"},
     	{label:'전송시간',	     name:'send_dt',            index:'send_dt',      		width: "110",   sorttype:"text", 	    	align:"center"},
     	{label:'도착예정시간',   	 name:'estimate_dt',        index:'estimate_dt',        width: "110",   sorttype:"text",	   	 	align:"center"},
     	{label:'실재도착 시간',    name:'arrival_dt',         index:'arrival_dt',         width: "110",   sorttype:"text",	   	 	align:"center"},
     	{label:'도착예정정보(분)', name:'provide_time',       index:'provide_time', 		width: "90",    sorttype:"number",	   		align:"center"},
     	{label:'예측시간(초)',    name:'arrival_time',      index:'arrival_time',  		width: "90",    sorttype:"number",	    	align:"center"},
     	{label:'오차시간(초)',    name:'error',          	index:'error',  			width: "90",    sorttype:"number",	    	align:"center"},
     	{label:'오차범위내 여부',   name:'error_pass_flag',    index:'error_pass_flag',  	width: "100",   sorttype:"text",	    	align:"center"}
     	];

function initGrid() {
	
	makeGrid("#trust_detail_list", models1, 110, "resultList", onSelected, null, null);
	
	function onSelected(rowid){
		var rowData = $("#trust_detail_list").jqGrid("getRowData", rowid);
		if(selectedRoute != "" && selectedRoute == rowData.route_id) return;
		$("#txt_route").text(rowData.route_name +"번 [" +rowData.route_id+"]");
		inquiryChartData(rowData.route_id);
	}
	
	$(window).bind('resize', function() {
		$("#trust_detail_list").jqGrid('setGridHeight',$(".do705_left_wrap").height() - 23);
		$("#trust_detail_list").jqGrid('setGridWidth',$(".do705_left_wrap").width());
	}).trigger('resize');
	
	var params = {
		bit_id : BIT_ID,
		stop_id : STOP_ID,
		start_range : START_RANGE,
		end_range : END_RANGE,
        start_date_time : START_DATE_TIME,
        end_date_time : END_DATE_TIME
    };
	
	reloadGrid("#trust_detail_list", "./bit/selectArrivalTrustInfo.do", params, "resultList");
}

function inquiryChartData(routeId) {

	selectedRoute = routeId;
	
	var params = {
			route_id : routeId,
			bit_id : BIT_ID,
			stop_id : STOP_ID,
			start_range : START_RANGE,
			end_range : END_RANGE,
	        start_date_time : START_DATE_TIME,
	        end_date_time : END_DATE_TIME
    };
	
	ajaxCall("./bit/selectTrustChartList.do", params, null, onSuccess, null);

	function onSuccess(data) {
		trustMap = classifyTrustData(data);
		
		drawChart();
	}
}

function drawChart() {
	var opt = $("#input_chart_opt").val();
	setChart2d("chart", "column", getChartOption(getTitleText(opt), trustMap, opt));
}

function classifyTrustData(data) {
	
	var map = new HashMap();
	var arrRange = [];
	var curRange = 0;
	
	$.each(data.resultList, function(index, value) {
		
		if(Number(value.rest_stop) != curRange) {
			if(curRange != 0) {
				map.put(curRange, arrRange);
			}
			curRange = Number(value.rest_stop);
			arrRange = new Array();
			arrRange.push(value);
		}else {
			arrRange.push(value);
		}
		if(index == (data.resultList.length-1)){
			map.put(curRange, arrRange);   
		}
	});
	
	return map;
}

function getTitleText(opt) {
	var temp = "";
	switch (opt) {
	case "MIN":
		temp = "오차 최소값";
		break;
	case "MAX":
		temp = "오차 최대값";
		break;
	case "AVG":
		temp = "오차 평균값";
		break;
	case "SUM":
		temp = "오차 합계";
		break;
	}
	return temp;
}

//temp
function getChartOption(title, dataMap, order) {
	
//	if (!data || data.resultList.length < 1) return;
	
	var categories = new Array(); //xAxis
	
	var yData = "";
	
	for(var i = START_RANGE; i <= END_RANGE; i++) {
		categories.push(i);
		var rangeArr = dataMap.get(i);
		switch (order) {
		case "MIN":
			if(rangeArr != null) {
				if(rangeArr.length > 1) rangeArr.sort(sortMin);
				yData += rangeArr[0].error + ",";
			}else {
				yData += "0,";
			}
			break;
		case "MAX":
			if(rangeArr != null) {
				if(rangeArr.length > 1) rangeArr.sort(sortMax);
				yData += rangeArr[0].error + ",";
			}else {
				yData += "0,";
			}
			break;
		case "AVG":
			if(rangeArr != null) {
				var cnt = rangeArr.length;
				var total = 0;
				$.each(rangeArr, function(index, value) {
					total += Number(value.error);
				});
				var avg = total / cnt;
				yData += avg.toFixed(5) + ",";
			}else {
				yData += "0,";
			}
			break;
		default:
			break;
		}
	}
	var chartOpt = new Object();
	chartOpt.title  = "";
	//	chartOpt.subtitle = "";
	chartOpt.xAxis = new Object();
	chartOpt.xAxis = {
			title: {
    			text: "잔여 정류장 개수" 
			},
			categories: categories
	};
//	chartOpt.xAxis.categories = categories;
	chartOpt.yAxis = {
			title: {
    			text: title 
			},
			plotLines: [{
				value: 0
				,width: 1
				,color: '#808080' //TODO
			}]
	};
		
	chartOpt.series = new Array();
	chartOpt.series = [
           {
        	   name: title
        	   ,data: eval("[" + yData.substring(0, yData.length - 1) + "]")
           }];
	return chartOpt;
}

/***************************************
 * json 정렬 template
 * usage : jsonArrName.sort(sortMin);
 ***************************************/
function sortMin(a, b) {
	if(a.error == b.error){ 
		return 0;
	} 
	return Number(a.error) > Number(b.error) ? 1 : -1;
}
function sortMax(a, b) {
	if(a.error == b.error){ 
		return 0;
	} 
	return Number(a.error) < Number(b.error) ? 1 : -1;
}

