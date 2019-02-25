var model1 = [
		   			{label:"정류소ID",			name:"bstopid",         	index:"bstopid",         	width: "80", 	align:"center", 	type:"I"},
		   			{label:"권역코드",			name:"areacd",         		index:"areacd",         	width: "80", 	align:"center", 	type:"I"},
		   			{label:"단축ID",			name:"short_bstopid",       index:"short_bstopid",      width: "80", 	align:"center"},
		   			{label:"정류장명",			name:"bstopnm",         	index:"bstopnm",         	width: "200", 	align:"center", 	type:"I"},
		   			{label:"정류소영문명",		name:"eng_bstopnm",         index:"eng_bstopnm",        width: "120", 	align:"center", 	type:"I"},
		   			{label:"단축정류소명",		name:"bstoptpcd",         	index:"bstoptpcd",          width: "80", 	align:"center"},
		   			{label:"정류소유형코드",		name:"bstoptpcd",         	index:"bstoptpcd",          width: "90", 	align:"center"},
		   			{label:"중앙차로여부",		name:"centerlaneyn",        index:"centerlaneyn",       width: "80", 	align:"center"},
		   			{label:"비고",			name:"descr",         		index:"descr",         		width: "80", 	align:"center", 	type:"I"},
		   			{label:"정류소시설유형",		name:"bstopfacilcd",        index:"bstopfacilcd",       width: "120", 	align:"center"},
		   			{label:"베이유형",			name:"baytpcd",         	index:"baytpcd",         	width: "80", 	align:"center"},
		   			{label:"베이길이",			name:"baylen",         		index:"baylen",         	width: "80", 	align:"center", 	type:"I"},
		   			{label:"차선수",			name:"lanecnt",         	index:"lanecnt",         	width: "80", 	align:"center", 	type:"I"},
		   			{label:"링크ID",			name:"linkid",         		index:"linkid",         	width: "200", 	align:"center"},
		   			{label:"위치구분유형",		name:"loctpcd",         	index:"loctpcd",         	width: "80", 	align:"center"},
		   			{label:"관할관청",			name:"adminnm",         	index:"adminnm",         	width: "80", 	align:"center", 	type:"I"},
		   			{label:"동명",			name:"dongnm",         		index:"dongnm",         	width: "120", 	align:"center"},
		   			{label:"사용여부",			name:"useyn",         		index:"useyn",         		width: "80", 	align:"center"},
		   			{label:"적용시작일",			name:"app_startdt",         index:"app_startdt",        width: "100", 	align:"center", 	type:"I"},
		   			{label:"적용종료일",			name:"app_enddt",         	index:"app_enddt",        	width: "100", 	align:"center", 	type:"I"},
		   			{label:"변경일시",			name:"upddt",         		index:"upddt",         		width: "100", 	align:"center"},
		   			{label:"변경자ID",			name:"upd_userid",          index:"upd_userid",         width: "80", 	align:"center"},
		   			{label:"위치X",			name:"posx",         		index:"posx",         		width: "120", 	align:"center", 	type:"I"},
		   			{label:"위치Y",			name:"posy",         		index:"posy",         		width: "120", 	align:"center", 	type:"I"},
		   			{label:"링크위치X",			name:"link_posx",         	index:"link_posx",          width: "120", 	align:"center"},
		   			{label:"링크위치Y",			name:"link_posy",         	index:"link_posy",          width: "120", 	align:"center"},
		   			{label:"검지범위",			name:"detectrange",         index:"detectrange",        width: "80", 	align:"center", 	type:"I"}
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
	ajaxCall("./sys/selectStopBasicInfoCodeList.do", null, null, sel_code_success, null);

	function sel_code_success(data) {
		if(data && data.bstopfacilcd){
			var strTemp = "<option value>전체</option>";
			var strTemp2 = "";
			$.each(data.bstopfacilcd,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
				strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#sel_bstopfacilcd").empty().append(strTemp);
			$("#select_bstopfacilcd").empty().append(strTemp2);
		}
		if(data && data.centerlaneyn){
			var strTemp = "";
			$.each(data.centerlaneyn,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_centerlaneyn").empty().append(strTemp);
		}
		if(data && data.baytpcd){
			var strTemp = "";
			$.each(data.baytpcd,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_baytpcd").empty().append(strTemp);
		}
		if(data && data.useyn){
			var strTemp = "";
			$.each(data.useyn,function(index, value){
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_useyn").empty().append(strTemp);
		}
	};
};


function initGrid(){
	makeGrid("#stop_detail_list", model1, 300, "resultList", onSelected, onComplete ,null);
	
	function onComplete(){
		$("#stop_cnt").text($("#stop_detail_list").getGridParam("reccount")); 
		$("#stop_detail_list").setSelection(1, true);
		
	};
	
	function onSelected(){
		var rowid = $("#stop_detail_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#stop_detail_list").jqGrid('getRowData', rowid);
		//selected 
		$(".chart select option").removeAttr("selected");
		if(rowData.bstopfacilcd) 
			$("#select_bstopfacilcd option:contains('"+rowData.bstopfacilcd+"')").attr("selected","selected");
		if(rowData.centerlaneyn)
			$("#select_centerlaneyn option:contains('"+rowData.centerlaneyn+"')").attr("selected","selected");
		if(rowData.baytpcd)
			$("#select_baytpcd option:contains('"+rowData.baytpcd+"')").attr("selected","selected");
		if(rowData.useyn)
			$("#select_useyn option:contains('"+rowData.useyn+"')").attr("selected","selected");
	};
	
	$(window).bind('resize', function() {
		$("#stop_detail_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#stop_detail_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
};



function initEvent(){
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//검색
	$("#btn_search").on("click",function(){
		var use_result=""; //미사용 yn
		if(!$("#chk_useyn").is(":checked"))
			use_result = 1; //미사용도 표기
		
		var via_result=""; //노선경유정류장 yn
		if($("#chk_viaStop").is(":checked"))
			via_result = 2; //노선경유정유장만 표기
		
		var param = {
				bstopfacilcd  : $("#sel_bstopfacilcd option:selected").val(),
				bstopnm   	  : $("#inp_bstopnm").val(),
				adminnm 	  : $("#inp_adminnm").val(),
				dongnm 		  : $("#inp_dongnm").val(),
				nodegbcd	  : via_result,
				useyn 		  : use_result	
		};
		showLoader();
		reloadGrid("#stop_detail_list", "./stop/selectStopBasicInfoList.do", param, "resultList");	
	});
	
	//Enter 검색
	$("#inp_bstopnm, #inp_adminnm, #inp_dongnm").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	//v0512에서 open시 이벤트 발생
	if(opener.name == "v0512.view"){
		var bstopnm = opener.parent_bstopnm();
		$("#inp_bstopnm").val(bstopnm);
		setTimeout(function(){$("#btn_search").trigger("click")},500);
	}
	
	
	$("#btn_modify").on("click",function(){
		showAlert("업데이트시 DB오류(기존 프로그램과 같은 오류) 확인 필요");
		//(ORA-04098: 'ICBIS_AGO.TG_ADM_NODE' 트리거가 부적합하며 재검증을 실패했습니다)
		//updateStopBasicInfo(); 
	});
	
	$("#btn_reset").on("click",function(){
		var row_id = $("#stop_detail_list").jqGrid('getGridParam', "selrow");
		$("#stop_detail_list").setSelection(row_id, true);
	});

function updateStopBasicInfo(){
	var param = {
			bstopnm 	  : $("#input_bstopnm").val(),
			eng_bstopnm   : $("#input_eng_bstopnm").val(),
			centerlaneyn  : $("#select_centerlaneyn option:selected").val(),
			adminnm 	  : $("#input_adminnm").val(),
			descr 		  : $("#input_descr").val(),
			bstopfacilcd  : $("#select_bstopfacilcd option:selected").val(),
			baytpcd 	  : $("#select_baytpcd option:selected").val(),
			baylen 		  : $("#input_baylen").val(),
			lanecnt 	  : $("#input_lanecnt").val(),
			detectrange   : $("#input_detectrange").val(),
			posx 		  : $("#input_posx").val(),
			posy 		  : $("#input_posy").val(),
			app_startdt   : $("#input_app_startdt").val().replace(/-/g,''),
			app_enddt 	  : $("#input_app_startdt").val().replace(/-/g,''),
			useyn 		  : $("#select_useyn option:selected").val(),
			bstopid 	  : $("#input_bstopid").val()
	};
	ajaxCall("./stop/updateStopBasicInfo.do", param, null, upd_success, null);
	function upd_success(data){
		if(data.result == 1) showAlert("정상적으로 수정되었습니다");
			else showAlert("수정실패");
	};
};

};