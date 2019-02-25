$(document).ready(function(){
	appendLoader("조회중..");
	initGrid();
	initEvent();
	initPicker();
});


var models = [
        {label:"정류소명",			name:"bstopnm",		index:"bstopnm",		width: "200", 	align:"left", frozen:true},
        {label:"정류소ID",		    name:"bstopid",		index:"bstopid",		width: "75", 	align:"center", frozen:true},
        {label:"평균",			name:"dtavg", 	    index:"dtavg",	        width: "75", 	align:"center", frozen:true},
        {label:"",				name:"dt01", 	    index:"dt01",	    	width: "55", 	align:"center"},
        {label:"",				name:"dt02", 	    index:"dt02",	   		width: "55", 	align:"center"},
        {label:"",				name:"dt03", 	    index:"dt03",	   		width: "55", 	align:"center"},
        {label:"",				name:"dt04", 	    index:"dt04",		    width: "55", 	align:"center"},
        {label:"",				name:"dt05", 	    index:"dt05",		    width: "55", 	align:"center"},
        {label:"",				name:"dt06", 	    index:"dt06",		    width: "55", 	align:"center"},
        {label:"",				name:"dt07", 	    index:"dt07",		    width: "55", 	align:"center"},
        {label:"",				name:"dt08", 	    index:"dt08",		    width: "55", 	align:"center"},
        {label:"",				name:"dt09", 	    index:"dt09",		    width: "55", 	align:"center"},
        {label:"",				name:"dt10", 	    index:"dt10",		    width: "55", 	align:"center"},
        {label:"",				name:"dt11", 	    index:"dt11",		    width: "55", 	align:"center"},
        {label:"",				name:"dt12", 	    index:"dt12",		    width: "55", 	align:"center"},
        {label:"",				name:"dt13", 	    index:"dt13",		    width: "55", 	align:"center"},
        {label:"",				name:"dt14", 	    index:"dt14",		    width: "55", 	align:"center"},
        {label:"",				name:"dt15", 	    index:"dt15",		    width: "55", 	align:"center"},
        {label:"",				name:"dt16", 	    index:"dt16",		    width: "55", 	align:"center"},
        {label:"",				name:"dt17", 	    index:"dt17",		    width: "55", 	align:"center"},
        {label:"",				name:"dt18", 	    index:"dt18",		    width: "55", 	align:"center"},
        {label:"",				name:"dt19", 	    index:"dt19",		    width: "55", 	align:"center"},
        {label:"",				name:"dt20", 	    index:"dt20",		    width: "55", 	align:"center"},
        {label:"",				name:"dt21", 	    index:"dt21",		    width: "55", 	align:"center"},
        {label:"",				name:"dt22", 	    index:"dt22",		    width: "55", 	align:"center"},
        {label:"",				name:"dt23", 	    index:"dt23",		    width: "55", 	align:"center"},
        {label:"",				name:"dt24", 	    index:"dt24",		    width: "55", 	align:"center"},
        {label:"",				name:"dt25", 	    index:"dt25",		    width: "55", 	align:"center"},
        {label:"",				name:"dt26", 	    index:"dt26",		    width: "55", 	align:"center"},
        {label:"",				name:"dt27", 	    index:"dt27",		    width: "55", 	align:"center"},
        {label:"",				name:"dt28", 	    index:"dt28",		    width: "55", 	align:"center"},
        {label:"",				name:"dt29", 	    index:"dt29",		    width: "55", 	align:"center"},
        {label:"",				name:"dt30", 	    index:"dt30",		    width: "55", 	align:"center"},
        {label:"",				name:"dt31", 	    index:"dt31",		    width: "55", 	align:"center"}
        ];

var dtArray = new Array(32);
var start_time;	
var end_time; 

