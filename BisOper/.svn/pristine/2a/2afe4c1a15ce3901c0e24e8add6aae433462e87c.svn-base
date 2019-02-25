/**
 * BIT관리 - BIT제공정보 현황조회
 * 
 * @author 박경원
 * @since 2017-11-22
 */

//상단
var model1 = [
                      {onlyView: true,
                       label:"관리 ID",		name:"bitmid",			index:"bitmid",       		width: "70", 	align:"center", sorttype:"number"},
                      {label:"BIT ID",		name:"bitid",   		index:"bitid",     			width: "70", 	align:"center", sorttype:"number"},
                      {label:"단축 ID",		name:"short_bstopid",	index:"short_bstopid",      width: "70", 	align:"center", sorttype:"text"},
                      {label:"설치위치",		name:"installloc",      index:"installloc",       	width: "100", 	align:"left", 	sorttype:"text"},
                      {label:"BIT 유형",		name:"bittp",      		index:"bittp",     			width: "130", 	align:"center", sorttype:"text"},
                      {label:"센터전송일시",		name:"issuedt",			index:"issuedt",   			width: "130", 	align:"center", sorttype:"number"},
                      {label:"메세지 순번",		name:"msgseq",    		index:"msgseq",      		width: "70", 	align:"center", sorttype:"number"},
                      {label:"서버전송일시",		name:"snddt",  			index:"snddt",     			width: "130", 	align:"center", sorttype:"number"},
                      {label:"전송결과",		name:"sndrslt",  		index:"sndrslt",     		width: "80", 	align:"center", sorttype:"text"},
                      {label:"통신오류",		name:"commerr",  		index:"commerr",     		width: "80", 	align:"center", sorttype:"text"},
                      {label:"응답일시",		name:"reply_colldt",  	index:"reply_colldt",     	width: "130", 	align:"center", sorttype:"number"},
                      {label:"내용",			name:"msgcontent",  	index:"msgcontent",     	width: "520", 	align:"left",   sorttype:"text"}
                      ]

//하단
var model2 = [
                      {onlyView: true,
                       label:"센터전송일시",		name:"issuedt",			index:"issuedt",   			width: "160", 	align:"center", sorttype:"number"},
                       {label:"메세지 순번",		name:"msgseq",    		index:"msgseq",      		width: "90", 	align:"center", sorttype:"number"},
                       {label:"서버전송일시",		name:"snddt",  			index:"snddt",     			width: "160", 	align:"center", sorttype:"number"},
                       {label:"전송결과",		name:"sndrslt",  		index:"sndrslt",     		width: "110", 	align:"center", sorttype:"text"},
                       {label:"통신오류",		name:"commerr",  		index:"commerr",     		width: "110", 	align:"center", sorttype:"text"},
                       {label:"응답일시",		name:"reply_colldt",  	index:"reply_colldt",     	width: "160", 	align:"center", sorttype:"number"},
                       {label:"내용",			name:"msgcontent",  	index:"msgcontent",     	width: "520", 	align:"left",   sorttype:"text"}
                   	  ]

$(document).ready(function() {
	//파일 저장
	$("#btn_excel_download").click(function() {
		execlDownload();
	})
	
	//탭 이동시 그리드 로드
	$(".nav_pic2 a").click(function() {
		var tab_id = $(this).attr("href");
		var table_id = $(tab_id + " table:eq(1)").attr("id");
		
		switch (table_id) {
		case "message_list": reloadGrid("#message_list", "./bit/selectBitCurMessageList.do", null, "resultList"); break;
		case "parameter_list": reloadGrid("#parameter_list", "./bit/selectBitCurParameterList.do", null, "resultList"); break;
		case "control_list": reloadGrid("#control_list", "./bit/selectBitCurControlList.do", null, "resultList"); break;
		case "download_list": reloadGrid("#download_list", "./bit/selectBitCurDownloadList.do", null, "resultList"); break;
		case "w_message_list": reloadGrid("#message_list", "./bit/selectBitCurWMessageList.do", null, "resultList"); break;
		default: break;
		}
	})
	
	setGrid();
})

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/downloadBitCurInfo.do";
	form.method = "POST";
	
	var	para1 = document.createElement('INPUT');
	var row_data = null;
	var name = "";
	
	switch($(".active a").attr("href")) {
	case "#tab1": row_data = $("#message_list").jqGrid("getRowData"); name = "수동 메세지"; break;
	case "#tab2": row_data = $("#parameter_list").jqGrid("getRowData"); name = "파라미터";  break;
	case "#tab3": row_data = $("#control_list").jqGrid("getRowData"); name = "안내기 제어";  break;
	case "#tab4": row_data = $("#download_list").jqGrid("getRowData"); name = "파일 다운로드";  break;
	case "#tab5": row_data = $("#w_message_list").jqGrid("getRowData"); name = "광역BIT 수동메세지";  break;
	}

	var value = JSON.stringify(row_data);
	
	para1.type  = 'HIDDEN';
	para1.name  = name;
	para1.value = value;
	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}

