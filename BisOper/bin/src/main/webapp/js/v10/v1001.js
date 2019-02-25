/**
 * 
 */

var userDlg, gradeDlg;
var editable = false;

$(document).ready(function(){
	//클릭 불가능
	$(".subcon_right").css("pointer-events", "none");
	
	ajaxCall("./user/selectUserRankList.do", null, null, onSuccess1, null);
	function onSuccess1(data) { 
		if(data && data.resultList) {
			var strTemp = "";
			/*var strTemp1 = "<option value=''>등급을 선택 하세요.</option>";*/
			$.each( data.resultList, function( index, value ) {
				strTemp += "<option value='"+value.authid+"'>"+value.authnm+"</option>";
				/*if(value.rank_id != "0") {
					strTemp1 += "<option value='"+value.rank_id+"'>"+value.rank_name+"</option>";
				}*/
			});
			$("#select_authid").empty().append(strTemp);
			$("#select_grade_pop").empty().append(strTemp);
			
		}
		createGrid();
	}
	
	initialize();
});

function initialize() {
	setDialog();
	
	/************
	 * 계정 탭
	 ************/
	$("#select_use").change(function(){
		var selVal = $(this).find("option:selected").val();
		reloadGrid("#user_list", "./user/selectUserList.do", {use_flag:selVal}, "resultList");
	});

	//계정추가
	$("#btn1_new").click(function(){
		if(editable)
			return;
		
		openUserReg();
	});
	//수정
	$("#btn1_mod").click(function(){
		if (!editable) {
			showAlert("수정 모드로 전환 합니다.");
			editable = true;
			$(".subcon_right").css("pointer-events", "auto");
			
		}
	});
	
	//사용중지 or 사용
	$("#btn1_disable").click(function(){
		var text = $("#btn1_disable").text();
		var user_id = $("#input_userid").val();
		showConfirmDlg(user_id + "를 " + text + "하시겠습니까?", confirm);
		
		function confirm() {
			var param = {
					userid: user_id,
					useyn: ""
			};
			
			if (text == "사용중지") {
				param.useyn = "0";
			} else if (text == "사용") {
				param.useyn = "1";
			}
			
			ajaxCall("./user/modifyUser.do", param, null, onSuccessReg, null);
			function onSuccessReg(data) {
				if(data && data.result) {
					if(Number(data.result) == -1) {
						showAlert("수정 중 오류가 발생하였습니다.");
					}else {
						showAlert("수정 되었습니다.");
						$("#select_use").trigger("change");
					}
				}else {
					showAlert("수정 중 오류가 발생하였습니다.");
				}
			}
		}
	});
	
	//삭제
	$("#btn1_del").click(function(){
		if(editable) 
			return;
		
		var text = $("#btn1_disable").text();
		var user_id = $("#input_userid").val();
		showConfirmDlg(user_id + "를 영구히 " + text + "하시겠습니까?", confirm);
		
		function confirm() {
			var param = {
					userid: user_id
			};
			
			ajaxCall("./user/deleteUser.do", param, null, onSuccessReg, null);
			function onSuccessReg(data) {
				if(data && data.result) {
					if(Number(data.result) == -1) {
						showAlert("삭제 중 오류가 발생하였습니다.");
					}else {
						showAlert("삭제 되었습니다.");
						$("#select_use").trigger("change");
						//
					}
				}else {
					showAlert("삭제 중 오류가 발생하였습니다.");
				}
			}
		}
	});
	
	//새로고침
	$("#btn1_refresh").click(function(){
		$("#select_use").trigger("change");
	});
	
	//저장
	$("#btn1_save").click(function(){
		if (!editable) {
			showAlert("수정버튼을 먼저 클릭하세요.");
			return;
		}
		showConfirmDlg("수정 사항을 저장하시겠습니까?", inquiryModifyUser);
	});
	
	//취소
	$("#btn1_cancel").click(function(){
		if (!editable) {
			showAlert("수정버튼을 먼저 클릭하세요.");
			return;
		}
		
		showConfirmDlg("저장하지 않은 데이터는  원상 복구 됩니다.<br>조회모드로 전환하시겠습니까?", cancelConfirm);
		
		function cancelConfirm() {
			editable = false;
			$(".subcon_right").css("pointer-events", "none");
			
			var id = $("#user_list").jqGrid("getGridParam", "selrow"); 
			$("#user_list").jqGrid("setSelection", id, true);
		}
	});
	
	//비밀번호 변경
	$("#btn_change_pw").click(function(){
		openUserMod($("#input_userid").val());
	});
	
	//사용자 등록, 수정
	$("#btn1_save_pop").click(function() {
		showConfirmDlg("저장하시겠습니까?", saveConfirm);
		
		function saveConfirm() {
			var mode = $("#input_user_mode").val();
			if(mode == "REG") {
				inquiryUserRegist();
			}else if(mode == "MOD") {
				inquiryChangePw();
			}	
		}
	});
	
	//중복 확인
	$("#btn_duplication").click(function() {
		var id = $("#input_id").val();
		if(id == "") {
			showAlert("아이디가 입력되지 않았습니다.");
			$("#input_id").focus();
			return;
		}
		
		ajaxCall("./user/selectUserInfo.do", {userid: id}, null, onSuccessDup, null);
		function onSuccessDup(data) {
			if(data && data.result) {
				showAlert("이미 사용 중 인 아이디 입니다.");
			}else {
				showAlert("사용 가능 한 아이디 입니다.");
				$("#input_reg_id").val($("#input_id").val());
			}
		}
	});
	
	/************
	 * 권한 탭
	 ************/
	//등급 등록/수정
	$("#btn2_save_pop").click(function(){
		inquiryRegistRank();
	});
	
	//등급 추가
	$("#btn2_new").click(function(){
		openGradeReg();
	});
	//등급수정
	$("#btn2_mod").click(function(){
		var id = $("#rank_list").jqGrid("getGridParam", "selrow" );  
		var rowData = $("#rank_list").jqGrid("getRowData", id);
		if(id == "undefined" || id == null || rowData.authid == "") {
			showAlert("수정 할 등급을 선택 하세요.");
			return;
		}
		openGradeMod(rowData.authid, rowData.authnm);
	});
	//등급삭제
	$("#btn2_del").click(function(){
		showConfirmDlg("["+$(".grade").text()+"] 등급을 삭제하시겠습니까?", inquiryDeleteRank);
	});
	
	//권한 저장
	$("#btn2_save").click(function(){
		var rank = $(".grade").text();
		inquiryRegistRankMenu();
		showConfirmDlg("["+$(".grade").text()+"] 메뉴 권한을 수정 하시겠습니까?", inquiryRegistRankMenu);
	});
	
	//권한 취소
	$("#btn2_cancel").click(function(){
		var id = $("#rank_list").jqGrid("getGridParam", "selrow" );  
		var handler = $("#rank_list").jqGrid("getGridParam", "onSelectRow");
		handler.call($("#rank_list")[0], id);
	});
}

