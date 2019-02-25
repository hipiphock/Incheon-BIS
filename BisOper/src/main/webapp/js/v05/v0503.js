var row_id = null; //선택된 행의 row_id 저장(scroll 이벤트)

//상단
var model1 = [
	   			{label:"버스회사",		name:"compid",         index:"compid",         width: "90", 	align:"center"},
	   			{label:"노선id",		name:"routeid",        index:"routeid",        width: "80", 	align:"center",		type: "I" },
	   			{label:"노선번호",		name:"routeno",        index:"routeno",        width: "80", 	align:"center",		type: "I" },
	   			{label:"노선유형",		name:"routetpcd",      index:"routetpcd",      width: "80", 	align:"center"},
	   			{label:"노선설명",		name:"routedesc",      index:"routedesc",      width: "80", 	align:"center",		type: "I" },
	   			{label:"정류장수",		name:"pass_bstopcnt",  index:"pass_bstopcnt",  width: "80", 	align:"center",		type: "I" },
	   			{label:"노선거리",		name:"fmt_routelen",   index:"fmt_routelen",   width: "90", 	align:"center"},
	   			{label:"굴곡도",		name:"routecurv",      index:"routecurv",      width: "80", 	align:"center",		type: "I" },
	   			{label:"공공배차여부",	name:"jointallocyn",   index:"jointallocyn",   width: "90", 	align:"center"},
	   			{label:"출발정류소",		name:"origin_bstopid", index:"origin_bstopid", width: "130", 	align:"center"},
	   			{label:"종료정류소",		name:"dest_bstopid",   index:"dest_bstopid",   width: "130", 	align:"center"},
	   			{label:"적용시작일",		name:"app_startdt",    index:"app_startdt",    width: "130", 	align:"center",		type: "I" },
	   			{label:"적용종료일",		name:"app_enddt",      index:"app_enddt",      width: "130", 	align:"center",		type: "I" },
	   			{label:"사용여부",		name:"useyn",          index:"useyn",          width: "80", 	align:"center"},
	   			{label:"면허버스수",		name:"lic_buscnt",     index:"lic_buscnt",     width: "80", 	align:"center",		type: "I" },
	   			{label:"예비버스수",		name:"rsv_buscnt",     index:"rsv_buscnt",     width: "80", 	align:"center",		type: "I" },
	   			{label:"운행거리",		name:"fmt_rundist",    index:"fmt_rundist",    width: "90", 	align:"center"},
	   			{label:"운행시간",		name:"fmt_runtm",      index:"fmt_runtm",      width: "100", 	align:"center"},
	   			{label:"운행횟수",		name:"runcnt",         index:"runcnt",         width: "80", 	align:"center",		type: "I" },
	   			{label:"관할관청",		name:"adminnm",        index:"adminnm",        width: "90", 	align:"center",		type: "I" },
	   			{label:"변경자",		name:"upd_userid",     index:"upd_userid",     width: "90", 	align:"center"},
	   			{label:"변경일시",		name:"upddt",          index:"upddt",      	   width: "130", 	align:"center"},
	   			
	   			{name:"routelen",   index:"routelen", 	type: "I", 			   hidden:true},
	   			{name:"rundist",    index:"rundist", 	type: "I", 			   hidden:true},
	   			{name:"runtm",      index:"runtm", 		type: "I", 			   hidden:true},
	   			{name:"runtpcd",    index:"runtpcd",    		  			   hidden:true},
	   			{name:"descr",      index:"descr",      type: "I", 			   hidden:true}
   			 ];

//노선배정버스회사 리스트
var model2 = [
	   			{label:"버스회사id",	name:"compid",         index:"compid",         width: "80", 	align:"center"},
	   			{label:"버스회사명",		name:"compnm",         index:"compnm",         width: "120", 	align:"center"},
	   			{label:"공동배차여부",	name:"jointallocyn",   index:"jointallocyn",   width: "80", 	align:"center"}
   			 ];

