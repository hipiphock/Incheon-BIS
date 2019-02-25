
//상단
var model1 = [
	   			{label:"광역",		name:"widearea",        index:"widearea",      width: "85", 	align:"center"},
	   			{label:"노선ID",		name:"routeid",        index:"routeid",      width: "110", 	align:"center"},
	   			{label:"번호",		name:"routeno",        index:"routeno",      width: "85", 	align:"center"},
	   			{label:"회사명",		name:"compnm",        index:"compnm",      width: "140", 	align:"center"},
	   			{label:"유형",		name:"routetype",        index:"routetype",      width: "85", 	align:"center"},
	   			{name:"compid",        index:"compid",      hidden:true}
   			 ];


var model2 = [
	   			{label:"순번",		name:"pathseq",        index:"pathseq",      width: "80", 	align:"center"},
	   			{label:"노드ID",		name:"nodeid",        index:"nodeid",      width: "110", 	align:"center"},
	   			{label:"단축번호",		name:"shortid",        index:"shortid",      width: "80", 	align:"center"},
	   			{label:"노드명",		name:"nodenm",        index:"nodenm",      width: "160", 	align:"center"},
	   			{label:"노드유형",		name:"nodegbnm",        index:"nodegbnm",      width: "95", 	align:"center"},
	   			{label:"방향",		name:"dirnm",        index:"dirnm",      width: "90", 	align:"center"},
	   			{label:"노드거리",		name:"node_sectdist",        index:"node_sectdist",      width: "120", 	align:"center"}
 			 ];

$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});

function setCategory(){
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'WIDEAREACD' } , null, sel_success, null);
	
	function sel_success(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_widearea").empty().append(strTemp);
	};
	
	//조회일자 
	initCalendar("inp_searchdate", YEAR_FORMAT1, true);
	var today = new Date();
	var prev = new Date(Date.parse(today));
	setCalendar("inp_searchdate", YEAR_FORMAT1, prev);
	
	routeLoadGrid();
};


function initGrid(){
	makeGrid("#route_list", model1, 300, "resultList", onSelected, onComplete1 ,null);
	makeGrid("#node_list", model2, 300, "resultList", null, onComplete2 ,null);

	function onComplete1(){
		$("#route_cnt").text($("#route_list").getGridParam("reccount")); 
		$("#route_list").setSelection(1, true);
	};
	
	function onComplete2(){
		$("#node_cnt").text($("#node_list").getGridParam("reccount")); 
	};
	
	function onSelected(){
		nodeLoadGrid();
	};
	
	$(window).bind('resize', function() {
		$("#route_list").jqGrid('setGridHeight', $(".conleft.v0506Left .main_chart").height()-29);
		$("#route_list").jqGrid('setGridWidth', $(".conleft.v0506Left .main_chart").width());
		
		$("#node_list").jqGrid('setGridHeight', $(".conright.v0506Right .main_chart").height()-29);
		$("#node_list").jqGrid('setGridWidth', $(".conright.v0506Right .main_chart").width());
	}).trigger('resize');
};


function routeLoadGrid(){
	var param = {
			widearea : $("#sel_widearea option:selected").val()
		};
	reloadGrid("#route_list", "./route/selectRouteWideareaList.do", param, "resultList");
	
};

function nodeLoadGrid(){
	var rowid = $("#route_list").jqGrid('getGridParam', "selrow");
	var rowData = $("#route_list").jqGrid('getRowData', rowid);
	var param = {
			routeid : rowData.routeid,
			upddt : $("#inp_searchdate").val().replace(/-/g,"")+"235959"
	}
	reloadGrid("#node_list", "./route/selectRouteViaNodeList.do", param, "resultList");
}

function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		nodeLoadGrid();
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	

	$("#sel_widearea").on("change",function(){
		routeLoadGrid();
	});
};	
	

