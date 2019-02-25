var id_result=null; //idcheck 결과 -> 0:없음 1:있음
//상단
var model1 = [
	   			{label:"프로세스ID",	name:"processid",       index:"processid",      width: "130", 	align:"center",		type:"I"},
	   			{label:"프로세스명",		name:"processnm",     	index:"processnm",      width: "160", 	align:"center",		type:"I"},
	   			{label:"IP주소",		name:"ipaddr",      	index:"ipaddr",    		width: "190", 	align:"center",		type:"I"},
	   			{label:"포트번호",		name:"portno",       	index:"portno",   	    width: "160", 	align:"center",		type:"I"},
	   			{label:"사용자명",		name:"userid",    		index:"userid",  		width: "160", 	align:"center",		type:"I"},
	   			{label:"비밀번호",		name:"passwd",     		index:"passwd",   		width: "160", 	align:"center",		type:"I"}
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});

function setCategory(){
	ajaxCall("./sys/selectProcessList.do", { sel_code : 'PROCESSID' } , null, sel_success, null);
	
	function sel_success(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.processid+"'>"+value.processid+"</option>";
		});
		$("#sel_processid").empty().append(strTemp);
	};
};


function initGrid(){
	makeGrid("#detail_list", model1, 300, "resultList", null, null ,null);

	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
			processid : $("#sel_processid option:selected").val(),
			processnm : $("#inp_processnm").val()
		};
		showLoader();
		reloadGrid("#detail_list", "./sys/selectProcessList.do", param, "resultList");
		
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_processnm").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	//초기화버튼
	$("#btn_reset").on("click",function(){
		$(".chart.v1005Chart input").val("");
	});
	
	//신규등록버튼
	$("#btn_insert").on("click",function(){
		showConfirmDlg("작성하신 내용을 신규등록 하시겠습니까?", function(){
			idCheck(); 
			$("#btn_insert").one("ajaxStop", function(){
				if(id_result != "0"){
					showAlert("입력하신 프로세스ID는 이미 사용중입니다");
					return;
				}else{
					var param = {
							processnm : $("#input_processnm").val(),
							ipaddr : $("#input_ipaddr").val(),
							portno : $("#input_portno").val(),
							userid : $("#input_userid").val(),
							passwd : $("#input_passwd").val(),
							processid : $("#input_processid").val()
					};
					ajaxCall("./sys/insertProcess.do", param , null, inst_success, null);
					function inst_success(data){
						if(data.result != 1){
							showAlert("다시 시도해주세요");
						} else {
							showAlert("신규 등록 되었습니다");
							$("#btn_search").trigger("click");
						}
					};
				}
			});
			
		});
	});
	
	//수정버튼
	$("#btn_update").on("click",function(){
		showConfirmDlg("작성하신 내용을 수정 하시겠습니까?", function(){
			idCheck(); 
			$("#btn_update").one("ajaxStop", function(){
				if(id_result == "0"){ //0없음 1있음
					showAlert("프로세스ID를 다시 확인해주세요.");
					return;
				}else{
					var param = {
							processnm : $("#input_processnm").val(),
							ipaddr : $("#input_ipaddr").val(),
							portno : $("#input_portno").val(),
							userid : $("#input_userid").val(),
							passwd : $("#input_passwd").val(),
							processid : $("#input_processid").val()
					};
					ajaxCall("./sys/updateProcess.do", param , null, upd_success, null);
					function upd_success(data){
						if(data.result != 1){
							showAlert("다시 시도해주세요");
						} else {
							showAlert("수정 되었습니다");
							$("#btn_search").trigger("click");
						}
					};
				}
			});
		}); 
	});	
	
	
	
	
	
	//삭제버튼
	$("#btn_delete").on("click",function(){
		showConfirmDlg("해당 프로세스를 삭제 하시겠습니까?", function(){
			idCheck(); 
			$("#btn_update").one("ajaxStop", function(){
				if(id_result == "0"){ //0없음 1있음
					showAlert("프로세스ID를 다시 확인해주세요.");
					return;
				}else{
					ajaxCall("./sys/deleteProcess.do", {processid : $("#input_processid").val()} , null, del_success, null);
					function del_success(data){
						if(data.result != 1){
							showAlert("다시 시도해주세요");
						} else {
							showAlert("삭제 되었습니다");
							$("#btn_search").trigger("click");
						}
					};
				}
			});
		});
	});
	
};


//프로세스ID 체크
function idCheck(){
	var processid = $("#input_processid").val();
	if(!processid){
		showAlert("프로세스ID를 입력해주세요");
		return;
	}
	var param = {
		sel_code : 'IDCHECK',
		processid : processid
	};
	ajaxCall("./sys/selectProcessList.do", param , null, success, null);
	function success(data){
		id_result = data.resultList[0].count; //0:없음 1:있음
	}
}; 