//노선운행스케쥴 리스트
var model3 = [
	   			{label:"유형",			name:"dowtpcd",        	    index:"dowtpcd",       		 width: "70", 	align:"center",resizable: false},
	   			{label:"첫차출발시간",		name:"fbus_dephms",         index:"fbus_dephms",         width: "70", 	align:"center",resizable: false},
	   			{label:"막차출발시간",		name:"lbus_dephms",         index:"lbus_dephms",         width: "70", 	align:"center",resizable: false},
	   			{label:"최소배차간격(분)",		name:"min_allocgap",        index:"min_allocgap",        width: "70", 	align:"center",resizable: false},
	   			{label:"최대배차간격(분)",		name:"max_allocgap",        index:"max_allocgap",        width: "70", 	align:"center",resizable: false}
 			 ];

//분기노선정보 리스트
var model4 = [
	   			{label:"노선id",		name:"pair_routeid",         index:"pair_routeid",         width: "70", 	align:"center"},
	   			{label:"노선번호",		name:"routeno",         	 index:"routeno",   	       width: "70", 	align:"center"},
	   			
	   			{name:"routeid",    index:"routeid",        	 hidden:true}
 			 ];

$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
	initPicker();
});

function initPicker(){
	initCalendar("input_app_startdt", YEAR_FORMAT1, false);
	initCalendar("input_app_enddt", YEAR_FORMAT1, true);
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일 전
	setCalendar("input_app_startdt", YEAR_FORMAT1, prev);
	
};


function setCategory(){
	ajaxCall("./comp/selectCompCateList.do", null, null, sel_comp_success, null);
	sel_routeCate_list();
	ajaxCall("./sys/selectRouteBasicInfoCodeList.do", null, null, sel_code_success, null);
	ajaxCall("./stop/selectStopCateList.do", null, function(){showLoader();}, sel_stop_success, null);
	
	function sel_comp_success(data) { 
		var strTemp = "<option value=''>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.compid+"'>"+value.compnm+"</option>";
		});
		$("#sel_compid").empty().append(strTemp);
	};
	
	function sel_code_success(data) {
		if(data && data.routetpcd){
			var strTemp = "<option value>전체</option>";
			$.each(data.routetpcd,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_routetpcd1").empty().append(strTemp);
			$("#select_routetpcd2").empty().append(strTemp);
		}
		if(data && data.runtpcd){
			var strTemp = "<option value>전체</option>";
			$.each(data.runtpcd,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_runtpcd").empty().append(strTemp);
		}
		if(data && data.jointallocyn){
			var strTemp = "<option value>전체</option>";
			$.each(data.jointallocyn,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_jointallocyn").empty().append(strTemp);
		}
		if(data && data.useyn){
			var strTemp = "";
			$.each(data.useyn,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_useyn").empty().append(strTemp);
		}
	};

	
	function sel_stop_success(data) { 
		var strTemp = "";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.bstopid+"'>"+value.bstopnm+"</option>";
		});
		$("#select_origin_bstopid").empty().append(strTemp);
		$("#select_dest_bstopid").empty().append(strTemp);
		hideLoader();
	};
};

function sel_routeCate_list(useYn,compId) {
	var compid="";
	var useyn=""
	if(compId) compid = compId;
	if(useYn) useyn = useYn;
	var param = {
		compid : compid,	
		useyn : useyn
	};
	
	ajaxCall("./route/selectRouteCateList.do", param , null, sel_route_success, null);
	
	function sel_route_success(data) { 
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.routeid+"'>"+value.routeno+"</option>";
		});
		$("#sel_routeid").empty().append(strTemp);
	};

};


