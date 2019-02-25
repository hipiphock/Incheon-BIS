/**
 * BIT관리 시정홍보 자료관리
 * 
 * @author 박경원
 * @since 2017-10-16
 */

var group_id = "";
var type = "";
var company_id = "";
var business_id = "";
var install_type = "";

//시나리오 리스트
var models1 = [
                {onlyView: true, 
                 label:"BIT ID",	name:"bitid",			        index:"bitid",     width: "105", 	align:"center", sorttype:"number"},
                {label:"단축 ID",		name:"short_bstopid",			index:"short_bstopid",     width: "105", 	align:"center", sorttype:"number"},
   	        	{label:"지점명",		name:"bstopnm",   			    index:"bstopnm",   width: "200", 	align:"left",   sorttype:"text"},
   	        	{label:"BIT 유형",	name:"cdnm",   		            index:"cdnm",      width: "200", 	align:"center", sorttype:"text"}
//   	        	{label:"모바일",		name:"service_id",      		index:"service_id",       	width: "60", 	align:"center", sorttype:"number"},
//   	        	{label:"BIT 설치유형",	name:"bit_install_type_name",	index:"bit_install_type_name",   width: "90", 	align:"center", sorttype:"text"},
//   	        	{label:"시나리오 ID",	name:"scenario_id",     		index:"scenario_id",      	width: "140", 	align:"center", sorttype:"number"},
//   	        	{label:"사업 구분",		name:"business_title",  		index:"business_title",     width: "230", 	align:"center", sorttype:"text"},
//   	        	{label:"접속 서버명",	name:"system_name",    			index:"system_name",      	width: "87", 	align:"center", sorttype:"text"},
//   	        	{label:"접속서버 ID",	name:"server_id",      			index:"server_id",      	width: "90", 	align:"center", sorttype:"number"},
//   	        	{label:"제공그룹 ID",	name:"provide_group_id",		indxe:"provide_group_id",	width: "90",	align:"center", sorttype:"number"}
   	        	];
//적용중인 시나리오
var models2 = [
               {onlyView: true, label:"순번",		name:"scenario_ord",			index:"scenario_ord",    	 width: "50", 	align:"center", sorttype:"number"},
        	   {label:"파일명",	name:"disp_data_filename",     	index:"disp_data_filename",  width: "100", 	align:"left",   sorttype:"text"},
        	   {label:"시작시간",	name:"disp_st_dt",     			index:"disp_st_dt",      	 width: "100", 	align:"center", sorttype:"number"},
        	   {label:"종료시간",	name:"disp_ed_dt",    			index:"disp_ed_dt",          width: "100", 	align:"center", sorttype:"number"}
        	   ];
//선택 된 시나리오
var models3 = [
        	   {onlyView: true, 
        		label:"순번",		name:"seq",     		index:"seq",      	 width: "100", 	align:"center", sorttype:"number"},
        	   {label:"파일명",	name:"file_name",       index:"file_name",   width: "200", 	align:"left",   sorttype:"text"},
        	   {label:"시작일",	name:"disp_st_dt",     			index:"disp_st_dt",          width: "126", 	align:"center", sorttype:"number"},
        	   {label:"종료일",	name:"disp_ed_dt",    			index:"disp_ed_dt",       	 width: "125", 	align:"center", sorttype:"number"},
        	   {label:"표출시간",	name:"view_time",   			index:"view_time",     		 width: "80", 	align:"center", sorttype:"number"}
        	   ];



$(document).ready(function(){
	bitGrid();
	initialize();
	setEvent();
});

function initialize() {
	ajaxCall("./sys/selectCodeList.do", {cdcategid: 'PROJECTTPCD'}, null, onSuccess1, null);
	ajaxCall("./sys/selectCodeList.do", {cdcategid: 'BITTPCD'}, null, onSuccess2, null);
	
	function onSuccess1(data) {
		var strTemp = "<option value=''>전체</option>";
		$.each(data.resultList, function(index, value) {
			strTemp += "<option value='" + value.cd + "'>" + value.cdnm + "</option>";
		})
		$("#sel_bit_business").empty().append(strTemp);
	}
	
	function onSuccess2(data) {
		var strTemp = "<option value=''>전체</option>";
		$.each(data.resultList, function(index, value) {
			strTemp += "<option value='" + value.cd + "'>" + value.cdnm + "</option>";
		})
		$("#sel_bittpcd").empty().append(strTemp);
		
		$("#sel_bittpcd").change(function() {
			loadGrid();
		});
	}
}

