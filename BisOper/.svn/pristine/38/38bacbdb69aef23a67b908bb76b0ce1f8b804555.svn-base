
var busMapInterval = null;  //지도 
var busLocInterval = null;  //목록

var tab1_1Interval = null; //BIT 통신상태 현황
var tab1_2Interval = null; //데이터 베이스 현황
var tab1_3Interval = null; //서버 상태

var tab2_Interval = null;  //BIT 목록
var tab3_Interval = null;  //BIT 상태 이상

var selRoute = "";

$(document).ready(function(){
	setLoginRight();              //로그인 권한
	popupView();
	
	$("#map").width($("#map").parent().width());
	$("#map").height($("#map").parent().height());
	
	createMap("map", inquiryOverlay);
	resizeMap();
	
	createGrid();
	createSearchGrid();
	
	$(".map_con").click(function(e) {
		$(".contextMenu").css({top: e.clientY+"px", left: e.clientX+"px"});
	});
	
	initialize();
	
	// 메인화면 변경 이벤트 등록
	window.addEventListener('message', function(event) {
		
		var url = window.location.href;  
		if(url.indexOf(event.origin) == -1) { 
			return; 
		}
		messageCallback(event.data);
	}, false);
	
	setContextMenu();
	
	$("#btn_logout").click(function() {
		$("#logout").remove();
		var form = document.createElement("FORM");
		
		form.setAttribute("id", "logout");
		form.action = "./logout.do";
		form.method = "POST";
		form.submit();
	});
});

function popupView() {
	$("#btn_logView").click(function(){
		$("#pop_log_view").show();
	});
}


/**************************
 * message receive callback
 **************************/
function messageCallback(data) {
	
	//302-ROUTE
	switch (data.view) {
	case "302": //노선정보
		
		inquiryRouteVtx(data.id);
		setBusrouteInfo(data.id);
		
		selRoute = data.id;
		
		if($("#route_wrap").is(':visible')) {
			$("#map_wrap").removeClass();
			$("#map_wrap").addClass("map three");
			
		}else {
			$("#route_wrap").show();
			$("#map_wrap").removeClass();
			$("#map_wrap").addClass("map three");
		}
		$(window).trigger("resize");
		break;

	default:
		break;
	}
}
/************************
 * 선택 노선 정보 표출
 ************************/
function setBusrouteInfo(routeId) {

	var params = {
			routeid  : routeId,
			nodegbcd : ''
	}
	
	ajaxCall("./route/selectViaNodeList.do", params, null, onSuccessRoute, null);
	
	function onSuccessRoute(data) {
		
		var strTemp = "";
		var list = [];
		
		var routeInfo = data.resultList[0];
		$(".bus_green").text(routeInfo.routetpcd);
		$("#txt_routeno").text(routeInfo.routeno);
		$(".bus_stop_number").text(routeInfo.routeid);
		$(".bus_start").text(routeInfo.st_bstopnm);
		$(".bus_last").text(routeInfo.ed_bstopnm);
		
		$.each(data.resultList, function(index, value) {
			strTemp += "<tr id='"+value.pathseq+"'>";
			strTemp += "<td>"+value.pathseq+"</td>";
			strTemp += "<td>"+value.nodenm+"</td>";
			if(value.nodegbcd == "정류소") {
				strTemp += "<td><img src='./images/btn_1.png' alt='정류장'></td>";
			}else {
				strTemp += "<td><img src='./images/btn_4.png' alt='노드'></td>";
			}
			strTemp += "<td class='plate_no'></td>";
			strTemp += "<td>"+value.shortid+"</td>";
			strTemp += "<input type='hidden' id='lat' value='"+value.lat+"'>";
			strTemp += "<input type='hidden' id='lng' value='"+value.lng+"'>";
			strTemp += "</tr>";
			
			var param = {
					bstopid: value.nodeid,
					bstopnm: value.nodenm,
					short_bstopid: value.shortid,
					lat: value.lat,
					lng: value.lng
			}
			
			if(value.nodegbcd == "정류소") {
				list.push(param);
			}
		}); 
		
		var strDate = new Date().format("yy.MM.dd e HH:mm:ss");
		$("#txt_route_inquiry_time").text("위치갱신: "+strDate);
		
		drawStopMarkers(list, false);
		
		$("#via_stop_list").empty().append(strTemp);
		
		$("#via_stop_list tr").dblclick(function() {
			$("#via_stop_list tr").removeClass("selected");
			$(this).addClass("selected");
			var lat = $(this).find("#lat").val();
			var lng = $(this).find("#lng").val();
			
			if(lat == "" || lng == "") {
				showAlert("해당지점의 위치정보가 없습니다.");
				return;
			}
			
			setCenterPosition(lat, lng);
		});
		
		inquiryBusLoc(routeId);
	}
}

function inquiryBusLoc(routeId) {
	
	if(busLocInterval) clearInterval(busLocInterval);
	
	ajaxCall("./route/selectBusLocList.do", {route_id:routeId}, null, onSuccessBusLoc, null);

	busLocInterval = setInterval(function() {
		ajaxCall("./route/selectBusLocList.do", {route_id:routeId}, null, onSuccessBusLoc, null);
	}, 5000);
	
	function onSuccessBusLoc(data) {
		$("#txt_run_cnt").text(data.resultList.length+"대");
		
		$("#via_stop_list tr").find(".plate_no").text("");
		$.each(data.resultList, function(index, value) {
			$("#via_stop_list").find("#"+value.pathseq).find(".plate_no").text(value.carregno);
		});
		drawBusMarkers(data.resultList);
	}
}

