
var model1 = [
	   			{label:"버스회사",		name:"compnm",        index:"compnm",      width: "100", 	align:"center",		type:"I"},
	   			{label:"등록일자",		name:"regdt",        	  index:"regdt",      width: "130", 	align:"center",		type:"I"},
	   			{label:"이의신청제목",	name:"req_title",       index:"req_title",      width: "160", 	align:"center",		type:"I"},
	   			{label:"이의신청내용",	name:"req_detail",         index:"req_detail",      width: "160", 	align:"center",		type:"I"},
	   			{label:"처리상태",		name:"reqtreatcd",    index:"reqtreatcd",      width: "80", 	align:"center",		type:"I"},
	   			{label:"처리자",		name:"req_userid",    index:"req_userid",      width: "80", 	align:"center",		type:"I"},
	   			{label:"처리일시",		name:"treatdt",      index:"treatdt",      width: "100", 	align:"center",		type:"I"},
	   			{label:"처리내용",		name:"treat_detail",      index:"treat_detail",      width: "100", 	align:"center",		type:"I"},
	   			{name:"compid",        index:"compid",   hidden:true}
   			 ];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});

function setCategory(){
	initCalendar("inp_search_startdt", YEAR_FORMAT1, false);
	initCalendar("inp_search_enddt", YEAR_FORMAT1, true);
	var today = new Date();
	var firstDate = new Date(today.getFullYear(), today.getMonth(),1) //현재월 1일 
	setCalendar("inp_search_startdt", YEAR_FORMAT1, firstDate);
	setCalendar("inp_search_enddt", YEAR_FORMAT1, today);
	
	
	ajaxCall("./comp/selectCompCateList.do", null, null, onSuccess1, null);
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'REQTREATCD' } , null, onSuccess2, null);
	
	function onSuccess1(data) { 
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.compid+"'>"+value.compnm+"</option>";
		});
		$("#sel_compid").empty().append(strTemp);
	}
	
	function onSuccess2(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_reqtreatcd").empty().append(strTemp);
	};
};


function initGrid(){
	makeGrid("#protest_list", model1, 300, "resultList", null, onComplete1 ,null);

	function onComplete1(){
		$("#protest_list").setSelection(1, true);
	};
	
	
	
	$(window).bind('resize', function() {
		$("#protest_list").jqGrid('setGridHeight', $(".conleft.v0516Left .main_chart").height()-23);
		$("#protest_list").jqGrid('setGridWidth', $(".conleft.v0516Left .main_chart").width());
	}).trigger('resize');
};


function protestLoadGrid(){
	var param = {
			search_startdt : $("#inp_search_startdt").val().replace(/-/g,'')+" 00:00:00",
			search_enddt : $("#inp_search_enddt").val().replace(/-/g,'')+" 23:59:59",
			compid : $("#sel_compid option:selected").val(),
			reqtreatcd : $("#sel_reqtreatcd option:selected").val()
		};
	reloadGrid("#protest_list", "./bbs/selectReqtreatcdList.do", param, "resultList");
};


function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		if (checkTermEffective($("#inp_search_startdt"), $("#inp_search_enddt"))) {
			protestLoadGrid();
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
};	
	

