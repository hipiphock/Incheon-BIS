/**
 * BIT관리 - BIT 제어
 * @author 박경원
 * @since 2017-10-23
 */


var group_id = "";
var type = "";
var company_id = "";
var business_id = "";
var install_type = "";

$(document).ready(function(){
	setEvent();
	initialize();
	setCategory();
	
});

function initialize() {
	$("#ctrl_wrap tr").hide();
	$("#ctrl_wrap .new").show();
}



function setDefaultValue(id) {
	var params = {
			bitid: id,
			ctrltpcd: "2"
	}
	ajaxCall("./bit/selectCtrlBitParam.do", params, null, onSuccess, null);
	
	function onSuccess(data) {
		if(data.result == null || data.result.paramid == "") {
			$("#input_e_volume").val("3");
			$("#select_e_incoming_type option[value='0']").prop("selected", true);
			$("#input_e_incoming_time").val("180");
			$("#input_e_incoming_stop").val("3");
			$("#input_e_send_capture_cycle").val("300");
			$("#select_e_incoming_type option[value='0']").prop("selected", true);
			$("#input_e_arrv_info_time").val("30");
			$("#input_e_scenario_time").val("5");
			$("#input_e_fan_max_temper").val("3");
			$("#input_e_fan_min_temper").val("3");
			$("#input_e_heater_max_temper").val("3");
			$("#input_e_heater_min_temper").val("3");
			$("#select_e_volume_yn option[value='1']").prop("selected", true);
			
		}else {
			var res = data.result;
			$("#input_e_volume").val(res.e_volume);
			$("#select_e_incoming_type option[value='"+res.e_incoming_type+"']").prop("selected", true);
			$("#input_e_incoming_time").val(res.e_incoming_time);
			$("#input_e_incoming_stop").val(res.e_incoming_stop);
			$("#input_e_send_capture_cycle").val(res.e_send_capture_cycle);
			$("#select_e_bit_sort_type option[value='"+res.e_bit_sort_type+"']").prop("selected", true);

			$("#input_e_arrv_info_time").val(res.e_arrv_info_time);
			$("#input_e_scenario_time").val(res.e_scenario_time);
			$("#input_e_fan_max_temper").val(res.e_fan_max_temper);
			$("#input_e_fan_min_temper").val(res.e_fan_min_temper);
			$("#input_e_heater_max_temper").val(res.e_heater_max_temper);
			$("#input_e_heater_min_temper").val(res.e_heater_min_temper);
			$("#select_e_volume_yn option[value='"+res.e_volume_yn+"']").prop("selected", true);
		}
	}
}


