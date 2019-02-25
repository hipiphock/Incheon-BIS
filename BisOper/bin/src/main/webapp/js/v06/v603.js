$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initPicker();
	initEvent();
	//setCategory();
});
var selectDlg;

// 조회결과(좌측 탭)
var models1 = [
              {onlyView: true, 
               label:"BIT ID",			name:"bitid",			  		index:"bitid",			width: "80", 	align:"center", sorttype:"number",	hidden:false, sortable:true},
              {label:'단축 ID',			name:'short_bstopid',   index:'short_bstopid',  		width: "80", 	align:"center", sorttype:"number",	hidden:false, sortable:true},
              {label:"지점명",			name:"bstopnm",				index:"bstopnm",				width: "180", 	align:"center", sorttype:"text",	hidden:false, sortable:true},
              {label:"일시",				name:"colldt",					index:"colldt",			width: "180", 	align:"center", sorttype:"date",	hidden:false, sortable:true},
              {label:"비고",				name:"description",			index:"description",		width: "110", 	align:"center", sorttype:"date",	hidden:false, sortable:true}
              ]

// BIT 목록(우측 탭)
var models2 = [
               {onlyView: true, 
            	label:"BIT ID",			name:"bitid",			  			index:"bitid",						width: "70", 	align:"center", hidden:false, sortable:true},
               //{label:"모바일ID",		name:"service_id",			 		index:"service_id",						width: "40", 	align:"center", hidden:false, sortable:true},
               {label:"지점명",			name:"bstopnm",			 	 	index:"bstopnm",					width: "160", 	align:"center", hidden:false, sortable:true},
               {label:"BIT종류",		name:"cdnm",			 			index:"cdnm",						width: "130", 	align:"center", hidden:false, sortable:true},
               {label:"비고",			name:"etc",			 				index:"etc",							width: "185", 	align:"left", hidden:false, sortable:true},
               //{label:"설치형태",		name:"bit_install_type_name",		index:"bit_install_type_name",		width: "60", 	align:"center", hidden:false, sortable:true},
               //{label:"사업명",			name:"business_title",			  	index:"business_title",				width: "220", 	align:"center", hidden:false, sortable:true},
               //{label:"제조사",			name:"company_name",			index:"company_name",			width: "70", 	align:"center", hidden:false, sortable:true}
               ]

