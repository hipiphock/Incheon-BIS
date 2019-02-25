$(document).ready(function(){
	appendLoader("조회 중...");
	$("#tab1").css("pointer-events", "none");
	$("#tab2").css("pointer-events", "none");
	initEvent();
	initPicker();
	setCategory();
	setDialog();
});

var editable = false;
var addable = false;
var selectDlg;


var models1 = [
               //{label:"시설물관리ID",			name:"facilid",				index:"facilid",       		width: "70", 	align:"center", sorttype:"number",	type:"I"},
               {label:"BIT ID",				name:"bitid",			index:"bitid",       	width: "70", 	align:"center", sorttype:"number",	type:"I"},
               {label:"단축 ID",				name:"short_bstopid",	index:"short_bstopid",  width: "70", 	align:"center", sorttype:"number",	type:"I"},
               {label:"정류소 ID",				name:"bstopid",			index:"bstopid",       	width: "70", 	align:"center", sorttype:"number",	type:"I"},
               {label:"정류소명",				name:"bstopnm",			index:"bstopnm",       	width: "165", 	align:"left",   sorttype:"text",	type:"I"},
               {label:"사업구분",				name:"projecttype",		index:"projecttype", 	width: "70", 	align:"center", sorttype:"text"},
               {label:"BIT 유형",				name:"bittype",   		index:"bittype",      	width: "150", 	align:"center", sorttype:"text"},
               {label:"주소",					name:"address",   		index:"address",      	width: "150", 	align:"left",   sorttype:"text",	type:"I"},
               {label:"상세설명",				name:"detail",   		index:"detail",      	width: "150", 	align:"center", sorttype:"text",	type:"I"},
               {label:"제공서버",				name:"server_name",		index:"server_name",    width: "80", 	align:"center"},
               {label:"비고",					name:"etc",   			index:"etc",      		width: "150", 	align:"center", sorttype:"text",	type:"I"},

               //tb_omm_bit
               {name:"bittpcd",					index:"bittpcd", 				type:"S", hidden:true},
               {name:"projecttpcd",				index:"projecttpcd", 			type:"S", hidden:true},               
               {name:"news_send_ind",			index:"news_send_ind", 			type:"S", hidden:true},
               {name:"tts_cntl_ind",			index:"tts_cntl_ind", 			type:"S", hidden:true},
               {name:"weather_send_ind",		index:"weather_send_ind", 		type:"S", hidden:true},
               {name:"dmb_cntl_ind",			index:"dmb_cntl_ind", 			type:"S", hidden:true},
               {name:"subway_send_ind",			index:"subway_send_ind", 		type:"S", hidden:true},
               {name:"shock_cntl_ind",			index:"shock_cntl_ind", 		type:"S", hidden:true},               
               {name:"admin",					index:"admin", 					type:"I", hidden:true},
               {name:"bitserver_id",			index:"bitserver_id", 			type:"I", hidden:true},
               {name:"comnum",					index:"comnum", 				type:"I", hidden:true},
               {name:"dmb_cntl_ind",			index:"dmb_cntl_ind", 			type:"S", hidden:true},
               
               //tb_omm_facil
               {name:"facilid",					index:"facilid", 				type:"I", hidden:true},
               {name:"faciltpcd",				index:"faciltpcd", 				type:"I", hidden:true},
               {name:"modelnm",					index:"modelnm", 			    type:"I", hidden:true},
               {name:"installloc",				index:"installloc", 			type:"I", hidden:true},
               {name:"ipaddr_1",				index:"ipaddr_1", 				type:"I", hidden:true},
               {name:"ipaddr_2",				index:"ipaddr_2", 				type:"I", hidden:true},
               {name:"commlinktpcd",			index:"commlinktpcd", 		    type:"S", hidden:true},
               {name:"portno",					index:"portno", 				type:"I", hidden:true},
               {name:"macaddr",					index:"macaddr", 				type:"I", hidden:true},
               {name:"facil_modem_serialno",	index:"facil_modem_serialno",	type:"I", hidden:true},
               {name:"manufymd",				index:"manufymd", 			    type:"I", hidden:true},
               {name:"storeymd",				index:"storeymd", 			    type:"I", hidden:true},
               {name:"delivymd",				index:"delivymd", 			    type:"I", hidden:true},
               {name:"purchdt",					index:"purchdt", 				type:"I", hidden:true},
               {name:"installdt",				index:"installdt", 				type:"I", hidden:true},
               {name:"maintn_relatorgid",		index:"maintn_relatorgid",	    type:"S", hidden:true},
               {name:"descr",					index:"descr", 					type:"I", hidden:true},
               {name:"history",					index:"history", 				type:"I", hidden:true},
               {name:"use_startdt",				index:"use_startdt", 			type:"I", hidden:true},
               {name:"use_enddt",				index:"use_enddt", 			    type:"I", hidden:true},
               {name:"useyn",					index:"useyn", 					type:"S", hidden:true},
               {name:"upddt",					index:"upddt", 				    type:"I", hidden:true},
               {name:"upd_userid",				index:"upd_userid", 			type:"I", hidden:true},
               {name:"com_linenum",				index:"com_linenum", 		    type:"I", hidden:true},
               {name:"power_num",				index:"power_num", 			    type:"I", hidden:true},
               {name:"com_asso",				index:"com_asso", 			    type:"I", hidden:true}
              ]
