$(document).ready(function(){
	initGrid();
	initPicker();
	initEvent();
	setDialog();	
});

var models1 = [
       			{onlyView: true, 
       			label:'BIT ID',				name:'bit_id',               index:'bit_id',        	width: "151",   type: "I", sorttype:"number", 	align:"center"},
              	{label:'지점명',				name:'stop_name',       	index:'stop_name', 	width: "150",   type: "I", sorttype:"text", 	    	align:"left"},
              	{label:'모바일ID',	    	name:'service_id',         	index:'service_id', 		width: "150",   type: "I", sorttype:"number",	    	align:"center"},
              	{label:'정류장ID',			name:'stop_id',      		index:'stop_id',        	width: "110",   type: "I", sorttype:"number", 	    	align:"center"},
              	{label:'0~1분',				name:'err_01',     			index:'err_01',      		width: "110",   type: "I", sorttype:"number",		align:"center"},
              	{label:'1~2분',				name:'err_12',        		index:'err_12',        	width: "103",   type: "I", sorttype:"number",	    align:"center"},
              	{label:'2~3분',				name:'err_23',             	index:'err_23',     		width: "100",  type: "I", sorttype:"number", 	    	align:"center"},
              	{label:'3분 이내 출발',	name:'err_3',              	index:'err_3',      		width: "100",  type: "I", sorttype:"number", 	    	align:"center"},
              	{label:'3분 초과',   		name:'err_4',         		index:'err_4',            width: "100",  type: "I", sorttype:"number",	   	 	align:"center"},
              	{label:'총 건수',   			name:'total_cnt',          index:'total_cnt', 		width: "100",  type: "I", sorttype:"number",	   		align:"center"},
              	{label:'신뢰도(%)',       	name:'trust',          		index:'trust',  			width: "100",   type: "I", sorttype:"number",	    	align:"center"}
              	];

var models2 = [
                {onlyView: true, 
                label:'BIT ID',				name:'bit_id',               index:'bit_id',               width: "60",   sorttype:"number", 	align:"center"},
		     	{label:'지점명',	    		name:'stop_name', 		index:'stop_name',            width: "100",  sorttype:"text", 	    align:"left"},
		     	{label:'정류장표준ID',	name:'stop_id',   			index:'stop_id',              width: "70",   sorttype:"number", 	align:"center"},
		     	{label:'모바일ID',	    	name:'service_id', 			index:'service_id',           width: "85",   sorttype:"number",	align:"center"},
		     	{label:'BIT타입',			name:'bit_type',       		index:'bit_type',             width: "80",   sorttype:"text", 	    align:"center"},
		     	{label:'LAT',	    			name:'lat',                  	index:'lat',			       width: "90",   sorttype:"number",    align:"left"},
		     	{label:'LNG',	    			name:'lng',         			index:'lng',                  width: "90",   sorttype:"number",	align:"left"}
		     	];
   
function initGrid(){
	makeGrid("#arrival_trust_list", models1, 110, "resultList", null, counting, dblClkCallback);
	
	function dblClkCallback(rowid){
		showDetail(rowid);
	}
	
	$(window).bind('resize', function() {
		$("#arrival_trust_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 35);
		$("#arrival_trust_list").jqGrid('setGridWidth',$(".main_chart").width());
	}).trigger('resize');	
}

function showDetail(rowid) {
	var rowData = $("#arrival_trust_list").jqGrid("getRowData", rowid);
	openMenuWindow(
			"v705.view",   
			replaceDateTime("#start_date", "#start_time"), 
			replaceDateTime("#end_date", "#end_time"),
			$("#input_start_range").val(), 
			$("#input_end_range").val(), 
			rowData.bit_id, 
			encodeURI(rowData.stop_id+"_"+rowData.stop_name));
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	return date + time;
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
	
	function outRange(input){		
		if($(input).val() <1)
			$(input).val(1);
		else if($(input).val() > 10)
			$(input).val(10);		
	};
	
	$("#input_start_range").focusout(function(){
		outRange(this);		
		if( Number($(this).val()) > $("#input_end_range").val() ){			
			$(this).val($("#input_end_range").val());			
		}
	});
	
	$("#input_end_range").focusout(function(){
		outRange(this);
		if( Number($(this).val()) < $("#input_start_range").val() )
			$(this).val($("#input_start_range").val());
	});
	
	
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	});
	
	$("#btn_clear").click(function(){
		$("#input_stop_name").val("");
		$("#input_bit_id").val("");
		$("#input_stop_id").val("");
		$("#check_all").prop("checked",false);		
		$("#arrival_trust_list").clearGridData();
		counting();
	});
	
	$("#btn_search").click(function(){
		if( (!$("#input_bit_id").val() == "" && !$("#input_stop_id").val() == "") || $("#check_all").is(":checked") ){
			if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {
				loadGrid();
			}else {
				showAlert("조회기간을 잘못 설정하였습니다.");
			}
		}else{
			showAlert("BIT 지점 선택 또는 전체지점을 체크해주십시오.");
		}
				
	});
	
	$("#btn_excel").click(function() {
		if( 0 < $("#arrival_trust_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");		
	});
}

function counting(){
	$("#list_count").text($("#arrival_trust_list").getGridParam("reccount"));
}

function loadGrid(){
	var params = {
			check_all : $("#check_all").is(":checked"),
			bit_id : $("#input_bit_id").val(),
			stop_id : $("#input_stop_id").val(),
			start_range : $("#input_start_range").val(),
			end_range : $("#input_end_range").val(),
            start_date_time : replaceDateTime("#start_date", "#start_time"),
            end_date_time : replaceDateTime("#end_date", "#end_time")};
	
	reloadGrid("#arrival_trust_list", "./bit/selectArrivalTrustList.do", params, "resultList");
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
		$("#input_bit_id").val(rowData.bit_id);
		$("#input_stop_id").val(rowData.stop_id);
		$("#input_stop_name").val(rowData.stop_name);
		selectDlg.dialog("close");
	}
	
	$("#pop_list").jqGrid('setGridHeight',223);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./bit/selectBitList.do",  { view_flag:"pop_up" }, "resultList");
}

function execlDownload(){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/excelArrivalTrustList.do";
	form.method = "POST";
	
	var data = $("#arrival_trust_list").getRowData();	
	
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
