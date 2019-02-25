
var beforeRow;
var lastRow;
var isModified = true;
var add_id = 0; // grid 추가 row 고유 id 용도 
$(document).ready(function(){
	initEvent();
	initGrid();	
});

// column
var models1 = [
			{label:'노선 ID',		 		name:'routeid',	 				index:'routeid',					type:"I", sorttype:"number",	width: "100", align:"center", hidden:false, sortable:true},
		   	{label:'노선명',	 				name:'routeno',	 			index:'routeno',				type:"I", sorttype:"text",		width: "100", align:"center", hidden:false, sortable:true},
		   	{label:'노선종류', 			    name:'route_type_name',	index:'route_type_name',	type:"I", sorttype:"text",		width: "100", align:"center", hidden:false, sortable:true},
		   	{label:'운수사',    				name:'compnm', 				index:'compnm',				type:"I", sorttype:"text",		width: "142", align:"center", hidden:false, sortable:true},
		   	
		   	{label:'routetpcd',				name:'routetpcd', 			index:'routetpcd', 	type:"I", sorttype:"text",		width: "142", align:"center", hidden:true, sortable:true},
		   	{label:'useyn',    				name:'useyn', 					index:'useyn', 		type:"I", sorttype:"text",		width: "142", align:"center", hidden:true, sortable:true},
		   	{label:'compid',    			name:'compid', 				index:'compid', 		type:"I", sorttype:"text",		width: "142", align:"center", hidden:true, sortable:true},
           	];

var models2 = [
			{label:'첫차시간',				name:'fbus_dephms',	         		index:'fbus_dephms',      	width: "120",	align:"center", editable:true, sortable:false},
			{label:'막차시간',    			name:'lbus_dephms',		         	index:'lbus_dephms',	    	width: "120",	align:"center", editable:true, sortable:false},
			{label:'운행 타입',	    		name:'operation_type',      		index:'operation_type',  	width: "100", 	align:"center",  editable:true, sortable:false},
			{label:'비고',   					name:'descr',			         		index:'descr',		  			width: "100",		align:"center", editable:true, sortable:false},
			
			{label:'dowtpcd',   			name:'dowtpcd',			         	index:'dowtpcd',		  		width: "100",		align:"center", editable:true, sortable:false, hidden:true}
			/*{label:'출발시간',			name:'departure_time',	         	index:'departure_time',            width: "120",	align:"center", editable:true, sortable:false, editrules:{custom: true , custom_func: timeCheck}},
			{label:'종점도착시간',    	name:'arrival_time',		         	index:'arrival_time',	            width: "120",	align:"center", editable:true, sortable:false},
			{label:'평일',	    			name:'week_operation_flag',      index:'week_operation_flag',       width: "100", 	align:"center", sorttype:"text",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},
			{label:'토요일',				name:'sat_operation_flag',       	index:'sat_operation_flag',        width: "100", 	align:"center", sorttype:"text",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},
			{label:'공휴일',	    		name:'holidy_operation_flag',    	index:'holidy_operation_flag',     width: "100", 	align:"center", sorttype:"text",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},
			{label:'방학', 				name:'vacation_operation_flag',	index:'vacation_operation_flag',   width: "100", 	align:"center", sorttype:"text",formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}},
			{label:'비고',   				name:'remark',			         		index:'remark',		  width: "100",		align:"center", editable:true, sortable:false}*/
           ];

/* temp */
function timeCheck(value, colName) {
	console.log("#value " + value + " " + value.length);
	if(checkRegExp("NUM", value)) {
		if(value.length != 4) {
			isModified = false;
			return [false, "숫자 4자리로 맞춰 주세요. 예) 0000"];
		}else {
			isModified = true;
			return [true, ""];
		}
	}else {
		isModified = false;
		if(value.length != 4) {
			return [false, "숫자 4자리로 맞춰 주세요. 예) 0000"];
		}else {
			return [false, "숫자만 입력가능 합니다.: " + value];
		}
	}
}

