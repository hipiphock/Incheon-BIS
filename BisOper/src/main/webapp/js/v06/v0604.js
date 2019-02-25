$(document).ready(function () {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	ajaxCall("./comp/selectCompCateList.do",null,null,load_complist,null);	
	ajaxCall("./stop/selectRouteList.do",null,null,route_list,null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'REMCTRLTPCD'}, null, load_remctrllist , null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'VALID'}, null, load_vaildlist , null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'ONOFF'}, null, load_onofflist , null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'LOGYN'}, null, load_logynlist , null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'STATREQYN'}, null, load_statreqynlist , null);
});

function load_complist(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.compnm; 
		temp.value = value.compid; 
		$("#buscomp_option").append(temp);
	});
}

function route_list(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid; 
		$("#route_option").append(temp);
	});
}

function load_remctrllist(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm;
		temp.value = value.cd; 
		$("#remctrl").append(temp);
	});
}

function load_vaildlist(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm;
		temp.value = value.cd; 
		$(".vaild").append(temp);
	});
}

function load_onofflist(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm;
		temp.value = value.cd; 
		$(".onoff").append(temp);
	});
}

function load_logynlist(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm;
		temp.value = value.cd; 
		$(".logyn").append(temp);
	});
}

function load_statreqynlist(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm;
		temp.value = value.cd; 
		$("#statreqyn").append(temp);
	});
}

var models = [
              {label:"단말기 ID", 			name:"mdtid", 	    	index:"mdtid",	 			width: "50", 	align:"center", sorttype:"text"},
              {label:"모뎀시리얼번호", 		name:"modem_serialno", 	index:"modem_serialno",	 	width: "80", 	align:"center", sorttype:"text"},
              {label:"버스회사", 			name:"compnm", 	    	index:"compnm",	 			width: "80", 	align:"center", sorttype:"text"},
              {label:"상세상태요청", 			name:"statreqyn", 	    index:"statreqyn",	 		width: "70", 	align:"center", sorttype:"text"},
              {label:"변경일시", 			name:"evt_occurdt", 	index:"evt_occurdt",	 	width: "100", 	align:"center", sorttype:"text"},
              {label:"차량번호", 			name:"carregno", 	    index:"carregno",	 		width: "70", 	align:"center", sorttype:"text"},
              {label:"노선번호", 			name:"routeno", 	    index:"routeno",	 		width: "50", 	align:"center", sorttype:"text"},
              {label:"GPS상태", 			name:"gps_statyn", 	    index:"gps_statyn",	 		width: "50", 	align:"center", sorttype:"text"},
              {label:"서브단말기", 			name:"sub_term_statyn", index:"sub_term_statyn",	width: "50", 	align:"center", sorttype:"text"},
              {label:"메모리", 			name:"mem_statyn", 	    index:"mem_statyn",	 		width: "50", 	align:"center", sorttype:"text"},
              {label:"버스시동", 			name:"bstart_statyn", 	index:"bstart_statyn",	 	width: "50", 	align:"center", sorttype:"text"},
              {label:"무선랜", 			name:"wlan_statyn", 	index:"wlan_statyn",	 	width: "40", 	align:"center", sorttype:"text"},
              {label:"AP연걸", 			name:"ap_conn_onoff", 	index:"ap_conn_onoff",	 	width: "40", 	align:"center", sorttype:"text"},
              {label:"GPS보정품질", 		name:"gps_fixquality", 	index:"gps_fixquality",	 	width: "70", 	align:"center", sorttype:"text"},
              {label:"Flash사용량(%)", 	name:"flash_usage", 	index:"flash_usage",	 	width: "80", 	align:"center", sorttype:"text"},
              {label:"SDRAM사용량(%)", 	name:"sdram_usage", 	index:"sdram_usage",	 	width: "80", 	align:"center", sorttype:"text"},
              {label:"무선모뎀강도", 			name:"wmodem_senstvty", index:"wmodem_senstvty",	width: "70", 	align:"center", sorttype:"text"},
              {label:"무선랜접속일시", 		name:"wlan_conndt", 	index:"wlan_conndt",	 	width: "100", 	align:"center", sorttype:"text"},
              {label:"버스ID", 			name:"busid", 	  		index:"busid",	 			width: "60", 	align:"center", sorttype:"text"},
              {label:"노선ID", 			name:"routeid", 		index:"routeid",	 		width: "70", 	align:"center", sorttype:"text"},
              ];