function setEvent() {
	
	//전체 선택/해제
	$("#check_all").click(function() {
		if ($("#check_all").prop("checked")) {
//			$("#ctrl_wrap input[type=checkbox]").prop("checked",true);
			$("#check_reset").prop("checked", false);
		} else {
//			$("#ctrl_wrap input[type=checkbox]").prop("checked",false);
			$("#check_reset").prop("checked", true);
		}
	})
	
	$("#check_reset").click(function() {
		if ($("#check_reset").prop("checked")) {
//			$("#ctrl_wrap input[type=checkbox]").prop("checked",true);
			$("#check_all").prop("checked", false);
		} else {
//			$("#ctrl_wrap input[type=checkbox]").prop("checked",false);
			$("#check_all").prop("checked", true);
		}
	})
	
	
	//input 제한
	setInputCtrl("input_volume", "number", 5);
//	setInputCtrl("input_disp_st_time" + value, "number", 4);
//	setInputCtrl("input_disp_ed_time" + value, "number", 4);
//	setInputCtrl("input_fan_min_temperature" + value, "integer", 3);
//	setInputCtrl("input_fan_max_temperature" + value, "integer", 3);
	setInputCtrl("input_capture_base", "number", 5);
	
	//엑셀 다운로드
	$("#btn_excel_download").click(function() {
		execlDownload();
	})
	
	//새로고침
	$("#btn_refresh").click(function() {
		window.location.reload();
	})
	
	//엔터 검색
	$("#input_bitid").on("keydown", function(key) {
		if (key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	})
	
	//검색 이벤트
	$("#btn_search").click(function() {
		var detail = $("#sel_detail option:selected").text();
		if (detail == "전체") {
			detail = "";
		}
		loadGrid();
	})
	
	$("#select_servertpcd").change(function() {
		$("#input_bitid").val("");
		loadGrid();
		
		var selVal = $(this).find("option:selected").val();
		setCtrlLayout(selVal);
	}).trigger("change");
	
	//TODO 전송
	$("#btn_send").click(function() {
		var bit_ids = getSelectedBitIds();
		if (bit_ids.length == 0) {
			showAlert("BIT를 선택해주세요.");
			return;
		}
		
		showConfirmDlg("제어정보를 전송하시겠습니까?", function(){
			var servertp = $("#select_servertpcd option:selected").val();
			if($("#check_reset").prop("checked") && (servertp == "120" || servertp == "123" || servertp == "126")) {  // 장비 리셋
				var params = getResetParam(servertp, bit_ids);
				ajaxCall("./reset.soc", params, null, onSuccess, null);
			}else {
				var selected = $(":input:radio[name=wide_radio]:checked").val();
				
				if((selected == "" || selected == null) && servertp == "123") {
					showAlert("개별 제어 항목을 선태하세요.");
					return;
				}
				
				ajaxCall("./paramCtrl.soc", getParams(bit_ids), null, onSuccess, null);
			}
			
			
			function onSuccess(data) {
				console.log(data.result);
				if(data.result == "1") {
					showAlert("정상 전송 되었습니다.");
				}else {
					showAlert("전송 오류 발생");
				}
			}
		});
		
		
	});
	
	$("#btn_request").click(function() {
		//TODO 상태정보요청
		//db select
	});
	
	
	$(":input:radio[name=wide_radio]").change(function() {
		var st = $(":input:radio[name=wide_radio]:checked").val();
		var types = st.split("_");
		// 1: OPCODE
		// 2: 세부코드
		
		console.log("##  세부코드 " +types[2] + " opcode:" + types[1]);
		
		for(var i = 0; i <types.length; i++) {
			console.log("i " + i + "  | " + types[i]);
		}
		
//		var param = {
//				opcode : types[1]
//		};
//		console.log(param);
	}); 
}

function getResetParam(servertp, bit_ids) {
	var params;
	if(servertp == "120" || servertp == "126") {
		params = {
				bitid    : bit_ids,
				servertp : servertp,
				system   : $("#select_sys_ctrl option:selected").val(),
				lcd      : $("#select_lcd_ctrl option:selected").val(),
		}
	}else if(servertp == "123") {
		params = {
				bitid    : bit_ids,
				servertp : servertp,
				system   : $("#select_w_reset option:selected").val()
		}
	}
	return params;
}

function getWideCtrlValue(opCode1, opCode2) {
	var ret = "";
	switch (opCode1) {
	case "0x8E": //제어
		if(opCode2 == "6") {//lcd 전원
			ret = $("#select_w_lcd_onoff option:selected").val();
		}else if(opCode2 == "7") { //lcd 밝기
			ret = $("#select_w_lcd_light option:selected").val();
		}else if(opCode2 == "17") { //볼륨
			ret = $("#input_w_volume").val();
		}else if(opCode2 == "12") { //fan_onoff
			ret = $("#select_w_fan_onoff option:selected").val();
		}else if(opCode2 == "13") { //select_w_heater_onoff
			ret = $("#select_w_heater_onoff option:selected").val();
		}else if(opCode2 == "23") { //input_w_shock_val
			ret = $("#input_w_shock_val").val();
		}else if(opCode2 == "21") { //input_w_ism
			ret = $("#input_w_ism").val();
		}
		break;
	case "0x99": //운영온도
		var val1 = $("#input_w_temp_start").val();
		var val2 = $("#input_w_temp_end").val();
		ret = val1 + "_" + val2;
		break;
		
	case "0x9C": //LCD 동작시간
		var val1 = $("#input_w_monitor_on").val();
		var val2 = $("#input_w_monitor_off").val();
		ret = val1 + "_" + val2;
		break;
	case "0X92": //언어
		ret = $("#select_w_lang option:selected").val();
		break;
	}
	
	return ret;
}


function getParams(ids) {
	var type = $("#select_servertpcd option:selected").val();
	var params;
	switch (Number(type)) {
	case 120:
	case 126:
		console.log("##server new " + type);
		params = {
			bitid               : ids,
			servertp            : type,
			e_volume            : $("#input_e_volume").val(),      
			e_incoming_type     : $("#select_e_incoming_type option:selected").val(),	
			e_volume_yn         : $("#select_e_volume_yn option:selected").val(),	
			e_incoming_time     : $("#input_e_incoming_time").val(),	
			e_incoming_stop     : $("#input_e_incoming_stop").val(),	
			e_send_capture_cycle: $("#input_e_send_capture_cycle").val(),
			e_bit_sort_type     : $("#select_e_bit_sort_type option:selected").val(),	
			e_monitor_on        : "0500",	
			e_monitor_off	    : "2359",
			e_fan_max_temper    : $("#input_e_fan_max_temper").val(),	
			e_fan_min_temper    : $("#input_e_fan_min_temper").val(),	
			e_heater_max_temper : $("#input_e_heater_max_temper").val(),
			e_heater_min_temper : $("#input_e_heater_min_temper").val(),
			e_scenario_time     : $("#input_e_scenario_time").val(),  
			e_arrv_info_time    : $("#input_e_arrv_info_time").val(),	
			e_send_status_cycle : "30"
		}
		break;
	case 122: //인천 확대
	case 121: //인천
	case 125: //인천
		console.log("##server 인천/확대 ids " + ids);
		params = {
			bitid              : ids,
			servertp           : type,
			i_reset            : $("#select_i_power_reset option:selected").val(),  //전원 리셋 여부
			i_power_mode       : $("#select_i_power_mode option:selected").val(),   //화면 전원   자동
			i_fan_mode         : $("#select_i_fan_mode option:selected").val(),	  //fan mode 자동
			i_heater_mode      : $("#select_i_heater_mode option:selected").val(),//heater mode 자동	
			i_volume_mode      : $("#select_i_volume_mode option:selected").val(),	//volume mode 자동
			i_light_mode       : $("#select_i_light_mode option:selected").val(),  //휘도 자동 여부
			i_light_value      : $("#select_i_light_value option:selected").val(),   //휘도 값
			i_lcs_operCtrl     : $("#select_i_lcs_operCtrl option:selected").val(), //lcs 운영제어
			i_monitor_onoff    : $("#select_i_monitor_onoff option:selected").val(), //화면 on/off
			i_fan_onoff        : $("#select_i_fan_onoff option:selected").val(),   //팬 on/off
			i_heater_onoff     : $("#select_i_heater_onoff option:selected").val(), //heater on/off
			i_volume           : $("#input_i_volume").val(),    //volume
			i_led_light        : $("#input_i_led_light").val(), //led light
			i_tts_volume       : $("#input_i_tts_volume").val(), //tts vol
			i_kr               : $("#input_i_kr").val(),         //한국어 
			i_en               : $("#input_i_en").val(),         //영어
			i_ch               : $("#input_i_ch").val()          //중국어
		}
		break;
	case 123: // 광역
		console.log("##server 광역  " + type);
		var selected = $(":input:radio[name=wide_radio]:checked").val();
		var codes = selected.split("_");
		console.log("## 컨트롤 구분 " +codes[2] + " opcode:" + codes[1]);
		console.log("## selected " +selected);
		console.log("## selected " +selected.substring(6, selected.length-6));
		
		console.log("##  세부코드 " +codes[2] + " opcode:" + codes[1]);
		var val = getWideCtrlValue(codes[1], codes[2]);
		params = {
				bitid              : ids,
				servertp           : type,
				opcode1            : codes[1],
				opcode2            : codes[2],
				value              : val
		};
		break;
	}
	return params;
}

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/downloadBitControlExcel.do";
	form.method = "POST";
	
	var	para1 = document.createElement('INPUT');     
	var rowData = $("#base_info_list").jqGrid("getRowData");
	var value = JSON.stringify(rowData);
	
	para1.type  = 'HIDDEN';
	para1.name  = 'json';
	para1.value = value;

	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}

