$(document).ready(function (){
	appendLoader("조회중..");
	ajaxCall("./comp/selectCompCateList.do",null,null,comp_list,null);	
	ajaxCall("./sys/selectCodeList.do", {cdcategid:'RUNVIOLTPCD'}, null, viol_list, null);
	initGrid();
	initEvent();
})

var selected_lat;
var selected_lng; 

function comp_list(data) { 
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.compnm;
		temp.value = value.compid; 
		$("#option1").append(temp);
	})
	var cid = $("#option1 option:first").val(); 
	ajaxCall("./stop/selectRouteListWithComp.do",{compid:cid},null,route_list,null);
	reloadGrid("#left_table","./bus/selectBusList.do", {compid:cid}, "resultList");
}

function route_list(data) {
	$("#option2").append("<option value=\"-1\">전체</option>");
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid; 
		$("#option2").append(temp);
	})
}

function viol_list(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm;
		temp.value = value.cd; 
		$("#option3").append(temp);
	})
}

var models1 = [ 
               {label:"버스ID",		name:"busid",				index:"busid",				width: "75", align:"center", sorttype:"text"},
               {label:"차량번호",		name:"carregno",			index:"carregno",				width: "80", align:"center", sorttype:"text"},
               {label:"등록상태",		name:"busstatcd",			index:"busstatcd",				width: "65", align:"center", sorttype:"text"}
]

var models2 = [ 
               {label:"발생일시",		name:"dt",				index:"dt",				width: "150", align:"center", sorttype:"text"},
               {label:"버스회사",		name:"compnm",			index:"compnm",			width: "80", align:"center", sorttype:"text"},
               {label:"차량번호",		name:"cno",				index:"cno",			width: "80", align:"center", sorttype:"text"},
               {label:"노선번호",		name:"rno",				index:"rno",			width: "65", align:"center", sorttype:"text"},
               {label:"위반유형",		name:"rt",				index:"rt",				width: "75", align:"center", sorttype:"text"},
               {label:"링크ID",		name:"linkid",			index:"linkid",			width: "65", align:"center", sorttype:"text"},
               {label:"발생위치",		name:"lnm",				index:"lnm",			width: "200", align:"center", sorttype:"text"},
               
               {name:"posy",		index:"posy",	 type: "I", hidden: true},
               {name:"posx",		index:"posx",	 type: "I", hidden: true}
]

function initGrid() {
	makeGrid("#left_table", models1, 300, "resultList", null, onComplete1, dbClick); 
	makeGrid("#right_table", models2, 300, "resultList", onSelected, onComplete2, null);
	
	function onComplete1(data) {
		$("#sub1").find("h3").remove();
		$("#sub1").append("<h3>버스검색 <span>"+data.records+"<span>건</h3>");
	}
	
	function onComplete2(data) {
		$("#sub1").find("h3").remove();
		$("#sub1").append("<h3>부당운행검색<span>"+data.records+"<span>건</h3>");
		hideLoader(); 
	}
	
	function dbClick(data) {
		var rowData = $("#left_table").jqGrid('getRowData',data);
		var carregno = rowData.carregno; 
		reloadGrid("#right_table", "./bus/selectViolRunList.do",{carregno:carregno} ,"resultList"); 
		$("#input1").val(carregno);
	}
	
	function onSelected(data) {
		var rowData = $("#right_table").jqGrid('getRowData',data);
		selected_lat = rowData.posy;
		selected_lng = rowData.posx;
	}
	
	$(window).bind('resize',function() {
		$("#left_table").jqGrid('setGridHeight', $(".main_chart").height()-55);
		$("#left_table").jqGrid('setGridWidth', $(".main_chart").width());
		$("#right_table").jqGrid('setGridHeight', $(".main_chart2").height()-23);
		$("#right_table").jqGrid('setGridWidth', $(".main_chart2").width());
	}).trigger('resize');
	
	$("#left_table").jqGrid('filterToolbar',
    {
			autosearch: true,
			stringResult: true,
			searchOnEnter: true,
			defaultSearch: "cn"
    });
	setFilter("left_table", true); 
}

function initEvent() { 
	$("#option1").change(function () {
		var cid = $("#option1 option:selected").val();
		load_route_list(cid);
		reloadGrid("#left_table","./bus/selectBusList.do", {compid:cid}, "resultList");
	});
	
	$("#option2").change(function () {
		if($("#option2 option:selected").val() == "-1")
			reloadGrid("#left_table","./bus/selectBusList.do", {compid:$("#option1 option:selected").val()}, "resultList");
		else
			reloadGrid("#left_table","./bus/selectBusList.do", {compid:$("#option1 option:selected").val(), routeid:$("#option2 option:selected").val()}, "resultList");
	});
	
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	$("#btn_search").click(function () {
		var input_val = $("#input1").val();
		var violType = $("#option3").val(); 
		var reg1 = /^[가-힣]{2}/;
		var reg2 = /[0-9]{4}$/; 
		if(reg1.test(input_val) || reg2.test(input_val)) {
			showLoader();
			if(violType == "-1")
				reloadGrid("#right_table", "./bus/selectViolRunList.do",{carregno:input_val} ,"resultList");
			else
				reloadGrid("#right_table", "./bus/selectViolRunList.do", {type:violType, carregno:input_val}, "resultList");
		}
		else
			showAlert("버스 뒷 4자리를 입력하세요."); 
	});
	
	$(".topBtn_map").click(function () {
		if(selected_lat == null && selected_lng == null) {
			showAlert("부당 운행을 선택 하세요.");
		}
		else {
			opener.setCenterPosition(selected_lat, selected_lng);
			selected_lat = null;
			selected_lng = null;
		}
	});
	
	$("#btn_excel").click(function () {
		if( 0 < $("#right_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#right_table");
		else
			showAlert("조회된 내용이 없습니다.");
	});

}

function load_route_list(cid) {
	$("#option2").find("option").remove(); 
	ajaxCall("./stop/selectRouteListWithComp.do",{compid:cid},null,route_list,null);
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