function initGrid(){
	makeMultiGrid("#route_search_list", model1, 300, "resultList", sel_searchList, complete ,null);
	$("#route_search_list").jqGrid('showCol','cb');
	makeGrid("#comp_allot_list", model2, 115, "resultList", null, null ,null);
	makeGrid("#run_schedule_list", model3, 115, "resultList", null, null ,null);
	makeGrid("#route_branch_list", model4, 115, "resultList", sel_branchList, null ,null);
	
	function sel_searchList(){
		var rowid = $("#route_search_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#route_search_list").jqGrid('getRowData', rowid);
		//selected 
		$(".chart select option").removeAttr("selected");
		if(rowData.runtpcd) 
			$("#select_runtpcd option:contains('"+rowData.runtpcd+"')").attr("selected","selected");
		if(rowData.jointallocyn)
			$("#select_jointallocyn option:contains('"+rowData.jointallocyn+"')").attr("selected","selected");
		if(rowData.routetpcd)
			$("#select_routetpcd2 option:contains('"+rowData.routetpcd+"')").attr("selected","selected");
		if(rowData.useyn)
			$("#select_useyn option:contains('"+rowData.useyn+"')").attr("selected","selected");
		if(rowData.origin_bstopid)
			$("#select_origin_bstopid option:contains('"+rowData.origin_bstopid+"')").attr("selected","selected");
		if(rowData.dest_bstopid)
			$("#select_dest_bstopid option:contains('"+rowData.dest_bstopid+"')").attr("selected","selected");
		
		var param = {routeid : rowData.routeid };
		reloadGrid("#comp_allot_list", "./route/selectRouteAllotList.do", param, "resultList");
		reloadGrid("#route_branch_list", "./route/selectRouteBranchList.do", param, "resultList");
		reloadGrid("#run_schedule_list", "./route/selectRouteRunScaduleList.do", param, "resultList");

		
	};

	
	function sel_branchList(){
		showConfirmDlg("선택 노선 분기설정을 해제하시겠습니까?", deleteRouteBranch);
		function deleteRouteBranch(){
			var rowid = $("#route_branch_list").jqGrid('getGridParam', "selrow");
			var rowData = $("#route_branch_list").jqGrid('getRowData', rowid);
			var param = {
					routeid : rowData.routeid,
					pair_routeid : rowData.pair_routeid 
				} 
			ajaxCall("./route/deleteRouteBranch.do", param, null, del_success, null);
		
			function del_success(data){
				if(data.result <= 0){
					showAlert("분기설정 해제 실패");
				} else {
					showAlert("분기설정 해제 완료");
				}
				reloadGrid("#route_branch_list", "./route/selectRouteBranchList.do", {routeid:rowData.routeid}, "resultList");
			};
		};
	};
	
	function complete(data){
		$("#text_count1").text(" "+$("#route_search_list").getGridParam("reccount")+"건");
		
		//행 자동 선택
		if(row_id != null){ //분기설정에서 저장한 row_id에 해당하는 row 선택
			$("#route_search_list").setSelection(row_id, true);
			scrollOffset("route_search_list");
			row_id = null;
		} else{
			$("#route_search_list").setSelection(1, true);
		}
	}
	
	
	$(window).bind('resize', function() {
		$("#route_search_list").jqGrid('setGridHeight', $(".conleft.v0503Left .main_chart").height()-23);
		$("#route_search_list").jqGrid('setGridWidth', $(".conleft.v0503Left .main_chart").width());
		
		$("#comp_allot_list").jqGrid('setGridHeight', $(".conbottom.v0503bottom1 .main_chart").height()-23);
		$("#comp_allot_list").jqGrid('setGridWidth', $(".conbottom.v0503bottom1 .main_chart").width());	
		
		$("#run_schedule_list").jqGrid('setGridHeight', $(".conbottom.v0503bottom2 .main_chart").height()-23);
		$("#run_schedule_list").jqGrid('setGridWidth', $(".conbottom.v0503bottom2 .main_chart").width());	

		$("#route_branch_list").jqGrid('setGridHeight', $(".conbottom.v0503bottom3 .main_chart").height()-23);
		$("#route_branch_list").jqGrid('setGridWidth', $(".conbottom.v0503bottom3 .main_chart").width());	
	}).trigger('resize');
};



