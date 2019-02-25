
//상단
var model1 = [
	   			
	   			{label:"버스회사명",		name:"compnm",		  index:"compnm",       width: "120", 	align:"center", frozen:true},
	   			{label:"대표자명",		name:"governornm",    index:"governornm",   width: "120", 	align:"center", frozen:true},
	   			{label:"전화번호",		name:"telno",		  index:"telno",  	    width: "120", 	align:"center", frozen:true},
	   			{label:"사용여부",		name:"useyn", 		  index:"useyn", 	    width: "90", 	align:"center", frozen:true},
	   			{label:"운행노선수",		name:"run_routecnt",  index:"run_routecnt", width: "90", 	align:"center", frozen:true},
	   			{label:"운행대수",		name:"lic_buscnt",	  index:"lic_buscnt",   width: "90", 	align:"center"},
	   			{label:"예비대수",		name:"rsv_buscnt",	  index:"rsv_buscnt",   width: "90", 	align:"center"},
	   			{label:"운행대수",		name:"run_bus", 	  index:"run_bus", 		width: "90", 	align:"center"},
	   			{label:"예비대수",		name:"res_bus", 	  index:"res_bus", 		width: "90", 	align:"center"},
	   			{label:"관리자수",		name:"admin_cnt", 	  index:"admin_cnt", 	width: "90", 	align:"center"},
	   			{label:"정비직수",		name:"equip_cnt", 	  index:"equip_cnt", 	width: "90", 	align:"center"},
	   			{label:"운전자수",		name:"driver_cnt", 	  index:"driver_cnt", 	width: "90", 	align:"center"},
	   			{label:"적용시작일시",	name:"sdt", 		  index:"sdt", 			width: "150", 	align:"center"},
	   			{label:"적용종료일시",	name:"edt", 		  index:"edt", 			width: "150", 	align:"center"},
	   			{label:"비고",		name:"descr",		  index:"descr", 	    width: "300", 	align:"center"},
	   			
	   			
	   			{name:"faxno",			index:"faxno",  	    hidden:true},
	   			{name:"respon_userid",  index:"respon_userid",  hidden:true},
	   			{name:"cdt", 			index:"cdt",  	   		hidden:true},
	   			{name:"upd_userid", 	index:"upd_userid",  	hidden:true},
	   			{name:"compid",         index:"compid",  	    hidden:true},
	   			{name:"corpregno",	  	index:"corpregno",  	hidden:true},
	   			{name:"addr",		  	index:"addr",  	   		hidden:true}
	   			
	   			];
//하단
var model2 = [
     			{label:"차고지명",		name:"garagenm",        index:"garagenm",       width: "120", 	align:"center"},
     			{label:"주소",		name:"addr",		  	index:"addr",      		width: "250", 	align:"center"},
     			{label:"전화번호",		name:"telno",		  	index:"telno",  		width: "90", 	align:"center"},
     			{label:"법적면적",		name:"legal_dim",	  	index:"legal_dim",   	width: "90", 	align:"center"},
     			{label:"확보면적",		name:"own_dim",		  	index:"own_dim",  	    width: "90", 	align:"center"},
     			{label:"차고지유형",		name:"garagetpcd",		index:"garagetpcd",  	width: "90", 	align:"center"},
     			{label:"보유유형",		name:"owntpcd",		  	index:"owntpcd",  	    width: "90", 	align:"center"},
     			{label:"사용여부",		name:"useyn", 		  	index:"useyn", 	    	width: "90", 	align:"center"},
     			{label:"적용시작일시",	name:"sdt",			  	index:"sdt",  	        width: "150", 	align:"center"},
     			{label:"적용종료일시",	name:"edt",			  	index:"edt",  		    width: "150", 	align:"center"},
     			{label:"변경일시",		name:"cdt",			  	index:"cdt",  		    width: "150", 	align:"center"},
     			{label:"변경자",		name:"upd_userid",		index:"upd_userid",  	width: "120", 	align:"center"},
     			{label:"충전",		name:"cstationyn",		index:"cstationyn",  	width: "90", 	align:"center"},
     			{label:"주유",		name:"fstationyn",		index:"fstationyn",  	width: "90", 	align:"center"},
     			{label:"정비",		name:"sstationyn",		index:"sstationyn",  	width: "90", 	align:"center"},
     			
     			{name:"posx",	  	index:"posx",  			hidden:true},
     			{name:"posy",		index:"posy",  	   		hidden:true}
     		 ];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	setCategory();
});


function initGrid(){
	makeGrid("#comp_list", model1, 600, "resultList", onSelected1, null, null);
	makeGrid("#garage_list", model2, 130, "resultList", onSelected2, null, null);
	$("#comp_list").jqGrid('setGroupHeaders', {
		useColSpanStyle: false,
		  groupHeaders:[
			{ startColumnName: 'compnm', numberOfColumns: 5, titleText: "기본정보" },
			{ startColumnName: 'lic_buscnt', numberOfColumns: 4, titleText: "인허가버스정보" },
			{ startColumnName: 'admin_cnt', numberOfColumns: 6, titleText: "부가정보" }
		  ]
    });
	//$("#comp_list").jqGrid("setFrozenColumns"); //셀고정 적용시 헤더부분 오류 확인 필요
	
	$(window).bind('resize', function() {
		$("#comp_list").jqGrid('setGridHeight', $(".conleft.v0501top .main_chart").height()-46);
		$("#comp_list").jqGrid('setGridWidth', $(".conleft.v0501top .main_chart").width());		
		$("#garage_list").jqGrid('setGridHeight', $(".conbottom.v0501bottom .main_chart").height()-23);
		$("#garage_list").jqGrid('setGridWidth', $(".conbottom.v0501bottom .main_chart").width());		
	}).trigger('resize');

	function onSelected1(){
		var rowid = $("#comp_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#comp_list").jqGrid('getRowData', rowid);
		var compid = rowData.compid;
		loadGarageList(compid);
	};
	function onSelected2(){
		var rowid = $("#garage_list").jqGrid('getGridParam', "selrow");
		var rowData = $("#garage_list").jqGrid('getRowData', rowid);
		console.log("지도이동예정(좌표)"+rowData.posx+" / "+rowData.posy);
		opener.setCenterPosition(36.4473599,126.705304); //지도 이동(DB 좌표가 맞지 않아 확인 필요)
		//opener.setCenterPosition(rowData.posx,rowData.posy); //지도 이동(DB 좌표가 맞지 않아 확인 필요)
	};
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
		var data = $("#sel_compid option:selected").val();
		loadCompList(data);
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//파일 저장
	$("#btn_excel").click(function(){
		if( 0 < $("#comp_list").getGridParam("reccount") )
			execlDownload($(".sub_title h3").text(), "#comp_list");
		else
			showAlert("조회된 내용이 없습니다.");
	});

};

//버스회사 리로드
function loadCompList(compid){
	var param = {
			compid : compid
	};
	reloadGrid("#comp_list", "./comp/selectCompInfoList.do", param, "resultList");
};

//차고지 리로드
function loadGarageList(compid){
	var param = {
			compid : compid
	};
	reloadGrid("#garage_list", "./comp/selectGarageInfoList.do", param, "resultList");
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