/************************
 * 노선 버텍스 조회
 ************************/
function inquiryRouteVtx(routeId) {
	ajaxCall("./route/selectRouteVtxList.do", {route_id:routeId}, null, onSuccessVtx, null);
	
	function onSuccessVtx(data) { 
		if(data && data.resultList) {
			drawRoutePolyline(data.resultList);
		}
	}
}

/************************
 * map overlay 조회
 ************************/
function inquiryOverlay(zoom, bound) {
	
	if(zoom < 11) {
		if($("#btn_showStop").hasClass("btnSelected")) {
			hideMarkers("ALLSTOP");
		}
		if($("#btn_showBit").hasClass("btnSelected")) {
			hideMarkers("BIT");
		}
		if($("#btn_showNode").hasClass("btnSelected")) {
			hideMarkers("NODE");
		}
		var sel = $("#select_route_show_type option:selected").val();
		if(sel == "2") {
			hideMarkers("BUS");
		}
	}else {
		var params = {
				minLat : bound.getSW().lat(),
				maxLat : bound.getNE().lat(),
				minLng : bound.getSW().lng(),
				maxLng : bound.getNE().lng()
		}
		
		if($("#btn_showStop").hasClass("btnSelected")) {
			ajaxCall("./stop/selectMapStopList.do", params, null, onSuccessStop, null);
		}
		if($("#btn_showBit").hasClass("btnSelected")) {
			ajaxCall("./bit/selectMapBitList.do", params, null, onSuccessBit, null);
		}
		if($("#btn_showNode").hasClass("btnSelected")) {
			ajaxCall("./stop/selectMapNodeList.do", params, null, onSuccessNode, null);
		}
		var sel = $("#select_route_show_type option:selected").val();
		if(sel == "2") {
			ajaxCall("./route/selectMapBusList.do", {route_id:routeId}, null, onSuccessBusMap, null);
		}
		
	}
	
	
	function onSuccessStop(data) {
		if(data && data.resultList) {
			drawStopMarkers(data.resultList, true);
		}
	}
	
	function onSuccessBit(data) {
		if(data && data.resultList) {
			drawBitMarkers(data.resultList);
		}
	}
	
	function onSuccessNode(data) {
		if(data && data.resultList) {
			drawNodeMarkers(data.resultList);
		}
	}
	
	// zoom < 11 전체 정류장 숨김 
	/*.
	switch (type) {
	case "ALL":
		if(zoom < 11) {
			drawStopMarkers(null, true);
			drawNodeMarkers(null);
		}else {
			ajaxCall("./stop/selectMapStopList.do", params, null, onSuccessStop, null);
			ajaxCall("./stop/selectMapNodeList.do", params, null, onSuccessNode, null);
		}
		break;
	case "STOP":
		ajaxCall("./stop/selectMapStopList.do", params, null, onSuccessStop, null);
		break;
	case "NODE":
		ajaxCall("./stop/selectMapNodeList.do", params, null, onSuccessNode, null);
		break;
	}
	
	function onSuccessStop(data) {
		if(data && data.resultList) {
			drawStopMarkers(data.resultList, true);
		}
	}
	
	function onSuccessNode(data) {
		if(data && data.resultList) {
			drawNodeMarkers(data.resultList);
		}
	}*/
}

/************************
 * 버스 좌표 및 속도 정보 조회
 ************************/
function inquiryBusMapList(routeId) {
	ajaxCall("./route/selectMapBusList.do", {route_id:routeId}, null, onSuccessBusMap, null);
	
	function onSuccessBusMap(data) { 
		if(data && data.resultList) {
			drawBusMarkers(data.resultList);
		}
	}
}

/************************
 * 로그인 정보 및 메뉴 권한 설정
 ************************/
function setLoginRight() {
	var strDate = new Date().format("yy.MM.dd e HH:mm:ss");
	$("#login_info").text(USER_NAME + " " + strDate + " 접속");
	
	ajaxCall("./user/getMenuAuth.do", null, null, success, null);
	
	function success(data) {
		$.each(data.resultList, function (key, value) {
			if (value.read_authyn == 0) {
				$("#" + value.menuid).hide();
			}
		})
	}
}

/*********************
 * control event regist
 ********************/
