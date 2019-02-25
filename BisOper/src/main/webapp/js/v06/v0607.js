$(document).ready(function() {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	$("#startdt").val(new Date().toISOString().substring(0, 10));
	$("#enddt").val(new Date().toISOString().substring(0, 10));
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'FAILTREATCD'}, null, load_failtreatcd_list , null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'PROCESSSTATE'}, null, load_processstate_list , null);
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'MDTERRORCD'}, null, load_mdterrorcd_list , null);
	ajaxCall("./bit/selectCarInstallLoc.do",null, null, load_carregno_list , null);
	$("#ocdt_date").val(new Date().toISOString().substring(0, 10));
	$("#ocdt_time").val("00:00:00");
	$("#dt_date").val(new Date().toISOString().substring(0, 10));
	$("#dt_time").val("00:00:00");
	$("#btn_modify").attr("class", "disabled");
	$("#btn_modify").css({ 'pointer-events': 'none' });
	$("#btn_delete").attr("class", "disabled");
	$("#btn_delete").css({ 'pointer-events': 'none' });
});

var regdt;
var temp_facilid;
var dest_mins = []; 

function load_failtreatcd_list(data){
	$.each(data.resultList, function(index, value){
		if(value.cd=='290' || value.cd=='340' || value.cd=='350' || value.cd=='370' || value.cd=='430'
			|| value.cd=='440' || value.cd=='450' || value.cd=='460' || value.cd=='480' || value.cd=='490') {	
			var temp = document.createElement('option');
			temp.innerHTML = value.cdnm; 
			temp.value = value.cd; 
			$(".failtreatcd").append(temp);
		}
	});
}

function load_processstate_list(data){
	$.each(data.resultList, function(index, value){
		if(value.cd=='3' || value.cd=='4' || value.cd=='5'){	
			var temp = document.createElement('option');
			temp.innerHTML = value.cdnm; 
			temp.value = value.cd; 
			$(".processstate").append(temp);
		}
	});
}

function load_mdterrorcd_list(data){
	$.each(data.resultList, function(index, value){
		if(value.useyn == 1){
			var temp = document.createElement('option');
			temp.innerHTML = value.cdnm; 
			temp.value = value.cd; 
			$("#mdterrorcd").append(temp);
		}
	});
}

function load_carregno_list(data){
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.installloc; 
		temp.value = value.facilid; 
		$("#facnm").append(temp);
	});
	$("#facnm_num").val($("#facnm option:selected").val());
}

var models =[
             {label:"접수번호", 	name:"ars", 		index:"ars",			width: "50", 	align:"center", sorttype:"text", type:"I"},
             {label:"운수회사", 	name:"compnm", 		index:"compnm",			width: "70", 	align:"center", sorttype:"text", type:"I"},
             {label:"노선", 		name:"routeno", 	index:"routeno",		width: "60", 	align:"center", sorttype:"text", type:"I"},
             {label:"차량번호", 	name:"facnm", 		index:"facnm",			width: "70", 	align:"center", sorttype:"text", type:"I"},
             {label:"연락처", 		name:"mobileno", 	index:"mobileno",		width: "70", 	align:"center", sorttype:"text", type:"I"},
             {label:"접수일", 		name:"ocdt", 		index:"ocdt",			width: "110", 	align:"center", sorttype:"text", type:"I"},
             {label:"처리일", 		name:"dt", 			index:"dt",				width: "70", 	align:"center", sorttype:"text", type:"I"},
             {label:"처리구분", 	name:"treat_gubun", index:"treat_gubun",	width: "70", 	align:"center", sorttype:"text", type:"I"},
             {label:"장애유형", 	name:"failcd", 		index:"failcd",			width: "70", 	align:"center", sorttype:"text", type:"I"},
             {label:"장애상세내역", 	name:"fail_detail", index:"fail_detail",	width: "70", 	align:"center", sorttype:"text", type:"I"},
             {label:"처리유형", 	name:"ascd", 		index:"ascd",			width: "110", 	align:"center", sorttype:"text", type:"I"},
             {label:"처리상세내역", 	name:"treat_detail",index:"treat_detail",	width: "90", 	align:"center", sorttype:"text", type:"I"},
             {label:"작업자", 		name:"treat_userid",index:"treat_userid",	width: "70", 	align:"center", sorttype:"text", type:"I"},
             {name:"reg_userid",	index:"reg_userid", type:"I", hidden:true},
             {name:"facilid",		index:"facilid", hidden:true},
             {name:"regdt",			index:"regdt", hidden:true}
             ];

