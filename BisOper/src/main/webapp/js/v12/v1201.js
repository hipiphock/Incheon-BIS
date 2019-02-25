
//좌측상단 장애요약
var model1 = [
	   			{label:"장애목록",				name:"failtpnm",     			index:"failtpnm",  			width: "160", 	align:"center"},
	   			{label:"장애건수",				name:"fail_cnt",     			index:"fail_cnt",  		width: "100", 	align:"center"},
	   			{label:"조치건수",				name:"treat_cnt",     			index:"treat_cnt",  			width: "100", 	align:"center"},
	   			{name:"failtpcd",     		index:"failtpcd",  				hidden:true}
	   		];

//장애현황 - 차량단말기
var model2 = [
	   			{label:"차량회사",				name:"compnm",     			index:"compnm",  			width: "110", 	align:"center"},
	   			{label:"시설물ID",				name:"facilid",     		index:"facilid",  			width: "80", 	align:"center"},
	   			{label:"차량번호",				name:"carregno",     		index:"carregno",  			width: "100", 	align:"center"},
	   			{label:"모뎀번호",				name:"modem_serialno",     	index:"modem_serialno",  	width: "100", 	align:"center"},
	   			{label:"등록일시",				name:"regdt",     			index:"regdt",  			width: "120", 	align:"center"},
	   			{label:"발생일시",				name:"fail_occurdt",     	index:"fail_occurdt",  		width: "120", 	align:"center"},
	   			{label:"장애유형",				name:"failtpcd",     		index:"failtpcd",  			width: "80", 	align:"center"},
	   			{label:"장애상세설명",			name:"fail_detail",     	index:"fail_detail",  		width: "180", 	align:"center"},
	   			{label:"조치일시",				name:"fail_treatdt",     	index:"fail_treatdt",  		width: "120", 	align:"center"},
	   			{label:"조치유형",				name:"failtreatcd",     	index:"failtreatcd",  		width: "80", 	align:"center"},
	   			{label:"조치상세설명",			name:"treat_detail",     	index:"treat_detail",  		width: "300", 	align:"center"}
	   		];


//장애현황 - 정류소안내기,무선AP
var model3 = [
	   			{label:"시설물ID",				name:"facilid",     		index:"facilid",  			width: "100", 	align:"center"},
	   			{label:"시설물명",				name:"cnm",     			index:"cnm",  				width: "80", 	align:"center"},
	   			{label:"시설물타입",				name:"type",     			index:"type",  				width: "130", 	align:"center"},
	   			{label:"등록일시",				name:"regdt",     			index:"regdt",  			width: "130", 	align:"center"},
	   			{label:"발생일시",				name:"fail_occurdt",     	index:"fail_occurdt",  		width: "130", 	align:"center"},
	   			{label:"장애유형",				name:"failtpcd",     		index:"failtpcd",  			width: "80", 	align:"center"},
	   			{label:"장애상세설명",			name:"fail_detail",     	index:"fail_detail",  		width: "220", 	align:"center"},
	   			{label:"조치일시",				name:"fail_treatdt",     	index:"fail_treatdt",  		width: "130", 	align:"center"},
	   			{label:"조치유형",				name:"failtreatcd",     	index:"failtreatcd",  		width: "80", 	align:"center"},
	   			{label:"조치상세설명",			name:"treat_detail",     	index:"treat_detail",  		width: "300", 	align:"center"}
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	initPicker();
	setCategory();
});


function initPicker(){
	initCalendar("inp_search_startdt", YEAR_FORMAT1, false);
	initCalendar("inp_search_enddt", YEAR_FORMAT1, true);
	var today = new Date();
	var firstDate = new Date(today.getFullYear(), today.getMonth(),1) //현재월 1일 
	setCalendar("inp_search_startdt", YEAR_FORMAT1, firstDate);
};

function setCategory(){
	var strTemp = "";
	strTemp += "<option value='10'>차량단말기</option>";
	strTemp += "<option value='12'>정류소안내기</option>";
	strTemp += "<option value='13'>무선ap</option>";
	$("#sel_faciltpcd").empty().append(strTemp);
};

