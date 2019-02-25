
var SEL_ID;
var busInterval = null;
var trafficInterval = null;
var busDlg;
var stopDlg;

$(document).ready(function(){
	setDialog();
	appendLoader("조회중..");
	initGrid();
	initEvent();	
});

var models = [
        {label:"노선 ID",			name:"routeid",			index:"routeid",			width: "60", 	align:"center", sorttype:"text"},
        {label:"노선번호",		    name:"routeno",		    index:"routeno",		    width: "47", 	align:"center", sorttype:"text"},
        {label:"운수사",			name:"compnm", 			index:"compnm",             width: "80", 	align:"left",   sorttype:"text"},
        {label:"유형",			name:"routetpcd", 	    index:"routetpcd",	        width: "50", 	align:"center", sorttype:"text"}
        ];

var models_stoppop1 = [
		{label:"노선 ID",			name:"routeid",			index:"routeid",			width: "65", 	align:"center", sorttype:"text"},
		{label:"노선번호",		    name:"routeno",		    index:"routeno",		    width: "80", 	align:"center", sorttype:"text"}
        ];
var models_stoppop2 = [
        {label:"제공시간",			name:"procdt",			index:"procdt",				width: "60", 	align:"center", sorttype:"text"},
		{label:"노선번호",		    name:"routeno",		    index:"routeno",		    width: "60", 	align:"center", sorttype:"text"},
		{label:"차량번호",			name:"carno",			index:"carno",				width: "80", 	align:"center", sorttype:"text"},
		{label:"잔여노드수",		    name:"rest_nodecnt",	index:"rest_nodecnt",		width: "70", 	align:"center", sorttype:"text"},
		{label:"잔여정류소",			name:"rest_bstopcnt",	index:"rest_bstopcnt",		width: "70", 	align:"center", sorttype:"text"},
		{label:"도착시간",		    name:"arrplantm",		index:"arrplantm",		    width: "80", 	align:"center", sorttype:"text"},
		{label:"막차여부",			name:"lastbusyn",		index:"lastbusyn",			width: "60", 	align:"center", sorttype:"text"},
		{label:"안내기ID",		    name:"bitid",		    index:"bitid",		    	width: "80", 	align:"center", sorttype:"text"},
		];

function initGrid(){
	makeGrid("#route_list", models, 110, "resultList", null, null, onDblClicked);
	
	//정류장 팝1
	makeGrid("#pop_route_list", models_stoppop1, 110, "resultList", onSelectedStop1, onCompleted1, null);
	
	//정류장 팝2
	makeGrid("#pop_arrival_list", models_stoppop2, 110, "resultList", null, null, null);
	
	function onSelectedStop1(rowid) {
		var rowData = $("#pop_route_list").jqGrid('getRowData', rowid);
		var params = {
				bstopid : $("#pop_stop_id").val(),
				routeid : rowData.routeid
		}
		reloadGrid("#pop_arrival_list", "./stop/selectStopPopup.do", params, "resultList");
	}
	
	function onDblClicked(rowid){
		var rowData = $("#route_list").jqGrid('getRowData', rowid);
		if(busInterval) clearInterval(busInterval);
		if(trafficInterval) clearInterval(trafficInterval);
		$("#route_num").text(rowData.routeno+"번");
		SEL_ID = rowData.routeid;
		ajaxCall("./route/selectRouteNodeList.do", {routeid: SEL_ID}, function(){showLoader();}, drawRouteNodeList, null);
	}
	
	function onCompleted1(data) {
		$('#pop_route_list').jqGrid('setSelection', 1, true);
	}
	
	$(window).bind('resize', function() {
		$("#route_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#route_list").jqGrid('setGridWidth', $(".main_chart").width());
		
		$("#pop_route_list").jqGrid('setGridHeight', 340-23);
		$("#pop_route_list").jqGrid('setGridWidth', 175);
		
		$("#pop_arrival_list").jqGrid('setGridHeight', 340-23);
		$("#pop_arrival_list").jqGrid('setGridWidth', 622);
	}).trigger('resize');	
	
	loadGrid();
}

function loadGrid(){
	showLoader();
	reloadGrid("#route_list", "./route/selectImgRouteList.do", { searchWord : $("#input_search").val() }, "resultList");
}

