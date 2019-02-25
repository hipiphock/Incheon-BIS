$(document).ready(function(){	
	$("#map").width(673);
	$("#map").height(701);
	createMap("map");
	
	initGrid();
	initPicker();
	initEvent();
	setDialogRoute(); // 노선 검색 팝업
	setDialogVehicle(); // 차량 검색 팝업	
});

var selectDlgRoute;
var selectDlgVehicle;

var models1 = [
              {label:"이벤트종류",			name:"event_type_name",	index:"event_type_name",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"OBE 이력시간",		name:"evt_occurdt",			index:"evt_occurdt",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"노선명",					name:"routeno",				index:"routeno",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"차량번호",				name:"carregno",				index:"carregno",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"돌발유형",				name:"collect_type",			index:"collect_type",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"지점순번",				name:"pathseq",				index:"pathseq",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"지점명",					name:"nodenm",				index:"nodenm",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"차량ID",					name:"busid",					index:"busid",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"위도",						name:"lat",						index:"lat",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"경도",						name:"lng",						index:"lng",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"차량각도",				name:"heading",				index:"heading",				width: "100", 	align:"center", hidden:false, sortable:true},
              {label:"차량속도",				name:"runspd",				index:"runspd",				width: "100", 	align:"center", hidden:false, sortable:true},                                    
              {label:"지점ID",					name:"nodeid",				index:"nodeid",				width: "100", 	align:"center", hidden:false, sortable:true},                                    
              {label:"노선ID",					name:"routeid",				index:"routeid",				width: "100", 	align:"center", hidden:false, sortable:true},                                  
              {label:"이력등록시간",			name:"center_colldt",		index:"center_colldt",				width: "120", 	align:"center", hidden:false, sortable:true}                                    
              ]

var models2 = [
       			{onlyView: true, 
       			label:'표준노선ID',	name:'routeid',               	index:'routeid',           		width: "80",   	sorttype:"number", 	align:"center"},
             	{label:'노선명명',		name:'routeno',         		index:'routeno',          	width: "90", 	sorttype:"text", 	    	align:"left"},
             	{label:'경로설명',		name:'routedesc',    			index:'routedesc',  	width: "118", 		sorttype:"number", 	align:"center"}             	
             	];

var models3 = [
      			{onlyView: true, 
      			label:'차량ID',			name:'busid',              		index:'busid',           	width: "60",   	sorttype:"number", 	align:"center"},
            	{label:'차량번호',		name:'carregno',         		index:'carregno',          	width: "100", 	sorttype:"text", 	    	align:"left"},
            	{label:'종류',			name:'bus_type_name',   	index:'bus_type_name',  width: "100", 	sorttype:"text", 	    	align:"left"},
            	{label:'비고',			name:'descr',         			index:'descr',          		width: "100", 	sorttype:"text", 	    	align:"left"},
            	{label:'등록일',			name:'regist_dt',  				index:'regist_dt',  			width: "70", 		sorttype:"number", 	align:"center"}             	
            	];


function initGrid() {	
	makeFilterGrid("#operation_list", models1, 110, "resultList", null, completeCallback, dblClkCallback);
	
	function completeCallback(){
		// TODO grid list 지도에 뿌리기 / 노선 선택시 경로, 정류장, 차량 / 차량 선택시 차량만
		// 경계, 줌 상황에 맞는 내용만 그려내도록 유의
	};
	
	function dblClkCallback(rowid){
		var map = getMap();
		
		var rowdata = $("#operation_list").getRowData(rowid);
		var position = new naver.maps.LatLng(rowdata.lat, rowdata.lng);		
		
		map.setCenter(position);		
		
		// TODO  hooking 아이콘 그리기
	};
	
	$(window).bind('resize', function() {
		$("#operation_list").jqGrid('setGridHeight',$(".main_chart").height() - 23);
		$("#operation_list").jqGrid('setGridWidth',$(".main_chart").width());					
	}).trigger('resize');
}

