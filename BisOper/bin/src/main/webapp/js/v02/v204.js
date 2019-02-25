var grid_H = 500;

$(document).ready(function(){
	grpListSet();
	smsListSet();
});

function grpListSet() {
		
	var columnNames = ["이름", "연락처", "비고", "등록일자"];
	var columnModels = [
	        {name:"",      index:"",       width: "25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "25%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "25%", 	align:"center", hidden:false, sortable:true}
	];

	$("#tell_list").jqGrid({
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
	    multiselect : true,
	    gridview: true,
	    hiddengrid:true,
	    rowNum:99999,
		viewrecords: false, 
		height: grid_H,	
		width:"100%"
	 });
	
	var columnNames = ["그룹명칭", "설명", '등록일자', "그룹등록자"];
	var columnModels = [
	        {name:"",      index:"",       width: "30%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "30%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "20%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "20%", 	align:"center", hidden:false, sortable:true}
	];

	$("#grp_list").jqGrid({
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
		height: grid_H
	 });
	
	var columnNames = ["이름", "연락처", '비고'];
	var columnModels = [
	        {name:"",      index:"",       width: "30%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "30%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "40%", 	align:"center", hidden:false, sortable:true}
	];

	$("#sel_grp_tell_list").jqGrid({
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
	    multiselect : true,
	    gridview: true,
	    hiddengrid:true,
	    rowNum:99999,
		viewrecords: false, 
		height: grid_H
	 });
	
	gridSizeSet();	
	
}

function gridSizeSet() {

	$(window).bind('resize', function() {
		$("#tell_list").jqGrid('setGridHeight',$(".sms_left").height() - 70);
		$("#tell_list").jqGrid('setGridWidth',$(".sms_left").width());
		$("#grp_list").jqGrid('setGridHeight',$(".sms_right1").height() - 70);
		$("#grp_list").jqGrid('setGridWidth',$(".sms_right1").width());
		$("#sel_grp_tell_list").jqGrid('setGridHeight',$(".sms_right2").height() - 70);
		$("#sel_grp_tell_list").jqGrid('setGridWidth',$(".sms_right2").width());
	}).trigger('resize');
	
}

function smsListSet() {
	var columnNames = ["일련번호", "전송요청일시", '대상번호', "받는번호", "메세지 내용"];
	var columnModels = [
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "20%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "10%", 	align:"center", hidden:false, sortable:true},
	        {name:"",      index:"",       width: "50%", 	align:"center", hidden:false, sortable:true}
	];

	$("#sms_list").jqGrid({
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
		height: grid_H
	 });
	
	$(window).bind('resize', function() {
		$("#sms_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 70);
		$("#sms_list").jqGrid('setGridWidth',$(".subcon_con3").width());
	}).trigger('resize');
}