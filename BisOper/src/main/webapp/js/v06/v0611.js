$(document).ready(function() {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'BITTPCD'}, null, load_bittpcd_list , null);
	$("#startdt").val(new Date().toISOString().substring(0, 10));
	$("#enddt").val(new Date().toISOString().substring(0, 10));
	reloadGrid("#main_table","./bit/selectStopTerminal.do",null,"resultList");
});

function load_bittpcd_list(data){
	$.each(data.resultList, function(index, value){	
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm; 
		temp.value = value.cd; 
		$("#bittpcd").append(temp);
	});	
}

var models = [
              {label:"안내기ID", 	name:"bitid", 	index:"bitid",		width: "70", 	align:"center", sorttype:"text"},
              {label:"소속정류장명", 	name:"bstopnm", index:"bstopnm",	width: "100", 	align:"center", sorttype:"text"},
              {label:"안내기유형", 	name:"bittype", index:"bittype",	width: "130", 	align:"center", sorttype:"text"},
              {label:"유지보수기관", 	name:"ascomp", 	index:"ascomp",		width: "100", 	align:"center", sorttype:"text"},
              {label:"행정구역", 	name:"admin", 	index:"admin",		width: "60", 	align:"center", sorttype:"text"},
              {label:"주소", 		name:"address", index:"address",	width: "300", 	align:"center", sorttype:"text"},
              {name:"ascompid",	index:"ascompid",	hidden:true}
              ];

var models2 = [
              {label:"업체명", 	name:"orgnm", 		index:"orgnm",	width: "100", 	align:"center", sorttype:"text"},
              {label:"주소", 		name:"addr", 		index:"addr",	width: "100", 	align:"center", sorttype:"text"},
              {label:"전화번호", 	name:"telno", 		index:"telno",	width: "100", 	align:"center", sorttype:"text"},
              {label:"FAX", 	name:"faxno", 		index:"faxno",	width: "100", 	align:"center", sorttype:"text"},
              {label:"담당자", 	name:"responernm", 	index:"responernm",	width: "100", 	align:"center", sorttype:"text"},
              {label:"담당자연락처", 	name:"mobileno", 	index:"mobileno",	width: "100", 	align:"center", sorttype:"text"},
              {label:"E-Mail", 	name:"emailaddr",	index:"emailaddr",	width: "150", 	align:"center", sorttype:"text"},
              ];

var models3 = [
              {label:"안내기ID", 	name:"bitid", 		index:"bitid",	width: "100", 	align:"center", sorttype:"text"},
              {label:"접속시작시간", 	name:"issuedt", 	index:"issuedt",	width: "150", 	align:"center", sorttype:"text"},
              {label:"비고",	 	name:"description", index:"description",	width: "100", 	align:"center", sorttype:"text"},    
              ];

function initGrid(){
	makeGrid("#main_table",models,300,"resultList",onSelected,onComplete,null);
	makeGrid("#bottom_table",models2,300,"resultList",null,null,null);
	makeGrid("#right_table",models3,300,"resultList",null,null,null);
	
	function onSelected(data){
		var rowData = $("#main_table").jqGrid('getRowData', data);
		var params = {
				startdt:$("#startdt").val().replace(/-/g,"")+"000000",
				enddt:$("#enddt").val().replace(/-/g,"")+"235959",
				bitid:rowData.bitid
		};
		if($("#radio_incheon").is(":checked"))
			reloadGrid("#right_table","./bit/selectColHistory.do",params,"resultList");
		else if($("#radio_w").is(":checked")){
			alert("광역 충격이력 미구현!");
		}
		reloadGrid("#bottom_table","./sys/selectRelatorgInfo.do",{relatorgid:rowData.ascompid},"resultList");
	}
		
	function onComplete(data){
		$(".sub_title").eq(0).find("h3").remove();
		$(".sub_title").eq(0).append("<h3>정류소안내기 <span>"+data.records+"<span>건</h3>");
		$("#main_table").jqGrid("setSelection",1);
		hideLoader(); 
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height());
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
		$("#right_table").jqGrid('setGridHeight', $(".main_chart3").height()+90);
		$("#right_table").jqGrid('setGridWidth', $(".main_chart3").width());
		$("#bottom_table").jqGrid('setGridHeight', $(".main_chart2").height()-23);
		$("#bottom_table").jqGrid('setGridWidth', $(".main_chart2").width());
	}).trigger('resize');
	
	$("#main_table").jqGrid('filterToolbar',
    {
					autosearch: true,
					stringResult: true,
					searchOnEnter: true,
					defaultSearch: "cn"
    });
	
	$("#right_table").jqGrid('filterToolbar',
    {
					autosearch: true,
					stringResult: true,
					searchOnEnter: true,
					defaultSearch: "cn"
    });
	
	setFilter("main_table",true);
	setFilter("right_table",true);
}

function initEvent(){
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#main_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#main_table");
		else
			showAlert("조회된 내용이 없습니다.");
	}); 
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//검색
	$("#btn_search").click(function(){
		var params = {
				bitid:$("#bitid").val(),
				detail:$("#detail").val(),
				bittpcd:$("#bittpcd").val()
		};
		showLoader(); 
		if($("#radio_incheon").is(":checked"))
			reloadGrid("#main_table","./bit/selectStopTerminal.do",params,"resultList");
		else if($("#radio_w").is(":checked")){
			reloadGrid("#main_table","./bit/selectWStopTerminal.do",params,"resultList");
		}
	});
}

function excelDownload(title, grid_id) {
	$("#excelDown").remove();
	var grid = $(grid_id);
	var form = document.createElement("FORM");
	form.setAttribute("id", "excelDown");
	form.action = "./stop/downloadExcelFile.do";
	form.method = "POST"; 
	
	var fileName = JSON.stringify(title);
	var param = document.createElement('INPUT');
	var rowData = grid.jqGrid("getRowData");
	var columnData = JSON.stringify(rowData);
	
	var columnLabel = JSON.stringify(grid.jqGrid('getGridParam','colNames'));
	
	var idData = grid.jqGrid('getGridParam', 'colModel');
	var columnName = []; 
	$.each(idData, function (index,value){
		columnName.push(value.name);
	})
	columnName = JSON.stringify(columnName);
	
	param.type = 'HIDDEN'; 
	param.name = 'json';
	param.value = fileName + columnLabel + columnName + columnData; 
	
	form.appendChild(param);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true); 
}