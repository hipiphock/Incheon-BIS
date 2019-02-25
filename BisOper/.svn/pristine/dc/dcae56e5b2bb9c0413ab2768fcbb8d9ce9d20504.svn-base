$(document).ready(function(){
	baseStopGrid();
});

function baseStopGrid() {
	
	var grid_H = 500;	
	
	var columnNames = ["표준 ID", "모바일 ID", "정류장명"];
	var columnModels = [
	        {name:"",      index:"",       width: "25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "25%", 	align:"center", hidden:false, sortable:true},	        
	        {name:"",      index:"",       width: "50%", 	align:"center", hidden:false, sortable:true}
	];

	$("#base_stop_list").jqGrid({
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
		$("#base_stop_list").jqGrid('setGridHeight',$(".base_left_chart_body").height() - 70);
		$("#base_stop_list").jqGrid('setGridWidth',$(".base_left_chart_body").width());
	}).trigger('resize');
	
}