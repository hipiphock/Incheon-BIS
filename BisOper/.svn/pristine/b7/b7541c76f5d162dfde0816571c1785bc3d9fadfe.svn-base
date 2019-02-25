
var loadInterval = null;
var errCnt = 0;
$(document).ready(function(){
	appendLoader("조회중..");
	initGrid();	
	initEvent();
	setDialog();
});

var selectDlg;

function initEvent(){
	
	$("#check_detail").change(function(){
		if($(this).is(":checked")) {
			setFilter("bit_state_list", true);
			$("#bit_state_list").jqGrid('setGridHeight', $(".main_chart").height() -23 -29);
			
			var tempgrid = $("#bit_state_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("bit_state_list", false);
			$("#bit_state_list").jqGrid('setGridHeight', $(".main_chart").height() -23);
			
			$("#bit_state_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
	
	$("#btn_clear").click(function(){
		$("#input_stop_id").val("");
		$("#input_stop_name").val("");
		$("#check_detail").prop("checked", false);
		$("#check_detail").trigger("change");
		loadGrid();
	});
	
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	});
	
	$("#btn_search").click(function(){
		loadGrid();
	});
	
	$("#input_stop_name").keydown(function(event){
		if(event.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");
	});
	
	$("#btn_excel").click(function() {
		if( 0 < $("#bit_state_list").getGridParam("reccount") ){			
			console.log("exceldown");
			execlDownload();
		}
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

var models1 = [
       		{label:"구분",		   		name:"etc",			  			index:"etc",					width: "70", 	align:"left"},
       		{label:"사업구분",		   	name:"widearea",				index:"widearea",			width: "120", 	align:"center"},
       		{label:"관리ID",		   	name:"bitmid",				index:"bitmid",					width: "70", 	align:"center"},
       		{label:"BIT ID",		   		name:"bitid",			  		index:"bitid",					width: "70", 	align:"center"},
       		{label:"단축ID",		   	name:"sbstopid",				index:"sbstopid",			width: "50", 	align:"center"},       		
       		{label:"설치위치",		   	name:"bstopnm",				index:"bstopnm",			width: "160", 	align:"left"},
       		{label:"안내기유형",		name:"bittype",				index:"bittype",			width: "160", 	align:"left"},
       		{label:"수집일시",			name:"colldt",			  		index:"colldt",			width: "120", 	align:"center", formatter : setDate},
//       		{label:"IP주소",				name:"ip_addr",				index:"ip_addr",			width: "70", 	align:"center"},
//       		{label:"통신회선ID",		name:"com_linenum",		index:"com_linenum",			width: "120", 	align:"center"},
//       		{label:"전기고객번호",	name:"power_num",			index:"power_num",			width: "80", 	align:"center"},
//       		{label:"통신사",			name:"com_asso",			index:"com_asso",			width: "80", 	align:"center"},       		
       		{label:"통신상태",			name:"coll_yn",				index:"coll_yn",			width: "80", 	align:"center", formatter : counter},
       		{label:"화면상태led",		name:"ledpwr_onoff",		index:"ledpwr_onoff",			width: "80", 	align:"center"},
       		{label:"단면상태LCD",	name:"lcdpwr_onoff1",		index:"lcdpwr_onoff1",			width: "80", 	align:"center"},
       		{label:"양면상태LCD",	name:"lcdpwr_onoff2",		index:"lcdpwr_onoff2",			width: "80", 	align:"center"},       		
       		{label:"온도",				name:"temperature",			index:"temperature",			width: "80", 	align:"center"},
       		{label:"도어",				name:"door_onoff",			index:"door_onoff",			width: "80", 	align:"center"},
       		{label:"팬상태",		   	name:"fan_onoff",			index:"fan_onoff",			width: "80", 	align:"center"},
       		{label:"히터상태",		   	name:"heat_onoff",			index:"heat_onoff",			width: "80", 	align:"center"},
       		{label:"히터자동여부",	name:"heat_autoyn",			index:"heat_autoyn",			width: "80", 	align:"center"},       		     		
       		{label:"팬자동여부",		name:"fan_autoyn",			index:"fan_autoyn",			width: "80", 	align:"center"},
       		{label:"전원자동여부",	name:"pwr_autoyn",			index:"pwr_autoyn",			width: "80", 	align:"center"},
       		{label:"음량",		   		name:"volume",			  	index:"volume",			width: "80", 	align:"center"},
       		{label:"휘도",		   		name:"lcd_bright",			index:"lcd_bright",			width: "80", 	align:"center"},
       		{label:"LED조도",		   	name:"led_lumino",			index:"led_lumino",			width: "80", 	align:"center"},       		
       		{label:"LCD조도",			name:"lcd_lumino",			index:"lcd_lumino",			width: "80", 	align:"center"},
       		{label:"충격",		   		name:"shock",					index:"shock",			width: "80", 	align:"center"}
       		// SQL 기대 값 : bittpcd, humidity, delay,	netstatus, langstat, camstat, camstat1, cbustat, alarm, memstat, useyn
       		]


function setDate(cellValue, opts, rowdata){ 
    if(cellValue == "" || cellValue == null) {
    	return '정보없음';
    }else {
    	return cellValue;
    }
}


function counter(cellValue, opts, rowdata){ 
	console.log(cellValue);
    if(cellValue != "Y") {
    	errCnt++;
    	return "<span style='color:"+COLOR_RED+";'>N/A</span>"; 
//    	return 'N/A';
    }else {
    	return "<span style='color:"+COLOR_GREEN+";'>정상</span>";
//    	return '정상';
    }
}
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
	makeFilterGrid("#bit_state_list", models1, 110,  "resultList", null, counting, null)
	
	function counting(){
		console.log("##completed");
		var allData = $("#bit_state_list").jqGrid('getGridParam','data');
		var total = allData.length
		$("#list_count").text("   총: " +total+ "  정상: " + (total-errCnt) + "  장애: " + errCnt);
	}
	
	$(window).bind('resize', function() {
		$("#bit_state_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#bit_state_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
	
	loadGrid();
}

function loadGrid(){
	
	if(loadInterval) clearInterval(loadInterval);
	errCnt = 0;
	showLoader();

	$("#bit_state_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#bit_state_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);
	
	reloadGrid("#bit_state_list", "./bit/selectBitStateList.do", {text_search : $("#input_stop_name").val()}, "resultList");
	loadInterval = setInterval(function(){
		reloadGrid("#bit_state_list", "./bit/selectBitStateList.do", {text_search : $("#input_stop_name").val()}, "resultList");
	}, 30 * 1000);
	
}

function setDialog() {
	selectDlg = getDialog("pop_choice", "container");
	$("#btn_close").click(function() {
		selectDlg.dialog("close");
	});
	
	$("#btn_pop_search").click(function() {
		var params = {
				view_flag : "pop_up",
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
		$("#input_stop_id").val(rowData.bstopid);
		$("#input_stop_name").val(rowData.bstopnm);
		selectDlg.dialog("close");
	}
	
	$("#pop_list").jqGrid('setGridHeight',224);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./bit/selectBitList.do",  { view_flag:"pop_up" }, "resultList");
}

function execlDownload(){
	// 제공정보 현황과 동일한 controller
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