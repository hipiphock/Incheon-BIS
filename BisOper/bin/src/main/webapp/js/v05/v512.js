/**
 * BIT관리 - BIT 정보관리 - 팝업 사업
 * @author 박경원
 * @since 2017-10-20
 */

var last_id = ""; //마지막으로 수정한  row ID
var edit_enable = false;
var selectDlg;
var selected_stop_id = "";

$("#input_bit_number").val("1");
$("#select_group")
$("#select_provide_group")
$("#btn_edit_group")
$("#btn_edit_provide_group")
$("#select_bit_type")
$("#input_stop_name")
$("#select_voice_use_flag")
$("#select_foreign_use_flag")

$("#select_info_sort_type")
$("#select_incoming_type")
$("#input_status_sendcycle")
$("#input_speaker_volume")
$("#input_incoming_time")
$("#input_image_sendcycle")
$("#input_incoming_stop")
$("#input_capture_sendcycle")
$("#input_disp_st_time")
$("#input_disp_ed_time")
$("#select_crash_detect_flag")
$("#select_action_detect_flag")
$("#input_action_detect_time")
$("#input_crash_detect_value")

$("#input_fan_min_temperature")
$("#input_fan_max_temperature")
$("#input_default_illumination_value")
$("#input_heater_min_temperature")
$("#input_heater_min_temperature")

$("#btn_value_save")
$("#btn_value_load")
//BIT 리스트
var models1 = [
               {onlyView:true, 			label:"순번",						name:"order",				index:"order",       		width: "70", 	align:"center", sorttype:"number"},
               {label:"소속 그룹",				name:"cate_name",					index:"cate_name",       			width: "70", 	align:"center", sorttype:"text"},
               {label:"BIT 종류",				name:"bit_type_name",   			index:"bit_type_name",      		width: "75", 	align:"center", sorttype:"text"},
               {label:"설치 지점명",				name:"stop_name",   				index:"stop_name",     				width: "147", 	align:"left",   sorttype:"text"},
               {label:"음성안내 사용",			name:"voice_use_flag_text",			index:"voice_use_flag_text",		width: "70", 	align:"center", sorttype:"text"},
               {label:"외국어표시 사용",			name:"foreign_use_flag_text",		index:"foreign_use_flag_text",		width: "70", 	align:"center", sorttype:"text"},
               {label:"제공정보 정렬 기준",			name:"info_sort_type_text",			index:"info_sort_type_text",		width: "140", 	align:"center", sorttype:"text"},
               {label:"[잠시 후 도착]표시 기준",  	name:"incoming_type_text",			index:"incoming_type_text",			width: "140", 	align:"center", sorttype:"text"},
               {label:"상태 업데이트 주기",			name:"status_sendcycle",			index:"status_sendcycle",			width: "70", 	align:"center", sorttype:"number"},
               {label:"스피커 볼륨",				name:"speaker_volume",				index:"speaker_volume",				width: "70", 	align:"center", sorttype:"number"},
               {label:"[잠시 후 도착]기준 시간",  	name:"incoming_time",				index:"incoming_time",				width: "70", 	align:"center", sorttype:"number"},
               {label:"웹캠 촬영주기",			name:"image_sendcycle",				index:"image_sendcycle",			width: "70", 	align:"center", sorttype:"number"},
               {label:"[잠시 후 도착]잔여 정류장", 	name:"incoming_stop",				index:"incoming_stop",				width: "70", 	align:"center", sorttype:"number"},
               {label:"스크린샷 촬영주기",			name:"capture_sendcycle",			index:"capture_sendcycle",			width: "70", 	align:"center", sorttype:"number"},
               {label:"BIT 화면 켜지는 시각",		name:"disp_st_time",				index:"disp_st_time",				width: "100", 	align:"center", sorttype:"number"},
               {label:"BIT 화면 꺼지는 시각",		name:"disp_ed_time",				index:"disp_ed_time",				width: "100", 	align:"center", sorttype:"number"},
               {label:"충격감지 사용",			name:"crash_detect_flag_text",		index:"crash_detect_flag_text",		width: "70", 	align:"center", sorttype:"text"},
               {label:"동작감지 사용",			name:"action_detect_flag_text",		index:"action_detect_flag_text",	width: "70", 	align:"center", sorttype:"text"},
               {label:"동작감지 감도",			name:"action_detect_time",			index:"action_detect_time",			width: "70", 	align:"center", sorttype:"number"},
               {label:"충격감지 감도",			name:"crash_detect_value",			index:"crash_detect_value",			width: "70", 	align:"center", sorttype:"number"},
               {label:"팬 동작 최소온도",			name:"fan_min_temperature",			index:"fan_min_temperature",		width: "70", 	align:"center", sorttype:"number"},
               {label:"팬 동작 최대온도",			name:"fan_max_temperature",			index:"fan_max_temperature",		width: "70", 	align:"center", sorttype:"number"},
               {label:"기본 조도값",				name:"default_illumination_value",	index:"default_illumination_value",	width: "70", 	align:"center", sorttype:"number"},
  	           {label:"히터 동작 최소온도",			name:"heater_min_temperature",		index:"heater_min_temperature",		width: "70", 	align:"center", sorttype:"number"},
  	           {label:"히터 동작 최대온도",			name:"heater_max_temperature",		index:"heater_max_temperature",		width: "70", 	align:"center", sorttype:"number"},
               
               {name:"bit_cate_id",						index:"bit_cate_id", 					hidden:true},
               {name:"bit_type",						index:"bit_type", 						hidden:true},
               {name:"install_stop_id",					index:"install_stop_id", 				hidden:true},
               {name:"voice_use_flag",					index:"voice_use_flag",					hidden:true},
               {name:"foreign_use_flag",				index:"foreign_use_flag",				hidden:true},
               {name:"info_sort_type",					index:"info_sort_type",					hidden:true},
               {name:"incoming_type",					index:"incoming_type",					hidden:true},
               {name:"crash_detect_flag",				index:"crash_detect_flag",				hidden:true},
               {name:"action_detect_flag",				index:"action_detect_flag",				hidden:true},
              ]
