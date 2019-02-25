
//상단
var model1 = [
	   			{label:"버스ID",		name:"busid",        	index:"busid",      	width: "80", 	align:"center"},
	   			{label:"버스회사명",		name:"compnm",       	index:"compnm",      	width: "120", 	align:"center"},
	   			{label:"배정노선",		name:"routeno",         index:"routeno",      	width: "90", 	align:"center"},
	   			{label:"차량번호",		name:"carregno",        index:"carregno",       width: "120", 	align:"center"},
	   			{label:"버스유형",		name:"bustpcd",         index:"bustpcd",      	width: "90", 	align:"center"},
	   			{label:"저상차량",		name:"lowplateyn",      index:"lowplateyn",     width: "80", 	align:"center"},
	   			{label:"승차정원",		name:"vehcapa",         index:"vehcapa",      	width: "80", 	align:"center"},
	   			{label:"버스상태",		name:"busstatcd",       index:"busstatcd",      width: "90", 	align:"center"},
	   			{label:"연료유형",		name:"fueltpcd",        index:"fueltpcd",      	width: "80", 	align:"center"},
	   			{label:"제작사",		name:"manufnm",         index:"manufnm",      	width: "80", 	align:"center"},
	   			{label:"제작년도",		name:"manufyy",         index:"manufyy",     	width: "80", 	align:"center"},
	   			{label:"차대번호",		name:"bodyno",          index:"bodyno",      	width: "150", 	align:"center"},
	   			{label:"형식",		name:"frmnm",        	index:"frmnm",      	width: "100", 	align:"center"},
	   			{label:"등록일자",		name:"regymd",          index:"regymd",      	width: "120", 	align:"center"},
	   			{label:"사용여부",		name:"useyn",        	index:"useyn",      	width: "80", 	align:"center"},
	   			{label:"적용시작일시",	name:"app_startdt",     index:"app_startdt",    width: "150", 	align:"center"},
	   			{label:"적용종료일시",	name:"app_enddt",       index:"app_enddt",      width: "150", 	align:"center"},
	   			{label:"변경일시",		name:"upddt",        	index:"upddt",      	width: "150", 	align:"center"},
	   			{label:"변경자ID",		name:"upd_userid",      index:"upd_userid",     width: "100", 	align:"center"},
	   			{label:"대폐차구분",		name:"scraptpcd",       index:"scraptpcd",      width: "90", 	align:"center"},
	   			{label:"처리여부",		name:"treatyn",         index:"treatyn",      	width: "80", 	align:"center"}
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});

function setCategory(){
	ajaxCall("./comp/selectCompCateList.do", null, null, sel_comp_success, null);
	sel_routeCate_list();
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'SCRAPTPCD' } , null, sel_success1, null);
	ajaxCall("./sys/selectCodeList.do", { cdcategid : 'TREATYN'} , null, sel_success2, null);
	
	function sel_comp_success(data) { 
		var strTemp = "<option value=''>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.compid+"'>"+value.compnm+"</option>";
		});
		$("#sel_compid").empty().append(strTemp);
	};
	
	function sel_success1(data) {
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#select1").empty().append(strTemp);
	};

	function sel_success2(data) {
		var strTemp1 = "<option value>전체</option>";
		var strTemp2 = "";
		$.each(data.resultList,function(index, value){
			strTemp1 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
			strTemp2 += "<option value='"+value.cd+"'>"+value.cdnm+"</option>";
		});
		$("#select2").empty().append(strTemp1);
		$(".in70").empty().append(strTemp2);
	};
};


function sel_routeCate_list(useYn,compId) {
	var compid="";
	var useyn=""
	if(compId) compid = compId;
	if(useYn) useyn = useYn;
	var param = {
		compid : compid,	
		useyn : useyn
	};
	
	ajaxCall("./route/selectRouteCateList.do", param , null, sel_route_success, null);
	
	function sel_route_success(data) { 
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.routeid+"'>"+value.routeno+"</option>";
		});
		$("#sel_routeid").empty().append(strTemp);
	};

};

function initGrid(){
	makeGrid("#busInfo_list", model1, 300, "resultList", onSelected, onComplete ,null);

	function onSelected(){
		var rowid = $("#busInfo_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#busInfo_list").jqGrid('getRowData', rowid);
		var carregno = rowData.carregno;
		var busid = rowData.busid;
		$(".input_treatyn").val(carregno).attr("id",busid);
	};
	
	function onComplete(){
		hideLoader();
	};
	
	$(window).bind('resize', function() {
		$("#busInfo_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#busInfo_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
			compid : $("#sel_compid").val(),
			routeid : $("#sel_routeid").val(),
			searchWord : $("#search_carregno").val(),
			scraptpcd : $("#select1 option:selected").val(),
			treatyn : $("#select2 option:selected").val()
			
		};
		showLoader();
		reloadGrid("#busInfo_list", "./bus/selectBusBasicInfoList.do", param, "resultList");
		
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#search_carregno").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	//버스회사 카테고리 변경시 노선번호 회사소속 노선리스트 변경
	$("#sel_compid").on("change",function(){
		var compid = $("#sel_compid option:selected").val();
		var useyn = '1';
		sel_routeCate_list(useyn, compid);
		$("#btn_search").trigger("click");
	});
	
	$("#sel_routeid").on("change",function(){
		$("#btn_search").trigger("click");
	});
	
	//단말기 처리여부 변경
	$(".btn").on("click",function(){
		var param = {
				busid : $(".input_treatyn").attr("id"),
				treatyn : $(".in70 option:selected").val()
		}
		ajaxCall("./bus/updateBusTreatyn.do", param , null, successed, null);
		
		function successed(data){
			if(data.result == 1){
				alert("변경 성공");
				$("#btn_search").trigger("click");
			} else {
				alert("변경 실패");
			}
		}
	});
	
	//파일 저장
	$("#btn_excel").click(function(){
		if( 0 < $("#busInfo_list").getGridParam("reccount") )
			execlDownload($(".pop_title h2").text(), "#busInfo_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});
};

//엑셀저장
function execlDownload(title,grid_id){
	$("#excelDown").remove();
	var grid = $(grid_id);
	
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST";
	
	var fileName = JSON.stringify(title)
	var param = document.createElement('INPUT');     
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid('getGridParam','colNames'));
	
	var idData = grid.jqGrid('getGridParam','colModel');
	var columnName = [];
	$.each(idData,function(index,value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type  = 'HIDDEN';
	param.name  = 'json';
	param.value = fileName + columnLabel + columnName + columnData;
	
	form.appendChild(param);
	
	document.body.appendChild(form);	
	inquiryFileDownload("excelDown", true);
}


