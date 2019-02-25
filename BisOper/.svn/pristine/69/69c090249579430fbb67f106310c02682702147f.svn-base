$(document).ready(function(){
	appendLoader("조회중..");
	initGrid();
	initEvent();	
});

var models = [
        {label:"차량 ID",			name:"busid",			  		index:"busid",				width: "109", 	align:"center", hidden:false, sortable:true, },
        {label:"차량 번호",		name:"carregno",		  		index:"carregno",		    width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"차량종류",			name:"bus_type_name", 	index:"bus_type_name",	width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"운수사",			name:"compnm", 			index:"compnm", width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"저상여부",			name:"lowplateyn",		  	index:"lowplateyn",			width: "100", 	align:"center", hidden:false, sortable:true, formatter : setStatusText},
        {label:"승차제한인원",	name:"vehcapa",      		index:"vehcapa",		width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"비고",				name:"descr",			 	 	index:"descr",			width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"사용여부",			name:"useyn",			  		index:"useyn",			width: "100", 	align:"center", hidden:false, sortable:true, formatter : setStatusText},
        {label:"OBE ID",			name:"obe_id",			  	index:"obe_id",			width: "100", 	align:"center", hidden:false, sortable:true},//DB 변경 후 반영 여부 불명
        {label:"권역명",			name:"area_code",		  	index:"area_code",		width: "100", 	align:"center", hidden:false, sortable:true},//DB 변경 후 반영 여부 불명
        {label:"등록일자",			name:"regist_dt",		  		index:"regist_dt",			width: "130", 	align:"center", hidden:false, sortable:true},
        {label:"업데이트 일자",	name:"update_dt",		  	index:"update_dt"	,		width: "130", 	align:"center", hidden:false, sortable:true},
        
        {label:"compid",			name:"compid",		  index:"compid"	,		width: "100", 	align:"center", hidden:true, sortable:true}];

function setStatusText(cellValue, opts, rowdata){ 
    switch(cellValue){
    	case "1" : 
    		return "사용"; 
    		break; 
        case "0": 
            return "미사용"; 
            break; 
    }
}


function initGrid(){
	makeFilterGrid("#car_list", models, 110, "resultList", null, counting, null);
	$(window).bind('resize', function() {
		$("#car_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#car_list").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');	
	
	loadGrid();
}

function initEvent(){
	$("#btn_refresh").click(function(){
		$("#btn_search").trigger("click");		
	});
	
	$("#btn_clear").click(function(){
		$("#text_search").val("");
		$("#check_detail").prop("checked", false);
		$("#check_detail").trigger("change"); // filter : false 강제 이벤트
		$("#btn_refresh").trigger("click");	
	});

	$("#btn_search").click(function(){
		loadGrid();		
	});

	$("#text_search").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_search").trigger("click");		
	});
	
	$("#check_detail").change(function(){		
		if($(this).is(":checked")) {
			setFilter("car_list", true);
			$("#car_list").jqGrid('setGridHeight',$(".main_chart").height() - 50);
			
			var tempgrid = $("#car_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("car_list", false);
			$("#car_list").jqGrid('setGridHeight',$(".main_chart").height() - 25);

			$("#car_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
	
	$("#btn_excel").click(function(){
		if( 0 < $("#car_list").getGridParam("reccount") )
			execlDownload();
		else
			showAlert("조회된 내용이 없습니다.");	
	});
}

function counting(){
	$("#list_count").text($("#car_list").getGridParam("reccount"));
}

function loadGrid(){
	showLoader();

	$("#car_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#car_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);
	
	params = { search_word : $("#text_search").val() }
	
	if(params["search_word"] == "")
		reloadGrid("#car_list", "./route/selectVehicleList.do", null, "resultList");
	else{
		reloadGrid("#car_list", "./route/selectVehicleList.do", params, "resultList");
	}
	
//	$.each(function(key,value){
//		console.log('key : '+key + "//" + "value : ");
//	});
}

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./route/downloadVehicleExcel.do";
	form.method = "POST";		
	
	var data = $("#car_list").getRowData();
	
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
}
	