//정류장 리스트
var models2 = [
               {onlyView:true,
            	label:"정류장 ID",		name:"bstopid",   		index:"stop_id",     	width: "74", 	align:"center", sorttype:"number"},
               {label:"모바일 ID",		name:"short_bstopid",  	index:"short_bstopid",     width: "60", 	align:"center", sorttype:"number"},
               {label:"정류장명",		name:"bstopnm",  		index:"bstopnm",     	width: "153", 	align:"left", sorttype:"text"},	           
               ]

function setUseText(cellValue, options, rowdata, action) {
	switch(cellValue){
	case "0" : 
		return "<span style='color:"+COLOR_RED+";'>비활성</span>"; 
		break; 
    case "1": 
        return "<span style='color:"+COLOR_GREEN+";'>사용중</span>"; 
        break; 
	}
}



function setDialog() {
	$("#txt_title").text("정류장 선택");
	selectDlg = getDialog("pop_choice", "container");
	
	makeGrid("#pop_list", models2, 500, "resultList", null, null, onDoubleClicked);
	$("#pop_list").jqGrid('setGridHeight',223);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	//더블 클릭 시 선택 후 닫기
	function onDoubleClicked(rowId) {
		var rowData = $("#pop_list").jqGrid("getRowData", rowId);
//		selected_stop_id = rowData.stop_id;
		$("#input_bstopnm").val(rowData.bstopnm);
		$("#input_installloc").val(rowData.bstopnm);
		$("#input_bstopid").val(rowData.bstopid);
//		$("#td_lat").text(rowData.lat);
//		$("#td_lng").text(rowData.lng);
		selectDlg.dialog("close");
	}
	
	reloadGrid("#pop_list", "./bit/selectBusStopList.do", null, "resultList");

	//닫기
	$("#btn_close").click(function() {
		selectDlg.dialog("close");
	});
	
	//정류장 엔터 검색
	$("#input_pop_word").on("keydown", function(key) {
		if (key.keyCode == 13) {
			$("#btn_pop_search").trigger("click");
		}
	})
	
	//정류장 검색
	$("#btn_pop_search").click(function() {
		var params = {
				text_search : $("#input_pop_word").val()
		}
		reloadGrid("#pop_list", "./bit/selectBusStopList.do", params, "resultList");
	});
}

