$(document).ready(function(){
	appendLoader("조희중..")
	initGrid();
	initEvent(); 
});

var selected_lat;
var selected_lng;

var models = [
             {label:"돌발유형", 		name:"incidty", 		index:"incidty", 		width: "115", 	align:"center", sorttype:"text"},
             {label:"발생시간",			name:"dt",				index:"dt", 			width: "180", 	align:"center", sorttype:"text"},             
             {label:"버스노선",			name:"routeno",			index:"routeno",		width: "115", 	align:"center", sorttype:"text"},
             {label:"차량번호",			name:"busid",			index:"busid",			width: "115", 	align:"center", sorttype:"text"},
          
             {name:"posy",			index:"posy",	 type: "I", hidden: true},
             {name:"posx",			index:"posx",	 type: "I", hidden: true}
];

function initGrid() {
	makeGrid("#inci_list", models, 300, "resultList", onSelected, onComplete, null);
	function onSelected(data) {
		var rowData = $("#inci_list").jqGrid('getRowData',data);
		selected_lat = rowData.posy;
		selected_lng = rowData.posx;
	}
	
	function onComplete(data) {
		hideLoader();
		$(".pop_title").find("span").text(data.records);
	}
	
	$(window).bind('resize',function() {
		$("#inci_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#inci_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	showLoader();
	reloadGrid("#inci_list","./bus/selectBusInciList2.do", null, "resultList"); 
}

function initEvent() {
	// 지도이동
	$(".popTopBtn_map").click(function(){
		if(selected_lat == null && selected_lng == null) {
			showAlert("돌발 상황을 선택 하세요.");
		}
		else {
			opener.setCenterPosition(selected_lat, selected_lng);
			selected_lat = null;
			selected_lng = null;
		}
	});
}