function initGrid(){
	ajaxCall("./route/selectRouteList.do", null, null, route_list, null);
	makeGrid("#stop_list", models, 110, "resultList", null, onComplete, null);

	$("#stop_list").jqGrid("setFrozenColumns");
	$(".frozen-bdiv").css("background-color","rgb(255,255,255)");
	
	function onComplete(data){
		hideLoader();
		$("#search_count").text("정류소 통신 수집 현황  "+data.records+"건");
	}
	
	$(window).bind('resize', function() {
		$("#stop_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#stop_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	for(var i=1; i<32; i++)
		HideCol(i);
	//loadGrid();
}

function loadGrid(option){
	showLoader();
	var event_type;
	
	var search_type = $("#search_option option:selected").val()
	if(search_type == 1)
		SetDt_hour(replaceDateTime("#end_date", "#end_time"),replaceDateTime("#start_date", "#start_time"));
	else
		SetDt_day(replaceDateTime("#end_date", "#end_time"),replaceDateTime("#start_date", "#start_time"));
		
	
	switch(Number($("#event_type").val())){
	case 1:event_type="evtcollcnt"
		break;
	case 2:event_type="bstop_arriv_cnt"
		break;
	case 3:event_type="bstop_dep_cnt"
		break;
	case 4:event_type="cross_pass_cnt"
		break;
	case 5:event_type="avg_delaytm"
		break;
	}
	if(option!=0)
		var routeid=option;
	else
		var routeid="";
	
	var params = {
			routeid : routeid,
			start_time : start_time,
			end_time : end_time,
			event_type : event_type,
			search_type : search_type,
			dt01 : dtArray[1],dt02 : dtArray[2],dt03 : dtArray[3],dt04 : dtArray[4],dt05 : dtArray[5],dt06 : dtArray[6],dt07 : dtArray[7],dt08 : dtArray[8],dt09 : dtArray[9],dt10 : dtArray[10],
			dt11 : dtArray[11],dt12 : dtArray[12],dt13 : dtArray[13],dt14 : dtArray[14],dt15 : dtArray[15],dt16 : dtArray[16],dt17 : dtArray[17],dt18 : dtArray[18],dt19 : dtArray[19],dt20 : dtArray[20],
			dt21 : dtArray[21],dt22 : dtArray[22],dt23 : dtArray[23],dt24 : dtArray[24],dt25 : dtArray[25],dt26 : dtArray[26],dt27 : dtArray[27],dt28 : dtArray[28],dt29 : dtArray[29],dt30 : dtArray[30],dt31 : dtArray[31],	
	};
	console.log(params);
	reloadGrid("#stop_list", "./stop/selectBusStopEvent.do", params, "resultList");
}

function ShowCol(target){
	if(target<10)
		$('#stop_list').showCol('dt'+'0'+target);
	else
		$('#stop_list').showCol('dt'+target);
}
function HideCol(target){
	if(target<10)
		$('#stop_list').hideCol('dt'+'0'+target);
	else
		$('#stop_list').hideCol('dt'+target);
}
function SetLabel(target,content){
	if(target<10){
		$("#stop_list").jqGrid('setLabel',"dt"+'0'+target, content);
	}
	else
		$("#stop_list").jqGrid('setLabel',"dt"+target, content);
}
function TimeToHour(time){
	var year = time.getFullYear();
	var month =	time.getMonth()+1;
	var date = time.getDate();
	var hour = time.getHours();
	if(month<10)
		month = "0"+month;
	if(date<10)
		date = "0"+date;
	if(hour<10)
		hour = "0"+hour;
	return String(year)+String(month)+String(date)+String(hour);
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

function SetDt_hour(end,start){
	var endtime = new Date(Number(end.substring(0,4)),Number(end.substring(4,6))-1,Number(end.substring(6,8)),Number(end.substring(8,10)));
	var starttime = new Date(Number(start.substring(0,4)),Number(start.substring(4,6))-1,Number(start.substring(6,8)),Number(start.substring(8,10)));
	var target=1;
	start_time = TimeToHour(starttime);
	
	while(endtime>=starttime && target<25){
		ShowCol(target);
		dtArray[target] = TimeToHour(starttime)
		SetLabel(target, starttime.getDate() + "일 " + starttime.getHours() + "시");
		starttime.setHours(starttime.getHours()+1);
		target++;
	}
	starttime.setHours(starttime.getHours()-1)
	end_time = TimeToHour(starttime)
	while(target<=32){
		SetLabel(target, " ");
		HideCol(target);
		dtArray[target]="";
		target++;
	}
}
function SetDt_day(end,start){
	var endtime = new Date(Number(end.substring(0,4)),Number(end.substring(4,6))-1,Number(end.substring(6,8)));
	var starttime = new Date(Number(start.substring(0,4)),Number(start.substring(4,6))-1,Number(start.substring(6,8)));
	var target=1;
	start_time = TimetoDay(starttime);
	
	while(endtime>=starttime && target<31){
		ShowCol(target);
		dtArray[target] = TimetoDay(starttime)
		SetLabel(target, (starttime.getMonth()+1) + "월 " + starttime.getDate() + "일");
		starttime.setDate(starttime.getDate()+1);
		target++;
	}
	starttime.setDate(starttime.getDate()-1)
	end_time = TimetoDay(starttime)
	while(target<=31){
		SetLabel(target, " ");
		HideCol(target);
		dtArray[target]="";
		target++;
	}
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	if(time.length==1)
		time="0"+time;
	// ex : 2017101501
	return date + time;
}

function route_list(data){
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid;
		$("#option_list").append(temp);
	})
}

function initEvent(){
	$("#btn_search").click(function(){
		loadGrid( $("#option_list option:selected").val());
	})
	
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	
	$("#option_time" ).keypress(function(e) {
		if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$("#search_option").change(function(){
		if($(this).val()==1){
			$(".hour_input").val("");
			$(".hour_input").removeAttr('disabled');
			$(".ex_706").text("조회시작시각 부터 최대 24시간 까지 조회합니다 >");	
		}
		else{
			$(".hour_input").val("");
			$(".hour_input").attr('disabled','disabled');
			$(".ex_706").text("조회시작일 부터 최대 1달 까지 조회합니다 >");
		}
	})
	$(".hour_input").change(function(){
		var value = $(this).val();
		if(value>23)
			$(this).val(value%10)
		else if(value<0)
			$(this).val(0)
	})		
	//파일 저장
	$("#btn_excel").click(function(){
		if( 0 < $("#stop_list").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text(), "#stop_list");
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
	var hour = Number($("#start_time").val());
	
	if(hour==23){
		$("#start_time").val(0);
		var prev = new Date();//당일
	}
	else{
		$("#start_time").val(hour+1);
		var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일전
	}	
	
	$("#start_date").val($.datepicker.formatDate(YEAR_FORMAT1, prev));	
}