$(document).ready(function(){
	appendLoader("조희중..") 
	initGrid(); 
	initEvent(); 
});

var models = [
              {label:"관리ID",		name:"cpviewbitid",			index:"cpviewbitid",		width: "60", align:"center", sorttype:"text"},
              {label:"안내기ID",		name:"bitid",				index:"bitid",				width: "60", align:"center", sorttype:"text"},
              {label:"단축ID",		name:"sbstopid",			index:"sbstopid",			width: "50", align:"center", sorttype:"text"},
              {label:"설치구",			name:"adminnm",				index:"adminnm",			width: "65", align:"center", sorttype:"text"},
              {label:"설치위치",		name:"installloc",			index:"installloc",			width: "90", align:"center", sorttype:"text"},
              {label:"파일ver",		name:"oper_pgm_filever",	index:"oper_pgm_filever",	width: "40", align:"center", sorttype:"text"},
              {label:"노선ver",		name:"routever",			index:"routever",			width: "40", align:"center", sorttype:"text"},
              {label:"스케쥴ver",		name:"schedulever",			index:"schedulever",		width: "40", align:"center", sorttype:"text"}
          
              ];


var models2 = [
              {label:"관리ID",		name:"cpviewbitid",		index:"cpviewbitid",			width: "75", align:"center", sorttype:"text"},
              {label:"안내기ID",		name:"bitid",			index:"bitid",				width: "75", align:"center", sorttype:"text"},
              {label:"단축ID",		name:"sbstopid",		index:"sbstopid",			width: "75", align:"center", sorttype:"text"},
              {label:"설치구",			name:"adminnm",			index:"adminnm",		width: "75", align:"center", sorttype:"text"},
              {label:"설치위치",		name:"installloc",		index:"installloc",			width: "75", align:"center", sorttype:"text"},
              {label:"안내기타입",		name:"bittype",			index:"bittype",			width: "75", align:"center", sorttype:"text"}

              ];


function initGrid() {
	makeMultiGrid("#incheon_table", models, 300, "resultList", null, onComplete, null); 
	makeMultiGrid("#other_table", models2, 300, "resultList", null, onComplete2, null);
	
	function onComplete(data) {
		hideLoader();
		$(".sub_title").eq(0).find("span").text(data.records);
	}
	
	function onComplete2(data) {
		$(".sub_title").eq(2).find("span").text(data.records);
	}
	
	$(window).bind('resize',function() {
		$("#incheon_table").jqGrid('setGridHeight', $(".main_chart").height()-35);
		$("#incheon_table").jqGrid('setGridWidth', $(".main_chart").width());
		$("#other_table").jqGrid('setGridHeight', $(".main_chart").height()-75);
		$("#other_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	showLoader();
	reloadGrid("#incheon_table","./bit/selectIncheonBitStat.do", null, "resultList"); 
	reloadGrid("#other_table","./bit/selectOtherBitStat.do", null, "resultList"); 
	
	$("#incheon_table").jqGrid('filterToolbar',
    {
							autosearch: true,
							stringResult: true,
							searchOnEnter: true,
							defaultSearch: "cn"
    });
	$("#other_table").jqGrid('filterToolbar',
    {
							autosearch: true,
							stringResult: true,
							searchOnEnter: true,
							defaultSearch: "cn"
    });
	setFilter("incheon_table", true); 
	setFilter("other_table", true); 
}

function initEvent() {
	
}