function initEvent(){
	//버스회사 카테고리 변경시 노선번호 회사소속 노선리스트 변경
	$("#sel_compid").on("change",function(){
		var compid = $("#sel_compid option:selected").val();
		var useyn = '1';
		sel_routeCate_list(useyn,compid);
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//검색
	$("#btn_search").on("click",function(){
		var checked; //미사용yn
		if($("#check_useyn").is(":checked")){
			checked = ""; //미사용 포함
		} else {
			checked = 1; //미사용 미포함
		}
		
		var param = {
				compid 	  : $("#sel_compid").val(),
				routeid   : $("#sel_routeid").val(),
				routetpcd : $("#select_routetpcd1").val(),
				useyn : checked	
		};
		reloadGrid("#route_search_list", "./route/selectRouteBasicInfoList.do", param, "resultList");	
	});
	
	
	//분기설정
	$("#btn_branch").on("click",function(){
		var row_ids = $("#route_search_list").jqGrid("getGridParam", "selarrrow");
		var pair_routeidList = [];
		var routeid = "";
		var routeno = ""; // confirm 표츌용
		if (row_ids.length < 2) {
			showAlert("2개 이상의 노선을 선택해주세요.");
			return;
		}
		
		for (var i = 0; i < row_ids.length; i++) {
			var rowData = $("#route_search_list").jqGrid("getRowData", row_ids[i]);
			if(i==0){ //routeid 정보
				row_id= row_ids[0];
				routeid=rowData.routeid;
				routeno=rowData.routeno;
			}else{ //pair_routeid 정보
				pair_routeidList[i-1]=rowData.routeid;
			};
		}
		showConfirmDlg(routeno+"("+routeid+")번의 노선에 "+pair_routeidList.length+"건의 분기노선을 설정하시겠습니까?", insertBranchRoute);

		function insertBranchRoute(){
			var param = {
					routeid : routeid,
					pair_routeidList : pair_routeidList
			};
			ajaxCall("./route/insertBranchRoute.do", param, null, inst_success, null);
		};

		function inst_success(data){
			$("#btn_search").trigger("click");
		};
	});

	
	//내용수정
	$("#btn_update").on("click",function(){
		showConfirmDlg("내용을 수정하시겠습니까?", updateRouteBasicInfo);
	});
};

function updateRouteBasicInfo(){
	var param = {
			routeid 		: $("#input_routeid").val(),
			runtpcd 		: $("#select_runtpcd option:selected").val(),
			routeno 		: $("#input_routeno").val(),
			jointallocyn 	: $("#select_jointallocyn option:selected").val(),
			routetpcd 		: $("#select_routetpcd2 option:selected").val(),
			useyn 			: $("#select_useyn option:selected").val(),
			routedesc 		: $("#input_routedesc").val(),
			pass_bstopcnt 	: $("#input_pass_bstopcnt").val(),
			runtm 			: $("#input_runtm").val(),
			routelen 		: $("#input_routelen").val(),
			rundist 		: $("#input_rundist").val(),
			routecurv 		: $("#input_routecurv").val(),
			runcnt 			: $("#input_runcnt").val(),
			lic_buscnt 		: $("#input_lic_buscnt").val(),
			rsv_buscnt 		: $("#input_rsv_buscnt").val(),
			origin_bstopid  : $("#select_origin_bstopid option:selected").val(),
			app_startdt 	: $("#input_app_startdt").val().replace(/-/g,''),
			dest_bstopid 	: $("#select_dest_bstopid option:selected").val(),
			app_enddt 		: $("#input_app_enddt").val().replace(/-/g,''),
			adminnm 		: $("#input_adminnm").val(),
			descr 			: $("#input_descr").val()
	};
	
	ajaxCall("./route/updateRouteBasicInfo.do", param, null, upd_success, null);
	function upd_success(data){
		if(data.result == 1) showAlert("정상적으로 수정되었습니다");
	};
};

function scrollOffset(gridid){
	var offset = $("#"+gridid).find("#"+row_id).offset();
	var scroll = $("#"+gridid).closest(".ui-jqgrid-bdiv");
	scroll.scrollTop(scroll.scrollTop()+offset.top-300);	
};