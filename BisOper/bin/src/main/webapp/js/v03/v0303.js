
$(document).ready(function(){
	
	initGrid();
	initialize();
//	initGrid();
//	initEvent();
//	inquiryCodeData();
//	btnDisabled(false);
//	
//	$(".led_wrap").hide();
//	$(".lcd_wrap").hide();
});

function initialize() {
	
	//BIT 유형 
	ajaxCall("./sys/selectCodeList.do", {cdcategid: 'BITTPCD'}, null, onSuccess, null);	

	function onSuccess(data) {  
		if(data && data.resultList) { // bit 유형
			var strTemp = "<option value=''>전체</option>";
			$.each( data.resultList, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_bittpcd_list").empty().append(strTemp);						
		}
		loadGrid();
	}
	
	$("#btn_search").click(function() {
		loadGrid();
	});
	
	$("#select_servertpcd").change(function() {
		var serverTp = $(this).find("option:selected").val();
		if(serverTp == 125) serverTp = 121;
		if(serverTp == 126) serverTp = 120;
		loadFileGrid(); //파일 목록 저장
		loadGrid();
		$("#select_ftp_server option[value="+serverTp+"]").prop("selected", true);
	});
	
	$("#select_bittpcd_list").change(function() {
		loadGrid();
	});
	
	//파일 유형
	ajaxCall("./sys/selectCodeList.do", {cdcategid: 'FILETPCD'}, null, onSuccess1, null);	
	
	
	function onSuccess1(data) {  
		if(data && data.resultList) { // bit 유형
			var strTemp = "";
			$.each( data.resultList, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_filetpcd").empty().append(strTemp);						
		}
	}
	
	
	initCalendar("input_stdt", YEAR_FORMAT1, true);
	initTimePicker("input_sttm", TIME_FORMAT1, true);
	
	//스케줄작성
	$("#btn_schedule").click(function() {
		window.open("v520.view", "v520.view", "width=1064px, height=629px, resizable=0, scrollbars=0");
	});
	
	//파일 업로드
	$("#btn_upload").click(function() {
		var file = $("#input_file")[0].files[0];
		if(!file) {
			showAlert("파일이 선택되지 않았습니다.");
			return;
		}
		
		var ver = $("#input_filever").val();
		if(ver == "") {
			showAlert("파일 버전을 입력해주세요.");
			return;
		}
		
		var ftpServer = $("#select_ftp_server option:selected").text();
		
		showConfirmDlg("선택한 파일을 "+ftpServer+" 서버에 업로드 하시겠습니까?", reqUploadFile);
	});
	
	//파일 다운로드 요청
	$("#btn_req_download").click(function() {
		var ids = $("#bit_list").jqGrid("getGridParam", "selarrrow");
		
		if(ids == null || ids.length < 1) {
			showAlert("다운로드 요청 할 BIT를 선택하세요.");
			return;
		}
		var id = $("#file_list").jqGrid("getGridParam", "selrow"); 
		
		if(id == null || id == "") {
			showAlert("다운로드 요청 할 파일을 선택하세요.");
			return;
		}
		showConfirmDlg("선택한 파일을 다운로드 요청 하시겠습니까?", reqDownloadFile);
	});
}

//중계서버 파일 다운로드 요청
function reqDownloadFile() {

	var strId = "";
	var strTypes = "";
	
	var serverTy = $("#select_servertpcd option:selected").val();
	
	var ids = $("#bit_list").jqGrid("getGridParam", "selarrrow");
	for (var i = 0; i < ids.length; i++) {
		var rowData = $("#bit_list").jqGrid("getRowData", ids[i]);
		if(i < (ids.length-1)) {
			strId += rowData.bitid+",";
			strTypes += rowData.bittpcd+",";
		}else {
			strId += rowData.bitid;
			strTypes += rowData.bittpcd;
		}
	}
	
	var id = $("#file_list").jqGrid("getGridParam", "selrow"); 
	var fileData = $("#file_list").jqGrid("getRowData", id);
	
	var params ={
			bitid: strId, 
			servertp: serverTy, 
			bittpcd:strTypes, 
			filetpcd: fileData.filetpcd, 
			filever: fileData.filever, 
			fileloc: fileData.fileloc,
			filenm: fileData.filenm,
			startdt: fileData.startdt
	};
	
	ajaxCall("./download.soc", params, null, onSuccess, onErr);
	
	function onSuccess(data) {
		if(data.result == "1") {
			showAlert("요청이 정상적으로 전달되었습니다.");
			$('#bit_list').resetSelection();
		}
	}
	
	function onErr(data) {
		showAlert("다운로드 요청 중 오류가 발생하였습니다.");
	}
}

//ftp file upload
function reqUploadFile() {
	
	ftpServer = $("#select_ftp_server option:selected").val();
	//TODO 광역의 경우  13 정류장, 14 노선경로, 15 주요경유지 만 업로드 가능
	if(ftpServer == "123") {
		var fileTp = $("#select_filetpcd option:selected").val();
		
		if(fileTp != "13" && fileTp != "14" && fileTp != "15") {
			showAlert("광역서버는   파일유형 - 마스터데이터(정류장, 노선경로, 주요경유지) 항목만 업로드 가능합니다.");
			return;
		}
		
	}
	
	
	var formData = new FormData();
	formData.append("filetpcd", $("#select_filetpcd option:selected").val());
//	formData.append("filenm", $("#input_file_name").val());
	formData.append("filever", $("#input_filever").val());
	formData.append("serverInfo", $("#select_ftp_server option:selected").val());
	formData.append("app_startdt", $("#input_stdt").val().replace(/-/g,"") + $("#input_sttm").val().replace(/:/g,""));
	formData.append("file", $("#input_file")[0].files[0]);
	
	$.ajax({
		url: "./bit/ftpUploadFile.do",
		data: formData,
		dataType: 'json',
		contentType: false,
		processData: false,
		type: 'POST',
		beforeSend: function() {
		},
		success: function (data) {
			showAlert("정상적으로 업로드 되었습니다.");
			loadFileGrid();
		},
		error: function() {
			showAlert("업로드 중 오류가 발생하였습니다.");
		}
	});
}




var models1 = [
 		{onlyView:true,
 		 label:"안내기ID",	    name:"bitid",	       index:"bitid",		   width: "80", 	align:"center"},
 		{label:"정류장단축ID",  name:"short_bstopid",   index:"short_bstopid", width: "90",  	align:"center"},
 		{label:"설치위치",     name:"bstopnm",         index:"bstopnm",       width: "140", 	align:"left"},
 		{label:"안내기유형",    name:"cdnm",            index:"cdnm",          width: "173", 	align:"center"},
 		{                  name:"bittpcd",            index:"bittpcd",          hidden:true}
 		];

var models2 = [
		{onlyView:true,
		 label:"파일유형",	   name:"cdnm",	       index:"cdnm",		 width: "150", 	align:"center"},
		{label:"파일명",      name:"filenm",     index:"filenm",        width: "150", 	align:"left"},
		{label:"등록일시",     name:"regdt",      index:"regdt",         width: "120", 	align:"center"},
		{label:"파일버전",     name:"filever",    index:"filever",       width: "70", 	align:"center"},
		{label:"파일위치",     name:"fileloc",    index:"fileloc",       width: "135", 	align:"left"},
		{label:"적용시작일시",  name:"app_startdt", index:"app_startdt",   width: "128", 	align:"center"},
		{                  name:"filetpcd",            index:"filetpcd",          hidden:true},
		{                  name:"startdt",            index:"startdt",          hidden:true}
		];

function initGrid(){
	makeFilterGrid("#bit_list", models1, 110,  "resultList", onSelected1, onCompleted1, null)
	$("#bit_list").jqGrid('showCol','cb');

	makeFilterGrid("#file_list", models2, 110,  "resultList", null, onCompleted2, null)
	
	

	function onSelected1(rowid){
		// TODO 밝기기 설정 code 값
	}
	
	function onCompleted1(data){
		$("#list_count1").text($("#bit_list").getGridParam("reccount"));
	}
	
	function onCompleted2(data){
		$("#list_count2").text($("#file_list").getGridParam("reccount"));
	}
	
	
	loadFileGrid();
	
	$(window).bind('resize', function() {
		$("#bit_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#bit_list").jqGrid('setGridWidth', $(".main_chart").width());
		
		$("#file_list").jqGrid('setGridHeight', $(".file_right1 .main_chart").height()-23);
		$("#file_list").jqGrid('setGridWidth', $(".file_right1 .main_chart").width());
	}).trigger('resize');
}

function loadGrid() {
	var params = {
			bittpcd: $("#select_bittpcd_list option:selected").val(),
			server_id : $("#select_servertpcd option:selected").val()
	};
	reloadGrid("#bit_list", "./bit/selectBitList.do", params, "resultList");
}

function loadFileGrid() {
	var server = $("#select_servertpcd option:selected").val();
	
	if(server == '125') server = '121';
	if(server == '126') server = '120';
	
	var params = {
			server_id : server
	};
	
	reloadGrid("#file_list", "./bit/selectFtpFileList.do", params, "resultList");
}

function setFileName() {
	var file = $("#input_file")[0].files[0];
	if (file){
		$("#input_file_name").val(file.name);
	}else {
		$("#input_file_name").val("선택 파일 없음.");
	}
}

function initFile() {
	if ($.browser.msie) {  
		$("#input_file").replaceWith($("#input_file").clone(true)); 
	} else { 
		$("#input_file").val(""); 
	}
	$("#input_file_name").val("선택 파일 없음.");
}




function initEvent(){
	$("#select_project_type").change(function(){
		wide_ui = $("#select_project_type").val() ==  0 ? false : true;
		
		if(!wide_ui){
			inquiryCodeData();
			$("#select_bittpcd_list").attr("disabled", false);
		}
		else{
			$("#select_bittpcd_list").attr("disabled", true);
			// TODO inquiryWideParamidList()
		}
	});
	
	$("#input_paramid").focusout(function(){		
		var paramid = $("#input_paramid").val();
		
		if(paramid != ""){
			// 10자리 paramid format
			paramid = paramid.length >= 10 ? paramid : Array(10 - paramid.length + 1).join('0') + paramid;		
			$("#input_paramid").val(paramid);
		}
	});
	
	$('input[type="number"]').focusout(function(){
		var input = Number($(this).val());
		var min = Number(this.min);
		var max = Number(this.max);
		
		if( input > max ) 
			$(this).val(max);		
		else if( input < min ) 
			$(this).val(min);			
	});
	
	$("#btn_clear").click(function(){		
		$("#select_bittpcd_list").val('').trigger("change");
		$("#select_param_list").val('').trigger("change");
		
		loadGrid();
	});
	
	$("#select_bittpcd_list").change(function(){		
		inquiryParamidList();
	});
	 
	$("#btn_refresh").click(function(){		
		$("#btn_search").trigger("click");
	});
	
	$("#btn_search").click(function(){		
		loadGrid();
	});	
	
	$("#btn_reset").click(function(){
		$("#parameter_list").jqGrid("resetSelection");		
	
		btnDisabled(true);
		
		$(".bit_chart :input").val("");
		$(".bit_chart select").val($(".bit_chart select:first").val());

		// 입력창 초기화 시작
		// 공통
		$("#input_comm_retrycnt").val("1");
		$("#input_comm_tmout").val("1");
		$("#input_disp_onhms").val("0000");
		$("#input_disp_offhms").val("0000");
		$("#input_dispcycl").val("3");
		$("#input_msgcycl").val("3");
		// LED
		$("#input_fan_temper").val("0");
		$("#input_heat_temper").val("0");
		// LCD
		$("#input_lcd_fan_temper").val("10");
		$("#input_lcd_fan_temper_1").val("30");
		$("#input_lcd_heat_temper").val("10");
		$("#input_lcd_heat_temper_1").val("30");
		$("#input_volume_day_hms").val("0800");
		$("#input_volume_night_hms").val("2000");
		$("#input_day_volume").val("10");
		$("#input_night_volume").val("10");
		$("#input_bright_day_hms").val("0800");
		$("#input_bright_night_hms").val("2000");
		//신규
		$("#input_e_volume").val("3");
		$("#select_e_volume_yn option[value='1']").prop('selected', true);
		$("#select_e_incoming_type option[value='0']").prop('selected', true);
		$("#input_e_incoming_time").val("180");
		$("#input_e_incoming_stop").val("3");
		$("#input_e_send_capture_cycle").val("300");
		$("#select_e_bit_sort_type option[value='0']").prop('selected', true);
		$("#input_e_arrv_info_time").val("30");
		$("#input_e_scenario_time").val("5");
		$("#input_e_fan_max_temper").val("30");
		$("#input_e_fan_min_temper").val("5");
		$("#input_e_heater_max_temper").val("10");
		$("#input_e_heater_min_temper").val("5");
		$("#input_e_monitor_on").val("0500");
		$("#input_e_monitor_off").val("2359");
		$("#input_e_send_status_cycle").val("30");
	});
	
	$("#btn_modify").click(function(){
		if($("#parameter_list" ).getGridParam("selrow") ==null){
			showAlert("파라미터를 선택해 주십시오.");
			return;
		}

		showConfirmDlg( "변경한 내용을 저장합니까?", function(){
			var params = inquiryParameterSet();
			if(params == null) return;
			
			ajaxCall("./bit/updateBitParam.do", params, null, onSuccessUpdate, null);
			
			function onSuccessUpdate(data) {
				if(data && data.result) {
					if(Number(data.result) == -1) {
						showAlert("저장 중 오류가 발생하였습니다.");
					}else {
						showAlert("저장 되었습니다.");
						$("#btn_refresh").trigger("click");						
					}
				}else {
					showAlert("저장 중 오류가 발생하였습니다.");
				}
			}			
		});		
	});
		
	$("#btn_delete").click(function(){
		if($("#parameter_list" ).getGridParam("selrow") ==null){
			showAlert("파라미터를 선택해 주십시오.");
			return;
		}		
		
		showConfirmDlg("선택한 파라미터를 삭제합니까?", function(){
//			var rowid  = $("#parameter_list" ).getGridParam("selrow");			
//			var params = { paramid : $("#parameter_list").getRowData(rowid).paramid };
			
			var params = inquiryParameterSet();
			if(params == null) return;
			
			ajaxCall("./bit/deleteBitParam.do", params, null, onSuccessDelete, null);
			
			function onSuccessDelete(data) {
				if(data && data.result) {
					if(Number(data.result) == -1) {
						showAlert("삭제 중 오류가 발생하였습니다.");
					}else {
						showAlert("삭제 되었습니다.");
						$("#btn_refresh").trigger("click");						
					}
				}else {
					showAlert("삭제 중 오류가 발생하였습니다.");
				}
			}	
		});
	});
	
	$("#btn_new").click(function(){
		showConfirmDlg("작성된 내용으로 파라미터를 등록합니까?", function(){
			var params = inquiryParameterSet();
			if(params == null) return;
			
			ajaxCall("./bit/insertBitParam.do", params, null, onSuccessInsert, null);				
			
			function onSuccessInsert(data) {
				if(data && data.result) {
					if(Number(data.result) == -1) {
						showAlert("등록 중 오류가 발생하였습니다.");
					}else {
						showAlert("등록 되었습니다.");
						$("#btn_refresh").trigger("click"); 
						btnDisabled(false);
					}
				}else {
					showAlert("등록 중 오류가 발생하였습니다.");
				}
			}		
		});		
	});
	
	$("#btn_excel").click(function() {
		if( 0 < $("#parameter_list").getGridParam("reccount") ){			
			execlDownload();
		}
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

function btnDisabled(flag_new){
	if(flag_new){
		$("#btn_new").attr("class", "");
		$("#btn_modify").attr("class", "disabled");
		$("#btn_delete").attr("class", "disabled");
		
		$("#btn_new").css("pointer-events", "auto");
		$("#btn_modify").css("pointer-events", "none");
		$("#btn_delete").css("pointer-events", "none");
	}else{
		$("#btn_new").attr("class", "disabled");
		$("#btn_modify").attr("class", "");
		$("#btn_delete").attr("class", "");
		
		$("#btn_new").css("pointer-events", "none");
		$("#btn_modify").css("pointer-events", "auto");
		$("#btn_delete").css("pointer-events", "auto");
	}			
}

function inquiryParameterSet(){
	var paramid = $("#input_paramid").val();	

	if(paramid == ""){
		showAlert("파라미터ID를 입력하세요.");
		$("#input_paramid").focus();
		return null;
	}
	
	var rowid = $("#parameter_list").getGridParam("selrow");
	var rowid_arr = $("#parameter_list").getDataIDs();
	var searchWord = $("#parameter_list").getRowData(rowid).paramid;
	
	for(var i=0; i<rowid_arr.length; i++){
		if(rowid !=rowid_arr[i]){
			var each_paramid = $("#parameter_list").getRowData(rowid_arr[i]).paramid;
			if(paramid == each_paramid){
				showAlert("중복되는 파라미터ID 값입니다.");
				$("#input_paramid").focus();
				return null;
			}
		}		
	}
	
	// 4자리 font format("0000")
	/*var fonttpcd = $("#select_route_font").val() +$("#select_arrive_font").val() 
		+$("#select_bstop_font").val() +"0";   
	var font_colorcd = $("#select_route_color").val() +$("#select_arrive_color").val() 
		+$("#select_bstop_color").val() +"0";		
	
	var params = {
			searchWord : searchWord, // ID 수정시 검색 목적
			paramid : paramid,
			title : $("#input_title").val(),
			bittpcd : $("#select_bittpcd").val(),
			comm_retrycnt : $("#input_comm_retrycnt").val(),
			comm_tmout : $("#input_comm_tmout").val(),
			disp_onhms : $("#input_disp_onhms").val(),
			disp_offhms : $("#input_disp_offhms").val(),
			fan_temper :  $("#input_fan_temper").val(),
			heat_temper :  $("#input_heat_temper").val(),
			
			fonttpcd : fonttpcd,
			font_colorcd : font_colorcd,
			
			lcd_fan_temper : $("#input_lcd_fan_temper").val(),
			lcd_fan_temper_1 : $("#input_lcd_fan_temper_1").val(),
			lcd_heat_temper : $("#input_lcd_heat_temper").val(),
			lcd_heat_temper_1 : $("#input_lcd_heat_temper_1").val(),
			volume_day_hms : $("#input_volume_day_hms").val(),
			volume_night_hms : $("#input_volume_night_hms").val(),
			day_volume : $("#input_day_volume").val(),
			night_volume : $("#input_night_volume").val(),
			bright_day_hms : $("#input_bright_day_hms").val(),
			bright_night_hms : $("#input_bright_night_hms").val(),
			day_bright : $("#select_day_bright").val(),
			night_bright : $("#select_night_bright").val(),
			//upddt : upddt, // SQL 처리			
			dispcycl : $("#input_dispcycl").val(),
			msgcycl : $("#input_msgcycl").val()	
	}
	*/
	
	var params = {
			searchWord : searchWord, // ID 수정시 검색 목적
			paramid : paramid,
			title : $("#input_title").val(),
			bittpcd : $("#select_bittpcd option:selected").val(),
			comm_retrycnt : $("#input_comm_retrycnt").val(),
			comm_tmout : $("#input_comm_tmout").val(),
			e_volume   : $("#input_e_volume").val(),
			e_volume_yn: $("#select_e_volume_yn option:selected").val(),
			e_incoming_type : $("#select_e_incoming_type option:selected").val(),
			e_incoming_time : $("#input_e_incoming_time").val(),
			e_incoming_stop   : $("#input_e_incoming_stop").val(),
			e_send_capture_cycle : $("#input_e_send_capture_cycle").val(),
			e_bit_sort_type : $("#select_e_bit_sort_type option:selected").val(),
			e_arrv_info_time: $("#input_e_arrv_info_time").val(),
			e_scenario_time : $("#input_e_scenario_time").val(),
			e_fan_max_temper : $("#input_e_fan_max_temper").val(),
			e_fan_min_temper : $("#input_e_fan_min_temper").val(),
			e_heater_max_temper : $("#input_e_heater_max_temper").val(),
			e_heater_min_temper : $("#input_e_heater_min_temper").val(),
			e_monitor_on     : $("#input_e_monitor_on").val(),
			e_monitor_off    : $("#input_e_monitor_off").val(),
			e_send_status_cycle : $("#input_e_send_status_cycle").val()
	}
	
	return params;
}

function inquiryCodeData() {
	ajaxCall("./sys/selectBitParamCodeList.do", null, null, onSuccess, null);	

	// TODO 광역, 밝기제어설정 유효 code 확인	
	function onSuccess(data) { 
		
		if(data && data.bittpcd) {
			var strTemp = "<option value=''>전체</option>";
			var strTemp2 = "";
			$.each( data.bittpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
				strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_bittpcd_list").empty().append(strTemp);						
			$("#select_bittpcd").empty().append(strTemp2);						
		}
		
		if(data && data.fonttpcd) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.fonttpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("[name=fonttpcd]").empty().append(strTemp);
		}
		
		if(data && data.colorcd) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.colorcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("[name=colorcd]").empty().append(strTemp);
		}
		
		
		inquiryParamidList();	
	}
}

function inquiryParamidList() {
	ajaxCall("./bit/selectBitParamList.do", { bittpcd : $("#select_bittpcd_list").val() }, null , onSuccess, null);
	
	function onSuccess(data) {
		if(data && data.resultList){
			var strTemp;
			
			if(data.resultList.length < 1)
				strTemp = "<option value=''>전체</option>";
			else{
				strTemp = "<option value=''>전체</option>";				
				$.each( data.resultList, function( index, value ) {
					strTemp += "<option value='"+value.paramid+"'>["+value.paramid+"]</option>";
				});
			}			
			$("#select_param_list").empty().append(strTemp);			
		}
	}
}

function inquiryWideParamidList() {
	ajaxCall("./bit/selectBitParamList.do", { wide_ui : wide_ui }, null , onSuccess, null);
	
	function onSuccess(data) {
		if(data && data.resultList){
			var strTemp;
			
			if(data.resultList.length < 1)
				strTemp =  "<option value=''>없음</option>";
			else{
				strTemp = "<option value=''>전체</option>";				
				$.each( data.resultList, function( index, value ) {
					strTemp += "<option value='"+value.paramid+"'>["+value.paramid+"]</option>";
				});
			}			
			$("#select_param_list").empty().append(strTemp);			
		}
	}
}

function execlDownload(){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/excelBitParamList.do";
	form.method = "POST";
	
	var data1 = $("#parameter_list").jqGrid('getGridParam','colNames');
	data1 = JSON.stringify(data1);	
	
	var data2 = $("#parameter_list").getRowData();
	data2 = JSON.stringify(data2);
	
	var para1 = document.createElement('INPUT'); 
	para1.type  = 'HIDDEN';
	para1.name  = 'label';
	para1.value = data1;
	form.appendChild(para1);	
	
	var para2 = document.createElement('INPUT'); 
	para2.type  = 'HIDDEN';
	para2.name  = 'rows';
	para2.value = data2;
	form.appendChild(para2); 
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true	);
}