function initGrid() {
	makeMultiGrid("#main_table",models, 300, "resultList",null, onComplete, null);
	
	function onComplete(data){
		hideLoader();
		$(".sub_title").eq(0).find("h3").text("차량단말기 상태 "+data.records+" 건");
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height()-55);
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	$("#main_table").jqGrid('filterToolbar',
    {
					autosearch: true,
					stringResult: true,
					searchOnEnter: true,
					defaultSearch: "cn"
    });
	setFilter("main_table", true);
}

function initEvent() {
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#main_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#main_table");
		else
			showAlert("조회된 내용이 없습니다.");
	}); 
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//갱신주기 체크박스
	$("#renew").change(function () {
		if($("#renew").is(":checked")){
			$("#renew_value").attr("disabled",true);
			renew = setInterval(function() {
				   $("#main_table").trigger('reloadGrid');
				}, $("#renew_value").val()*1000);
		}
		else { 
			$("#renew_value").attr("disabled",false);
			clearInterval(renew); 
		}
	});
	
	//검색
	$("#btn_search").click(function () {
		var params = {
				carregno:$("#carregno").val(),
				mdtid:$("#mdtid").val(),
				compid:$("#buscomp_option option:selected").val(),
				statyn:$("#statyn option:selected").val(),
				routeid:$("#route_option option:selected").val()
		};
		showLoader(); 
		reloadGrid("#main_table","./bus/selectMdtStat.do",params,"resultList");
	});
	
	//전송
	$("#btn_transmit").click(function () {
		showConfirmDlg("차량단말기 제어정보를 입력하시겠습니까?", transmit_confirm);
		function transmit_confirm() {
			var ids = $("#main_table").jqGrid('getGridParam', 'selarrrow');
			if(ids.length == 0){
				showAlert("차량단말기를 선택하세요.");
				return ; 
			}
			var remctrl_checkbox="";
	        var fixint_checkbox="";
	        var statreqyn_checkbox="";
	        if($("#remctrl_checkbox").is(":checked"))
	        	remctrl_checkbox="1";
	        if($("#fixint_checkbox").is(":checked"))
	        	fixint_checkbox="1";
	        if($("#statreqyn_checkbox").is(":checked"))
	        	statreqyn_checkbox="1"; 
			for(var i = 0; i < ids.length; i++){
		        var rowObject = $("#main_table").getRowData(ids[i]);      
		        var params = {
		        		busid:rowObject.busid,
		        		routeid:rowObject.routeid,
		        		mdtid:rowObject.mdtid,
		        
		        		mdt_valid:$("#mdt_valid option:selected").val(),
		        		lcd_onoff:$("#lcd_onoff option:selected").val(), 
		        		sound_onoff:$("#sound_onoff option:selected").val(), 
		        		detail_sound_onoff:$("#detail_onoff option:selected").val(),
		        		ap_power_onoff:$("#appower_onoff option:selected").val(),
		        		ap_auto_onoff:$("#apauto_onoff option:selected").val(),
		        		log_upload_onoff:$("#logupload_onoff option:selected").val(),
		        		log_valid:$("#log_valid option:selected").val(),
		        		main_logyn:$("#main_logyn option:selected").val(),
		        		rmc_logyn:$("#rmc_logyn option:selected").val(),
		        		ll_logyn:$("#ll_logyn option:selected").val(),
		        		rev_ll_logyn:$("#revll_logyn option:selected").val(),
		        		route_logyn:$("#route_logyn option:selected").val(),
		        		door_logyn:$("#door_logyn option:selected").val(),
		        		ap_logyn:$("#ap_logyn option:selected").val(),
		        		remctrltpcd:$("#remctrl option:selected").val(), 
		        		
		        		fixint_cycl:$("#fixint_cycl").val(),
		        		
		        		statreqyn:$("#statreqyn option:selected").val(),
		        		
		        		searchword:remctrl_checkbox,
		        		searchword2:fixint_checkbox,
		        		searchword3:statreqyn_checkbox
		        };
		        ajaxCall("./bit/updateMdtCtrl.do",params,null,success,null);
		    }        
		}
	});
}

function success(data) {
	if(data.result == 1)
		showAlert("전송되었습니다.");
	else
		showAlert("전송실패하였습니다.")
}

function excelDownload(title, grid_id) {
	$("#excelDown").remove();
	var grid = $(grid_id);
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST"; 
	
	var fileName = JSON.stringify(title);
	var param = document.createElement('INPUT');
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid('getGridParam','colNames'));
	
	var idData = grid.jqGrid('getGridParam', 'colModel');
	var columnName = []; 
	$.each(idData, function (index,value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type = 'HIDDEN'; 
	param.name = 'json';
	param.value = fileName + columnLabel + columnName + columnData; 
	
	form.appendChild(param);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true); 
}