//그룹화, 클릭 이벤트
function setCategory() {
	ajaxCall("./sys/selectCodeList.do", {cdcategid: 'BITTPCD'}, null, category_success, null);

	function category_success(data) {
		$("#select_bittpcd").empty();
		$("#select_bittpcd").append("<option value=\"\">전체</option>");
		var text = "";
		$.each(data.resultList, function(index, value) {
			text = "<option value=\"" + value.cd + "\">" + value.cdnm + "</option>";
			$("#select_bittpcd").append(text);
		});
		
		$("#select_bittpcd").change(function() {
			loadGrid();
		});
		
		bitGrid();
	}
}

/*****************
 * 서버별 제어항목 화면 세팅
 *****************/
function setCtrlLayout(value) {
	
	$("#ctrl_wrap tr").hide();
	
	switch (Number(value)) {
	case 120:  //신규 chart_top new
	case 126:
		$("#ctrl_wrap .new").show();
		$(".subcon_right div.new").show();
		
		$("#select_sys_ctrl").show();
		$("#select_lcd_ctrl").show();
		
		$("#select_w_reset").hide();
		break;
	case 121:  //인천
	case 122:  //인천확대
	case 125:  //인천
		$("#ctrl_wrap .ic").show();
		$(".subcon_right div.new").hide();
		break;
//		$("#ctrl_wrap .ic").show();
//		$(".subcon_right div.new").hide();
		break;
	case 123:  //광역
		$(".chart_top").show();
		$(".all_check").show();
		 
		$("#ctrl_wrap .wide").show();
		
		$("#select_sys_ctrl").hide();
		$("#select_lcd_ctrl").hide();
		$("#select_w_reset").show();
		
		break;
	case 124:  //강화
		showAlert("강화 장비는 제어되지 않습니다.");
		break;
	}
}


