
//좌측
var model1 = [
	   			{label:"정류소ID",		name:"bstopid",        	index:"bstopid",      	width: "70", 	align:"center"},
	   			{label:"정류소명",		name:"bstopnm",        	index:"bstopnm",      	width: "130", 	align:"center"},
	   			{label:"정류소유형",		name:"bstoptpcd",       index:"bstoptpcd",      width: "80", 	align:"center"},
	   			{label:"관할관청",		name:"adminnm",        	index:"adminnm",      	width: "75", 	align:"center"},
	   			{label:"동명",		name:"dongnm",        	index:"dongnm",      	width: "120", 	align:"center"},
	   			{label:"사용여부",		name:"useyn",        	index:"useyn",      	width: "70", 	align:"center"},
	   			{label:"적용시작일",		name:"app_startdt",     index:"app_startdt",    width: "80", 	align:"center"},
	   			{label:"위치X",		name:"posx",        	index:"posx",      		width: "85", 	align:"center"},
	   			{label:"위치Y",		name:"posy",        	index:"posy",     	 	width: "85", 	align:"center"}
	   		];


//우측
var model2 = [
	   			{label:"버스회사",		name:"compnm",        	index:"compnm",      	width: "95", 	align:"center"},
	   			{label:"노선번호",		name:"routeno",        	index:"routeno",      	width: "70", 	align:"center"},
	   			{label:"노선유형",		name:"routetpcd",       index:"routetpcd",      width: "70", 	align:"center"},
	   			{label:"기점",		name:"origin_bstopid",  index:"origin_bstopid", width: "95", 	align:"center"},
	   			{label:"종점",		name:"dest_bstopid",    index:"dest_bstopid",   width: "95", 	align:"center"}
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});

function setCategory(){
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'BSTOPTPCD' } , null, sel_success1, null);
	
	function sel_success1(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_bstoptpcd").empty().append(strTemp);
	};
};

function initGrid(){
	makeGrid("#stop_list", model1, 300, "resultList", onSelected, complete ,null);
	makeGrid("#stop_route_list", model2, 300, "resultList", null, null ,null);

	function onSelected(){
		var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		var param = { nodeid :rowData.bstopid };
		reloadGrid("#stop_route_list", "./stop/selectSearchStopRouteList.do", param, "resultList");
	};
	
	function complete(){
		$("#stop_list").setSelection(1, true);
		hideLoader();
	};
	
	
	$(window).bind('resize', function() {
		$("#stop_list").jqGrid('setGridHeight', $(".conleft.v0513Left .main_chart").height()-23);
		$("#stop_list").jqGrid('setGridWidth', $(".conleft.v0513Left .main_chart").width());		

		$("#stop_route_list").jqGrid('setGridHeight', $(".conright.v0513Right .main_chart").height()-23);
		$("#stop_route_list").jqGrid('setGridWidth', $(".conright.v0513Right .main_chart").width());
	}).trigger('resize');
};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
			bstoptpcd : $("#sel_bstoptpcd option:selected").val(),
			bstopnm : $("#inp_bstopnm").val(),
			adminnm : $("#inp_adminnm").val(),
			dongnm : $("inp_dongnm").val()
		};
		showLoader();
		reloadGrid("#stop_list", "./stop/selectSearchStopList.do", param, "resultList");
		
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#search_carregno").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	//지도이동
	$(".topBtn_map").on("click",function(){
		var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		if(!rowid){
			showAlert("이동할 정류소를 선택해주세요");
			return false;
		}
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		console.log("지도이동예정(좌표)"+rowData.posx+" / "+rowData.posy);
		opener.setCenterPosition(rowData.posx,rowData.posy);
	});
};	
