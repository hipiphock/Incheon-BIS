
var model1 = [
	   			
	   			{label:"발생일시",		name:"incid_occurdt",	index:"incid_occurdt",  width: "150", 	align:"center"},
	   			{label:"돌발ID",		name:"incidid",   		index:"incidid",   		width: "100", 	align:"center"},
	   			{label:"관계기관명",		name:"relatorgnm",		index:"relatorgnm",  	width: "100", 	align:"center"},
	   			{label:"돌발유형",		name:"incidtpnm", 		index:"incidtpnm", 	    width: "90", 	align:"center"},
	   			{label:"상세내용",		name:"incid_detail",  	index:"incid_detail", 	width: "150", 	align:"center"},
	   			{label:"종료일시",		name:"incid_enddt",	 	index:"incid_enddt",    width: "150", 	align:"center"},
	   			{label:"수집일시",		name:"colldt",	  		index:"colldt",   		width: "150", 	align:"center"},
	   			
	   			{name:"upd_regseq",		index:"upd_regseq",  hidden:true},
	   			{name:"relatorgid",  	index:"relatorgid",  hidden:true},
	   			{name:"incidtpcd", 		index:"incidtpcd",   hidden:true}
	   			
	   			];

var model2 = [
              	{label:"발생일시",		name:"incid_occurdt",	index:"incid_occurdt",  width: "150", 	align:"center"},
              	{label:"순번",		name:"upd_regseq",		index:"upd_regseq",  	width: "90", 	align:"center"},
              	{label:"상세내용",		name:"incid_detail",  	index:"incid_detail", 	width: "110", 	align:"center"},
              	{label:"종료일시",		name:"incid_enddt",	 	index:"incid_enddt",    width: "150", 	align:"center"},
              	{label:"수집일시",		name:"colldt",	  		index:"colldt",   		width: "150", 	align:"center"},
              	
              	{name:"incidid", 		index:"incidid",   hidden:true}
     		 ];

var model3 = [
            	{label:"링크ID",		name:"linkid",			index:"linkid", 		width: "150", 	align:"center"},
            	{label:"링크명",		name:"linknm",			index:"linknm",  		width: "160", 	align:"center"},
            	{label:"도로명",		name:"roadnm",  		index:"roadnm", 		width: "150", 	align:"center"}
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
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24 * 7); //일주일전
	setCalendar("inp_search_startdt", YEAR_FORMAT1, prev);
};



function initGrid(){
	makeGrid("#incid_list1", model1, 300, "resultList", onSelected1, onComplete1, null);
	makeGrid("#incid_list2", model2, 300, "resultList", onSelected2, onComplete2, null);
	makeGrid("#link_list", model3, 300, "resultList", null, onComplete3, null);
	
	function onSelected1(){
		var rowid = $("#incid_list1").jqGrid('getGridParam', "selrow");
		var rowData = $("#incid_list1").jqGrid('getRowData', rowid);
		
		showLoader();
		$("#incid_list2,#link_list").jqGrid("clearGridData");
		reloadGrid("#incid_list2", "./outsideinfo/selectIncidChangedRecordList.do", {incidid : rowData.incidid}, "resultList");
	};
	
	function onSelected2(){
		var rowid = $("#incid_list2").jqGrid('getGridParam', "selrow");
		var rowData = $("#incid_list2").jqGrid('getRowData', rowid);
		
		showLoader();
		reloadGrid("#link_list", "./outsideinfo/selectIncidLinkInfoList.do", {incidid : rowData.incidid}, "resultList");
	};
	
	function onComplete1(){
		$("#list1_cnt").text($("#incid_list1").getGridParam("reccount"));
	};
	
	function onComplete2(){
		$("#list2_cnt").text($("#incid_list2").getGridParam("reccount"));
	};
	
	function onComplete3(){
		$("#link_cnt").text($("#link_list").getGridParam("reccount"));
	};
	
	$(window).bind('resize', function() {
		$("#incid_list1").jqGrid('setGridHeight', $(".conleft.v1101Left .main_chart").height()-23);
		$("#incid_list1").jqGrid('setGridWidth', $(".conleft.v1101Left .main_chart").width());		
		
		$("#incid_list2").jqGrid('setGridHeight', $(".conright.v1101Right .main_chart").height()-23);
		$("#incid_list2").jqGrid('setGridWidth', $(".conright.v1101Right .main_chart").width());		
		
		$("#link_list").jqGrid('setGridHeight', $(".conten.con2 .main_chart").height()-23);
		$("#link_list").jqGrid('setGridWidth', $(".conten.con2 .main_chart").width());		
	}).trigger('resize');


};




function setCategory(){
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'INCIDTPCD' } , null, onSuccess1, null);
	
	function onSuccess1(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_incidtpcd").empty().append(strTemp);
	};
};

function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var startdt = $("#inp_search_startdt").val().replace(/-/g,'')+"000000";
		var enddt = $("#inp_search_enddt").val().replace(/-/g,'')+"235959";
		var incidtpcd  = $("#sel_incidtpcd option:selected").val();
		if(Number(enddt) > Number(startdt)){
			var param = {
					search_startdt : startdt,
					search_enddt : enddt,
					incidtpcd : incidtpcd
			};
			showLoader();
			$("#incid_list2,#link_list").jqGrid("clearGridData");
			reloadGrid("#incid_list1", "./outsideinfo/selectIncidRecordList.do", param, "resultList");
			
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
};