/*************************
 * 사용자 등록 요청
 ************************/
function inquiryUserRegist() {
	
	var inId = $("#input_id").val();
	var regId = $("#input_reg_id").val();
	if(inId == "") {
		showAlert("아이디를 입력하세요.");
		$("#input_id").focus();
		return;
	}
	
	if(inId != regId) {
		showAlert("중복 확인 되지 않은 아이디 입니다.");
		$("#btn_duplication").focus();
		return;
	}
	
	var grade = $("#select_grade_pop option:selected").val();
	if(grade == "") {
		showAlert("등급을 선택하세요.");
		$("#select_grade_pop").focus();
		return;
	}
	
	var name = $("#input_name").val();
	if(name == "") {
		showAlert("사용자 이름을 입력하세요.");
		$("#input_name").focus();
		return;
	}
	
	var pw1 = $("#input_pw1").val();
	var pw2 = $("#input_pw2").val();
	if(pw1 == "") {
		showAlert("비밀번호를 입력하세요.");
		$("#input_pw1").focus();
		return;
	}
	if(pw2 == "") {
		showAlert("비밀번호 확인란을 입력하세요.");
		$("#input_pw2").focus();
		return;
	}
	
	if(pw1 != pw2) {
		showAlert("비밀번호가 일치 하지 않습니다.");
		$("#input_pw2").focus();
		return;
	}
	
	var params = {
		userid   : inId,
		usernm : name,
		passwd       : pw1,
		authid   : grade,
	}
	
	//TODO 비밀 번호 암호화 함수 전달 받아야 함
	ajaxCall("./user/insertUser.do", params, null, onSuccessReg, null);
	function onSuccessReg(data) {
		
		if(data && data.result) {
			if(Number(data.result) == -1) {
				showAlert("등록 중 오류가 발생하였습니다.");
			}else {
				showAlert("정상 등록 되었습니다.");
				userDlg.dialog("close");
				$("#select_use").trigger("change");
			}
		}else {
			showAlert("등록 중 오류가 발생하였습니다.");
		}
	}
}

