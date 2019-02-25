/**
 * BIT관리 - BIT 정보관리 - 팝업 그룹
 * @author 박경원
 * @since 2017-10-20
 */

var last_id = ""; //마지막으로 수정한  row ID
var editable = false;
var is_edited = false;
var group_dlg;
var cur_group_detail_row_id = "";
var cur_bit_row_id = "";
//팝업 그룹 리스트
var models1 = [
               {onlyView:true, label:"ID",			name:"bit_cate_id",   	index:"bit_cate_id",     	width: "50", 	align:"center", sorttype:"number"},
               {label:"그룹명",						name:"cate_name",  		index:"cate_name",     		width: "81", 	align:"center", sorttype:"text", editable: true},
               {label:"설명",							name:"data_explain",   	index:"data_explain",     	width: "152", 	align:"left", sorttype:"text", editable: true},
               {label:"등록일",						name:"regist_dt",  		index:"regist_dt",     		width: "85", 	align:"center", sorttype:"number"},
               {label:"수정일",						name:"update_dt",  		index:"update_dt",     		width: "85", 	align:"center", sorttype:"number"},
               {label:"등록자",						name:"user_id",  		index:"user_id",     		width: "70", 	align:"center", sorttype:"text"}
               ]
//팝업 그룹 상세 리스트
var models2 = [
               {onlyView:true,	label:"BIT ID",		name:"bit_id",			index:"bit_id",       		width: "70", 	align:"center", sorttype:"number"},
               {label:"정류장명",						name:"stop_name",   	index:"stop_name",     		width: "236", 	align:"left", sorttype:"text"},
               {label:"모바일 ID",						name:"service_id",  	index:"service_id",     	width: "70", 	align:"center", sorttype:"number"},
               {label:"정류장 ID",						name:"stop_id",   		index:"stop_id",     		width: "140", 	align:"center", sorttype:"number"},
               {name:"code_explain",    			index:"code_explain",	hidden:true}
               ]

//팝업 그룹 우측 BIT 리스트
var models3 = [
               {onlyView:true,	label:"BIT ID",		name:"bit_id",			index:"bit_id",       		width: "70", 	align:"center", sorttype:"number"},
               {label:"정류장명",						name:"stop_name",   	index:"stop_name",     		width: "201", 	align:"left", sorttype:"text"},
               {label:"모바일 ID",						name:"service_id",  	index:"service_id",     	width: "70", 	align:"center", sorttype:"number"},
               {label:"정류장 ID",						name:"stop_id",   		index:"stop_id",     		width: "100", 	align:"center", sorttype:"number"},
               {label:"BIT 타입",						name:"code_explain",    index:"code_explain",		width: "70", 	align:"center", sorttype:"text"}
               ]

$(document).ready(function(){
	setDialog();
	setEvent();
	setGrid();
});

function setDialog() {
	group_dlg = getDialog("dlg_group", "container");
	
	//그룹 추가 창 저장
	$("#dlg_group_save").click(function() {
		if ($("#dlg_group_name").val() == "") {
			showAlert("그룹명을 입력하세요");
			return;
		}
		
		showConfirmDlg("새로운 그룹이 추가됩니다.<br>계속하시겠습니까?", saveConfirm);
		
		function saveConfirm() {
			var param = {
					cate_name: $("#dlg_group_name").val(),
					data_explain: $("#dlg_group_explain").val()
			}
			
			ajaxCall("./bit/insertBitCate.do", param, null, insertSuccess, insertFail);
			
			function insertSuccess(data) {
				if (data.result_code != 1) {
					showAlert("그룹추가 실패");
				}
				reloadGrid("#pop_group_list", "./bit/selectBitGroupList.do", null, "resultList");
			}
			
			function insertFail() {
				showAlert("그룹추가 실패");
				reloadGrid("#pop_group_list", "./bit/selectBitGroupList.do", null, "resultList");
			}
			
			group_dlg.dialog("close");	
		}
	})
	
	//그룹 추가 창 취소
	$("#dlg_group_cancel").click(function() {
		group_dlg.dialog("close");
	})
}

