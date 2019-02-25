var model = [
	   			{label:"버스회사",		name:"compnm",      	index:"compnm",         width: "110", 	align:"center"},
	   			{label:"노선유형",		name:"routetpcd",    	index:"routetpcd",     	width: "90", 	align:"center"},
	   			{label:"노선번호",		name:"routeno",    	 	index:"routeno",     	width: "90", 	align:"center"},
	   			{label:"운행거리(km)",	name:"rundist",     	index:"rundist",     	width: "85", 	align:"center"},
	   			{label:"운행시간(분)",	name:"runtm",     		index:"runtm",     		width: "85", 	align:"center"},
	   			{label:"운행횟수(회)",	name:"runcnt",    	 	index:"runcnt",     	width: "85", 	align:"center"},
	   			{label:"운행(대)",		name:"runbuscnt",     	index:"runbuscnt",    	width: "85", 	align:"center"},
	   			{label:"노선이탈",		name:"outroutecnt",     index:"outroutecnt",  	width: "85", 	align:"center"},
	   			{label:"임의지연",		name:"voldelaycnt",     index:"voldelaycnt",  	width: "85", 	align:"center"},
	   			{label:"개문주행",		name:"openruncnt",      index:"openruncnt",   	width: "85", 	align:"center"},
	   			{label:"무정차통과",		name:"stopskipcnt",     index:"stopskipcnt",  	width: "85", 	align:"center"},
	   			{label:"과속",		name:"overspdcnt",      index:"overspdcnt",   	width: "85", 	align:"center"},
	   			{label:"급감속",		name:"decelcnt",     	index:"decelcnt",     	width: "85", 	align:"center"},
	   			{label:"급가속",		name:"accelcnt",     	index:"accelcnt",     	width: "85", 	align:"center"},
	   			{label:"고장",		name:"trblcnt",     	index:"trblcnt",      	width: "85", 	align:"center"},
	   			{label:"긴급",		name:"emgcycnt",     	index:"emgcycnt",     	width: "85", 	align:"center"},
	   			{label:"사고",		name:"accidcnt",     	index:"accidcnt",     	width: "85", 	align:"center"},
   			 ];

$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
	initPicker();
});

function initPicker(){
	initCalendar("inp_search_date", YEAR_FORMAT1, false);
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일 전
	setCalendar("inp_search_date", YEAR_FORMAT1, prev);
	
};


function setCategory(){
	ajaxCall("./comp/selectCompCateList.do", null, null, sel_comp_success, null);
	sel_routeCate_list();
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'ROUTETPCD' } , null, onSuccess, null);
	
	function onSuccess(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_routetpcd").empty().append(strTemp);
	};
	
	
	function sel_comp_success(data) { 
		var strTemp = "<option value=''>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.compid+"'>"+value.compnm+"</option>";
		});
		$("#sel_compid").empty().append(strTemp);
	};
};

function sel_routeCate_list(useYn,compId) {
	var compid="";
	var useyn=""
	if(compId) compid = compId;
	if(useYn) useyn = useYn;
	var param = {
		compid : compid,	
		useyn : useyn
	};
	
	ajaxCall("./route/selectRouteCateList.do", param , null, sel_route_success, null);
	
	function sel_route_success(data) { 
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.routeid+"'>"+value.routeno+"</option>";
		});
		$("#sel_routeid").empty().append(strTemp);
	};

};


function initGrid(){
	makeGrid("#detail_list", model, 300, "resultList", null, onComplete ,null);
	$("#detail_list").jqGrid('setGroupHeaders', {
		useColSpanStyle: false,
		  groupHeaders:[
			{ startColumnName: 'compnm', numberOfColumns: 7, titleText: "노선정보" },
			{ startColumnName: 'outroutecnt', numberOfColumns: 7, titleText: "부당운행 유형" },
			{ startColumnName: 'trblcnt', numberOfColumns: 3, titleText: "돌발상황 발생건수" }
		  ]
    });
	
	function onComplete(){
		$("#bus_cnt").text($("#detail_list").getGridParam("reccount"));
	};
	
	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()-70);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');

	};


function initEvent(){
	//버스회사 카테고리 변경시 노선번호 회사소속 노선리스트 변경
	$("#sel_compid").on("change",function(){
		var compid = $("#sel_compid option:selected").val();
		var useyn = '1';
		sel_routeCate_list(useyn,compid);
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//검색
	$("#btn_search").on("click",function(){
		var search_date = $("#inp_search_date").val().replace(/-/g,'');
		var startdt = search_date+"000000";
		var enddt = search_date+"235959";
		var compid = $("#sel_compid option:selected").val();
		var routeid = $("#sel_routeid option:selected").val();
		var routetpcd  = $("#sel_routetpcd option:selected").val();
		if(Number(enddt) > Number(startdt)){
			var param = {
					search_startdt : startdt,
					search_enddt : enddt,
					compid : compid,
					routeid : routeid,
					routetpcd : routetpcd
			};
			showLoader();
			reloadGrid("#detail_list", "./bus/selectOneDayBusRunRecList.do", param, "resultList");
			
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
};