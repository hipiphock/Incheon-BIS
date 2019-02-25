$(document).ready(function(){
	appendLoader("조희중..")
	ajaxCall("./bit/selectParamCateList.do", null, null, load_paramlist, null); 
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'BITTPCD'}, null, load_cdlist, null); 
	initGrid(); 
	initEvent(); 
});

var selected_paramid; 

// 더블클릭시 오른쪽 테이블에 데이터가 넘어가게끔 수정. 
function makeGrid(gridId, models, height, jsonRoot, selectCallback, completeCallback, dblClkCallback) {
	$(gridId).jqGrid({
		datatype    : "local",
	    colModel    : models,   //grid data model array
        loadonce    : true,
	    sortable    : false,    //column draggable 
	    filterable  : true,
	    sortorder   : "desc",
	    height      : height,
	    width       : 335,
	    editurl     : "clientArray",
	    shrinkToFit : false, //가로 스크롤
	    rownumbers  : true,
	    viewrecords : false,
	    loadtext    : '로딩중..',
	    gridview    : true,
	    hiddengrid  : true,
	    rowNum      : 99999,
	    ondblClickRow: function(rowid) {  //double click event
	    	if(dblClkCallback != undefined) 
	    		dblClkCallback(rowid);
	    	
	    	defaultOnSelected(models, gridId, rowid);
	    },
	    onSelectRow : function(rowid) {
	    	if(selectCallback != undefined) {selectCallback(rowid);}	
	    	if(models[0].onlyView == true) {return;}
	    	
	    },
	    jsonReader: {
		    repeatitems : false,
		    root        : jsonRoot,
		    id          : "NM"
	    },
		loadBeforeSend: function(){
		},
	    loadComplete: function(data) {
	    	$(this).jqGrid('hideCol', 'rn'); //row number hide
	    	if(data.rows.length == 0){
	    		$(gridId +">tbody").append("<tr id=\"search_none\" style='height:120px;'><td align='center' colspan='"+models.length+"'>검색 결과가 없습니다.</td></tr>");
	    	}

	    	if(completeCallback != undefined) completeCallback(data);	
	    }
	});	
	
	if(models[0].btn!= undefined)
		setButtonEvent(models[0].btn);	
}

function load_paramlist(data) { 
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.paramid; 
		temp.value = value.paramid; 
		$("#param_option").append(temp);
	});
}

function load_cdlist(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm; 
		temp.value = value.cd; 
		$("#cd_option").append(temp);
	});
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm; 
		temp.value = value.cd; 
		$(".in100").append(temp);
	});
}

var models = [
              {label:"파라미터ID",		name:"paramid",			index:"paramid",			width: "75", align:"center", sorttype:"text", frozen: true , type:"I"},
              {label:"이름",			name:"title",			index:"title",				width: "75", align:"center", sorttype:"text",frozen: true, type:"I"},
              {label:"안내기유형",		name:"bittype",			index:"bittype",			width: "75", align:"center", sorttype:"text",frozen: true},
              {label:"통신재시도횟수",		name:"comm_retrycnt",	index:"comm_retrycnt",		width: "75", align:"center", sorttype:"text",frozen: true, type:"I"},
              {label:"통신타임아웃",		name:"comm_tmout",		index:"comm_tmout",			width: "75", align:"center", sorttype:"text",frozen: true, type:"I"},
              {label:"전광판점등시간",		name:"disp_onhms",		index:"disponhms",			width: "75", align:"center", sorttype:"text",frozen: true, type:"T"},
              {label:"전광판소등시간",		name:"disp_offhms",		index:"dispoffhms",				width: "75", align:"center", sorttype:"text",frozen: true, type:"T"},
              {label:"버스정보",		name:"dispcycl",		index:"dispcycl",				width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"수동메세지",		name:"msgcycl",			index:"msgcycl",				width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"팬온도(°C)",		name:"fan_temper",		index:"fan_temper",				width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"히터온도(°C)",	name:"heat_temper",		index:"heat_temper",			width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"노선폰트유형",		name:"route_font",		index:"route_font",				width: "75", align:"center", sorttype:"text", type:"S"},
              {label:"노선폰트색상",		name:"route_fontcolor",	index:"route_fontcolor",		width: "75", align:"center", sorttype:"text", type:"S"},
              {label:"도착폰트종류",		name:"arrive_font",		index:"arriv_font",				width: "75", align:"center", sorttype:"text", type:"S"},
              {label:"도착폰트색상",		name:"arrive_fontcolor",	index:"arriv_fontcolor",	width: "75", align:"center", sorttype:"text", type:"S"},
              {label:"정류소폰트유형",		name:"bstop_font",		index:"bstop_font",				width: "75", align:"center", sorttype:"text", type:"S"},
              {label:"정류소폰트색상",		name:"bstop_fontcolor",	index:"bstop_fontcolor",		width: "75", align:"center", sorttype:"text", type:"S"},
              {label:"팬온도(°C)",		name:"lcd_fan_temper",		index:"lcd_fan_temper",		width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"히터온도(°C)",	name:"lcd_heat_temper",		index:"lcd_heat_temper",		width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"팬온도1(%)",		name:"lcd_fan_temper_1",	index:"lcd_fan_temper_1",		width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"히터온도1(%)",	name:"lcd_heat_temper_1",	index:"lcd_heat_temper_1",		width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"음량제어(낮)",		name:"volume_day_hms",		index:"volume_day_hms",			width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"음량제어(밤)",		name:"volume_night_hms",	index:"volume_night_hms",		width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"음량(낮)",		name:"day_volume",			index:"day_volume",				width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"음량(밤)",		name:"night_volume",		index:"night_volume",			width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"밝기제어(낮)",		name:"bright_day_hms",		index:"bright_day_hms",			width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"밝기제어(밤)",		name:"bright_night_hms",	index:"bright_night_hms",		width: "75", align:"center", sorttype:"text", type:"I"},
              {label:"밝기(낮)",		name:"day_bright",			index:"day_bright",				width: "75", align:"center", sorttype:"text", type:"S"},
              {label:"밝기(밤)",		name:"night_bright",		index:"night_bright",			width: "75", align:"center", sorttype:"text", type:"S"},
          
              {name:"bittpcd",    index:"bittpcd",   type:"S",  	 hidden:true}
              ];