//정류장 리스트
var models2 = [
               {onlyView:true, label:"정류장 ID",		name:"stop_id",   	index:"stop_id",     	width: "70", 	align:"center", sorttype:"number"},
               {label:"모바일 ID",						name:"service_id",  index:"service_id",     width: "60", 	align:"center", sorttype:"number"},
               {label:"정류장명",						name:"stop_name",   index:"stop_name",     	width: "153", 	align:"left", sorttype:"text"},
               {name:"lat",   						index:"lat",     	hidden:true},
               {name:"lng",   						index:"lng",     	hidden:true}
               ]

$(document).ready(function(){
	setDialog();
	setSelectBox();
	init();
	setEvent();
	setGrid();
});

function setDialog() {
	var grid_height = 500;
	$("#txt_title").text("정류장 선택");
	selectDlg = getDialog("pop_choice", "container");
	
	makeGrid("#pop_list", models2, grid_height, "resultList", null, null, onDoubleClicked);
	$("#pop_list").jqGrid('setGridHeight',223);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	//더블 클릭 시 선택 후 닫기
	function onDoubleClicked(rowId) {
		var rowData = $("#pop_list").jqGrid("getRowData", rowId);
		selected_stop_id = rowData.stop_id;
		$("#input_stop_name").val(rowData.stop_name);
		selectDlg.dialog("close");
	}
	
	reloadGrid("#pop_list", "./bit/selectBusStopList.do", null, "resultList");

	//닫기
	$("#btn_close").click(function() {
		selectDlg.dialog("close");
	});
	
	//정류장 엔터 검색
	$("#input_pop_word").on("keydown", function(key) {
		if (key.keyCode == 13) {
			$("#btn_pop_search").trigger("click");
		}
	})
	
	//정류장 검색
	$("#btn_pop_search").click(function() {
		var params = {
				text_search : $("#input_pop_word").val()
		}
		reloadGrid("#pop_list", "./bit/selectBusStopList.do", params, "resultList");
	});
}

//소속그룹, BIT종류 selectbox 생성
function setSelectBox() {
	ajaxCall("./bit/selectCategory.do", null, null, category_success, null);
	function category_success(data) {
		var bitGroupList = data.bitGroupList;
		var bitTypeList = data.bitTypeList;
		
		$("#select_group").empty();
		$("#select_bit_type").empty();
		
		$.each(bitGroupList, function(index, value) {
			var text = "<option value=\"" + value.bit_cate_id + "\">" + value.cate_name + "</option>";
			var li_text = "<li value=\"" + value.bit_cate_id + "\">" + value.cate_name + "</li>";
			$("#select_group").append(text);
		});
		
		$.each(bitTypeList, function(index, value) {
			var text = "<option value=\"" + value.bit_type + "\">" + value.bit_type_name + "</option>";
			$("#select_bit_type").append(text);
		})
	}
}

