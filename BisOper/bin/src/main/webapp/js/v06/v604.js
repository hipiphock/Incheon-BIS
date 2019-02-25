$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initPicker();
	initEvent();	
});

var selectDlg;

var models1 = [
			{onlyView: true, 
			 label:"구분",		name:"etc",			  		index:"etc",			width: "170", 	align:"left", sorttype:"text"},
			{label:"사업구분",		name:"widearea",			index:"widearea",		width: "65", 	align:"center", sorttype:"text"},
			{label:"관리ID",		name:"bitmid",				index:"bitmid",			width: "70", 	align:"center", sorttype:"text"},
			{label:"BIT ID",	name:"bitid",			  	index:"bitid",			width: "70", 	align:"center", sorttype:"text"},
			{label:"단축ID",		name:"sbstopid",			index:"sbstopid",		width: "50", 	align:"center", sorttype:"text"},       		
			{label:"설치위치",		name:"bstopnm",				index:"bstopnm",		width: "160", 	align:"left", sorttype:"text"},
			{label:"안내기유형",		name:"bittype",				index:"bittype",		width: "160", 	align:"left", sorttype:"text"},
			{label:"수집일시",		name:"colldt",			  	index:"colldt",			width: "120", 	align:"center", sorttype:"text"},
			{label:"IP주소",		name:"ip_addr",				index:"ip_addr",		width: "70", 	align:"center", sorttype:"text"},
			{label:"통신회선ID",	name:"com_linenum",		    index:"com_linenum",	width: "120", 	align:"center", sorttype:"text"},
			{label:"전기고객번호",	name:"power_num",			index:"power_num",		width: "80", 	align:"center", sorttype:"text"},
			{label:"통신사",		name:"com_asso",			index:"com_asso",		width: "80", 	align:"center", sorttype:"text"},       		
			{label:"통신상태",		name:"netstatus",			index:"netstatus",		width: "80", 	align:"center", sorttype:"text"},
			{label:"화면상태led",	name:"ledpwr_onoff",		index:"ledpwr_onoff",	width: "80", 	align:"center", sorttype:"text"},
			{label:"단면상태LCD",	name:"lcdpwr_onoff1",		index:"lcdpwr_onoff1",	width: "80", 	align:"center", sorttype:"text"},
			{label:"양면상태LCD",	name:"lcdpwr_onoff2",		index:"lcdpwr_onoff2",	width: "80", 	align:"center", sorttype:"text"},       		
			{label:"온도",		name:"temperature",			index:"temperature",	width: "80", 	align:"center", sorttype:"text"},
			{label:"도어",		name:"door_onoff",			index:"door_onoff",		width: "80", 	align:"center", sorttype:"text"},
			{label:"팬상태",		name:"fan_onoff",			index:"fan_onoff",		width: "80", 	align:"center", sorttype:"text"},
			{label:"히터상태",		name:"heat_onoff",			index:"heat_onoff",		width: "80", 	align:"center", sorttype:"text"},
			{label:"히터자동여부",	name:"heat_autoyn",			index:"heat_autoyn",	width: "80", 	align:"center", sorttype:"text"},       		     		
			{label:"팬자동여부",		name:"fan_autoyn",			index:"fan_autoyn",		width: "80", 	align:"center", sorttype:"text"},
			{label:"전원자동여부",	name:"pwr_autoyn",			index:"pwr_autoyn",		width: "80", 	align:"center", sorttype:"text"},
			{label:"음량",		name:"volume",			  	index:"volume",			width: "80", 	align:"center", sorttype:"text"},
			{label:"휘도",		name:"lcd_bright",			index:"lcd_bright",		width: "80", 	align:"center", sorttype:"text"},
			{label:"LED조도",		name:"led_lumino",			index:"led_lumino",		width: "80", 	align:"center", sorttype:"text"},       		
			{label:"LCD조도",		name:"lcd_lumino",			index:"lcd_lumino",		width: "80", 	align:"center", sorttype:"text"},
			{label:"충격",		name:"shock",				index:"shock",			width: "80", 	align:"center", sorttype:"text"}
			// SQL 기대 값 : bittpcd, humidity, delay,	netstatus, langstat, camstat, camstat1, cbustat, alarm, memstat, useyn
			]

var models2 = [
       			{onlyView: true, 
       			 label:'BIT ID',				name:'bitid',         		index:'bitid',       			width: "60",   	sorttype:"number", 	align:"center"},
       			{label:'단축 ID',			name:'short_bstopid',   index:'short_bstopid',  		width: "60", 	align:"center", sorttype:"number"},
             	{label:'지점명',	   			name:'bstopnm',    		index:'bstopnm',    		width: "100",  	sorttype:"text", 	    align:"left"},
             	{label:'정류장표준ID',	name:'bstopid',          	index:'bstopid',    		width: "70",		sorttype:"number", 	align:"center"},
             	{label:'모바일ID',	   	 	name:'bitserver_id',   	index:'bitserver_id',		width: "85",  	sorttype:"number",	align:"center"},
             	{label:'BIT타입',			name:'cdnm',      			index:'cdnm',     			width: "80",   	sorttype:"text", 	    align:"center"},
             	{label:'LAT',	    			name:'lat',             		index:'lat',			 		width: "90",   	sorttype:"number",    align:"left"},
             	{label:'LNG',	    			name:'lng',            		index:'lng',                  width: "90",   	sorttype:"number",	align:"left"}
             	];

