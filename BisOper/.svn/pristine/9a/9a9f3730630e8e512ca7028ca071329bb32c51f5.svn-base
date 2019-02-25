
//상단
var model1 = [
	   			
	   			{label:"회사명",		name:"compnm",		  index:"compnm",       width: "145", 	align:"center"},
	   			{label:"대표자",		name:"governornm",    index:"governornm",   width: "105", 	align:"center"},
	   			{label:"주소",		name:"addr",		  index:"addr",  	    width: "260", 	align:"center"},
	   			{label:"전화번호",		name:"telno", 		  index:"telno", 	    width: "90", 	align:"center"},
	   			{label:"노선유형",		name:"routetype",	  index:"routetype", 	width: "90", 	align:"center"},
	   			{label:"노선번호",		name:"routeno",	  	  index:"routeno",  	width: "90", 	align:"center"},
	   			{label:"면허대수",		name:"lic_buscnt",	  index:"lic_buscnt",   width: "90", 	align:"center"},
	   			{label:"예비대수",		name:"rsv_buscnt", 	  index:"rsv_buscnt", 	width: "90", 	align:"center"},
	   			{label:"경유정류소",		name:"pass_bstopcnt", index:"pass_bstopcnt",width: "90", 	align:"center"},
	   			{label:"길이(m)",		name:"routelen", 	  index:"routelen", 	width: "90", 	align:"center"},
	   			{label:"굴곡도",		name:"routecurv", 	  index:"routecurv", 	width: "90", 	align:"center"},
	   			
	   			{name:"compid",			index:"compid",  	    hidden:true},
	   			{name:"usernm",			index:"usernm",  	    hidden:true},
	   			{name:"routeid",		index:"routeid",  	    hidden:true},
	   			{name:"buscnt",			index:"buscnt",  	    hidden:true}
	   			];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});


function initGrid(){
	makeGrid("#detail_list", model1, 600, "resultList", null, null, null);
	$("#detail_list").jqGrid('setGroupHeaders', {
		useColSpanStyle: false,
		  groupHeaders:[
			{ startColumnName: 'compnm', numberOfColumns: 4, titleText: "회사정보" },
			{ startColumnName: 'routetype', numberOfColumns: 7, titleText: "노선정보" }
		  ]
    });
	groupingGrid_falseCollapse("#detail_list", "compnm", '<strong>  {0} - {1} 건</strong>');
	
	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()-46);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
};




function setCategory(){
	ajaxCall("./comp/selectCompCateList.do", null, null, onSuccess, null);
	
	function onSuccess(data) { 
		var strTemp = "<option value>전체</option>";
		$.each(data.resultList,function(index, value){
			strTemp += "<option value='"+value.compid+"'>"+value.compnm+"</option>";
		});
		$("#sel_compid").empty().append(strTemp);
	}
};

function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = { compid: $("#sel_compid option:selected").val() };
		reloadGrid("#detail_list", "./route/selectCurrentStateList.do", param, "resultList");
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
};



//groupCollapse:false 그룹핑그리드
function groupingGrid_falseCollapse(gridId, name, groupText) {
	var groupOption = new Object();
	groupOption.groupField = [name];
	groupOption.groupColumnShow = [true];
	groupOption.groupCollapse = false; //접기 해제
	groupOption.groupText = [groupText];
	groupOption.groupOrder = ['asc'];
	
	$(gridId).jqGrid("setGridParam", {groupingView : groupOption});
	$(gridId).jqGrid("setGridParam", {grouping : true});
	$(gridId).trigger("reloadGrid"); 
}