function init() {
	$("#input_bit_number").val("1");
	$("#select_group option:eq(0)").prop("selected", true);
	$("#select_bit_type option:eq(0)").prop("selected", true);
	$("#input_stop_name").val("");
	selected_stop_id = "";
	$("#select_voice_use_flag option:eq(0)").prop("selected", true);
	$("#select_foreign_use_flag option:eq(0)").prop("selected", true);
	$("#select_info_sort_type option:eq(0)").prop("selected", true);
	$("#select_incoming_type option:eq(0)").prop("selected", true);
	$("#select_crash_detect_flag option:eq(0)").prop("selected", true);
	$("#select_action_detect_flag option:eq(0)").prop("selected", true);
	$("#input_status_sendcycle").val("30");
	$("#input_speaker_volume").val("5");
	$("#input_incoming_time").val("60");
	$("#input_image_sendcycle").val("300");
	$("#input_incoming_stop").val("2");
	$("#input_capture_sendcycle").val("300");
	$("#input_disp_st_time").val("0700");
	$("#input_disp_ed_time").val("2359");
	$("#input_action_detect_time").val("100");
	$("#input_crash_detect_value").val("100");
	$("#input_fan_min_temperature").val("20");
	$("#input_fan_max_temperature").val("30");
	$("#input_default_illumination_value").val("100");
	$("#input_heater_min_temperature").val("5");
	$("#input_heater_max_temperature").val("15");
	
	setInputCtrl("input_bit_number", "number", 3);
	setInputCtrl("input_status_sendcycle", "number", 3);
	setInputCtrl("input_speaker_volume", "number", 2);
	setInputCtrl("input_incoming_time", "number", 3);
	setInputCtrl("input_image_sendcycle", "number", 5);
	setInputCtrl("input_incoming_stop", "number", 3);
	setInputCtrl("input_capture_sendcycle", "number", 5);
	setInputCtrl("input_disp_st_time", "number", 4);
	setInputCtrl("input_disp_ed_time", "number", 4);
	setInputCtrl("input_action_detect_time", "number", 3);
	setInputCtrl("input_crash_detect_value", "number", 3);
	setInputCtrl("input_fan_min_temperature", "integer", 3);
	setInputCtrl("input_fan_max_temperature", "integer", 3);
	setInputCtrl("input_default_illumination_value", "number", 3);
	setInputCtrl("input_heater_min_temperature", "integer", 3);
	setInputCtrl("input_heater_max_temperature", "integer", 3);
}

