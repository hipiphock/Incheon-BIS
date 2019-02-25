$(document).ready(function() {
	appendLoader("조회중..");
	initGrid();
	initEvent();
	ajaxCall("./sys/selectCodeList.do",{cdcategid:'MDTCOMP'}, null, load_mdtcomp_list , null);
	ajaxCall("./comp/selectCompCateList.do",null,null,load_comp_list,null);
	ajaxCall("./stop/selectRouteListWithComp.do",null,null,load_route_list,null);
	ajaxCall("./sys/selectUptodateVer.do",null,null,load_ver,null);
});

var compnm = "";
var mdtid = "";

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

function load_mdtcomp_list(data){
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm; 
		temp.value = value.cd; 
		$("#mdtcomp").append(temp);
	});
}

function load_ver(data){
	$("#ver").attr({"max":data.resultList[0].rver});
}

var models = [
              {label:"버스회사", 				name:"compnm", 			index:"compnm",		 	width: "70", 	align:"center", sorttype:"text"},
              {label:"노선번호", 				name:"routeno", 		index:"routeno",		width: "60", 	align:"center", sorttype:"text"},
              {label:"차량번호", 				name:"carregno", 		index:"carregno",	 	width: "85", 	align:"center", sorttype:"text"},
              {label:"단말기ID", 				name:"mdtid", 			index:"mdtid",		 	width: "65", 	align:"center", sorttype:"text"},
              {label:"설정시간 <br>업그레이드시각", 	name:"dt1", 			index:"dt1",		 	width: "150", 	align:"center", sorttype:"text"},           
              {label:"커널", 					name:"kernel_ver", 		index:"kernel_ver",	 	width: "85", 	align:"center", sorttype:"text"},
              {label:"모뎀F/W", 				name:"modem_fw_ver", 	index:"modem_fw_ver",	width: "85", 	align:"center", sorttype:"text"},
              {label:"운행노선", 				name:"rver", 			index:"rver",	 		width: "85", 	align:"center", sorttype:"text", classes:"color"},
              {label:"운행프로그램", 				name:"over", 			index:"over",	 		width: "85", 	align:"center", sorttype:"text", classes:"color"},
              {label:"GIS LINK", 			name:"lver", 			index:"lver",	 		width: "85", 	align:"center", sorttype:"text", classes:"color"},
              {label:"GIS NODE", 			name:"nver",		 	index:"nver",	 		width: "85", 	align:"center", sorttype:"text", classes:"color"},
              {label:"GIS 정류소", 			name:"sver", 			index:"sver",	 		width: "85", 	align:"center", sorttype:"text", classes:"color"},
              ];

var models2 = [
               {label:"단말기ID", 			name:"mdtid", 		index:"mdtid",		 	width: "65", 	align:"center", sorttype:"text"},
               {label:"차량번호", 			name:"carregno", 	index:"carregno",	 	width: "85", 	align:"center", sorttype:"text"},
               {label:"버스회사", 			name:"compnm", 		index:"compnm",		 	width: "70", 	align:"center", sorttype:"text"},
               {label:"업데이트발생일시", 		name:"upddt", 		index:"upddt",	 	width: "85", 	align:"center", sorttype:"text"},
               {label:"운영유형", 			name:"updopercd", 	index:"updopercd",	 	width: "85", 	align:"center", sorttype:"text"},
               {label:"방식", 			name:"updmtcd", 	index:"updmtcd",	 	width: "85", 	align:"center", sorttype:"text"},
               {label:"노선 Ver", 			name:"rver", 		index:"rver",	 	width: "85", 	align:"center", sorttype:"text"},
               {label:"운영 Ver", 			name:"over", 		index:"over",	 	width: "85", 	align:"center", sorttype:"text"},
               {label:"GIS LINK Ver", 	name:"lver", 		index:"lver",	 	width: "85", 	align:"center", sorttype:"text"},            
               {label:"GIS NODE Ver", 	name:"nver", 		index:"nver",	 	width: "85", 	align:"center", sorttype:"text"},
               {label:"GIS 정류소 Ver", 	name:"sver", 		index:"sver",	 	width: "85", 	align:"center", sorttype:"text"},              
               ];