function initGrid(){
	makeFilterGrid("#bit_state_list", models1, 110, "resultList", null, counting, null);	
	
	$(window).bind('resize', function() {
		$("#bit_state_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#bit_state_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');	
	
	loadGrid();
}

function initPicker(){
	initCalendar("start_date", YEAR_FORMAT1, true);
	initCalendar("end_date", YEAR_FORMAT1, true);
	initTimePicker("start_time", TIME_FORMAT1, true);
	initTimePicker("end_time", TIME_FORMAT1, true);	
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 5); //5분전
	$("#start_time").timepicker("setTime", prev.format(TIME_FORMAT1));
}

function initEvent(){
	setDialog();
	
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	});
	
	$("#btn_search").click(function(){
		if( !$("#input_bit_id").val() == "" ){
			if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {
				loadGrid();
			}else {
				showAlert("조회기간을 잘못 설정하였습니다.");
			}	
		}else{
			showAlert("BIT 지점을 선택하주십시오.");
		}
	});	
	
	$("#btn_clear").click(function(){
		$("#bit_state_list").clearGridData()
		$("#check_detail").prop("checked",false);
		$("#check_detail").trigger("change");
		$("#input_bit_id").val("");
		$("#input_stop_name").val("");
	});

	$("#btn_refresh").click(function(){
		if($("#input_bit_id").val() == ""){		
			initPicker(); // 새로고침 시 매 5분간의 상태이력 조회
			loadGrid();
		}else{
			$("#btn_search").trigger("click");			
		}
		
	});
	
	$("#check_detail").change(function(){		
		if($(this).is(":checked")) {
			setFilter("bit_state_list", true);
			$("#bit_state_list").jqGrid('setGridHeight',$(".main_chart").height() - 50);
			
//			$("#bit_state_list").jqGrid('filterToolbar', {
//	    		stringResult: true, searchOnEnter: true, autosearch: true, defaultSearch: "cn"
//	    	});
			var tempgrid = $("#bit_state_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("bit_state_list", false);
			$("#bit_state_list").jqGrid('setGridHeight',$(".main_chart").height() - 23);

			$("#bit_state_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});

	$("#btn_excel").click(function() {
		if( 0 < $("#bit_state_list").getGridParam("reccount") ){			
			execlDownload();
		}
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

function counting(){
	$("#list_count").text($("#bit_state_list").getGridParam("reccount"));
}

function loadGrid(){
	showLoader();
	var params = {
			text_search : $("#input_bit_id").val(),
            start_date_time : replaceDateTime("#start_date", "#start_time"),
            end_date_time : replaceDateTime("#end_date", "#end_time")};

	$("#bit_state_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#bit_state_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);

	reloadGrid("#bit_state_list", "./bit/selectBitStateHisList.do", params, "resultList");
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	return date + time;
}

function setDialog() {
	selectDlg = getDialog("pop_choice", "container");
	$("#btn_close").click(function() {
		selectDlg.dialog("close");
	});
	
	$("#btn_pop_search").click(function() {
		var params = {
				view_flag:"pop_up",
				searchWord : $("#input_pop_word").val()
		}
		reloadGrid("#pop_list", "./bit/selectBitList.do", params, "resultList");
	});
		
	$("#input_pop_word").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_pop_search").trigger("click");		
	});
	
	$("#txt_title").text("BIT 선택");
	
	makeGrid("#pop_list", models2, 110, "resultList", null, null, dblClickPop);
	
	function dblClickPop(rowid) {
		var rowData = $("#pop_list").jqGrid('getRowData', rowid);
		$("#input_bit_id").val(rowData.bitid);
		$("#input_stop_name").val(rowData.bstopnm);
		selectDlg.dialog("close");
	}
	
	$("#pop_list").jqGrid('setGridHeight',224);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./bit/selectBitList.do",  { view_flag:"pop_up" }, "resultList");
}

function execlDownload(){
$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/excelBitStateList.do";
	form.method = "POST";
	
	var param= document.createElement('INPUT'); 
	var rowData =  $("#bit_state_list").getRowData();
	var value = JSON.stringify(rowData);
	
	param.type  = 'HIDDEN';
	param.name  = 'json';
	param.value = value;
	
	form.appendChild(param);	
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true	);
}