/*************************
 * 비밀번호 변경
 ************************/
function inquiryChangePw() {
	
	var inId = $("#input_id").val();
	
	var pw1 = $("#input_cur_pw").val();
	var pw2 = $("#input_new_pw1").val();
	var pw3 = $("#input_new_pw2").val();
	
	if(pw1 == "") {
		showAlert("현재 비밀번호를 입력하세요.");
		$("#input_cur_pw").focus();
		return;
	}
	if(pw2 == "") {
		showAlert("새 비밀번호를 입력하세요.");
		$("#input_new_pw1").focus();
		return;
	}
	
	if(pw3 == "") {
		showAlert("새 비밀번호 확인을 입력하세요.");
		$("#input_new_pw2").focus();
		return;
	}
	
	if(pw2 != pw3) {
		showAlert("새 비밀번호가 일치 하지 않습니다.");
		$("#input_new_pw2").focus();
		return;
	}
	
	var params = {
		userid   : inId,
		passwd       : pw1,
		new_passwd   : pw2
	}
	
	//TODO 비밀 번호 암호화 함수 전달 받아야 함
	ajaxCall("./user/modifyUser.do", params, null, onSuccessMod, null);
	function onSuccessMod(data) {
		if(data && data.result) {
			if(Number(data.result) == -1) {
				showAlert("수정 중 오류가 발생하였습니다.");
			}else if(Number(data.result) == -2) {
				showAlert("입력한 현재 비밀번호가 저장된 비밀번호와 일치 하지 않습니다.");
			}else {
				showAlert("비밀번호가 수정되었습니다.");
				userDlg.dialog("close");
				$("#select_use").trigger("change");
			}
		}else {
			showAlert("수정 중 오류가 발생하였습니다.");
		}
	}
}

/*************************
 * 사용자 수정 요청
 ************************/
function inquiryModifyUser() {
	editable = false;
	$(".subcon_right").css("pointer-events", "none");
	
	var name = $("#input_usernm").val();
	if(name == "") {
		showAlert("사용자 이름을 입력하세요.");
		$("#input_usernm").focus();
		return;
	}
	
	var rank = $("#select_authid option:selected").val();
	
	var params = {
		userid   : $("#input_userid").val(),
		usernm : name,
		authid   : rank,
	}

	ajaxCall("./user/modifyUser.do", params, null, onSuccessReg, null);
	function onSuccessReg(data) {
		if(data && data.result) {
			if(Number(data.result) == -1) {
				showAlert("수정 중 오류가 발생하였습니다.");
			}else {
				showAlert("수정 되었습니다.");
				$("#select_use").trigger("change");
			}
		}else {
			showAlert("수정 중 오류가 발생하였습니다.");
		}
	}
}

/*************************
 * 사용자 등급 등록 요청
 ************************/
function inquiryRegistRank() {
	
	var grade_name = $("#input_grade_name").val();
	if(grade_name == "") {
		showAlert("등급명을 입력하세요.");
		$("#input_grade_name").focus();
		return;
	}
	var params = {
		authid   : $("#input_grade_id").val(),
		authnm : grade_name
	}
	
	if($("#input_grade_mode").val() == "REG") {
		ajaxCall("./user/insertRank.do", params, null, onSuccessReg, null);
	}else {
		ajaxCall("./user/updateRank.do", params, null, onSuccessReg, null);
	}
	
	function onSuccessReg(data) {
		if(data && data.result) {
			if(Number(data.result) == -1) {
				showAlert("오류가 발생하였습니다.");
			}else {
				showAlert("등록/수정 되었습니다.");
				gradeDlg.dialog("close");
				reloadGrid("#rank_list", "./user/selectUserRankList.do", {use_flag:"1"}, "resultList");
			}
		}else {
			showAlert("오류가 발생하였습니다.");
		}
	}
}

/*************************
 * 사용자 등급 삭제 요청
 ************************/
