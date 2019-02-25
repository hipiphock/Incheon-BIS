/**
 * BIT관리 - 시정홍보 자료관리 - 시나리오 팝업
 * @author 박경원
 * @since 2017-10-20
 */
var last_id = "";
var last_id2 = "";
var last_id3 = "";
var last_id4 = "";
var last_id5 = "";
var row_id_to_add = "";
var upload_dlg = "";
var text_dlg = "";
var cur_file_id = "";

var models2 = [
               {onlyView: true, 
            	label:"파일명",	name:"filenm",     	   index:"filenm",       width: "120", 	align:"left",   sorttype:"text"},
               {label:"표출시작시간",	name:"disp_sdate",     index:"disp_sdate",    width: "80", 	align:"center", sorttype:"text"},
               {label:"파일크기",	name:"filesize",       index:"filesize",    width: "70", 	align:"center", sorttype:"text"},
               {label:"파일종류",	name:"filekind",       index:"filekind",   width: "70", 	align:"center", sorttype:"text"},
               {label:"다운로드시간",	name:"down_time",      index:"down_time",   width: "130", 	align:"center", sorttype:"text"},
               {label:"RUN TIME",name:"run_time",      index:"run_time",    width: "70", 	align:"center", sorttype:"text"},
               {name:"filedir",     index:"filedir",      hidden: true}
];

//팝업 이미지 리스트
var models3 = [
               {onlyView: true, 
            	label:"파일종류",		name:"filekind",    index:"filekind",    width: "90", 	align:"center", sorttype:"text"},
               {label:"파일명",		name:"filenm",		index:"filenm",		 width: "186",  align:"left",	sorttype:"text"},
//               {label:"파일버전",		name:"filever", 	index:"filever",   	 width: "92", 	align:"center", sorttype:"text"},
        	   {label:"파일크기",	    name:"filesize",    index:"filesize",    width: "85", 	align:"center", sorttype:"text"},
        	   {label:"파일위치",      name:"filedir",     index:"filedir",      width: "90", 	align:"center", sorttype:"text"}
               ];


$(document).ready(function(){
	initialize();
	setGrid();
	
});

function initialize() {
	
	initCalendar("input_down_date", YEAR_FORMAT1, true);
	initTimePicker("input_down_time", TIME_FORMAT1, true);
	initTimePicker("input_run_time", TIME_FORMAT2, false);
	initTimePicker("input_disp_time", TIME_FORMAT1, false);
	
	$("#btn_del").click(function() {
		var selId = $("#schedule_list").jqGrid("getGridParam", "selrow");
		$("#schedule_list").jqGrid("delRowData", selId);
	});
	
	$("#btn_add_img").click(function() {
		var imgRowid = $("#pop_image_list").jqGrid("getGridParam", "selrow");
		if(imgRowid == null) {
			showAlert("선택된 이미지가 없습니다.");
			return;
		}
		
		addScheduleRow(imgRowid);
	});
	
	//저장
	$("#btn_save").click(function() {
		var allData = $('#schedule_list').jqGrid('getGridParam', 'data');
		console.log(allData.length);
		
		if(allData.length < 1) {
			showAlert("목록에 등록된 이미지가 없습니다.");
			return;
		}
		
		showConfirmDlg("목록의 이미지를 스케줄로 저장하시겠습니까?", saveXmlFile);
	});
	
	//취소
	$("#btn_cancel").click(function() {
		$("#schedule_list").jqGrid('clearGridData');
	});
}

/*******************
 * 스케줄 목록 추가
 *******************/
function addScheduleRow(id) {
	
	//빈 그리드 일 경우 검색 결과가 없습니다 문구 삭제
	if ($("#schedule_list #search_none").length != 0) {
		$("#schedule_list #search_none").remove();
	}
	
	var row_data = $("#pop_image_list").jqGrid("getRowData", id);
	
	var ids = $("#schedule_list").jqGrid("getDataIDs");
	var sche_ord = 0;
	
	if (ids.length == 0) {
		sche_ord = 1;
	} else {
		sche_ord = parseInt(ids[ids.length - 1]) + 1;
	}
	
	var param = {
			filenm: row_data.filenm,
			disp_sdate: $("#input_disp_time").val(),
			filesize : row_data.filesize,
			filekind : row_data.filekind,
			down_time:  $("#input_down_date").val()+"T"+$("#input_down_time").val(),
			run_time: $("#input_run_time").val(),
			filedir: row_data.filedir
	}
	
	$("#schedule_list").jqGrid("addRowData", sche_ord, param);
}

