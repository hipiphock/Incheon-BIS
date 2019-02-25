$(document).ready(function(){
	inquiryCodeData();
	initGrid();
	initEvent();
	
	$(".vitzo_wrap").show();
	$(".ic_wrap").hide();
});

function initEvent(){
	
	$("#select_servertpcd").change(function() {
		var servertp = $(this).find("option:selected").val();
		
		if(servertp == "120" || servertp == "126") {
			$(".vitzo_wrap").show();
			$(".ic_wrap").hide();
		}else {
			$(".vitzo_wrap").hide();
			$(".ic_wrap").show();
		}
		$("#btn_search").trigger("click");
	});
	
	$("#btn_search").click(function() {
		loadGrid();
		
		inquiryBitParamList();
	});
	
	$("#btn_send").click(function() {
		
		var selRowIds = $("#bit_param_list").jqGrid("getGridParam", "selarrrow");
		
		if(selRowIds == null || selRowIds.length < 1) {
			showAlert("선택된 BIT가 없습니다.");
			return;
		}
		
		showConfirmDlg("선택한 파라미터를 BIT로 전송하시겠습니까?", function(){
			var strId = "";
			var strBitTpNm = "";
			for (var i=0; i<selRowIds.length; i++){
				var rowdata = $("#bit_param_list").getRowData(selRowIds[i]);
				var nm = rowdata.bittpcd;
				if(i < (selRowIds.length-1)) {
					strId += rowdata.bitid+",";
					strBitTpNm += nm.substring(0,3)+",";
				}else {
					strId += rowdata.bitid;
					strBitTpNm += nm.substring(0,3);
				}
			}
			
			var params = {
				bitid : strId,
				bittp : strBitTpNm,
				paramid : $("#select_param_id option:selected").val(),
				servertp : $("#select_servertpcd option:selected").val()
			}
			ajaxCall("./param.soc", params, null, onSuccess1, null);
			
			function onSuccess1(data) {
				if(data.result == "1") {
					showAlert("정상 전송 되었습니다.");
				}else {
					showAlert("파라미터 전송 시 오류가 발생하였습니다.");
				}
			}
		});
		
		
	});
}

function setStatusText(cellValue, opts, rowdata){ 
    switch(cellValue){
    	case "0" : 
    		return "<span style='color:"+COLOR_RED+";'>장애</span>"; 
    		break; 
        case "1": 
            return "<span style='color:"+COLOR_GREEN+";'>정상</span>";
            break;
        default:
        	return "<span style='color:"+COLOR_YELLOW+";'>정보없음</span>";
            break; 
    } 
}

var models1 = [
			{onlyView: true,
//			 {label:"관리ID",			name:"bitmid",       index:"bitmid",     width: "70", 	align:"center"},
			 label:"안내기ID",			name:"bitid",        index:"bitid",      width: "70", 	align:"center"},
			{label:"단축 ID",			name:"short_bstopid",index:"short_bstopid",  width: "70", 	align:"center"},
			{label:"설치위치",			name:"bstopnm",      index:"bstopnm",    width: "120", 	align:"left"},
			{label:"안내기유형",			name:"bittpcd",      index:"bittpcd",    width: "133", 	align:"center"},
			{label:"전송일시",			name:"issuedt",      index:"issuedt",    width: "120", 	align:"center"},
			{label:"전송결과",			name:"sndrsltcd",    index:"sndrsltcd",  width: "70", 	align:"center"},
			{label:"통신상태",	    	name:"comm_statyn",  index:"comm_statyn",width: "75", 	align:"center", formatter : setStatusText},
			{label:"파라미터ID",		name:"paramid",      index:"paramid",    width: "80", 	align:"center"},
//			{label:"통신재시도회수",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"통신타임아웃",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"표출주기(버스정보)",	name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"표출주기(수동메시지)",	name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"LED팬자동온도",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"LED히터자동온도",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"노선폰트",			name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"도착시간폰트",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"잔여정류소폰트",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"노선색상",			name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"도착시간색상",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"잔여정류소색상",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"표출시작시간",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"표출종료시간",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"LCD팬켜짐온도",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"LCD팬꺼짐온도",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"LCD히터켜짐온도",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"},
//			{label:"LCD히터꺼짐온도",		name:"nnn",          index:"nnn",      width: "100", 	align:"center"}
			];

