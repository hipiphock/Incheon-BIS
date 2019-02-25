$(document).ready(function(){
	appendLoader("로딩중...");
	initBox();
	initGrid();
	initEvent();
});

var model_1 = [
	{label:"정류소ID",	name:"bstopid",		index:"bstopid",	width:"70",		align:"center",		sorttype:"text"},
	{label:"정류장명",		name:"bstopnm",		index:"bstopnm",	width:"140", 	align:"center",		sorttype:"text"},
	{label:"단말기 유형",	name:"bittype",   	index:"bstoptpcd",	width:"130", 	align:"center",		sorttype:"text"},
	{name:"posx",	index:"posx",	type:"I",	hidden:true},
	{name:"posy",	index:"posy",	type:"I",	hidden:true}
];

var model_2 = [
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
	{label:"예측치제곱(A²)",		name:"arrplantime_square",	index:"exp_square",	width:"110",	align:"center",		sorttype:"text"},
	{label:"실측치제곱(A1²)",		name:"realtm_square",		index:"real_square",width:"110",	align:"center",		sorttype:"text"},
	{label:"오차제곱(E²)",			name:"error_square",		index:"err_square",	width:"100",	align:"center",		sorttype:"text"}
]


// 2-level selection system handler
function initBox(){
	document.getElementById("route_road_selector").disabled = true;
	$("#option_selected").html("");
	select_by = $("#option_selector option:selected").val();
	if(select_by == "0"){
		$("#option_selected").html("노선번호");
	} else if(select_by == "1"){
		$("#option_selected").html("도로명");
	} else{
		$("#option_selected").html("");
	}
	ajaxCall("./route/selectBitParamDepth2List.do", {cate_flag:select_by}, null, createSelectList, null);
	function createSelectList(data){
		var select = document.getElementById("route_road_selector");
		select.options.length = 0;
		var opt = document.createElement("option");
		opt.value = "", opt.text = "전체";
		select.appendChild(opt);
		select.options[0].selected = "selected";
		if(select_by == "0"){
			var parsedData = data.routeid;
			for(var i in parsedData){
				var opt = document.createElement("option");
				opt.value = parsedData[i].routeid;
				opt.text = parsedData[i].routeno;
				select.appendChild(opt);
			}
		}
		else if(select_by == "1"){
			var parsedData = data.roadnm;
			for(var i in parsedData){
				var opt = document.createElement("option");
				opt.value = parsedData[i].roadnm;
				opt.text = parsedData[i].roadnm;
				select.appendChild(opt);
			}
		}
		else;
		document.getElementById("route_road_selector").disabled = false;
	}
}

// initializing grid
function initGrid(){
	makeGrid("#bus_stop_list", model_1, 300, "resultList", onSelected, onCompleted, null);
	makeGrid("#busstop_detail_table", model_2, 600, "resultList", null, null, null);
	
	function onSelected(rowid){
		var rowData = $("#bus_stop_list").jqGrid("getRowData", rowid);
		var stopid = rowData.bstopid;
		selected_lat = rowData.posy;
		selected_lng = rowData.posx;
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

// 정류소 검색결과
function load_stop_list(){
	showLoader();
	var param;
	// case: searching by route
	if(select_by == "0"){
		param = {
			routeid : $("#route_road_selector option:selected").val(),
			bittpcd : $("#bit_type_selector option:selected").val(),
			searchWord : $("#search_by_keyword").val()
		}
	}
	// case: searching by road
	else if(select_by == "1"){
		param = {
			roadnm : $("#route_road_selector option:selected").val(),
			bittpcd : $("#bit_type_selector option:selected").val(),
			searchWord : $("#search_by_keyword").val()
		}
	}
	// case: non selected
	else{
		param = {
			bittpcd : $("#bit_type_selector option:selected").val(),
			searchWord : $("#search_by_keyword").val()
		}
	}
	console.log(param);
	reloadGrid("#bus_stop_list", "./stop/selectStopListwithCondition.do", param, "resultList");
}

// 정류소 제공정보
function load_stop_detail_grid(stopid){
	showLoader();
	var param;
	if(select_by == "0"){
		param = {
			routeid : $("#route_road_selector option:selected").val(),
			bstopid : stopid,
			from_date : "",
			to_date : "",
			arrplantm : $("#exp_arr_time").val(),
			min_rest_bstopcnt : $("#min_bstopcnt").val(),
			max_rest_bstopcnt : $("#max_bstopcnt").val()
		}
	}
	else if(select_by == "1"){
		param = {
			roadnm : $("#route_road_selector option:selected").val(),
			bstopid : stopid,
			from_date : "",
			to_date : "",
			arrplantm : $("#exp_arr_time").val(),
			min_rest_bstopcnt : $("#min_bstopcnt").val(),
			max_rest_bstopcnt : $("#max_bstopcnt").val()
		}
	}
	else{
		param = {
			bstopid : stopid,
			from_date : "",
			to_date : "",
			arrplantm : $("#exp_arr_time").val(),
			min_rest_bstopcnt : $("#min_bstopcnt").val(),
			max_rest_bstopcnt : $("#max_bstopcnt").val()
		}
	}
	console.log(param);
	reloadGrid("#busstop_detail_table", "./stop/selectStopDetailList.do", param, "resultList");
//	ajaxCall("./stop/selectStopDetailList.do", param, null, dosmas, null);
//	function dosmas(data){
//		log(data);
//	}
}

function initEvent(){
	
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	})
	
	// 조회구분 변경시 동작
	$("#option_selector").change(function(){
		initBox();
	})
	
	// 정류소명으로 검색시 enter키 지원
	$("#search_by_keyword").keyup(function(e){
		if(e.keyCode == 13)
			load_stop_list();
	})
	
	// 검색버튼
	$("#btn_search").click(function(){
		load_stop_list();
	})
	
	// 지도이동
//	$(".topBtn_map").on("click",function(){
//		var rowid = $("#bus_stop_list").jqGrid('getGridParam', "selrow");
//		if(!rowid){
//			showAlert("정류소를 선택해주세요.");
//			return false;
//		}
//		var rowData = $("#bus_stop_list").jqGrid('getRowData', rowid);
//		console.log("지도이동예정(좌표)"+rowData.posx+" / "+rowData.posy);
//		opener.setCenterPosition(rowData.posy, rowData.posx);
//	});
	
	// 저장기능
	$("#btn_excel").click(function(){
		if(0 < $("#busstop_detail_table").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#busstop_detail_table");
		else
			showAlert("조회된 내용이 없습니다.");
	})
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