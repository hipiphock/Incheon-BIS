
var model1 = [
	   			
	   			{label:"변경수정",		name:"updtype",		  index:"updtype",       width: "70", 	align:"center"},
	   			{label:"정류소ID",		name:"bstopid",    index:"bstopid",   width: "85", 	align:"center"},
	   			{label:"정류소명",		name:"bstopnm",		  index:"bstopnm",  	    width: "170", 	align:"center"},
	   			{label:"요청일자",		name:"reqdt", 		  index:"reqdt", 	    width: "150", 	align:"center"},
	   			{label:"처리일시",		name:"treatdt",  index:"treatdt", width: "150", 	align:"center"},
	   			{label:"인허가상태",		name:"permstat",	  index:"permstat",   width: "95", 	align:"center"},
	   			{label:"상세내역",		name:"detail",	  index:"detail",   width: "120", 	align:"center"},
	   			{label:"요청자",		name:"req_user",	  index:"req_user",   width: "100", 	align:"center"},
	   			{label:"처리자",		name:"treat_user",	  index:"treat_user",   width: "100", 	align:"center"},
	   			{label:"적용시작일",		name:"app_startdt",	  index:"app_startdt",   width: "100", 	align:"center"},
	   			{label:"x좌표",		name:"posx",	  index:"posx",   width: "130", 	align:"center"},
	   			{label:"y좌표",		name:"posy",	  index:"posy",   width: "130", 	align:"center"},
	   			{label:"검지범위",		name:"detectrange",	  index:"detectrange",   width: "90", 	align:"center"},
	   			
	   			{name:"updtpcd",	index:"updtpcd",  	    hidden:true},
	   			{name:"permstatcd", index:"permstatcd",  hidden:true},
	   			{name:"link_posx",  index:"link_posx",  hidden:true},
	   			{name:"link_posy",  index:"link_posy",  hidden:true},
	   			{name:"linkid", 	index:"linkid",  hidden:true},
	   			
	   			];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
	initPicker();
	
});



function initPicker(){
	initCalendar("inp_search_startdt", YEAR_FORMAT1, false);
	initCalendar("inp_search_enddt", YEAR_FORMAT1, true);
	initCalendar("input_xmapdt", YEAR_FORMAT1, true);
	initCalendar("input_masterdt", YEAR_FORMAT1, true);
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24 * 7); //일주일전
	setCalendar("inp_search_startdt", YEAR_FORMAT1, prev);
};

function initGrid(){
	makeGrid("#stop_list", model1, 600, "resultList", onSelected, onComplete, null);
	
	function onComplete(){
		$("#stop_cnt").text($("#stop_list").getGridParam("reccount"));
		$("#stop_list").setSelection(1, true);
	};
	
	function onSelected(){
		var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		
		$("#select_permstat option").removeAttr("selected");
		if(rowData.permstat) 
			$("#select_permstat option:contains('"+rowData.permstat+"')").attr("selected","selected");
	};
	
	$(window).bind('resize', function() {
		$("#stop_list").jqGrid('setGridHeight', $(".conleft.v0512Left .main_chart").height()-23);
		$("#stop_list").jqGrid('setGridWidth', $(".conleft.v0512Left .main_chart").width());		
	}).trigger('resize');

};




function setCategory(){
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'PERMSTATCD' } , null, onSuccess1, null);
	
	function onSuccess1(data) {
		var strTemp1 = "<option value>전체</option>";
		var strTemp2 = "";
		$.each(data.resultList,function(index, value){
			strTemp1 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_permstat").empty().append(strTemp1);
		$("#select_permstat").empty().append(strTemp2);
	};
};

function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var yncheck ="";
		if($("#chk_ynchk").is(":checked")){
			yncheck = "1" //최근편집용 체크
		} else {
			yncheck = ""; //최근편집용 미체크
		}
		var param = {
				search_startdt : $("#inp_search_startdt").val().replace(/-/g,''),
				search_enddt : $("#inp_search_enddt").val().replace(/-/g,''),
				bstopnm : $("#inp_bstopnm").val(),
				permstat : $("#sel_permstat option:selected").val(),
				yncheck	: yncheck
		};
		showLoader();
		reloadGrid("#stop_list", "./stop/selectSearchPermissionList.do", param, "resultList");
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_bstopnm").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	
	
	//마스터조회
	$("#btn_searchMaster").on("click",function(){
		var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		if(rowid){
			window.open("v0510.view", "v0510.view", "width=1366px, height=792px, resizable=0, scrollbars=0");
		} else{
			showAlert("조회하실 데이터를 선택해주세요");
			return;
		}
	});
	
	//마스터적용
	$("#btn_updateMaster").on("click",function(){
		showConfirmDlg("마스터적용 실행하시겠습니까?", function(){
			var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
			var rowData = $("#stop_list").jqGrid('getRowData', rowid);
			var param = {
					permstatcd : $("#select_permstat option:selected").val(),
					detail : $("#input_detail").val(),
					bstopid : rowData.bstopid,
					reqdt : rowData.reqdt
					
			};
			console.log(param);
			ajaxCall("./stop/updateMasterPermission.do", param, null, success, null);
			function success(data){
				if(data.result == "1") {
					showAlert("정상적용되었습니다");
				}else {
					showAlert("다시 시도해주세요");
				}
			};
		});
	});
	
	//인허가 삭제 버튼
	$("#btn_delete_permit").on("click",function(){
		showConfirmDlg("인허가사항 적용시작일을 수정하시겠습니까? 시스템적용된 인허가사항은 수정되지 않습니다", function(){
			alert("삭제작업 쿼리 작성하기");
		});
	});
	//적용일 수정 버튼
	$("#btn_update_app_startdt").on("click",function(){
		showConfirmDlg("인허가사항을 삭제 하시겠습니까? 시스템적용된 인허가사항은 삭제되지 않습니다", function(){
			alert("업데이트 쿼리 작성하기");
		});
	});
};

//자식창 전달 데이터
function parent_bstopnm(){
	var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
	var rowData = $("#stop_list").jqGrid('getRowData', rowid);
	var bstopnm = rowData.bstopnm
	return bstopnm;
};	
