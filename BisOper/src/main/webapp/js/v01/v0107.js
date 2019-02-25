$(document).ready(function(){
	appendLoader("로딩중...");
	initManager();
	initGrid();
	initEvent();
});

var model = [
	{label:"발생일시",		name:"occurdt",		index:"occurdt",		width:"130",	align:"center",	sorttype:"text",	type:"I"},
	{label:"이력번호",		name:"histno",		index:"histno",			width:"50",		align:"right",	sorttype:"text"},
	{label:"돌발ID",		name:"incidid",		index:"incidid",		width:"100",	align:"center",	sorttype:"text",	type:"I"},
	{label:"등록순번",		name:"upd_regseq",	index:"upd_regseq",		width:"50",		align:"right",	sorttype:"text"},	
	{label:"돌발유형",		name:"incidtype",	index:"incidtype",		width:"60",		align:"center",	sorttype:"text"},
	{label:"수집유형",		name:"incidsrc",	index:"incidsrc",		width:"80",		align:"center",	sorttype:"text"},
	{label:"돌발대응유형",	name:"incidresptype",index:"incidresptype",	width:"100",	align:"center",	sorttype:"text"},
	{label:"정보제공",		name:"infooffer",	index:"infooffer",		width:"50",		align:"center",	sorttype:"text"},
	{label:"돌발상세내역",	name:"incid_detail",index:"incid_detail",	width:"200",	align:"left",	sorttype:"text",	type:"I"},
	{label:"차량번호",		name:"carno",		index:"carno",			width:"100",	align:"left",	sorttype:"text",	type:"I"},
	{label:"발생링크",		name:"linknm",		index:"linknm",			width:"200",	align:"left",	sorttype:"text"},
	{label:"수집일시",		name:"colldt",		index:"colldt",			width:"130",	align:"center",	sorttype:"text"},
	{label:"종료일시",		name:"enddt",		index:"enddt",			width:"130",	align:"center",	sorttype:"text"},
	{label:"비고",		name:"descr",		index:"descr",			width:"130",	align:"left",	sorttype:"text",	type:"I"},
	
	{name:"busid",			index:"busid",			type:"I",	hidden:true},
	{name:"mdtid",			index:"mdtid",			type:"I",	hidden:true},
	{name:"incidtpcd",		index:"incidtpcd",		type:"I",	hidden:true},
	{name:"incidsrccd",		index:"incidsrccd",		type:"I",	hidden:true},
	{name:"incidresptpcd",	index:"incidresptpcd",	type:"I",	hidden:true},
	{name:"routeno",		index:"routeno",		type:"I",	hidden:true},
	{name:"routeid",		index:"routeid",		type:"I",	hidden:true},
	{name:"linkid",			index:"linkid",			type:"I",	hidden:true},
	{name:"infoofferyn",	index:"infoofferyn",	type:"I",	hidden:true},
	{name:"incid_occurdt",	index:"incid_occurdt",	type:"I",	hidden:true},
	{name:"incid_colldt",	index:"incid_colldt",	type:"I",	hidden:true},
	{name:"incid_enddt",	index:"incid_enddt",	type:"I",	hidden:true}
];

function initManager(){
	$("#input_incidid").val("");
	$("#select_incidtype").val(21);
	$("#select_incidresptype").val("");
	$("#select_infooffer").val(0);
	$("#input_mdtid").val("");
	$("#input_carno").val("");
	$("#input_linkid1").val("");
	$("#select_incidsrc").val(5);
	$("#input_occurdt").val("19-01-31 17:16:57");
	$("#input_incid_detail").val("");
	$("#input_routeno1").val("");
	$("#input_descr").val("");
}

/**
 * Global Variable
 */
var workingIndex;


function getRowData(rowid){
	workingIndex = rowid;
	var selected_row = $("#search_result").jqGrid("getRowData", rowid);
	console.log(selected_row);
	$("#input_incidid").val(selected_row.incidid);
	$("#select_incidtype").val(selected_row.incidtpcd);
	$("#select_incidresptype").val(selected_row.incidresptpcd);
	$("#select_infooffer").val(selected_row.infoofferyn);
	$("#input_mdtid").val(selected_row.mdtid);
	$("#input_carno").val(selected_row.carno);
	$("#input_linkid1").val(selected_row.linkid);
	$("#select_incidsrc").val(selected_row.incidsrccd);
	$("#input_occurdt").val(selected_row.occurdt);
	$("#input_incid_detail").val(selected_row.incid_detail);
	$("#input_routeno1").val(selected_row.routeno);
	$("#input_descr").val(selected_row.descr);
}

function initGrid(){
	makeGrid("#search_result", model, 600, "resultList", getRowData, null, null);
	$(window).bind("resize", function(){
		$("#search_result").jqGrid("setGridHeight", $(".main_chart").height() - 23);
		$("#search_result").jqGrid("setGridWidth", $(".main_chart").width());
	}).trigger("resize");
	loadGrid();
}

function loadGrid(){
	showLoader();
	var param = {
		incidtpcd:$("#incidType").val()
	};
	reloadGrid("#search_result", "./usm/selectRespHistList.do", param, "resultList");
}

function initEvent(){
	
	// 검색
	$("#btn_search").click(function(){
		loadGrid();
	});
	
	// 초기화
	$("#btn_reset").click(function(){
		if(workingIndex == 0)	initManager();
		else	getRowData(workingIndex);
	});
	
	// 신규등록
	$("#btn_new").click(function(){
		showConfirmDlg("신규등록하시겠습니까?", insertNewReaction);
	});
	
	function insertNewReaction(){
		var busno = $("#input_carno").val();
		var param = {
			
			incidid	:	$("#input_incidid").val(),
			
			busid	:	busno.substring(busno.length - 4, busno.length),
			mdtid	:	$("#input_mdtid").val(),
			routeno	:	$("#input_routeno1").val(),
			occur_linkid	:	$("#input_mdtid").val(),
			incidtpcd		:	$("#select_incidtype option:selected").val(),
			incidsrccd		:	$("#select_incidsrc option:selected").val(),
			incidresptpcd	:	$("#select_incidresptype option:selected").val(),
			
			infoofferyn		:	$("#select_infooffer option:selected").val(),
			incid_occurdt	:	$("#input_occurdt").val(),
			incid_detail	:	$("#input_incid_detail").val(),
			descr	:	$("#input_descr").val()
		}
		console.log(param);
		ajaxCall("./usm/insertReaction.do", param, null, insertSuccess, null);
		function insertSuccess(data){
			if(data.result == 1) showAlert("정상적으로 추가되었습니다!");
			else showAlert("Error: 추가에 실패했습니다.");
			loadGrid();
		}
	}
}