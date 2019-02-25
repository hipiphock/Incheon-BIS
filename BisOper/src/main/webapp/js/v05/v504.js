/**
 * BIT관리 - BIT 모니터링
 * @author 박경원
 * @since 2017-10-20
 */
var group_id = "";
var type = "";
var business_id = "";

$(document).ready(function(){
	setEvent();
	setCategory();
	bitGrid();
});

function setEvent() {
	//새로 고침
	$("#refresh").click(function() {
		window.location.reload();
	});
	
	//Clear
	$("#btn_clear").click(function() {
		$("#input_search").val("");
	})
	
	//Enter 검색
	$("#input_search").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#img_search").trigger("click");
		}
	})
	
	//검색 이벤트
	$("#img_search").click(function() {
		var text = $("#input_search").val();
		
		var param = {
				search_word: text
		}
		/*임시 필터조치*/
		$("#monitoring_list").jqGrid('GridUnload');
		$("#check_detail").attr("checked",false);
		
		makeFilterGrid("#monitoring_list", models1, grid_height, "result_list", null, null, onDblClick1);
		
		function onDblClick1(rowid) {
			var rowData = $("#monitoring_list").jqGrid('getRowData', rowid);
			inquiryImage(rowData.bit_id);
		}
		$(window).bind('resize', function() {
			$("#monitoring_list").jqGrid('setGridHeight',$(".bit_left_chart_body3").height() - 23);
			$("#monitoring_list").jqGrid('setGridWidth',$(".bit_left_chart_body3").width());
		}).trigger('resize');
		/*임시 필터조치*/
		reloadGrid("#monitoring_list", "./bit/selectBitMonitoringList.do", param, "resultList");
	})
	
	$("#check_detail").change(function(){
		
		if($(this).is(":checked")) {
			setFilter("monitoring_list", true);
			$("#monitoring_list").jqGrid('setGridHeight',$(".bit_left_chart_body3").height() - 50);

			var tempgrid = $("#monitoring_list");
			tempgrid[0].triggerToolbar();
		}else {
			setFilter("monitoring_list", false);
			$("#monitoring_list").jqGrid('setGridHeight',$(".bit_left_chart_body3").height() - 25);
			
			$("#monitoring_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} }).trigger("reloadGrid");
		}
	});
}

//그룹화, 클릭 이벤트
function setCategory() {
	ajaxCall("./bit/selectCategory.do", null, null, category_success, null);
	function category_success(data) {
		var bitGroupList = data.bitGroupList;
		var bitTypeList = data.bitTypeList;
		var bitCompanyList = data.bitCompanyList;
		var bitBusinessList = data.bitBusinessList;
		var bitInstallTypeList = data.bitInstallTypeList;
		
		$("#sel_bit_group").empty();
		$("#sel_bit_type").empty();
		$("#sel_bit_business").empty();
		
		var text = "<option value=\"\">전체</option>";
		$("#sel_bit_group").append(text);
		$("#sel_bit_type").append(text);
		$("#sel_bit_business").append(text);
		
		$.each(bitGroupList, function(index, value) {
			var text = "<option value=\"" + value.bit_cate_id + "\">" + value.cate_name + "</option>";
			$("#sel_bit_group").append(text);
		});
		
		$.each(bitTypeList, function(index, value) {
			var text = "<option value=\"" + value.bit_type + "\">" + value.bit_type_name + "</option>";
			$("#sel_bit_type").append(text);
		})
		
		$.each(bitBusinessList, function(index, value) {
			var text = "<option value=\"" + value.business_id + "\">" + value.business_title + "</option>";
			$("#sel_bit_business").append(text);
		})
		
	}
	
	$("#sel_bit_group").change(function() {
		group_id = $(this).val();
		reload()
	});
	
	$("#sel_bit_type").change(function() {
		type = $(this).val();
		reload()
	});
	
	$("#sel_bit_business").change(function() {
		business_id = $(this).val();
		reload()
	});
	
	function reload() {
		var param = {
				group_id: group_id,
				type: type,
				business_id: business_id,
					};
		
		$("#monitoring_list").jqGrid('setGridParam', { search: false, recreateFilter:true, postData: { "filters": ""} });
		$("#monitoring_list").jqGrid("destroyFilterToolbar");
		$("#check_detail").attr("checked",false);

		reloadGrid("#monitoring_list", "./bit/selectBitMonitoringList.do", param, "resultList");
	}
}