function inquiryDeleteRank() {
	
	var id = $("#rank_list").jqGrid("getGridParam", "selrow");
	var rowData = $("#rank_list").jqGrid("getRowData", id);
	
	var params = {
		authid   : rowData.authid
	}
	ajaxCall("./user/deleteRank.do", params, null, onSuccess, null);
	function onSuccess(data) {
		if(data && data.result) {
			if(Number(data.result) == -1) {
				showAlert("오류가 발생하였습니다.");
			}else {
				showAlert("삭제 되었습니다.");
				reloadGrid("#rank_list", "./user/selectUserRankList.do", {use_flag:"1"}, "resultList");
			}
		}else {
			showAlert("오류가 발생하였습니다.");
		}
	}
}

/*************************
 * 등급 메뉴 권한 수정
 ************************/
function inquiryRegistRankMenu() {

	var arrMenu = [];
	var arrCFlag = [];
	var arrRFlag = [];
	var arrUFlag = [];
	var arrDFlag = [];

	var dataArr = $("#menu_list").jqGrid('getRowData');
	$.each(dataArr, function(index, value) {
		arrMenu.push(value.menuid);
		arrCFlag.push(value.cre_authyn);
		arrRFlag.push(value.read_authyn);
		arrUFlag.push(value.upd_authyn);
		arrDFlag.push(value.del_authyn);
	}); 
	
	var id = $("#rank_list").jqGrid("getGridParam", "selrow");
	var rankData = $("#rank_list").jqGrid('getRowData', id);
	
	var params = {
		authid : rankData.authid,
		menuList : arrMenu,
		cFlagList : arrCFlag,
		rFlagList : arrRFlag,
		uFlagList : arrUFlag,
		dFlagList : arrDFlag
	}
	
	$.ajaxSettings.traditional = true;
	ajaxCall("./user/modifyUserMenu.do", params, null, onSuccess, null);
	
	function onSuccess(data) {
		if(data && data.result) {
			if(Number(data.result) == -1) {
				showAlert("오류가 발생하였습니다.");
			}else {
				showAlert("수정 되었습니다.");
			}
		}else {
			showAlert("오류가 발생하였습니다.");
		}
	}
}


function setDialog() {
	//사용자 등록, 비밀번호 변경 공통 팝업
	userDlg = getDialog("pop_user", "container");
	
	gradeDlg = getDialog("pop_grade", "container");

	$(".pop_close").click(function() {
		userDlg.dialog("close");
		gradeDlg.dialog("close");
	});
}

function openUserReg() {
	$("#input_user_mode").val("REG");
	$("#pop_user_title").text("사용자 등록");
	$("#input_id").val("");
	$("#input_reg_id").val("");
	$("#input_id").prop("disabled", false);
	$("#btn_duplication").css("visibility", "visible");
	$(".add_wrap").show();
	$(".mod_wrap").hide();
	$("#select_grade_pop option:first").prop("selected", true);
	userDlg.dialog("open");
}

function openUserMod(id) {
	$("#input_user_mode").val("MOD");
	$("#pop_user_title").text("사용자 비밀번호 변경");
	$("#input_id").val(id);
	$("#input_reg_id").val("");
	$("#input_id").prop("disabled", true);
	$("#btn_duplication").css("visibility", "hidden");
	$(".add_wrap").hide();
	$(".mod_wrap").show();
	
	$("#input_cur_pw").val("");
	$("#input_new_pw1").val("");
	$("#input_new_pw2").val("");
	userDlg.dialog("open");
}

function openGradeReg() {
	$("#input_grade_mode").val("REG");
	$("#pop_grade_title").text("등급 추가");
	$("#pop_grade_explain").text("추가 할 등급명을 입력하세요.");
	
	$("#input_grade_id").val("");
	$("#input_grade_name").val("");
	gradeDlg.dialog("open");
}

function openGradeMod(id, name) {
	$("#input_grade_mode").val("MOD");
	$("#pop_grade_title").text("등급 명 수정");
	$("#pop_grade_explain").text("수정 할 등급명을 입력하세요.");
	
	$("#input_grade_id").val(id);
	$("#input_grade_name").val(name);
	gradeDlg.dialog("open");
}

