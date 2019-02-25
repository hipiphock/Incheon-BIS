

var model1 = [
	   			{label:"수집일시",				name:"occurdt",     			index:"occurdt",  			width: "160", 	align:"center"},
	   			{label:"현재온도",				name:"cur_temper",     			index:"cur_temper",  		width: "80", 	align:"center"},
	   			{label:"풍향",				name:"winddir",     			index:"winddir",  			width: "80", 	align:"center"},
	   			{label:"풍속(m/s)",			name:"windspd",     			index:"windspd",  			width: "80", 	align:"center"},
	   			{label:"날씨상태",				name:"tod_weathertpnm", 	    index:"tod_weathertpnm",  	width: "80", 	align:"center"},
	   			{label:"최고온도",				name:"max_temper",     			index:"max_temper",  		width: "80", 	align:"center"},
	   			{label:"최저온도",				name:"min_temper",     			index:"min_temper",  		width: "80", 	align:"center"},
	   			{label:"오전비(%)",			name:"tod_rainproblt_m",	    index:"tod_rainproblt_m",  	width: "80", 	align:"center"},
	   			{label:"오후비(%)",			name:"tod_rainproblt_a",  		index:"tod_rainproblt_a",  	width: "80", 	align:"center"},
	   			{label:"날씨상태",				name:"for_weathertpnm",  	  	index:"for_weathertpnm",  	width: "80", 	align:"center"},
	   			{label:"최고온도",				name:"for_max_temper",   	  	index:"for_max_temper",  	width: "80", 	align:"center"},
	   			{label:"최저온도",				name:"for_min_temper",   	  	index:"for_min_temper",  	width: "80", 	align:"center"},
	   			{label:"오전비(%)",			name:"for_rainproblt_m", 	    index:"for_rainproblt_m",  	width: "80", 	align:"center"},
	   			{label:"오후비(%)",			name:"for_rainproblt_a",   	 	index:"for_rainproblt_a",  	width: "80", 	align:"center"},
	   			
	   			{name:"tod_max_temper",    	index:"tod_max_temper",  		hidden:true},
	   			{name:"tod_min_temper",    	index:"tod_min_temper",  		hidden:true},
	   			
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	initPicker();
});


function initPicker(){
	initCalendar("inp_search_startdt", YEAR_FORMAT1, true);
	initCalendar("inp_search_enddt", YEAR_FORMAT1, true);
};

function initGrid(){
	makeGrid("#detail_list", model1, 300, "resultList", null, complete ,null);
	//그룹헤더
	$("#detail_list").jqGrid('setGroupHeaders', { 
		groupHeaders:[
		              { startColumnName: 'occurdt', numberOfColumns: 4, titleText: "현재기상" },
		              { startColumnName: 'tod_weathertpnm', numberOfColumns: 5, titleText: "오늘날씨" },
		              { startColumnName: 'for_weathertpnm', numberOfColumns: 5, titleText: "내일날씨" }
		              ]
	});
	
	function complete(){
	};
	
	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()- 46);
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
	
	};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var startdt = $("#inp_search_startdt").val().replace(/-/g,'')+"000000";
		var enddt = $("#inp_search_enddt").val().replace(/-/g,'')+"235959";
		if(Number(enddt) > Number(startdt)){
			var param = {
					search_startdt : startdt,
					search_enddt : enddt
			};
			showLoader();
			reloadGrid("#detail_list", "./outsideinfo/selectWeatherCallList.do", param, "resultList");
		
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_search_startdt, inp_search_enddt").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	
};