// 
var models3 = [
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

function initPicker(){
	initCalendar("start_date", YEAR_FORMAT1, true);
	initCalendar("end_date", YEAR_FORMAT1, true);
	initTimePicker("start_time", TIME_FORMAT1, true);	
	initTimePicker("end_time", TIME_FORMAT1, true);
	
	var today = new Date();
//	var prev = new Date(Date.parse(today) - 1000 * 60 * 10); //10분전
//	$("#start_time").timepicker("setTime", prev.format(TIME_FORMAT1));
	
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //10분전	
	$("#start_date").val($.datepicker.formatDate(YEAR_FORMAT1, prev));	
}

function initGrid(){
	makeFilterGrid("#shock_list", models1, 110, "resultList1", null, null, onDblClick1);
	//makeFilterGrid("#bit_list", models2, 110, "resultList2", null, null, onDblClick2);
	
	function onDblClick1(rowid) {
		var rowData = $("#shock_list").jqGrid('getRowData', rowid);
		$("#span_bit_id").text("BIT ID [" + rowData.bitid + "]");
		$("#span_bit_name").text(rowData.bstopnm);
		inquiryImage(rowData.bitid);
	}
	
//	function onDblClick2(rowid) {
//		var rowData = $("#bit_list").jqGrid('getRowData', rowid);
//		$("#span_bit_id").text("BIT ID [" + rowData.bitid + "]");
//		$("#span_bit_name").text(rowData.bstopnm);
//		inquiryImage(rowData.bitid);		
//	}
	
	$(window).bind('resize', function() {
		$("#shock_list").jqGrid('setGridHeight', $(".subcon_con4").height()-23);
		$("#shock_list").jqGrid('setGridWidth', $(".subcon_con4").width());
//		$("#bit_list").jqGrid('setGridHeight', $(".subcon_con4").height()-23);
//		$("#bit_list").jqGrid('setGridWidth', $(".subcon_con4").width());
	}).trigger('resize');	
	
	loadLeftGrid();
	
//	loadRightGrid();
}

function inquiryImage(bitId) {
	var params = {
			bit_id : bitId,
			type : 1
	}
	
	ajaxCall("./bit/getBitImage.do", params, null, onSuccessImg, null);
	
	function onSuccessImg(data) {
		if(data && data.resultList.length > 2) {
			if($("#image_wrap").hasClass("img_two")) {
				$("#image_wrap").removeClass("img_two");
			}
		}else {
			if($("#image_wrap").hasClass("img_two") == false) {
				$("#image_wrap").addClass("img_two");
			}
		}
		var strTemp = "";
		$("#image_wrap").empty();
		$.each(data.resultList, function(index, value) {
			
			strTemp = "<img id='img_"+index+"'>";
			$("#image_wrap").append(strTemp);
			$("#img_"+index).attr("src", "data:image/png;base64,"+value.base64Img);
			console.log(value.create_date);
		});
	}
}

function initEvent(){
	setDialog();
	
	$("select[name='select_group'").change(function(){
		loadRightGrid()});
	
//	$("#btn_clear_rightTab").click(function(){
//		$("#text_search_rightTab").val("");
//		$("#sel_bit_category option:eq(0)").prop("selected", true);
//		$("#sel_bit_type option:eq(0)").prop("selected", true);
//		$("#sel_bit_business option:eq(0)").prop("selected", true);
//		$("#check_detail_rightTab").prop("checked",false);
//		$("#check_detail_rightTab").trigger("change");
//		$("#img_snapshot").attr("src","");
//		$("#span_bit_id").text("BIT ID []");
//		$("#span_stop_name").text("선택한 BIT 지점명이 나옵니다.");
//		loadRightGrid();
//	});
	
	$("#btn_search_rightTab").click(function(){
		loadRightGrid();
	});
	
	$("#text_search_rightTab").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_search_rightTab").trigger("click");		
	});
	
