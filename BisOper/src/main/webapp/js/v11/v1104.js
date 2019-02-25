
var model = [
	   			
	   			{label:"기관명",		name:"relatorgnm",		index:"relatorgnm", 	width: "130", 	align:"center"},
	   			{label:"수집일자",		name:"colldt",   		index:"colldt",   		width: "150", 	align:"center"},
	   			{label:"뉴스내용",		name:"newscontent",		index:"newscontent",  	width: "1030", 	align:"center"}
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
	makeGrid("#detail_list", model, 300, "resultList", onSelected, onComplete, null);
	
	function onSelected(){
		var rowid = $("#detail_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#detail_list").jqGrid('getRowData', rowid);
		
	};
	
	function onComplete(){
		//$("#list_cnt").text($("#detail_list").getGridParam("reccount"));
	};
	
	
	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
		
	}).trigger('resize');


};




function setCategory(){
	ajaxCall("./sys/selectRelatorgidList.do", { orgtpcd : '63' } , null, onSuccess1, null);
	
	function onSuccess1(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.relatorgid+"'>"+value.orgnm+"</option>";
		});
		$("#sel_relatorgid").empty().append(strTemp);
	};
};

function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var startdt = $("#inp_search_startdt").val().replace(/-/g,'')+"000000";
		var enddt = $("#inp_search_enddt").val().replace(/-/g,'')+"235959";
		var relatorgid  = $("#sel_relatorgid option:selected").val();
		if(Number(enddt) > Number(startdt)){
			var param = {
					search_startdt : startdt,
					search_enddt : enddt,
					relatorgid : relatorgid
			};
			showLoader();
			reloadGrid("#detail_list", "./outsideinfo/selectNewScollList.do", param, "resultList");
			
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
};
