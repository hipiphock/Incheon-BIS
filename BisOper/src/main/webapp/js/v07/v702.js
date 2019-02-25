$(document).ready(function(){	
	initGrid();
	initEvent();
	setDialog();
});
var selectDlg;

var models1 = [
       			{label:'파라미터ID',			name:'proc_param_id',	index:'proc_param_id',     	width: "77",  type: "I", sorttype:"text",	    align:"center"},
              	{label:'변경ID',					name:'change_hs_no',	index:'change_hs_no',       width: "77",   type: "I", sorttype:"number", 	align:"center"},
              	{label:'패턴비율',				name:'ptrn_rate',    		index:'ptrn_rate',           	width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'칼만필터링 비율',    name:'kalman_rate',  	index:'kalman_rate',          width: "77",   type: "I", sorttype:"text",	    align:"center"},
              	{label:'가중치1',				name:'weight_1',      	index:'weight_1',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치2',				name:'weight_2',      	index:'weight_2',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치3',				name:'weight_3',      	index:'weight_3',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치4',				name:'weight_4',      	index:'weight_4',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치5',				name:'weight_5',      	index:'weight_5',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치6',				name:'weight_6',      	index:'weight_6',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치7',				name:'weight_7',      	index:'weight_7',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치8',				name:'weight_8',      	index:'weight_8',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치9',				name:'weight_9',      	index:'weight_9',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'가중치10',				name:'weight_10',      	index:'weight_10',        		width: "77",   type: "I", sorttype:"text", 	    align:"center"},
              	{label:'유효시간(H)',			name:'vailid_clct_time',	index:'vailid_clct_time',      width: "77",   type: "I", sorttype:"number",     align:"center"},
              	{label:'설명',					name:'remark',  			index:'remark',        			width: "77",   type: "I", sorttype:"number",	    align:"center"},
              	
              	{label:'input_data_type',					name:'input_data_type',        index:'input_data_type',        width: "77",   type: "I", sorttype:"number",	    align:"center", hidden:true}              
              	];


var models2 = [
      			{onlyView: true, 
      			 label:'선택',				name:'checkbox',        			 index:'checkbox',         					width: "100",  type: "I", sorttype:"text",	    align:"center"},
             	{label:'노선번호',			name:'route_name',              index:'route_name',      		width: "100",   type: "I", sorttype:"number", 	align:"center"},
             	{label:'노선표준ID',		name:'route_id',           		index:'route_id',           		width: "100",   type: "I", sorttype:"text", 	    align:"center"},
             	{label:'노선순번',	    	name:'route_ord',             	index:'route_ord',             width: "100",   type: "I", sorttype:"text",	    align:"center"},
             	{label:'시점명',				name:'st_node_name',        	index:'st_node_name',   	width: "100",   type: "I", sorttype:"text", 	    align:"center"},
             	{label:'종점명',				name:'ed_node_name',      	index:'ed_node_name',      width: "100",   type: "I", sorttype:"number",     align:"center"},
             	{label:'시점ID',				name:'st_node_id',        		index:'st_node_id',     		width: "100",   type: "I", sorttype:"number",	    align:"center"},
             	{label:'종점ID',				name:'ed_node_id',             	index:'ed_node_id',    		width: "100",  type: "I", sorttype:"text", 	    align:"center"},
             	{label:'파라미터ID',		name:'proc_param_id',          	index:'proc_param_id',    	width: "100",  type: "I", sorttype:"text", 	    align:"center"},
             	{label:'변경ID',   			name:'change_hs_no',           index:'change_hs_no',     	 width: "100",  type: "I", sorttype:"text",	    align:"left"},             	
             	
             	{label:'input_data_type',   			name:'input_data_type',            index:'input_data_type',            width: "100",  type: "I", sorttype:"text",	    align:"left", hidden:true}             	
             	];

var models3 = [
               	{onlyView: true, 
               	 label:'표준노선ID',	name:'route_id',               	index:'routeid',           		width: "80",   	sorttype:"number", 	align:"center"},
			 	{label:'노선명명',		name:'route_name',         		index:'routeno',          	width: "90", 	sorttype:"text", 	    	align:"left"},
			 	{label:'경로설명',		name:'routesect_explain',    	index:'routedesc',  	width: "118", 		sorttype:"number", 	align:"center"}             	
			 	];
              

function initGrid(){
	makeGrid("#top_param_list", models1, 110, "resultList", onSelectedParam, null, null);
	
	function onSelectedParam(rowid){
		var proc_param_id = $("#top_param_list").getRowData(rowid)["proc_param_id"];
		var change_hs_no = $("#top_param_list").getRowData(rowid)["change_hs_no"];
		$("#selected_id").text(proc_param_id + " / " + change_hs_no);
	}
	
	makeGrid("#bot_route_list", models2, 110, "resultList", null, null, null);
	
	$(window).bind('resize', function() {
		$("#top_param_list").jqGrid('setGridHeight',$(".analy_con1_chart").height() - 23);
		$("#top_param_list").jqGrid('setGridWidth',$(".analy_con1_chart").width());
		$("#bot_route_list").jqGrid('setGridHeight',$(".analy_con1_chart2").height() - 23);
		$("#bot_route_list").jqGrid('setGridWidth',$(".analy_con1_chart2").width());
	}).trigger('resize');	
	
	loadTopGrid();	
}

function loadTopGrid(){
	reloadGrid("#top_param_list", "./route/selectProcParamList.do", null, "resultList");
}

function loadBotGrid(){
	reloadGrid("#bot_route_list", "./route/selectRouteProcParamList.do", { route_id : $("#input_route_id").val() }, "resultList");
}

function initEvent(){
	$("#btn_refresh").click(function(){
		loadTopGrid();
		loadBotGrid();
		$("#selected_id").text("없음");
	});
	
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	});
	
	$("#btn_excel1").click(function() {
		if( 0 < $("#top_param_list").getGridParam("reccount") )
			execlDownload("top_param_list", "excelProcParamList")
		else
			showAlert("조회된 내용이 없습니다.");		
	});
	
	$("#btn_excel2").click(function() {
		if( 0 < $("#bot_route_list").getGridParam("reccount") )
			execlDownload("bot_route_list", "excelRouteProcParamList")
		else
			showAlert("조회된 내용이 없습니다.");		
	});
}

function setDialog() {
	selectDlg = getDialog("pop_choice", "container");
	
	$("#btn_close").click(function() {
		selectDlg.dialog("close");
	});
	
	$("#btn_pop_search").click(function() {
		var params = {
				searchWord : $("#input_pop_word").val()
		}
		reloadGrid("#pop_list", "./route/selectRouteList.do", params, "resultList");
	});
		
	$("#input_pop_word").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_pop_search").trigger("click");		
	});
	
	$("#txt_title").text("노선 선택");
	
	makeGrid("#pop_list", models3, 110, "resultList", null, null, dblClickPop);
	
	function dblClickPop(rowid) {
		var rowData = $("#pop_list").jqGrid('getRowData', rowid);
		
		$("#input_route_id").val(rowData.routeid);
		$("#input_route").text("["+rowData.routeid+"] "+rowData.routeno+"번 노선");
		loadBotGrid();
		selectDlg.dialog("close");
	}
	
	$("#pop_list").jqGrid('setGridHeight',224);
	$("#pop_list").jqGrid('setGridWidth',320);
	
	reloadGrid("#pop_list", "./route/selectRouteList.do", null, "resultList");
}

function execlDownload(grid_id, excel_url){
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./route/"+excel_url+".do";
	form.method = "POST";
	
	var data = $("#"+grid_id).getRowData();
	console.log(data)
	
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