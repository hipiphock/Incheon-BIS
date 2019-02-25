$(document).ready(function(){
	appendLoader("로딩중...");
	initBox();
	initGrid();
	initEvent();
});

var model_1 = [
	{label:"버스ID",		name:"busid",		index:"busid",		width:"110",	align:"center",	sorttype:"text"},
	{label:"차량번호",		name:"carregno",	index:"carregno",	width:"130",	align:"center",	sorttype:"text"},
	{label:"등록상태",		name:"busstatcd",	index:"busstatcd",	width:"110",	align:"center",	sorttype:"text"}
];

var model_2 = [
	{label:"발생일시",		name:"evt_occurdt",	index:"occurdt",		width:"140",	align:"center",	sorttype:"text"},
	{label:"버스회사",		name:"compnm",		index:"compnm",			width:"100",	align:"center",	sorttype:"text"},
	{label:"버스ID",		name:"busid",		index:"busid",			width:"80",		align:"center",	sorttype:"text"},
	{label:"차량번호",		name:"carno",		index:"carno",			width:"100",	align:"center",	sorttype:"text"},
	{label:"노선번호",		name:"routeno",		index:"routeno",		width:"60",		align:"center",	sorttype:"text"},
	{label:"위반유형",		name:"runvioltpcd",	index:"runvioltpcd",	width:"100",	align:"left",	sorttype:"text",
		formatter:function(cellValue, rowObject, options){
			switch(cellValue){
				case "10":	return "노선이탈";
				case "11":	return "임의지연";
				case "12":	return "개문주행";
				case "13":	return "무정차통과";
				case "14":	return "노선임의변경";
				case "15":	return "과속";
				case "16":	return "급감속";
				case "17":	return "급가속";
			}
		}
	},
	{label:"발생위치",		name:"posnm",		index:"posnm",			width:"200",	align:"left",	sorttype:"text"},
	{label:"운행회차",		name:"pathseq",		index:"pathseq",		width:"60",		align:"center",	sorttype:"text"},
	
	{name:"posx",	index:"posx",	type:"I",	hidden:true},
	{name:"posy",	index:"posy",	type:"I",	hidden:true},
];

var cur_busid;

//function for initalizing boxes - first, second
function initBox(){
	// initializing first box - bus company
	ajaxCall("./route/selectCompList.do", null, null, dealwithCompany, null);
	// initializing second box - bus route
	ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
}

//function for company selection box
function dealwithCompany(data){
	var parsedData = data.companyList;
	var select = document.getElementById("busCompany");
	for(var i in parsedData){
		var opt = document.createElement("option");
		opt.value = parsedData[i].compid;
		opt.text = parsedData[i].compnm;
		select.appendChild(opt);
	}
}

// function for route selection box
function dealwithRoute(data){	
	var select = document.getElementById("busRoute");
	select.options.length = 0;
	var opt = document.createElement("option");
	opt.value = "";
	opt.text = "전체";
	select.appendChild(opt);
	select.options[0].selected = "selected";
	var parsedData = data.resultList;
	for(var i in parsedData){
		var opt = document.createElement("option");
		opt.value = parsedData[i].routeid;
		opt.text = parsedData[i].routeno;
		select.appendChild(opt);
	}
}

function initGrid(){
	makeGrid("#bus_list", model_1, 600, "resultList", onSelected1, onCompleted_1, null);
	makeGrid("#violent_operation_list", model_2, 800, "resultList", onSelected2, onCompleted_2, null);
	
	function onSelected1(rowid){
		var busid = $("#bus_list").jqGrid("getRowData", rowid).busid;
		cur_busid = busid;
		load_violence_grid(busid);
	}
	
	function onSelected2(rowid){
		var rowData = $("#violent_operation_list").jqGrid('getRowData', rowid); 
		selected_lat = rowData.posy;
		selected_lng = rowData.posx; 
	}
	
	function onCompleted_1(data){
		$("#bus_search_result").text("검색결과 " + data.records + "건");
	}
	
	function onCompleted_2(data){
		$("#violent_search_result").text("부당운행이력검색결과 " + data.records + "건");
	}
	
	$(window).bind('resize', function() {
		$("#bus_list").jqGrid('setGridHeight', $("#bus_chart").height() - 23);
		$("#bus_list").jqGrid('setGridWidth', $("#bus_chart").width());
		$("#violent_operation_list").jqGrid('setGridHeight', $("#violent_chart").height() - 23);
		$("#violent_operation_list").jqGrid('setGridWidth', $("#violent_chart").width());
	}).trigger('resize');
	
	load_buslist_grid("", "");
}

function load_buslist_grid(compID, routeID){
	showLoader();
	reloadGrid("#bus_list", "./route/selectBusListtoNotify.do", {compid:compID, routeid:routeID}, "resultList");
}

function load_violence_grid(busID){
	showLoader();
	var param = {
		evt_occurdt:$("#inputDate").val(),
		busid:busID,
		evttpcd:"",
		runvioltpcd:$("#violenceType").val()
	}
	console.log(param);
	reloadGrid("#violent_operation_list", "./evaluation/selectViolentOperHistList.do", param, "resultList");
}

Date.prototype.yyyymmdd = function() {
	var mm = this.getMonth() + 1; // getMonth() is zero-based
	var dd = this.getDate();
	return [this.getFullYear(), (mm>9 ? '' : '0') + mm, (dd>9 ? '' : '0') + dd].join('');
};


function initEvent(){
	// 새로고침
	$("#btn_refresh").click(function(){
		window.location.reload();
	});
	
	// when you change company
	$("#busCompany").change(function(){
		var compID = $("#busCompany option:selected").val();
		if(compID == ""){
			ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
			load_buslist_grid("", "");
		}
		else ajaxCall("./route/selectRouteListbyCompany.do", {compid:compID}, null, refreshRoute, null);
		function refreshRoute(data){
			dealwithRoute(data);
			var compID = $("#busCompany option:selected").val();
			var routeID = $("#busRoute option:selected").val();
			load_buslist_grid(compID, routeID);
		}
		cur_busid = null;
	});
	
	// when you change route
	$("#busRoute").change(function(){
		var compID = $("#busCompany option:selected").val(); 
		var routeID = $("#busRoute option:selected").val();
		load_buslist_grid(compID, routeID);
		cur_busid = null;
	});
	
	// 부당운행이력검색
	$("#btn_search").click(function(){
		if(cur_busid == null)
			alert("좌측 표에서 버스를 선택해주세요.");
		else	load_violence_grid(cur_busid);
	});
	
	// 지도이동
//	$(".topBtn_map").on("click", function(){
//		var rowid = $("#violent_operation_list").jqGrid('getGridParam', "selrow");
//		if(!rowid){
//			showAlert("부당운행이력을 선택해주세요.");
//			return false;
//		}
//		var rowData = $("#violent_operation_list").jqGrid('getRowData', rowid);
//		console.log("지도이동예정(좌표)"+rowData.posx+" / "+rowData.posy);
//		opener.setCenterPosition(rowData.posy, rowData.posx);
//	});
	
	// 엑셀 다운로드
	$("#btn_excel").click(function(){
		if(0 < $("#violent_operation_list").getGridParam("reccount"))
			excelDownload($(".pop_title h2").text(), "#violent_operation_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});
	// 다운로드 함수
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