function initialize() {

	$("#nav_wrap li").click(function() {
		var id = $(this).attr("id");
		if(id == "btn_manage") {
			setTimeout(function(){
				$("#bit_com_state_list").jqGrid('setGridHeight', $("#bit_com_state_wrap").height());
//				$("#bit_com_state_list").jqGrid('setGridWidth', $("#bit_com_state_wrap").width());
			}, 10);
			
		}else if(id == "btn_list") {
			setTimeout(function(){
				$("#bit_list").jqGrid('setGridHeight', $("#bit_wrap").height()-23); 
			}, 10);
			
		}else {
			setTimeout(function(){
				$("#bit_fault_list").jqGrid('setGridHeight', $("#bit_fail_wrap").height()-22);
			}, 10);
		}
	});

	$("#search_wrap li").click(function() {
		var id = $(this).attr("id");
		if(id == "btn_stop") {
			setTimeout(function(){
				$("#stop_search_list").jqGrid('setGridHeight', $("#stop_search_wrap").height()-22);
			}, 10);
		}else if(id == "btn_route") {
			setTimeout(function(){
				$("#route_search_list").jqGrid('setGridHeight', $("#route_search_wrap").height()-22);
			}, 10);
		}else {
			setTimeout(function(){
				$("#bit_search_list").jqGrid('setGridHeight', $("#bit_search_wrap").height()-22);
			}, 10);
		}
	});
	
	//정류장보기
	$("#btn_showStop").click(function() {
		if($(this).hasClass("btnSelected")) {
			$(this).removeClass();
			hideMarkers("ALLSTOP");
		}else {
			$("#btn_showBit").removeClass();
			hideMarkers("BIT");
			
			$(this).addClass("btnSelected");
			getMap().trigger("bounds_changed");
		}
	});
	//노선 정류장 보기
	/*$("#btn_showRouteStop").click(function() {
		if($(this).hasClass("btnSelected")) {
			$(this).removeClass();
//			hideMarkers("BIT");
		}else {
			$(this).addClass("btnSelected");
			getMap().trigger("bounds_changed");
//			showMarkers("BIT");
		}
	});*/
	//bit 보기
	$("#btn_showBit").click(function() {
		if($(this).hasClass("btnSelected")) {
			$(this).removeClass();
			hideMarkers("BIT");
		}else {
			$("#btn_showStop").removeClass();
			hideMarkers("ALLSTOP");
			
			$(this).addClass("btnSelected");
			getMap().trigger("bounds_changed");
		}
	});
	//버스보기
	$("#select_route_show_type").change(function() {

		if(busMapInterval) clearInterval(busMapInterval);
		var selVal = $(this).find("option:selected").val();
		//1:노선버스, 2:전체버스, 3:표시안함
		switch (selVal) {
		case "1":
			if(selRoute == "") {
				showAlert("선택된 노선이 없습니다.");
				return;
			}
			inquiryBusLoc(selRoute);
			break;
		case "2":
			inquiryBusMapList();
			busMapInterval = setInterval(function(){inquiryBusMapList();}, 5000);
			break;
		case "3":
			if(busLocInterval) clearInterval(busLocInterval);
			hideMarkers("BUS");
			break;
		}
		
	});
	//노드 보기
	/*$("#btn_showNode").click(function() {
		if($(this).hasClass("btnSelected")) {
			$(this).removeClass();
			hideMarkers("NODE");
		}else {
			$(this).addClass("btnSelected");
			getMap().trigger("bounds_changed");
		}
	});*/
	//돌발지점 표시
	/*$("#btn_showInci").click(function() {
		if($(this).hasClass("btnSelected")) {
			$(this).removeClass();
//			hideMarkers("BIT");
		}else {
			$(this).addClass("btnSelected");
//			showMarkers("BIT");
		}
	});*/
	//노선지우기
	$("#btn_clearRoute").click(function() {
		showConfirmDlg("현재 표출된 노선을 지도에서 지우시겠습니까?", clearRouteInfo);
	});
	
	//현재노선 지우기
	$("#btn_clearMap").click(function() {
		$("#btn_clearRoute").trigger("click");
	});
	
	//노선 레이어 닫기
	$("#btn_close1").click(function() {
		$("#route_wrap").hide();
		$("#map_wrap").removeClass();
		$("#map_wrap").addClass("map two_present");
		$(window).trigger("resize");
	});
	
	//bit 목록 검색어 입력 
	$("#search_word1").keydown(function(event){
		if(event.keyCode == 13) $("#search_btn1").trigger("click");
	});
	
	$("#search_btn1").click(function() {
		reloadGrid("#bit_list", "./bit/selectBitList.do", {searchWord : $("#search_word1").val()}, "resultList");
	});
	
	//obe상태 목록 검색어 입력 
	/*$("#search_word2").keydown(function(event){
		if(event.keyCode == 13) $("#search_btn2").trigger("click");
	});*/
	
	$("#search_btn2").click(function() {
		reloadGrid("#obe_list", "./obe/selectObeStateList.do", {searchWord : $("#search_word2").val()}, "resultList");
	});
	
	//pop 이동버튼
	$("#btn_move_stop").click(function() {
		setCenterPosition($("#sel_lat").val(), $("#sel_lng").val());
	});
	
	//pop 정류장 상세
	$("#btn_stop_detail").click(function() {
		var id = $("#sel_stop_id").val();
		openMenuWindow('v301.view', id);
	});
	
	
	//통합검색 버튼
	$("#btn_search").click(function() {
		var word = $("#input_total_search").val();
		
		if(word == "" || word.length == 0) {
			showAlert("검색어를 입력하세요.");
			$("#input_total_search").focus();
			return;
		}
		$(".serch_result").show();
		$("#search_wrap").find("#btn_stop").trigger("click");
		
		inquirySearchResult($("#input_total_search").val());
	});
	
	$("#input_total_search").keydown(function(event){
		if(event.keyCode == 13) $("#btn_search").trigger("click");
	});
	
	$("#btn_close_search").click(function() {
		$(".serch_result").hide();
	});
	
	/*************
	 * 새로고침
	 *************/
	//서버상태 
	$("#btn_refresh_servrStat").click(function() {
		intervalServerStat();
	});
	
	//bit 목록
	$("#btn_refresh_bit_list").click(function() {
		intervalBitList();
	});
	
	$("#btn_refresh_bit_table").click(function() {
		intervalBitCommStat();
	});
	
	//bit 상태이상 상태이상 상세 목록 
	$("#btn_refresh_fault_list, #btn_refresh_fault_table").click(function() {
		intervalBitFaultList();
	});
	
}

