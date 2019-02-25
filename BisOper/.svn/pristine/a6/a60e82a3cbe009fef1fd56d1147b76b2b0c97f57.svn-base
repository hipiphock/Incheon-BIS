/**
 * BIT관리 - BIT 정보관리 - 팝업 사업
 * @author 박경원
 * @since 2017-10-20
 */

var last_id = ""; //마지막으로 수정한  row ID
var edit_enable = false;
var business_dlg;
var cur_business_row_id = "";

//팝업 사업정보 리스트
var models1 = [
               {onlyView:true,	label:"연도",			name:"business_year",	index:"business_year",      width: "70", 	align:"center", sorttype:"number", editable: true},
               {label:"사업명",						name:"business_title",  index:"business_title",     width: "230", 	align:"center", sorttype:"text", editable: true},
               {label:"사업 시작일자",					name:"st_date",  		index:"st_date",     		width: "100", 	align:"center", sorttype:"number", editable: true},
               {label:"사업 종료일자",					name:"ed_date",   		index:"ed_date",     		width: "100", 	align:"center", sorttype:"number", editable: true},
               {label:"시공사",						name:"constructor",    	index:"constructor",		width: "150", 	align:"center", sorttype:"text", editable: true},
               {label:"설명",							name:"data_explain",    index:"data_explain",		width: "61", 	align:"center", sorttype:"text", editable: true},
               ]

$(document).ready(function(){
	setDialog();
	setEvent();
	setGrid();
});

function setDialog() {
	business_dlg = getDialog("dlg_business", "container");
	
	//사업 추가 창 저장
	$("#dlg_business_save").click(function() {
		console.log("click");
		if ($("#dlg_business_name").val() == "") {
			showAlert("사업명을 입력하세요");
			return;
		}
		
		var rowData = {
				business_title: $("#dlg_business_name").val(),
				st_date: $("#dlg_business_st_date").val(),
				ed_date: $("#dlg_business_ed_date").val(),
				constructor: $("#dlg_business_cons").val(),
				data_explain: $("#dlg_business_explain").val(),
		}
		
		$("#pop_business_list").jqGrid("addRowData", cur_business_row_id++, rowData);
		
		business_dlg.dialog("close");
	})
	
	//제조사 추가 창 취소
	$("#dlg_business_cancel").click(function() {
		business_dlg.dialog("close");
	})
}

function setEvent() {
	//추가
	$("#pop_business_add").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		business_dlg.dialog("open");
		$("#dlg_business_name").val("");
		$("#dlg_business_st_date").val();
		$("#dlg_business_ed_date").val();
		$("#dlg_business_cons").val("");
		$("#dlg_business_explain").val("");
	})
	
	//수정
	$("#pop_business_mod").click(function() {
		if(!edit_enable) {
			showAlert("수정 모드로 전환 합니다.");
			last_id = "";
			edit_enable = true;
		}
	})
	
	//삭제
	$("#pop_business_del").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		var selected_row_id = $("#pop_business_list").jqGrid("getGridParam","selrow");
		
		if (selected_row_id == null) {
			showAlert("사업을 선택하세요.");
			return;
		}
		
		$("#pop_business_list").jqGrid("delRowData", selected_row_id);
	})
	
	//새로고침
	$("#pop_business_refresh").click(function() {
		last_id = "";
		edit_enable = false;
		reloadGrid("#pop_business_list", "./bit/selectBusinessList.do", null, "resultList");
	})
	
	//파일저장
	$("#pop_business_download").click(function() {
		execlDownload();
	})
	
	//저장
	$("#pop_business_save").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		showConfirmDlg("사업을 저장합니다.<br>계속하시겠습니까?", saveConfirm);
		
		function saveConfirm() {
			$("#pop_business_list").jqGrid("saveRow", last_id, null, "clientArray");
			last_id = "";
			edit_enable = false;
			var rows = $("#pop_business_list").jqGrid("getRowData");
			ajaxCallList("./bit/saveBitBusiness.do", rows, null, saveSuccess, null);
			
			function saveSuccess(data) {
				if (data.result_code != 1) {
					showAlert("사업 저장 실패")
				}
				reloadGrid("#pop_business_list", "./bit/selectBusinessList.do", null, "resultList");
			}	
		}
	})
	
	//취소
	$("#pop_business_cancel").click(function() {
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하세요.")
			return;
		}
		
		showConfirmDlg("저장하지 않은 데이터는  원상 복구 됩니다.<br>조회모드로 전환하시겠습니까?", cancelConfirm);
			
		function cancelConfirm() {
			last_id = "";
			edit_enable = false;
			reloadGrid("#pop_business_list", "./bit/selectBusinessList.do", null, "resultList");
		}
	})
}

function setGrid() {
	var grid_height = 500;
	makeGrid("#pop_business_list", models1, grid_height, "resultList", onSelected, onComplete, onDoubleClicked);
	
	function onSelected() {
		if (edit_enable) {
			$("#pop_business_list").jqGrid("saveRow", last_id, null, "clientArray");
			last_id = "";
		}
	}
	
	function onComplete() {
		cur_business_row_id = $("#pop_business_list").getGridParam("reccount") + 1;
	}
	
	function onDoubleClicked(rowId) {
//		var rowData = $("#pop_company_list").jqGrid("getRowData", rowId);
		if (!edit_enable) {
			showAlert("수정 버튼을 먼저 클릭하십시오.")
			return;
		}
		if (last_id != rowId ) {
	        $("#pop_business_list").jqGrid("saveRow", last_id, null, "clientArray");
	        //true => enter 저장, esc취소 가능
	        $("#pop_business_list").jqGrid("editRow", rowId, true);
	        last_id = rowId;
	    }
	}
	
	reloadGrid("#pop_business_list", "./bit/selectBusinessList.do", null, "resultList");
	
	$(window).bind('resize', function() {
		$("#pop_business_list").jqGrid('setGridHeight',$(".business_pop_con").height() - 25);
		$("#pop_business_list").jqGrid('setGridWidth',$(".business_pop_con").width());
	}).trigger('resize');
}

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/downloadBitBusinessExcel.do";
	form.method = "POST";
	
	var	para1 = document.createElement('INPUT');     
	var rowData = $("#pop_business_list").jqGrid("getRowData");
	var value = JSON.stringify(rowData);
	
	para1.type  = 'HIDDEN';
	para1.name  = 'json';
	para1.value = value;
	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}