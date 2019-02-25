
//좌측
var model1 = [
	   			{label:"정류소ID",		name:"bstopid",        	index:"bstopid",      	width: "90", 	align:"center"},
	   			{label:"정류소명",		name:"bstopnm",        	index:"bstopnm",      	width: "150", 	align:"center"},
	   			{label:"행정구역",		name:"adminnm",    	    index:"adminnm",     	width: "90", 	align:"center"},

	   			{name:"short_bstopid",  index:"short_bstopid",  hidden:true},
	   			{name:"posx",        	index:"posx",  			hidden:true},
	   			{name:"posy",        	index:"posy",    		hidden:true}
	   		];


//우측
var model2 = [
	   			{label:"지하철역ID",	name:"staid",       index:"staid",      	width: "100", 	align:"center"},
	   			{label:"지하철역명",		name:"stanm",       index:"stanm",      	width: "200", 	align:"center"},
	   			{label:"출구ID",		name:"stagateid",   index:"stagateid",      width: "85", 	align:"center"},
	   			{label:"지하철호선",		name:"lines",  		index:"lines", 			width: "240", 	align:"center"},
	   			{label:"위치x",		name:"posx",    	index:"posx",   		width: "150", 	align:"center"},
	   			{label:"위치y",		name:"posy",    	index:"posy", 			width: "150", 	align:"center"}
	   		];

//하단
var model3 = [
	   			{label:"지하철역ID",	name:"staid",       index:"staid",      	width: "100", 	align:"center"},
	   			{label:"지하철역명",		name:"stanm",       index:"stanm",      	width: "200", 	align:"center"},
	   			{label:"출구ID",		name:"stagateid",   index:"stagateid",      width: "85", 	align:"center"},
	   			{label:"지하철호선",		name:"lines",  		index:"lines", 			width: "240", 	align:"center"},
	   		
	   			];



$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
});

function initGrid(){
	makeGrid("#stop_list", model1, 300, "resultList", onSelected, complete1 ,null);
	makeGrid("#subway_list", model2, 300, "resultList", null, complete2 ,null);
	makeGrid("#transfer_subway_list", model3, 300, "resultList", null, null ,null);

	function onSelected(){
		var rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		var param = { bstopid :rowData.bstopid };
		reloadGrid("#transfer_subway_list", "./stop/selectSearchTransferSubwayList.do", param, "resultList");
	};
	
	function complete1(){
		$("#stop_cnt").text($("#stop_list").getGridParam("reccount"));
		$("#stop_list").setSelection(1, true);
	};
	

	function complete2(){
		$("#sbwy_cnt").text($("#subway_list").getGridParam("reccount"));
		$("#subway_list").setSelection(1, true);
	};
	
	$(window).bind('resize', function() {
		$("#stop_list").jqGrid('setGridHeight', $(".conleft.v0514Left .main_chart").height()-23);
		$("#stop_list").jqGrid('setGridWidth', $(".conleft.v0514Left .main_chart").width());		

		$("#subway_list").jqGrid('setGridHeight', $(".conten.con1 .main_chart").height()-23);
		$("#subway_list").jqGrid('setGridWidth', $(".conten.con1 .main_chart").width());
		
		$("#transfer_subway_list").jqGrid('setGridHeight', $(".conten.con2 .main_chart").height()-23);
		$("#transfer_subway_list").jqGrid('setGridWidth', $(".conten.con2 .main_chart").width());
	}).trigger('resize');

	subwayLoadGrid();
	stopLoadGrid();
	
};

function initEvent(){
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
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
	
	//환승지하철 추가
	$("#btn_new").on("click",function(){
		var sbwy_rowid = $("#subway_list").jqGrid('getGridParam', "selrow");
		var sbwy_rowData = $("#subway_list").jqGrid('getRowData', sbwy_rowid);
		
		var stop_rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		var stop_rowData = $("#stop_list").jqGrid('getRowData', stop_rowid);
		
		var param = {
				staid : sbwy_rowData.staid,
				stagateid : sbwy_rowData.stagateid,
				bstopid : stop_rowData.bstopid
			};
		ajaxCall("./stop/insertTransferSubway.do", param, null, success, null);
		function success(data){
		if(data.result<=0){
			showAlert("다시 시도해주세요");
		} else{
			showAlert("저장 완료");
		}
		var stop_rowid = $("#stop_list").jqGrid('getGridParam', "selrow");	
		$("#stop_list").setSelection(stop_rowid, true);
		};
	});
	
	//환승지하철 삭제
	$("#btn_delete").on("click",function(){
		var sbwy_rowid = $("#transfer_subway_list").jqGrid('getGridParam', "selrow");
		var sbwy_rowData = $("#transfer_subway_list").jqGrid('getRowData', sbwy_rowid);
		var stop_rowid = $("#stop_list").jqGrid('getGridParam', "selrow");
		var stop_rowData = $("#stop_list").jqGrid('getRowData', stop_rowid);
		
		showConfirmDlg("선택하신 "+sbwy_rowData.stanm+"역을 해제하시겠습니까?", function(){
			var param = {
					staid : sbwy_rowData.staid,
					stagateid : sbwy_rowData.stagateid,
					bstopid : stop_rowData.bstopid
				};
			
			ajaxCall("./stop/deleteTransferSubway.do", param, null, success, null);
			
			function success(data){
				if(data.result<=0){
					showAlert("다시 시도해주세요");
				} else{
					showAlert("삭제 완료");
				}
				var stop_rowid = $("#stop_list").jqGrid('getGridParam', "selrow");	
				$("#stop_list").setSelection(stop_rowid, true);
			};
		});
	});
	
};

function stopLoadGrid(){
	reloadGrid("#stop_list", "./stop/selectSearchStopList.do", null, "resultList");
	showLoader();
};

function subwayLoadGrid(){
	//reloadGrid("#subway_list", "./stop/selectSearchSubwayList.do", null, "resultList");
	//reloadGrid 재작성(hideLoader없이)
	$("#subway_list").jqGrid("clearGridData");
	ajaxCall("./stop/selectSearchSubwayList.do", null, null, onLoadSuccess, null);
	function onLoadSuccess(data) { 
		$("#subway_list").jqGrid("setGridParam", {data : data["resultList"]});	
		$("#subway_list").trigger("reloadGrid");
	}
	
};