var serverStatInterval = null;
function intervalServerStat() {
	if(serverStatInterval) clearInterval(serverStatInterval);
	reloadGrid("#server_status_list", "./sys/selectServerStateList.do", null, "resultList"); //서버 상태
	
	serverStatInterval = setInterval(function(){
		reloadGrid("#server_status_list", "./sys/selectServerStateList.do", null, "resultList"); //서버 상태
	}, 60 * 1000);
}

function intervalBitCommStat() {
	if(tab1_1Interval) clearInterval(tab1_1Interval);
	reloadGrid("#bit_com_state_list", "./sys/selectBitServerStatList.do", null, "resultList"); //통신 현황
	tab1_1Interval = setInterval(function(){
		reloadGrid("#bit_com_state_list", "./sys/selectBitServerStatList.do", null, "resultList"); //통신 현황
	}, 60 * 1000);
}

function intervalDbStat() {
	if(tab1_2Interval) clearInterval(tab1_2Interval);
	inquiryTableSpaceList();
	tab1_2Interval = setInterval(function(){
		inquiryTableSpaceList()
	}, 5 * 60 * 1000);
}

function intervalBitList() {
	if(tab2_Interval) clearInterval(tab2_Interval);
	reloadGrid("#bit_list", "./bit/selectBitList.do", {searchWord : $("#search_word1").val()}, "resultList"); //BIT 목록
	tab2_Interval = setInterval(function(){
		reloadGrid("#bit_list", "./bit/selectBitList.do", {searchWord : $("#search_word1").val()}, "resultList"); //BIT 목록
	}, 60 * 1000);
}

function intervalBitFaultList() {
	
	var opt = $("#select_fault_kind option:selected").val();
	if(tab3_Interval) clearInterval(tab3_Interval);
	reloadGrid("#bit_fault_list", "./bit/selectBitFaultList.do", {opt: opt}, "resultList"); //BIT 상태이상
	tab3_Interval = setInterval(function(){
		var opt = $("#select_fault_kind option:selected").val();
		reloadGrid("#bit_fault_list", "./bit/selectBitFaultList.do", {opt: opt}, "resultList"); //BIT 상태이상
	}, 30 * 1000);
}




function clearRouteInfo() {
	selRoute = "";
	if(busLocInterval) clearInterval(busLocInterval);
	$("#btn_close1").trigger("click");
	clearOverlay();
}

function hideArrivalInfo() {
	$("#stop_info_wrap").hide();
}

/**************************
 * context menu setting
 **************************/
function setContextMenu() {
	//BIT marker 
	$.contextMenu({
		selector: ".bitMenu", 
		trigger: "left",
        callback: function(key, options) {
        	var id = options.$trigger.attr("id");
        	var lat = options.$trigger.attr("lat");
        	var lng = options.$trigger.attr("lng");
        	if(id != null && id != "") inquiryBit(key, id, lat, lng);
        },
        items: {
            "arrival"       : {name: "도착예정정보 보기"},  
//            "sep1"          :        "---------",
//            "bit_info"      : {name: "BIT 정보 보기"},
//            "bit_monitor"   : {name: "모니터링 화면 보기"},
//            "bit_control"   : {name: "BIT 제어"}
        }
    });
	
	function inquiryBit(key, id, lat, lng) {
		switch (key) {
		case "arrival":
			showStopInfoPop(id, lat, lng);
			break;
		case "bit_info":
			openMenuWindow('v501.view');  
			break;
		case "bit_monitor":
			openMenuWindow('v504.view');  
			break;
		case "bit_control":
			openMenuWindow('v503.view');  
			break;
		default:
			break;
		}
	}
}

function showStopInfoPop(id, lat, lng) {
	$("#sel_stop_id").val(id);
	$("#sel_lat").val(lat);
	$("#sel_lng").val(lng);

	reloadGrid("#via_route_list", "./stop/selectViaRouteList.do", {bstopid: id}, "resultList");
	reloadGrid("#arrival_info_list", "./stop/selectArrivalInfoList.do", {bstopid: id}, "resultList");
	
	$("#stop_info_wrap").show();
	$(window).trigger('resize');
}

/**************************
 * grid model
 **************************/
//BIT 통신상태 현황
var models1 = [
//			{label:'서버상태',		name:'server_state',      index:'server_state',       width: "63", 	align:"center", formatter : setStatusText},
        	{label:'서버명',		name:'server_name',       index:'server_name',        width: "108",	align:"center"},
        	{label:'총개수',		name:'total_cnt',             index:'total_cnt',              width: "74", 	align:"center"},
        	{label:'정상',		name:'conn_cnt',                index:'conn_cnt',                 width: "64", 	align:"center"},
        	{label:'통신장애',		name:'fail_cnt',               index:'fail_cnt',                width: "64", 	align:"center"}
        	];
