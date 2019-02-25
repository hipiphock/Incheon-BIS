var row_id = null; //선택된 행의 row_id 저장(scroll 이벤트)

var model1 = [
	   			{label:"Master적용날짜",	name:"masterdate",      index:"masterdate",     width: "90", 	align:"center",		type:"I"},
	   			{label:"노선번호",			name:"route",        	index:"route",      	width: "100", 	align:"center",		type:"I"},
	   			{label:"수정내역",			name:"modifycont",      index:"modifycont",     width: "290", 	align:"center",		type:"I"},
	   			{label:"CSV버전",			name:"csvver",         	index:"csvver",      	width: "80", 	align:"center",		type:"I"},
	   			{label:"GIS버전",			name:"gisver",    		index:"gisver",      	width: "80", 	align:"center",		type:"I"},
	   			{label:"비고",			name:"memo",   			index:"memo",      		width: "150", 	align:"center",		type:"I"},
	   			{label:"업데이트파일",		name:"updatefile",      index:"updatefile",     width: "100", 	align:"center",		type:"I"},
	   			
	   			{name:"num",      		index:"num", 		    hidden:true}
   			 ];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	initPicker();
});

function initPicker(){
	initCalendar("inp_search_startdt", YEAR_FORMAT1, false);
	initCalendar("inp_search_enddt", YEAR_FORMAT1, true);
	initCalendar("input_masterdate", YEAR_FORMAT1, true);
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24 * 7); //일주일전
	setCalendar("inp_search_startdt", YEAR_FORMAT1, prev);
	setCalendar("inp_search_enddt", YEAR_FORMAT1, today);
	setCalendar("input_masterdate", YEAR_FORMAT1, today);
};




function initGrid(){
	makeGrid("#version_list", model1, 300, "resultList", null, onComplete ,null);

	function onComplete(){
		$("#list_cnt").text($("#version_list").getGridParam("reccount"));
		
		//행 자동 선택
		if(row_id != null){ //수정에서 저장한 row_id에 해당하는 row 선택
			$("#version_list").setSelection(row_id, true);
			scrollOffset("version_list");
			row_id = null; //초기화
		} else{
			$("#version_list").setSelection(1, true);
		}
	};
	
	function scrollOffset(gridid){
		var offset = $("#"+gridid).find("#"+row_id).offset();
		var scroll = $("#"+gridid).closest(".ui-jqgrid-bdiv");
		scroll.scrollTop(scroll.scrollTop()+offset.top-300);	
	};
	
	$(window).bind('resize', function() {
		$("#version_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#version_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
};

function initEvent(){
	
	//상단 checkbox
	$("#chk_all_search").on("change",function(){
		if($("#chk_all_search").is(":checked")){
			//체크되었으므로 날짜값지우고 비활성화
			$("#inp_search_startdt").attr("disabled",true).val("");
			$("#inp_search_enddt").attr("disabled",true).val("");
		} else {
			$("#inp_search_startdt").attr("disabled",false);
			$("#inp_search_enddt").attr("disabled",false);
			initPicker();
		}
	});
	
	
	//우측 checkbox
	$("#chk_mdateyn").on("change",function(){
		if($("#chk_mdateyn").is(":checked")){
			//체크되었으므로 날짜값지우고 비활성화
			$("#input_masterdate").attr("disabled",true).val("");
			
		} else { 
			var rowid = $("#version_list").jqGrid('getGridParam', "selrow");
			var rowData = $("#busInfo_list").jqGrid('getRowData', rowid);
			$("#input_masterdate").attr("disabled",false).val(rowData.masterdate);
		}
	});
	
	
	
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		
			var param = null;
			if(!($("#chk_all_search").is(":checked"))){ //날짜검색
				if (!checkTermEffective($("#inp_search_startdt"), $("#inp_search_enddt"))
					|| $("#inp_search_startdt").val()=="" || $("#inp_search_enddt").val()=="") { //날짜 유효성
					
					showAlert("조회기간을 잘못 설정하였습니다.");
					return;
				} else {
					param = {
							search_startdt : $("#inp_search_startdt").val().replace(/-/g,'')+"000000",	
							search_enddt : $("#inp_search_enddt").val().replace(/-/g,'')+"235959"	
					};
				}
			} 
			showLoader();
			reloadGrid("#version_list", "./route/selectRouteVersionList.do", param, "resultList");
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//초기화 버튼
	$("#btn_reset").on("click",function(){
		$(".chart.v0508Chart input").val("");
	});
	
	//입력 버튼
	$("#btn_new").on("click",function(){
		//입력 confirm 창 
		showConfirmDlg("작성하신 내용을 입력하시겠습니까", function(){
			var param = {
					masterdate : $("#input_masterdate").val(),
					route : $("#input_route").val(),
					csvver : $("#input_csvver").val(),
					gisver : $("#input_gisver").val(),
					modifycont : $("#input_modifycont").val(),
					memo : $("#input_memo").val(),
					updatefile : $("#input_updatefile").val()
			};
			ajaxCall("./route/insertRouteVersionList.do", param, null, success, null);
			function success(data){
				if(data.result <= 0){
					showAlert("다시 시도해주세요");
				} else {
					$("#btn_search").trigger("click"); 
				}
			};
		});
	});
	
	//수정 버튼
	$("#btn_modify").on("click",function(){
		showConfirmDlg("작성하신 내용을 수정하시겠습니까", function(){
			var rowid = $("#version_list").jqGrid('getGridParam', "selrow");
			var rowData = $("#version_list").jqGrid('getRowData', rowid);
			var num = rowData.num;
			if(num == null) {
				showAlert("수정하실 노선버전을 선택해주세요");
				return false;
			} else {
				row_id = rowid;// scroll위치 저장
				var param = {
						num : num,
						masterdate : $("#input_masterdate").val(),
						route : $("#input_route").val(),
						csvver : $("#input_csvver").val(),
						gisver : $("#input_gisver").val(),
						modifycont : $("#input_modifycont").val(),
						memo : $("#input_memo").val(),
						updatefile : $("#input_updatefile").val()
				};
				ajaxCall("./route/updateRouteVersionList.do", param, null, success, null);
				function success(data){
					if(data.result != 1){
						showAlert("다시 시도해주세요");
						return false;
					} else {
						$("#btn_search").trigger("click"); 
					}
				};
			}
		});
	});
	
	//삭제버튼
	$("#btn_delete").on("click",function(){
		showConfirmDlg("선택하신 내용을 삭제하시겠습니까", function(){	
			var rowid = $("#version_list").jqGrid('getGridParam', "selrow");
			var rowData = $("#version_list").jqGrid('getRowData', rowid);
			var num = rowData.num;
			if(num == null) {
				showAlert("수정하실 노선버전을 선택해주세요");
				return false;
			} else {
				var param = {
						num : num
				};
				ajaxCall("./route/deleteRouteVersionList.do", param, null, success, null);
				function success(data){
					if(data.result != 1){
						showAlert("다시 시도해주세요");
						return false;
					} else {
						$("#btn_search").trigger("click"); 
					}
				};
			}
		});
	});
	
};	
	