function setEvent() {
/*	$("#input_bit_number").val("1");
	$("#select_group")
	$("#select_provide_group")
	$("#btn_edit_group")
	$("#btn_edit_provide_group")
	$("#select_bit_type")
	$("#input_stop_name")
	$("#select_voice_use_flag")
	$("#select_foreign_use_flag")
	
	$("#select_info_sort_type")
	$("#select_incoming_type")
	$("#input_status_sendcycle")
	$("#input_speaker_volume")
	$("#input_incoming_time")
	$("#input_image_sendcycle")
	$("#input_incoming_stop")
	$("#input_capture_sendcycle")
	$("#input_disp_st_time")
	$("#input_disp_ed_time")
	$("#select_crash_detect_flag")
	$("#select_action_detect_flag")
	$("#input_action_detect_time")
	$("#input_crash_detect_value")
	
	$("#input_fan_min_temperature")
	$("#input_fan_max_temperature")
	$("#input_default_illumination_value")
	$("#input_heater_min_temperature")
	$("#input_heater_min_temperature")
	
	$("#btn_value_save")
	$("#btn_value_load")*/
		
	//그룹 편집
	$("#btn_edit_group").click(function() {
		window.open("v508.view", "v508.view", "width=1177px, height=629px, resizable=0, scrollbars=0");
	})
	
	//지점 선택
	$("#btn_sel_stop").click(function() {
		selectDlg.dialog("open");
	})
	
	//기본값 복원
	$("#btn_restore").click(function() {
		init();
	})
	
	//뒤로
	$("#btn_back").click(function() {
		showConfirmDlg("수정된 정보가 사라집니다.<br>계속하시겠습니까?", backConfirm);
		
		function backConfirm() {
			$(".bit_plus_page1").show();
			$(".bit_plus_page2").hide();
			$("#bit_list").clearGridData();
		}
	})
	
	//다음
	$("#btn_next").click(function() {
		$(".bit_plus_page1").hide();
		$(".bit_plus_page2").show();
		$(window).trigger("resize");
		
		var count = $("#input_bit_number").val();
		var row_data = {
				order: 1,
				cate_name: $("#select_group option:selected").text(),					
				bit_type_name: $("#select_bit_type option:selected").text(),   			
				stop_name: $("#input_stop_name").val(),   				
				voice_use_flag_text: $("#select_voice_use_flag option:selected").text(),			
				foreign_use_flag_text: $("#select_foreign_use_flag option:selected").text(),		
				info_sort_type_text: $("#select_info_sort_type option:selected").text(),			
				incoming_type_text: $("#select_incoming_type option:selected").text(),			
				status_sendcycle: $("#input_status_sendcycle").val(),			
				speaker_volume: $("#input_speaker_volume").val(),				
				incoming_time: $("#input_incoming_time").val(),				
				image_sendcycle: $("#input_image_sendcycle").val(),
				incoming_stop: $("#input_incoming_stop").val(), 				
				capture_sendcycle: $("#input_capture_sendcycle").val(),			
				disp_st_time: $("#input_disp_st_time").val(),				
				disp_ed_time: $("#input_disp_ed_time").val(),				
				crash_detect_flag_text: $("#select_crash_detect_flag option:selected").text(),
				action_detect_flag_text: $("#select_action_detect_flag option:selected").text(),		
				action_detect_time: $("#input_action_detect_time").val(),			
				crash_detect_value: $("#input_crash_detect_value").val(),			
				fan_min_temperature: $("#input_fan_min_temperature").val(),			
				fan_max_temperature: $("#input_fan_max_temperature").val(),			
				default_illumination_value: $("#input_default_illumination_value").val(),
				heater_min_temperature: $("#input_heater_min_temperature").val(),		
				heater_max_temperature: $("#input_heater_max_temperature").val(),
				
                
				bit_cate_id: $("#select_group option:selected").val(),	 			
				bit_type: $("#select_bit_type option:selected").val(), 				
				install_stop_id: selected_stop_id,  		
				voice_use_flag: $("#select_voice_use_flag option:selected").val(),			
				foreign_use_flag: $("#select_foreign_use_flag option:selected").val(),		
				info_sort_type: $("#select_info_sort_type option:selected").val(),			
				incoming_type: $("#select_incoming_type option:selected").val(),			
				crash_detect_flag: $("#select_crash_detect_flag option:selected").val(),	
				action_detect_flag: $("#select_action_detect_flag option:selected").val()		
		}
		
		for (var i = 0; i < count; i++) {
			row_data.order = i + 1;
			$("#bit_list").jqGrid("addRowData", i + 1, row_data);
		}
			
	})
	
	/*$("#btn_save")*/
	
}

function setGrid() {
	var grid_height = 500;
	makeGrid("#bit_list", models1, grid_height, "resultList", onSelected, null, onDoubleClicked);
	//검색결과가 없습니다 text 삭제
	if ($("#bit_list #search_none").length != 0) {
		$("#bit_list #search_none").remove();
	}
	
	function onSelected() {
		$("#bit_list").jqGrid("saveRow", last_id, null, "clientArray");
		last_id = "";
	}
	
	function onDoubleClicked(rowId) {
		if (last_id != rowId ) {
	        $("#bit_list").jqGrid("saveRow", last_id, null, "clientArray");
	        //true => enter 저장, esc취소 가능
	        $("#bit_list").jqGrid("editRow", rowId, true);
	        last_id = rowId;
	    }
	}
	
	$(window).bind('resize', function() {
		$("#bit_list").jqGrid('setGridHeight',$(".pop_bit_con2").height() - 25);
		$("#bit_list").jqGrid('setGridWidth',$(".pop_bit_con2").width());
	}).trigger('resize');
}