$(document).ready(function(){
	appendLoader("조회중..");
	initGrid();
	initEvent();
	initPicker();
});

var EditRoute=false;

var models = [
        {label:"이벤트일시",			name:"evt_occurdt",		index:"evt_occurdt",		width: "130", 	align:"center", sorttype:"text"},
        {label:"센터수집일시",		name:"center_colldt",	index:"center_colldt",		width: "130", 	align:"center", sorttype:"text"},
        {label:"이벤트유형",			name:"evttype", 	   	index:"evttype",	        width: "65", 	align:"center", sorttype:"text"},
        {label:"상세유형",			name:"evtsubtype",		index:"evtsubtype",			width: "65", 	align:"center", sorttype:"text"},
        {label:"차량번호",		    name:"regno",			index:"regno",				width: "100", 	align:"center", sorttype:"text"},
        {label:"단말기ID",			name:"mdtid", 	   		index:"mdtid",	      	  	width: "65", 	align:"center", sorttype:"text"},
        {label:"버스회사",			name:"compnm",			index:"compnm",				width: "100", 	align:"center", sorttype:"text"},
        {label:"노선번호",		    name:"routeno",			index:"routeno",			width: "45", 	align:"center", sorttype:"text"},
        {label:"노드ID",			name:"nodeid", 	    	index:"nodeid",	       		width: "65", 	align:"center", sorttype:"text"},
        {label:"노드명",			name:"nodenm",			index:"nodenm",				width: "150", 	align:"left",   sorttype:"text"},
        {label:"논리링크명",		    name:"llinknm",			index:"llinknm",			width: "150", 	align:"center", sorttype:"text"},
        {label:"경로순번",			name:"detect_nodecnt", 	index:"detect_nodecnt",	    width: "55", 	align:"center", sorttype:"text"},
        {label:"운행상태",			name:"runstattype",		index:"runstattype",		width: "65", 	align:"center", sorttype:"text"},
        {label:"막차",		    name:"lastbus",			index:"lastbus",			width: "45", 	align:"center", sorttype:"text"},
        {label:"공차",			name:"emptybus", 		index:"emptybus",	        width: "45", 	align:"center", sorttype:"text"},
        {label:"대차",			name:"chgbus",			index:"chgbus",				width: "45", 	align:"center", sorttype:"text"},
        {label:"개문상태",		    name:"openstattype",	index:"openstattype",		width: "65", 	align:"center", sorttype:"text"},
        {label:"긴급",			name:"emgcy", 	   		index:"emgcy",	        	width: "65", 	align:"center", sorttype:"text"},
        {label:"사고",			name:"accid",			index:"accid",				width: "65", 	align:"center", sorttype:"text"},
        {label:"고장",		    name:"trbl",			index:"trbl",				width: "65", 	align:"center", sorttype:"text"},
        {label:"운행위반유형",		name:"runvioltype", 	index:"runvioltype",	    width: "65", 	align:"center", sorttype:"text"},
        {label:"운행속도(km/h)",	name:"runspd",			index:"runspd",				width: "95", 	align:"center", sorttype:"text"},
        {label:"운행거리(m)",		name:"rundist", 	   	index:"rundist",	        width: "75", 	align:"center", sorttype:"text"},
        {label:"운행시간(초)",		name:"runtm",			index:"runtm",				width: "75", 	align:"center", sorttype:"text"},
        {label:"실제운행회차",		name:"real_runord",		index:"real_runord",		width: "75", 	align:"center", sorttype:"text"},
        {label:"정류소정차시간",		name:"bstop_stoptm", 	index:"bstop_stoptm",	    width: "85", 	align:"center", sorttype:"text"},
        ];
		
function initGrid(){
	ajaxCall("./stop/selectCompList.do", null, null, comp_list, null);
	makeGrid("#event_list", models, 110, "resultList", null, onComplete, null);

	function onComplete(data){
		hideLoader();
		$("#search_count").text("통신 수집 이력 조회  "+data.records+"건");
	}
	
	$(window).bind('resize', function() {
		$("#event_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#event_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	//loadGrid();
}

function loadGrid(option){
	var busid = option;
	var start_time = replaceDateTime("#start_date", "#start_time");
	var end_time = replaceDateTime("#end_date", "#end_time");
	
	var test1 = new Date(Number(end_time.substring(0,4)),Number(end_time.substring(4,6))-1,Number(end_time.substring(6,8)),Number(end_time.substring(8,10)));
	var test2 = new Date(Number(start_time.substring(0,4)),Number(start_time.substring(4,6))-1,Number(start_time.substring(6,8)),Number(start_time.substring(8,10)));
	if(test1<test2){
		showAlert("시간이 잘못 설정되었습니다");
		return;
	}
	
	showLoader();
		
	var params = {
			busid : busid,
			start_time : start_time+"0000",
			end_time : end_time+"5959",
			event_type : $("#option_search option:selected").val()
	};
	
	console.log(params);
	reloadGrid("#event_list", "./stop/selectBusEventLog.do", params, "resultList");
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	// ex : 2017101501
	if(time.length==1)
		time="0"+time;
	return date + time;
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
	EditRoute=true;
	$("#option_route").find("option").remove();
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid;
		$("#option_route").append(temp);
	})
	$("#option_route option").eq(0).attr("selected","selected");
	
	if($("#option_route option:selected").val())
		ajaxCall("./stop/selectCarRegNo.do", {routeid : $("#option_route option:selected").val()}, null, regno_list, null);
	else
		$("#option_regno").find("option").remove();
	EditRoute=false;
}

function regno_list(data){
	$("#option_regno").find("option").remove();
	if(!data.resultList)
		return;
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.carregno;
		temp.value = value.busid;
		$("#option_regno").append(temp);
	})
}


function initEvent(){
	$("#btn_search").click(function(){
		loadGrid( $("#option_regno option:selected").val());
	})
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	$(".hour_input").change(function(){
		var value = $(this).val();
		if(value>23)
			$(this).val(value%10)
		else if(value<0)
			$(this).val(0)
	});
	$("#option_route").change(function(){
		if(!EditRoute){
			ajaxCall("./stop/selectCarRegNo.do", {routeid : $("#option_route option:selected").val()}, null, regno_list, null);
		}	
	})
	$("#option_company").change(function(){
		var value=$("#option_company option:selected").val();
		if(value==0)
			ajaxCall("./route/selectRouteList.do", null, null, route_list ,null)
		else
			ajaxCall("./stop/selectRouteListWithComp.do", {compid : value}, null, route_list, null);
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
	initTimePicker("start_time", TIME_FORMAT3, true);	
	initTimePicker("end_time", TIME_FORMAT3, true);
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일전
	
	//$("#start_date").val($.datepicker.formatDate(YEAR_FORMAT1, prev));	
}