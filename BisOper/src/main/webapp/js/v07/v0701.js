$(document).ready(function() {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	ajaxCall("./comp/selectCompCateList.do",null,null,load_comp_list,null);
	ajaxCall("./stop/selectRouteListWithComp.do",null,null,load_route_list,null);
	$("#route_ver").attr("disabled","disabled");
	$("#oper_ver").attr("disabled","disabled");
	$("#GIS_ver").attr("disabled","disabled");
	$("#apply_date").val(new Date(Date.now()+86400000).toISOString().substring(0, 10));
	$("#apply_time").val(new Date().getHours());
	
	$("#btn_transmit").css({ 'pointer-events': 'none', 'background': 'none' });
});

var count = 0; 

function load_comp_list(data){
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.compnm; 
		temp.value = value.compid; 
		$("#comp_option").append(temp);
	});
}

function load_route_list(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.routeno;
		temp.value = value.routeid; 
		$("#route_option").append(temp);
	})
}

var models = [
              {label:"버스회사", 		name:"compnm", 		index:"compnm",		 	width: "70", 	align:"center", sorttype:"text"},
              {label:"노선번호", 		name:"rno", 		index:"rno",		 	width: "60", 	align:"center", sorttype:"text"},
              {label:"단말기ID", 		name:"mdtid", 		index:"mdtid",		 	width: "65", 	align:"center", sorttype:"text"},
              {label:"차량번호", 		name:"carregno", 	index:"carregno",	 	width: "85", 	align:"center", sorttype:"text"},
              {label:"노선버전", 		name:"rver", 		index:"rver",		 	width: "65", 	align:"center", sorttype:"text"},
              {label:"노선파일위치", 		name:"rloc", 		index:"rloc",		 	width: "100", 	align:"center", sorttype:"text"},
              {label:"운영버전", 		name:"over", 		index:"over",		 	width: "65", 	align:"center", sorttype:"text"},
              {label:"운영파일위치", 		name:"oloc", 		index:"oloc",		 	width: "100", 	align:"center", sorttype:"text"},
              {label:"GIS버전", 		name:"nver", 		index:"nver",		 	width: "65", 	align:"center", sorttype:"text"},
              {label:"GIS파일위치", 	name:"nloc", 		index:"nloc",		 	width: "100", 	align:"center", sorttype:"text"},
              {name:"busid",	index:"busid",		hidden:true},
              {name:"routeid",	index:"routeid",	hidden:true},
              ];

