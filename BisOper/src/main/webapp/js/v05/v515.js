var wide_ui = false; // 광역선택 flag

$(document).ready(function(){
	
	inquiryCodeData();
	btnDisabled(false);
	
	$(".ic_wrap").hide();
	$(".vitzo_wrap").show();
	
});

function initEvent(){
	
	$("#select_servertpcd").change(function() {
		var servertp = $(this).find("option:selected").val();
		if(servertp == "120" || servertp == "126") {
			$(".ic_wrap").hide();
			$(".vitzo_wrap").show();
		}else {
			$(".ic_wrap").show();
			$(".vitzo_wrap").hide();
		}
		loadGrid();
	});
	
	
	$("#select_project_type").change(function(){
		wide_ui = $("#select_project_type").val() ==  0 ? false : true;
		
		if(!wide_ui){
			inquiryCodeData();
			$("#select_bittpcd_list").attr("disabled", false);
		}
		else{
			$("#select_bittpcd_list").attr("disabled", true);
			// TODO inquiryWideParamidList()
		}
	});
	
	$("#input_paramid").focusout(function(){		
		var paramid = $("#input_paramid").val();
		
		if(paramid != ""){
			// 10자리 paramid format
			paramid = paramid.length >= 10 ? paramid : Array(10 - paramid.length + 1).join('0') + paramid;		
			$("#input_paramid").val(paramid);
		}
	});
	
	$('input[type="number"]').focusout(function(){
		var input = Number($(this).val());
		var min = Number(this.min);
		var max = Number(this.max);
		
		if( input > max ) 
			$(this).val(max);		
		else if( input < min ) 
			$(this).val(min);			
	});
	
	$("#btn_clear").click(function(){		
		$("#select_bittpcd_list").val('').trigger("change");
		$("#select_param_list").val('').trigger("change");
		
		loadGrid();
	});
	
	$("#select_bittpcd_list").change(function(){	
		loadGrid();
	});
	 
	$("#btn_refresh").click(function(){		
		$("#btn_search").trigger("click");
	});
	
	$("#btn_search").click(function(){		
		loadGrid();
	});	
	
	$("#btn_reset").click(function(){
		$("#parameter_list").jqGrid("resetSelection");		
	
		btnDisabled(true);
		
		$(".bit_chart :input").val("");
		$(".bit_chart select").val($(".bit_chart select:first").val());

		// 입력창 초기화 시작
		// 공통
		$("#input_comm_retrycnt").val("1");
		$("#input_comm_tmout").val("1");
		$("#input_disp_onhms").val("0000");
		$("#input_disp_offhms").val("0000");
		$("#input_dispcycl").val("3");
		$("#input_msgcycl").val("3");
		// LED
		$("#input_fan_temper").val("0");
		$("#input_heat_temper").val("0");
		$("#select_route_font option[value='']").prop("selected", true);
		$("#select_route_fontcolor option[value='0']").prop("selected", true);
		$("#select_arrive_font option[value='']").prop("selected", true);
		$("#select_arrive_fontcolor option[value='0']").prop("selected", true);
		$("#select_bstop_font option[value='']").prop("selected", true);
		$("#select_bstop_fontcolor option[value='0']").prop("selected", true);
		
		// LCD
		$("#input_lcd_fan_temper").val("10");
		$("#input_lcd_fan_temper_1").val("30");
		$("#input_lcd_heat_temper").val("10");
		$("#input_lcd_heat_temper_1").val("30");
		$("#input_volume_day_hms").val("0800");
		$("#input_volume_night_hms").val("2000");
		$("#input_day_volume").val("10");
		$("#input_night_volume").val("10");
		$("#input_bright_day_hms").val("0800");
		$("#input_bright_night_hms").val("2000");
		//신규
		$("#input_e_volume").val("3");
		$("#select_e_volume_yn option[value='1']").prop('selected', true);
		$("#select_e_incoming_type option[value='0']").prop('selected', true);
		$("#input_e_incoming_time").val("180");
		$("#input_e_incoming_stop").val("3");
		$("#input_e_send_capture_cycle").val("300");
		$("#select_e_bit_sort_type option[value='0']").prop('selected', true);
		$("#input_e_arrv_info_time").val("30");
		$("#input_e_scenario_time").val("5");
		$("#input_e_fan_max_temper").val("30");
		$("#input_e_fan_min_temper").val("5");
		$("#input_e_heater_max_temper").val("10");
		$("#input_e_heater_min_temper").val("5");
		$("#input_e_monitor_on").val("0500");
		$("#input_e_monitor_off").val("2359");
		$("#input_e_send_status_cycle").val("30");
	});
	
	$("#btn_modify").click(function(){
		if($("#parameter_list" ).getGridParam("selrow") == null){
			showAlert("파라미터를 선택해 주십시오.");
			return;
		}

		showConfirmDlg( "변경한 내용을 저장합니까?", function(){
			var params = inquiryParameterSet();
			if(params == null) return;
			
			ajaxCall("./bit/updateBitParam.do", params, null, onSuccessUpdate, null);
			
			function onSuccessUpdate(data) {
				if(data && data.result) {
					if(Number(data.result) != 1) {
						showAlert("저장 중 오류가 발생하였습니다.");
					}else {
						showAlert("저장 되었습니다.");
						$("#btn_refresh").trigger("click");						
					}
				}else {
					showAlert("저장 중 오류가 발생하였습니다.");
				}
			}			
		});		
	});
		
	$("#btn_delete").click(function(){
		if($("#parameter_list" ).getGridParam("selrow") ==null){
			showAlert("파라미터를 선택해 주십시오.");
			return;
		}		
		
		showConfirmDlg("선택한 파라미터를 삭제합니까?", function(){
//			var rowid  = $("#parameter_list" ).getGridParam("selrow");			
//			var params = { paramid : $("#parameter_list").getRowData(rowid).paramid };
			
			var params = inquiryParameterSet();
			if(params == null) return;
			
			ajaxCall("./bit/deleteBitParam.do", params, null, onSuccessDelete, null);
			
			function onSuccessDelete(data) {
				if(data && data.result) {
					if(Number(data.result) == -1) {
						showAlert("삭제 중 오류가 발생하였습니다.");
					}else {
						showAlert("삭제 되었습니다.");
						$("#btn_refresh").trigger("click");						
					}
				}else {
					showAlert("삭제 중 오류가 발생하였습니다.");
				}
			}	
		});
	});
	
	$("#btn_new").click(function(){
		showConfirmDlg("작성된 내용으로 파라미터를 등록합니까?", function(){
			var params = inquiryParameterSet();
			if(params == null) return;
			
			ajaxCall("./bit/insertBitParam.do", params, null, onSuccessInsert, null);				
			
			function onSuccessInsert(data) {
				if(data && data.result) {
					if(Number(data.result) == -1) {
						showAlert("등록 중 오류가 발생하였습니다.");
					}else {
						showAlert("등록 되었습니다.");
						$("#btn_refresh").trigger("click"); 
						btnDisabled(false);
					}
				}else {
					showAlert("등록 중 오류가 발생하였습니다.");
				}
			}		
		});		
	});
	
	$("#btn_cancel").click(function() {
		btnDisabled(false);
		$("#btn_refresh").trigger("click");	
	});
	
	$("#btn_excel").click(function() {
		if( 0 < $("#parameter_list").getGridParam("reccount") ){			
			console.log("exceldown");
			execlDownload();
		}
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

var models1 = [
               
       	// 기본정보
  		{label:"파라미터ID",	name:"paramid",			  	index:"paramid",			width: "180", 	align:"center", sortable:true, type:"I"},
  		{label:"이름",		name:"title",			  	index:"title",				width: "300", 	align:"left", sortable:true, type:"I",},
  		{label:"안내기유형",		name:"bittpnm",			  	index:"bittpnm",			width: "233", 	align:"center", sortable:true},
  		
  		{name:"bittpcd",	 index:"bittpcd",					hidden:true, sortable:true, type:"S"},
  		{label:"통신재시도횟수",	name:"comm_retrycnt",		index:"comm_retrycnt",	 	hidden:true, type:"I"},
  		{label:"통신타임아웃",	name:"comm_tmout",			index:"comm_tmout", 		hidden:true, type:"I"},
  		{label:"전광판점등시각",	name:"disp_onhms",			index:"disp_onhms",			hidden:true, type:"I"},
  		{label:"전광판소등시각",	name:"disp_offhms",			index:"disp_offhms",		hidden:true, type:"I"},
  		{label:"버스정보",		name:"dispcycl",			index:"dispcycl",			hidden:true, type:"I"},          		
  		{label:"수동메시지",		name:"msgcycl",			  	index:"msgcycl",			hidden:true, type:"I"},

  		// LED                             
  		{label:"팬온도",		name:"fan_temper",			index:"fan_temper",	    	hidden:true,  type:"I"},
  		{label:"히터온도",		name:"heat_temper",			index:"heat_temper",		hidden:true,  type:"I"},
  		{label:"노선폰트색상",	name:"route_font",		    index:"route_font",	        hidden:true,  type:"S"},
  		{label:"노선폰트색상",	name:"route_fontcolor",		index:"route_fontcolor",	hidden:true,  type:"S"},
  		{label:"도착폰트종류",	name:"arrive_font",			index:"arrive_font",		hidden:true,  type:"S"},
  		{label:"도착폰트색상",	name:"arrive_fontcolor",	index:"arrive_fontcolor",	hidden:true,  type:"S"},
  		{label:"정류소폰트유형",	name:"bstop_font",			index:"bstop_font",			hidden:true,  type:"S"},
  		{label:"정류소폰트색상",	name:"bstop_fontcolor",		index:"bstop_fontcolor",	hidden:true,  type:"S"},
  		// LCD
  		{label:"팬온도",		name:"lcd_fan_temper",		index:"lcd_fan_temper",		hidden:true,  type:"I"},
  		{label:"히터온도",		name:"lcd_heat_temper",		index:"lcd_heat_temper",	hidden:true,  type:"I"},
  		{label:"팬온도1",		name:"lcd_fan_temper_1",	index:"lcd_fan_temper_1",	hidden:true,  type:"I"},
  		{label:"히터온도1",		name:"lcd_heat_temper_1",	index:"lcd_heat_temper_1",	hidden:true,  type:"I"},
  		{label:"음량제어(낮)",	name:"volume_day_hms",		index:"volume_day_hms",		hidden:true,  type:"I"},
  		{label:"음량제어(밤)",	name:"volume_night_hms",	index:"volume_night_hms",	hidden:true,  type:"I"},
  		{label:"음량(낮)",		name:"day_volume",			index:"day_volume",			hidden:true,  type:"I"},
  		{label:"음량(밤)",		name:"night_volume",		index:"night_volume",		hidden:true,  type:"I"},
  		{label:"밝기제어(낮)",	name:"bright_day_hms",		index:"bright_day_hms",		hidden:true,  type:"I"},
  		{label:"밝기제어(밤)",	name:"bright_night_hms",	index:"bright_night_hms",	hidden:true,  type:"I"},
  		// TODO 밝기 설정 code 값 없음(ex:밝음, 어두움) / 0:어두움, 1:밝음 구분 중
  		{label:"밝기(낮)",		name:"day_bright",			  	index:"day_bright",				hidden:true,  type:"I"},
  		{label:"밝기(밤)",		name:"night_bright",			index:"night_bright",			hidden:true,  type:"I"},
  		// Hidden
  		{name:"fonttpcd",	 index:"fonttpcd",					hidden:true, sortable:true},
  		{name:"font_colorcd",index:"font_colorcd",				hidden:true, sortable:true},
  		
  		//신규 상태
 		{label:"볼륨(0~9)",  name:"e_volume",	            index:"e_volume",               	hidden:true, align:"center",type:"I"},
 		{label:"잠시후도착기준", name:"e_incoming_type",	    index:"e_incoming_type",        	hidden:true, align:"center",type:"S"},
 		{label:"잠시후도착시간",name:"e_incoming_stop",	    index:"e_incoming_stop",        	hidden:true, align:"center",type:"I"},
 		{label:"잠시후도착정류장",name:"e_incoming_time",	    index:"e_incoming_time",        	hidden:true, align:"center",type:"I"},
 		{label:"모니터ON시간",name:"e_monitor_on",	        index:"e_monitor_on",           	hidden:true, align:"center",type:"I"},
 		{label:"모니터OFF시간",name:"e_monitor_off",	        index:"e_monitor_off",          	hidden:true, align:"center",type:"I"},
 		{label:"상태정보전송주기",name:"e_send_status_cycle",	index:"e_send_status_cycle",    	hidden:true, align:"center",type:"I"},
 		{label:"이미지캡쳐주기",name:"e_send_capture_cycle",	index:"e_send_capture_cycle",   	hidden:true, align:"center",type:"I"},
 		{label:"정보정렬기준",name:"e_bit_sort_type",	    index:"e_bit_sort_type",            	hidden:true, align:"center",type:"S"},
 		{label:"음성ON/OFF",name:"e_volume_yn",	        index:"e_volume_yn",            	hidden:true, align:"center",type:"S"},
 		{label:"이미지표출시간",name:"e_scenario_time",	    index:"e_scenario_time",        	hidden:true, align:"center",type:"I"},
 		{label:"도착정보표출시간",name:"e_arrv_info_time",	    index:"e_arrv_info_time",       	hidden:true, align:"center",type:"I"},
 		{label:"팬동작온도(MAX)",name:"e_fan_max_temper",	    index:"e_fan_max_temper",       hidden:true, align:"center",type:"I"},
 		{label:"팬동작온도(MIN)",name:"e_fan_min_temper",	    index:"e_fan_min_temper",       hidden:true, align:"center",type:"I"},
 		{label:"히터동작온도(MAX)",name:"e_heater_max_temper",	index:"e_heater_max_temper",    hidden:true, align:"center",type:"I"},
 		{label:"히터동작온도(MIN)",name:"e_heater_min_temper",	index:"e_heater_min_temper",    hidden:true, align:"center",type:"I"}
  		];

/*var models1 = [
      	// 기본정보
 		{label:"파라미터ID",	name:"paramid",			  	index:"paramid",			width: "100", 	align:"center", sortable:true, type:"I"},
 		{label:"이름",		name:"title",			  	index:"title",				width: "100", 	align:"center", sortable:true, type:"I",},
 		{label:"안내기유형",		name:"bittpnm",			  	index:"bittpnm",			width: "130", 	align:"center", sortable:true},
 		//신규 상태
 		{label:"볼륨(0~9)",  name:"e_volume",	            index:"e_volume",               	align:"center",width: "100",type:"I"},
 		{label:"잠시후도착기준", name:"e_incoming_type",	    index:"e_incoming_type",        	align:"center",width: "100",type:"S"},
 		{label:"잠시후도착시간",name:"e_incoming_stop",	    index:"e_incoming_stop",        	align:"center",width: "100",type:"I"},
 		{label:"잠시후도착정류장",name:"e_incoming_time",	    index:"e_incoming_time",        	align:"center",width: "100",type:"I"},
 		{label:"모니터ON시간",name:"e_monitor_on",	        index:"e_monitor_on",           	align:"center",width: "100",type:"I"},
 		{label:"모니터OFF시간",name:"e_monitor_off",	        index:"e_monitor_off",          	align:"center",width: "100",type:"I"},
 		{label:"상태정보전송주기",name:"e_send_status_cycle",	index:"e_send_status_cycle",    	align:"center",width: "100",type:"I"},
 		{label:"이미지캡쳐주기",name:"e_send_capture_cycle",	index:"e_send_capture_cycle",   	align:"center",width: "100",type:"I"},
 		{label:"정보정렬기준",name:"e_bit_sort_type",	    index:"e_bit_sort_type",            	align:"center",width: "100",type:"S"},
 		{label:"음성ON/OFF",name:"e_volume_yn",	        index:"e_volume_yn",            	align:"center",width: "100",type:"S"},
 		{label:"이미지표출시간",name:"e_scenario_time",	    index:"e_scenario_time",        	align:"center",width: "100",type:"I"},
 		{label:"도착정보표출시간",name:"e_arrv_info_time",	    index:"e_arrv_info_time",       	align:"center",width: "100",type:"I"},
 		{label:"팬동작온도(MAX)",name:"e_fan_max_temper",	    index:"e_fan_max_temper",       	align:"center",width: "100",type:"I"},
 		{label:"팬동작온도(MIN)",name:"e_fan_min_temper",	    index:"e_fan_min_temper",       	align:"center",width: "100",type:"I"},
 		{label:"히터동작온도(MAX)",name:"e_heater_max_temper",	index:"e_heater_max_temper",    	align:"center",width: "100",type:"I"},
 		{label:"히터동작온도(MIN)",name:"e_heater_min_temper",	index:"e_heater_min_temper",    	align:"center",width: "100",type:"I"},
 		
 		{name:"bittpcd",	    index:"bittpcd",         hidden: true, type:"S"},
 		{name:"comm_retrycnt",	index:"comm_retrycnt",   hidden: true, type:"I"},
 		{name:"comm_tmout",	    index:"comm_tmout",      hidden: true, type:"I"}
 		];*/

function initGrid(){
	makeGrid("#parameter_list", models1, 110,  "resultList", onSelect, counting, null)
	
	function onSelect(rowid){
		var data = $("#parameter_list").getRowData(rowid);
		console.log("#노선폰트 " + data.route_font);
		console.log("#노선폰트색상 " + data.route_fontcolor);
		console.log("#도착폰트 " + data.arrive_font);
		console.log("#도착폰트색상 " + data.arrive_fontcolor);
		
		console.log("#정류소폰트 " + data.bstop_font);
		console.log("#정류소폰트색상 " + data.bstop_fontcolor);
		console.log("#fonttpcd " + data.fonttpcd);
		console.log("#font_colorcd " + data.font_colorcd);
		
//		{label:"노선폰트색상",	name:"route_font",		    index:"route_font",	        hidden:true,  type:"S"},
//  		{label:"노선폰트색상",	name:"route_fontcolor",		index:"route_fontcolor",	hidden:true,  type:"S"},
//  		{label:"도착폰트종류",	name:"arrive_font",			index:"arrive_font",		hidden:true,  type:"S"},
//  		{label:"도착폰트색상",	name:"arrive_fontcolor",	index:"arrive_fontcolor",	hidden:true,  type:"S"},
//  		{label:"정류소폰트유형",	name:"bstop_font",			index:"bstop_font",			hidden:true,  type:"S"},
//  		{label:"정류소폰트색상",	name:"bstop_fontcolor",		index:"bstop_fontcolor",	hidden:true,  type:"S"},
//		{name:"fonttpcd",	 index:"fonttpcd",					hidden:true, sortable:true},
//  		{name:"font_colorcd",index:"font_colorcd",				hidden:true, sortable:true},
		
		/*var data = $("#parameter_list").getRowData(rowid);		
		var font = data.fonttpcd;		
		var color = data.font_colorcd;
		
		btnDisabled(false);		
		console.log("FONTTPCD : " + font + " / " +"FONT_COLORCD : " + color);
				
		$("#select_route_font").val(font.charAt(0));
		$("#select_arrive_font").val(font.charAt(1));
		$("#select_bstop_font").val(font.charAt(2));
		
		$("#select_route_color").val(color.charAt(0));
		$("#select_arrive_color").val(color.charAt(1));
		$("#select_bstop_color").val(color.charAt(2));*/
		// TODO 밝기기 설정 code 값
	}
	
	function counting(data){
		$("#list_count").text($("#parameter_list").getGridParam("reccount"));
		$("#parameter_list").setSelection(1, true);
	}
	
	$(window).bind('resize', function() {
		$("#parameter_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#parameter_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
	
//	reloadGrid("#parameter_list", "./bit/selectBitParamList.do", null, "resultList");
	loadGrid();
}

function loadGrid(){
	var params = {
			servertp : $("#select_servertpcd option:selected").val(),
			paramid : '',
			bittpcd : $("#select_bittpcd_list").val()
	}	
	reloadGrid("#parameter_list", "./bit/selectBitParamList.do", params, "resultList");
}

function btnDisabled(flag_new){
	if(flag_new){
		$("#btn_new").attr("class", "");
		$("#btn_modify").attr("class", "disabled");
		$("#btn_delete").attr("class", "disabled");
		
		$("#btn_new").css("pointer-events", "auto");
		$("#btn_modify").css("pointer-events", "none");
		$("#btn_delete").css("pointer-events", "none");
	}else{
		$("#btn_new").attr("class", "disabled");
		$("#btn_modify").attr("class", "");
		$("#btn_delete").attr("class", "");
		
		$("#btn_new").css("pointer-events", "none");
		$("#btn_modify").css("pointer-events", "auto");
		$("#btn_delete").css("pointer-events", "auto");
	}			
}

function inquiryParameterSet(){
	var paramid = $("#input_paramid").val();	

	if(paramid == ""){
		showAlert("파라미터ID를 입력하세요.");
		$("#input_paramid").focus();
		return null;
	}
	
	var rowid = $("#parameter_list").getGridParam("selrow");
	var rowid_arr = $("#parameter_list").getDataIDs();
	var searchWord = $("#parameter_list").getRowData(rowid).paramid;
	
	for(var i=0; i<rowid_arr.length; i++){
		if(rowid !=rowid_arr[i]){
			var each_paramid = $("#parameter_list").getRowData(rowid_arr[i]).paramid;
			console.log("##### ignore rowid"+rowid);
			if(paramid == each_paramid){
				showAlert("중복되는 파라미터ID 값입니다.");
				$("#input_paramid").focus();
				return null;
			}
		}		
	}
	
	var servertp = $("#select_servertpcd option:selected").val();
	var params;
	
	if(servertp == "120" || servertp == "126") {
		params = {
				searchWord : searchWord, // ID 수정시 검색 목적
				paramid : paramid,
				servertp : servertp,
				title : $("#input_title").val(),
				bittpcd : $("#select_bittpcd option:selected").val(),
				comm_retrycnt : $("#input_comm_retrycnt").val(),
				comm_tmout : $("#input_comm_tmout").val(),
				e_volume   : $("#input_e_volume").val(),
				e_volume_yn: $("#select_e_volume_yn option:selected").val(),
				e_incoming_type : $("#select_e_incoming_type option:selected").val(),
				e_incoming_time : $("#input_e_incoming_time").val(),
				e_incoming_stop   : $("#input_e_incoming_stop").val(),
				e_send_capture_cycle : $("#input_e_send_capture_cycle").val(),
				e_bit_sort_type : $("#select_e_bit_sort_type option:selected").val(),
				e_arrv_info_time: $("#input_e_arrv_info_time").val(),
				e_scenario_time : $("#input_e_scenario_time").val(),
				e_fan_max_temper : $("#input_e_fan_max_temper").val(),
				e_fan_min_temper : $("#input_e_fan_min_temper").val(),
				e_heater_max_temper : $("#input_e_heater_max_temper").val(),
				e_heater_min_temper : $("#input_e_heater_min_temper").val(),
				e_monitor_on     : $("#input_e_monitor_on").val(),
				e_monitor_off    : $("#input_e_monitor_off").val(),
				e_send_status_cycle : $("#input_e_send_status_cycle").val()
		}
	}else {
		var font1 = $("#select_route_font option:selected").val();
		var font2 = $("#select_arrive_font option:selected").val(); 
		var font3 = $("#select_bstop_font option:selected").val(); 
		
		var color1 = $("#select_route_fontcolor option:selected").val();
		var color2 = $("#select_arrive_fontcolor option:selected").val(); 
		var color3 = $("#select_bstop_fontcolor option:selected").val(); 
		
		var font = (font1 == "") ? '0' : font1;
		font += (font2 == "") ? '0' : font2;
		font += (font3 == "") ? '0' : font3;
		font += "0";
		
		var color = (color1 == "") ? '0' : color1;
		color += (color2 == "") ? '0' : color2;
		color += (color3 == "") ? '0' : color3;
		color += "0";
		
		params = {
				searchWord : searchWord, // ID 수정시 검색 목적
				paramid : paramid,
				servertp : servertp,
				title : $("#input_title").val(),
				bittpcd : $("#select_bittpcd").val(),
				comm_retrycnt : $("#input_comm_retrycnt").val(),
				comm_tmout : $("#input_comm_tmout").val(),
				disp_onhms : $("#input_disp_onhms").val(),
				disp_offhms : $("#input_disp_offhms").val(),
				dispcycl     : $("#input_dispcycl").val(),
				msgcycl      : $("#input_msgcycl").val(),
				//led
				fan_temper :  $("#input_fan_temper").val(),
				heat_temper :  $("#input_heat_temper").val(),
				fonttpcd : font,
				font_colorcd : color,
				//lcd
				lcd_fan_temper : $("#input_lcd_fan_temper").val(),
				lcd_fan_temper_1 : $("#input_lcd_fan_temper_1").val(),
				lcd_heat_temper : $("#input_lcd_heat_temper").val(),
				lcd_heat_temper_1 : $("#input_lcd_heat_temper_1").val(),
				volume_day_hms : $("#input_volume_day_hms").val(),
				volume_night_hms : $("#input_volume_night_hms").val(),
				day_volume : $("#input_day_volume").val(),
				night_volume : $("#input_night_volume").val(),
				bright_day_hms : $("#input_bright_day_hms").val(),
				bright_night_hms : $("#input_bright_night_hms").val(),
				day_bright : $("#select_day_bright").val(),
				night_bright : $("#select_night_bright").val(),
		}
	}
	console.log(params);
	return params;
}

function inquiryCodeData() {
	ajaxCall("./sys/selectBitParamCodeList.do", null, null, onSuccess, null);	

	// TODO 광역, 밝기제어설정 유효 code 확인	
	function onSuccess(data) { 
		
		if(data && data.bittpcd) {
			var strTemp = "<option value=''>전체</option>";
			var strTemp2 = "";
			$.each( data.bittpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
				strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_bittpcd_list").empty().append(strTemp);						
			$("#select_bittpcd").empty().append(strTemp2);						
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
		
		initEvent();
		initGrid();
//		inquiryParamidList();	
	}
}

function inquiryParamidList() {
	ajaxCall("./bit/selectBitParamList.do", { bittpcd : $("#select_bittpcd_list").val() }, null , onSuccess, null);
	
	function onSuccess(data) {
		if(data && data.resultList){
			var strTemp;
			
			if(data.resultList.length < 1)
				strTemp = "<option value=''>전체</option>";
			else{
				strTemp = "<option value=''>전체</option>";				
				$.each( data.resultList, function( index, value ) {
					strTemp += "<option value='"+value.paramid+"'>["+value.paramid+"]</option>";
				});
			}			
			$("#select_param_list").empty().append(strTemp);			
		}
	}
}

function inquiryWideParamidList() {
	ajaxCall("./bit/selectBitParamList.do", { wide_ui : wide_ui }, null , onSuccess, null);
	
	function onSuccess(data) {
		if(data && data.resultList){
			var strTemp;
			
			if(data.resultList.length < 1)
				strTemp =  "<option value=''>없음</option>";
			else{
				strTemp = "<option value=''>전체</option>";				
				$.each( data.resultList, function( index, value ) {
					strTemp += "<option value='"+value.paramid+"'>["+value.paramid+"]</option>";
				});
			}			
			$("#select_param_list").empty().append(strTemp);			
		}
	}
}

function execlDownload(){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/excelBitParamList.do";
	form.method = "POST";
	
	var data1 = $("#parameter_list").jqGrid('getGridParam','colNames');
	data1 = JSON.stringify(data1);	
	
	var data2 = $("#parameter_list").getRowData();
	data2 = JSON.stringify(data2);
	
	var para1 = document.createElement('INPUT'); 
	para1.type  = 'HIDDEN';
	para1.name  = 'label';
	para1.value = data1;
	form.appendChild(para1);	
	
	var para2 = document.createElement('INPUT'); 
	para2.type  = 'HIDDEN';
	para2.name  = 'rows';
	para2.value = data2;
	form.appendChild(para2); 

	console.log(data1);
	console.log(data2);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true	);
}