var models1 = [
		{label:'사용자 ID',		name:'userid',        index:'userid',         width: "100",  type: "I", sorttype:"text",	    align:"center",
			btn: "#btn1"},
       	{label:'사용자 이름',	name:'usernm',      index:'usernm',     width: "150",  type: "I", sorttype:"text", 	    align:"left"},
       	{label:'등급',		name:'authnm',      index:'authnm',     width: "100",             sorttype:"text", 	    align:"center"},
       	{label:'사용자유형',		name:'cdnm',      	index:'cdnm',       width: "100",             sorttype:"text", 	    align:"center", type: "I"},
       	{label:'버스회사명',		name:'compnm',      index:'compnm',     width: "130",             sorttype:"text", 	    align:"center", type: "I"},
       	{label:'기관명',		name:'orgnm',       index:'orgnm',      width: "100",             sorttype:"text", 	    align:"center", type: "I"},
       	{label:'부서명',		name:'deptnm',      index:'deptnm',     width: "100",             sorttype:"text", 	    align:"center", type: "I"},
       	{label:'직급명',		name:'posnnm',      index:'posnnm',     width: "90",             sorttype:"text", 	    align:"center", type: "I"},
       	{label:'사용여부',		name:'useyn',       index:'useyn',      width: "100",             sorttype:"text", 	    align:"center", type: "S"},
       	
       	{name:'authid',     index:'authid',     type: "S",  hidden:true},
       	];

var models2 = [
   		{label:'등급 코드',		name:'authid',       index:'authid',         width: "100",  sorttype:"text",	    align:"center"},
      	{label:'등급 명',   	name:'authnm',       index:'authnm',       width: "184",  sorttype:"text",     align:"left"}
      	];

var models3 = [
   		{label:'메뉴 ID',		name:'menuid',        index:'menu_id',        width: "160", sorttype:"text",	    align:"center"},
      	{label:'메뉴 명칭',	    name:'menunm',        index:'menu_name',      width: "307", sorttype:"text", 	    align:"left"},
      	{label:'조회 권한',		name:'read_authyn',   index:'read_authyn',    width: "130", sorttype:"text", 	    align:"center",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},
      	{label:'등록 권한',		name:'cre_authyn',    index:'cre_authyn',     width: "130", sorttype:"text", 	    align:"center",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},
      	{label:'수정 권한',		name:'upd_authyn',    index:'upd_authyn',     width: "130", sorttype:"text", 	    align:"center",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},
      	{label:'삭제 권한',		name:'del_authyn',    index:'del_authyn',     width: "130", sorttype:"text", 	    align:"center",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}}
      	];

function createGrid() {
	
	makeFilterGrid("#user_list", models1, 110, "resultList", onSelected1, onCompleted1, null);
	makeFilterGrid("#rank_list", models2, 110, "resultList", onSelected2, onCompleted2, null);
	makeFilterGrid("#menu_list", models3, 110, "resultList", onSelected3, null, null);
	
	function onSelected1(rowid) {
		var row_data = $("#user_list").jqGrid("getRowData", rowid);
		editable = false;
		$(".subcon_right").css("pointer-events", "none");		
		
		if (row_data.useyn == 1) {
			$("#btn1_disable").text("사용중지");
		} else if (row_data.useyn == 0) {
			$("#btn1_disable").text("사용");
		}
	}
	function onSelected2(rowid) {
		
		var rowData = $("#rank_list").jqGrid('getRowData', rowid);
		$(".grade").text(rowData.authnm);
		reloadGrid("#menu_list", "./user/selectMenuRightList.do", {authid: rowData.authid}, "resultList");
	}

	function onSelected3(rowid) {
		var rowData = $("#menu_list").jqGrid('getRowData', rowid);
	}
	
	function onCompleted1(data) {
		$("#user_list").jqGrid("setSelection", 1);
	}
	
	function onCompleted2(data) {
		$("#rank_list").jqGrid("setSelection", 1, true);
	}
	
	$(window).bind('resize', function() {
		$("#user_list").jqGrid('setGridHeight',$(".subcon_left").height() - 62);
		$("#user_list").jqGrid('setGridWidth',$(".subcon_left").width());
		
		$("#rank_list").jqGrid('setGridHeight',592);
		$("#rank_list").jqGrid('setGridWidth',311);
		$("#menu_list").jqGrid('setGridHeight',592);
		$("#menu_list").jqGrid('setGridWidth',1034);
		
	}).trigger('resize');
	
	var selVal = $("#select_use").find("option:selected").val();
	reloadGrid("#user_list", "./user/selectUserList.do", {use_flag:selVal}, "resultList");
	reloadGrid("#rank_list", "./user/selectUserRankList.do", null, "resultList");
}