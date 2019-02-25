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

//팝업 시나리오 목록
var models1 = [
               {onlyView: true, 
            	label:"시나리오ID",		name:"snr_id",			index:"snr_id",    	 width: "90", 	align:"center", sorttype:"number"},
        	   {label:"시나리오 설명",	name:"file_name",     	index:"file_name", 		 width: "90", 	align:"left",   sorttype:"text", editable: true},
        	   {label:"등록일",		name:"reg_date",     	index:"reg_date",      	 width: "105", 	align:"center", sorttype:"number"}
        	   ];

//팝업 시나리오 상세 목록 (disp_data_type 1: image, 2: video)
var models2 = [
               {onlyView: true, 
            	label:"순번",		name:"seq",     	   index:"seq",      	 width: "50", 	align:"center", sorttype:"number"},
               {label:"종류",		name:"data_type",      index:"data_type",    width: "60", 	align:"center", sorttype:"text", formatter: setFileType},
               {label:"파일명",	name:"file_name",      index:"file_name",    width: "105", 	align:"left",   sorttype:"text"},
               {label:"시작일",	name:"disp_st_dt",     index:"disp_st_dt",   width: "110", 	align:"center", sorttype:"number", editable:true, editoptions: {maxlength: 14}},
               {label:"종료일",	name:"disp_ed_dt",     index:"disp_ed_dt",   width: "110", 	align:"center", sorttype:"number", editable:true, editoptions: {maxlength: 14}},
               {label:"표출시간",	name:"view_time",      index:"view_time",    width: "50", 	align:"center", sorttype:"number", editable:true, editoptions: {maxlength: 3}},
               {name:"disp_data_id", index:"disp_data_id", hidden:true}
];

//팝업 이미지 리스트
var models3 = [
               {onlyView: true, 
            	label:"파일명",		name:"disp_data_filename",      index:"disp_data_filename",  width: "92", 	align:"left", sorttype:"text"},
               {label:"설명",			name:"data_explain",			index:"data_explain",		 width: "93",  align:"center",	sorttype:"text", editable:true},
               {label:"등록일",		name:"regist_dt", 	    		index:"regist_dt",      	 width: "92", 	align:"center", sorttype:"number"},
        	   {label:"등록 한 사용자",	name:"regist_user_id",	    	index:"regist_user_id",      width: "92", 	align:"center", sorttype:"text"},
        	   {name:"disp_data_id", index:"disp_data_id", hidden:true},
        	   {name:"disp_data_type", index:"disp_data_type", hidden:true}
               ];

//파일 추가
var models4 = [
               {onlyView: true, 
            	label: "상태",	                name: "status", 			index: "status", 				width: "70", 	align: "center", 	sorttype: "text"},
               {label: "파일명",					name: "disp_data_filename", index: "disp_data_filename", 	width: "245", 	align: "left", 		sorttype: "text"},
               {label: "파일형식",					name: "type", 				index: "type", 					width: "90", 	align: "center", 	sorttype: "text"},
               {label: "파일크기",					name: "size", 				index: "size", 					width: "80", 	align: "center", 	sorttype: "number"},
               {label: "업로드결과",					name: "result", 			index: "result", 				width: "90", 	align: "center", 	sorttype: "text"},
               ];

$(document).ready(function(){
	setDialog();
	setGrid();
	setEvent();
});