var models2 = [
              {label:"파라미터ID",		name:"paramid",			index:"paramid",				width: "75", align:"center", sorttype:"text"},
              {label:"파라미터명",		name:"title",			index:"title",				width: "75", align:"center", sorttype:"text"},
              {label:"LCD점등시간",		name:"lcd_on_time",		index:"lcd_on_time",				width: "75", align:"center", sorttype:"text"},
              {label:"LCD소등시간",		name:"lcd_off_time",	index:"lcd_off_time",				width: "75", align:"center", sorttype:"text"},
              {label:"LCD밝기",		name:"lcdbright",		index:"lcdbright",				width: "75", align:"center", sorttype:"text"},
              {label:"음량",			name:"volume",			index:"volume",				width: "75", align:"center", sorttype:"text"},
              {label:"언어설정",		name:"language",		index:"language",				width: "75", align:"center", sorttype:"text"},
              {label:"운영최고온도(°C)",	name:"temp_max",		index:"temp_max",				width: "75", align:"center", sorttype:"text"},
              {label:"운영최저온도(°C)",	name:"temp_min",		index:"temp_min",				width: "75", align:"center", sorttype:"text"},
              {label:"등록일시",		name:"regdate",			index:"regdate",				width: "75", align:"center", sorttype:"text"}
               ];

//인천 그리드 초기화
function initGrid() {
	makeGrid("#main_table", models, 300, "resultList", null, onComplete, dbClick); 
	
	function onComplete(data) { 
		hideLoader();
		$(".sub_title").eq(0).find("h3").text("인천안내기 제공 시나리오 검색결과 "+data.records+" 건");
	}
	
	function dbClick(data) {
		
		var rowData = $("#main_table").jqGrid('getRowData', data);
		selected_paramid = rowData.paramid; 
		$(".chart v0304Chart select option").removeAttr("selected");
		if(rowData.route_font) 
			$("#select_route_font option:contains('"+rowData.route_font+"')").attr("selected","selected");
		if(rowData.bstop_font) 
			$("#select_bstop_font option:contains('"+rowData.bstop_font+"')").attr("selected","selected");
		if(rowData.arrive_font) 
			$("#select_arrive_font option:contains('"+rowData.arrive_font+"')").attr("selected","selected");
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height()-45);
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');

	$("#main_table").jqGrid('setGroupHeaders', {
		useColSpanStyle: false,
		groupHeaders: [
		               {startColumnName:'paramid', numberOfColumns:7, titleText: '기본정보'},
		               {startColumnName:'dispcycl', numberOfColumns:2 , titleText: '표출주기'},
		               {startColumnName:'fan_temper', numberOfColumns:8 , titleText: 'LED'},
		               {startColumnName:'lcd_fan_temper', numberOfColumns:12, titleText: 'LCD'}
		               ]
	});
	
	// 프로즌 활성화시 1. 프로즌 컬럼의 높이가 높아지고 2. 프로즌된 컬럼 선택시 jquery 오류발생
	//$("#main_table").jqGrid('setFrozenColumns');
}

