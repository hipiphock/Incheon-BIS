$(document).ready(function(){
	appendLoader("조회중..");
	initGrid();
	initPicker();
	initEvent();
});


var models = [
              {label:"버스ID",			name:"busid",				index:"busid",			width: "127", 	align:"center", sorttype:"text"},
              {label:"차량번호",		    name:"carregno",			index:"carregno",		width: "120", 	align:"center", sorttype:"text"},
              {label:"등록상태",			name:"busstatnm", 			index:"busstatnm",      width: "120", 	align:"center", sorttype:"text"}
             ];
var models1 = [
               {label:"버스회사",			name:"compnm",			index:"compnm",				width: "100", 	align:"left", sorttype:"text"},
               {label:"노선번호",		    name:"routeno",			index:"routeno",			width: "60", 	align:"center", sorttype:"text"},
               {label:"차량번호",			name:"carregno", 		index:"carregno",           width: "80", 	align:"center", sorttype:"text"},
               
               {label:"운행회차",			name:"real_runord", 	index:"real_runord",	    width: "60", 	align:"center", sorttype:"text"},
               {label:"시작시간",			name:"run_startdt",		index:"run_startdt",		width: "120", 	align:"center", sorttype:"text"},
               {label:"종료시간",		    name:"run_enddt",		index:"run_enddt",			width: "120", 	align:"center", sorttype:"text"},
               {label:"시작정류소",			name:"start_pathseq", 	index:"start_pathseq",      width: "140", 	align:"left", sorttype:"text"},
               {label:"종료정류소",			name:"end_pathseq",		index:"end_pathseq",		width: "140", 	align:"left", sorttype:"text"},
               {label:"검지노드",		    name:"detect_nodecnt",	index:"detect_nodecnt",		width: "60", 	align:"center", sorttype:"text"},
               {label:"운행거리",		    name:"rundist",			index:"rundist",			width: "60", 	align:"center", sorttype:"text"},
               {label:"운행시간",		    name:"runtm",			index:"runtm",				width: "60", 	align:"center", sorttype:"text", formatter:time_form},
               
               {label:"과속",				name:"overspdcnt", 		index:"overspdcnt",         width: "40", 	align:"center", sorttype:"text"},
               {label:"급가속",			name:"accelcnt", 		index:"accelcnt",           width: "40", 	align:"center", sorttype:"text"},
               {label:"급감속",			name:"decelcnt", 		index:"decelcnt",           width: "40", 	align:"center", sorttype:"text"},
               {label:"개문주행",			name:"openruncnt", 		index:"openruncnt",         width: "50", 	align:"center", sorttype:"text"},
               {label:"노선이탈",			name:"outroutecnt", 	index:"outroutecnt",        width: "50", 	align:"center", sorttype:"text"},
               {label:"무정차",			name:"stopskipcnt", 	index:"stopskipcnt",        width: "40", 	align:"center", sorttype:"text"},
               {label:"임의지연",			name:"voldelaycnt", 	index:"voldelaycnt",        width: "50", 	align:"center", sorttype:"text"},
                                                                                                                   
               {label:"고장",				name:"trblcnt", 		index:"trblcnt",            width: "40", 	align:"center", sorttype:"text"},
               {label:"사고",				name:"accidcnt", 		index:"accidcnt",           width: "40", 	align:"center", sorttype:"text"},
               {label:"긴급",				name:"emgcycnt", 		index:"emgcycnt",           width: "40", 	align:"center", sorttype:"text"}
               
               ];

function time_form(cellValue){
	return (parseInt(cellValue/100))+'분'+(cellValue%100)+'초';
}

