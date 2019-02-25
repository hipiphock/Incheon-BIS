/**
 * BIT관리 - BIT 정보관리 - 팝업 제조사
 * @author 박경원
 * @since 2017-10-20
 */


var last_id = ""; //마지막으로 수정한  row ID
var edit_enable = false;
var company_dlg;
var cur_company_row_id = "";

//팝업 제조사 리스트
var models1 = [
               {onlyView:true,	label:"회사 ID",		name:"company_id",		index:"company_id",      width: "120", 	align:"center", sorttype:"number"},
               {label:"회사명",						name:"company_name", 	index:"company_name",    width: "300", 	align:"center", sorttype:"text", editable: true},
               {label:"연락처",						name:"tel_number",  	index:"tel_number",      width: "200", 	align:"center", sorttype:"number", editable: true},
               {label:"설명",							name:"data_explain",    index:"data_explain",	 width: "101", 	align:"center", sorttype:"text", editable: true}
               ]

$(document).ready(function(){
	setDialog();
	setEvent();
	setGrid();
});

function setDialog() {
	company_dlg = getDialog("dlg_company", "container");
	
	//제조사 추가 창 저장
	$("#dlg_company_save").click(function() {
		if ($("#dlg_company_name").val() == "") {
			showAlert("회사명을 입력하세요");
			return;
		}
		
		var rowData = {
				company_id: getId(),
				company_name: $("#dlg_company_name").val(),
				tel_number: $("#dlg_company_tel_number").val(),
				data_explain: $("#dlg_company_explain").val()
		}
		
		$("#pop_company_list").jqGrid("addRowData", cur_company_row_id++, rowData);
		
		company_dlg.dialog("close");
	})
	
	//제조사 추가 창 취소
	$("#dlg_company_cancel").click(function() {
		company_dlg.dialog("close");
	})
}

function setEvent() {
	//추가
	$("#pop_company_add").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		company_dlg.dialog("open");
		$("#dlg_company_name").val("");
		$("#dlg_company_tel_number").val("");
		$("#dlg_company_explain").val("");
	})
	
	//수정
	$("#pop_company_mod").click(function() {
		if(!edit_enable) {
			showAlert("수정 모드로 전환 합니다.");
			last_id = "";
			edit_enable = true;
		}
	})
	
	//삭제
	$("#pop_company_del").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		var selected_row_id = $("#pop_company_list").jqGrid("getGridParam","selrow");
		
		if (selected_row_id == null) {
			showAlert("제조사를 선택하세요.");
			return;
		}
		
		$("#pop_company_list").jqGrid("delRowData", selected_row_id);
	})
	
	//새로고침
	$("#pop_company_refresh").click(function() {
		last_id = "";
		edit_enable = false;
		reloadGrid("#pop_company_list", "./bit/selectBitCompanyList.do", null, "resultList");
	})
	
	//저장
	$("#pop_company_save").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		showConfirmDlg("제조사 정보를 저장합니다.<br>계속하시겠습니까?", saveConfirm);
		
		function saveConfirm() {
			$("#pop_company_list").jqGrid("saveRow", last_id, null, "clientArray");
			last_id = "";
			edit_enable = false;
			var rows = $("#pop_company_list").jqGrid("getRowData");
			
			ajaxCallList("./bit/saveBitCompany.do", rows, null, saveSuccess, null);
				
			function saveSuccess(data) {
				console.log(data);
				if (data.result_code != 1) {
					showAlert("제조사 저장 실패");
				}
				reloadGrid("#pop_company_list", "./bit/selectBitCompanyList.do", null, "resultList");
			}
		}
	})
	
	//취소
	$("#pop_company_cancel").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		if (edit_enable) {
			showConfirmDlg("저장하지 않은 데이터는  원상 복구 됩니다.<br>조회모드로 전환하시겠습니까?", cancelConfirm);
			
			function cancelConfirm() {
				last_id = "";
				edit_enable = false;
				reloadGrid("#pop_company_list", "./bit/selectBitCompanyList.do", null, "resultList");
			}
		}
	})
}

//Company Id 구함, 가장 큰 ID + 1
function getId() {
	var company_id_list = $("#pop_company_list").jqGrid("getCol", "company_id");
	var max_id = 2015000;
	var temp;
	
	$.each(company_id_list, function(index, value) {
		temp = parseInt(value);
		if (temp > max_id) max_id = temp;
	})
	
	return max_id + 1;
}

function setGrid() {
	var grid_height = 500;
	makeGrid("#pop_company_list", models1, grid_height, "resultList", onSelected, onComplete, onDoubleClicked);
	
	function onSelected() {
		if (edit_enable) {
			$("#pop_company_list").jqGrid("saveRow", last_id, null, "clientArray");
			last_id = "";
		}
	}
	
	function onComplete() {
		cur_company_row_id = $("#pop_company_list").getGridParam("reccount") + 1;
	}
	
	function onDoubleClicked(rowId) {
//		var rowData = $("#pop_company_list").jqGrid("getRowData", rowId);
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하십시오.")
			return;
		}
		
		if (last_id != rowId ) {
	        $("#pop_company_list").jqGrid("saveRow", last_id, null, "clientArray");
	        //true => enter 저장, esc취소 가능
	        $("#pop_company_list").jqGrid("editRow", rowId, true);
	        last_id = rowId;
	    }
	}
	
	reloadGrid("#pop_company_list", "./bit/selectBitCompanyList.do", null, "resultList");
	
	$(window).bind('resize', function() {
		$("#pop_company_list").jqGrid('setGridHeight',$(".business_pop_con").height() - 25);
		$("#pop_company_list").jqGrid('setGridWidth',$(".business_pop_con").width());
	}).trigger('resize');
}