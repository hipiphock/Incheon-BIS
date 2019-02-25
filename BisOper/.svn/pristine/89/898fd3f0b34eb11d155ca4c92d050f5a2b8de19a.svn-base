$(document).ready(function(){
	initGrid();
	initEvent();
});

var model_1 = [
	{label:"일자"},
	{label:"WEB서비스"},
	{label:"ARS서비스"},
	{label:"SMS서비스"},
	{label:"휴대폰서비스"},
	{label:"PDA서비스"}
];

var model_2 = [
	{label:"메뉴ID"},
	{label:"메뉴명"},
	{label:"이용건수"}
]

var model_3 = [
	{label:"메뉴ID"},
	{label:"메뉴명"},
	{label:"이용건수"}
]

var model_4 = [
	{label:"PUSH 서비스"},
	{label:"일반서비스"}
]

function initGrid(){
	makeGrid("#main_table", model_1, 800, null, null, null, null);
	makeGrid("#web_table", model_2, 400, null, null, null, null);
	makeGrid("#ARS_table", model_3, 300, null, null, null, null);
	makeGrid("#MS_table", model_4, 300, null, null, null, null);
	$(window).bind('resize', function() {
		$("#main_table").jqGrid('setGridHeight', $("#chart_chart").height() - 23);
		$("#main_table").jqGrid('setGridWidth', $("#chart_chart").width());
		$("#web_table").jqGrid('setGridHeight', $("#web_chart").height() - 23);
		$("#web_table").jqGrid('setGridWidth', $("#web_chart").width());
		$("#ARS_table").jqGrid('setGridHeight', $("#ARS_chart").height() - 23);
		$("#ARS_table").jqGrid('setGridWidth', $("#ARS_chart").width());
		$("#MS_table").jqGrid('setGridHeight', $("#MS_chart").height() - 23);
		$("#MS_table").jqGrid('setGridWidth', $("#MS_chart").width());
	}).trigger('resize');
}

function initEvent(){
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	// 검색
	$("#btn_search").click(function(){
		
	});
}