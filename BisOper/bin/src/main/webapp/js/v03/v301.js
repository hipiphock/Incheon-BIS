
$(document).ready(function(){
	appendLoader("조회중..");
	initialize();
	inquiryCodeData();
	createGrid();
});

function initialize() {
	
	$("#btn_excel").click(function() {
		if( 0 < $("#stop_list").getGridParam("reccount") )
			execlDownload("기반정보 - 정류장 관리 - 정류장목록", "#stop_list");
		else
			showAlert("조회된 내용이 없습니다.");	
	});

	$("#input_searchWord").keydown(function(event){
		if(event.keyCode == 13) {
			var word = $("#input_searchWord").val();
			if(word != "") $("#btn_search").trigger("click");
		}
	});
	
	$("#btn_search").click(function(){
		loadGrid();
	});
	
	$("#btn_clear").click(function(){
		$("#input_searchWord").val("");
		loadGrid();
	});
	
	$("#check_detail").change(function(){
		
		if($(this).is(":checked")) {
			setFilter("stop_list", true);
			$("#stop_list").jqGrid('setGridHeight',$(".base_left_chart_body").height() - 50);
			
			var tempgrid = $("#stop_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("stop_list", false);
			$("#stop_list").jqGrid('setGridHeight',$(".base_left_chart_body").height() - 25);
			
			$("#stop_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
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

/*function execlDownload() {
	$("#excelDown").remove();
	console.log('hi origin')
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/excelStopList.do";
	form.method = "POST";
	
	var data = $("#stop_list").getRowData();
	
	for(row in data){
		for(name in data[row]){
			var para = document.createElement('INPUT'); 
			para.type  = 'HIDDEN';
			para.name  = name;
			para.value = data[row][name];
			form.appendChild(para);
		}
	}
	
	document.body.appendChild(form);
	
	inquiryFileDownload("excelDown");

};*/

function inquiryCodeData() {
	ajaxCall("./sys/selectBusStopCodeList.do", null, null, onSuccess1, null);
	
	function onSuccess1(data) { 
		if(data && data.bstoptpcdList) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.bstoptpcdList, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_bstoptpcd").empty().append(strTemp);
		}
		
		if(data && data.centerlaneyn) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.centerlaneyn, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_centerlaneyn").empty().append(strTemp);
		}
		
		if(data && data.bstopfacilcd) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.bstopfacilcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_bstopfacilcd").empty().append(strTemp);
		}
		
		if(data && data.baytpcd) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.baytpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_baytpcd").empty().append(strTemp);
		}
		
		if(data && data.loctpcd) {
			var strTemp = "<option value=''>정보없음</option>";
			$.each( data.loctpcd, function( index, value ) {
				strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			});
			$("#select_loctpcd").empty().append(strTemp);
		}
	}
}

var models1 = [
	   			{label:'표준 ID',		name:'bstopid',        index:'bstopid',         width: "95",   type: "I", sorttype:"number",	align:"center"},
	           	//TODO service_id 없음
	   			{label:'모바일 ID',		name:'short_bstopid',     index:'short_bstopid',      width: "95",   type: "I", sorttype:"number", 	align:"center"},
	           	{label:'정류장명',		name:'bstopnm',      index:'bstopnm',       width: "177",  type: "I", sorttype:"text", 	    align:"left"},
	           	
	           	{name:'areacd',                 index:'areacd',                type: "I",  hidden:true},
//	           	{name:'eng_bstopnm',            index:'eng_bstopnm',           type: "I",  hidden:true},
	           	{name:'short_bstopnm',          index:'short_bstopnm',         type: "I",  hidden:true},
	           	{name:'bstoptpcd',              index:'bstoptpcd',             type: "S",  hidden:true},
	           	{name:'centerlaneyn',         	index:'centerlaneyn',          type: "S",  hidden:true},
	           	{name:'adminnm',   			 	index:'adminnm',    		   type: "I",  hidden:true},
	           	{name:'descr',   			 	index:'descr',    		       type: "I",  hidden:true},
	           	{name:'bstopfacilcd',   		index:'bstopfacilcd',    	   type: "S",  hidden:true},
//	           	{name:'baytpcd',            	index:'baytpcd',               type: "S",  hidden:true},
//	           	{name:'baylen',            		index:'baylen',                type: "I",  hidden:true},
	           	{name:'lanecnt',            	index:'lanecnt',               type: "I",  hidden:true},
	           	{name:'linkid',                 index:'linkid',                type: "I",  hidden:true},
	           	{name:'lat',   					index:'lat',    			   type: "I",  hidden:true},
	           	{name:'lng',   					index:'lng',    			   type: "I",  hidden:true},
	           	{name:'loctpcd',   				index:'loctpcd',    		   type: "S",  hidden:true},
	           	{name:'dongnm',   				index:'dongnm',    		   	   type: "I",  hidden:true},
	           	{name:'app_startdt',   			index:'app_startdt',    	   type: "I",  hidden:true},
	           	{name:'app_enddt',   			index:'dongnm',    		   	   type: "I",  hidden:true},
//	           	{name:'useyn',                	index:'useyn',                 type: "C",  hidden:true},
//	           	{name:'detectrange', 			index:'detectrange',  		   type: "I",  hidden:true},
//	           	{name:'upddt',               	index:'upddt',                 type: "D",  hidden:true},
//	           	{name:'upd_userid', 			index:'upd_userid',  		   type: "I",  hidden:true},
//	           	{name:'link_posx', 			    index:'link_posx',  		   type: "I",  hidden:true},
//	           	{name:'link_posy', 				index:'link_posy',  		   type: "I",  hidden:true},
//	           	{name:'detectrange', 			index:'detectrange',  		   type: "I",  hidden:true},
	           	{name:'bitid', 			        index:'bitid',  		                   hidden:true}
	           	];

var models2 = [  
	   			{onlyView:true, label:'버스회사',		name:'compnm',        	index:'compnm',      	width: "170", 	align:"center"},
	           	{label:'노선명',		name:'routeno',        	index:'routeno',      	width: "150", 	align:"center"},
	           	{label:'노선유형',		name:'routetpcd',       index:'routetpcd',      width: "150", 	align:"center"},
	           	{label:'기점',		name:'origin_bstopid',  index:'origin_bstopid', width: "214", 	align:"center"},
	           	{label:'종점',		name:'dest_bstopid',    index:'dest_bstopid',   width: "214", 	align:"center"},
	           	];

function createGrid() {
	//정류장 목록
	makeGrid("#bypass_route_list", models2, 110, "resultList", null, null);
//	makeFilterGrid("#stop_list", models1, 110, "resultList", onSelected1, onCompleted1, dblClick1);
	makeGrid("#stop_list", models1, 110, "resultList", onSelected1, onCompleted1, dblClick1);
	function onSelected1(rowid) {
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		reloadGrid("#bypass_route_list", "./stop/selectViaRouteList.do", {bstopid: rowData.bstopid}, "resultList");
	}
	
	function onCompleted1(data) {
		$("#stop_list").jqGrid("setSelection", 1, true);
	}
	
	function dblClick1(rowid) {
		var rowData = $("#stop_list").jqGrid('getRowData', rowid);
		console.log("##rowData " + rowData.bitid);
		if(rowData.bitid == "" || rowData.bitid == null) {
			showAlert("BIT 미설치 정류장 입니다. BIT 설치 정류장 선택 시 제공 정보 이력 화면으로 이동합니다.");
			return;
		}
		openMenuWindow('v602.view', rowData.bitid, encodeURI(rowData.bstopnm));
		
	}
	
	$(window).bind('resize', function() {
		$("#stop_list").jqGrid('setGridHeight',$(".base_left_chart_body").height() - 23);
		$("#stop_list").jqGrid('setGridWidth',$(".base_left_chart_body").width());
		
		$("#bypass_route_list").jqGrid('setGridHeight',$("#tab1").height() -23);
		$("#bypass_route_list").jqGrid('setGridWidth',$("#tab1").width());
		
		/*$("#bypass_route_list").jqGrid('setGridHeight',$(".sub_chart_body2").height() - 25);
		$("#bypass_route_list").jqGrid('setGridWidth',$(".sub_chart_body2").width());*/
		
	}).trigger('resize');
	
	showLoader();
	reloadGrid("#stop_list", "./stop/selectStopList.do", {searchWord: STOP_ID}, "resultList");
}

function loadGrid() {
	showLoader();
	
//	$("#stop_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
//	$("#stop_list").jqGrid("destroyFilterToolbar");
//	$("#check_detail").attr("checked",false);
	
	reloadGrid("#stop_list", "./stop/selectStopList.do", {searchWord: $("#input_searchWord").val()}, "resultList");
}
