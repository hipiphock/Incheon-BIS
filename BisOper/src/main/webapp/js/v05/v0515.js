
var model1 = [
	   			{label:"버스회사",		name:"compnm",        index:"compnm",      	 width: "100", 	align:"center"},
	   			{label:"운행횟수",		name:"cnt",        	  index:"cnt",      	 width: "90", 	align:"center"},
	   			{label:"운행거리(km)",	name:"rundist",       index:"rundist",       width: "110", 	align:"center"},
	   			{label:"운행시간(분)",	name:"runtm",         index:"runtm",      	 width: "110", 	align:"center"},
	   			{label:"과속",		name:"overspdcnt",    index:"overspdcnt",    width: "85", 	align:"center"},
	   			{label:"개문",		name:"openruncnt",    index:"openruncnt",    width: "85", 	align:"center"},
	   			{label:"급가속",		name:"accelcnt",      index:"accelcnt",      width: "85", 	align:"center"},
	   			{label:"급감속",		name:"decelcnt",      index:"decelcnt",      width: "85", 	align:"center"},
	   			{label:"노선이탈",		name:"outroutecnt",   index:"outroutecnt",   width: "85", 	align:"center"},
	   			{label:"무정차",		name:"stopskipcnt",   index:"stopskipcnt",   width: "85", 	align:"center"},
	   			{label:"임의지연",		name:"voldelaycnt",   index:"voldelaycnt",   width: "85", 	align:"center"},
	   			{label:"고장",		name:"trblcnt",       index:"trblcnt",       width: "85", 	align:"center"},
	   			{label:"사고",		name:"accidcnt",      index:"accidcnt",      width: "85", 	align:"center"},
	   			{label:"위급",		name:"emgcycnt",      index:"emgcycnt",      width: "85", 	align:"center"},
	   			{label:"합계",		name:"tot",        	  index:"tot",    	  	 width: "85", 	align:"center"},
	   			{label:"회사ID",		name:"compid",        index:"compid",     	 width: "85", 	align:"center"},
   			 ];


var model2 = [
	   			{label:"발생시각",		name:"occurdt",         index:"occurdt",      	 width: "130", 	align:"center"},
	   			{label:"차량번호",		name:"carno",       	index:"carno",      	 width: "90", 	align:"center"},
	   			{label:"노선번호",		name:"routeno",         index:"routeno",     	 width: "80", 	align:"center"},
	   			{label:"페널티유형",		name:"penaltytpcd",     index:"penaltytpcd",      	 width: "90", 	align:"center"},
	   			{label:"부당운행유형",	name:"runvioltpcd",     index:"runvioltpcd",      	 width: "90", 	align:"center"},
	   			{label:"처리여부",		name:"treatyn",        	index:"treatyn",     		 width: "90", 	align:"center"},
	   			{label:"처리자",		name:"treat_userid",    index:"treat_userid",   width: "100", 	align:"center"},
	   			{label:"처리기관",		name:"treat_orgnm",   	index:"treat_orgnm",   width: "100", 	align:"center"},
	   			{label:"처리상세내역",	name:"treat_detail",    index:"treat_detail",   width: "120", 	align:"center"},
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
	var prev1 = new Date(Date.parse(today) - 1000 * 60 * 60 * 24 *3); //3일 전
	var prev2 = new Date(Date.parse(today) - 1000 * 60 * 60 * 24 ); //1일 전
	setCalendar("inp_search_startdt", YEAR_FORMAT1, prev1);
	setCalendar("inp_search_enddt", YEAR_FORMAT1, prev2);
	
	
	ajaxCall("./comp/selectCompCateList.do", null, null, onSuccess, null);
	
	function onSuccess(data) { 
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.compid+"'>"+value.compnm+"</option>";
		});
		$("#sel_compid").empty().append(strTemp);
	}
};


function initGrid(){
	makeGrid("#runcnt_list", model1, 300, "resultList", onSelected, onComplete1 ,null);
	makeGrid("#penalty_list", model2, 300, "resultList", null, onComplete2 ,null);

	function onSelected(){
		var rowid = $("#runcnt_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#runcnt_list").jqGrid('getRowData', rowid);
		var param = { 
			compid : rowData.compid, 
			search_start_date : $("#inp_search_startdt").val().replace(/-/g,'')+"000000",
			search_end_date : $("#inp_search_enddt").val().replace(/-/g,'')+"235959"
		};
		reloadGrid("#penalty_list", "./penalty/selectPenaltyList.do", param, "resultList");
	};
	
	function onComplete1(){
		$("#run_cnt").text($("#runcnt_list").getGridParam("reccount")); 
		$("#runcnt_list").setSelection(1, true);
	};
	
	function onComplete2(){
		//카운터 처리여부
	};
	
	
	$(window).bind('resize', function() {
		$("#runcnt_list").jqGrid('setGridHeight', $(".conleft.v0515Left .main_chart").height()-23);
		$("#runcnt_list").jqGrid('setGridWidth', $(".conleft.v0515Left .main_chart").width());
		
		$("#penalty_list").jqGrid('setGridHeight', $(".conright.v0515Right .main_chart").height()-23);
		$("#penalty_list").jqGrid('setGridWidth', $(".conright.v0515Right .main_chart").width());
	}).trigger('resize');
};


function compCntLoadGrid(){
	var param = {
			search_startdt : $("#inp_search_startdt").val()+"00:00:00",
			search_enddt : $("#inp_search_enddt").val()+"23:59:59",
			compid : $("#sel_compid option:selected").val()
			
		};
	reloadGrid("#runcnt_list", "./comp/selectCompRunCount.do", param, "resultList");
};


function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		if (checkTermEffective($("#inp_search_startdt"), $("#inp_search_enddt"))) {
			compCntLoadGrid();
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
};	