//BIT 목록
var models2 = [
   			{label:'통신상태',		name:'comm_statyn',       index:'comm_statyn',        width: "60", 	align:"center", formatter : setStatusText},
           	{label:'관리번호',		name:'bitid',             index:'bitid',              width: "60", 	align:"center", sorttype: "number"},
           	{label:'단축번호',		name:'short_bstopid',     index:'short_bstopid',      width: "60", 	align:"center", sorttype: "number"},
           	{label:'정류장명',		name:'bstopnm',           index:'bstopnm',            width: "120", align:"left"},
           	{label:'BIT종류',		name:'cdnm',              index:'cdnm',               width: "110", 	align:"center"},
//           	{label:'모바일',		name:'service_id',        index:'service_id',         width: "60", 	align:"center"},
//           	{label:'사업명',		name:'business_title',    index:'business_title',     width: "80", 	align:"center"},
//           	{label:'접속서버명',		name:'system_name',       index:'system_name',        width: "80", 	align:"center"},
//           	{label:'제조사',		name:'company_name',      index:'company_name',       width: "80", 	align:"center"},
           	{label:'최종 접속시간',   name:'colldt',            index:'colldt',             width: "120", align:"center"},
           	{label:'접속서버명',		name:'server_name',       index:'server_name',        width: "110", align:"center"},
//           	{label:'설명',        name:'data_explain',      index:'data_explain',       width: "110",	align:"center"},
           	{label:'lat',       name:'lat',      		  index:'lat',       hidden: true},
           	{label:'lng',       name:'lng',     		  index:'lng',       hidden: true},
           	{label:'stat',       name:'statyn',     		  index:'statyn',       hidden: true}
           	];
//OBE 상태
var models3 = [
  			{label:'연결상태',		name:'conn_status',          index:'conn_status',          width: "60", 	align:"center", formatter : setCommStatusText},
          	{label:'운행여부',		name:'operation_status',     index:'operation_status',     width: "60", 	align:"center", formatter : setDrvStatusText},
          	{label:'차량번호',		name:'plate_no',             index:'plate_no',             width: "90",     align:"center"},
          	{label:'펌웨어버전',		name:'firmware_version',     index:'firmware_version',     width: "110", 	align:"center", formatter : setFirmVerText},
          	{label:'기반정보버전',	name:'info_version',         index:'info_version',         width: "110", 	align:"center", formatter : setInfoVerText},
          	{label:'예약정보버전',	name:'info_reserve_version', index:'info_reserve_version', width: "110", 	align:"center", formatter : setReserveVerText},
          	{label:'설정버전',		name:'config_version',       index:'config_version',       width: "80", 	align:"center", formatter : setSettingVerText},
          	{label:'최종갱신시간',	name:'update_date',          index:'update_date',          width: "120", 	align:"center"},
          	{label:'veh_id',    name:'veh_id',      		 index:'veh_id',    hidden: true},
          	{label:'lat',       name:'lat',      		     index:'lat',       hidden: true},
           	{label:'lng',       name:'lng',     		     index:'lng',       hidden: true}
          	];  
//BIT 상태이상 목록
var models4 = [
 			{label:'BIT ID',    name:'bitid',         index:'bitid',              width: "70",   	align:"center"},
 			{label:'단축 ID',     name:'short_bstopid', index:'short_bstopid',      width: "70",   	align:"center"},
         	{label:'지점명',		name:'bstopnm',       index:'bstopnm',            width: "110", 	align:"left"},
//         	{label:'모바일ID',		name:'service_id',    index:'service_id',         width: "90",      align:"center"},
         	{label:'상태이상 내용',   name:'fault',         index:'fault',              width: "80",  	align:"center"},
         	{label:'BIT 종류',	name:'cdnm',          index:'cdnm',               width: "125", 	align:"center"},
         	{label:'최종갱신시간',	name:'colldt',        index:'colldt',             width: "125", 	align:"center"}
         	];

var models5 = [
			{label:'발생시간',     name:'bit_id',         index:'bit_id',             width: "70",      align:"center"},
        	{label:'돌발종류',     name:'stop_name',      index:'stop_name',          width: "90",      align:"center"},
        	{label:'차량번호',     name:'service_id',     index:'service_id',         width: "90",      align:"center"},
        	{label:'노선명',      name:'reason',         index:'reason',             width: "110",     align:"center"},
        	{label:'지점명',      name:'bit_type_name',  index:'bit_type_name',      width: "110",     align:"center"},
        	{label:'위도',       name:'update_dt',      index:'update_dt',          width: "120",     align:"center"},
        	{label:'경도',       name:'bit_type_name',  index:'bit_type_name',      width: "110",     align:"center"},
        	{label:'노선ID',     name:'bit_type_name',  index:'bit_type_name',      width: "110",     align:"center"}
        	];

//서버상태

var models6 = [
            {label:'상태',        name:'server_state',     index:'server_state',      width: "80",      align:"center", formatter : setStatusText},
           	{label:'서버명',       name:'server_name',     index:'server_name',      width: "100",      align:"center"},
           	{label:'최종 업데이트 시간', name:'update_dt',       index:'update_dt',       width: "150",     align:"center"},
           	{label:'id',        name:'system_id',        index:'system_id',       hidden: true}
           	];
//경유노선 
var models7 = [ // 429
   			{label:'노선ID',   name:'routeid',       index:'routeid',         width: "100",      align:"center"},
           	{label:'노선명',    name:'routeno',       index:'routeno',         width: "90",       align:"center"},
           	{label:'노선설명',   name:'routedesc',     index:'routedesc',       width: "200",      align:"left"},
           	{label:'stop_id',     name:'bstopid',        index:'bstopid',       hidden: true},
           	{label:'service_id',  name:'short_bstopid',  index:'short_bstopid', hidden: true},
           	{label:'stop_name',   name:'bstopnm',        index:'bstopnm',       hidden: true}
           	];

