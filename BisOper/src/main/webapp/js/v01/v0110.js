$(document).ready(function(){
	appendLoader("조회중..");
	ajaxCall("./route/selectRouteList.do",null,null,route_list,null);
	initEvent(); 
});

var row_length; 
var entireRow = []; 
var count =0;

//loadComplete에서 검색결과가 없다는 메세지 삭제하기 위해
function makeGrid(gridId, models, height, jsonRoot, selectCallback, completeCallback, dblClkCallback) {
	$(gridId).jqGrid({
		datatype    : "local",
	    colModel    : models,   //grid data model array
        loadonce    : true,
	    sortable    : false,    //column draggable 
	    filterable  : false,
	    sortorder   : "desc",
	    height      : height,
	    width       : 335,
	    editurl     : "clientArray",
	    shrinkToFit : false, //가로 스크롤
	    rownumbers  : true,
	    viewrecords : false,
	    loadtext    : '로딩중..',
	    gridview    : true,
	    hiddengrid  : true,
	    rowNum      : 99999,
	    ondblClickRow: function(rowid) {  //double click event
	    	if(dblClkCallback != undefined) 
	    		dblClkCallback(rowid);
	    },
	    onSelectRow : function(rowid) {
	    	if(selectCallback != undefined) {selectCallback(rowid);}	
	    	if(models[0].onlyView == true) {return;}
	    	
	    	defaultOnSelected(models, gridId, rowid);
	    },
	    jsonReader: {
		    repeatitems : false,
		    root        : jsonRoot,
		    id          : "NM"
	    },
		loadBeforeSend: function(){
		},
	    loadComplete: function(data) {
	    	$(this).jqGrid('hideCol', 'rn'); //row number hide

	    	if(completeCallback != undefined) completeCallback(data);	
	    }
	});	
	
	if(models[0].btn!= undefined)
		setButtonEvent(models[0].btn);	
}

function route_list(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid; 
		$("#option1").append(temp);
	})
	load_stop_list($("#option1 option:selected").val());
}

function initEvent() {
	//노선 번호 변경시 정류소 변경
	$("#option1").change(function() {
		load_stop_list($("#option1 option:selected").val());    
	})
	
	//검색
	$("#btn_search").click(function() {
		var params = {
				routeid:$("#option1 option:selected").val(), 
				pathseq1:$("#option2 option:selected").val(),
				pathseq2:$("#option3 option:selected").val()
		};
		ajaxCall("./stop/selectStopsLists.do", params, null, make_model, null);
		showLoader(); 
	})
}

function load_stop_list(rid) {
	$(".options").find("option").remove(); 
	ajaxCall("./stop/selectStopsLists.do", {routeid: rid}, null, stop_list, null); 
}

function stop_list(data) {
	$.each(data.resultList, function(index,value) {
		var temp = document.createElement('option');
		temp.innerHTML = value.bstopnm; 
		temp.value = value.pathseq;
		$(".options").append(temp);
	})
}

function make_model(data) {
	$("#arrival_time").jqGrid('GridUnload');
	var models = [ 
	              {label:"출발/도착",	name:"fname",	index:"fname",	width: "150", align:"center", frozen: true, classes: 'color'},
	              {name:"pathseq",		index:"pathseq",	hidden: true},
	              {name:"seq",			index:"seq",		hidden: true}
	];
	$.each(data.resultList, function(index, value) {
		var temp  = {label:value.bstopnm, name:value.pathseq, index:value.pathseq, width:"100", align:"center" };
		models.push(temp); 
	})
	row_length = data.resultList.length;
	models.push({label:"도착/출발",	name:"lname",	index:"lname",	width: "150", align:"center", classes: 'color'});
	if(row_length == 0){
		hideLoader();
		return ;
	}
	initGrid(models);
}

function initGrid(models) { 
	makeGrid("#arrival_time", models, 300, "resultList", null, null, null);

	$("#arrival_time").jqGrid('setFrozenColumns');
	$(window).bind('resize',function() {
		$("#arrival_time").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#arrival_time").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	var selected_index = $("#option2 option:selected").index(); 
	entireRow = [];
	for(i = 0; i < row_length; i++) {
		var params = {
				routeid:$("#option1 option:selected").val(), 
				pathseq1:$("#option2 option:eq("+(selected_index+i)+")").val(),
				pathseq2:$("#option3 option:selected").val()
		}
		ajaxCall("./route/selectArrivalTime.do",params,null,add_row,null);
	}
}

function add_row(data) {
	var rowId;
	var rowData = {};
	var first_sum; 
	$.each(data.resultList, function(index, value) {
		if(index == 0){
			rowData.fname = rowData.lname = value.nodenm; 
			first_sum = value.sumtrv; 
			rowId = value.pathseq; 
			rowData.seq = value.pathseq
		}
		else 
			rowData[value.pathseq] =(parseInt((value.sumtrv-first_sum)/60)+1) + "분";
	});
	entireRow.push(rowData);
	
	if(entireRow.length == row_length){
		entireRow.sort(function(a,b){
			return a["seq"] - b["seq"]; 
		});
		$("#arrival_time").jqGrid("addRowData", rowId+1, entireRow, 'last');
		hideLoader();
	}
}