function initGrid(){
	makeGrid("#top_table", models, 300, "resultList", null, onComplete, dbClick);
	makeGrid("#bottom_table", models2, 300, "resultList", null, onComplete2, null);
	
	function onComplete(data){
		var rcount, ocount, lcount, ncount, scount;
		rcount = ocount = lcount = ncount = scount = 0; 
		for(var i=1; i<=data.records; i++){
			var rowData = $("#top_table").getRowData(i);
			if(rowData.rver.substr(0,10) == rowData.rver.substr(11,10)){
				rowData.rver = "완료"+rowData.rver.substr(10);
				rcount++; 
				$("#top_table").setCell(i,"rver","",{'background-color':'#ffffff'})
			}
			if(rowData.over.substr(0,10) == rowData.over.substr(11,10)){
				rowData.over = "완료"+rowData.over.substr(10);
				ocount++;
				$("#top_table").setCell(i,"over","",{'background-color':'#ffffff'})
			}
			if(rowData.lver.substr(0,10) == rowData.lver.substr(11,10)){
				rowData.lver = "완료"+rowData.lver.substr(10);
				lcount++;
				$("#top_table").setCell(i,"lver","",{'background-color':'#ffffff'})
			}
			if(rowData.nver.substr(0,10) == rowData.nver.substr(11,10)){
				rowData.nver = "완료"+rowData.nver.substr(10);
				ncount++;
				$("#top_table").setCell(i,"nver","",{'background-color':'#ffffff'})
			}
			if(rowData.sver.substr(0,10) == rowData.sver.substr(11,10)){
				rowData.sver = "완료"+rowData.sver.substr(10);
				scount++;
				$("#top_table").setCell(i,"sver","",{'background-color':'#ffffff'})
			}
			$("#top_table").jqGrid('setRowData',i,rowData);
		}		
		
		
		if(data.records != 0){
			$(".sub_title").eq(0).find("h3").remove();
			$(".sub_title").eq(0).append("<h3>무선업그레이드 차량 검색 총 <span>"+data.records+"<span>건 중 운행노선 실패(" 
					+ (data.records-rcount)+"건)/ 운행프로그램 실패("+(data.records-ocount)+"건)/ GIS LINK 실패("
					+ (data.records-lcount)+"건)/ GIS NODE 실패("+(data.records-ncount)+"건)/ GIS 정류소 실패("
					+ (data.records-scount)+"건)</h3>");
		}
		hideLoader(); 
	}
	
	function dbClick(data) {
		var rowData = $("#top_table").jqGrid('getRowData',data);
		compnm = rowData.compnm;
		mdtid = rowData.mdtid;
		showLoader(); 
		reloadGrid("#bottom_table", "./bus/selectMdtUpgrade.do",{mdtid:rowData.mdtid}, "resultList");
	}
	
	function onComplete2(data){
		$(".sub_title").eq(1).find("h3").remove();
		if(compnm != "")
			$(".sub_title").eq(1).append("<h3>"+compnm+" ("+mdtid+"번 단말기 )"+"업그레이드 이력 검색  <span>"+data.records+"<span>건</h3>");
		else
			$(".sub_title").eq(1).append("<h3>업그레이드 이력 검색  <span>"+data.records+"<span>건</h3>");
	}
	
	$(window).bind('resize',function() {
		$("#top_table").jqGrid('setGridHeight', $(".main_chart").height()-60);
		$("#top_table").jqGrid('setGridWidth', $(".main_chart").width());
		$("#bottom_table").jqGrid('setGridHeight', $(".main_chart").eq(1).height()-38);
		$("#bottom_table").jqGrid('setGridWidth', $(".main_chart").eq(1).width());
	}).trigger('resize');
	
	$("#top_table").jqGrid('setGroupHeaders', {
		useColSpanStyle: false,
		groupHeaders: [
		               {startColumnName:'compnm', numberOfColumns:5, titleText: '기본정보'},
		               {startColumnName:'kernel_ver', numberOfColumns:2 , titleText: '버전'},
		               {startColumnName:'rver', numberOfColumns:5 , titleText: 'Version 비교'},		               
		               ]
	});
}

function initEvent(){
	//파일저장
	$("#btn_excel").click(function () {
		if( 0 < $("#top_table").getGridParam("reccount") )
			excelDownload("단말기 업그레이드 현황", "#top_table");
		else
			showAlert("조회된 차량이 없습니다.");
		
		if( 0 < $("#bottom_table").getGridParam("reccount") )
			excelDownload("단말기 업그레이드 이력", "#bottom_table");
		else
			showAlert("조회된 이력이 없습니다.");
	}); 
	
	//새로고침
	$("#btn_refresh").click(function () {
		location.reload();
	});
	
	//버스회사 변경시 버스노선 변경
	$("#comp_option").change(function(){
		cid = $("#comp_option option:selected").val(); 
		$("#route_option").find("option").remove(); 
		if(cid == "") {
			$("#route_option").append("<option value=\"\">전체</option>");
			ajaxCall("./stop/selectRouteListWithComp.do",null,null,load_route_list,null);
		}
		else{
			$("#route_option").append("<option value=\"\">전체</option>");
			ajaxCall("./stop/selectRouteListWithComp.do",{compid:cid},null,load_route_list,null);
		}
	});
	
	//검색
	$("#btn_search").click(function(){
		$(".sub_title").eq(1).find("h3").remove();
		$(".sub_title").eq(1).append("<h3>업그레이드 이력 검색 </h3>");
		$("#bottom_table").jqGrid('clearGridData');
		var params = {
				compid:$("#comp_option").val(),
				routeid:$("#route_option").val(),
				carregno:$("#carregno").val(),
				detail:$("#mdtcomp").val(),
				ver:$("#ver").val(),
				searchWord:$("#file option:selected").val()
		};
		
		if($("input:radio[name=ver_select]:checked").val()==2)
			params.searchWord += 0; 
		
		if(params.ver == 0)
			params.searchWord = "";
		showLoader();
		reloadGrid("#top_table", "./bus/selectWirelessUpgrade.do", params, "resultList");
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