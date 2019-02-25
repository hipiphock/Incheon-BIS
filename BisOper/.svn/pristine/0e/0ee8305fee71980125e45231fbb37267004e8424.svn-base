
//상단
var model1 = [
	   			
	   			{label:"안내기ID",		name:"bitid",		  index:"bitid",       width: "80", 	align:"center"},
	   			{label:"단축정류소ID",		name:"short_bstopid",    index:"short_bstopid",   width: "80", 	align:"center"},
	   			{label:"정류소ID",		name:"bstopid",		  index:"bstopid",  	    width: "95", 	align:"center"},
	   			{label:"정류소명",		name:"bstopnm", 		  index:"useyn", 	    width: "170", 	align:"center"},
	   			{label:"구",		name:"gu",  index:"gu", width: "90", 	align:"center"},
	   			{label:"동",		name:"dongnm",	  index:"dongnm",   width: "110", 	align:"center"},
	   			{label:"주소",		name:"address",	  index:"address",   width: "220", 	align:"center"},
	   			
	   			{name:"bittype",			index:"bittype",  	    hidden:true},
	   			{name:"bittpcd",  index:"bittpcd",  hidden:true},
	   			{name:"projecttpcd", 			index:"projecttpcd",  	   		hidden:true}
	   			
	   			];
//하단
var model2 = [
     			{label:"노선ID",		name:"routeid",        index:"routeid",       width: "120", 	align:"center"},
     			{label:"노선번호",		name:"routeno",		  	index:"routeno",      		width: "120", 	align:"center"},
     			{label:"운수회사",		name:"compnm",		  	index:"compnm",  		width: "180", 	align:"center"},
     			
     			{name:"nodeid",	  	index:"nodeid",  			hidden:true},
     			{name:"nodenm",		index:"nodenm",  	   		hidden:true}
     		 ];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});


function initGrid(){
	makeGrid("#stop_list", model1, 600, "resultList", onSelected, onComplete, null);
	makeGrid("#stopPass_list", model2, 130, "resultList", null, null, null);
	
	$(window).bind('resize', function() {
		$("#stop_list").jqGrid('setGridHeight', $(".conleft.v0520Left .main_chart").height()-23);
		$("#stop_list").jqGrid('setGridWidth', $(".conleft.v0520Left .main_chart").width());		
		
		$("#stopPass_list").jqGrid('setGridHeight', $(".conright.v0520Right .main_chart").height()-23);
		$("#stopPass_list").jqGrid('setGridWidth', $(".conright.v0520Right .main_chart").width());		
	}).trigger('resize');

	function onComplete(){
		$("#stop_cnt").text($("#stop_list").getGridParam("reccount"));
		$("#stop_list").setSelection(1, true);
	};
	
	
	function onSelected(){
		var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		console.log(rowData.bstopid);
		reloadGrid("#stopPass_list", "./stop/selectStopPassRouteList.do", {nodeid : rowData.bstopid}, "resultList");
		
	};
};




function setCategory(){
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'PROJECTTPCD' } , null, onSuccess1, null);
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'BITTPCD' } , null, onSuccess2, null);
	
	function onSuccess1(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_projecttpcd").empty().append(strTemp);
	};
	
	function onSuccess2(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#sel_bittpcd").empty().append(strTemp);
	};
};

function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
				projecttpcd	: $("#sel_projecttpcd option:selected").val(),
				bitid : $("#inp_bitid").val(),
				bstopnm : $("#inp_bstopnm").val(),
				bittpcd	: $("#sel_bittpcd option:selected").val(),
		};
		showLoader();
		reloadGrid("#stop_list", "./stop/selectSearchStopInfoList.do", param, "resultList");
		
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_bitid, #inp_bstopnm").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});

};
