$(document).ready(function(){
	initGrid();
	initPicker();
	initEvent();
});

var models1 = [
              {label:"발생 시간",				name:"dt",						index:"dt",						width: "107", 	align:"center", hidden:false, sortable:true},
              {label:"차량ID",					name:"busid",					index:"busid",					width: "107", 	align:"center", hidden:false, sortable:true},
              {label:"차량번호",				name:"carregno",				index:"carregno",				width: "107", 	align:"center", hidden:false, sortable:true},
              {label:"회사명",					name:"compnm",				index:"compnm",	width: "103", 	align:"center", hidden:false, sortable:true},
              {label:"돌발유형",				name:"code_explain",		index:"code_explain",		width: "103", 	align:"center", hidden:false, sortable:true},
              {label:"돌발 발생 지점",		name:"routeno",				index:"routeno",			width: "109", 	align:"center", hidden:false, sortable:true},
              {label:"운행노선",				name:"nodenm",				index:"nodenm",			width: "107", 	align:"center", hidden:false, sortable:true},
              {label:"속도(km/h)",			name:"runspd",				index:"runspd",					width: "98", 	align:"center", hidden:false, sortable:true},
              {label:"노선ID",					name:"nodeid",				index:"nodeid",				width: "107", 	align:"center", hidden:false, sortable:true},
              {label:"지점ID",					name:"routeid",				index:"routeid",				width: "107", 	align:"center", hidden:false, sortable:true},
              {label:"LAT",						name:"lat",						index:"lat",						width: "107", 	align:"center", hidden:false, sortable:true},
              {label:"LNG",						name:"lng",						index:"lng",						width: "107", 	align:"center", hidden:false, sortable:true}                                    
              ]

var models2 = [
               {label:"날짜",					name:"",				index:"",					width: "129", 	align:"center", hidden:false, sortable:true},
               {label:"차량사고",				name:"",				index:"",					width: "127", 	align:"center", hidden:false, sortable:true},
               {label:"차량 고장",				name:"",				index:"",					width: "127", 	align:"center", hidden:false, sortable:true},
               {label:"버스 내 위급상황",	name:"",				index:"",					width: "129", 	align:"center", hidden:false, sortable:true},
               {label:"타 차량 사고",			name:"",				index:"",					width: "128", 	align:"center", hidden:false, sortable:true},
               {label:"긴급 공사",				name:"",				index:"",					width: "128", 	align:"center", hidden:false, sortable:true},   
               {label:"도로 폐쇄",				name:"",				index:"",					width: "128", 	align:"center", hidden:false, sortable:true},  
               {label:"시위 및 집회",			name:"",				index:"",					width: "128", 	align:"center", hidden:false, sortable:true},   
               {label:"운행 중단",				name:"",				index:"",					width: "128", 	align:"center", hidden:false, sortable:true},   
               {label:"합계",					name:"",				index:"",					width: "128", 	align:"center", hidden:false, sortable:true}   
               ]

function initGrid() {	
		makeFilterGrid("#incident_list", models1, 110, "resultList", null, counting, null);
		makeGrid("#incident_statistic_list", models2, 110, "resultList", null, null);
		
		$(window).bind('resize', function() {
			$("#incident_list").jqGrid('setGridHeight',$(".main_chart").height() - 23);
			$("#incident_list").jqGrid('setGridWidth',$(".main_chart").width());
			
			$("#incident_statistic_list").jqGrid('setGridHeight',$(".main_chart").height() - 62);
			$("#incident_statistic_list").jqGrid('setGridWidth',$(".main_chart").width());
			
		}).trigger('resize');
}

function initPicker(){
	initCalendar("start_date", YEAR_FORMAT1, true);
	initCalendar("end_date", YEAR_FORMAT1, true);
	initTimePicker("start_time", TIME_FORMAT1, true);
	initTimePicker("end_time", TIME_FORMAT1, true);
	
	initCalendar("start_date2", YEAR_FORMAT1, true);
	initCalendar("end_date2", YEAR_FORMAT1, true);
	initTimePicker("start_time2", TIME_FORMAT1, true);
	initTimePicker("end_time2", TIME_FORMAT1, true);
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 10); //10분전
	$("#start_time").timepicker("setTime", prev.format(TIME_FORMAT1));	
	$("#start_time2").timepicker("setTime", prev.format(TIME_FORMAT1));	
}

function initEvent(){
	
	$("#btn_search").click(function(){
		if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {
			loadIncidentGrid(false);		
		}else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	})
	
	$("#btn_search2").click(function(){
		if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {
			loadIncidentGrid(true);		
		}else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	$("#text_search").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_search2").trigger("click");		
	});
	
	$("#check_detail").change(function(){
		if($(this).is(":checked")) {
			setFilter("incident_list", true);
			$("#incident_list").jqGrid('setGridHeight',$(".main_chart").height() - 50);

			var tempgrid = $("#incident_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("incident_list", false);
			$("#incident_list").jqGrid('setGridHeight',$(".main_chart").height() - 25);
			
			$("#incident_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
	
	$("#btn_clear").click(function(){
		$("#check_detail").prop("checked", false);
		$("#check_detail").trigger("change");
		$("#text_search").val("");
		$("#incident_list").clearGridData();
		counting();
	});
	
	$("#btn_excel").click(function(){		
		if( 0 < $("#incident_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");
	})
}

function counting(){
	$("#list_count").text($("#incident_list").getGridParam("reccount"));
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	return date + time;
}

function loadIncidentGrid(flag){
	var params = {
			text_search : flag ? $("#text_search").val() : "",
			start_date_time : replaceDateTime("#start_date", "#start_time"),
            end_date_time : replaceDateTime("#end_date", "#end_time")};
	
	$("#incident_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#incident_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);

	reloadGrid("#incident_list", "./bus/selectBusIncidentHisList.do", params, "resultList");	
}

function execlDownload(params){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bus/downloadBusIncidentExcel.do";
	form.method = "POST";
	
	var data = $("#incident_list").getRowData();
	console.log(data)
	
	for(row in data){
		for(name in data[row]){
			var para = document.createElement('INPUT'); 
			para.type  = 'HIDDEN';
			para.name  = name;
			para.value = data[row][name];
			form.appendChild(para);
		}
	}
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown");
}