function initEvent(){
	
	$("#btn_clear").click(function(){
		$("#input_search").val("");	
		$("#btn_search").trigger("click");
	});
	
	$("#input_search").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_search").trigger("click");		
	});
	
	$("#btn_search").click(function(){
		loadGrid();
	});
	
	//TODO 버스팝업 메시지 전송 이벤트 구현
}

function drawRouteNodeList(data) {
	hideLoader();
	var strTemp = "";
	var stopSeq = 1;
	$.each(data.resultList, function(index, value) {
		strTemp += startTagCheck(index);
		
		if(index == (data.resultList.length-1)) {
			strTemp += "<li class='last' id='"+value.pathseq+"'>";
		}else {
			strTemp += "<li id='"+value.pathseq+"'>";
		}
		
		var stopnm = "";
		var linkSpd = "";
		var stopSpd = "";
		var stopId = "";
		var stopClass = "";
		if(value.nodegbcd == "2") {
			stopId = value.bstopid;
			stopClass = "stopImg";
			stopnm = value.nodenm;
			linkSpd = value.nodenm + " " + value.movavg_trvspd+"km/h";
			stopSpd = "순서: " + stopSeq +"&#13;";
			stopSpd += "ID: " + value.nodeid +" [" + value.short_bstopid+"]&#13;";
			stopSpd += value.nodenm+"&#13;";
			stopSpd += value.movavg_trvspd+"km/h";
			stopSeq++;
		}else {
			linkSpd = value.movavg_trvspd+"km/h";
			stopSpd += value.movavg_trvspd+"km/h";
		}
		var sImg = getNodeImg(value.nodegbcd, value.bityn, index);
		
		strTemp += "<div class='"+getLinkColor(value.congestlevcd)+"' title='"+linkSpd+"'><img src='"+sImg+"' alt='' title='"+stopSpd+"' id='"+stopId+"_"+stopnm+"' class='"+stopClass+"'>"; 
		strTemp += "<p class='stop_name'>"+stopnm+"</p></div></li>";

		strTemp += endTagCheck(index, data.resultList.length);
	});
	$(".bus_con").empty().append(strTemp);
	stopImgEvent();
	
	setBusLocation(data);
	
	//set interval
	reLoadBusLoc();
	reLoadTrafficInfo();
}

/*****************
 * 정류장 이미지 클릭 이벤트
 *****************/
function stopImgEvent() {
	$(".stopImg").click(function() {
		var id = $(this).attr("id");
		if(id == null || id == "") {
			return;
		}
		var ids = id.split("_");
		$("#pop_stop_id").val(ids[0]);
		$("#pop_stop_title").text(ids[1]+" - " +ids[0]);
		stopDlg.dialog("open");
		reloadGrid("#pop_route_list", "./stop/selectViaRouteList.do", { bstopid : ids[0], yncheck : "1"}, "resultList");
	});
}


function setBusLocation(data) {
	// RUNDISTINCTCD
	
//	RUNDISTINCTCD	1	운행종료(종점)
//	RUNDISTINCTCD	4	운행중단
//	RUNDISTINCTCD	5	공차
//	RUNDISTINCTCD	6	돌발발생
//	RUNDISTINCTCD	7	노선이탈
//	RUNDISTINCTCD	8	임의지연

	var stopCnt = 0;
	var breakCnt = 0;
	var emptyCnt = 0;
	var inciCnt = 0;
	var awayCnt = 0;
	var delayCnt = 0;
	var totalCnt = data.busList.length;
	$(".bus_con").find("li").find(".busImg").remove();
	$.each(data.busList, function(index, value) {
		
		var runtycd = value.rundistinctcd;
		switch (runtycd) {
		case 1:  //운행종료
			stopCnt++;
			break;
		case 4:  //운행종료
			breakCnt++;
			break;
		case 5:  //공차
			emptyCnt++;
			break;
		case 6:  //돌발
			inciCnt++;
			break;
		case 7:  //노선이탈
			awayCnt++;
			break;
		case 8:  //임의지연
			delayCnt++;
			break;
		}
		
		var busClass = "";
		if(runtycd == 3) { //운행중
			busClass = "bus_b busImg";
		}else if(runtycd == 6 ||runtycd == 7||runtycd == 8){
			busClass = "bus_r busImg";
		}else {
			busClass = "bus_g busImg";
		}
		var id = value.busid;
		
		var tVal = "";
		var strInfo = value.carregno +"&#13;";
		if(value.evtsubtpcdnm != "") {
			strInfo += value.evtsubtpcdnm+"&#13;";
		}else {
			strInfo += value.runvioltpcdnm+"&#13;";
		}
		if(value.tmgap != "99999") {
			tVal = " ["+Math.round(Number(value.tmgap) / 60)+"분]" ;
			strInfo += "("+Math.round(Number(value.tmgap) / 60)+"분)";
		} 
		
		var strTemp = "<p class='"+busClass+"' title='"+strInfo+"' id='"+id+"'><span>"+id.substring(3,7)+tVal+"</span></p>";
		$(".bus_con").find("#"+value.pathseq).prepend(strTemp);
	});
	busImgEvent();
	
	$("#totalCnt").text(totalCnt+"");
	$("#stopCnt").text(stopCnt+"");
	$("#normalCnt").text((totalCnt - stopCnt - emptyCnt - inciCnt - awayCnt - delayCnt)+"" ); 
	$("#emptyCnt").text(emptyCnt+"");
	$("#inciCnt").text(inciCnt+"");
	$("#awayCnt").text(awayCnt+"");
	$("#delayCnt").text(delayCnt+"");
	
}