function initEvent(){
	$("#btn_list_search").click(function(){
		var data = $("#operation_list").jqGrid("getRowData");
		
		if( 0 < data.length )
			loadGrid(true);
		else
			showAlert("조회할 리스트가 없습니다.");
	});
	
	$("#text_list_search").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_list_search").trigger("click");		
	});
	
	$("#btn_choice1").click(function() {		
		selectDlgRoute.dialog("open");		
	});
	
	$("#btn_choice2").click(function() {		
		selectDlgVehicle.dialog("open");		
	});
	
	$("#btn_search").click(function(){
		if( !$("#input_route").val() == "" || !$("#input_plate_no").val() == "" ){
			if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {
				loadGrid(false);
			}else {
				showAlert("조회기간을 잘못 설정하였습니다.");
			}	
		}else{
			showAlert("노선 또는 차량을 선택해주십시오.");
		}				
	});	
	
	$("#btn_clear").click(function(){
		$("#input_veh_id").val("");
		$("#input_plate_no").val("");
		$("#input_route_id").val("");
		$("#input_route").val("");		
		$("#input_route").val("");		
		$("#operation_list").clearGridData();
		$("#check_detail").prop("checked", false);
		$("#check_detail").trigger("change");
		$("#check_regular").prop("checked", false);
		$("#check_regular").trigger("change");
		$("#check_event").prop("checked", false);
		$("#check_event").trigger("change");
	});
	
	$("#check_detail").change(function(){
		if($(this).is(":checked")) {
			setFilter("operation_list", true);
			$("#operation_list").jqGrid('setGridHeight',$(".main_chart").height() - 50);
			
			$("#operation_list").jqGrid('filterToolbar', {
	    		stringResult: true, searchOnEnter: true, autosearch: true, defaultSearch: "cn"
	    	});
			var tempgrid = $("#operation_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("operation_list", false);
			$("#operation_list").jqGrid('setGridHeight',$(".main_chart").height() - 23);
			
			$("#operation_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});

	$("#btn_excel").click(function() {
		if( 0 < $("#operation_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

function loadGrid(searchWord){
	if( !$("#input_route").val() == "" || !$("#input_plate_no").val() == "" ){
		if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {
			
			var params = {
					searchWord : searchWord ? $("#text_list_search").val() : "",
					route_id: $("#input_route_id").val(),					
					veh_id: $("#input_veh_id").val(),
		            start_date_time : replaceDateTime("#start_date", "#start_time"),
		            end_date_time : replaceDateTime("#end_date", "#end_time")};
			
			console.log(params);
			
			$("#operation_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
			$("#operation_list").jqGrid("destroyFilterToolbar");
			$("#check_detail").attr("checked",false);
			
			reloadGrid("#operation_list", "./bus/selectOperationHisList.do", params, "resultList");
			
		}else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}	
	}else{
		showAlert("노선 또는 차량을 선택해주십시오.");
	}		
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

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	// (ex:2017-10-10 21:00:00 > 20171010210000)
	return date + time;
}

function execlDownload(params){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bus/downloadBusOperationExcel.do";
	form.method = "POST";
	
	var data = $("#operation_list").getRowData();
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

function setDialogRoute() {
	selectDlgRoute = getDialog("pop_choice", "container");
	$("#btn_close").click(function() {
		selectDlgRoute.dialog("close");
	});
	
	$("#btn_pop_search").click(function() {
		var params = {
				searchWord : $("#input_pop_word").val()
		}
		reloadGrid("#pop_list", "./route/selectRouteList.do", params, "resultList");
	});
		
	$("#input_pop_word").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_pop_search").trigger("click");		
	});
	
	$("#txt_title").text("노선 선택");
	
	makeGrid("#pop_list", models2, 110, "resultList", null, null, dblClickPop);
	
	function dblClickPop(rowid) {
		var rowData = $("#pop_list").jqGrid('getRowData', rowid);
		$("#input_route_id").val(rowData.routeid);
		$("#input_route").val("["+rowData.routeid+"] "+rowData.routeno+"번 노선");
		selectDlgRoute.dialog("close");
	}
	
	$("#pop_list").jqGrid('setGridHeight',224);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./route/selectRouteList.do", null, "resultList");
}

function setDialogVehicle() {
	selectDlgVehicle = getDialog("pop_choice2", "container");
	
	$("#btn_close2").click(function() {
		selectDlgVehicle.dialog("close");
	});
	
	$("#btn_pop_search2").click(function() {
		var params = {
				view_flag : "popup",
				search_word : $("#input_pop_word2").val()
		}
		console.log(params);
		reloadGrid("#pop_list2", "./route/selectVehicleList.do", params, "resultList");
	});
		
	$("#input_pop_word2").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_pop_search2").trigger("click");		
	});
	
	$("#txt_title2").text("차량 선택");
	
	makeGrid("#pop_list2", models3, 110, "resultList", null, null, dblClickPop);
	
	function dblClickPop(rowid) {
		var rowData = $("#pop_list2").jqGrid('getRowData', rowid);
		$("#input_veh_id").val(rowData.busid);
		$("#input_plate_no").val(rowData.carregno);
		selectDlgVehicle.dialog("close");
	}
	
	$("#pop_list2").jqGrid('setGridHeight',224);
	$("#pop_list2").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list2", "./route/selectVehicleList.do", { view_flag:"popup" }, "resultList");
}