

$(document).ready(function(){
	initialize();
	createGrid();
});


function initialize() {
	
	initCalendar("st_date", YEAR_FORMAT1, false);
	initCalendar("ed_date", YEAR_FORMAT1, true);
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일 전
	
	setCalendar("st_date", YEAR_FORMAT1, prev);
	
	$("#btn_search").click(function() {
		if(checkTermEffective($("#st_date"), $("#ed_date"))) {
			reloadGrid("#sys_contact_list", "./sys/selectLoginHisList.do", getInquiryParam(), "resultList");
		}else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	$("#btn_excel").click(function() {
		execlDownload();
	})
}

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./sys/downloadLoginHisExcel.do";
	form.method = "POST";
	
	var	para1 = document.createElement('INPUT');     
	var rowData = $("#sys_contact_list").jqGrid("getRowData");
	var value = JSON.stringify(rowData);
	
	para1.type  = 'HIDDEN';
	para1.name  = 'json';
	para1.value = value;

	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}

var models1 = [
      		{onlyView: true,
       		 label:'이력 번호',	    name:'histno', 			index:'histno',  		width: '164',  sorttype:'number',	align:'center'},
       		{label:'사용자 ID',   	name:'userid',      	index:'userid',      	width: '150',  sorttype:'text',	    align:'left'},
       		{label:'사용자 명',   	name:'usernm',    		index:'usernm',    		width: '150',  sorttype:'text',	    align:'left'},
       		{label:'등급',     	name:'authnm',    		index:'authnm',    	 	width: '150',  sorttype:'text',	    align:'center'},
       		{label:'접속시간',	    name:'login_startdt',   index:'login_startdt',  width: '240',  sorttype:'text',	    align:'center'},
       		{label:'종료시간',	    name:'login_enddt',		index:'login_enddt', 	width: '240',  sorttype:'text',	    align:'center'},
       		{label:'호스트 IP',	    name:'ipaddr',      	index:'ipaddr',       	width: '200',  sorttype:'text',   	align:'center'}
     	];

function createGrid() {
	makeGrid("#sys_contact_list", models1, 110, "resultList", null, onCompleted1, null);

	function onCompleted1(data) {
		$("#txt_count").text(data.rows.length+"건");
	}
	
	$(window).bind('resize', function() {
		$("#sys_contact_list").jqGrid('setGridHeight',$(".subcon_con3").height() - 23);
		$("#sys_contact_list").jqGrid('setGridWidth',$(".subcon_con3").width());
	}).trigger('resize');
	
	var params = getInquiryParam();
	reloadGrid("#sys_contact_list", "./sys/selectLoginHisList.do", getInquiryParam(), "resultList");
}

function getInquiryParam() {
	var params = {
			login_startdt : $("#st_date").val().replace(/-/g,""),
			login_enddt : $("#ed_date").val().replace(/-/g,""),
			userid : $("#input_user_id").val(),
			ipaddr : $("#input_host_ip").val(),
	}
	return params;
}

