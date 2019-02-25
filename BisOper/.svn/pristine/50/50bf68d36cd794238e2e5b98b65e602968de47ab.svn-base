$(document).ready(function(){
	initPicker();
	initGird();
	initEvent();
	setDialog();
});
var selectDlg;

//violation_list
var models1 = [
			{label:"시간",				name:"center_colldt",   		index:"center_colldt",       	width: "146", 	align:"center"},	        
   	        {label:"차량번호",			name:"carregno",    			index:"carregno",      		width: "100", 	align:"center"},	        
   	        {label:"위반내용",			name:"code_explain",    	index:"code_explain",      	width: "145", 	align:"center"},	        
   	        {label:"노선명",			name:"routeno",   			index:"routeno",       		width: "100", 	align:"center"},	        
   	        {label:"속도",				name:"runspd",    			index:"runspd",       			width: "100", 	align:"center"},	        
   	        {label:"통과지점명",		name:"nodenm",      		index:"nodenm",       		width: "183", 	align:"left"},	        
   	        {label:"운수사",			name:"compnm",				index:"compnm",   			width: "100", 	align:"center"},	        
   	        {label:"위도",				name:"lat",     					index:"lat",       				width: "100", 	align:"center"},	        
   	        {label:"경도",				name:"lng",   					index:"lng",       				width: "100", 	align:"center"},	        
   	        {label:"노선 ID",			name:"routeid",     			index:"routeid",       			width: "100", 	align:"center"},	        
   	        {label:"차량 ID",			name:"busid",  				index:"busid",       			width: "100", 	align:"center"}	        
   	];

//irregular_bus_list1, routeBreak_bus_list1
var models2 = [
   	        {label:"순위",				name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
   	        {label:"차량 ID",			name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
   	        {label:"차량번호",			name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
   	        {label:"횟수",				name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
   	        {label:"운행노선",			name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true}	        
   	];

//irregular_bus_list2, routeBreak_bus_list2
var models3 = [
      	        {label:"순위",			name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
      	        {label:"차량 ID",		name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
      	        {label:"차량번호",		name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
      	        {label:"횟수",			name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},	        
      	        {label:"운행차량",		name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true}	        
      	];

var models4 = [
     			{onlyView: true, 
     			label:'차량ID',			name:'busid',              		index:'busid',           		width: "60",   		sorttype:"number", 		align:"center"},
	           	{label:'차량번호',		name:'carregno',         		index:'carregno',          	width: "100", 		sorttype:"text", 	    	align:"left"},
	           	{label:'종류',			name:'bus_type_name',   	index:'bus_type_name',          	width: "100", 		sorttype:"text", 	    	align:"left"},
	           	{label:'비고',			name:'descr',         			index:'descr',          	width: "100", 		sorttype:"text", 	    	align:"left"},
	           	{label:'등록일',			name:'regist_dt',  				index:'regist_dt',  	width: "70", 		sorttype:"number", 		align:"center"}             	
	           	];

function initGird(){
	// left tab
	
	makeFilterGrid("#violation_list", models1,110, "resultList", null, counting, null);
	
	// right tab
	
	/*makeFilterGrid("#irregular_bus_list1", models2,110, "resultList", null, null);
	makeFilterGrid("#routeBreak_bus_list1", models2,110, "resultList", null, null);
	makeFilterGrid("#irregular_bus_list2", models3,110, "resultList", null, null);
	
	makeFilterGrid("#routeBreak_bus_list2", models3,110, "resultList", null, null);*/
	
	
	$(window).bind('resize', function() {
		$("#violation_list").jqGrid('setGridHeight',$(".main_chart").height() - 25);
		$("#violation_list").jqGrid('setGridWidth',$(".main_chart").width());		
		
		/*$("#irregular_bus_list1").jqGrid('setGridHeight',$(".tong_con").height() - 70);
		$("#irregular_bus_list1").jqGrid('setGridWidth',$(".tong_con").width());
		$("#routeBreak_bus_list1").jqGrid('setGridHeight',$(".tong_con").height() - 70);
		$("#routeBreak_bus_list1").jqGrid('setGridWidth',$(".tong_con").width());
		$("#irregular_bus_list2").jqGrid('setGridHeight',$(".tong_con").height() - 70);
		$("#irregular_bus_list2").jqGrid('setGridWidth',$(".tong_con").width());
		$("#routeBreak_bus_list2").jqGrid('setGridHeight',$(".tong_con").height() - 70);
		
		$("#routeBreak_bus_list2").jqGrid('setGridWidth',$(".tong_con").width());*/
	}).trigger('resize');
}

function initPicker(){
	initCalendar("start_date", YEAR_FORMAT1, true);
	initCalendar("end_date", YEAR_FORMAT1, true);
	initTimePicker("start_time", TIME_FORMAT1, true);
	initTimePicker("end_time", TIME_FORMAT1, true);	
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 10); //10분전
	$("#start_time").timepicker("setTime", prev.format(TIME_FORMAT1));	
}

function initEvent(){
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	});

	// 좌측 탭 / 검색 click
	$("#btn_search").click(function(){		
		if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {			
			loadLeftGrid();		
		}else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});	
	
	$("#btn_clear").click(function(){
		$("#input_plate_no").val("");
		$("#input_veh_id").val("");
		$("#check_detail").prop("checked", false);
		$("#check_detail").trigger("change");
		$("#violation_list").clearGridData();
		counting();
	});
	
	$("#check_detail").change(function(){
		if($(this).is(":checked")) {
			setFilter("violation_list", true);
			$("#violation_list").jqGrid('setGridHeight',$(".main_chart").height() - 50);
			
			var tempgrid = $("#violation_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("violation_list", false);
			$("#violation_list").jqGrid('setGridHeight',$(".main_chart").height() - 25);
			
			$("#violation_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
	
	$("#btn_excel").click(function(){
		if( 0 < $("#violation_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

function counting(){
	$("#list_count").text($("#violation_list").getGridParam("reccount"));
}
function loadLeftGrid(){
	var params = {
			veh_id : $("#input_veh_id").val(),
            start_date_time : replaceDateTime("#start_date", "#start_time"),
            end_date_time : replaceDateTime("#end_date", "#end_time")};
	
	$("#violation_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#violation_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);
	
	reloadGrid("#violation_list", "./bus/selectBusViolationHisList.do", params, "resultList");	
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	// (ex:2017-10-10 21:00:00 > 20171010210000)
	return date + time;
}


function execlDownload(){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bus/downloadBusViolationExcel.do";
	form.method = "POST";
	
	var data = $("#violation_list").getRowData();
	
		
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

function setDialog() {
	selectDlg = getDialog("pop_choice", "container");
	
	$("#btn_close").click(function() {
		selectDlg.dialog("close");
	});
	
	$("#btn_pop_search").click(function() {
		var params = {
				searchWord : $("#input_pop_word").val()
		}
		reloadGrid("#pop_list", "./route/selectVehicleList.do", params, "resultList");
	});
		
	$("#input_pop_word").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_pop_search").trigger("click");		
	});
	
	$("#txt_title").text("차량 선택");
	
	makeGrid("#pop_list", models4, 110, "resultList", null, null, dblClickPop);
	
	function dblClickPop(rowid) {
		var rowData = $("#pop_list").jqGrid('getRowData', rowid);
		$("#input_veh_id").val(rowData.busid);
		$("#input_plate_no").val(rowData.carregno);
		selectDlg.dialog("close");
	}
	
	$("#pop_list").jqGrid('setGridHeight',223);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./route/selectVehicleList.do", { view_flag:"popup" }, "resultList");
}