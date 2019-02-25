/**
 * OBE 관리
 * 
 * @author 박경원
 * @since 2017-10-13
 */

var timer = null;

$(document).ready(function(){
	$("#input_f_version").val(firmware_version);
	$("#input_c_version").val(info_version);
	$("#input_r_version").val(info_reserve_version);
	
	setEvent();
	obeGrid();
});

/**
 * Event
 */
function setEvent() {

	//Excel download
	$("#btn_excel").click(function() {
		execlDownload();
	});
	
	//새로고침
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#input_research").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#img_research").trigger("click");
		}
	})
	
	//검색
	$("#img_research").on("click", function() {
		var search_word = $("#input_research").val(); 
		var params = {searchWord: search_word};
		reloadGrid("#obe_list", "./obe/selectObeStateList.do", params, "resultList");
	})
	
	//clear
	$("#btn_clear").click(function() {
		$("#input_research").val("");
	})
	
	//상세검색 체크박스
	$("#checkbox_detail_search").change(function(){
		if($(this).is(":checked")) {
			setFilter("obe_list", true);
			$("#obe_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 25 - 25);
		}else {
			setFilter("obe_list", false);
			$("#obe_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 25);
		}
	});
	
	//Checkbox auto reload
	$("#checkbox_auto_reload").on("click", function() {
		if ($("#checkbox_auto_reload").prop("checked")) {
			if (timer) clearInterval(timer);
			timer = setInterval(reloadGridInterval, 60000);				
		} else {
			clearInterval(timer);
		}
	})
}

/**
 * Excel 다운로드
 */
function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./obe/downloadObeStateExcel.do";
	form.method = "POST";
	
	var	para = document.createElement('INPUT');     
	para.type  = 'HIDDEN';
	para.name  = 'searchWord';
	para.value = "";
	form.appendChild(para);
	
	document.body.appendChild(form);
	
	inquiryFileDownload("excelDown");
}
/**
 * 그리드 새로고침
 */
function reloadGridInterval() {
	/*임시 필터조치*/
	$("#obe_list").jqGrid('GridUnload');
	$("#checkbox_detail_search").attr("checked",false);
	
	makeFilterGrid("#obe_list", models, grid_height, "resultList", null, null, null);
	//그룹화
	$("#obe_list").jqGrid('setGroupHeaders', {
		useColSpanStyle: true, 
        groupHeaders:[
          {startColumnName: 'conn_status', numberOfColumns: 5, titleText: '차량정보'},
          {startColumnName: 'firmware_version',  numberOfColumns: 6, titleText: '설정정보'}
          ]   
	});
	
	$(window).bind('resize', function() {
		$("#obe_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 70);
		$("#obe_list").jqGrid('setGridWidth',$(".subcon_con3").width());
	}).trigger('resize');
	/*임시 필터조치*/
	
	reloadGrid("#obe_list", "./obe/selectObeStateList.do", null, "resultList");
}

/**
 * 그리드 생성
 */
function obeGrid() {
	var grid_height = 500;
	var models = [
	              {onlyView:true, label: "연결상태",		name:"conn_status",				index:"conn_status",			width: "90", 	align:"center", sorttype:"text", formatter: set_conn_status},
	              {label: "차량 ID",		name:"veh_id", 	   				index:"veh_id",		 			width: "72", 	align:"center", sorttype:"number"},
	              {label: "차량 번호",		name:"plate_no", 				index:"plate_no", 				width: "102", 	align:"center", sorttype:"text"},
	              {label: "연결된 IP",		name:"connect_ip", 	   			index:"connect_ip", 			width: "100", 	align:"center", sorttype:"integer"},
	              {label: "최종갱신시간",		name:"update_dt", 	   			index:"update_dt ", 			width: "150", 	align:"center", sorttype:"integer"},
	             
	              {label: "펌웨어버전",		name:"firmware_version",  		index:"firmware_version", 		width: "139", 	align:"center", sorttype:"number"},
	              {label: "펌웨어 버전체크",	name:"firmware_check",  		index:"firmware_check", 		width: "120", 	align:"center", sorttype:"text", formatter: set_version_check},
	              {label: "기반정보 버전",	name:"info_version",  			index:"info_version", 			width: "139", 	align:"center", sorttype:"number"},
	              {label: "기반정보 버전체크",	name:"curdb_check", 			index:"curdb_check", 			width: "120", 	align:"center", sorttype:"text", formatter: set_version_check},
	              {label: "예약정보 버전",	name:"info_reserve_version",	index:"info_reserve_version", 	width: "139", 	align:"center", sorttype:"number"},
	              {label: "예약정보 버전체크",	name:"rd_check", 				index:"rd_check", 				width: "120",	align:"center", sorttype:"text", formatter: set_version_check}
	              ];

	makeFilterGrid("#obe_list", models, grid_height, "resultList", null, null, null);
    reloadGrid("#obe_list", "./obe/selectObeStateList.do", null, "resultList");
	
	//그룹화
	$("#obe_list").jqGrid('setGroupHeaders', {
		useColSpanStyle: true, 
        groupHeaders:[
          {startColumnName: 'conn_status', numberOfColumns: 5, titleText: '차량정보'},
          {startColumnName: 'firmware_version',  numberOfColumns: 6, titleText: '설정정보'}
          ]   
	});
	
	$(window).bind('resize', function() {
		$("#obe_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 70);
		$("#obe_list").jqGrid('setGridWidth',$(".subcon_con3").width());
	}).trigger('resize');
	
	//TODO 검색 결과 수
//	var row_count = $("#obe_list").jqGrid("getGridParam", "reccount");
//	$(".serch_number span").text(row_count);
}

/**
 * 연결정보에 따른 문자열 가공
 * @param cellValue
 * @param options
 * @param rowdata
 * @param action
 * @returns {String} 문자열
 */
function set_conn_status(cellValue, options, rowdata, action) {
	if (cellValue == 1) {
		cellValue = "연결정상";
	} else {
		cellValue = "연결끊김";
	}
	
	return cellValue;
}

/**
 * 버전정보에 따른 문자열 가공
 * @param cellValue
 * @param options
 * @param rowdata
 * @param action
 * @returns {String} 문자열
 */
function set_version_check(cellValue, options, rowdata, action) {
	switch (cellValue) {
	case  "1": cellValue = "최신버전"; break;
	case  "0": cellValue = "업데이트 필요"; break;
	case "-1": cellValue = "정보없음"; break;
	default: break;
	}
	
	return cellValue;
}