/***************
 * 버스 이미지 클릭 이벤트
 **************/
function busImgEvent() {
	$(".busImg").click(function() {
		var id = $(this).attr("id");
		if(id == null || id == "") {
			return;
		}
		ajaxCall("./stop/selectBusPopup.do", {busid: id}, null, setBusInfo, null);
		
		function setBusInfo(data) {
			bus_detail_success(data);
			busDlg.dialog("open");
			
			$("#buspop_msg_btn").click(function(){
				showConfirmDlg("메시지를 전송하시겠습니까?", buspop_send_message);
			});
		}
	});
}

function buspop_send_message(){
	var params = {
			mdtid : $("#buspop_mdtid").val(),
			routeid : $("#buspop_routeid").val(),
			busid : $("#buspop_busid").val(),
			message_content : $("#buspop_msg_cnt").val(),
			msgtpcd : '2' // 1공지사항 2긴급메시지 3돌발정보 4운행조정 5확인 6에러 7정보
		}
		ajaxCall("./stop/updateMsg.do", params, null,resultcode, null);
}

function resultcode(data){
	if(data.result_code == -1)
		showAlert("메시지 전송에 실패했습니다");
	else {
		$("#buspop_msg_cnt").val("");
		showAlert("메시지 전송에 성공했습니다");
	}
}

