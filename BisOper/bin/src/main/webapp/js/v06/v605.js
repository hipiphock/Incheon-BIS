$(document).ready(function(){
	initGrid();
	initPicker();
	initEvent();
});
var selectDlg;

var models = [
              {label:"BIT ID",				name:"bit_id",				index:"bit_id",					width: "261", 	align:"center", hidden:false, sortable:true},
              {label:"지점명",			name:"stop_name",			index:"stop_name",				width: "260", 	align:"center", hidden:false, sortable:true},
              {label:"등록일자",			name:"hs_regist_dt",		index:"hs_regist_dt",			width: "261", 	align:"center", hidden:false, sortable:true},
              {label:"연결된IP",			name:"connect_ip",			index:"connect_ip",				width: "261", 	align:"center", hidden:false, sortable:true},
              {label:"연결종료일자",		name:"disconnect_dt",		index:"disconnect_dt",			width: "261", 	align:"center", hidden:false, sortable:true},
              
              {label:"keepalive_time",	name:"keepalive_time",	index:"keepalive_time",	width: "100", 	align:"center", hidden:true, sortable:true}             
              ]

var models2 = [
      			{onlyView: true, 
      			 label:'BIT ID',				name:'bitid',         		index:'bitid',       			width: "60",   	sorttype:"number", 	align:"center"},
            	{label:'지점명',	   			name:'bstopnm',    		index:'bstopnm',    		width: "100",  	sorttype:"text", 	    align:"left"},
            	{label:'정류장표준ID',	name:'bstopid',          	index:'bstopid',    		width: "70",		sorttype:"number", 	align:"center"},
            	{label:'모바일ID',	   	 	name:'bitserver_id',   	index:'bitserver_id',		width: "85",  	sorttype:"number",	align:"center"},
            	{label:'BIT타입',			name:'cdnm',      			index:'cdnm',     			width: "80",   	sorttype:"text", 	    align:"center"},
            	{label:'LAT',	    			name:'lat',             		index:'lat',			 		width: "90",   	sorttype:"number",    align:"left"},
            	{label:'LNG',	    			name:'lng',            		index:'lng',                  width: "90",   	sorttype:"number",	align:"left"}
            	];

function initGrid(){
	makeFilterGrid("#bit_earlyConn_list", models, 110, "resultList", null, counting, null);	
	
	$(window).bind('resize', function() {
		$("#bit_earlyConn_list").jqGrid('setGridHeight', $(".main_chart").height()-25);
		$("#bit_earlyConn_list").jqGrid('setGridWidth', $(".main_chart").width());		
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
			showAlert("BIT 지점을 선택하십시오.");
		}				
	});	
	
	$("#btn_clear").click(function(){
		$("#check_detail").prop("checked", false);
		$("#check_detail").trigger("change");
		$("#bit_earlyConn_list").clearGridData();
		$("#input_bit_id").val("");
		$("#input_stop_name").val("");
		counting();
	});
	
	$("#check_detail").change(function(){		
		if($(this).is(":checked")) {
			setFilter("bit_earlyConn_list", true);
			$("#bit_earlyConn_list").jqGrid('setGridHeight',$(".main_chart").height() - 50);
			
			var tempgrid = $("#bit_earlyConn_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("bit_earlyConn_list", false);
			$("#bit_earlyConn_list").jqGrid('setGridHeight',$(".main_chart").height() - 25);

			$("#bit_earlyConn_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});

	$("#btn_excel").click(function() {
		if( 0 < $("#bit_earlyConn_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

function counting(){
	$("#list_count").text($("#bit_earlyConn_list").getGridParam("reccount"));
}

function loadGrid(params){
	var params = setParams();

	$("#bit_earlyConn_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#bit_earlyConn_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);

	reloadGrid("#bit_earlyConn_list", "./bit/selectBitEarlyConnList.do", params, "resultList");
}

function setParams(){
	var params = {
			text_search : $("#input_bit_id").val(),
            start_date_time : replaceDateTime("#start_date", "#start_time"),
            end_date_time : replaceDateTime("#end_date", "#end_time")};
	return params;
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");""
	var time = $(time_id).val().replace(/:/g,"");
	return date + time;
}

function execlDownload(params){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/downloadBitEarlyConnExcel.do";
	form.method = "POST";
	
	var data = $("#bit_earlyConn_list").getRowData();
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
	
	$("#pop_list").jqGrid('setGridHeight',223);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./bit/selectBitList.do", { view_flag:"pop_up" }, "resultList");
}