//광역 그리드 초기화 
function initWGrid() {
	makeGrid("#main_table", models2, 300, "resultList", null, onComplete, dbClick)

	function onComplete(data) { 
		hideLoader();
		$(".sub_title").eq(0).find("h3").text("광역안내기 제공 시나리오 검색결과 "+data.records+" 건");
	}
	
	function dbClick(data) {
		var rowData = $("#main_table").jqGrid('getRowData', data);
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height()-45);
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	$("#main_table").jqGrid('filterToolbar',
    {
					autosearch: true,
					stringResult: true,
					searchOnEnter: true,
					defaultSearch: "cn"
    });
	setFilter("main_table", true); 
}

function initEvent() {
	//검색
	$("#btn_search").click(function() {
		var bittpcd = $("#cd_option option:selected").val();
		var paramid = $("#param_option option:selected").val(); 
		if($("#w_option option:selected").val() == 1) {
			if(bittpcd == "-1")
				bittpcd = ""; 
			if(paramid == "-1")
				paramid = ""; 
			showLoader();
			reloadGrid("#main_table","./bit/selectBitScenario.do",{bittpcd:bittpcd, paramid:paramid},"resultList"); 
		}
		else{
			if(paramid == "-1")
				paramid = "";
			showLoader(); 
			reloadGrid("#main_table","./bit/selectWBitScenario.do",{paramid:paramid},"resultList"); 
		}
	});
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//광역
	$("#w_option").change(function () {
		$("#main_table").jqGrid('GridUnload');
		if($("#w_option option:selected").val() == 1) {
			showLoader();
			$("#cd_option").prop("disabled", false);
			initGrid();
		}
		else {
			showLoader();
			$("#cd_option").prop("disabled", true);
			initWGrid();
		}
	});
	
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#main_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#main_table");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	
	//초기화 
	$("#btn_reset").click(function () {
		$("#input_paramid").val(""); 
		$("#input_title").val("");
		$("#input_comm_retrycnt").val("");
		$("#input_comm_tmout").val("");
		$("#input_disp_onhms").val("");
		$("#input_disp_offhms").val("");
		$("#input_dispcycl").val("");
		$("#input_msgcycl").val(""); 
		$("#input_fan_temper").val("");
		$("#input_heat_temper").val("");
		$("#input_lcd_fan_temper").val("");
		$("#input_lcd_heat_temper").val("");
		$("#input_lcd_fan_temper_1").val("");
		$("#input_lcd_heat_temper_1").val("");
		$("#input_volume_day_hms").val("");
		$("#input_volume_night_hms").val("");
		$("#input_day_volume").val("");
		$("#input_night_volume").val("");
		$("#input_bright_day_hms").val("");
		$("#input_bright_night_hms").val(""); 
		$("#select_day_bright").val("0");
		$("#select_night_bright").val("0");
		$("#select_bstop_font").val("0");
		$("#select_bstop_fontcolor").val("Red");
		$("#select_arrive_font").val("0");
		$("#select_arrive_fontcolor").val("Red");
		$("#select_route_font").val("0");
		$("#select_route_fontcolor").val("Red");
		$("#select_bittpcd").val($("#cd_option").find("option").eq(1).val());
		
		$("#main_table").jqGrid("resetSelection");
	});
	
	//신규등록
	$("#btn_new").click(function () {
		ajaxCall("./bit/selectBitScenario.do",null,null,check_dup,null); 
	});

	//수정
	$("#btn_modify").click(function () {
		if(!selected_paramid){
			showAlert("수정할 파라미터를 더블클릭하세요.")
			return ;
		}
		showConfirmDlg(selected_paramid + "를 수정하시겠습니까?", update_confirm);
		function update_confirm() {
			var params = {
			paramid:selected_paramid, 
			
			title:$("#input_title").val(),
			bittpcd:$("#select_bittpcd").val(),
			comm_retrycnt:$("#input_comm_retrycnt").val(),
			comm_tmout:$("#input_comm_tmout").val(),
			disp_onhms:$("#input_disp_onhms").val(),
			disp_offhms:$("#input_disp_offhms").val(),
			dispcycl:$("#input_dispcycl").val(),
			msgcycl:$("#input_msgcycl").val(),
			
			fan_temper:$("#input_fan_temper").val(),
			heat_temper:$("#input_heat_temper").val(),
			lcd_fan_temper:$("#input_lcd_fan_temper").val(),
			lcd_heat_temper:$("#input_lcd_heat_temper").val(),
			lcd_fan_temper_1:$("#input_lcd_fan_temper_1").val(),
			lcd_heat_temper_1:$("#input_lcd_heat_temper_1").val(),
			
			volume_day_hms:$("#input_volume_day_hms").val().replace(/:/g,""),
			volume_night_hms:$("#input_volume_night_hms").val().replace(/:/g,""),
			bright_day_hms:$("#input_bright_day_hms").val().replace(/:/g,""),
			bright_night_hms:$("#input_bright_night_hms").val().replace(/:/g,""),
			
			day_bright:$("#select_day_bright option:selected").val(),
			night_bright:$("#select_night_bright option:selected").val(),
			day_volume:$("#input_day_volume").val(),
			night_volume:$("#input_night_volume").val(),
			
			//인자로 전달할 fonttpcd, font_colorcd 값을 어떻게 구하나?  
			fonttpcd:1110,
			font_colorcd:1100
		
			};
			ajaxCall("./bit/updateBitParam.do",params,null,reload(2),null); 
		}
	});
	
	//삭제
	$("#btn_delete").click(function () {
		
		if(selected_paramid) {
			showConfirmDlg(selected_paramid + "를  삭제  하시겠습니까?", confirm);
			function confirm() {
				ajaxCall("./bit/deleteBitParam.do",{searchWord:selected_paramid},null,reload(1),null);
			}
		}
		else
			showAlert("삭제할 파라미터를 더블클릭하세요.")
	});
}

