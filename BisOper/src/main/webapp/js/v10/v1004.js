
//상단
var model1 = [
	   			{label:"권역코드",		name:"areacd",       index:"areacd",      width: "120", 	align:"center"},
	   			{label:"행자부코드",		name:"admincd",      index:"admincd",     width: "150", 	align:"center"},
	   			{label:"광역도시명",		name:"gareanm",      index:"gareanm",     width: "180", 	align:"center"},
	   			{label:"시군구명",		name:"areanm",       index:"areanm",      width: "200", 	align:"center"},
	   			{label:"서비스지역코드",	name:"svcareacd",    index:"svcareacd",   width: "120", 	align:"center"},
	   			{label:"우편번호",		name:"zipcode",      index:"zipcode",     width: "120", 	align:"center"}
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});

function setCategory(){
	ajaxCall("./sys/selectAdminareaList.do", { sel_code : 'AREACD' } , null, sel_success1, null);
	ajaxCall("./sys/selectAdminareaList.do", { sel_code : 'GAREANM'} , null, sel_success2, null);
	
	function sel_success1(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.areacd+"'>"+value.areacd+"</option>";
		});
		$("#sel_areacd").empty().append(strTemp);
	};

	function sel_success2(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.gareanm+"'>"+value.gareanm+"</option>";
		});
		$("#sel_gareanm").empty().append(strTemp);
	};
};


function initGrid(){
	makeGrid("#detail_list", model1, 300, "resultList", null, onComplete ,null);

	function onComplete(){
		hideLoader();
	};
	
	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
			areacd : $("#sel_areacd option:selected").val(),
			gareanm : $("#sel_gareanm option:selected").val(),
			areanm : $("#inp_areanm").val()
		};
		showLoader();
		reloadGrid("#detail_list", "./sys/selectAdminareaList.do", param, "resultList");
		
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_areanm").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
};