function bus_detail_success(data){
	var Data = data.resultList[0];

	$("#txt_procdt").text(Data.procdt);
	$("#txt_center_colldt").text(Data.center_colldt);
	$("#txt_run_startdt").text(Data.run_startdt);
	$("#txt_evt_occurdt").text(Data.evt_occurdt);
	$("#txt_evt_occurdt2").text(Data.evt_occurdt);
	
	
	
	
	$("#buspop_evttpcd").val(Data.evttpcd);
	$("#buspop_evtsubtpcd").val(Data.evtsubtpcd);
	$("#buspop_rundistinctcd").val(Data.rundistinctcd);
	$("#buspop_lastbusyn").val(Data.lastbusyn);
	$("#buspop_chgbusyn").val(Data.chgbusyn);
	$("#buspop_openstatcd").val(Data.openstatcd);
	$("#buspop_rcvseq").val(Data.rcvseq);
	
	$("#buspop_busid").val(Data.busid);
	$("#buspop_mdtid").val(Data.mdtid);
	$("#buspop_routeid").val(Data.routeid);
	$("#buspop_nodeid").val(Data.nodeid);
	$("#buspop_pathseq").val(Data.pathseq);
	$("#buspop_plan_runord").val(Data.plan_runord);
	
	$("#buspop_posx").val(Data.posx);
	$("#buspop_posy").val(Data.posy);
	$("#buspop_heading").val(Data.heading);
	$("#buspop_runspd").val(Data.runspd);
	$("#buspop_dircd").val(Data.dircd);
	$("#buspop_bstop_stoptm").val(Data.bstop_stoptm);
	$("#buspop_rundist").val(Data.rundist);
	$("#buspop_runtm").val(Data.runtm);

	$("#buspop_ffbus_busid").val(Data.ffbus_busid);
	$("#buspop_ffbus_locgap").val(Data.ffbus_locgap);
	$("#buspop_ffbus_tmgap").val(parseInt((Number(Data.ffbus_tmgap)+30)/60));
	
	$("#buspop_fbus_busid").val(Data.fbus_busid);
	$("#buspop_fbus_locgap").val(Data.fbus_locgap);
	$("#buspop_fbus_tmgap").val(parseInt((Number(Data.fbus_tmgap)+30)/60));
	
	$("#buspop_nbus_busid").val(Data.nbus_busid);
	if(Number(Data.nbus_locgap) < 0) {
		$("#buspop_nbus_locgap").val("-");
	}else {
		$("#buspop_nbus_locgap").val(Data.nbus_locgap);
	}
	if(parseInt((Number(Data.nbus_tmgap)+30)/60) < 0) {
		$("#buspop_nbus_tmgap").val("-");
	}else {
		$("#buspop_nbus_tmgap").val(parseInt((Number(Data.nbus_tmgap)+30)/60));
	}
	$("#buspop_nnbus_busid").val(Data.nnbus_busid);

	if(Number(Data.nnbus_locgap) < 0) {
		$("#buspop_nnbus_locgap").val("-");
	}else {
		$("#buspop_nnbus_locgap").val(Data.nnbus_locgap);
	}
	if(parseInt((Number(Data.nnbus_tmgap)+30)/60) < 0) {
		$("#buspop_nnbus_tmgap").val("-");
	}else {
		$("#buspop_nnbus_tmgap").val(parseInt((Number(Data.nnbus_tmgap)+30)/60));
	}
	
	
	$("#buspop_sndseq").val(Data.sndseq);
	
	$("#buspop_dest_arrplantm").val(parseInt((Number(Data.dest_arrplantm)+30)/60));
	$("#buspop_dest_restdist").val(Data.dest_restdist);
	
	$("#buspop_bstopid_1").val(Data.bstopid_1);
	$("#buspop_arrplantm_1").val(parseInt((Number(Data.arrplantm_1)+30)/60));
	$("#buspop_trvspd_1").val(Data.trvspd_1);
	
	$("#buspop_bstopid_2").val(Data.bstopid_2);
	$("#buspop_arrplantm_2").val(parseInt((Number(Data.arrplantm_2)+30)/60));
	$("#buspop_trvspd_2").val(Data.trvspd_2);
	
	$("#buspop_bstopid_3").val(Data.bstopid_3);
	$("#buspop_arrplantm_3").val(parseInt((Number(Data.arrplantm_3)+30)/60));
	$("#buspop_trvspd_3").val(Data.trvspd_3);
	set_congest_color();
	
	function set_congest_color(){
		for(var index=1; index<4; index++){
			switch(Data.congestlev_cd.charAt(index-1)){
			case '0':
				$("#buspop_trvspd_"+index).css("background-color","gray")
				break;
			case '1':
				$("#buspop_trvspd_"+index).css("background-color","green")
				break;
			case '2':
				$("#buspop_trvspd_"+index).css("background-color","yellow")
				break;
			case '3':
				$("#buspop_trvspd_"+index).css("background-color","red")
				break;
			}
		}
	}
	
	if(Data.bstart_statyn == "ON")
		$("#buspop_bstart_statyn").attr("class","on")
	else
		$("#buspop_bstart_statyn").attr("class","off")
	$("#buspop_bstart_statyn span").text(Data.bstart_statyn);
	
	$("#buspop_gps_statyn").val(Data.gps_statyn);
	$("#buspop_wlan_statyn").val(Data.wlan_statyn);
	$("#buspop_sub_term_statyn").val(Data.sub_term_statyn);
	$("#buspop_mem_statyn").val(Data.mem_statyn);
	/*발생일시 evt_occurdt
	개시시간 center_colldt
	
	이벤트유형 evttpcd
	세부유형 evtsubtpcd
	운행상태 rundistinctcd
	막차 lastbusyn
	대차 chgbusyn
	개문상태 openstatcd
	이벤트수집순번 rcvseq
	
	버스id busid
	mdtid mdtid
	노선id routeid
	노드id nodeid
	시컨스 pathseq
	운행회차 plan_runord
	
	
	좌표 posx posy
	각도 heading
	속도 runspd
	방향 dircd
	정차시간 bstop_stoptm
	운행거리 rundist
	운행시간 runtm
	
	앞앞차 ffbus_busid ffbus_locgap ffbus_tmgap(초단위)
	앞차 fbus_busid   fbus_locgap fbus_tmgap
	뒤차 nbus
	뒤뒤차 nnbus
	제공순번 sndseq
	
	도착예정 dest_arrplantm(초단위)
	거리 dest_restdist
	첫번째 bstopid_1 arrplantm_1 trvspd_1 주의) 30초~1분30초 1분으로 책정하는듯
	
	bstart_statyn ( on / off)
	gps gps_statyn
	lan wlan_statyn
	sub sub_term_statyn
	mem mem_statyn*/
}