function initGrid(){
	makeGrid("#sumup_list", model1, 300, "resultList", null, null ,null);
	makeGrid("#detail_list", model2, 300, "resultList", null, null ,null);
	//그룹헤더
	$("#sumup_list").jqGrid('setGroupHeaders', { 
		groupHeaders:[
		              { startColumnName: 'failtpnm', numberOfColumns: 3, titleText: "<div><span id='hd_title'>차량단말기</span> 총 수 <span id='hd_cnt'>0</span>대</div>" }
		              ]
	});
	$("#detail_list").jqGrid('setGroupHeaders', { 
		groupHeaders:[
		              { startColumnName: 'compnm', numberOfColumns: 5, titleText: "기본정보" },
		              { startColumnName: 'fail_occurdt', numberOfColumns: 3, titleText: "장애정보" },
		              { startColumnName: 'fail_treatdt', numberOfColumns: 3, titleText: "조치정보" },
		              ]
	});
	
	$(window).bind('resize', function() {
		$("#sumup_list").jqGrid('setGridHeight', $(".conten.con1 .main_chart").height()- 46);
		$("#sumup_list").jqGrid('setGridWidth', $(".conten.con1 .main_chart").width());		
		
		$("#detail_list").jqGrid('setGridHeight', $(".conbottom.v1201bottom .conten .main_chart").height()- 46);
		$("#detail_list").jqGrid('setGridWidth', $(".conbottom.v1201bottom .conten .main_chart").width());
	}).trigger('resize');
	};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var startdt = $("#inp_search_startdt").val().replace(/-/g,'')+"000000";
		var enddt = $("#inp_search_enddt").val().replace(/-/g,'')+"235959";
		var faciltpcd  = $("#sel_faciltpcd option:selected").val();
		if(Number(enddt) > Number(startdt)){
			var param = {
					search_startdt : startdt,
					search_enddt : enddt,
					faciltpcd : faciltpcd
			};
			all_loadGrid(param);
			showLoader();
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_search_startdt, #inp_search_enddt").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
};

//시설물구분에 따른 그리드 호출
function all_loadGrid(param){
	$("#detail_list").GridUnload();
	if(param.faciltpcd == "10"){
		makeGrid("#detail_list", model2, 300, "resultList", null, complete ,null);
		faciltpcd_10_gridList(param);
	} else if(param.faciltpcd == "12") {
		makeGrid("#detail_list", model3, 300, "resultList", null, complete ,null);
		faciltpcd_12_gridList(param);
	} else if(param.faciltpcd == "13"){
		makeGrid("#detail_list", model3, 300, "resultList", null, complete ,null);
		faciltpcd_13_gridList(param);
	};
	$("#detail_list").trigger("resize");
	detail_grid(param);
	setTimeout(drowChart(),400);
	
};