//도착예정정보
var models8 = [ 
   			{label:'노선명',     name:'routeno',       index:'routeno',        width: "55",       align:"center"},
           	{label:'차량번호',    name:'carregno',      index:'carregno',       width: "85",      align:"center"},
           	{label:'남은지점',    name:'rest_bstopcnt', index:'rest_bstopcnt',  width: "55",       align:"center"},
           	{label:'예정시간',    name:'arrplantm',     index:'arrplantm',      width: "65",       align:"center", formatter : setRemain},
           	{label:'최근정류장',   name:'cur_bstopnm',   index:'cur_bstopnm',    width: "120",      align:"left"},
           	{label:'방향',      name:'dircd',         index:'dircd',           width: "120",      align:"left"},
           	{label:'노선ID',    name:'routeid',       index:'routeid',         width: "75",      align:"center"}
           	];

//정류장
var models_r1 = [
    			{label:'정류소 ID',     name:'bstopid',    index:'bstopid',     width: "70",   	align:"center"},
            	{label:'정류장명',		name:'bstopnm',    index:'bstopnm',     width: "120", 	align:"left"},
            	{label:'위도',		name:'lat',        index:'lat',         width: "90",    align:"left"},
            	{label:'경도',        name:'lng',        index:'lng',         width: "90", 	align:"left"}
            	];
//노선
var models_r2 = [
    			{label:'노선 ID',     name:'routeid',         index:'routeid',          width: "90",   	align:"center"},
            	{label:'노선번호',		name:'routeno',         index:'routeno',          width: "70", 	    align:"center"},
            	{label:'기점',		name:'origin_bstopid',  index:'origin_bstopid',   width: "100",      align:"left"},
            	{label:'종점',        name:'dest_bstopid',    index:'dest_bstopid',     width: "100", 	align:"left"}
            	];
//BIT
var models_r3 = [
    			{label:'BIT ID',    name:'bitid',        index:'bitid',             width: "90",   	align:"center"},
    			{label:'단축 ID',     name:'short_bstopid',index:'short_bstopid',     width: "90",   	align:"center"},
            	{label:'정류장ID',		name:'bstopid',      index:'bstopid',          width: "90", 	align:"center"},
            	{label:'정류장명칭',		name:'bstopnm',      index:'bstopnm',         width: "110",      align:"left"},
            	{label:'위도',        name:'lat',       index:'lat',             width: "110", 	align:"left"},
            	{label:'경도',        name:'lng',       index:'lng',             width: "110", 	align:"left"}
            	];
//버스
var models_r4 = [
    			{label:'버스ID',     name:'bit_id',        index:'bit_id',             width: "70",   	align:"center"},
            	{label:'OBE',		name:'stop_name',     index:'stop_name',          width: "90", 	    align:"left"},
            	{label:'차량번호',		name:'service_id',    index:'service_id',         width: "90",      align:"left"},
            	{label:'상태',        name:'reason',        index:'reason',             width: "110", 	align:"left"},
            	{label:'운행노선',        name:'reason',        index:'reason',             width: "110", 	align:"left"},
            	{label:'위도',        name:'reason',        index:'reason',             width: "110", 	align:"left"},
            	{label:'경도',        name:'reason',        index:'reason',             width: "110", 	align:"left"}
            	];

function setRemain(cellValue, opts, rowdata){ 
	
	var min = parseInt(Number(cellValue) / 60);
	var sec = parseInt(Number(cellValue) % 60);
	
	if(min > 0 && sec > 0) {
		return min+"분 "+ sec+"초"; 
	}else if(min > 0 && sec == 0) {
		return min+"분";
	}else {
		return sec+"초";
	}
}

function setStatusText(cellValue, opts, rowdata){ 
    switch(cellValue){
    	case "0" : 
    		return "<span style='color:"+COLOR_RED+";'>장애</span>"; 
    		break; 
        case "1": 
            return "<span style='color:"+COLOR_GREEN+";'>정상</span>";
            break;
        default:
        	return "<span style='color:"+COLOR_RED+";'>장애</span>";
            break; 
    } 
}

function setCommStatusText(cellValue, opts, rowdata){ 
    switch(cellValue){
    	case "0" : 
    		return "<span style='color:"+COLOR_RED+";'>끊김</span>"; 
    		break; 
        case "1": 
            return "<span style='color:"+COLOR_GREEN+";'>정상</span>"; 
            break; 
        default:
        	return "<span style='color:"+COLOR_RED+";'>끊김</span>";
            break; 
    } 
}

function setDrvStatusText(cellValue, opts, rowdata){ 
    switch(cellValue){
    	case "0" : 
    		return "<span style='color:"+COLOR_RED+";'>운행종료</span>"; 
    		break; 
        case "1": 
            return "<span style='color:"+COLOR_GREEN+";'>운행중</span>"; 
            break;
        default:
        	return cellValue;
    } 
}

function setFirmVerText(cellValue, opts, rowdata){ 
	if(cellValue == "") {
		return "<span style='color:"+COLOR_RED+";'>확인불가</span>";
	}else if(Number(cellValue) < Number(FIRMWARE_VER)) {
		return "<span style='color:"+COLOR_YELLOW+";'>업데이트 필요</span>";
	}else {
		return "<span style='color:"+COLOR_GREEN+";'>최신버전</span>";
	}
}

