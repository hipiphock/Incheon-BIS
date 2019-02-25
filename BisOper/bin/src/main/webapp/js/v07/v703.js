$(document).ready(function(){
	paramGrid();
});

function paramGrid() {
	
	var grid_H = 500;	
	
	var columnNames = ["파라미터 ID", "변경 ID", "패턴비율", "칼만필터링 비율", "가중치1", 
	                   "가중치2", "가중치3", "가중치4", "가중치5", "가중치6", "가중치7",
	                   "가중치8", "가중치9", "가중치10", "유효시간(H)", "설명",];
	var columnModels = [
	        {name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "100", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},	
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "6.25%", 	align:"center", hidden:false, sortable:true}
	];

	$("#top_param_list").jqGrid({
		//url: "",
	    mtype: "POST",
	    //datatype: "json",
	    colNames: columnNames,
	    colModel: columnModels, 
	    loadonce: false,
	    sortable: true,
	    filterable: true,
	    sortorder:"desc",
	    shrinkToFit:false,
	    rownumbers: false,
	    viewrecords: false,
	    loadtext: "로딩중..",
	    gridview: true,
	    hiddengrid:true,
	    rowNum:99999,
		viewrecords: false, 
		height: grid_H,	
		width:"100%"
	 });
	
	var columnNames = ["", "노선번호", "노선표준 ID", "노선 순번", "시점명", "종점명",
	                   "시점 ID", "종점 ID", "파라미터 ID", "변경 ID"];
	var columnModels = [
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true}
	];

	$("#bot_param_list").jqGrid({
		//url: "",
	    mtype: "POST",
	    //datatype: "json",
	    colNames: columnNames,
	    colModel: columnModels, 
	    loadonce: false,
	    sortable: true,
	    filterable: true,
	    sortorder:"desc",
	    shrinkToFit:false,
	    rownumbers: false,
	    viewrecords: false,
	    loadtext: "로딩중..",
	    gridview: true,
	    hiddengrid:true,
	    rowNum:99999,
		viewrecords: false, 
		height: grid_H,	
		width:"100%"
	 });
		
	$(window).bind('resize', function() {
		$("#top_param_list").jqGrid('setGridHeight',$(".analy_con1_chart").height() - 70);
		$("#top_param_list").jqGrid('setGridWidth',$(".analy_con1_chart").width());
		$("#bot_param_list").jqGrid('setGridHeight',$(".analy_con1_chart2").height() - 70);
		$("#bot_param_list").jqGrid('setGridWidth',$(".analy_con1_chart2").width());
	}).trigger('resize');
	
}