//	$("#check_detail_rightTab").change(function(){		
//		if($(this).is(":checked")) {
//			setFilter("bit_list", true);
//			$("#bit_list").jqGrid('setGridHeight',$(".subcon_con4").height() - 50);
//		}else {
//			setFilter("bit_list", false);
//			$("#bit_list").jqGrid('setGridHeight',$(".subcon_con4").height() - 25);
//		}
//	});
	
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	});
	
	$("#btn_search_leftTab").click(function(){		
		if( (!$("#input_bit_id").val() == "") || $("#check_all").is(":checked") ){
			if(checkTermEffective($("#start_date"),$("#end_date"),$("#start_time"),$("#end_time"))) {
				loadLeftGrid();				
				$("#img_snapshot").attr("src","");
			}else {
				showAlert("조회기간을 잘못 설정하였습니다.");
			}
		}else{
			showAlert("BIT 지점 선택 또는 전체지점을 체크해주십시오.");
		}
	});
	
	$("#btn_refresh").click(function(){
		if($("#input_bit_id").val() == ""){
			initPicker();
			loadLeftGrid();
		}else{
			$("#btn_search_leftTab").trigger("click");			
		}
	});
	
	$("#btn_clear_leftTab").click(function(){
		$("#text_search").val("");
		$("#check_all").prop("checked", false);
		$("#check_detail_leftTab").prop("checked", false);
		$("#check_detail_leftTab").trigger("change");
		$("#shock_list").clearGridData();
		$("#input_bit_id").val("");
		$("#input_stop_name").val("");
		$("#img_snapshot").attr("src","");
		$("#span_bit_id").text("BIT ID []");
		$("#span_stop_name").text("선택한 BIT 지점명이 나옵니다.");		
	});
	
	$("#check_detail_leftTab").change(function(){		
		if($(this).is(":checked")) {
			setFilter("shock_list", true);
			$("#shock_list").jqGrid('setGridHeight',$(".subcon_con4").height() - 50);
			
			var tempgrid = $("#shock_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("shock_list", false);
			$("#shock_list").jqGrid('setGridHeight',$(".subcon_con4").height() - 23);
			
			$("#shock_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
	
	$("#btn_excel").click(function() {
		if( 0 < $("#shock_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");
	});	
}

function setCategory(){
	ajaxCall("./bit/selectCategory.do", null, null, category_success, null);
	
	function category_success(data) {
		var bitGroupList = data.bitGroupList;
		var bitTypeList = data.bitTypeList;		
		var bitBusinessList = data.bitBusinessList;		
		
		$("#sel_bit_category").empty();
		$("#sel_bit_type").empty();		
		$("#sel_bit_business").empty();
		
		var text = "<option value=\"\">전체</option>";
		$("#sel_bit_category").append(text);
		$("#sel_bit_type").append(text);
		$("#sel_bit_business").append(text);
		
		$.each(bitGroupList, function(index, value){
			var text = "<option value=\"" + value.bit_cate_id + "\">" + value.cate_name + "</option>";
			$("#sel_bit_category").append(text);			
		});
		
		$.each(bitTypeList, function(index, value) {
			var text = "<option value=\"" + value.bit_type + "\">" + value.bit_type_name + "</option>";
			$("#sel_bit_type").append(text);
			$("#select_bit_type_name").append(text);
		});
		
		$.each(bitBusinessList, function(index, value) {
			var text = "<option value=\"" + value.business_id + "\">" + value.business_title + "</option>";
			$("#sel_bit_business").append(text);
			$("#select_business_title").append(text);
		});		
	}	
}

function loadLeftGrid(){
	showLoader();
	var params = {
			text_search : $("#input_bit_id").val(),
            start_date_time : replaceDateTime("#start_date", "#start_time"),
            end_date_time : replaceDateTime("#end_date", "#end_time"),
            check_all : $("#check_all").is(":checked")
            };

	$("#shock_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#shock_list").jqGrid("destroyFilterToolbar");
	$("#check_detail_leftTab").attr("checked",false);
	
	reloadGrid("#shock_list", "./bit/selectShockHisList.do", params, "resultList");	
}

function loadRightGrid(){
	var params = {
			view_flag : "v603",
//			bit_cate_id : $("#sel_bit_category option:selected").val(),
//			bit_type : $("#sel_bit_type option:selected").val(),
//			business_id : $("#sel_bit_business option:selected").val(),
			searchWord : $("#text_search_rightTab").val()
	};
	
	reloadGrid("#bit_list", "./bit/selectBitList.do", params, "resultList");	
}

function replaceDateTime(date_id, time_id){
	var date = $(date_id).val().replace(/-/g,"");
	var time = $(time_id).val().replace(/:/g,"");
	// ex : 20171015010000
	return date + time;
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
	
	makeGrid("#pop_list", models3, 110, "resultList", null, null, dblClickPop);
	
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

function inquiryImage(bitId) {
	var params = {
			bit_id : bitId,
			type : 1
	}
	
	ajaxCall("./bit/getBitImage.do", params, null, onSuccessImg, null);
	
//	$("#bit_img").removeAttr("src").attr("src", "./bit/getBitImage.do?bit_id="+rowData.bit_id);
	function onSuccessImg(data) {			
		$.each(data.resultList, function(index, value) {
			// TODO BIT ID 매칭되는 모든 이미지가 로드 / 스냅샷 명명법 정립 필요
			console.log(value.create_date);
			console.log(value.base64Img);
			
			// decoder 사용 여부?
			$("#img_snapshot").attr("src","data:image/jpeg;base64," + value.base64Img);
		});		
	}
}

function execlDownload(){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/excelBitShockList.do";
	form.method = "POST";
		
	var param = document.createElement('INPUT');     
	var rowData = $("#shock_list").jqGrid("getRowData");
	var value = JSON.stringify(rowData);
	
	param.type  = 'HIDDEN';
	param.name  = 'json';
	param.value = value;
	
	form.appendChild(param);
	
	document.body.appendChild(form);	
	inquiryFileDownload("excelDown", true);
}