function initGrid(){
	makeGrid("#main_table",models,300,"resultList",onSelected,onComplete,null);
	
	function onSelected(data){
		var rowData = $("#main_table").jqGrid('getRowData', data);
		$("#facnm option:selected").attr("selected",false);
		regdt="";
		temp_facilid=""; 
		if(rowData.facnm){
			$("#facnm option").each(function(){
		        if($(this).val().match(rowData.facilid)){ 
		            $(this).attr("selected","selected");
		        	$("#facnm").trigger('change');
		        	temp_facilid=rowData.facilid; 
					regdt = rowData.regdt;
		        }
		    });
		}
	
		if(rowData.ocdt){
			var date = rowData.ocdt.split(" ")[0];
			var time = rowData.ocdt.split(" ")[1];
			$("#ocdt_date").val(date);
			$("#ocdt_time").val(time);
		}
		if(rowData.failcd)
			$("#mdterrorcd option:contains('"+rowData.failcd+"')").attr("selected","selected");
		if(rowData.treat_gubun)
			$("#bottom_processstate option:contains('"+rowData.treat_gubun+"')").attr("selected","selected");
		if(rowData.ascd)
			$("#bottom_failtreatcd option:contains('"+rowData.ascd+"')").attr("selected","selected");
		
		$("#btn_modify").attr("class", "");
		$("#btn_modify").css({ 'pointer-events': 'auto' });
		$("#btn_delete").attr("class", "");
		$("#btn_delete").css({ 'pointer-events': 'auto' });
		$("#btn_new").attr("class", "disabled"); 
		$("#btn_new").css({ 'pointer-events': 'none' });
	}
	
	function onComplete(data){
		$(".sub_title").eq(0).find("h3").remove();
		$(".sub_title").eq(0).append("<h3>BMT A/S 이력검색 <span>"+data.records+"<span>건</h3>");
		$("#main_table").jqGrid("setSelection",1);
		hideLoader(); 
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height()-23);
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
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
		var params={
				failtreatcd:$("#top_failtreatcd").val(),
				treat_gubun:$("#top_processstate").val(),
				startdt:$("#startdt").val().replace(/-/g,"").substr(2),
				enddt:$("#enddt").val().replace(/-/g,"").substr(2)
			};	
		    showLoader(); 
			reloadGrid("#main_table","./bit/selectBitAsBMTList.do",params,"resultList");
	});
	
	//차량 선택시 차량번호 바꾸기
	$("#facnm").change(function(){
		$("#facnm_num").val($("#facnm option:selected").val());
	});
	
	//초기화
	$("#btn_reset").click(function() {
		$("#ocdt_date").val(new Date().toISOString().substring(0, 10));
		$("#dt_date").val(new Date().toISOString().substring(0, 10));
		$("#ocdt_time").val("00:00:00");
		$("#dt_time").val("00:00:00");
		$("#input_reg_userid").val("");
		$("#input_mobileno").val("");
		$("#input_fail_detail").val("");
		$("#input_treat_userid").val("");
		$("#input_treat_detail").val("");
		
		$("#btn_modify").attr("class", "disabled");
		$("#btn_modify").css({ 'pointer-events': 'none' });
		$("#btn_delete").attr("class", "disabled");
		$("#btn_delete").css({ 'pointer-events': 'none' });
		$("#btn_new").attr("class", ""); 
		$("#btn_new").css({ 'pointer-events': 'auto' });
		$("#main_table").jqGrid("resetSelection");
		
		regdt ="";
		temp_facilid ="";
	});
	
	//신규등록
	$("#btn_new").click(function(){
		showConfirmDlg("BMT 장애를 등록 하시겠습니까?", new_confirm);
		function new_confirm() {
			var params={
				facilid:$("#facnm_num").val(),
				faciltpcd:10,
				fail_occurdt:$("#ocdt_date").val()+" "+$("#ocdt_time").val(),				
				failtpcd:$("#mdterrorcd").val(),				
				fail_detail:$("#input_fail_detail").val(),
				reg_userid:$("#input_reg_userid").val(),
				mobileno:$("#input_mobileno").val(),
				fail_treatdt2:$("#dt_date").val()+" "+$("#dt_time").val(),
				failtreatcd:$("#bottom_failtreatcd").val(),
				treat_detail:$("#input_treat_detail").val(),
				treat_userid:$("#input_treat_userid").val(),
				treat_gubun:$("#bottom_processstate").val()
			};
			if(!params.reg_userid)
				params.reg_userid = "bmscenter";
			ajaxCall("./bit/insertBitFail.do",params,null,check_new,null)
		}
	});
	
	//수정
	$("#btn_modify").click(function(){
		showConfirmDlg("BMT 장애 처리를 수정 하시겠습니까?", modify_confirm);
		function modify_confirm() {
			var params={
				facilid:temp_facilid,
				regdt:regdt,
				
				mobileno:$("#input_mobileno").val(),
				fail_occurdt:$("#ocdt_date").val().replace(/-/g,"").substr(2)+$("#ocdt_time").val().replace(/:/g,""),
				failtpcd:$("#mdterrorcd").val(),
				fail_detail:$("#input_fail_detail").val(),
				fail_treatdt:$("#dt_date").val().replace(/-/g,"")+$("#dt_time").val().replace(/:/g,""),
				failtreatcd:$("#bottom_failtreatcd").val(),
				treat_detail:$("#input_treat_detail").val(),
				treat_userid:$("#input_treat_userid").val(),
				treat_gubun:$("#bottom_processstate").val()
			}
			ajaxCall("./bit/updateBitAs.do",params,null,check_modify,null)
		}
	});
	
	//삭제
	$("#btn_delete").click(function(){
		showConfirmDlg("BMT A/S 정보를 삭제 하시겠습니까?", delete_confirm);
		function delete_confirm() {
			var params={
				facilid:temp_facilid,
				fail_occurdt:$("#ocdt_date").val()+" "+$("#ocdt_time").val()
			}
			alert(params.facilid+" "+params.fail_occurdt);
			ajaxCall("./bit/deleteBitAs.do",params,null,check_delete,null)
		}
	});
	
	//SMS전송
	$("#btn_sms").click(function(){
		if($("#dest_mins").val() == ""){
			showAlert("SMS 수신 전화번호를 추가하세요.");
			return ;
		}
		if($("#sms_msg").val() == ""){
			showAlert("SMS 내용을 입력하세요. ");
			return ;
		}
		showConfirmDlg("SMS 메세지를 전송하시겠습니까?", sms_confirm);
		function sms_confirm(){
			for(var i=0;i<dest_mins.length;i++){
				var date = new Date(); 
				var params={
						dest_min:dest_mins[i],
						call_back:$("#call_back").val(),
						sms_msg:$("#sms_msg").val(),
						regdt:date.toISOString().substring(2,10).replace(/-/g,"")
						+date.getHours()+date.getMinutes()+date.getSeconds() 
				};
				ajaxCall("./bit/insertSMSready.do",params,null,null,null);
				if(i == dest_mins.length-1){
					$("#btn_clear").trigger('click');
					showAlert("SMS 전송 되었습니다.")
				}
			}
		}
	});
	
	//추가 버튼
	$("#btn_add").click(function(){
		if($("#dest_mins").val() == ""){
			$("#dest_mins").val($("#dest_min").val());
			dest_mins.push($("#dest_min").val());
		}
		else{
			$("#dest_mins").val($("#dest_mins").val() +'\n'+$("#dest_min").val());
			dest_mins.push($("#dest_min").val());
		}		
		$("#dest_min").val("");
	});
	
	//Clear 버튼
	$("#btn_clear").click(function(){
		dest_mins = [];
		$("#dest_min").val("");
		$("#dest_mins").val("");
		$("#sms_msg").val("");
	});
}

function check_new(data){
	if(data.result_code==1)
   		showAlert("등록되었습니다.");
	else
		showAlert("등록실패하였습니다.");
	$("#btn_search").trigger("click");
}

function check_modify(data){
	if(data.result==1)
   		showAlert("수정 되었습니다.");
	else
		showAlert("수정에 실패하였습니다.");
	$("#btn_search").trigger("click");
}

function check_delete(data){
	if(data.result_code==1)
   		showAlert("삭제 되었습니다.");
	else
		showAlert("삭제에 실패하였습니다.");
	$("#btn_search").trigger("click");
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