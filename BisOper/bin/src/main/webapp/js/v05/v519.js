var selectDlg;

$(document).ready(function(){
	appendLoader("조회 중...");
	initialize();
	createGrid();	
});


function initialize() {
	setDialog();
	
	$("#btn_search").click(function() {
		loadGrid();
	});
	
	$("#btn_clear").click(function() {
		$("#input_bit_id").val("");
		$("#input_stop_name").val("");
		$("#bit_supply_list").clearGridData();
	});
	
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	});
	
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	
	$("#btn_excel").click(function(){
		if( 0 < $("#bit_supply_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");
	});
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
		$("#input_bit_id").val(rowData.bitid);
		$("#input_stop_name").val(rowData.bstopnm);
		selectDlg.dialog("close");
	}
	
	$("#pop_list").jqGrid('setGridHeight',223);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./bit/selectBitList.do", { view_flag:"pop_up" }, "resultList");
}

var models1 = [
	    {onlyView: true, 
		label:'이력등록일시',			name:'procdt',       	index:'procdt',         width: "120",  type: "I", sorttype:"text",	    align:"center"},
        {label:'BIT ID',		name:'bitid',         	index:'bitid',          width: "100",   type: "I", sorttype:"number", 	align:"center"},
        {label:'단축 ID',			name:'short_bstopid',   index:'short_bstopid',  width: "50",   type: "I", sorttype:"number", 	align:"center"},
	  	{label:'버스 ID',	   		name:'busid',        	index:'busid',          width: "110",   type: "I", sorttype:"text",	    align:"center"},
	  	{label:'차량번호',	   		name:'carregno',        index:'carregno',       width: "130",   type: "I", sorttype:"text",	    align:"center"},
	  	{label:'방향',	   		name:'dirnm',        	index:'dir',            width: "100",   type: "I", sorttype:"text",	    align:"center"},
	  	{label:'안내 정보',			name:'incoming_time',  	index:'incoming_time',  width: "100",   type: "I", sorttype:"text", 	    align:"center"},
	  	{label:'잔여정류장갯수',		name:'rest_bstopcnt',   index:'rest_bstopcnt',  width: "130",   type: "I", sorttype:"number",    align:"center"},
	  	{label:'노선 ID',			name:'routeid',         index:'routeid',        width: "100",  type: "I", sorttype:"text", 	    align:"center"},
	  	{label:'노선명',       	name:'routeno',     	index:'routeno',        width: "100",   type: "I", sorttype:"text",	    align:"center"},	
	  	{label:'정류소 ID',			name:'bstopid',         index:'bstopid',        width: "100",  type: "I", sorttype:"text", 	    align:"center"},
	  	{label:'통과 정류소명',   	name:'bstopnm',         index:'bstopnm',        width: "146",  type: "I", sorttype:"text",	    align:"left"}
       	];

var models2 = [
      			{onlyView: true, 
      			 label:'BIT ID',	name:'bitid',         	index:'bitid',       		width: "60",   	sorttype:"number", 	align:"center"},
      			{label:'단축 ID',		name:'short_bstopid',   index:'short_bstopid',      width: "50",    sorttype:"number", 	align:"center"},
            	{label:'지점명',	   	name:'bstopnm',    		index:'bstopnm',    		width: "100",  	sorttype:"text",    align:"left"},
            	{label:'정류장표준ID',	name:'bstopid',         index:'bstopid',    		width: "70",	sorttype:"number", 	align:"center"},
            	{label:'모바일ID',	    name:'bitserver_id',   	index:'bitserver_id',		width: "85",  	sorttype:"number",	align:"center"},
            	{label:'BIT타입',		name:'cdnm',      	    index:'cdnm',     			width: "80",   	sorttype:"text", 	align:"center"},
            	{label:'LAT',	    name:'lat',             index:'lat',			 	width: "90",   	sorttype:"number",  align:"left"},
            	{label:'LNG',	    name:'lng',             index:'lng',                width: "90",   	sorttype:"number",	align:"left"}
            	];

function createGrid() {
	
	makeGrid("#bit_supply_list", models1, 110, "resultList", null, onComplete1, null);	
	
	function onComplete1(data) {
		var row_count = $("#bit_supply_list").jqGrid("getGridParam", "reccount");
		$("#list_count").text(row_count);
	}
	
	$(window).bind('resize', function() {
		$("#bit_supply_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 23);
		$("#bit_supply_list").jqGrid('setGridWidth',$(".subcon_con3").width());
	}).trigger('resize');	
	
	loadGrid();
}

function loadGrid() {
	showLoader();	
	var params = {
			bit_id : $("#input_bit_id").val()
	};
	reloadGrid("#bit_supply_list", "./bit/selectBitArrivalList.do", params, "resultList");
}

function execlDownload(){
	// 제공정보 이력과 동일한 controller
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/excelBitOfferInfoList.do";
	form.method = "POST";
	
	var param = document.createElement('INPUT');     
	var rowData = $("#bit_supply_list").jqGrid("getRowData");
	var value = JSON.stringify(rowData);
	
	param.type  = 'HIDDEN';
	param.name  = 'json';
	param.value = value;
	
	form.appendChild(param);
	
	document.body.appendChild(form);	
	inquiryFileDownload("excelDown", true);
}