function setInfoVerText(cellValue, opts, rowdata){ 
	if(cellValue == "") {
		return "<span style='color:"+COLOR_RED+";'>확인불가</span>";
	}else if(Number(cellValue) < Number(INFO_VER)) {
		return "<span style='color:"+COLOR_YELLOW+";'>업데이트 필요</span>";
	}else {
		return "<span style='color:"+COLOR_GREEN+";'>최신버전</span>";
	}
}

function setReserveVerText(cellValue, opts, rowdata){ 
	if(cellValue == "") {
		return "<span style='color:"+COLOR_RED+";'>확인불가</span>";
	}else if(Number(cellValue) < Number(RESERVE_VER)) {
		return "<span style='color:"+COLOR_YELLOW+";'>업데이트 필요</span>";
	}else {
		return "<span style='color:"+COLOR_GREEN+";'>최신버전</span>";
	}
}

function setSettingVerText(cellValue, opts, rowdata){ 
	if(Number(cellValue) == 0) return "";
	else return cellValue;
}


function createGrid() {
	
	//BIT 통신상태 현황
	makeGrid("#bit_com_state_list", models1, 110, "resultList", onSelected1, onCompleted1);
	//서버상태
	makeGrid("#server_status_list", models6, 495, "resultList", null, null);
	//BIT 목록
	makeGrid("#bit_list", models2, 495, "resultList", null, onCompleted3, dblClick3);
	//OBE 상태
//	makeGrid("#obe_list", models3, 495, "resultList", null, onCompleted4, dblClick4);
	//BIT 상태이상 목록
	makeGrid("#bit_fault_list", models4, 200, "resultList", null, onCompleted6);
	
	//경유노선 정보
	makeGrid("#via_route_list", models7, 200, "resultList", null, onCompleted5, dblClick5);
	//도착 예정 정보
	makeGrid("#arrival_info_list", models8, 200, "resultList", null, null);
	
	function onSelected1(rowid) {
		var rowData = $("#bit_com_state_list").jqGrid('getRowData', rowid);
		$("#totalBit").text(rowData.total_cnt);
		$("#normalBit").text(rowData.conn_cnt);
		$("#errorBit").text(rowData.fail_cnt);
		
	}
	function onCompleted1(data) {
		$('#bit_com_state_list').jqGrid('setSelection', 1, true);
		$("#bit_com_state_time").text(new Date().format("yyyy-MM-dd HH:mm:ss"));
	}
	function onCompleted3(data) {
		
		var colData = $("#bit_list").jqGrid("getRowData");
		
		var errCnt = 0;
		$.each(colData, function(index, value) {
			if((value.statyn) != '1') {
				errCnt++;
			}
		});
		$("#bit_status_text span:eq(0)").text("전체 : "+colData.length);
		$("#bit_status_text span:eq(1)").text("정상 : "+(colData.length-errCnt));
		$("#bit_status_text span:eq(2)").text("통신장애 : "+errCnt);
	}
	
	function onCompleted4(data) {
		var colData = $("#obe_list").jqGrid("getRowData");
		var errCnt = 0;
		$.each(colData, function(index, value) {
			if(value.conn_status.indexOf("정상") == -1) errCnt++;
			
		});
		$("#bit_status_text span:eq(0)").text("전체 : "+colData.length+"대");
		$("#bit_status_text span:eq(1)").text("연결 : "+(colData.length-errCnt)+"대");
		$("#bit_status_text span:eq(2)").text("미접속 : "+errCnt+"대");
	}
	
	function onCompleted5(data) {
		
		var rowData = $("#via_route_list").jqGrid('getRowData', 1);
		if(rowData) {
			$("#txt_stop_name").text(rowData.bstopnm);
			$("#txt_std_id").text("· 표준: "+rowData.bstopid);
			$("#txt_service_id").text("· 모바일: "+rowData.short_bstopid);
//			$("#txt_stop_type").text(rowData.stop_type);
		}
	}
	
	function onCompleted6(data) {
		var colData = $("#bit_fault_list").jqGrid("getRowData");
		var comm = 0, door = 0, pwr = 0, disp1 = 0, disp2 = 0;
		$.each(colData, function(index, value) {
			
			if     (value.fault == "통신이상") comm++;
			else if(value.fault == "도어열림") door++;
			else if(value.fault == "전원이상") pwr++;
			else if(value.fault == "화면1꺼짐") disp1++;
			else if(value.fault == "화면2꺼짐") disp2++;
		});
		
		$("#chart_fault tr:eq(0) td").text(comm+"");
		$("#chart_fault tr:eq(1) td").text(door+"");
		$("#chart_fault tr:eq(2) td").text(pwr+"");
		$("#chart_fault tr:eq(3) td").text(disp1+"");
		$("#chart_fault tr:eq(4) td").text(disp2+"");
		
		var strDate = new Date().format("yyyy.MM.dd HH:mm");
		$("#txt_fault_date").text(strDate);
	}
	
	
	function dblClick3(rowid) {
		var rowData = $("#bit_list").jqGrid('getRowData', rowid);
		setCenterPosition(rowData.lat, rowData.lng); 
	}
	
	function dblClick4(rowid) {
		var rowData = $("#obe_list").jqGrid('getRowData', rowid);
		var marker = BUS_MAP.get(rowData.veh_id);
		if(marker) {
			var pos = marker.getPosition();
			setCenterPosition(pos.lat(), pos.lng());
		}else {
			setCenterPosition(rowData.lat, rowData.lng); 
		}
	}
	
	function dblClick5(rowid) {
		var rowData = $("#via_route_list").jqGrid('getRowData', rowid);
		var param = {
				view : "302",
				id :rowData.routeid
		}
		messageCallback(param);
	}
	
	$(window).bind('resize', function() {
		
		$("#via_route_list").jqGrid('setGridHeight', $(".main_active_con2").height() - 55);
		$("#via_route_list").jqGrid('setGridWidth', $(".main_active_con2").width() - 3);
		
		$("#arrival_info_list").jqGrid('setGridHeight', $(".main_active_con3").height() - 55);
		$("#arrival_info_list").jqGrid('setGridWidth', $(".main_active_con3").width() - 3);
		
		
		$("#bit_com_state_list").jqGrid('setGridHeight', $("#bit_com_state_wrap").height());
		
		$("#server_status_list").jqGrid('setGridHeight', $("#server_wrap").height());
		$("#server_status_list").jqGrid('setGridWidth', $("#server_wrap").width());
		
	}).trigger('resize');
	
	//bit 서버별 상태
	intervalBitCommStat();
	
	//서버 상태 조회
	intervalServerStat();

	//데이터베이스 사용량 조회
//	intervalDbStat();

	//BIT 목록
	intervalBitList();
	
	//BIT 상태이상
	intervalBitFaultList();
	
}

