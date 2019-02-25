

var model1 = [
	   			{label:"적용시작일",				name:"app_startdt",   	    	index:"app_startdt",     			width: "110", 	align:"center",		type:"I"},
	   			{label:"적용종료일",				name:"app_enddt",     			index:"app_enddt",     				width: "110", 	align:"center",		type:"I"},
	   			{label:"개문주행임계거리(m)",		name:"open_run_thresdist",      index:"open_run_thresdist",    		width: "130", 	align:"center",		type:"I"},
	   			{label:"개문주행임계속도(Km/h)",	name:"open_run_thresspd",       index:"open_run_thresspd",   	    width: "130", 	align:"center",		type:"I"},
	   			{label:"과속임계속도(Km/h)",		name:"overspd_thresspd",       	index:"overspd_thresspd",   	    width: "130", 	align:"center",		type:"I"},
	   			{label:"과속기준시간(초)",			name:"overspd_critictm",       	index:"overspd_critictm",   	    width: "130", 	align:"center",		type:"I"},
	   			{label:"급가속임계속도(Km/h)",		name:"accel_thresspd",       	index:"accel_thresspd",   	    	width: "130", 	align:"center",		type:"I"},
	   			{label:"급감속임계속도(Km/h)",		name:"decel_thresspd",       	index:"decel_thresspd",   	    	width: "130", 	align:"center",		type:"I"},
	   			{label:"급가속/급감속기준시간(초)",	name:"accel_decel_critictm",    index:"accel_decel_critictm",   	width: "140", 	align:"center",		type:"I"},
	   			{label:"노선이탈임계거리(m)",		name:"outroute_thresdist",      index:"outroute_thresdist",   	    width: "130", 	align:"center",		type:"I"},
	   			{label:"노선이탈임계시간(분)",		name:"outroute_threstm",       	index:"outroute_threstm",   	    width: "130", 	align:"center",		type:"I"},
	   			{label:"임의지연임계시간(분)",		name:"volun_delay_threstm",     index:"volun_delay_threstm",   	    width: "130", 	align:"center",		type:"I"},
	   			{label:"동적이벤트임계시간(분)",		name:"dyna_evt_threstm",       	index:"dyna_evt_threstm",   	    width: "130", 	align:"center",		type:"I"},
	   			{label:"정류소서비스임계속도(Km/h)",	name:"bstop_svc_thresspd",      index:"bstop_svc_thresspd",   	    width: "150", 	align:"center",		type:"I"},
	   			
	   			{name:"rowid",     		  	index:"rowid",  				hidden:true }
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	initPicker();
});

function initPicker(){
	initCalendar("inp_search_startdt", YEAR_FORMAT1, true);
	initCalendar("input_app_startdt", YEAR_FORMAT1, true);
	initCalendar("input_app_enddt", YEAR_FORMAT1, true);
};

function initGrid(){
	makeGrid("#detail_list", model1, 300, "resultList", null, null ,null);

	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
			search_startdt : $("#inp_search_startdt").val().replace(/-/g,'')
		};
		showLoader();
		reloadGrid("#detail_list", "./sys/selectViolateList.do", param, "resultList");
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_search_startdt").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	
	//신규등록버튼
	$("#btn_insert").on("click",function(){
		showConfirmDlg("작성하신 내용을 신규등록 하시겠습니까?", function(){
			var param = {
				app_startdt : $("#input_app_startdt").val().replace(/-/g,''), 	    	
				app_enddt : $("#input_app_enddt").val().replace(/-/g,''),     			
				open_run_thresdist : $("#input_open_run_thresdist").val(),   
				open_run_thresspd : $("#input_open_run_thresspd").val(),   
				overspd_thresspd : $("#input_overspd_thresspd").val(),     
				overspd_critictm : $("#input_overspd_critictm").val(),    
				accel_thresspd : $("#input_accel_thresspd").val(),      
				decel_thresspd : $("#input_decel_thresspd").val(),       
				accel_decel_critictm : $("#input_accel_decel_critictm").val(), 
				outroute_thresdist : $("#input_outroute_thresdist").val(),   
				outroute_threstm : $("#input_outroute_threstm").val(),     
				volun_delay_threstm : $("#input_volun_delay_threstm").val(),  
				dyna_evt_threstm : $("#input_dyna_evt_threstm").val(),     
				bstop_svc_thresspd : $("#input_bstop_svc_thresspd").val()   
			};
			ajaxCall("./sys/insertViolate.do", param , null, inst_success, null);
			function inst_success(data){
				if(data.result != 1){
					showAlert("다시 시도해주세요");
				} else {
					showAlert("등록 되었습니다");
					$("#btn_search").trigger("click");
				}
			};
		});
	});
	
	//수정버튼
	$("#btn_update").on("click",function(){
		showConfirmDlg("작성하신 내용을 수정 하시겠습니까?", function(){
			var gRowid = $("#detail_list").jqGrid('getGridParam', "selrow");
			var gRowData = $("#detail_list").jqGrid('getRowData', gRowid);
			var rowid = gRowData.rowid;
			if(!rowid){
				showAlert("수정하실 내역을 선택해주세요");
				return;
			}
			
			var param = {
				app_startdt : $("#input_app_startdt").val().replace(/-/g,''), 	    	
				app_enddt : $("#input_app_enddt").val().replace(/-/g,''),     			
				open_run_thresdist : $("#input_open_run_thresdist").val(),   
				open_run_thresspd : $("#input_open_run_thresspd").val(),   
				overspd_thresspd : $("#input_overspd_thresspd").val(),     
				overspd_critictm : $("#input_overspd_critictm").val(),    
				accel_thresspd : $("#input_accel_thresspd").val(),      
				decel_thresspd : $("#input_decel_thresspd").val(),       
				accel_decel_critictm : $("#input_accel_decel_critictm").val(), 
				outroute_thresdist : $("#input_outroute_thresdist").val(),   
				outroute_threstm : $("#input_outroute_threstm").val(),     
				volun_delay_threstm : $("#input_volun_delay_threstm").val(),  
				dyna_evt_threstm : $("#input_dyna_evt_threstm").val(),     
				bstop_svc_thresspd : $("#input_bstop_svc_thresspd").val(),
				rowid : rowid
			};
			ajaxCall("./sys/updateViolate.do", param , null, upd_success, null);
			function upd_success(data){
				if(data.result != 1){
					showAlert("다시 시도해주세요");
				} else {
					showAlert("수정 되었습니다");
					$("#btn_search").trigger("click");
				}
			};
		}); 
	});	
	
	//삭제버튼
	$("#btn_delete").on("click",function(){
		showConfirmDlg("해당 프로세스를 삭제 하시겠습니까?", function(){
			var gRowid = $("#detail_list").jqGrid('getGridParam', "selrow");
			var gRowData = $("#detail_list").jqGrid('getRowData', gRowid);
			var rowid = gRowData.rowid;
			if(!rowid){
				showAlert("삭제하실 내역을 선택해주세요");
				return;
			}
			ajaxCall("./sys/deleteViolate.do", {rowid : rowid} , null, del_success, null);
			function del_success(data){
				if(data.result != 1){
					showAlert("다시 시도해주세요");
				} else {
					showAlert("삭제 되었습니다");
					$("#btn_search").trigger("click");
				}
			};
		});
	});
	
};