function complete(){ 
	$("#detail_cnt").text($("#detail_list").getGridParam("reccount"));
	$("#detail_title").text($("#sel_faciltpcd option:selected").text());
};
//차량단말기
function faciltpcd_10_gridList(param){
	$("#detail_list").jqGrid('setGroupHeaders', { 
		groupHeaders:[
		              { startColumnName: 'compnm', numberOfColumns: 5, titleText: "기본정보" },
		              { startColumnName: 'fail_occurdt', numberOfColumns: 3, titleText: "장애정보" },
		              { startColumnName: 'fail_treatdt', numberOfColumns: 3, titleText: "조치정보" }
		              ]
	});
	$("#sumup_list").jqGrid("clearGridData");
	var rowdata = [{failtpnm:"거치대장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"260"},
	               {failtpnm:"디스플레이장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"250" },
	               {failtpnm:"무선랜장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"240"},
	               {failtpnm:"무선모뎀장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"230"},
	               {failtpnm:"F/W장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"280"},
	               {failtpnm:"전원장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"210"},
	               {failtpnm:"GPS장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"220"},
	               {failtpnm:"지패드장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"270"},
	               {failtpnm:"기타장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"290"},
	               {failtpnm:"소계", fail_cnt:"0", treat_cnt:"0"}
	               ];
	 for(var i=0 ; i<rowdata.length;i++){      
	       $("#sumup_list").addRowData(rowdata[i].failtpcd,rowdata[i]); 
	 }
	 sumup_detail_grid(param);
};

//정류소안내기
function faciltpcd_12_gridList(param){
	$("#detail_list").jqGrid('setGroupHeaders', { 
		groupHeaders:[
		              { startColumnName: 'facilid', numberOfColumns: 4, titleText: "기본정보" },
		              { startColumnName: 'fail_occurdt', numberOfColumns: 3, titleText: "장애정보" },
		              { startColumnName: 'fail_treatdt', numberOfColumns: 3, titleText: "조치정보" }
		              ]
	});
	
	$("#sumup_list").jqGrid("clearGridData");
	var rowdata = [{failtpnm:"BIT전원장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"320"},
	               {failtpnm:"회선장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"300" },
	               {failtpnm:"BIT제어기장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"330"},
	               {failtpnm:"VPN장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"340"},
	               {failtpnm:"디스플레이장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"250"},
	               {failtpnm:"모듈부장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"310"},
	               {failtpnm:"기타", fail_cnt:"0", treat_cnt:"0", failtpcd:"290"},
	               {failtpnm:"소계", fail_cnt:"0", treat_cnt:"0" }
	               ];
	 for(var i=0 ; i<rowdata.length;i++){      
	       $("#sumup_list").addRowData(rowdata[i].failtpcd,rowdata[i]); 
	 }
	 sumup_detail_grid(param);
};

//무선AP
function faciltpcd_13_gridList(param){
	$("#detail_list").jqGrid('setGroupHeaders', { 
		groupHeaders:[
		              { startColumnName: 'facilid', numberOfColumns: 4, titleText: "기본정보" },
		              { startColumnName: 'fail_occurdt', numberOfColumns: 3, titleText: "장애정보" },
		              { startColumnName: 'fail_treatdt', numberOfColumns: 3, titleText: "조치정보" }
		              ]
	});
	$("#sumup_list").jqGrid("clearGridData");
	var rowdata = [{failtpnm:"전원장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"210"},
	               {failtpnm:"회선장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"300" },
	               {failtpnm:"기타장애", fail_cnt:"0", treat_cnt:"0", failtpcd:"290"},
	               {failtpnm:"소계", fail_cnt:"0", treat_cnt:"0"}
	               ];
	 for(var i=0 ; i<rowdata.length;i++){      
	       $("#sumup_list").addRowData(rowdata[i].failtpcd,rowdata[i]); 
	 }
	 sumup_detail_grid(param);
};

//장애요약 ajax 결과 데이터로 변경  
function sumup_detail_grid(param){
	sync_ajaxCall("./bit/selectObstacleSumupList.do", param, null, success, null);
	 function success(data){
		 $.each(data.resultSumup,function(index, value){ //장애요약 리스트 관련
			$("#"+value.failtpcd).find('td').eq(2).html(value.fail_cnt);
			$("#"+value.failtpcd).find('td').eq(3).html(value.treat_cnt);
		 });
		 $("#hd_title").text(($("#sel_faciltpcd option:selected").text())); //헤더 정보 수정
		 $("#hd_cnt").text(data.resultCount[0].total); //헤더 정보 수정 
	 }
	 totalSum();
	 hideLoader();
};

//장애현황 
function detail_grid(param){
	reloadGrid("#detail_list", "./bit/selectObstacleDetailList.do", param, "resultList");
};

//장애요약 소계
function totalSum(){
	var sum1 = 0; //소계 -장애건수
	var sum2 = 0; //소계 -조치건수
	$('#sumup_list').find('td[aria-describedby="sumup_list_fail_cnt"]').each(function() {
		sum1 += parseInt($(this).html());
	});
	$('#sumup_list').find('td[aria-describedby="sumup_list_treat_cnt"]').each(function() {
		sum2 += parseInt($(this).html());
	});
	$("#sumup_list tr").last().find('td').eq(2).html(sum1); //소계 수정
	$("#sumup_list tr").last().find('td').eq(3).html(sum2); //소계 수정
};

function drowChart(){
	setChart2d('container','column',getChartOption());
};

function getChartOption(){
	Highcharts.setOptions({
		plotOptions: {
			column: {
				minPointLength: 3
			}
		}
	});
	var buffdata = $('#sumup_list').getRowData(); 
	var chartOpt = new Object();
	chartOpt.xAxis = new Object();
	chartOpt.xAxis = {
	        categories: [],
	        crosshair: true
	             }
	chartOpt.yAxis = new Object();
	chartOpt.yAxis = {
	        min: 0,
	        minRange : 0.1,
	        title: {
	            text: null
	        }
	    }
	chartOpt.series = new Array();
	chartOpt.series =  [{
        name: '장애건수',
        data: []

    }, {
        name: '조치건수',
        data: []
    }]
	$.each(buffdata,function(idx,value){ //네임은 카테고리 나머지는 데이터 누적
		chartOpt.xAxis.categories.push(value.failtpnm);
		chartOpt.series[0].data.push(parseInt(value.fail_cnt));
		chartOpt.series[1].data.push(parseInt(value.treat_cnt));
	});
	return chartOpt;
};

//동기 ajax
function sync_ajaxCall(url, data, beforeSend, success, error){
	$.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType : "json",
        async: false,
        beforeSend: beforeSend,
        success: success,
        error: error
	});
}