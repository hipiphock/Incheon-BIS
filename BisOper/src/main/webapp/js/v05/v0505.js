
//상단
var model1 = [
	   			{label:"노선번호",		name:"routeno",         index:"routeno",      	width: "110", 	align:"center"},
	   			{label:"노선유형",		name:"routetpcd",       index:"routetpcd",      width: "110", 	align:"center"},
	   			{label:"정류장수",		name:"pass_bstopcnt",   index:"pass_bstopcnt",  width: "110", 	align:"center"},
	   			{label:"중복길이(m)",	name:"len",        		index:"len",     	 	width: "110", 	align:"center"},
	   			{label:"노선길이(m)",	name:"routelen",        index:"routelen",       width: "110", 	align:"center"},
	   			{label:"굴곡도",		name:"routecurv",       index:"routecurv",      width: "110", 	align:"center"},
	   			{label:"경합률(%)",	name:"rate",        	index:"rate",      		width: "110", 	align:"center"  	,sorttype: "number"},
	   			{label:"비고",		name:"descr",        	index:"descr",     		width: "510", 	align:"center"},
	   			
	   			{name:"routeid",    index:"routeid",        hidden:true}
   			 ];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});

function setCategory(){
	
	ajaxCall("./comp/selectCompCateList.do", null, null, sel_comp_success, null);
	sel_routeCate_list(null,'166012');

	function sel_comp_success(data) { 
		var strTemp = "";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.compid+"'>"+value.compnm+"</option>";
		});
		$("#sel_compid").empty().append(strTemp);
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
		var strTemp = "";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.routeid+"'>"+value.routeno+"</option>";
		});
		$("#sel_routeid").empty().append(strTemp);
	};
};


function initGrid(){
	makeFilterGrid("#main_list", model1, 300, "resultList", onSelected, null ,null);


	function onSelected(){
		var rowid = $("#busInfo_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#busInfo_list").jqGrid('getRowData', rowid);
		var carregno = rowData.carregno;
		var busid = rowData.busid;
		$(".input_treatyn").val(carregno).attr("id",busid);
	};
	
	$(window).bind('resize', function() {
		$("#main_list").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#main_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
			routeid : $("#sel_routeid").val()
		};
		reloadGrid("#main_list", "./route/selectRouteRateCurv.do", param, "resultList");
		ajaxCall("./route/selectRouteInfoData.do", param, null, success, null);
	});
	function success(data){
		var result = data.result;
		$("#lcnt").text(result.lic_buscnt);
		$("#runtm").text(result.fmt_runtm);
		$("#snm").text(result.origin_bstopid);
		$("#enm").text(result.dest_bstopid);
		$("#routelen").text(result.routelen);
		$("#routecurv").text(result.routecurv);
	};
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});

	//버스회사 카테고리 변경시 노선번호 회사소속 노선리스트 변경
	$("#sel_compid").on("change",function(){
		var compid = $("#sel_compid option:selected").val();
		sel_routeCate_list(null,compid);
	});
	
	
	
};

