$(document).ready(function(){
	$(".s_btn").hide();
	appendLoader("조회중..");
	initGrid();
	initEvent();	
});

var models = [
        {label:"정류소 ID",			name:"bstopid",			index:"bstopid",			width: "65", 	align:"center", sorttype:"text"},
        {label:"단축번호",		    name:"short_bstopid",	index:"short_bstopid",		width: "55", 	align:"center", sorttype:"text"},
        {label:"정류소명",			name:"bstopnm", 		index:"bstopnm",            width: "187", 	align:"left",   sorttype:"text"},
        {label:"정류소유형",			name:"bstoptype", 	    index:"bstoptype",	        width: "55", 	align:"center", sorttype:"text"}
       ];
var models1 = [
              {label:"이벤트발생시간",			name:"eventdt",			index:"eventdt",			width: "120", 	align:"center", sorttype:"text"},
              {label:"가공일시",		    name:"procdt",			index:"procdt",				width: "120", 	align:"center", sorttype:"text"},
              {label:"노선번호",			name:"routeno", 		index:"routeno",            width: "60", 	align:"center", sorttype:"text"},
              {label:"방향구분",			name:"dirtype", 	    index:"dirtype",	        width: "60", 	align:"center", sorttype:"text"},
              {label:"차량번호",			name:"caregno",			index:"caregno",			width: "121", 	align:"center", sorttype:"text"},
              {label:"남은노드수",		    name:"rest_nodecnt",	index:"rest_nodecnt",		width: "110", 	align:"center", sorttype:"text"},
              {label:"남은정류소수",			name:"rest_bstopcnt", 	index:"rest_bstopcnt",      width: "110", 	align:"center", sorttype:"text"},
              {label:"도착예정시간",			name:"arrplantm",		index:"arrplantm",			width: "120", 	align:"center", sorttype:"text", formatter:time_form},
              {label:"막차여부",		    name:"lastbusyn",		index:"lastbusyn",			width: "63", 	align:"center", sorttype:"text"}
             ];

function time_form(cellValue){
	return (parseInt(cellValue/100))+'분'+(cellValue%100)+'초';
}

function initGrid(){
	ajaxCall("./stop/selectBittpcdList.do", null, null, bittpcd_list, null);
	makeGrid("#stop_list", models, 110, "resultList", onSelected, onComplete1, null);
	makeGrid("#oper_info_list", models1, 110, "resultList", null, onComplete2, null);
	
	function onSelected(rowid){
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		loadGrid2(rowData.bstopid)
	}
	
	function onComplete1(data){
		hideLoader();
		$("#search_count").text("정류소 검색 결과  "+data.records+"건");
	}
	function onComplete2(data){
		hideLoader();
		$("#search_count2").text("정류소 제공정보 검색 결과  "+data.records+"건");
	}
	
	$(window).bind('resize', function() {
		$("#stop_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#stop_list").jqGrid('setGridWidth', $(".main_chart").width());
		$("#oper_info_list").jqGrid('setGridHeight', $(".subcon2_right").height()-23);
		$("#oper_info_list").jqGrid('setGridWidth', $(".subcon2_right").width());
	}).trigger('resize');
	loadGrid($("#search_option option:selected").val());
}

function loadGrid(option){
	showLoader();

	var SearchWord = $("#option_name").val();
	var Bittpcd = $("#option_type option:selected").val();
	var RouteId = "";
	var RoadName = "";
	if(option==2) RouteId = $("#option_list option:selected").val();
	else if(option==3) RoadName = $("#option_list option:selected").val();
	var params = { 
			searchWord : SearchWord,
			bittpcd : Bittpcd,
			routeid : RouteId,
			roadnm : RoadName
	}
	reloadGrid("#stop_list", "./stop/selectBstopList.do", params, "resultList");
}

function loadGrid2(bstopid){
	showLoader();
	var time = Number($("#option_hour").val())*60 + Number($("#option_minute").val())
	if(time==0){
		alert("조회범위를 입력해주세요");
		hideLoader();
		return;
	}
	var params = { 
			time : String(time),
			bstopid : bstopid
	}
	reloadGrid("#oper_info_list", "./stop/selectBstopInfo.do", params, "resultList");
}

function bittpcd_list(data){
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm;
		temp.value = value.cd;
		$("#option_type").append(temp);
	})
}


function load_option_list(option){
	$("#option_list").find("option").remove();
	if(option==2)
		ajaxCall("./route/selectRouteList.do", null, null, route_list, null);
	else if(option==3)
		ajaxCall("./route/selectBitParamDepth2List.do", {cate_flag : "1"}, null, road_list, null);
		
}

function route_list(data){
	$("#option_list_name").text("노선번호");
	$.each(data.resultList,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML =value.routeno
		temp.value = value.routeid
		$("#option_list").append(temp);
	})
}

function road_list(data){
	$("#option_list_name").text("도로명");
	$.each(data.roadnm,function(index,value){
		var temp = document.createElement('option');
		temp.innerHTML = value.roadnm;
		temp.value = value.roadnm;
		$("#option_list").append(temp);
	})
}

function initEvent(){
	$("#search_option").change(function(){
		load_option_list($("#search_option option:selected").val());
	}).trigger("change");
	$("#btn_search").click(function(){
		$("#oper_info_list").jqGrid("clearGridData");
		loadGrid($("#search_option option:selected").val());
	})
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	
	$( "#option_name" ).keypress(function(e) {
		  if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$( "#option_hour" ).keypress(function(e) {
		  if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$( "#option_minute" ).keypress(function(e) {
		  if (e.which == 13) { $("#btn_search").trigger("click");}
	});
	$("#option_minute").change(function(){
		var value = $(this).val();
		if(value>59)
			$(this).val('59')
		else if(value<0)
			$(this).val(0)
	})
	$("#option_hour").change(function(){
		if($(this).val()<0)
			$(this).val(0)
	})
	
	
	//파일 저장
	$("#btn_excel").click(function(){
		if( 0 < $("#oper_info_list").getGridParam("reccount") )
			execlDownload($(".pop_title2 h2").text(), "#oper_info_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});
}

function execlDownload(title,grid_id){
	$("#excelDown").remove();
	var grid = $(grid_id);
	
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST";
	
	var fileName = JSON.stringify(title)
	var param = document.createElement('INPUT');     
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid('getGridParam','colNames'));
	
	var idData = grid.jqGrid('getGridParam','colModel');
	var columnName = [];
	$.each(idData,function(index,value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type  = 'HIDDEN';
	param.name  = 'json';
	param.value = fileName + columnLabel + columnName + columnData;
	
	form.appendChild(param);
	
	document.body.appendChild(form);	
	inquiryFileDownload("excelDown", true);
}
