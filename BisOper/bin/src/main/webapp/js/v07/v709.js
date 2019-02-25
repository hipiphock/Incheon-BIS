$(document).ready(function(){
	appendLoader("조회중..");
	initPicker();
	initEvent();
	initGrid();
});



var models = [
        {label:"노선ID",			name:"routeid",			index:"routeid",		width: "140", 	align:"center", sorttype:"text"},
        {label:"노선번호",		    name:"routeno",			index:"routeno",		width: "140", 	align:"center", sorttype:"text"},
        {label:"수집율(%)",		name:"avgp1", 			index:"avgp1",          width: "87", 	align:"center",   sorttype:"text"}
       ];
var models1 = [
              {label:"노선ID",			name:"routeid",			index:"routeid",			width: "74", 	align:"center", sorttype:"text"},
              {label:"버스ID",		    name:"busid",			index:"busid",				width: "80", 	align:"center", sorttype:"text"},
              {label:"수집율(%)",			name:"percnt1", 		index:"percnt1",            width: "60", 	align:"center", sorttype:"text"},
              {label:"순번",				name:"real_runord", 	index:"real_runord",	    width: "50", 	align:"center", sorttype:"text"},
              {label:"시작시각",			name:"run_startdt",		index:"run_startdt",		width: "130", 	align:"center", sorttype:"text"},
              {label:"종료시각",		    name:"run_enddt",		index:"run_enddt",			width: "130", 	align:"center", sorttype:"text"},
              {label:"시작순번",			name:"start_pathseq", 	index:"start_pathseq",      width: "60", 	align:"center", sorttype:"text"},
              {label:"종료순번",			name:"end_pathseq",		index:"end_pathseq",		width: "60", 	align:"center", sorttype:"text"},
              {label:"정류소검지수",		    name:"bstop_arriv_cnt",	index:"bstop_arriv_cnt",	width: "80", 	align:"center", sorttype:"text"},
              {label:"교차로검지수",		    name:"cross_pass_cnt",	index:"cross_pass_cnt",		width: "80", 	align:"center", sorttype:"text"},
              {label:"총노드수",		    name:"total_nodecnt",	index:"total_nodecnt",		width: "70", 	align:"center", sorttype:"text"},
             ];

var start_time;	
var end_time;
var percnt1;

function initGrid(){
	makeGrid("#route_list", models, 110, "resultList", onSelected, onComplete1, null);
	makeGrid("#bus_list", models1, 110, "resultList", null, onComplete2, null);
	
	function onSelected(rowid){
		var rowData = $("#route_list").jqGrid('getRowData', rowid);
		loadGrid2(rowData.routeid)
	}
	
	function onComplete1(data){
		hideLoader();
		if(data.rows[0]){
			$("#route_list").jqGrid('setSelection',1)
		}
		$("#search_count").text("노선별 평균 수집율 "+data.records+"건");
	}
	function onComplete2(data){
		$("#search_count2").text("차량별 수집율 검색 결과 "+data.records+"건");
		hideLoader();
	}
	
	$(window).bind('resize', function() {
		$("#route_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#route_list").jqGrid('setGridWidth', $(".main_chart").width());
		$("#bus_list").jqGrid('setGridHeight', $(".subcon2_right").height()-23);
		$("#bus_list").jqGrid('setGridWidth', $(".subcon2_right").width());
	}).trigger('resize');
	loadGrid();
}

function loadGrid(option){
	showLoader();
	start_time = $("#start_date").datepicker("getDate");
	end_time = $("#end_date").datepicker("getDate");
	end_time.setDate(end_time.getDate()+1);
	percnt1 = $("#option_percent").val();
	while(percnt1>100){
		percnt1=percnt1/10;
	}
	
	var params = {
		start_time : TimetoDay(start_time),
		end_time : TimetoDay(end_time),
		percnt1 : parseInt(percnt1)
	}
	reloadGrid("#route_list", "./stop/selectRouteAvgPercnt.do", params, "resultList");
}

function loadGrid2(routeid){
	showLoader();
	start_time = $("#start_date").datepicker("getDate");
	end_time = $("#end_date").datepicker("getDate");
	end_time.setDate(end_time.getDate()+1);
	percnt1 = $("#option_percent").val();
	
	var params = {
		start_time : TimetoDay(start_time),
		end_time : TimetoDay(end_time),
		percnt1 : parseInt(percnt1),
		routeid : routeid
	}
	reloadGrid("#bus_list", "./stop/selectBusAvgPercnt.do", params, "resultList");
}

function TimetoDay(time){
	var year = time.getFullYear();
	var month =	time.getMonth()+1;
	var date = time.getDate();
	if(month<10)
		month = "0"+month;
	if(date<10)
		date = "0"+date;
	return String(year)+String(month)+String(date);
}

function initEvent(){
	$("#btn_search").click(function(){
		loadGrid($("#option_percent").val());
	})
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	
	$("#option_percent").keypress(function(e) {
		  if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$("#option_percent").change(function(){
		var value = $(this).val();
		while(value>100){
			value=value/10
			$(this).val(parseInt(value));
		}
		if(value<0)
			$(this).val(0)
	})
	//파일 저장
	$("#btn_excel1").click(function(){
		if( 0 < $("#route_list").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text() + " - " + $("#search_count").text(), "#route_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	$("#btn_excel2").click(function(){
		if( 0 < $("#bus_list").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text() + " - " + $("#search_count2").text(), "#bus_list");
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
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일전
	
	$("#start_date").val($.datepicker.formatDate(YEAR_FORMAT1, prev));	
}
