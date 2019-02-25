/**
 * BIT관리 - 전체 BIT 조회
 * @author 박경원
 * @since 2017-10-20
 */

$(document).ready(function(){
	$("#refresh").click(function() {
		reloadGrid("#all_bit_list", "./bit/selectBitListAll.do", null, "resultList");
	})
	
	bitGrid();
});

function bitGrid() {
	
	var grid_height = 632;
	
	var models1 = [
	               	{onlyView: true, label:"통신",		name:"com_status",				index:"com_status",       	width: "70", 	align:"center", sorttype:"text", formatter:setCommStatusText},
	               	{label:"BIT ID",	name:"bit_id",					index:"bit_id",       		width: "70", 	align:"center", sorttype:"number"},
	                {label:"관리번호",		name:"bit_id",					index:"bit_id",       		width: "70", 	align:"center", sorttype:"number"},
	   	        	{label:"지점명",		name:"stop_name",   			index:"stop_name",     		width: "157", 	align:"left",   sorttype:"text"},
	   	        	{label:"시나리오 ID",	name:"scenario_id",   			index:"scenario_id",     	width: "117", 	align:"center", sorttype:"number"},
	   	        	{label:"BIT 종류",	name:"bit_type_name",   		index:"bit_type_name",      width: "75", 	align:"center", sorttype:"text"},
	   	        	{label:"모바일",		name:"service_id",      		index:"service_id",       	width: "60", 	align:"center", sorttype:"number"},
	   	        	{label:"사업 구분",		name:"business_title",  		index:"business_title",     width: "230", 	align:"center", sorttype:"text"},
	   	        	{label:"접속 서버명",	name:"server_name",    			index:"server_name",      	width: "87", 	align:"center", sorttype:"text"},
	   	        	{label:"제조사",		name:"company_name",    		index:"company_name",      	width: "87", 	align:"center", sorttype:"text"},
	   	        	
	   	        	{label:"BIT 온도",	name:"temperature",				index:"temperature",		width: "70", 	align:"center", sorttype:"number"},
	   	        	{label:"문열림 상태",	name:"door_state",				index:"door_state",			width: "85",	align:"center", sorttype:"text", formatter:setDoorStatus},
	   	        	{label:"화면상태",		name:"disp_state",				index:"disp_state",			width: "85",	align:"center", sorttype:"text", formatter:setDisplayStatus},
	   	        	]
	
	makeGrid("#all_bit_list", models1, grid_height, "result_list", null, null, null);
	
	reloadGrid("#all_bit_list", "./bit/selectBitListAll.do", null, "resultList");
	
	
	$(window).bind('resize', function() {
		$("#all_bit_list").jqGrid('setGridHeight',$(".subcon_con2").height() - 23);
		$("#all_bit_list").jqGrid('setGridWidth',$(".subcon_con2").width());
	}).trigger('resize');
	
}

function setCommStatusText(cellValue, opts, rowdata){ 
    switch(cellValue){
    	case "0" : 
    		return "<span style='color:"+COLOR_RED+";'>끊김</span>"; 
    		break; 
        case "1": 
            return "<span style='color:"+COLOR_GREEN+";'>정상</span>"; 
            break; 
    } 
}

function setDisplayStatus(cellValue, options, rowdata, action) {
	if (cellValue == 1) {
		cellValue = "켜짐";
	} else if (cellValue == 0) {
		cellValue = "꺼짐";
	}
	
	return cellValue;
}

function setDoorStatus(cellValue, options, rowdata, action) {
	if (cellValue == 1) {
		cellValue = "닫힘";
	} else if (cellValue == 0) {
		cellValue = "열림";
	}
	
	return cellValue;
}