function setGrid() {
	makeGrid("#message_list", model1, 500, "resultList", onSelected1, onCompleted1, null);
	makeGrid("#message_detail_list", model2, 500, "resultList", null, onCompleted2, null);
	makeGrid("#parameter_list", model1, 500, "resultList", onSelected3, onCompleted3, null);
	makeGrid("#parameter_detail_list", model2, 500, "resultList", null, onCompleted4, null);
	makeGrid("#control_list", model1, 500, "resultList", onSelected5, onCompleted5, null);
	makeGrid("#control_detail_list", model2, 500, "resultList", null, onCompleted6, null);
	makeGrid("#download_list", model1, 500, "resultList", onSelected7, onCompleted7, null);
	makeGrid("#download_detail_list", model2, 500, "resultList", null, onCompleted8, null);
	makeGrid("#w_message_list", model1, 500, "resultList", onSelected9, onCompleted9, null);
	makeGrid("#w_message_detail_list", model2, 500, "resultList", null, onCompleted10, null);
	
	function onSelected1(row_id) {
		var row_data = $("#message_list").jqGrid("getRowData", row_id);
		reloadGrid("#message_detail_list", "./bit/selectBitHisMessageList.do", {bitid: row_data.bitid}, "resultList");
		
		$(".clicked_id").text(row_data.installloc + "(" + row_data.bitid + ") 수동메세지");
	}
	
	function onCompleted1(row_id) {
		$("#message_list").jqGrid("setSelection", 1);
	}
	
	function onCompleted2(row_id) {
		$(".list_count").text($("#message_detail_list").jqGrid("getGridParam", "reccount"));
	}
	
	function onSelected3(row_id) {
		var row_data = $("#parameter_list").jqGrid("getRowData", row_id);
		reloadGrid("#parameter_detail_list", "./bit/selectBitHisParameterList.do", {bitid: row_data.bitid}, "resultList");
		
		$(".clicked_id").text(row_data.installloc + "(" + row_data.bitid + ") 파라미터");
	}
	
	function onCompleted3(row_id) {
		$("#parameter_list").jqGrid("setSelection", 1);
	}
	
	function onCompleted4(row_id) {
		$(".list_count").text($("#parameter_detail_list").jqGrid("getGridParam", "reccount"));
	}

	
	function onSelected5(row_id) {
		var row_data = $("#control_list").jqGrid("getRowData", row_id);
		reloadGrid("#control_detail_list", "./bit/selectBitHisControlList.do", {bitid: row_data.bitid}, "resultList");
		
		$(".clicked_id").text(row_data.installloc + "(" + row_data.bitid + ") 안내기 제어");
	}
	
	function onCompleted5(row_id) {
		$("#control_list").jqGrid("setSelection", 1);
	}
	
	function onCompleted6(row_id) {
		$(".list_count").text($("#control_detail_list").jqGrid("getGridParam", "reccount"));
	}
	
	function onSelected7(row_id) {
		var row_data = $("#download_list").jqGrid("getRowData", row_id);
		reloadGrid("#download_detail_list", "./bit/selectBitHisDownloadList.do", {bitid: row_data.bitid}, "resultList");
		
		$(".clicked_id").text(row_data.installloc + "(" + row_data.bitid + ") 파일 다운로드");
	}
	
	function onCompleted7(row_id) {
		$("#download_list").jqGrid("setSelection", 1);
	}
	
	function onCompleted8(row_id) {
		$(".list_count").text($("#download_detail_list").jqGrid("getGridParam", "reccount"));
	}
	
	function onSelected9(row_id) {
		var row_data = $("#w_message_list").jqGrid("getRowData", row_id);
		reloadGrid("#w_message_detail_list", "./bit/selectBitHisWMessageList.do", {bitid: row_data.bitid}, "resultList");
		
		$(".clicked_id").text(row_data.installloc + "(" + row_data.bitid + ") 광역BIT 수동메세지");
	}
	
	function onCompleted9(row_id) {
		$("#w_message_list").jqGrid("setSelection", 1);
	}
	
	function onCompleted10(row_id) {
		$(".list_count").text($("#w_message_detail_list").jqGrid("getGridParam", "reccount"));
	}

	reloadGrid("#message_list", "./bit/selectBitCurMessageList.do", {is_cur: true}, "resultList");
	
	$(window).bind('resize', function() {
		$("#message_list").jqGrid('setGridHeight',$(".active .present_bady").height() - 25);
		$("#message_list").jqGrid('setGridWidth',$(".active .present_bady").width());
		$("#message_detail_list").jqGrid('setGridHeight',$(".active .present_bady2").height() - 25);
		$("#message_detail_list").jqGrid('setGridWidth',$(".active .present_bady2").width());
		$("#parameter_list").jqGrid('setGridHeight',$(".active .present_bady").height() - 25);
		$("#parameter_list").jqGrid('setGridWidth',$(".active .present_bady").width());
		$("#parameter_detail_list").jqGrid('setGridHeight',$(".active .present_bady2").height() - 25);
		$("#parameter_detail_list").jqGrid('setGridWidth',$(".active .present_bady2").width());
		$("#control_list").jqGrid('setGridHeight',$(".active .present_bady").height() - 25);
		$("#control_list").jqGrid('setGridWidth',$(".active .present_bady").width());
		$("#control_detail_list").jqGrid('setGridHeight',$(".active .present_bady2").height() - 25);
		$("#control_detail_list").jqGrid('setGridWidth',$(".active .present_bady2").width());
		$("#download_list").jqGrid('setGridHeight',$(".active .present_bady").height() - 25);
		$("#download_list").jqGrid('setGridWidth',$(".active .present_bady").width());
		$("#download_detail_list").jqGrid('setGridHeight',$(".active .present_bady2").height() - 25);
		$("#download_detail_list").jqGrid('setGridWidth',$(".active .present_bady2").width());
		$("#w_message_list").jqGrid('setGridHeight',$(".active .present_bady").height() - 25);
		$("#w_message_list").jqGrid('setGridWidth',$(".active .present_bady").width());
		$("#w_message_detail_list").jqGrid('setGridHeight',$(".active .present_bady2").height() - 25);
		$("#w_message_detail_list").jqGrid('setGridWidth',$(".active .present_bady2").width());
	}).trigger('resize');
}