function setEvent() {
	//시나리오 버튼
	$("#btn_scene").click(function(){
		window.open("v511.view", "v511.view", "width=1228px, height=629px, resizable=0, scrollbars=0");
	});
	
	//새로고침
	$("#btn_refresh").click(function() {
		window.location.reload();
	})
	
	//Enter 검색
	$("#input_search").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#img_search").trigger("click");
		}
	})
	//검색 이벤트
	$("#img_search").click(function() {
		loadGrid();
	})
	
	$("#select_servertpcd").change(function() {
		var servertpcd = $(this).find("option:selected").val();
		
		inquiryScenarioList();
		loadGrid();
	}).trigger("change");
	
	
	//Clear
	$("#btn_clear").click(function() {
		$("#input_search").val("");
	})
	
	//시나리오 적용 버튼
	$("#btn_scenario_apply").click(function() {
		var row_ids = $("#bit_list").jqGrid("getGridParam", "selarrrow");
		var bit_ids = []; 
		
		if (row_ids.length == 0) {
			showAlert("BIT를 선택해주세요.");
			return;
		}
		
		var text = "";
		if (row_ids.length == 1) {
			
			var row_data = $("#bit_list").jqGrid("getRowData", row_ids[0]);
			var stop_name = row_data.bstopnm;
			text = stop_name + "의 시나리오를 변경합니다. 계속하시겠습니까?";
		} else {
			text = row_ids.length + "개의 시나리오를 변경합니다.<br>계속하시겠습니까?";
		}
		
		showConfirmDlg(text, applyConfirm);
		
		function applyConfirm() {
			var strIds = "";
			for (var i = 0; i < row_ids.length; i++) {
				var rowData = $("#bit_list").jqGrid("getRowData", row_ids[i]);
				if(i < (row_ids.length-1)) {
					strIds += rowData.bitid+",";
				}else {
					strIds += rowData.bitid;
				}
			}
			
			var params = {
					bitid : strIds,
					scenarioid : $("#sel_scenario_list option:selected").val(),
					servertp : $("#select_servertpcd option:selected").val()
			};
			
//			$.ajaxSettings.traditional = true;
			ajaxCall("./scenario.soc", params, null, applySuccess, applyFail);
			
			function applySuccess(data) {
				console.log("##scenario.soc " + data.result);
				if (data.result != 1) {
					showAlert("시나리오 적용 요청 중 오류 발생");
				}else {
					showAlert("요청이  정상적으로 전달되었습니다.");
				}
				
//				reloadGrid("#bit_list", "./bit/selectBitScenarioList.do", null, "resultList");
			}
			
			function applyFail() {
				showAlert("에러");
//				reloadGrid("#bit_list", "./bit/selectBitScenarioList.do", null, "resultList");
			}
		}
	})
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
		$("#sel_bit_company").empty();
		$("#sel_bit_business").empty();
		$("#sel_bit_install_type").empty();
		
		var text = "<option value=\"\">전체</option>";
		$("#sel_bit_group").append(text);
		$("#sel_bit_type").append(text);
		$("#sel_bit_company").append(text);
		$("#sel_bit_business").append(text);
		$("#sel_bit_install_type").append(text);
		
		$.each(bitGroupList, function(index, value) {
			var text = "<option value=\"" + value.bit_cate_id + "\">" + value.cate_name + "</option>";
			$("#sel_bit_group").append(text);
		});
		
		$.each(bitTypeList, function(index, value) {
			var text = "<option value=\"" + value.bit_type + "\">" + value.bit_type_name + "</option>";
			$("#sel_bit_type").append(text);
		})
		
		$.each(bitCompanyList, function(index, value) {
			var text = "<option value=\"" + value.company_id + "\">" + value.company_name + "</option>";
			$("#sel_bit_company").append(text);
		})
		
		$.each(bitBusinessList, function(index, value) {
			var text = "<option value=\"" + value.business_id + "\">" + value.business_title + "</option>";
			$("#sel_bit_business").append(text);
		})
		
		$.each(bitInstallTypeList, function(index, value) {
			var text = "<option value=\"" + value.bit_install_type + "\">" + value.bit_install_type_name + "</option>";
			$("#sel_bit_install_type").append(text);
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
	
	$("#sel_bit_company").change(function() {
		company_id = $(this).val();
		reload()
	});
	
	$("#sel_bit_business").change(function() {
		business_id = $(this).val();
		reload()
	});
	
	/*$("#sel_bit_install_type").change(function() {
		install_type = $(this).val();
		reload()
	});
	
	function reload() {
		var param = {
				group_id: group_id,
				type: type,
				company_id: company_id,
				business_id: business_id,
				bit_install_type: install_type
					};
		reloadGrid("#bit_list", "./bit/selectBitScenarioList.do", param, "resultList");
	}*/
	
}

function loadGrid() {
	var params = {
			searchWord : $("#input_search").val(),
			bittpcd    : $("#sel_bittpcd option:selected").val(),
			server_id  : $("#select_servertpcd option:selected").val()
	}
	
	reloadGrid("#bit_list", "./bit/selectBitList.do", params, "resultList");
}


function bitGrid() {
	var grid_height = 500;
	makeMultiGrid("#bit_list", models1, grid_height, "resultList", onSelected1, onCompleted, null);
	makeGrid("#scene_sel_list", models3, grid_height, "resultList", null, null, null);
	
	//선택된 BIT의 시나리오 상세 조회
	function onSelected1(rowId) {
//		var rowData = $("#bit_list").jqGrid("getRowData", rowId);
//		var text = "BIT - " + rowData.bit_id + " " + rowData.stop_name
//					+ "<span>적용 된 시나리오 " + rowData.scenario_id + "</span>";
//		var params = {scenario_id: rowData.scenario_id};
//		
//		$(".si_txt").empty();
//		$(".si_txt").append(text);
//		reloadGrid("#scene_list", "./bit/selectScenarioDetailList.do", params, "resultList");
	}
	
	function onCompleted() {
//		$("#bit_list").jqGrid("setSelection", 1);
	}
	
	$(window).bind('resize', function() {
		$("#bit_list").jqGrid('setGridHeight',$(".bit_left_chart_body2").height() - 23);
		$("#bit_list").jqGrid('setGridWidth',$(".bit_left_chart_body2").width());
		$("#scene_list").jqGrid('setGridHeight',$(".bit_si_left .bit_si_chart").height() - 23);
		$("#scene_list").jqGrid('setGridWidth',$(".bit_si_left .bit_si_chart").width());
		$("#scene_sel_list").jqGrid('setGridHeight',$(".bit_si_right .bit_si_chart").height() - 23);
		$("#scene_sel_list").jqGrid('setGridWidth',$(".bit_si_right .bit_si_chart").width());
	}).trigger('resize');
}

function inquiryScenarioList() {
	var servertpcd = $("#select_servertpcd option:selected").val();
//	if(servertpcd != "120" && servertpcd != "123") {
//		$("#sel_scenario_list").empty();
//		showAlert("신규, 광역  BIT 만 시정홍보 적용 가능합니다.");
//	}
	
	//사용중인 시나리오 목록 조회
	ajaxCall("./bit/selectScenarioList.do", {servertp: servertpcd}, null, success, null);
	//selectbox 구성
	function success(data) {
		var resultList = data.resultList;
		var text = "";
		
		$("#sel_scenario_list").empty();
		$.each(resultList, function(index, value) {
			text = "<option value=\"" + value.snr_id + "\">[" + value.snr_id + "] " 
				+ value.file_name + "</option>";
			$("#sel_scenario_list").append(text);	
		})
		//값이 바뀔때마다 상세 조회
		$("#sel_scenario_list").change(function() {
			var servertp = $("#select_servertpcd option:selected").val();
			
			var params = {
				scenario_id: $(this).find("option:selected").val(),
				servertp: servertp	
			};
			reloadGrid("#scene_sel_list", "./bit/selectScenarioDetailList.do", params, "resultList");
		}).trigger("change");
		//첫번째 option 선택
		$("#sel_scenario_list option:eq(0)").trigger("change");
	}
}