function initGrid(){
	makeMultiGrid("#top_table", models, 300, "resultList", null, onComplete, null);
	
	function onComplete(data) {
		$(".sub_title").eq(0).find("h3").remove();
		$(".sub_title").eq(0).append("<h3>무선업그레이드 차량 검색  <span>"+data.records+"<span>건</h3>");
		hideLoader(); 
	}
	
	$(window).bind('resize',function() {
		$("#top_table").jqGrid('setGridHeight', $(".main_chart").height()-75);
		$("#top_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	$("#top_table").jqGrid('setGroupHeaders', {
		useColSpanStyle: false,
		groupHeaders: [
		               {startColumnName:'compnm', numberOfColumns:4, titleText: '기본정보'},
		               {startColumnName:'rver', numberOfColumns:2 , titleText: '노선'},
		               {startColumnName:'over', numberOfColumns:2 , titleText: '운영'},
		               {startColumnName:'nver', numberOfColumns:2, titleText: 'GIS'}
		               ]
	});
	
	
	$("#top_table").jqGrid('filterToolbar',
    {
					autosearch: true,
					stringResult: true,
					searchOnEnter: true,
					defaultSearch: "cn"
    });
	setFilter("top_table", true); 
}

function initEvent(){
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#top_table").getGridParam("reccount") )
			excelDownload($(".pop_title h2").text(), "#top_table");
		else
			showAlert("조회된 내용이 없습니다.");
	}); 
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//버스회사 변경시 해당 버스회사의 노선번호로 변경.
	$("#comp_option").change(function() {
		change_route_list($("#comp_option option:selected").val());
	})
	
	//검색
	$("#btn_search").click(function(){
		var params = {
				compid:$("#comp_option").val(),
				routeid:$("#route_option").val(),
				carregno:$("#carregno").val(),
				detail:"1"
		};
		showLoader();
		reloadGrid("#top_table", "./bus/selectWirelessUpgradeBusList.do", params, "resultList");
		ajaxCall("./sys/selectUptodateVer.do",{detail:"1"},null,load_ver,null);
	});
	
	//버전 체크박스 선택시 활성화, 비활성화
	$("#route_check").change(function () {
		if($("#route_check").is(":checked")){
			$("#route_ver").attr("disabled",false);
			count++;
			check_count();
		}
		else{
			$("#route_ver").attr("disabled",true);
			count--;
			check_count();
		}
	});
	
	$("#oper_check").change(function () {
		if($("#oper_check").is(":checked")){
			$("#oper_ver").attr("disabled",false);
			count++;
			check_count();
		}
		else{ 
			$("#oper_ver").attr("disabled",true);
			count--;
			check_count();
		}
	});
	
	$("#GIS_check").change(function () {
		if($("#GIS_check").is(":checked")){
			$("#GIS_ver").attr("disabled",false);
			count++;
			check_count();
		}
		else{ 
			$("#GIS_ver").attr("disabled",true);
			count--;
			check_count();
		}
	});
	
	//전송
	$("#btn_transmit").click(function(){
		if($("#transmit_check").is(":checked")){
			var ids = $("#top_table").jqGrid('getGridParam', 'selarrrow');   
			var confirm_count=0;
			for(var i = 0; i < ids.length; i++){				
				var rowObject = $("#top_table").getRowData(ids[i]); 
				if(confirm("차량단말기["+rowObject.mdtid+"]를 버전업그레이드 하시겠습니까?")){
					confirm_count++;
					var params = {
							detail:"1",
							mdtid:rowObject.mdtid,
			        		busid:rowObject.busid,
			        		routeid:rowObject.routeid,
			        		rver:$("#route_ver").val(),
			        		over:$("#oper_ver").val(),
			        		nver:$("#GIS_ver").val(),
			        		rstartdt:$("#apply_date").val().replace(/-/g,"").substring(2)+$("#apply_time").val(),
			        		ostartdt:$("#apply_date").val().replace(/-/g,"").substring(2)+$("#apply_time").val(),
			        		nstartdt:$("#apply_date").val().replace(/-/g,"").substring(2)+$("#apply_time").val()
					};
					if(!$("#route_check").is(":checked"))
			        	params.rver = "";
			        if(!$("#oper_check").is(":checked"))
			        	params.over = "";
			        if(!$("#GIS_check").is(":checked"))
			        	params.nver = "";
			        if(params.rstartdt < 10)
			        	params.rstartdt = "0"+params.rstartdt;
			        if(params.ostartdt < 10)
			        	params.ostartdt = "0"+params.ostartdt;
			        if(params.apply_date < 10)
			        	params.apply_date = "0"+params.apply_date;
			        ajaxCall("./sys/updateUptodateVer.do",params,null,null,null);
				}
		    }
			if(confirm_count == 0)
				showAlert("차량단말기를 선택하지 않았습니다.");
			else
				showAlert("차량단말기 버전업그레이드 전송을 "+confirm_count+"건 완료하였습니다.");
		}
		else{
			var ids = $("#top_table").jqGrid('getGridParam', 'selarrrow');
			if(ids.length == 0)
				showAlert("차량단말기를 선택하지 않았습니다.");
			else{
				for(var i = 0; i < ids.length; i++){
			        var rowObject = $("#top_table").getRowData(ids[i]);      
			        var params = {
			        		detail:"1",
			        		mdtid:rowObject.mdtid,
			        		busid:rowObject.busid,
			        		routeid:rowObject.routeid,
			        		rver:$("#route_ver").val(),
			        		over:$("#oper_ver").val(),
			        		nver:$("#GIS_ver").val(),
			        		rstartdt:$("#apply_date").val().replace(/-/g,"").substring(2)+$("#apply_time").val(),
			        		ostartdt:$("#apply_date").val().replace(/-/g,"").substring(2)+$("#apply_time").val(),
			        		nstartdt:$("#apply_date").val().replace(/-/g,"").substring(2)+$("#apply_time").val()
			        };
			        if(!$("#route_check").is(":checked"))
			        	params.rver = "";
			        if(!$("#oper_check").is(":checked"))
			        	params.over = "";
			        if(!$("#GIS_check").is(":checked"))
			        	params.nver = "";
			        if(params.rstartdt < 10)
			        	params.rstartdt = "0"+params.rstartdt;
			        if(params.ostartdt < 10)
			        	params.ostartdt = "0"+params.ostartdt;
			        if(params.apply_date < 10)
			        	params.apply_date = "0"+params.apply_date;
			        ajaxCall("./sys/updateUptodateVer.do",params,null,null,null);
			    }    
				showAlert("차량단말기 버전업그레이드 전송을 "+ids.length+"건 완료하였습니다.");
			}
		}
	});
}

function change_route_list(cid) {
	$("#route_option").find("option").remove(); 
	if(cid == "") {
		$("#route_option").append("<option value=\"\">전체</option>");
		ajaxCall("./stop/selectRouteListWithComp.do",null,null,load_route_list,null);
	}
	else{
		$("#route_option").append("<option value=\"\">전체</option>");
		ajaxCall("./route/selectRouteCateList.do",{compid:cid},null,load_route_list,null);
	}
}

function load_ver(data){
	$("#route_ver").val(data.resultList[0].rver);
	$("#oper_ver").val(data.resultList[0].over);
	$("#GIS_ver").val(data.resultList[0].nver);
}

function check_count(){
	if(count == 0)
		$("#btn_transmit").css({ 'pointer-events': 'none', 'background': 'none' });
	else
		$("#btn_transmit").css({'pointer-events': 'auto', 'background':''});
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