/***********
 * 그리드 작성
 ***********/
function setGrid() {
	var pop_grid_height = 465;
	var pop_data_grid_height = 278;
	//시나리오 상세 목록 생성
	makeGrid("#schedule_list", models2, pop_data_grid_height, "resultList", null, null, null);
	//이미지 리스트
	makeGrid("#pop_image_list", models3, pop_data_grid_height, "resultList", onSelected3, null, null);
	
	function onSelected3(rowId) {
		
		var row_data = $("#pop_image_list").jqGrid("getRowData", rowId);
		
		$("#input_filename").val(row_data.filenm);
	}
	
	reloadGrid("#pop_image_list", "./bit/selectScheduleImageList.do", null, "resultList");
	
	$(window).bind('resize', function() {
		$("#schedule_list").jqGrid('setGridHeight',$(".pop_middle_chart").height() - 23);
		$("#schedule_list").jqGrid('setGridWidth',$(".pop_middle_chart").width());
		$("#pop_image_list").jqGrid('setGridHeight',$(".pop_right_chart").height() - 23);
		$("#pop_image_list").jqGrid('setGridWidth',$(".pop_right_chart").width());
	}).trigger('resize');
}

function saveXmlFile() {
	
	$("#xmlDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "xmlDown");
	form.action = "./bit/saveSchedulXml.do";
	form.method = "POST";
	
	var row_data = $("#schedule_list").jqGrid("getRowData");;

	var value = JSON.stringify(row_data);
	var	para1 = document.createElement('INPUT');
	para1.type  = 'HIDDEN';
	para1.name  = 'json';
	para1.value = value;
	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("xmlDown", true);
}


/***********
 * 신규파일 업로드
 **********/
function uploadNewBitFile() {
	
	var row_ids = $("#file_list").jqGrid("getDataIDs");
	//이미지, 영상, 홍보 중 활성화 되어있는 탭
	var tab = $(".tab-pane.active").attr("id");
	var data_type = "";
	
	switch (tab) {
	case "si_tab1": data_type = "1"; break; //이미지
	case "si_tab2": data_type = "2"; break; //영상
	case "si_tab3": data_type = "3"; break; //홍보
	default: break;
	}
	
	//file id를 미리 가져와 쿼리에 직접 대입
	ajaxCall("./bit/selectDisplayDataId.do", null, null, getIdSuccess, null);
	
	function getIdSuccess(data) {
		var data_id = data.id;

		if (data_id != -1) {
			$("#loading_wrap").show();
			
			for (var i = 0; i < row_ids.length; i++) {
				var row_id = row_ids[i];
				var row_data = $("#file_list").jqGrid("getRowData", row_id);
				
				//업로드 하지 않았거나 실패한 파일만 업로드
				if ((row_data.result == "실패") || (row_data.result == "")) {
					var formData = new FormData();
					formData.append("data_id", data_id++);
					formData.append("row_id", row_id);
					formData.append("data_type", data_type);
					formData.append("files", $("#file_" + row_id)[0].files[0]);
					
					$.ajax({
						url: "./bit/upLoadNewScenData.do",
						data: formData,
						dataType: 'json',
						contentType: false,
						processData: false,
						type: 'POST',
						beforeSend: function() {
							$("#file_list").jqGrid("setCell", row_id, "status", "업로드중");
						},
					
						success: function (data) {
							var id = data.row_id;
							$("#file_list").jqGrid("setCell", id, "status", "완료");

							if (data.result_code != 1) {
								$("#file_list").jqGrid("setCell", id, "result", "실패");
							} else {
								$("#file_list").jqGrid("setCell", id, "result", "성공");
							}
							
							if ($.active == 1) {
								$("#loading_wrap").hide();
							}
						},
					
						error: function() {
							var id = data.row_id;
							$("#file_list").jqGrid("setCell", id, "status", "완료");
							$("#file_list").jqGrid("setCell", id, "result", "실패");
							
							if ($.active == 1) {
								$("#loading_wrap").hide();
							}
						}
					});
				}
			}
		} else {
			showAlert("업로드 실패");
		}
	}
}

/*************
 * 광역 파일 업로드
 *************/
function uploadWideBitFile() {
	
	var row_ids = $("#file_list").jqGrid("getDataIDs");
	
	for (var i = 0; i < row_ids.length; i++) {
		var row_id = row_ids[i];
		var row_data = $("#file_list").jqGrid("getRowData", row_id);
		
		//업로드 하지 않았거나 실패한 파일만 업로드
		if ((row_data.result == "실패") || (row_data.result == "")) {
			var formData = new FormData();
			formData.append("files", $("#file_" + row_id)[0].files[0]);
			
			$.ajax({
				url: "./bit/upLoadWideScenData.do",
				data: formData,
				dataType: 'json',
				contentType: false,
				processData: false,
				type: 'POST',
				beforeSend: function() {
					$("#file_list").jqGrid("setCell", row_id, "status", "업로드중");
				},
			
				success: function (data) {
					var id = data.row_id;
					$("#file_list").jqGrid("setCell", id, "status", "완료");

					if (data.result_code != 1) {
						$("#file_list").jqGrid("setCell", id, "result", "실패");
					} else {
						$("#file_list").jqGrid("setCell", id, "result", "성공");
					}
					
					if ($.active == 1) {
						$("#loading_wrap").hide();
					}
				},
			
				error: function() {
					var id = data.row_id;
					$("#file_list").jqGrid("setCell", id, "status", "완료");
					$("#file_list").jqGrid("setCell", id, "result", "실패");
					
					if ($.active == 1) {
						$("#loading_wrap").hide();
					}
				}
			});
		}
	}
}



function registTextData() {
	var param = {
			data_type: "3",
			text: $("#input_text_name").val()
	}
	
	ajaxCall("./bit/insertTextScenData.do", param, null, onSuccess, null);
	
	function onSuccess(data) {
		if(data.result == "1") {
			$("#pop_text").dialog("close");
			reloadGrid("#pop_promotion_list", "./bit/selectPromotionList.do", null, "resultList")
		}else {
			showAlert("홍보 문구 등록 중 오류가 발생했습니다.");
		}
	}
}

/****************
 * 신규장비 시나리오 저장
 ****************/
function saveNewScenario() {
	//수정 중인 row 저장
	$("#pop_scenario_list").jqGrid("saveRow", last_id);
	$("#schedule_list").jqGrid("saveRow", last_id2);
	$("#pop_image_list").jqGrid("saveRow", last_id3);
	$("#pop_video_list").jqGrid("saveRow", last_id4);
	$("#pop_promotion_list").jqGrid("saveRow", last_id5);
	
	var row_id = $("#pop_scenario_list").jqGrid("getGridParam", "selrow");
	var row_data = $("#pop_scenario_list").jqGrid("getRowData", row_id);
	var detail_rows = $("#schedule_list").jqGrid("getRowData");
	var image_rows = $("#pop_image_list").jqGrid("getRowData");
	var video_rows = $("#pop_video_list").jqGrid("getRowData");
	var promotion_rows = $("#pop_promotion_list").jqGrid("getRowData");
	
	//scenario_id, data_explain, last_version, scenario_ord, disp_st_dt, disp_ed_dt, disp_time, disp_data_id
	var scenario_ords = [];
	var disp_st_dts = [];
	var disp_ed_dts = [];
	var disp_times = [];
	var disp_data_ids = []; //시나리오 상세항목 id
	var disp_data_ids2 = []; //이미지, 영상, 홍보 id
	var data_explains = []; //이미지, 영상 , 홍보 상세설명
	
	//시나리오 상세항목
	$.each(detail_rows, function(index, value) {
		console.log("index = " + index + " " + "value = " + value.scenario_ord + ", " + value.disp_st_dt + ", " + value.disp_ed_dt + ", " + value.disp_time + ", " + value.disp_data_id);
		scenario_ords.push(value.scenario_ord);
		disp_st_dts.push(value.disp_st_dt);
		disp_ed_dts.push(value.disp_ed_dt);
		disp_times.push(value.disp_time);
		disp_data_ids.push(value.disp_data_id);
	})
	
	//이미지 리스트
	$.each(image_rows, function(index, value) {
		disp_data_ids2.push(value.disp_data_id);
		data_explains.push(value.data_explain);
	})
	
	//영상 리스트
	$.each(video_rows, function(index, value) {
		disp_data_ids2.push(value.disp_data_id);
		data_explains.push(value.data_explain);
	})
	
	//홍보 리스트
	$.each(promotion_rows, function(index, value) {
		disp_data_ids2.push(value.disp_data_id);
		data_explains.push(value.data_explain);
	})
	
	var param = {
			scenario_id: row_data.scenario_id,
			data_explain: row_data.data_explain,
			last_version: getDate(true),
			scenario_ords: scenario_ords,
			disp_st_dts: disp_st_dts,
			disp_ed_dts: disp_ed_dts,
			disp_times: disp_times,
			disp_data_ids: disp_data_ids,
			disp_data_ids2: disp_data_ids2,
			data_explains: data_explains
	}
	
	//시나리오 정보 및 시나리오 상세항목 업데이트, 화면자료 업데이트
	$.ajaxSettings.traditional = true;
	ajaxCall("./bit/saveScenario.do", param, null, saveSuccess, saveFail)
	
	function saveSuccess(data) {
		if (data.result_code != 1) {
			showAlert("시나리오 및 화면자료 저장 실패");
		}else {
			showAlert("시나리오가 정상적으로 저장되었습니다.");
		}
		loadSnrGrid();
	}
	
	function saveFail() {
		showAlert("시나리오 및 화면자료 저장 실패");
		loadSnrGrid();
	}
}

/****************
 * 광역장비 시나리오 저장
 ****************/

function saveWideScenario() {
	//수정 중인 row 저장
	$("#pop_scenario_list").jqGrid("saveRow", last_id);
	$("#schedule_list").jqGrid("saveRow", last_id2);
	$("#pop_image_list").jqGrid("saveRow", last_id3);
	
	var row_id = $("#pop_scenario_list").jqGrid("getGridParam", "selrow");
	var row_data = $("#pop_scenario_list").jqGrid("getRowData", row_id);
	var detail_rows = $("#schedule_list").jqGrid("getRowData");
	
	var arrSeq = [];
	var arrDisp_st_dts = [];
	var arrDisp_ed_dts = [];
	var arrView_times = [];
	var arrFile_name = []; 
	
	//시나리오 상세항목
	$.each(detail_rows, function(index, value) {
		arrSeq.push(value.seq);
		arrDisp_st_dts.push(value.disp_st_dt);
		arrFile_name.push(value.file_name);
		arrView_times.push(value.view_time);
	})
	
	var param = {
			snr_id: row_data.snr_id,
			arrSeq: arrSeq,
			arrDisp_st_dts: arrDisp_st_dts,
			arrView_times: arrView_times,
			arrFile_name: arrFile_name
	}
	
	//시나리오 정보 및 시나리오 상세항목 업데이트, 화면자료 업데이트
	$.ajaxSettings.traditional = true;
	ajaxCall("./bit/saveWideScenario.do", param, null, saveSuccess, saveFail)
	
	function saveSuccess(data) {
		if (data.result_code != 1) {
			showAlert("시나리오 및 화면자료 저장 실패");
		}else {
			showAlert("시나리오가 정상적으로 저장되었습니다.");
		}
		loadSnrGrid();
	}
	
	function saveFail() {
		showAlert("시나리오 및 화면자료 저장 실패");
		loadSnrGrid();
	}
}


function loadSnrGrid() {
	var param = {servertp : $("#select_servertpcd option:selected").val()};
	reloadGrid("#pop_scenario_list", "./bit/selectScenarioList.do", param, "resultList");
}

function loadSnrDetailGrid(id) {
	var params = {
		servertp : $("#select_servertpcd option:selected").val(),
		scenario_id : id
	};
	reloadGrid("#schedule_list", "./bit/selectScenarioDetailList.do", params, "resultList");
}

function loadFileDataGrid() {
	//이미지 목록
	reloadGrid("#pop_image_list", "./bit/selectImageList.do", {servertp: $("#select_servertpcd option:selected").val()}, "resultList");
	//영상 목록
	reloadGrid("#pop_video_list", "./bit/selectVideoList.do",  {servertp: $("#select_servertpcd option:selected").val()}, "resultList");
	//홍보 목록
	reloadGrid("#pop_promotion_list", "./bit/selectPromotionList.do",  {servertp: $("#select_servertpcd option:selected").val()}, "resultList");
}


function changeRow(direction) {
	var cur_row_id = $("#schedule_list").jqGrid("getGridParam", "selrow");
	if (cur_row_id == null) {
		showAlert("시나리오 상세항목을 선택해주세요.");
		return;
	}
	
	var ids = $("#schedule_list").jqGrid("getDataIDs");
	var target_row_id = "";
	var index = "";
	
	for (var i = 0; i < ids.length; i++) {
		if (ids[i] == cur_row_id) {
			index = i;
		}
	}
	
	if (direction == "before") {
		if (index == 0) {
			return;
		}
		target_row_id = ids[index - 1];
	} else if (direction == "after") {
		if (index == ids.length - 1) {
			return;
		}
		target_row_id = ids[index + 1];
	}
	
	var cur_row_data = $("#schedule_list").jqGrid("getRowData", cur_row_id);
	$("#schedule_list").jqGrid("delRowData", cur_row_id);
	$("#schedule_list").jqGrid("addRowData", cur_row_id, cur_row_data, direction, target_row_id);
	
	//시나리오 순번 재정의
	ids = $("#schedule_list").jqGrid("getDataIDs");
	for (var i = 0; i < ids.length; i++) {
		$("#schedule_list").jqGrid("setCell", ids[i], "seq", i + 1);
	}
	
	$("#schedule_list").jqGrid("setSelection", cur_row_id);
}



function getDate(flag) {
	var d = new Date();
	//90일 뒤
	if (!flag) {
		d.setDate(90);
	}
	 var s = leadingZeros(d.getFullYear(), 4) +
		 	 leadingZeros(d.getMonth() + 1, 2) +
		 	 leadingZeros(d.getDate(), 2) + "000000";
	 console.log(s);
	 return s;
}

function leadingZeros(n, digits) {
	var zero = '';
	n = n.toString();

	if (n.length < digits) {
		for (i = 0; i < digits - n.length; i++)
			zero += '0';
	}
	return zero + n;
}


function setFileType(cellValue, options, rowdata, action) {
	if (cellValue == 1) {
		cellValue = "이미지"
	} else if (cellValue == 2) {
		cellValue = "동영상"
	} else if (cellValue == 3) {
		cellValue = "홍보"
	}
	
	return cellValue;
}
/*
function setDate(cellValue, options, rowdata, action) {
	var text = cellValue.substr(0,4) + "-"
		+ cellValue.substr(4,2) + "-"
		+ cellValue.substr(6,2);
	var text = cellValue.substr(0, 8)
	return text;
}*/

function getDataType(string) {
	if (string.indexOf("image") != -1) {
		return "이미지";
	} else if (string.indexOf("video" != -1)) {
		return "비디오";
	}
}

function isValidExtension(file) {
	var ext_list;
	
	var tab = $(".tab-pane.active").attr("id");
	switch (tab) {
	case "si_tab1": ext_list = ["이미지를", "gif", "png", "jpg", "jpeg"]; break; //이미지
	case "si_tab2": ext_list = ["동영상을", "avi", "mpg", "mpeg", "mpe", "wmv"]; break; //영상
//	case "si_tab3": data_type = "3"; break; //홍보
	default: break;
	}
	
	var ext = file.name.split(".").pop().toLowerCase();
	if ($.inArray(ext, ext_list) == -1) {
		showAlert(ext_list[0] + " 선택해주세요.");
		return false;
	}
	
	return true;
}
