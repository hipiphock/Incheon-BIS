$(document).ready(function(){
	appendLoader("조회중..");
	initGrid();
	initEvent();
	initPicker();
});

var models1 = [
        {label:"버스회사",			name:"compnm",			index:"compnm",				width: "147", 	align:"left",   sorttype:"text"},
        {label:"노선ID",			name:"routeid",			index:"routeid",			width: "180", 	align:"center", sorttype:"text"},
        {label:"노선번호",			name:"routeno",			index:"routeno",			width: "180", 	align:"center", sorttype:"text"},
        {label:"노선유형",			name:"routetpcdnm", 	index:"routetpcdnm",	    width: "80", 	align:"center", sorttype:"text"},
        {label:"(인)운행대수",		name:"lic_buscnt",		index:"lic_buscnt",			width: "140", 	align:"center", sorttype:"text"},
        {label:"운행대수",		    name:"runcnt",			index:"runcnt",				width: "140", 	align:"center", sorttype:"text"},
        {label:"증차여부",			name:"runsts", 	   		index:"runsts",	      	  	width: "80", 	align:"center", sorttype:"text"},
        ];

var models2 = [
        {label:"버스회사",			name:"compnm",			index:"compnm",				width: "95", 	align:"center", sorttype:"text"},
        {label:"차량번호",		    name:"carregno",		index:"carregno",			width: "90", 	align:"center", sorttype:"text"},
        {label:"등록상태",			name:"busstatcd", 	    index:"busstatcd",	       	width: "60", 	align:"center", sorttype:"text"},
        {label:"저상유무",			name:"lowplateyn",		index:"lowplateyn",			width: "60", 	align:"center", sorttype:"text"}
        ];


function initGrid(){
	ajaxCall("./stop/selectCompList.do", null, null, comp_list, null);
	makeGrid("#route_result", models1, 110, "resultList", onSelected, onComplete1, null);
	makeGrid("#bus_result", models2, 110, "resultList", null, onComplete2, null);

	function onSelected(rowid){
		var rowData = $("#route_result").jqGrid('getRowData', rowid);
		loadGrid2(rowData.routeid)
	}
	function onComplete1(data){
		hideLoader();
		$("#search_count").text("노선별 운행 대수 "+data.records+"건");
	}
	function onComplete2(data){
		hideLoader();
		$("#search_count2").text("운행 버스 목록 "+data.records+"건");
	}
	$(window).bind('resize', function() {
		$("#route_result").jqGrid('setGridHeight', $("#grid1").height()-23);
		$("#route_result").jqGrid('setGridWidth', $("#grid1").width());
		$("#bus_result").jqGrid('setGridHeight', $("#grid2").height()-23);
		$("#bus_result").jqGrid('setGridWidth', $("#grid2").width());
	}).trigger('resize');
}

function loadGrid1(){
	showLoader();
	
	var start_time = $("#start_date").datepicker("getDate");
	
	var params = {
			compid : $("#option_company option:selected").val(),
			routeid : $("#option_route option:selected").val(),
			start_time : TimetoDay(start_time)
	};
	
	console.log(params);
	reloadGrid("#route_result", "./stop/selectRouteRunList.do", params, "resultList");
}

function loadGrid2(routeid){
	showLoader();
	var start_time = $("#start_date").datepicker("getDate");
	
	var params = {
			routeid : routeid,
			start_time : TimetoDay(start_time)
	};
	console.log(params);
	reloadGrid("#bus_result", "./stop/selectBusRunList.do", params, "resultList");
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


function comp_list(data){
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.compnm;
		temp.value = value.compid;
		$("#option_company").append(temp);
	})
	ajaxCall("./route/selectRouteList.do", null, null, route_list ,null)
}

function route_list(data){
	$("#option_route").find("option").remove();
//	var temp = document.createElement('option');
//	temp.innerHTML = "전체";
//	temp.value = 0;
//	$("#option_route").append(temp);
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid;
		$("#option_route").append(temp);
	});
	
	loadGrid1();
}

function initEvent(){
	$("#btn_search").click(function(){
		loadGrid1();
	})
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	$("#option_company").change(function(){
		var value=$("#option_company option:selected").val();
		if(value==0)
			ajaxCall("./route/selectRouteList.do", null, null, route_list ,null)
		else
			ajaxCall("./stop/selectRouteListWithComp.do", {compid : value}, null, route_list, null);
	})	
	//파일 저장
	$("#btn_excel1").click(function(){
		if( 0 < $("#route_result").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text() + " - " + $("#search_count").text(), "#route_result");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	$("#btn_excel2").click(function(){
		if( 0 < $("#bus_result").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text() + " - " + $("#search_count2").text(), "#bus_result");
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