function setDialog() {
	var grid_height = 465;
	
	text_dlg = getDialog("pop_text", "container");
	upload_dlg = getDialog("pop_Upload", "container");
	makeGrid("#file_list", models4, grid_height, "resultList", null, null, null);
	//검색결과가 없습니다 text 삭제
	if ($("#file_list #search_none").length != 0) {
		$("#file_list #search_none").remove();
	}
	
	$("#file_list").jqGrid("setGridHeight", 335);
	$("#file_list").jqGrid("setGridWidth", 598);
	
	//파일 추가
	$("#file_add").click(function() {
		cur_file_id++;
		var text = "<input id=\"file_" + cur_file_id + "\" type=\"file\" name=\"file\" sytle=\"display:none\">"
		$("#files").append(text);
		$("#file_" + cur_file_id).trigger("click");
		
		//파일 선택 -> grid에 추가
		$("#file_" + cur_file_id).change(function() {
			var file = $(this)[0].files[0];
			if (!isValidExtension(file)) return;
			
			var row_data = {
					status: "대기", 			
					disp_data_filename: file.name,  
					type: getDataType(file.type), 				
					size: file.size, 				
					result: "", 			
			}
			
			$("#file_list").jqGrid("addRowData", cur_file_id, row_data);
		})
	})
	
	//파일 삭제
	$("#file_delete").click(function() {
		var row_id = $("#file_list").jqGrid("getGridParam", "selrow");
		if (row_id == null) {
			showAlert("파일을 선택해주세요.");
			return;
		}
		
		//Grid에서 삭제
		$("#file_list").jqGrid("delRowData", row_id);
		//Input file 삭제
		$("#file_" + row_id).remove();
	})
	
	//파일 업로드
	$("#file_upload_start").click(function() {
		var row_ids = $("#file_list").jqGrid("getDataIDs");
		
		if (row_ids.length == 0) {
			showAlert("업로드할 파일이 없습니다.");
			return;
		}
		
		var not_uploaded = false;
		
		for (var i = 0; i < row_ids.length; i++) {
			var row_data = $("#file_list").jqGrid("getRowData", row_ids[i]);
			if ((row_data.result == "실패") || (row_data.result == "")) {
				not_uploaded = true;
				break;
			}
		}
		
		if (!not_uploaded) {
			showAlert("업로드할 파일이 없습니다.");
			return;
		}
		
		showConfirmDlg("업로드 하시겠습니까?", uploadConfirm);
		
		function uploadConfirm() {
			var servertp = $("#select_servertpcd option:selected").val();
			
			if(servertp == "120") {
				uploadNewBitFile();
			}else {
				uploadWideBitFile();
			}
		}
			
	})
	
	//닫기
	$("#file_close").click(function() {
		upload_dlg.dialog("close");
		$(".s_btn.sina_btn.refresh").trigger("click");
	})
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



function setEvent() {
	//시나리오 추가
	$("#pop_add_button").click(function() {
		showConfirmDlg("새로운 시나리오가 추가됩니다.<br>계속하시겠습니까?", addConfirm);
		
		function addConfirm() {
			//추가 후 새로운 목록 조회
			var servertp = $("#select_servertpcd option:selected").val();
			
			ajaxCall("./bit/insertBitScenario.do", {servertp: servertp}, null, insertSuccess, insertFail);
			
			function insertSuccess(data) {
				
				if (data.result_code != 1) {
					showAlert("시나리오 추가 실패");
				}
				loadSnrGrid();
			}
			
			function insertFail() {
				showAlert("시나리오 추가 실패");
				loadSnrGrid();
			}
		}
	})
	
	$("#pop_save_button").click(function() {
		
		if($("#select_servertpcd option:selected").val() != "120") {
			showAlert("신규BIT 장비만 시나리오 설명의 수정 ,저장이 가능합니다.");
			return;
		}
		
		var row_id = $("#pop_scenario_list").jqGrid("getGridParam", "selrow");
		if (row_id == null) {
			showAlert("시나리오를 선택해주세요.")
			return;
		}
		$("#pop_scenario_list").jqGrid("saveRow", row_id);
		
		var row_data = $("#pop_scenario_list").jqGrid("getRowData", row_id);
		showConfirmDlg("선택한 시나리오 설명을 저장하시겠습니까?", function(){
			var params = {
				servertp : $("#select_servertpcd option:selected").val(),
				data_explain : row_data.file_name,
				scenario_id  : row_data.snr_id
			}
			
			ajaxCall("./bit/updateScenario.do", params, null, onSuccess, insertFail);
			
			function onSuccess(data) {
				
				if (data.result_code == -1) {
					showAlert("시나리오 저장 오류");
				}else {
					showAlert("시나리오 저장 완료");
					loadSnrGrid();
				}
			}
			
			function insertFail() {
				showAlert("시나리오 저장 오류");
				loadSnrGrid();
			}
		});
		
	});
	
	//시나리오 삭제
	$("#pop_delete_button").click(function() {
		var row_id = $("#pop_scenario_list").jqGrid("getGridParam", "selrow");
		if (row_id == null) {
			showAlert("시나리오를 선택해주세요.")
			return;
		}
		
		var row_data = $("#pop_scenario_list").jqGrid("getRowData", row_id);
		showConfirmDlg(row_data.file_name + " 시나리오가 삭제됩니다.<br>계속하시겠습니까? ", deleteConfirm);
		
		function deleteConfirm() {
			var param = {
					scenario_id: row_data.snr_id,
					servertp : $("#select_servertpcd option:selected").val()
			};
			//삭제 후 새로운 목록 조회
			ajaxCall("./bit/deleteBitScenario.do", param, null, deleteSuccess, deleteFail);
			
			function deleteSuccess(data) {
				if (data.result_code != 1) {
					showAlert("시나리오 삭제 실패");
				}else {
					showAlert("정상 삭제되었습니다.");
				}
				loadSnrGrid();
			}
			
			function deleteFail() {
				showAlert("시나리오 삭제 실패");
				loadSnrGrid();
			}
		}
	})
	
	//Up button
	$("#btn_up").click(function() {
		changeRow("before");
	})
	
	//Down button
	$("#btn_down").click(function() {
		changeRow("after");
	})
	
	//시나리오 상세항목 삭제
	$("#btn_del").click(function() {
		var cur_row_id = $("#pop_scenario_detail_list").jqGrid("getGridParam", "selrow");
		if (cur_row_id == null) {
			showAlert("시나리오 상세항목을 선택해주세요.");
			return;
		}
		
		$("#pop_scenario_detail_list").jqGrid("delRowData", cur_row_id);
		var ids = $("#pop_scenario_detail_list").jqGrid("getDataIDs");
		for (var i = 0; i < ids.length; i++) {
			$("#pop_scenario_detail_list").jqGrid("setCell", ids[i], "seq", i + 1);
		}
	})
	
	//TODO
	$("#btn_date").click(function() {
		
	})
	
	//왼쪽 화살표 버튼
	$(".sina_pop_arow").click(function() {
		var tab = $("#.active a").attr("href");
		
		switch (tab) {
		//이미지
		case "#si_tab1":
			addRow("#pop_image_list");
			break;
		//영상
		case "#si_tab2":
			addRow("#pop_video_list");
			break;
		//홍보
		case "#si_tab3":
			addRow("#pop_promotion_list");
			break;   
		}
	})
	
	//추가 버튼
	$(".s_btn.sina_btn.add").click(function(){
		
//		$("#pop_Upload").dialog("open");
//		//파일 id 0 초기화
//		cur_file_id = 0;
//		//input type file 초기화
//		$("input[type=file]").remove();
//		$("#file_list").clearGridData();
//		
		var tab = $(".tab-pane.active").attr("id");
		switch (tab) {
			case "si_tab1": 
			case "si_tab2": 
				$("#pop_Upload").dialog("open");
				//파일 id 0 초기화
				cur_file_id = 0;
				//input type file 초기화
				$("input[type=file]").remove();
				$("#file_list").clearGridData();
				
				var tab = $(".tab-pane.active").attr("id");	
				break;
			case "si_tab3":  
				$("#input_text_name").val("");
				$("#pop_text").dialog("open");
				break;
			default: break;
		}
	});
	

	
	//홍보메시지 pop 이벤트
	$("#btn_close_textpop").click(function() {
		$("#pop_text").dialog("close");
	});
	
	$("#btn_cancel_text").click(function() {
		$("#pop_text").dialog("close");
	});
	
	$("#btn_save_text").click(function() {
		if($("#input_text_name").val() == "") {
			showAlert("등록 할 홍보 문구를 입력하세요.");
			return;
		}
		
		showConfirmDlg("홍보문구를 등록 하시겠습니까?", registTextData);
		
		//TODO ajax
	});
	
	
	
	
	//TODO 사용안함 버튼
	$(".s_btn.sina_btn.notUse").click(function() {
		
	})
	
	//새로고침
	$(".s_btn.sina_btn.refresh").click(function() {
		var tab = $(".tab-pane.active").attr("id");
		switch (tab) {
		case "si_tab1": reloadGrid("#pop_image_list", "./bit/selectImageList.do", {servertp: $("#select_servertpcd option:selected").val()}, "resultList"); break;
		case "si_tab2": reloadGrid("#pop_video_list", "./bit/selectVideoList.do", {servertp: $("#select_servertpcd option:selected").val()}, "resultList"); break;
		case "si_tab3": reloadGrid("#pop_promotion_list", "./bit/selectPromotionList.do", {servertp: $("#select_servertpcd option:selected").val()}, "resultList"); break;
		default: break;
		}
	})
	
	//저장
	$("#btn_save").click(function() {
		var servertp = $("#select_servertpcd option:selected").val();
		
		if(servertp == "120") {
			showConfirmDlg("시나리오 변경정보가 저장됩니다.<br>계속하시겠습니까?", saveNewScenario);
		}else {
			showConfirmDlg("시나리오 변경정보가 저장됩니다.<br>계속하시겠습니까?", saveWideScenario);
		}
	})
	
	//취소
	$("#btn_cancel").click(function() {
		showConfirmDlg("저장하지 않은 데이터는  원상 복구 됩니다.<br>조회모드로 전환하시겠습니까?", cancelConfirm);
		
		function cancelConfirm() {
			//시나리오 목록
			loadSnrGrid();
		}
	})
	
	//서버 구분
	$("#select_servertpcd").change(function() {
		loadSnrGrid();
		loadFileDataGrid();
	}).trigger("change");
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
	$("#pop_scenario_detail_list").jqGrid("saveRow", last_id2);
	$("#pop_image_list").jqGrid("saveRow", last_id3);
	$("#pop_video_list").jqGrid("saveRow", last_id4);
	$("#pop_promotion_list").jqGrid("saveRow", last_id5);
	
	var row_id = $("#pop_scenario_list").jqGrid("getGridParam", "selrow");
	var row_data = $("#pop_scenario_list").jqGrid("getRowData", row_id);
	var detail_rows = $("#pop_scenario_detail_list").jqGrid("getRowData");
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
		
		console.log("#index = " + index + " " + "value = " + value.seq + ", " + value.disp_st_dt + ", " + value.disp_ed_dt + ", " + value.view_time + ", " + value.disp_data_id);
		
		scenario_ords.push(""+(index+1));
		disp_st_dts.push(value.disp_st_dt);
		disp_ed_dts.push(value.disp_ed_dt);
		disp_times.push(value.view_time);
		disp_data_ids.push(value.disp_data_id);
	});
	
	//이미지 리스트
	$.each(image_rows, function(index, value) {
		disp_data_ids2.push(value.disp_data_id);
		data_explains.push(value.data_explain);
	})
	
	var param = {
			scenario_id: row_data.snr_id,
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
	$("#pop_scenario_detail_list").jqGrid("saveRow", last_id2);
	$("#pop_image_list").jqGrid("saveRow", last_id3);
	
	var row_id = $("#pop_scenario_list").jqGrid("getGridParam", "selrow");
	var row_data = $("#pop_scenario_list").jqGrid("getRowData", row_id);
	var detail_rows = $("#pop_scenario_detail_list").jqGrid("getRowData");
	
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


function setGrid() {
	var pop_grid_height = 465;
	var pop_data_grid_height = 278;
	//시나리오 목록 생성
	makeGrid("#pop_scenario_list", models1, pop_grid_height, "resultList", onSelected, onCompleted, onDoubleClicked);
	//시나리오 상세 목록 생성
	makeGrid("#pop_scenario_detail_list", models2, pop_data_grid_height, "resultList", onSelected2, onCompleted2, onDoubleClicked2);
	//이미지 리스트
	makeGrid("#pop_image_list", models3, pop_data_grid_height, "resultList", onSelected3, null, onDoubleClicked3);
	//영상 리스트
	makeGrid("#pop_video_list", models3, pop_data_grid_height, "resultList", onSelected4, null, onDoubleClicked4);
	//홍보 리스트
	makeGrid("#pop_promotion_list", models3, pop_data_grid_height, "resultList", onSelected5, null, onDoubleClicked5);
	//시나리오 선택 시
	function onSelected(rowId) {
		//이전 row 저장
		if (last_id != "") {
			$("#pop_scenario_list").jqGrid("saveRow", last_id);
			last_id = "";
		}
		
		var rowData = $("#pop_scenario_list").jqGrid("getRowData", rowId);
		loadSnrDetailGrid(rowData.snr_id);
		
		$(".sina_pop_title").text("선택시나리오 [" +rowData.snr_id+"]");
	}
	
	function onCompleted() {
		$("#pop_scenario_list").jqGrid("setSelection", 1);
	}
	
	function onDoubleClicked(row_id) {
		if (last_id != row_id ) {
	        $("#pop_scenario_list").jqGrid("saveRow", last_id);
	        //true => enter 저장, esc취소 가능
	        $("#pop_scenario_list").jqGrid("editRow", row_id, true);
	        last_id = row_id;
	    }
	}
	
	function onSelected2(rowId) {
		//이전 row 저장
		if (last_id2 != "") {
			$("#pop_scenario_detail_list").jqGrid("saveRow", last_id2);
			last_id2 = "";
		}
	}
	
	function onCompleted2() {
		row_id_to_add = $("#pop_scenario_detail_list").jqGrid("getGridParam", "reccount") + 1;
	}
	
	function onDoubleClicked2(row_id) {
		if (last_id2 != row_id ) {
	        $("#pop_scenario_detail_list").jqGrid("saveRow", last_id2);
	        //true => enter 저장, esc취소 가능
	        $("#pop_scenario_detail_list").jqGrid("editRow", row_id, true);
	        last_id2 = row_id;
	    }
	}
	
	function onSelected3(rowId) {
		//이전 row 저장
		if (last_id3 != "") {
			$("#pop_image_list").jqGrid("saveRow", last_id3);
			last_id3 = "";
		}
		
		var row_data = $("#pop_image_list").jqGrid("getRowData", rowId);
		
		var param = {
				disp_data_filename: row_data.disp_data_filename,
				disp_data_type: row_data.disp_data_type
		}
		var fileName = row_data.disp_data_filename;
		var servertp = $("#select_servertpcd option:selected").val();
		
		$("#scenario_img").attr("src", "./bit/getImage.do?fileName=" + escape(encodeURIComponent(fileName)) +"&servertp="+servertp);
	}
	
	function onDoubleClicked3(row_id) {
		if($("#select_servertpcd option:selected").val() == "120") {
			if (last_id3 != row_id ) {
				$("#pop_image_list").jqGrid("saveRow", last_id3);
				//true => enter 저장, esc취소 가능
				$("#pop_image_list").jqGrid("editRow", row_id, true);
				last_id3 = row_id;
			}
		}
	}
	
	function onSelected4(rowId) {
		//이전 row 저장
		if (last_id4 != "") {
			$("#pop_video_list").jqGrid("saveRow", last_id4);
			last_id4 = "";
		}
		
		var row_data = $("#pop_video_list").jqGrid("getRowData", rowId);
		
		var param = {
				disp_data_filename: row_data.disp_data_filename,
				disp_data_type: row_data.disp_data_type
		}
		
		ajaxCall("./bit/getScenData.do", param, null, loadSuccess, null);
		
		function loadSuccess(data) {
			if (data.dataVo != null) {
				$("#scenario_video_src").attr("src", "data:video/avi;base64," + data.dataVo.base64Img);
			}
		}
	}
	
	function onDoubleClicked4(row_id) {
		if (last_id4 != row_id ) {
	        $("#pop_video_list").jqGrid("saveRow", last_id4);
	        //true => enter 저장, esc취소 가능
	        $("#pop_video_list").jqGrid("editRow", row_id, true);
	        last_id4 = row_id;
	    }
	}
	
	function onSelected5(rowId) {
		//이전 row 저장
		if (last_id5 != "") {
			$("#pop_promotion_list").jqGrid("saveRow", last_id5);
			last_id5 = "";
		}
	}
	
	function onDoubleClicked5(row_id) {
		if (last_id5 != row_id ) {
	        $("#pop_promotion_list").jqGrid("saveRow", last_id5);
	        //true => enter 저장, esc취소 가능
	        $("#pop_promotion_list").jqGrid("editRow", row_id, true);
	        last_id5 = row_id;
	    }
	}
	
	$(window).bind('resize', function() {
		$("#pop_scenario_list").jqGrid('setGridHeight',$(".pop_left_chart").height() - 23);
		$("#pop_scenario_list").jqGrid('setGridWidth',$(".pop_left_chart").width());
		$("#pop_scenario_detail_list").jqGrid('setGridHeight',$(".pop_middle_chart").height() - 23);
		$("#pop_scenario_detail_list").jqGrid('setGridWidth',$(".pop_middle_chart").width());
		$("#pop_image_list").jqGrid('setGridHeight',$(".pop_right_chart").height() - 23);
		$("#pop_image_list").jqGrid('setGridWidth',$(".pop_right_chart").width());
		$("#pop_video_list").jqGrid('setGridHeight',$(".pop_right_chart").height() - 23);
		$("#pop_video_list").jqGrid('setGridWidth',$(".pop_right_chart").width());
		$("#pop_promotion_list").jqGrid('setGridHeight',$(".pop_right_chart").height() - 23);
		$("#pop_promotion_list").jqGrid('setGridWidth',$(".pop_right_chart").width());
	}).trigger('resize');
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
	reloadGrid("#pop_scenario_detail_list", "./bit/selectScenarioDetailList.do", params, "resultList");
}

function loadFileDataGrid() {
	//이미지 목록
	reloadGrid("#pop_image_list", "./bit/selectImageList.do", {servertp: $("#select_servertpcd option:selected").val()}, "resultList");
	//영상 목록
//	reloadGrid("#pop_video_list", "./bit/selectVideoList.do",  {servertp: $("#select_servertpcd option:selected").val()}, "resultList");
	//홍보 목록
//	reloadGrid("#pop_promotion_list", "./bit/selectPromotionList.do",  {servertp: $("#select_servertpcd option:selected").val()}, "resultList");
}


function changeRow(direction) {
	var cur_row_id = $("#pop_scenario_detail_list").jqGrid("getGridParam", "selrow");
	if (cur_row_id == null) {
		showAlert("시나리오 상세항목을 선택해주세요.");
		return;
	}
	
	var ids = $("#pop_scenario_detail_list").jqGrid("getDataIDs");
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
	
	var cur_row_data = $("#pop_scenario_detail_list").jqGrid("getRowData", cur_row_id);
	$("#pop_scenario_detail_list").jqGrid("delRowData", cur_row_id);
	$("#pop_scenario_detail_list").jqGrid("addRowData", cur_row_id, cur_row_data, direction, target_row_id);
	
	//시나리오 순번 재정의
	ids = $("#pop_scenario_detail_list").jqGrid("getDataIDs");
	for (var i = 0; i < ids.length; i++) {
		$("#pop_scenario_detail_list").jqGrid("setCell", ids[i], "seq", i + 1);
	}
	
	$("#pop_scenario_detail_list").jqGrid("setSelection", cur_row_id);
}

function addRow(id) {
	//빈 그리드 일 경우 검색 결과가 없습니다 문구 삭제
	if ($("#pop_scenario_detail_list #search_none").length != 0) {
		$("#pop_scenario_detail_list #search_none").remove();
	}
	
	var row_id = $(id).jqGrid("getGridParam", "selrow");
	
	if (row_id == null) {
		showAlert("자료를 선택하세요.");
		return;
	}
	
	var row_data = $(id).jqGrid("getRowData", row_id);
	var ids = $("#pop_scenario_detail_list").jqGrid("getDataIDs");
	var scenario_ord = 0;
	
	if (ids.length == 0) {
		scenario_ord = 1;
	} else {
		var last_row_data = $("#pop_scenario_detail_list").jqGrid("getRowData", ids[ids.length - 1]);
		scenario_ord = parseInt(last_row_data.seq) + 1;
	}
	
	var eddt = "";
	var time = "10";
	if($("#select_servertpcd option:selected").val() == "120") {
		eddt = getDate(false);
		time = "30";
	}
	
	
	
	var param = {
			seq: scenario_ord,
			data_type: row_data.disp_data_type,
			file_name: row_data.disp_data_filename,
			disp_st_dt: getDate(true),
			disp_ed_dt: eddt,
			view_time: time,
			disp_data_id: row_data.disp_data_id
	}
	
	$("#pop_scenario_detail_list").jqGrid("addRowData", row_id_to_add++, param);
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
