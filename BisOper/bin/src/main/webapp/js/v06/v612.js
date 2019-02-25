$(document).ready(function(){
	appendLoader("조회중..");
	initEvent();
	initPicker();
	initGrid();
});


var models1 = [
              {label:"노선ID",			name:"routeid",			index:"routeid",			width: "80", 	align:"center", sorttype:"text"},
              {label:"노선번호",		    name:"routeno",			index:"routeno",			width: "80", 	align:"center", sorttype:"text"},
              {label:"노선유형",			name:"routetpcd", 		index:"routetpcd",     	 	width: "82", 	align:"left",   sorttype:"text"}
             ];

var models2 = [
              {label:"버스ID",			name:"busid",			index:"busid",				width: "60", 	align:"center", sorttype:"text"},
              {label:"차량번호",		    name:"carregno",		index:"carregno",			width: "98", 	align:"center", sorttype:"text"},
              {label:"버스상태",			name:"busstatnm", 		index:"busstatnm",     		width: "83", 	align:"center", sorttype:"text"}
             ];
var models3 = [
               {label:"노선번호",			name:"routeno",			index:"routeno",			width: "50", 	align:"center", sorttype:"text"},
               {label:"버스ID",		    name:"busid",			index:"busid",				width: "50", 	align:"center", sorttype:"text"},
               {label:"이벤트시각",			name:"evt_occurdt", 	index:"evt_occurdt",        width: "65", 	align:"center", sorttype:"text"},
               {label:"수집시각",			name:"center_colldt", 	index:"center_colldt",	    width: "60", 	align:"center", sorttype:"text"},
               {label:"통신지연",			name:"dtime",			index:"dtime",				width: "50", 	align:"center", sorttype:"text"},
               {label:"노드ID",		    name:"nodeid",			index:"nodeid",				width: "65", 	align:"center", sorttype:"text"},
               {label:"노드명",			name:"nodenm", 			index:"nodenm",      		width: "114", 	align:"left",   sorttype:"text"},
               {label:"검지순번",			name:"detect_nodecnt",	index:"detect_nodecnt",		width: "55", 	align:"center", sorttype:"text"},
               {label:"메시지순번",		    name:"msgseq",			index:"msgseq",				width: "60", 	align:"center", sorttype:"text"},
               {label:"메시지유형",		    name:"evttpcd",			index:"evttpcd",			width: "60", 	align:"center", sorttype:"text"},
               {label:"서브유형",		    name:"evtsubtpcd",		index:"evtsubtpcd",			width: "60", 	align:"center", sorttype:"text"},
               {label:"막차",				name:"lastbusyn", 		index:"lastbusyn",         	width: "35", 	align:"center", sorttype:"text"},
               {label:"공차",				name:"emptybusyn", 		index:"emptybusyn",         width: "35", 	align:"center", sorttype:"text"},
               {label:"문상태",			name:"openstatcd", 		index:"openstatcd",         width: "60", 	align:"center", sorttype:"text"},
               {label:"운행속도",			name:"runspd", 			index:"runspd",         	width: "50", 	align:"center", sorttype:"text"},
               {label:"운행거리",			name:"rundist", 		index:"rundist",        	width: "50", 	align:"center", sorttype:"text"},
               {label:"운행시간",			name:"runtm", 			index:"runtm",        		width: "50", 	align:"center", sorttype:"text"},
              ];

function initGrid(){
	makeGrid("#route_list", models1, 110, "resultList", onSelected1, onComplete, null);
	makeGrid("#bus_list", models2, 110, "resultList", onSelected2, onComplete, null);
	makeGrid("#event_list", models3, 110, "resultList", null, onComplete, null);
	
	function onSelected1(rowid){
		var rowData = $("#route_list").jqGrid('getRowData', rowid);
		loadGrid2(rowData.routeid)
	}
	function onSelected2(rowid){
		var rowData = $("#bus_list").jqGrid('getRowData', rowid);
		loadGrid3(rowData.busid)
		$("#search_busid").val(rowData.busid)
	}
	
	function onComplete(data){
		hideLoader();
	}
	
	$(window).bind('resize', function() {
		$("#route_list").jqGrid('setGridHeight', $("#grid1").height()-23);
		$("#route_list").jqGrid('setGridWidth', $("#grid1").width());
		$("#bus_list").jqGrid('setGridHeight', $("#grid2").height()-23);
		$("#bus_list").jqGrid('setGridWidth', $("#grid2").width());
		$("#event_list").jqGrid('setGridHeight', $("#grid3").height()-23);
		$("#event_list").jqGrid('setGridWidth', $("#grid3").width());
	}).trigger('resize');
	
	loadGrid1();
}

function loadGrid1(){
	showLoader();
	reloadGrid("#route_list", "./stop/selectRouteList.do",null, "resultList");
}

function loadGrid2(routeid){
	showLoader();
	reloadGrid("#bus_list", "./stop/selectBusListWithBusrun.do",{routeid : routeid}, "resultList");
}

function loadGrid3(busid){
	showLoader();
	
	var start_time = replaceDateTime($("#start_date"),$("#start_time"));
	var end_time = replaceDateTime($("#start_date"),$("#end_time"));
		
	var params = {
		start_time : start_time,
		end_time : end_time,
		evttpcd : $("#event_option option:selected").val(),
		busid : busid
	}
	console.log(params)
	reloadGrid("#event_list", "./stop/selectBusMdtCollEvent.do", params, "resultList");
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	// ex : 2017101501
	return date + time;
}

function initEvent(){
	$("#btn_search").click(function(){
		loadGrid3($("#search_busid").val());
		$("#bus_list").jqGrid('resetSelection');
	})
	$("#search_busid" ).keypress(function(e) {
		if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	})

	//파일 저장
	$("#btn_excel").click(function(){
		if( 0 < $("#event_list").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text(), "#event_list");
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
	initTimePicker("start_time", TIME_FORMAT2, true);	
	initTimePicker("end_time", TIME_FORMAT2, true);
	
	var today = new Date();
	var prevDate = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일전
	var prevTime = new Date(Date.parse(today) - 1000 * 60 * 60);
	$("#start_time").timepicker("setTime", prevTime.format(TIME_FORMAT2));
	$("#start_date").val($.datepicker.formatDate(YEAR_FORMAT1, prevDate));	
}