function initGrid(){
	makeFilterGrid("#bit_param_list", models1, 110,  "resultList", /*onSelect*/null, counting, null)
	$("#bit_param_list").jqGrid('showCol','cb');
	function onSelect(rowid){
		var data = $("#parameter_list").getRowData(rowid);		
		var font = data.fonttpcd;		
		var color = data.font_colorcd;
		
		btnDisabled(false);		
				
		$("#select_route_font").val(font.charAt(0));
		$("#select_arrive_font").val(font.charAt(1));
		$("#select_bstop_font").val(font.charAt(2));
		
		$("#select_route_color").val(color.charAt(0));
		$("#select_arrive_color").val(color.charAt(1));
		$("#select_bstop_color").val(color.charAt(2));
		// TODO 밝기기 설정 code 값
	}
	
	function counting(data){
		$("#list_count").text($("#bit_param_list").getGridParam("reccount"));
		$("#bit_param_list").setSelection(1, true);
	}
	
	$(window).bind('resize', function() {
		$("#bit_param_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#bit_param_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
}

function inquiryCodeData() {
	ajaxCall("./sys/selectBitParamCodeList.do", null, null, onSuccess1, null);	
	
	// TODO 광역, 밝기제어설정 유효 code 확인	
	function onSuccess1(data) { 
		
		if(data && data.bittpcd) {
			var strTemp = "<option value=''>전체</option>";
			var strTemp2 = "";
			$.each( data.bittpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
				strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_bit_type").empty().append(strTemp);						
			$("#select_bittpcd").empty().append(strTemp2);		
			
			inquiryBitParamList();
		}
		
		if(data && data.fonttpcd) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.fonttpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("[name=fonttpcd]").empty().append(strTemp);
		}
		
		if(data && data.colorcd) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.colorcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("[name=colorcd]").empty().append(strTemp);
		}
		
		loadGrid();
	}
}


function inquiryBitParamList(paramId) {
	
	var servertp = $("#select_servertpcd option:selected").val();
	var bittpcd = $("#select_bit_type option:selected").val();
	
	var param = {
			servertp : servertp,
			bittpcd : bittpcd,
			paramid : paramId
	};
	
	ajaxCall("./bit/selectBitParamList.do", param, null, onSuccess2, null);	
	
	function onSuccess2(data) { 
		
		if(data && data.resultList) {
			var strTemp = "";
			$.each( data.resultList, function( index, value ) {
				strTemp += "<option value='"+value.paramid+"'>["+value.paramid+"] "+value.bittpnm + " - "+ value.title+"</option>";
			});
			$("#select_param_id").empty().append(strTemp);			
			$("#select_param_id").change(function() {
				loadBitParam();
			}).trigger("change");
		}
	}
}

function loadGrid() {
	var param = {
			server_id : $("#select_servertpcd option:selected").val(),
			bittpcd : $("#select_bit_type option:selected").val()
	};
	reloadGrid("#bit_param_list", "./bit/selectBitCtrlResultList.do", param, "resultList");
}

function loadBitParam() {
	var params = {
			servertp : $("#select_servertpcd option:selected").val(),
			paramid : $("#select_param_id option:selected").val()
	}
	
	
	ajaxCall("./bit/selectBitParam.do", params, null, onSuccess, null);
	
	function onSuccess(data) {
		var result = data.result;
		
		//TODO 인천 
		$("#input_comm_retrycnt").val(result.comm_retrycnt);
		$("#input_comm_tmout").val(result.comm_tmout);
		$("#input_disp_onhms").val(result.disp_onhms);
		$("#input_disp_offhms").val(result.disp_offhms);
		$("#input_dispcycl").val(result.dispcycl);
		$("#input_msgcycl").val(result.msgcycl);
		// LED
		$("#input_fan_temper").val(result.fan_temper);
		$("#input_heat_temper").val(result.heat_temper);
		$("#select_route_font option[value='"+result.route_font+"']").prop("selected", true);
		$("#select_route_fontcolor option[value='"+result.route_fontcolor+"']").prop("selected", true);
		$("#select_arrive_font option[value='"+result.arrive_font+"']").prop("selected", true);
		$("#select_arrive_fontcolor option[value='"+result.arrive_fontcolor+"']").prop("selected", true);
		$("#select_bstop_font option[value='"+result.bstop_font+"']").prop("selected", true);
		$("#select_bstop_fontcolor option[value='"+result.bstop_fontcolor+"']").prop("selected", true);
		// LCD
		$("#input_lcd_fan_temper").val(result.lcd_fan_temper);
		
		$("#input_lcd_fan_temper_1").val(result.lcd_fan_temper_1);
		$("#input_lcd_heat_temper").val(result.lcd_heat_temper);
		$("#input_lcd_heat_temper_1").val(result.lcd_heat_temper_1);
		$("#input_volume_day_hms").val(result.volume_day_hms);
		$("#input_volume_night_hms").val(result.volume_night_hms);
		$("#input_day_volume").val(result.day_volume);
		$("#input_night_volume").val(result.night_volume);
		$("#input_bright_day_hms").val(result.bright_day_hms);
		$("#input_bright_night_hms").val(result.bright_night_hms);
		$("#input_day_bright").val(result.day_bright);
		$("#input_night_bright").val(result.night_bright);
		//신규
		$("#input_e_volume").val(result.e_volume);
		$("#select_e_volume_yn option[value='"+result.e_volume_yn+"']").prop('selected', true);
		$("#select_e_incoming_type option[value='"+result.e_incoming_type+"']").prop('selected', true);
		$("#input_e_incoming_time").val(result.e_incoming_time);
		$("#input_e_incoming_stop").val(result.e_incoming_stop);
		$("#input_e_send_capture_cycle").val(result.e_send_capture_cycle);
		$("#select_e_bit_sort_type option[value='"+result.e_bit_sort_type+"']").prop('selected', true);
		
		$("#input_e_arrv_info_time").val(result.e_arrv_info_time);
		$("#input_e_scenario_time").val(result.e_scenario_time);
		$("#input_e_fan_max_temper").val(result.e_fan_max_temper);
		$("#input_e_fan_min_temper").val(result.e_fan_min_temper);
		$("#input_e_heater_max_temper").val(result.e_heater_max_temper);
		$("#input_e_heater_min_temper").val(result.e_heater_min_temper);
		$("#input_e_monitor_on").val(result.e_monitor_on);
		$("#input_e_monitor_off").val(result.e_monitor_off);
	}
}