function initGrid(){
	// create templet	
	makeFilterGrid("#route_list", models1, 110, "resultList", onSelectedLeft, onComplete, null)	
	makeGrid("#run_list", models2, 110, "resultList2", onSelected2, onCompleted2, null);	
	
	$("#run_list").sortableRows();
	
	/*$('#run_list').jqGrid('setGridParam', { beforeSelectRow : function(rowId){ 
		$('#run_list').resetSelection(); //selection제거
		console.log("isModified " + isModified);
		if(isModified = false) {
			$('#run_list').setSelection(lastRow, true); 
		}else {
			$('#run_list').setSelection(rowId, true); //선택한 row만 select
		}
	}});*/
	
	function onSelectedLeft(rowid){
		// right grid load
		rightGridLoad($("#route_list").getRowData(rowid)["routeid"]);		
	}
	
	function onComplete(data) {
		if (data.rows.length == 0) {
			return;
		}
		$("#route_list").jqGrid("setSelection", 1);
	}
	
	function onSelected2(rowid) {
		if(rowid && rowid != lastRow){
			$("#run_list").jqGrid('saveRow', lastRow);
			$("#run_list").jqGrid('editRow', rowid, true);
			lastRow = rowid;
		}
	}
	
	function onCompleted2(data) {
		if (data.rows.length == 0) {
			return;
		}
		
		$("#run_list").jqGrid('showCol', 'rn'); //row number show
	}
	 
	// size custom
	$(window).bind('resize', function() {
		$("#route_list").jqGrid('setGridHeight', $(".time_left_chart_body").height()-25);
		$("#route_list").jqGrid('setGridWidth', $(".time_left_chart_body").width());
		$("#run_list").jqGrid('setGridHeight', 483);
		$("#run_list").jqGrid('setGridWidth', 866);
	}).trigger('resize');
	
	// left grid load
	leftGridLoad();
}

function initEvent(){
	$("#btn_refresh").click(function(){		
		$("#btn_search").trigger("click");
		$("#input_route_id").val("");
		$("#input_route_name").val("");		
		$("#run_list").clearGridData();		
	});
	
	$("#btn_search").click(function(){					
		leftGridLoad();
	});
	
	$("#text_search").on("keydown", function(key) {
		if(key.keyCode == 13)
			$("#btn_search").trigger("click");		
	});	
	
	$("#btn_clear").click(function(){
		// 좌측 리스트
		$("#text_search").val("");
		$("#check_route_id").prop("checked", false);
		$("#check_route_name").prop("checked", false);		
		$("#check_detail").prop("checked", false);
		$("#check_detail").trigger("change"); // filter : false 강제 이벤트
		$("#btn_search").trigger("click");
		
		// 우측 리스트
		$("#input_route_id").val("");
		$("#input_route_name").val("");		
		$("#run_list").clearGridData();
	});	
	
	$("#check_detail").change(function(){		
		if($(this).is(":checked")) {
			setFilter("route_list", true);
			$("#route_list").jqGrid('setGridHeight',$(".time_left_chart_body").height() - 50);
			
			var tempgrid = $("#route_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("route_list", false);
			$("#route_list").jqGrid('setGridHeight',$(".time_left_chart_body").height() - 25);
			
			$("#route_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
	
	/* right grid edit / run_list */
	$("#btn_new").click(function(){
		if($("#input_routeid").val() == ""){
			showAlert("노선을 선택해 주십시오.")
			return;
		}
		
		$("#run_list").addRowData("addRow"+add_id, {});
		add_id++;
	});

	$("#btn_del").click(function(){
		var rowid = $("#run_list").getGridParam("selrow");
		if (rowid == null) {
			showAlert("시간을 선택하세요.");
			return;
		}
		
		$("#run_list").delRowData(rowid);
	});

	$("#btn_save").click(function(){
		if($("#input_route_id").val() == ""){
			showAlert("노선을 선택해 주십시오.")
			return;
		}
		
		showConfirmDlg("변경 사항을 저장하시겠습니까?", function(){
			$("#run_list").jqGrid('saveRow', lastRow);
			
			var routeid = $("#input_routeid").val();
			var rows = $("#run_list").getRowData();
			
			rows.unshift({ routeid : routeid });
			
			ajaxCallList("./route/insertRouteScheduleInfo.do", rows, null/*beforeSend*/, onSuccessReg/*success*/, null/*error*/)
			function onSuccessReg(data) {
				if(data && data.result){
					if(Number(data.result) != $("#run_list").getGridParam("reccount")
							){
						showAlert("저장 중 오류가 발생하였습니다.(일부 데이터 누락)");
					}else{
						showAlert("저장 되었습니다.");
						rightGridLoad();						
					}
				}else{
					showAlert("저장 중 오류가 발생하였습니다.(insert 미동작");
				}				
			};					
		});
	});

	$("#btn_cancel").click(function(){		
		showConfirmDlg("변경 사항을 취소하시겠습니까?", function(){
			rightGridLoad()});
	});
}



function leftGridLoad(){	
	var params = {
			search_word 			: $("#text_search").val(),	
			check_route_id		: $("#check_route_id").is(":checked"),
			check_route_name	: $("#check_route_name").is(":checked")
	};

	$("#route_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
	$("#route_list").jqGrid("destroyFilterToolbar");
	$("#check_detail").attr("checked",false);
		
	reloadGrid("#route_list", "./route/selectRouteScheduleList.do", params, "resultList");
}

function rightGridLoad(routeid){
	if(routeid == null)
		routeid = $("#input_route_id").val();
	if(routeid == "")
		return;
	
	reloadGrid("#run_list", "./route/selectRouteScheduleInfo.do", { routeid : routeid }, "resultList2");
}