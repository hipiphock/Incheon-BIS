
var model1 = [
	   			{label:"인허가구분",		name:"cd",		    index:"cd",  		 width: "90", 	align:"center"},
	   			{label:"변경유형",		name:"updtype",	  	index:"updtype",  	 width: "90", 	align:"center"},
	   			{label:"인허가ID",		name:"permid", 		index:"permid", 	 width: "100", 	align:"center"},
	   			{label:"인허가명",		name:"permnm",		index:"permnm", 	 width: "100", 	align:"center"},
	   			{label:"신청일시 ",		name:"reqdt",	  	index:"reqdt",   	 width: "140", 	align:"center"},
	   			{label:"처리일시",		name:"treatdt",		index:"treatdt",   	 width: "140", 	align:"center"},
	   			{label:"인허가상태",		name:"permstat",	index:"permstat",    width: "100", 	align:"center"},
	   			{label:"인허가상세내역",	name:"detail",	  	index:"detail",   	 width: "250", 	align:"center"},
	   			{label:"요청자명",		name:"req_userid",	index:"req_userid",  width: "100", 	align:"center"},
	   			{label:"처리자명 ",		name:"treat_user",	index:"treat_user",  width: "100", 	align:"center"},
	   			{label:"적용시작일시",	name:"app_startdt",	index:"app_startdt", width: "140",	align:"center"}
	   			];

$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
	initPicker();
	
});

	

function initPicker(){
	initCalendar("inp_search_startdt", YEAR_FORMAT1, true);
	initCalendar("inp_search_enddt", YEAR_FORMAT1, true);
};

function initGrid(){
	makeMultiGrid("#detail_list", model1, 600, "resultList", null, onComplete, null);
	$("#detail_list").jqGrid('showCol','cb');
	
	function onComplete(){
		$("#perm_cnt").text($("#detail_list").getGridParam("reccount"));
	};

	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".conleft.v0517top .main_chart").height()-55);
		$("#detail_list").jqGrid('setGridWidth', $(".conleft.v0517top .main_chart").width());		
	}).trigger('resize');

};




function setCategory(){
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'PERMSTATCD' } , null, onSuccess1, null);
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'PERMTPCD' } , null, onSuccess2, null);
	
	function onSuccess1(data) {//인허가상태
		var strTemp1 = "<option value>전체</option>";
		var strTemp2 = "";
		$.each(data.resultList,function(index, value){
			strTemp1 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_permstatcd").empty().append(strTemp1);
		$("#sel_permstatcd2").empty().append(strTemp2);
	};
	
	function onSuccess2(data) {//인허가 구분(3:차고지 4:버스)
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			if(value.cd==3 || value.cd==4){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			}
		});
		$("#sel_permtpcd").empty().append(strTemp);
	};
};

function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var startdt = $("#inp_search_startdt").val().replace(/-/g,'')+"000000";
		var enddt = $("#inp_search_enddt").val().replace(/-/g,'')+"235959";
		if(Number(enddt) > Number(startdt)){
			var param = {
					search_startdt : startdt,
					search_enddt : enddt,
					permtpcd : $("#sel_permtpcd option:selected").val(),
					permstatcd : $("#sel_permstatcd option:selected").val()
			};
			reloadGrid("#detail_list", "./bus/selectSearchPermList.do", param, "resultList");
			showLoader();
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}	
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//전체선택 체크박스
	$("#allCheck").click(function() {
		if($("#allCheck").prop("checked")) {  
			$("#detail_list input[type=checkbox]").prop("checked",true);
			$("#detail_list tr[role=row]").attr("class","ui-widget-content jqgrow ui-row-ltr ui-state-highlight");
		} else {  
			$("#detail_list input[type=checkbox]").prop("checked",false); 
			$("#detail_list tr[role=row]").attr("class","ui-widget-content jqgrow ui-row-ltr");
		}

	});
	
	//Enter 검색
	$("#inp_search_startdt, #inp_search_enddt").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
};	