function createSearchGrid() {
	
	makeGrid("#stop_search_list", models_r1, 110, "resultList", null, onStopSearched, onStopDblClick);
	makeGrid("#route_search_list", models_r2, 110, "resultList", null, onRouteSearched, onRouteDblClick);
	makeGrid("#bit_search_list", models_r3, 110, "resultList", null, onBitSearched, onBitDblClick);
//	makeGrid("#veh_search_list", models_r4, 110, "resultList", null, null, null);
	
	function onStopDblClick(rowid) {
		var rowData = $("#stop_search_list").jqGrid('getRowData', rowid);
		setCenterPosition(rowData.lat, rowData.lng); 
	}
	
	function onRouteDblClick(rowid) {
		var rowData = $("#route_search_list").jqGrid('getRowData', rowid);
		var param = {
				view : "302",
				id :rowData.routeid
		}
		messageCallback(param);
	}
	
	function onBitDblClick(rowid) {
		var rowData = $("#bit_search_list").jqGrid('getRowData', rowid);
		setCenterPosition(rowData.lat, rowData.lng);
	}
	
	function onStopSearched(data) {
		$("#txt_stop_search_cnt").text($("#stop_search_list").getGridParam("records"));
	}
	
	function onRouteSearched(data) {
		$("#txt_route_search_cnt").text($("#route_search_list").getGridParam("records"));
	}
	
	function onBitSearched(data) {
		$("#txt_bit_search_cnt").text($("#bit_search_list").getGridParam("records"));
	}
	
}

function inquirySearchResult(word) {
	reloadGrid("#stop_search_list", "./stop/selectStopList.do", {searchWord : word}, "resultList"); 
	reloadGrid("#route_search_list", "./route/selectRouteInfoList.do", {searchWord : word}, "resultList"); 
	reloadGrid("#bit_search_list", "./bit/selectBitList.do", {searchWord : word}, "resultList"); 
//	makeGrid("#stop_search_list", models_r1, 110, "resultList", null, null, null);
//	makeGrid("#route_search_list", models_r2, 110, "resultList", null, null, null);
//	makeGrid("#bit_search_list", models_r3, 110, "resultList", null, null, null);
//	makeGrid("#veh_search_list", models_r4, 110, "resultList", null, null, null);
//	reloadGrid("#veh_search_list", "./obe/selectObeStateList.do", {searchWord : word}, "resultList");  //OBE 상태
}

/***
 * 테이블 스페이스 조회
 **/
function inquiryTableSpaceList() {
	ajaxCall("./sys/selectTableSpaceList.do", null, null, onSuccess, null);
	
	function onSuccess(data) {
		if (data && data.resultList){
			var strTemp = "";
			$.each(data.resultList, function(index, value){
				strTemp += "<li>";
				strTemp += "<p>"+value.tablespace_name+"</p>";
			
				var used = parseFloat(value.used_size);
				var tot = parseFloat(value.current_size);
				var per = parseInt(100 * (used / tot));
				
				if(value.size_warning == "0") {
					strTemp += "<p class='progress'><span class='pr_number'>"+per+"%</span><span class='pr_bar_green' style='width:"+per+"%';></span></p>";
					strTemp += "<p class='green'>정상</p>";
				}else {
					strTemp += "<p class='progress'><span class='pr_number'>"+per+"%</span><span class='pr_bar_red' style='width:"+per+"%';></span></p>";
					strTemp += "<p class='red'>위험</p>";
				}
				strTemp +="<p class='unt'>"+value.current_usage+"</p>";
				strTemp += "</li>";
			});
			$("#tablespace_list").empty().append(strTemp);
			$("#usge_ck_time").text(new Date().format("yyyy-MM-dd HH:mm:ss"));
		}
	}
}