

var model1 = [
	   			{label:"발생일시",			name:"colldt",     		index:"colldt",  		width: "180", 	align:"center"},
	   			{label:"관계기관명",			name:"relatorgnm",     	index:"relatorgnm",  	width: "160", 	align:"center"},
	   			{label:"정보유형",			name:"lnkdinfotpcd",    index:"lnkdinfotpcd",  	width: "150", 	align:"center"},
	   			{label:"전송결과",			name:"sndrsltcd",     	index:"sndrsltcd",  	width: "150", 	align:"center"},
	   			{label:"통신오류",			name:"commerrcd", 	    index:"commerrcd",  	width: "150", 	align:"center"},

	   			{name:"relatorgid",    	index:"relatorgid",  	hidden:true}
	   			
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
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24 ); //1일 전
	setCalendar("inp_search_startdt", YEAR_FORMAT1, prev);
	
};

function initGrid(){
	makeGrid("#detail_list", model1, 300, "resultList", null, null ,null);
	
	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()- 46);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');	
};


function setCategory(){
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'LNKDINFOTPCD' } , null, sel_success1, null);
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'SNDRSLTCD' } , null, sel_success2, null);
	
	function sel_success1(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_lnkdinfotpcd").empty().append(strTemp);
	};
	function sel_success2(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_sndrsltcd").empty().append(strTemp);
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
					lnkdinfotpcd : $("#sel_lnkdinfotpcd option:selected").val(),
					sndrsltcd : $("#sel_sndrsltcd option:selected").val()  
			};
			showLoader();
			reloadGrid("#detail_list", "./outsideinfo/selectLinkedOutsideInfoList.do", param, "resultList");
		
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_search_startdt, inp_search_enddt").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	
};