function setEvent() {
	/********그룹팝업 이벤트******/
	//추가
	$("#pop_group_add").click(function() {
		if (!editable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		group_dlg.dialog("open");
		$("#dlg_group_name").val("");
		$("#dlg_group_explain").val("");
	})
	
	//수정
	$("#pop_group_mod").click(function() {
		if(!editable) {
			showAlert("수정 모드로 전환 합니다.");
			last_id = "";
			editable = true;
			$("#btn_left").removeClass("left_b");
			$("#btn_right").removeClass("right_b");
			$("#btn_left").addClass("left");
			$("#btn_right").addClass("right");
		}
	})
	
	//삭제
	$("#pop_group_del").click(function() {
		if (!editable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		var selected_row_id = $("#pop_group_list").jqGrid("getGridParam", "selrow");
		
		if (selected_row_id == null) {
			showAlert("그룹을 선택하세요.");
		}
		
		showConfirmDlg("선택한 그룹을 삭제합니다.<br>계속하시겠습니까?", deleteConfirm);
		
		function deleteConfirm() {
			var rowData = $("#pop_group_list").jqGrid("getRowData", selected_row_id);
			var bit_id_list = $("#pop_group_detail_list").jqGrid("getCol", "bit_id");
			var param = {
					bit_cate_id: rowData.bit_cate_id,
					bit_id_list: bit_id_list
			}
			
			$.ajaxSettings.traditional = true;
			ajaxCall("./bit/deleteBitCate.do", param, null, deleteSuccess, deleteFail);
			
			function deleteSuccess(data) {
				if (data.result_code != 1) {
					showAlert("그룹 삭제 실패");
				}
				reloadGrid("#pop_group_list", "./bit/selectBitGroupList.do", null, "resultList");
			}
			
			function deleteFail() {
				reloadGrid("#pop_group_list", "./bit/selectBitGroupList.do", null, "resultList");
			}
		}
	})
	
	// Enter 검색
	$("#pop_group_input_search").on("keydown", function(key) {
		if (key.keyCode == 13) {
			$("#pop_group_img_search").trigger("click");
		}
	})
	
	// 검색 이벤트
	$("#pop_group_img_search").click(function() {
		var param = {
					text_search: $("#pop_group_input_search").val()
					}
		
		reloadGrid("#pop_group_bit_list", "./bit/selectBitRightList.do", param, "resultList");
	})
	
	//화살표 왼쪽 버튼 - 추가
	$("#btn_left").click(function() {
		if (!editable) return;
		var is_exist = false;
		var selected_bit_row_id = $("#pop_group_bit_list").jqGrid("getGridParam","selrow");
		
		if (selected_bit_row_id == null) {
			showAlert("BIT를 선택하세요.");
			return;
		}
		
		var selected_bit_row_data = $("#pop_group_bit_list").jqGrid("getRowData", selected_bit_row_id);
		
		$("#pop_group_bit_list").jqGrid("delRowData", selected_bit_row_id);
		$("#pop_group_detail_list").jqGrid("addRowData", cur_group_detail_row_id++, selected_bit_row_data);
	})
	
	//화살표 오른쪽 버튼 - 삭제
	$("#btn_right").click(function() {
		if (!editable) return;
		var selected_group_detail_row_id = $("#pop_group_detail_list").jqGrid("getGridParam","selrow");
		var row_data = $("#pop_group_detail_list").jqGrid("getRowData", selected_group_detail_row_id);

		if (selected_group_detail_row_id == null) {
			showAlert("BIT를 선택하세요.");
			return;
		}
		
		$("#pop_group_detail_list").jqGrid("delRowData", selected_group_detail_row_id);
		$("#pop_group_bit_list").jqGrid("addRowData", cur_bit_row_id++, row_data);
		
	})
	
	//저장
	$("#pop_group_save").click(function() {
		if (!editable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		showConfirmDlg("BIT 그룹 변경내용이 저장됩니다.<br>계속하시겠습니까?", saveConfirm);
		
		function saveConfirm() {
			$("#btn_left").removeClass("left");
			$("#btn_right").removeClass("right");
			$("#btn_left").addClass("left_b");
			$("#btn_right").addClass("right_b");
			$("#pop_group_list").jqGrid("saveRow", last_id, null, "clientArray");
			last_id = "";
			editable = false;
			is_edited = false;

			var selected_row_id = $("#pop_group_list").jqGrid("getGridParam", "selrow");
			savePrevGroup(selected_row_id);	
		}
	})
	
	//취소
	$("#pop_group_cancel").click(function() {
		if (!editable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		showConfirmDlg("저장하지 않은 데이터는  원상 복구 됩니다.<br>조회모드로 전환하시겠습니까?", cancelConfirm);
			
		function cancelConfirm() {
			last_id = "";
			editable = false;
			is_edited = false;
			$("#btn_left").removeClass("left");
			$("#btn_right").removeClass("right");
			$("#btn_left").addClass("left_b");
			$("#btn_right").addClass("right_b");
			
			reloadGrid("#pop_group_list", "./bit/selectBitGroupList.do", null, "resultList");
		}
	})
}

function savePrevGroup(rowId) {
	var rowData = $("#pop_group_list").jqGrid("getRowData", rowId);
	var bit_id_list = $("#pop_group_detail_list").jqGrid("getCol", "bit_id");
	var bit_id_list2 = $("#pop_group_bit_list").jqGrid("getCol", "bit_id");
	
	var params = {
			bit_cate_id: rowData.bit_cate_id,
			cate_name: rowData.cate_name,
			data_explain: rowData.data_explain,
			bit_id_list: bit_id_list,
			bit_id_list2: bit_id_list2
	}
	
	$.ajaxSettings.traditional = true;
	
	//그룹 리스트 업데이트 및 그룹 상세 리스트 삭제 후 추가
	ajaxCall("./bit/saveBitCate.do", params, null, updateSuccess, null);
	
	function updateSuccess(data) {
		if (data.result_code != 1) {
			showAlert("그룹 저장 실패");
		}
		
		reloadGrid("#pop_group_list", "./bit/selectBitGroupList.do", null, "resultList");
	}
}

function setGrid() {
	var grid_height = 500;
	//좌측 상단
	makeGrid("#pop_group_list", models1, grid_height, "resultList", onSelectedGroup, onCompleted, onDoubleClicked);
	//좌측 하단
	makeGrid("#pop_group_detail_list", models2, grid_height, "resultList", null, null, null);
	//우측
	makeGrid("#pop_group_bit_list", models3, grid_height, "resultList", null, null, null);
	
	function onSelectedGroup(rowId) {
		if (editable && is_edited) {
			showConfirmDlg("이전 그룹의 수정사항을 저장하시겠습니까?", confirmCallback);
			
			function confirmCallback() {
				$("#pop_group_list").jqGrid("saveRow", last_id, null, "clientArray");
				savePrevGroup(last_id);
				last_id = "";
				is_edited = false;
			}
		} else {
			var selected_row_id = $("#pop_group_list").jqGrid("getGridParam","selrow");
			var rowData = $("#pop_group_list").jqGrid("getRowData", selected_row_id);
			var selected_group_id = rowData.bit_cate_id;
			reloadGrid("#pop_group_detail_list", "./bit/selectBitGroupDetailList.do", {bit_cate_id: selected_group_id}, "resultList");
			reloadGrid("#pop_group_bit_list", "./bit/selectBitRightList.do", {bit_cate_id: selected_group_id}, "resultList");
		}
	}
	
	function onCompleted() {
		cur_group_detail_row_id = $("#pop_group_detail_list").getGridParam("reccount") + 1;
		cur_bit_row_id = $("#pop_group_bit_list").getGridParam("reccount") + 1;
		$("#pop_group_list").jqGrid("setSelection", 1);
	}
	
	function onDoubleClicked(rowId) {
		if (!editable) {
			showAlert("수정 버튼을 먼저 클릭하십시오.")
			return;
		}
		
		if (last_id != rowId ) {
			is_edited = true;
	        $("#pop_group_list").jqGrid("saveRow", last_id, null, "clientArray");
	        //true => enter 저장, esc취소 가능
	        $("#pop_group_list").jqGrid("editRow", rowId, true, null, null, "clientArray");
	        last_id = rowId;
	    }
	}
	
	reloadGrid("#pop_group_list", "./bit/selectBitGroupList.do", null, "resultList");
	
	$(window).bind('resize', function() {
		$("#pop_group_list").jqGrid('setGridHeight',$(".bit_popcon1").height() - 23);
		$("#pop_group_list").jqGrid('setGridWidth',$(".bit_popcon1").width());
		$("#pop_group_detail_list").jqGrid('setGridHeight',$(".bit_popcon2").height() - 23 - 28);
		$("#pop_group_detail_list").jqGrid('setGridWidth',$(".bit_popcon2").width());
		$("#pop_group_bit_list").jqGrid('setGridHeight',$(".bit_popcon3").height() - 23);
		$("#pop_group_bit_list").jqGrid('setGridWidth',$(".bit_popcon3").width());
	}).trigger('resize');
}