function initGrid(){
	ajaxCall("./stop/selectCompList.do", null, null, comp_list, null);
	makeGrid("#route_search_list", models, 110, "resultList", onSelected, onComplete1, null);
	makeFilterGrid("#event_list", models1, 110, "resultList", null, onComplete2, null);
	function onSelected(rowid){
		var rowData = $("#route_search_list").jqGrid('getRowData', rowid);
		loadGrid2(rowData.carregno);
		$("#search_regno").val(rowData.carregno);
	}
	
	function onComplete1(data){
		hideLoader();
		/*왼쪽그리드 로드시 자동으로 오른쪽그리드 갱신
		if(data.rows[0]){
			$("#route_search_list").jqGrid('setSelection',1)
		}
		else{
			$("#event_list").jqGrid('clearGridData');
		}
		*/
		$("#search_count").text("버스검색 결과  "+data.records+"건");
	}
	
	function onComplete2(data){
		hideLoader();
		$("#search_count2").text("회차별 운행이력 검색 결과  "+data.records+"건");
	}
	
	
	$(window).bind('resize', function() {
		$("#route_search_list").jqGrid('setGridHeight', $("#grid1").height()-23);
		$("#route_search_list").jqGrid('setGridWidth', $("#grid1").width());
		$("#event_list").jqGrid('setGridHeight', $("#grid2").height()-45);
		$("#event_list").jqGrid('setGridWidth', $("#grid2").width());
	}).trigger('resize');
	
	$("#event_list").jqGrid('setGroupHeaders', {
		  groupHeaders:[
			{ startColumnName: 'compnm', numberOfColumns: 3, titleText: "기본정보" },
			{ startColumnName: 'real_runord', numberOfColumns: 8, titleText: "운행정보" },
			{ startColumnName: 'overspdcnt', numberOfColumns: 7, titleText: "위반건수" },
			{ startColumnName: 'trblcnt', numberOfColumns: 3, titleText: "돌발건수" }
		  ]
    });
	$("#check_detail").change(function(){
		if($(this).is(":checked")) {
			setFilter("event_list", true);
			$("#event_list").jqGrid('setGridHeight',$("#grid2").height() - 45 - 29);

			var tempgrid = $("#event_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("event_list", false);
			$("#event_list").jqGrid('setGridHeight',$("#grid2").height() - 45);
			
			$("#event_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
}

function loadGrid(routeid){
	showLoader();
	
	var params = {
		routeid : routeid, 
		compid : $("#option_company option:selected").val()
	}
	reloadGrid("#route_search_list", "./stop/selectBusWithStat.do",params, "resultList");
}

function loadGrid2(carregno){ 
	if(carregno.length<2){
		showAlert("차량번호를 2자리 이상 입력해주세요");
		return;
	}
	showLoader();
	var start_time = $("#start_date").datepicker("getDate");
	var end_time = $("#start_date").datepicker("getDate");
	end_time.setDate(end_time.getDate()+1);
	var routeid = $("#option_route option:selected").val();
	var compid = $("#option_company option:selected").val();

	var params = {
		start_time : TimetoDay(start_time),
		end_time : TimetoDay(end_time),
		carregno : carregno,
		compid : compid,
		routeid : routeid
	}
	
	$("#event_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#event_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);

	console.log(params)
	reloadGrid("#event_list", "./stop/selectBusRunEvent.do", params, "resultList");
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

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	// ex : 2017101501
	return date + time;
}

function comp_list(data){
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.compnm;
		temp.value = value.compid;
		$("#option_company").append(temp);
	})
	ajaxCall("./stop/selectRouteListWithComp.do", {compid : $("#option_company option:selected").val()}, null, route_list, null);
	loadGrid($("#option_route option:selected").val());
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
	});
	EditRoute = false;
	$("#option_route option").eq(0).attr("selected","selected");
	loadGrid($("#option_route option:selected").val());
}


function initEvent(){
	$("#btn_search").click(function(){
		loadGrid2($("#search_regno").val());
		$("#route_search_list").jqGrid('resetSelection');
	});
	$("#search_regno" ).keypress(function(e) {
		if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	$("#option_company").change(function(){
		ajaxCall("./stop/selectRouteListWithComp.do", {compid : $("#option_company option:selected").val()}, null, route_list, null);
	});
	$("#option_route").change(function(){
		loadGrid($("#option_route option:selected").val());
	});
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