function bitGrid() {
	
	var grid_height = 500;
	//기본정보
	var models1 = [
//	                {label:"관리번호",		name:"facilid",					index:"facilid",      		width: "70", 	align:"center", sorttype:"number"},
	                {onlyView: true,
	                 label:"단축 ID",		name:"short_bstopid",			index:"short_bstopid",      width: "70", 	align:"center", sorttype:"number"},
	   	        	{label:"BIT ID",	name:"bitid",   				index:"bitid",     			width: "80", 	align:"center", sorttype:"number"},
	   	        	{label:"설치위치",		name:"detail",      			index:"detail",       		width: "164", 	align:"left", 	sorttype:"text"},
	   	        	{label:"BIT 유형",	name:"bittpcd_nm",          	index:"bittpcd_nm",     	width: "165", 	align:"center", sorttype:"text"},
	   	        	{label:"수집일시",		name:"colldt",					index:"colldt",   			width: "130", 	align:"center", sorttype:"text"},
	   	        	{label:"IP",		name:"ipaddr_1",    			index:"ipaddr_1",      		width: "100", 	align:"center", sorttype:"text"},
	   	        	{label:"통신회선",		name:"com_linenum",  			index:"com_linenum",     	width: "150", 	align:"center", sorttype:"text"},
	   	        	{label:"구분",		name:"descr",					index:"descr",       		width: "92", 	align:"center", sorttype:"text"},
	   	        	
	   	        	{name:"bittpcd",				index:"bittpcd",				            hidden:true},
	   	        	{name:"volume",					index:"volume",					type: "I",  hidden:true},
	   	        	{name:"bright_autoyn",			index:"bright_autoyn",			type: "S",  hidden:true},
	   	        	{name:"disp_onoff_1",			index:"disp_onoff_1",			type: "S",  hidden:true},
	   	        	{name:"disp_onoff_2",			index:"disp_onoff_2",			type: "S",  hidden:true},
	   	        	{name:"fan_onoff",				index:"fan_onoff",				type: "S",  hidden:true},
	   	        	{name:"heat_onoff",				index:"heat_onoff",				type: "S",  hidden:true},
	   	        	{name:"tts_ratio_korea",		index:"tts_ratio_korea",		type: "S",  hidden:true},
	   	        	{name:"tts_ratio_english",		index:"tts_ratio_english",		type: "S",  hidden:true},
	   	        	{name:"tts_ratio_china",		index:"tts_ratio_china",		type: "S",  hidden:true},
	   	        	{name:"capture_base",			index:"tts_ratio_china",		type: "I",  hidden:true}
	   	        	//TODO ISM
	   	        	];
	
	makeMultiGrid("#base_info_list", models1, grid_height, "resultList", onSelected, onCompleted, null);
	
	function onSelected(rowid) {
		//TODO 프로토콜 구분
		var row_data = $("#base_info_list").jqGrid("getRowData", rowid);
		setDefaultValue(row_data.bitid);
		
		var bittp = Number(row_data.bittpcd);
		var servertp = $("#select_servertpcd option:selected").val();
		
		if(servertp == "121" || servertp == "122") {
			if((bittp >= 30 && bittp <= 32) || (bittp >= 50 && bittp <= 59)) { //LED
				$("#ctrl_wrap .led").hide();
			}else {
				$("#ctrl_wrap .led").show();
			}
		}
	}
	
	function onCompleted() {
		$("#base_info_list").jqGrid("setSelection", 1);
		$("#list_count").text($("#base_info_list").jqGrid("getGridParam", "reccount"));
	}
	
	loadGrid();
	
	$(window).bind('resize', function() {
		$("#base_info_list").jqGrid('setGridHeight',$(".subcon_left").height() - 23);
		$("#base_info_list").jqGrid('setGridWidth',$(".subcon_left").width());
	}).trigger('resize');
}

function loadGrid() {
	var params = {
			server_id : $("#select_servertpcd option:selected").val(),
			bittpcd   : $("#select_bittpcd option:selected").val(),
			searchWord: $("#input_bitid").val()
	}
	reloadGrid("#base_info_list", "./bit/selectBitControlList.do", params, "resultList");
}


//선택된 row들의 bit id의 list return
function getSelectedBitIds() {
	var row_ids = $("#base_info_list").jqGrid("getGridParam", "selarrrow");
	var strId = "";
	
	for (var i = 0; i < row_ids.length; i++) {
		var rowData = $("#base_info_list").jqGrid("getRowData", row_ids[i]);
		if(i < (row_ids.length-1)) {
			strId += rowData.bitid+",";
		}else {
			strId += rowData.bitid;
		}
	}
	return strId;
}