function bitGrid() {
	
	var grid_height = 535;
	
	var models1 = [
	               	{label:"통신",		name:"com_status",				index:"com_status",       	width: "70", 	align:"center", sorttype:"text", formatter:setCommStatusText},
	                {label:"관리번호",		name:"bit_id",					index:"bit_id",       		width: "70", 	align:"center", type: "I", sorttype:"number"},
	   	        	{label:"지점명",		name:"stop_name",   			index:"stop_name",     		width: "147", 	align:"left",   type: "I", sorttype:"text"},
	   	        	{label:"BIT 종류",	name:"bit_type_name",   		index:"bit_type_name",      width: "75", 	align:"center", type: "I", sorttype:"text"},
	   	        	{label:"모바일",		name:"service_id",      		index:"service_id",       	width: "60", 	align:"center", type: "I", sorttype:"number"},
	   	        	{label:"사업 구분",		name:"business_title",  		index:"business_title",     width: "230", 	align:"center", sorttype:"text"},
	   	        	{label:"접속 서버명",	name:"server_name",    			index:"server_name",      	width: "87", 	align:"center", sorttype:"text"},
	   	        	{label:"제조사",		name:"company_name",    		index:"company_name",      	width: "87", 	align:"center", sorttype:"text"},
	   	        	
	   	        	{name:"temperature",	index:"temperature",	type: "I",  hidden:true},
	   	        	{name:"humidity",		index:"humidity",		type: "I",  hidden:true},
	   	        	{name:"disp_state",		index:"disp_state",		type: "S",  hidden:true},
	   	        	{name:"door_state",		index:"door_state",		type: "S",  hidden:true}
	   	        	]
	
	makeFilterGrid("#monitoring_list", models1, grid_height, "result_list", null, null, onDblClick1);
	
	function onDblClick1(rowid) {
		var rowData = $("#monitoring_list").jqGrid('getRowData', rowid);
		inquiryImage(rowData.bit_id);
	}
	
	reloadGrid("#monitoring_list", "./bit/selectBitMonitoringList.do", null, "resultList");
	
	
	$(window).bind('resize', function() {
		$("#monitoring_list").jqGrid('setGridHeight',$(".bit_left_chart_body3").height() - 23);
		$("#monitoring_list").jqGrid('setGridWidth',$(".bit_left_chart_body3").width());
	}).trigger('resize');
	
}

function inquiryImage(bitId) {
	var params = {
			bit_id : bitId,
			type : 0
	}
	
	ajaxCall("./bit/getBitImage.do", params, null, onSuccessImg, null);
	
//	$("#bit_img").removeAttr("src").attr("src", "./bit/getBitImage.do?bit_id="+rowData.bit_id);
	function onSuccessImg(data) {
		if(data && data.resultList.length > 2) {
			if($("#image_wrap").hasClass("img_two")) {
				$("#image_wrap").removeClass("img_two");
			}
		}else {
			if($("#image_wrap").hasClass("img_two") == false) {
				$("#image_wrap").addClass("img_two");
			}
		}
		var strTemp = "";
		$("#image_wrap").empty();
		$.each(data.resultList, function(index, value) {
			
			strTemp = "<img id='img_"+index+"'>";
			$("#image_wrap").append(strTemp);
			$("#img_"+index).attr("src", "data:image/png;base64,"+value.base64Img);
			console.log(value.create_date);
		});
	}
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