function initEvent() {
	/*setInputCtrl("input_regist_dt", "number", 14);*/
		
	// 새로고침
	$("#btn_refresh").click(function() {
		$("#btn_search").trigger("click");
		//window.location.reload();
	})
	
	// Enter 검색
	$("#input_search").on("keydown", function(key) {
		if (key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	})
	
	// 검색 이벤트
	$("#btn_search").click(function() {
		loadGrid();
	})
	
	// Clear
	$("#btn_clear").click(function() {
		$("#select_bittpcd_list").val('').trigger("change");
		$("#select_projecttpcd_list").val('').trigger("change");
		$("#input_search").val("");
		
		loadGrid();
	})
	
	$("#btn_choice").click(function(){
		if(editable){			
			selectDlg.dialog("open");
		}
	})

	// 추가 - jsp 주석 숨김
	$("#btn_add").click(function(){
		showAlert("내용 작성 후 [저장]을 눌러 등록하십시오.")
		ajaxCall("./bit/selectAddBitFacilid.do", null, null, onSuccess, null)
		
		function onSuccess(data){
			if(data && data.result) {
				console.log("##selectAddBitFacilid ID : " + data.result.facilid);
				$("#input_facilid").val(data.result.facilid);
				$("#input_bitid").val(data.result.facilid);				
			}else {
				console.log("##selectAddBitFacilid Fail : 새 아이디 받기 실패")
			}
		}
		
		// UI 세팅
		addable = true;				
		$("#tab_facil").trigger("click");		
		editable = true;
		$("#tab1").css("pointer-events", "auto");
		$("#tab2").css("pointer-events", "auto");
		$("#bit_info_list").resetSelection();
		$("#btn_save").attr("class","");
		
		// 입력란 초기화 - 시설정보
		$("#table_facil input").val("");
		$("#table_facil select").prop("selectedIndex", 0);
		// 입력란 초기화 - 기본정보
		$("#table_bit input").val("");
		$("#table_bit select").prop("selectedIndex", 0);		
		$("#input_address").val("");
		$("#input_detail").val("");
		$("#input_etc").val("");
	})
	
	//수정
	$("#btn_mod").click(function(){
		if (!editable) {
			showAlert("수정 모드로 전환 합니다.");
			editable = true;
			//클릭 가능
			$("#tab1").css("pointer-events", "auto");
			$("#tab2").css("pointer-events", "auto");
			$("#btn_save").attr("class", "");
		}
	})
	
	//새로고침
	$("#btn_refresh2").click(function(){		
		var row_id = $("#bit_info_list").jqGrid("getGridParam", "selrow"); 
		$("#bit_info_list").jqGrid("setSelection", row_id);
	})
	
	//저장
	$("#btn_save").click(function(){
		if (!editable){
			return;
		}
		
		var row_id = $("#bit_info_list").jqGrid("getGridParam", "selrow");
		if (row_id == null && !addable) {// 신규등록 활성화 아닐 때
			showAlert("BIT를 선택하세요.");
			return;
		}
		
		showConfirmDlg("[" + $("#input_bitid").val() + "]의 BIT 정보를 저장합니다.<br>계속하시겠습니까?", saveConfirm);
		
		function saveConfirm() {			
			var params = getParams();
			
			if(addable){
				// 신규 등록				
				ajaxCall("./bit/registBit.do", params, null, updateSuccess, updateFail);				
			}else{
				// 수정
				ajaxCall("./bit/modBitInfo.do", params, null, updateSuccess, updateFail);				
			}
			
			function updateSuccess(data) {
				if (data.result_code != 1) {
					showAlert("저장 실패");
				}else{
					$("#btn_refresh").trigger("click");
					
					editable = false;
					//클릭 불가능
					$("#tab1").css("pointer-events", "none");
					$("#tab2").css("pointer-events", "none");
					$("#btn_save").attr("class","disabled");
					
					addable = false;	
					showAlert("저장되었습니다.");
					loadGrid();
				}				
			}
			
			function updateFail() {
				showAlert("저장 실패");
				console.log("##fail");
				//$("#btn_refresh").trigger("click");				
			}			
		}
	})
	
	//취소
	$("#btn_cancel").click(function(){		
		showConfirmDlg("저장하지 않은 데이터는 사라집니다.", cancelConfirm);
		
		function cancelConfirm() {
			if(addable){
				$("#bit_info_list").jqGrid("setSelection", 1);								
				addable = false;
			}
			
			editable = false;
			//클릭 불가능
			$("#tab1").css("pointer-events", "none");
			$("#tab2").css("pointer-events", "none");
			$("#btn_save").attr("class","disabled");
			
			var row_id = $("#bit_info_list").jqGrid("getGridParam", "selrow"); 
			$("#bit_info_list").jqGrid("setSelection", row_id);					
		}
	});
}

function getParams(){
	var params = {
			// TB_OMM_BIT
			bitid : $("#input_bitid").val(),
			bstopid: $("#input_bstopid").val(),
			projecttpcd : $("#select_projecttpcd").val(),
			bittpcd : $("#select_bittpcd").val(),
			news_send_ind : $("#select_news_send_ind").val(),
			tts_cntl_ind : $('#select_tts_cntl_ind').val(),
			weather_send_ind : $("#select_weather_send_ind").val(),
			dmb_cntl_ind : $("#select_dmb_cntl_ind").val(),
			subway_send_ind : $("#select_subway_send_ind").val(),
			shock_cntl_ind : $("#select_shock_cntl_ind").val(),
			address : $("#input_address").val(),
			admin : $("#input_admin").val(),
			bitserver_id : $("#input_bitserver_id").val(),
			comnum : $("#input_comnum").val(),					
			detail : $("#input_detail").val(),
			etc : $("#input_etc").val(),
			
			// TB_OMM_FACIL
			facilid : 				$("#input_facilid").val(),
			modelnm :			$("#input_modelnm").val(),			
			installloc : 			$("#input_installloc").val(),				
			ipaddr_1 : 			$("#input_ipaddr_1").val(),				
			ipaddr_2 : 			$("#input_ipaddr_2").val(),				
			commlinktpcd : 	$("#select_commlinktpcd").val(),		
			portno : 				$("#input_portno").val(),				
			macaddr : 			$("#input_macaddr").val(),				
			modem_serialno :$("#input_facil_modem_serialno").val(),	
			manufymd : 		$("#input_manufymd").val(),			
			storeymd : 			$("#input_storeymd").val(),			
			delivymd : 			$("#input_delivymd").val(),				
			purchdt : 			$("#input_purchdt").val(),				
			installdt : 			$("#input_installdt").val(),				
			maintn_relatorgid : $("#select_maintn_relatorgid").val(),	
			descr : 				$("#input_descr").val(),					
			history : 				$("#input_history").val(),				
			use_startdt : 		$("#input_use_startdt").val(),			
			use_enddt : 		$("#input_use_enddt").val(),			
			useyn : 				$("#select_useyn").val(),					
			upddt : 				$("#input_upddt").val(),					
			upd_userid : 		$("#input_upd_userid").val(),			
			com_linenum : 	$("#input_com_linenum").val(),		
			power_num : 		$("#input_power_num").val(),			
			com_asso : 			$("#input_com_asso").val()
	}			
	console.log(params);
	return params;
}

//그룹화, 클릭 이벤트
function setCategory() {
	ajaxCall("./sys/selectBitManageCodeList.do", null, null, onSuccess, null);
	
	function onSuccess(data) { 
		if(data && data.bittpcd) {
			var strTemp = "<option value=''>전체</option>";
			var strTemp2 = "<option value=''>정의되지 않은 유형</option>";
			$.each( data.bittpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
				strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_bittpcd_list").empty().append(strTemp);
			$("#select_bittpcd").empty().append(strTemp2);
		}
		
		if(data && data.projecttpcd) {
			var strTemp = "<option value=''>전체</option>";
			var strTemp2 = "";
			$.each( data.projecttpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
				strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_projecttpcd_list").empty().append(strTemp);						
			$("#select_projecttpcd").empty().append(strTemp2);						
		}
		
		if(data && data.commlinktpcd) {
			var strTemp = "<option value=''>미지정</option>";
			$.each( data.commlinktpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_commlinktpcd").empty().append(strTemp);			
		}
		
		if(data && data.relatorgid) {
			var strTemp = "<option value=''>미지정</option>";			
			$.each( data.relatorgid, function( index, value ) {
				strTemp += "<option value='"+value.relatorgid+"'>"+value.orgnm+"</option>";				
			});
			$("#select_maintn_relatorgid").empty().append(strTemp);				
		}
		initGrid();
		
		$("#select_bittpcd_list").change(function() {
			$("#input_search").val("");
			loadGrid();
		});
		
		$("#select_projecttpcd_list").change(function() {
			$("#input_search").val("");
			loadGrid();
		});
		
		$("#select_server_kind").change(function() {
			$("#input_search").val("");
			loadGrid();
		});
	}
}

function loadGrid() {
	showLoader();
	var param = {
			bittpcd : $("#select_bittpcd_list option:selected").val(),
			projecttpcd : $("#select_projecttpcd_list option:selected").val(),
			searchWord : $("#input_search").val(),
			server_id : $("#select_server_kind option:selected").val()
			}
	
	reloadGrid("#bit_info_list", "./bit/selectBitManageList.do", param, "resultList");
}

function initPicker(){
	initCalendar("input_manufymd", YEAR_FORMAT1, true);
	initCalendar("input_storeymd", YEAR_FORMAT1, true);
	initCalendar("input_delivymd", YEAR_FORMAT1, true);
	initCalendar("input_purchdt", YEAR_FORMAT1, true);
	initCalendar("input_installdt", YEAR_FORMAT1, true);
	initCalendar("input_use_startdt", YEAR_FORMAT1, true);
	initCalendar("input_use_enddt", YEAR_FORMAT1, true);
	initCalendar("input_upddt", YEAR_FORMAT1, true);
}

function initGrid() {
	makeGrid("#bit_info_list", models1, 500, "resultList", onSelectedRow, selectFirstBitRow, null);

	function onSelectedRow(rowId) {
		editable = false;
		//클릭 불가능
		$("#tab1").css("pointer-events", "none");
		$("#tab2").css("pointer-events", "none");
		$("#btn_save").attr("class","disabled");
		
		addable = false;				

	}
	
	function selectFirstBitRow(data) {
		$("#result_cnt").text(data.rows.length);
		$("#bit_info_list").jqGrid("setSelection", 1);
	}
		
	$(window).bind('resize', function() {
		$("#bit_info_list").jqGrid('setGridHeight',$(".bit_left_chart_body").height() - 23);
		$("#bit_info_list").jqGrid('setGridWidth',$(".bit_left_chart_body").width());
	}).trigger('resize');
	
	loadGrid();
}

