$(document).ready(function(){
	appendLoader("로딩중");
	initGrid();
	initEvent();
});

var model_1 = [
    {label:"정류소ID",	name:"bstopid",		index:"bstopid",	width:"120",	align:"center",		sorttype:"text"},
    {label:"정류장명",		name:"bstopnm",		index:"bstopnm",	width:"180", 	align:"center",		sorttype:"text"}
];

var detail_list_model = [
	{label:"노선번호",				name:"routeno",				index:"routeno",	width:"70",		align:"center",		sorttype:"text"},
	{label:"차량번호",				name:"carno",				index:"carno",		width:"100",	align:"center",		sorttype:"text"},
	{label:"남은정류소 수",			name:"rest_bstopcnt",		index:"rest_bstop",	width:"100",	align:"center",		sorttype:"text"},
	{label:"남은시간(A)",			name:"arrplantime",			index:"arrplantime",width:"90",		align:"center",		sorttype:"text"},
	{label:"생성일시(B)",			name:"procdt",				index:"procdt",		width:"140",	align:"center",		sorttype:"text"},
	{label:"실제통과시각(C)",		name:"evt_occurdt_mi",		index:"real_time",	width:"140",	align:"center",		sorttype:"text"},
	{label:"에측시각(D=A+B)",		name:"guessdt_mi",			index:"exp_time",	width:"140",	align:"center",		sorttype:"text"},
	{label:"실소요시간(A1=C - B)",	name:"realtm",				index:"realtm",		width:"120",	align:"center",		sorttype:"text"},
	{label:"오차(E=A1 - A)",		name:"error",				index:"error",		width:"100",	align:"center",		sorttype:"text"},
	{label:"허용오차",				name:""},
	{label:"예측치제곱(A²)",		name:"arrplantime_square",	index:"exp_square",	width:"100",	align:"center",		sorttype:"text"},
	{label:"실측치제곱(A1²)",		name:"realtm_square",		index:"real_square",width:"100",	align:"center",		sorttype:"text"},
	{label:"오차제곱(E²)",			name:"error_square"},
	{label:"예측치제곱합( ΣA² )",	name:""},
	{label:"실측치제곱합( ΣA1² )",	name:""},
	{label:"오차제곱합( ΣE² )",	name:""},
	{label:"등가계수",				name:""}
]

var stats_model = [
	{label:"",		name:"all_specimem_cnt",		index:""},
	{label:"",		name:"permit_err_over_cnt",		index:""},
	{label:"",		name:"rate",					index:""},
	{label:"",		name:"err_abs_ave",				index:""},
	{label:"",		name:"equiv_coef",				index:""}
]


function initGrid(){
	makeGrid("#bus_stop_list", model_1, 300, "resultList", onSelected, onCompleted, null);
	makeGrid("#busstop_detail_table", detail_list_model, 300, "resultList", null, null, null);

	function onSelected(rowid){
		var rowData = $("#bus_stop_list").jqGrid("getRowData", rowid);
		var stopid = rowData.bstopid;
		load_stop_detail_grid(stopid);
	}
	
	function onCompleted(data){
		$("#total_stop_result").text("정류소 검색결과 " + data.records + "건");
	}
	
	$(window).bind('resize', function() {
		$("#bus_stop_list").jqGrid('setGridHeight', $("#busstop_list_chart").height()-23);
		$("#bus_stop_list").jqGrid('setGridWidth', $("#busstop_list_chart").width());
		$("#busstop_detail_table").jqGrid('setGridHeight', $("#detail_chart").height()-23);
		$("#busstop_detail_table").jqGrid('setGridWidth', $("#detail_chart").width());
	}).trigger('resize');
}

function load_stop_list(){
	showLoader();
	var param = {
		searchWord : $("#search_by_keyword").val()
	}
	reloadGrid("#bus_stop_list", "./stop/selectStopListwithCondition.do", param, "resultList");
}

function load_stop_detail_grid(stopid){
	
	// alerts user to check all parameters
	var result = document.getElementsByName("result");
	var resultform_value = -1;
	for(var i = 0; i < result.length; i++){
		if(result[i].checked)
			resultform_value = result[i].value;
	}
	if(resultform_value < 0){
		alert("결과보기를 선택해주세요.");
		return;
	}
	if($("#search_date").val() == ""){
		alert("날짜를 선택해주세요.")
		return;
	}	
	
	// load specific data according to the resultform_value
	showLoader();
	var param = {
		bstopid : stopid,
		bstop_passing_start_time : $("#search_date").val()
	}
	console.log(param);
	// case: 통계 결과만 보기
	if(resultform_value == 0){
//		reloadGrid("#busstop_detail_table", "./stop/selectStopDetailStatistics.do", param, "resultList");
		ajaxCall("./stop/selectStopDetailStatistics.do", param, null, dosmas, null);
		function dosmas(data){
			log(data);
		}
	}
	// case: 상세 리스트 보기
	else{
		makeGrid("#busstop_detail_table", detail_list_model, 600, "resultList", null, null, null);
		$(window).bind("resize", function(){
			$("#busstop_detail_table").jqGrid('setGridHeight', $("#detail_chart").height()-23);
			$("#busstop_detail_table").jqGrid('setGridWidth', $("#detail_chart").width());
		}).trigger("resize");
		reloadGrid("#busstop_detail_table", "./stop/selectStopDetailList.do", param, "resultList");
	}
		
}

function initEvent(){
	
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	// 정류소명으로 검색시 enter키 지원
	$("#search_by_keyword").keyup(function(e){
		if(e.keyCode == 13)
			load_stop_list();
	});
	
	// 검색버튼
	$("#btn_search").click(function(){
		load_stop_list();
	})
	
	// 저장기능
	$("#btn_excel").click(function(){
		if(0 < $("#busstop_detail_table").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#busstop_detail_table");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	function excelDownload(title, grid_id){
		$("#excelDown").remove();
		var grid = $(grid_id);
		
		var form = document.createElement("FORM");
		form.setAttribute("id", "excelDown");
		form.action = "./stop/downloadExcelFile.do";
		form.method = "POST";
		
		var fileName = JSON.stringify(title);
		var param = document.createElement("INPUT");
		var rowData = grid.jqGrid("getRowData");
		var columnData = JSON.stringify(rowData);
		
		var columnLabel = JSON.stringify(grid.jqGrid("getGridParam", "colNames"));
		
		var idData = grid.jqGrid("getGridParam", "colModel");
		var columnName = [];
		$.each(idData, function(index, value){
			columnName.push(value.name);
		})
		columnName = JSON.stringify(columnName);
		
		param.type = "HDDEN";
		param.name = "json";
		param.value = fileName + columnLabel + columnName + columnData;
		
		form.appendChild(param);
		
		document.body.appendChild(form);
		inquiryFileDownload("excelDown", true);
	}
}