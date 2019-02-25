$(document).ready(function(){
	appendLoader("조회중..");
	initGrid();
	initEvent();
	initPicker();
});

var EditRoute=false;

var models = [
        {label:"도착시간",			name:"arrivtm",				index:"arrivtm",				width: "70", 	align:"center", sorttype:"text"},
        {label:"출발시간",			name:"starttm",				index:"starttm",				width: "70", 	align:"center", sorttype:"text"},
        {label:"가공시간",			name:"procdt", 	   			index:"procdt",	       		 	width: "70", 	align:"center", sorttype:"text"},
        {label:"노드명",			name:"nodenm",				index:"nodenm",					width: "137", 	align:"left",   sorttype:"text"},
        {label:"노드ID",		    name:"nodeid",				index:"nodeid",					width: "70", 	align:"center", sorttype:"text"},
        {label:"순번",			name:"pathseq", 	   		index:"pathseq",	      	  	width: "60", 	align:"center", sorttype:"text"},
        
        {label:"차량번호",			name:"ffcarreno",			index:"ffcarreno",				width: "85", 	align:"center", sorttype:"text"},
        {label:"이격",		    name:"ffbus_locgap",		index:"ffbus_locgap",			width: "55", 	align:"center", sorttype:"text"},
        {label:"시격",			name:"ffbus_tmgap", 	    index:"ffbus_tmgap",	       	width: "55", 	align:"center", sorttype:"text"},
        
        {label:"차량번호",			name:"fcarreno",			index:"fcarreno",				width: "85", 	align:"center", sorttype:"text"},
        {label:"이격",		    name:"fbus_locgap",			index:"fbus_locgap",			width: "55", 	align:"center", sorttype:"text"},
        {label:"시격",			name:"fbus_tmgap", 	    	index:"fbus_tmgap",	       		width: "55", 	align:"center", sorttype:"text"},
        
        {label:"차량번호",			name:"ncarreno",			index:"ncarreno",				width: "85", 	align:"center", sorttype:"text"},
        {label:"이격",		    name:"nbus_locgap",			index:"nbus_locgap",			width: "55", 	align:"center", sorttype:"text"},
        {label:"시격",			name:"nbus_tmgap", 	    	index:"nbus_tmgap",	       		width: "55", 	align:"center", sorttype:"text"},
        
        {label:"차량번호",			name:"nncarreno",			index:"nncarreno",				width: "85", 	align:"center", sorttype:"text"},
        {label:"이격",		    name:"nnbus_locgap",		index:"nnbus_locgap",			width: "55", 	align:"center", sorttype:"text"},
        {label:"시격",			name:"nnbus_tmgap", 	    index:"nnbus_tmgap",	       	width: "55", 	align:"center", sorttype:"text"},
        ];


function initGrid(){
	ajaxCall("./stop/selectCompList.do", null, null, comp_list, null);
	makeGrid("#event_list", models, 110, "resultList", null, onComplete, null);
	
	function onComplete(data){
		hideLoader();
		$("#search_count").text("차량 단말기 제공이력 조회 "+data.records+"건");
	}
	$(window).bind('resize', function() {
		$("#event_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#event_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	$("#event_list").jqGrid('setGroupHeaders', {
		  groupHeaders:[
			{ startColumnName: 'arrivtm', numberOfColumns: 6, titleText: "이벤트정보" },
			{ startColumnName: 'ffcarreno', numberOfColumns: 3, titleText: "앞앞차" },
			{ startColumnName: 'fcarreno', numberOfColumns: 3, titleText: "앞차" },
			{ startColumnName: 'ncarreno', numberOfColumns: 3, titleText: "뒤차" },
			{ startColumnName: 'nncarreno', numberOfColumns: 3, titleText: "뒤뒤차" }
		  ]
    });
	//loadGrid();
}

function loadGrid(busid,routeid){
	showLoader();
	
	var time = replaceDateTime("#start_date", "#start_time")
	var start_time = time +"0000";
	var end_time = time +"5959";
		
	var params = {
			busid : busid,
			routeid : routeid,
			start_time : start_time,
			end_time : end_time
	};
	
	console.log(params);
	reloadGrid("#event_list", "./stop/selectBusMdtEvent.do", params, "resultList");
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
		
		var selBus = $("#option_regno option:selected").val();
		console.log("selBus : "+ selBus);
		if(selBus == undefined) {
			showAlert("차량이 선택되지 않았습니다.");
			return;
		}
		loadGrid( $("#option_regno option:selected").val(),$("#option_route option:selected").val());
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
	
	$("#start_date").val($.datepicker.formatDate(YEAR_FORMAT1, prev));	
}