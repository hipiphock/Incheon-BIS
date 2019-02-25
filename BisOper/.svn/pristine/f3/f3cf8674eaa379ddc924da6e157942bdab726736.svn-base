$(document).ready(function(){
	appendLoader("조회중..");
	initEvent();
	initPicker();
	initGrid();
});

var models = [
              {label:"버스회사",			name:"compnm",				index:"compnm",			width: "92", 	align:"left",   sorttype:"text"},
              {label:"노선ID",		    name:"routeid",				index:"routeid",		width: "55", 	align:"center", sorttype:"text"},
              {label:"노선번호",		    name:"routeno",				index:"routeno",		width: "50", 	align:"center", sorttype:"text"},
              {label:"차량ID",			name:"busid", 				index:"busid",       	width: "45", 	align:"center", sorttype:"text"},
              {label:"차량번호",			name:"carregno", 			index:"carregno",       width: "70", 	align:"center", sorttype:"text"},
              {label:"운행회차",		    name:"runord",				index:"runord",			width: "50", 	align:"center", sorttype:"text"},
              {label:"운행시작시간",			name:"run_startdt", 		index:"run_startdt",    width: "105", 	align:"center", sorttype:"text"},
              {label:"운행종료시간",		    name:"run_enddt",			index:"run_enddt",		width: "105", 	align:"center", sorttype:"text"},
              {label:"시작정류소",			name:"start_stopnm", 		index:"start_stopnm",   width: "130", 	align:"left",   sorttype:"text"},
              {label:"종료정류소",		    name:"end_stopnm",			index:"end_stopnm",		width: "130", 	align:"left",	sorttype:"text"},
              {label:"검지수(도착/출발)",		name:"total_bstopcnt", 		index:"total_bstopcnt", width: "95", 	align:"center", sorttype:"text"},
             ];
var models1 = [
               {label:"순번",				name:"pathseq",			index:"pathseq",			width: "30", 	align:"center", sorttype:"text"},
               {label:"정류소명",		    name:"nodenm",			index:"nodenm",				width: "103", 	align:"left",	sorttype:"text"},
               {label:"방향",				name:"dircd", 			index:"dircd",         		width: "30", 	align:"center", sorttype:"text"},
               
               {label:"도착시간",			name:"arrivtm", 		index:"arrivtm",	    	width: "45", 	align:"center", sorttype:"text"},
               {label:"출발시간",			name:"starttm",			index:"starttm",			width: "45", 	align:"center", sorttype:"text"},
               {label:"정차시간",			name:"stop_time",		index:"stop_time",			width: "45", 	align:"center", sorttype:"text"}
               
               ];


var EditRoute = false;

function initGrid(){
	ajaxCall("./stop/selectCompList.do", null, null, comp_list, null);
	makeGrid("#route_search_list", models, 110, "resultList", onSelected, onComplete1, null);
	makeGrid("#event_list", models1, 110, "resultList", null, onComplete2, null);
	
	function onSelected(rowid){
		var rowData = $("#route_search_list").jqGrid('getRowData', rowid);
		var startdt = (rowData.run_startdt).replace(/\//gi, "").replace(/:/gi, "").replace(" ", "");
		var enddt = (rowData.run_enddt).replace(/\//gi, "").replace(/:/gi, "").replace(" ", "");
		loadGrid2(rowData.routeid, rowData.busid, startdt, enddt);
//		$("#search_regno").val(rowData.carregno);
		//차량 번호 회차
		var title = rowData.carregno + " " + rowData.runord + "회차 운행이력";
		$("#search_count2").text(title);
	}
	
	function onComplete1(data){
		hideLoader();
		$("#search_count").text("운행회차 검색 결과  "+data.records+"건");
	}
	function onComplete2(data){
		hideLoader();
//		$("#search_count2").text("정류소별 운행이력 검색 결과  "+data.records+"건");
	}
	
	$(window).bind('resize', function() {
		$("#route_search_list").jqGrid('setGridHeight', $("#grid1").height()-23);
		$("#route_search_list").jqGrid('setGridWidth', $("#grid1").width());
		$("#event_list").jqGrid('setGridHeight', $("#grid2").height()-23);
		$("#event_list").jqGrid('setGridWidth', $("#grid2").width());
	}).trigger('resize');
}

function loadGrid(routeid){
	showLoader();
	var start_time = ($("#start_date").val()).replace(/-/gi, "");
	var params = {
		start_time : start_time,
		routeid : routeid, 
		compid : $("#option_company option:selected").val(),
		searchWord : $("#search_regno" ).val()
	}
	reloadGrid("#route_search_list", "./stop/selectBusWithStat2.do",params, "resultList");
}

function loadGrid2(routeid, busid, startdt, enddt){
	showLoader();
	var params = {
			searchWord : ($("#start_date").val()).replace(/-/gi, ""),
			routeid : routeid,
			busid : busid,
			start_time : startdt,
			end_time : enddt
//			start_time : "20150101010101",
//			end_time :   "20181212121212"
	}
	console.log(params);
		
	reloadGrid("#event_list", "./stop/selectStartArrivTimeList.do", params, "resultList");
}

function comp_list(data){
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.compnm;
		temp.value = value.compid;
		$("#option_company").append(temp);
	})
	$("#option_company").trigger("change");
}

function route_list(data){
	EditRoute = true;
	$("#option_route").find("option").remove();
	var temp = document.createElement('option');
	temp.innerHTML = "전체";
	temp.value = 0;
	$("#option_route").append(temp);
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid;
		$("#option_route").append(temp);
	})
	$("#option_route option").eq(0).attr("selected","selected");
	EditRoute = false;
}


function initEvent(){
	$("#btn_search").click(function(){
		loadGrid($("#option_route option:selected").val());
		$("#event_list").jqGrid('clearGridData');
	})
	$("#search_regno" ).keypress(function(e) {
		if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	$("#option_company").change(function(){
		var value=$("#option_company option:selected").val();
		ajaxCall("./stop/selectRouteListWithComp.do", {compid : value}, null, route_list, null);
	})
	//파일 저장
	$("#btn_excel1").click(function(){
		if( 0 < $("#route_search_list").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text() + " - " + $("#search_count").text(), "#route_search_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	$("#btn_excel2").click(function(){
		if( 0 < $("#event_list").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text() + " - " + $("#search_count2").text(), "#event_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

function execlDownload(title,grid_id){
	$("#excelDown").remove();
	var grid = $(grid_id);
	
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST";
	
	var fileName = JSON.stringify(title)
	var param = document.createElement('INPUT');     
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid('getGridParam','colNames'));
	
	var idData = grid.jqGrid('getGridParam','colModel');
	var columnName = [];
	$.each(idData,function(index,value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type  = 'HIDDEN';
	param.name  = 'json';
	param.value = fileName + columnLabel + columnName + columnData;
	
	form.appendChild(param);
	
	document.body.appendChild(form);	
	inquiryFileDownload("excelDown", true);
}

function initPicker(){
	initCalendar("start_date", YEAR_FORMAT1, true);
	initCalendar("end_date", YEAR_FORMAT1, true);
	initTimePicker("start_time", TIME_FORMAT3, true);	
	initTimePicker("end_time", TIME_FORMAT3, true);
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일전
	
	$("#start_date").val($.datepicker.formatDate(YEAR_FORMAT1, prev));	
}