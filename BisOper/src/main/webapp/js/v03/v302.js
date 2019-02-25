
var MAIN;
var url = window.location.href;

var selectedSeq = 1;
var simpleHeight = 170;
var viaHeight = 357;

$(document).ready(function(){
	appendLoader("조회중..");
	$("#map").width(946);
	$("#map").height(580);
	createMap("map");
	initialize();

	createGrid();
});

function initialize() {
	
	$("#check_detail1").change(function(){
		if($(this).is(":checked")) {
			setFilter("route_detail_list", true);
			$("#route_detail_list").jqGrid('setGridHeight',$(".subcon_con").height() - 23 - 23);
			
			var tempgrid = $("#route_detail_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("route_detail_list", false);
			$("#route_detail_list").jqGrid('setGridHeight',$(".subcon_con").height() - 23);
			
			$("#route_detail_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
	
	/*$("#check_detail2").change(function(){
		if($(this).is(":checked")) {
			setFilter("route_simple_list", true);
			$("#route_simple_list").jqGrid('setGridHeight',simpleHeight - 23);
		}else {
			setFilter("route_simple_list", false);
			$("#route_simple_list").jqGrid('setGridHeight',simpleHeight);
		}
	});*/
	
	//노선보기 버튼
	$("#btn_show_route").click(function() {
		var row_id = $("#route_detail_list").jqGrid("getGridParam", "selrow");
		
		if (row_id == null) {
			showAlert("노선을 먼저 선택하세요.");
			return;
		}
		
		var row_data = $("#route_detail_list").jqGrid("getRowData", row_id);
		
		var params = {
				routeid  : row_data.routeid,
				nodegbcd : '2'
		}
		reloadGrid("#via_stop_list", "./route/selectViaNodeList.do", params, "resultList");
		inquiryRouteVtx(row_data.routeid);

		$("#tab_map").trigger("click");
	});
	
	//메인지도에 표시
	$("#btn_show_mainPage").click(function() {
		
		var rowid = $("#route_detail_list").getGridParam("selrow");
		if(rowid == null) {
			showAlert("목록에서 노선을 선택해 주세요.");
			return;
		}
		var rowData = $("#route_detail_list").jqGrid('getRowData', rowid);
		
		var obj = new Object();

		obj.view = "302";
		obj.code = "ROUTE";
		obj.id = rowData.routeid;
		
		window.opener.postMessage(obj, url);
	});
	
	//노선정보 탭 검색
	$("#btn_search").click(function() {
		loadGrid();
	});
	
	$("#input_searchWord").keydown(function(event){
		if(event.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	//경로정보 상세 탭 검색
	$("#btn_search2").click(function() {
		var word = $("#input_searchWord2").val();
		reloadGrid("#route_simple_list", "./route/selectRouteInfoList.do", {searchWord: word}, "resultList");
	});
	
	$("#input_searchWord2").keydown(function(event){
		if(event.keyCode == 13) {
			$("#btn_search2").trigger("click");
		}
	});
	
	$("#btn_clear").click(function() {
		$("#input_searchWord").val("");
		$("#btn_search").trigger("click");
	});
	
	$("#btn_clear2").click(function() {
		$("#input_searchWord2").val("");
		$("#btn_search2").trigger("click");
	});
	
	$("#btn_excel").click(function() {
		execlDownload();
	});

	$("#btn_first").click(function() {
		var rowData = $("#via_stop_list").jqGrid('getRowData', 1);
		selectedSeq = 1;
		setCenterPosition(rowData.lat, rowData.lng);
	});
	$("#btn_prev").click(function() {
		if(selectedSeq == 1) {
			showAlert("현재 경로의 시작 지점입니다.");
			return;
		}
		selectedSeq--;
		var rowData = $("#via_stop_list").jqGrid('getRowData', selectedSeq);
		setCenterPosition(rowData.lat, rowData.lng);
	});
	$("#btn_next").click(function() {
		var allData = $("#via_stop_list").jqGrid('getRowData');
		if(selectedSeq == allData.length) {
			showAlert("현재 경로의 마지막 지점입니다.");
			return;
		}
		selectedSeq++;
		var rowData = $("#via_stop_list").jqGrid('getRowData', selectedSeq);
		setCenterPosition(rowData.lat, rowData.lng);
	});
	$("#btn_last").click(function() {
		var allData = $("#via_stop_list").jqGrid('getRowData');
		selectedSeq = allData.length;
		var rowData = $("#via_stop_list").jqGrid('getRowData', selectedSeq);
		setCenterPosition(rowData.lat, rowData.lng);
	});
}

var models1 = [
   			{onlyView: true,
   			label:'버스회사',	    name:'compnm',    	 	index:'compnm',     	width: "100",   sorttype:"text",	    align:"center"},
   			{label:'노선 ID',	    name:'routeid',      	index:'routeid',    	width: "100",   sorttype:"number",	    align:"center"},
           	{label:'노선명',		name:'routeno',      	index:'routeno',    	width: "80",    sorttype:"text", 	    align:"center"},
           	{label:'노선유형',		name:'routetpcd',    	index:'routetpcd', 		width: "80",    sorttype:"text", 	    align:"center"},
           	{label:'노선설명',		name:'routedesc',    	index:'routedesc',  	width: "150",   sorttype:"text", 	    align:"left"},
           	{label:'정류장수',		name:'pass_bstopcnt',	index:'pass_bstopcnt',  width: "100",   sorttype:"number", 	    align:"center"},
           	{label:'노선거리(km)',	name:'routelen',		index:'routelen',  		width: "100",   sorttype:"number", 	    align:"center"},
           	{label:'굴곡도',		name:'routecurv',		index:'routecurv',  	width: "100",   sorttype:"number", 	    align:"center"},
           	{label:'공동배차여부',	name:'jointallocyn',	index:'jointallocyn',  	width: "100",   sorttype:"text", 	    align:"center"},
           	{label:'출발정류소',		name:'origin_bstopid',  index:'origin_bstopid', width: "180",   sorttype:"text", 	    align:"left"},
           	{label:'종료정류소',		name:'dest_bstopid',    index:'dest_bstopid',  	width: "180",   sorttype:"text", 	    align:"left"},
           	{label:'적용시작일',		name:'app_startdt',    	index:'app_startdt',  	width: "180",   sorttype:"number", 	    align:"center"},
           	{label:'적용종료일',		name:'app_enddt',    	index:'app_enddt',  	width: "180",   sorttype:"number", 	    align:"center"},
           	{label:'사용여부',		name:'useyn',       	index:'useyn',      	width: "80",    sorttype:"text",	    align:"center"},
           	{label:'면허버스 수',	name:'lic_buscnt',      index:'lic_buscnt',     width: "80",    sorttype:"number",	    align:"center"},
           	{label:'예비버스 수',	name:'rsv_buscnt',      index:'rsv_buscnt',     width: "80",    sorttype:"number",	    align:"center"},
           	{label:'운행거리(km)',	name:'rundist',      	index:'rundist',    	width: "80",    sorttype:"number", 		align:"center"},
           	{label:'운행시간(분)',	name:'runtm',        	index:'runtm',      	width: "80",    sorttype:"number",	    align:"center"},
           	{label:'운행횟수',	    name:'runcnt',       	index:'runcnt',     	width: "80",    sorttype:"number", 		align:"center"},
           	{label:'관활관청',		name:'admnm',        	index:'admnm',      	width: "90",    sorttype:"text", 	    align:"center"},
           	{label:'변경자',		name:'upd_userid',      index:'upd_userid',     width: "90",    sorttype:"text", 	    align:"center"},
           	{label:'변경일자',		name:'upddt',        	index:'upddt',      	width: "90",    sorttype:"number", 	    align:"center"}
           	];

var models2 = [  
   			{onlyView: true, 
   			 label:'노선 ID',		name:'routeid',     index:'routeid',    width: "100",   sorttype:"number",  align:"center"},
           	{label:'노선명',		name:'routeno',     index:'routeno',    width: "100",   sorttype:"text",  align:"center"},
           	{label:'회사명',		name:'compnm',   	index:'compnm',  	width: "100",   sorttype:"text",  align:"left"},
           	{label:'유형',		name:'routetpcd',   index:'routetpcd', 	width: "80",    sorttype:"text",  align:"center"},
           	];

var models3 = [  
   			{onlyView: true, 
   			 label:'순번',		name:'bstopseq',           index:'bstopseq',         width: "70",	sorttype:"number", align:"center"},
           	{label:'정류장 ID',		name:'nodeid',             index:'nodeid',           width: "80", 	sorttype:"number", align:"center"},
           	{label:'단축번호', 		name:'shortid',            index:'shortid',          width: "100",	sorttype:"number", align:"left"},
           	{label:'정류장명',  	name:'nodenm',             index:'nodenm',           width: "159",	sorttype:"text",   align:"left"},
           	{label:'유형',  		name:'nodegbcd',           index:'nodegbcd',         width: "100",	sorttype:"text",   align:"left"},
           	{label:'방향',	  	name:'dircd',              index:'dircd',            width: "50",	sorttype:"text",   align:"left"},
           	{label:'거리(m)',		name:'bstop_sectdist',     index:'bstop_sectdist',   width: "50", 	sorttype:"number", align:"center"},
           	{name:'lat',        index:'lat',               hidden:true},
           	{name:'lng',        index:'lng',               hidden:true}
           	];

function createGrid() {
	
	makeFilterGrid("#route_detail_list", models1, 110, "resultList", null, coComplete1, null);
	makeGrid("#route_simple_list", models2, 110, "resultList", null, onComplete2, onDblClick2);
	makeGrid("#via_stop_list",     models3, 110, "resultList", null, coComplete3, onDblClick3);
	
	$(window).bind('resize', function() {
		$("#route_detail_list").jqGrid('setGridHeight',$(".subcon_con").height() - 23);
		$("#route_detail_list").jqGrid('setGridWidth',$(".subcon_con").width());
		
		$("#route_simple_list").jqGrid('setGridHeight', simpleHeight);
		$("#route_simple_list").jqGrid('setGridWidth', 397);
		$("#via_stop_list").jqGrid('setGridHeight', viaHeight);
		$("#via_stop_list").jqGrid('setGridWidth', 397);
	}).trigger('resize');
	
	function onDblClick2(rowid) {
		var rowData = $("#route_simple_list").jqGrid('getRowData', rowid);
		$("#selected_route_info").text(rowData.routeno + "번 노선");

		var params = {
				routeid  : rowData.routeid,
				nodegbcd : '2'
		}
		reloadGrid("#via_stop_list", "./route/selectViaNodeList.do", params, "resultList");
		
		inquiryRouteVtx(rowData.routeid);
	}
	
	function onDblClick3(rowid) {
		var rowData = $("#via_stop_list").jqGrid('getRowData', rowid);
		selectedSeq = parseInt(rowid);
		setCenterPosition(rowData.lat, rowData.lng);
	}
	
	function coComplete1(data) {
		if (data.rows.length == 0) {
			return;
		}
		$("#route_detail_list").jqGrid("setSelection", 1, true);
	}
	
	function onComplete2(data) {
		if (data.rows.length == 0) {
			return;
		}
		$("#route_simple_list").jqGrid("setSelection", 1, true);
		var row_id = $("#route_simple_list").jqGrid("getGridParam", "selrow");
		var ondblClickRowHandler = $("#route_simple_list").jqGrid("getGridParam", "ondblClickRow");
		ondblClickRowHandler.call($("#route_simple_list")[0], row_id);
	}
	
	function coComplete3(data) {
		if (data.rows.length == 0) {
			return;
		}
		var allData = $("#via_stop_list").jqGrid('getRowData');
		var list = [];
			
		$.each(allData, function(index, value) {
			var param = {
					bstopid: value.nodeid,
					bstopnm: value.nodenm,
					short_bstopid: value.shortid,
					lat: value.lat,
					lng: value.lng
			}
			list.push(param);
		})
		drawStopMarkers(list, false);
		setCenterPosition(list[0].lat, list[0].lng);
	}
	
	loadGrid();
	reloadGrid("#route_simple_list", "./route/selectRouteInfoList.do", {searchWord: ""}, "resultList");
}

function loadGrid() {
	showLoader();
	
	$("#route_detail_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#route_detail_list").jqGrid("destroyFilterToolbar");
	$("#check_detail1").attr("checked",false);
	
	reloadGrid("#route_detail_list", "./route/selectRouteInfoList.do", {searchWord: $("#input_searchWord").val()}, "resultList");
}

function inquiryRouteVtx(routeId) {
	
	ajaxCall("./route/selectRouteVtxList.do", {route_id:routeId}, null, onSuccess1, null);
	
	function onSuccess1(data) {
		console.log(data);
		if(data && data.resultList) {
			drawRoutePolyline(data.resultList);
		}
	}
}

function execlDownload() {	
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.method = "POST";
	
	var tab_selector = $("#tab_list").attr("class") == "active" ? true : false;
	var data = null;

	if(tab_selector){
		if( 0 < $("#route_detail_list").getGridParam("reccount") ){
			form.action = "./route/excelRouteDetailList.do";
			data = $("#route_detail_list").getRowData();
		}			
		else {
			showAlert("조회된 노선이 없습니다.");	
			return;
		}		
	}
	else{
		if( 0 < $("#via_stop_list").getGridParam("reccount") ){
			form.action = "./route/excelExploreDownList.do";		
			data = $("#via_stop_list").getRowData();
		}			
		else {
			showAlert("조회된 정류장이 없습니다.");
			return;			
		}		
	}	
	
	var	para1 = document.createElement('INPUT');     
	var value = JSON.stringify(data);
	
	para1.type  = 'HIDDEN';
	para1.name  = 'json';
	para1.value = value;
	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}