function check_dup (data) {
	var flag = 1; 
	$.each(data.resultList, function(index, value){
		if(value.paramid == $("#input_paramid").val()){
			showAlert("중복된 파라미터ID입니다.");
			flag =0;
			return; 
		}
	});
	
	if(flag == 1 ) {
		var params = {
		paramid:$("#input_paramid").val(), 
		title:$("#input_title").val(),
		bittpcd:$("#select_bittpcd").val(),
		comm_retrycnt:$("#input_comm_retrycnt").val(),
		comm_tmout:$("#input_comm_tmout").val(),
		disp_onhms:$("#input_disp_onhms").val(),
		disp_offhms:$("#input_disp_offhms").val(),
		dispcycl:$("#input_dispcycl").val(),
		msgcycl:$("#input_msgcycl").val(),
		
		fan_temper:$("#input_fan_temper").val(),
		heat_temper:$("#input_heat_temper").val(),
		lcd_fan_temper:$("#input_lcd_fan_temper").val(),
		lcd_heat_temper:$("#input_lcd_heat_temper").val(),
		lcd_fan_temper_1:$("#input_lcd_fan_temper_1").val(),
		lcd_heat_temper_1:$("#input_lcd_heat_temper_1").val(),
		volume_day_hms:$("#input_volume_day_hms").val(),
		volume_night_hms:$("#input_volume_night_hms").val(),
		day_volume:$("#input_day_volume").val(),
		night_volume:$("#input_night_volume").val(),
		bright_day_hms:$("#input_bright_day_hms").val(),
		bright_night_hms:$("#input_bright_night_hms").val(),
		day_bright:$("#select_day_bright option:selected").val(),
		night_bright:$("#select_night_bright option:selected").val(),
		
		//인자로 전달할 fonttpcd, font_colorcd 값을 어떻게 구하나?  
		fonttpcd:1110,
		font_colorcd:1100
		};
		
		ajaxCall("./bit/insertBitParam.do",params,null,reload(3),null);
	}
}

function reload(flag) {
	if(flag ==1)
		showAlert("삭제되었습니다.");
	else if(flag==2)
		showAlert("수정되었습니다.");
	else if(flag==3)
		showAlert("등록되었습니다.");
	selected_paramid = ""; 
	$("#btn_search").trigger("click");
}

function excelDownload(title, grid_id) {
	$("#excelDown").remove();
	var grid = $(grid_id);
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST"; 
	
	var fileName = JSON.stringify(title);
	var param = document.createElement('INPUT');
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid('getGridParam','colNames'));
	
	var idData = grid.jqGrid('getGridParam', 'colModel');
	var columnName = []; 
	$.each(idData, function (index,value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type = 'HIDDEN'; 
	param.name = 'json';
	param.value = fileName + columnLabel + columnName + columnData; 
	
	form.appendChild(param);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true); 
}