function setNodeColor(data) {
	var stopSeq = 1;
	$.each(data.resultList, function(index, value) {
		
		var linkSpd = "";
		var stopSpd = "";
		if(value.nodegbcd == "2") {
			linkSpd = value.nodenm + " " + value.movavg_trvspd+"km/h";
			stopSpd = "순서: " + stopSeq +"\n";
			stopSpd += "ID: " + value.nodeid +" [" + value.short_bstopid+"]\n";
			stopSpd += value.nodenm+"\n";
			stopSpd += value.movavg_trvspd+"km/h";
			stopSeq++;
		}else {
			linkSpd = value.movavg_trvspd+"km/h";
			stopSpd += value.movavg_trvspd+"km/h";
		}
		
		var $node = $(".bus_con").find("#"+value.pathseq).find("div");
		
		$node.prop('title', linkSpd);
		$node.find("img").prop('title', stopSpd);
		$node.removeClass();
		$node.addClass(getLinkColor(value.congestlevcd));
	});
}

function reLoadBusLoc() {
	busInterval = setInterval(function(){
		ajaxCall("./route/selectBusOperInfoList.do", {routeid: SEL_ID}, null, setBusLocation, null);
	}, 10*1000);
}

function reLoadTrafficInfo() {
	trafficInterval = setInterval(function(){
		ajaxCall("./route/selectNodeTrafficList.do", {routeid: SEL_ID}, null, setNodeColor, null);
	}, 30*1000);
}


function startTagCheck(index) {
	var chkValue = (index+1) % 24;
	var evenOdd = parseInt((index+1) / 24);
	
	var clssVal = "";
	if(chkValue == 1) {
		if((evenOdd % 2) == 0) {
			clssVal = "para odd";
		}else {
			clssVal = "para even";
		}
		return "<div class='"+clssVal+"'><ul>";
	}else {
		return "";
	}
}

function endTagCheck(index, length) {
	var chkValue = (index+1) % 24;
	if(chkValue == 0 || index == (length-1)) {
		return "</ul></div>";
	}else {
		return "";
	}
}

function getNodeImg(nodegbcd, bityn, index) {
	
	var evenOdd = parseInt(index / 24);
	var sImg = "";
	if(nodegbcd != "2") {
		sImg = "./images/nosun_plus.png";
	}else {
		if((evenOdd % 2) == 0) {
			if(bityn == "0") {
				sImg = "./images/nosun_r_arrow1.png";
			}else { 
				sImg = "./images/nosun_r_arrow2.png"; 
			}
		}else {
			if(bityn == "0") {
				sImg = "./images/nosun_l_arrow1.png";
			}else { 
				sImg = "./images/nosun_l_arrow2.png"; 
			}
		}
	}
	return sImg;
}

function getLinkColor(congcd) {
	if(congcd == 3) {
		return "nosun n_red";
	}else if(congcd == 3) {
		return "nosun n_yellow";
	}else if(congcd == 1) {
		return "nosun n_green";
	}else {
		return "nosun n_gray";
	}
}

function setDialog() {
	busDlg = getDialog("pop_bus", "container");
	stopDlg = getDialog("pop_stop", "container");
	
	$("#buspop_close").click(function() {
		busDlg.dialog("close");
	});
	$("#stoppop_close").click(function() {
		stopDlg.dialog("close");
	});
	$(".bottom_close").click(function() {
		stopDlg.dialog("close");
	});
}