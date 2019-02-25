$(document).ready(function(){	
	initGrid();
	initEvent();	
});

var models = [
      			{label:'BIT ID',					name:'proc_param_id',		index:'proc_param_id',     	width: "150",  type: "I", sorttype:"text",	    align:"center"},
             	{label:'출발지점ID',			name:'change_hs_no',		index:'change_hs_no',       width: "150",   type: "I", sorttype:"number", 	align:"center"},
             	{label:'출발지점명',			name:'ptrn_rate',    			index:'ptrn_rate',           	width: "150",   type: "I", sorttype:"text", 	    align:"center"},
             	{label:'도착지점ID',    		name:'kalman_rate',  		index:'kalman_rate',          width: "150",   type: "I", sorttype:"text",	    align:"center"},
             	{label:'도착지점명',			name:'weight_1',      		index:'weight_1',        		width: "150",   type: "I", sorttype:"text", 	    align:"center"},
             	{label:'가공시간',				name:'weight_1',      		index:'weight_1',        		width: "150",   type: "I", sorttype:"text", 	    align:"center"},
             	{label:'운행시간',				name:'weight_1',      		index:'weight_1',        		width: "150",   type: "I", sorttype:"text", 	    align:"center"}
             	]

function initGrid(){
	makeGrid("#bit_pass_list", models, 110, "resultList", null, null, null);	
	
	$(window).bind('resize', function() {
		$("#bit_pass_list").jqGrid('setGridHeight',$(".main_chart").height() - 23);
		$("#bit_pass_list").jqGrid('setGridWidth',$(".main_chart").width());		
	}).trigger('resize');	
	
	loadGrid();
}

function initEvent(){
	$("#btn_refresh").click(function(){
		loadGrid();		
	});
}

function loadGrid(){
	reloadGrid("#top_param_list", "./bit/selectBitPassTimeList.do", null, "resultList");
}