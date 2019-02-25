

var model1 = [
              	//기본정보
	   			{label:"업체명",		name:"compnm",     	index:"compnm",  	width: "90", 	align:"center"},
	   			{label:"업체명(원천)",	name:"compnmo",     index:"compnmo",  	width: "90", 	align:"center"},
	   			{label:"지사명",		name:"jisa",     	index:"jisa",  		width: "90", 	align:"center"},
	   			{label:"노선유형",		name:"routetp",     index:"routetp",  	width: "90", 	align:"center"},
	   			{label:"노선코드",		name:"routeid",     index:"routeid",  	width: "90", 	align:"center"},
	   			{label:"노선명",		name:"routeno",     index:"routeno",  	width: "90", 	align:"center"},
	   			//비환승
	   			{label:"계",			name:"f03",     	index:"f03",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f04",     	index:"f04",  		width: "90", 	align:"center"},
	   			{label:"금액",		name:"f05",     	index:"f05",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f06",     	index:"f06",  		width: "90", 	align:"center"},
	   			{label:"금액",		name:"f07",     	index:"f07",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f08",     	index:"f08",  		width: "90", 	align:"center"},
	   			{label:"금액",		name:"f09",     	index:"f09",  		width: "90", 	align:"center"},
	   			{label:"계",			name:"f10",     	index:"f10",  		width: "90", 	align:"center"},
	   			//환승                                           
	   			{label:"유료",		name:"f11",     	index:"f11",  		width: "90", 	align:"center"},
	   			{label:"무료",		name:"f12",     	index:"f12",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f13",     	index:"f13",  		width: "90", 	align:"center"},
	   			{label:"금액",		name:"f14",     	index:"f14",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f15",     	index:"f15",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f16",     	index:"f16",  		width: "90", 	align:"center"},
	   			{label:"금액",		name:"f17",     	index:"f17",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f18",     	index:"f18",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f19",     	index:"f19",  		width: "90", 	align:"center"},
	   			{label:"금액",		name:"f20",     	index:"f20",  		width: "90", 	align:"center"},
	   			{label:"건수",		name:"f21",     	index:"f21",  		width: "90", 	align:"center"},
	   			{label:"계",			name:"f22",     	index:"f22",  		width: "90", 	align:"center"},
	   				
	   			{label:"합계",		name:"f23",     	index:"f23",  		width: "90", 	align:"center"},
	   			{label:"합계",		name:"f24",     	index:"f24",  		width: "90", 	align:"center"},
	   			{label:"합계",		name:"f25",     	index:"f25",  		width: "90", 	align:"center"},
	   			                          
	   			{label:"계",			name:"f26",     	index:"f26",  		width: "90", 	align:"center"},
	   			{label:"일반",		name:"f27",     	index:"f27",  		width: "90", 	align:"center"},
	   			{label:"학생",		name:"f28",     	index:"f28",  		width: "90", 	align:"center"},
	   			{label:"어린이",		name:"f29",     	index:"f29",  		width: "90", 	align:"center"},
	   			                          
	   			{label:"(카드+현금)",	name:"f30",     	index:"f30",  		width: "90", 	align:"center"},
	   			
	   			{name:"coldt",     	index:"f30",  		hidden:true}
	   			
	   			
	   		];


$(document).ready(function(){
	appendLoader("조회 중...");
	initGrid();
	initEvent();
	initPicker();
});


function initPicker(){
	function leadingZeros(n, digits) {
	    var zero = '';
	    n = n.toString();
	    if (n.length < digits) {
	        for (i = 0; i < digits - n.length; i++)
	            zero += '0';
	    }
	    return zero + n;
	}
	
	var date = new Date();
	var year = leadingZeros(date.getFullYear(),4);
	var month = leadingZeros(date.getMonth()+1,2);
	$("#inp_monthdt1").val(year+"-"+month);
	$("#inp_monthdt2").val(year+"-"+month);
	
	
	
};

function initGrid(){
	makeGrid("#detail_list", model1, 300, "resultList", null, complete ,null);
	function complete(){
	//멀티헤더
	$("#detail_list").jqGrid('setGroupHeaders', { //1번줄
		groupHeaders:[
		              { startColumnName: 'compnm', numberOfColumns: 6, titleText: "기본정보" },
		              { startColumnName: 'f03', numberOfColumns: 8, titleText: "비환승" },
		              { startColumnName: 'f11', numberOfColumns: 12, titleText: "환승" },
		              { startColumnName: 'f23', numberOfColumns: 1, titleText: "건수" },
		              { startColumnName: 'f24', numberOfColumns: 1, titleText: "금액" },
		              { startColumnName: 'f25', numberOfColumns: 1, titleText: "현금수입금" },
		              { startColumnName: 'f26', numberOfColumns: 4, titleText: "현금건수" },
		              { startColumnName: 'f30', numberOfColumns: 1, titleText: "전체건수" }
		              ]
	});
	$("#detail_list").jqGrid('setGroupHeaders', { //2번줄
		groupHeaders:[
					  { startColumnName: 'f03', numberOfColumns: 1, titleText: "건수" },
				      { startColumnName: 'f04', numberOfColumns: 2, titleText: "일반" },
					  { startColumnName: 'f06', numberOfColumns: 2, titleText: "학생" },
					  { startColumnName: 'f08', numberOfColumns: 2, titleText: "어린이" },
					  { startColumnName: 'f10', numberOfColumns: 1, titleText: "금액" },
		              { startColumnName: 'f11', numberOfColumns: 2, titleText: "건수(계)" },
		              { startColumnName: 'f13', numberOfColumns: 3, titleText: "일반" },
		              { startColumnName: 'f16', numberOfColumns: 3, titleText: "학생" },
		              { startColumnName: 'f19', numberOfColumns: 3, titleText: "어린이" },
		              { startColumnName: 'f22', numberOfColumns: 1, titleText: "금액" }
		              ]
	});
	
	$("#detail_list").jqGrid('setGroupHeaders', {//3번줄
		  groupHeaders:[
		              { startColumnName: 'f13', numberOfColumns: 2, titleText: "유료" },
		              { startColumnName: 'f15', numberOfColumns: 1, titleText: "무료" },
		              { startColumnName: 'f16', numberOfColumns: 2, titleText: "유료" },
		              { startColumnName: 'f18', numberOfColumns: 1, titleText: "무료" },
		              { startColumnName: 'f19', numberOfColumns: 2, titleText: "유료" },
		              { startColumnName: 'f21', numberOfColumns: 1, titleText: "무료" }
		   ]
    });
	
	
	 
	
	/*//멀티헤더 강제 병합  (컬럼 or 검색시 헤더위에 빈줄이 늘어나는 이슈로 인해 사용못함)
	//기본정보 병합
	for(i=1;i<=6;i++){
		$("thead tr").eq(2).find("th").eq(1).remove();
		$("thead tr").eq(3).find("th").eq(1).remove();
	}
	$("thead tr").eq(1).find("th").eq(1).attr("rowspan","3");
	//건수 ~건수(계)병합
	for(i=1;i<=10;i++){
		$("thead tr").eq(3).find("th").eq(1).remove();
	}
	$("thead tr").eq(2).find("th").eq(1).attr("rowspan","2");
	$("thead tr").eq(2).find("th").eq(2).attr("rowspan","2");
	$("thead tr").eq(2).find("th").eq(3).attr("rowspan","2");
	$("thead tr").eq(2).find("th").eq(4).attr("rowspan","2");
	$("thead tr").eq(2).find("th").eq(5).attr("rowspan","2");
	$("thead tr").eq(2).find("th").eq(6).attr("rowspan","2");
	//나머지 병합
	for(i=1;i<=8;i++){
		$("thead tr").eq(2).find("th").eq(11).remove();
	}
	for(i=1;i<=9;i++){
		$("thead tr").eq(3).find("th").eq(8).remove();
	}
	$("thead tr").eq(2).find("th").eq(10).attr("rowspan","2");
	$("thead tr").eq(1).find("th").eq(4).attr("rowspan","3");
	$("thead tr").eq(1).find("th").eq(5).attr("rowspan","3");
	$("thead tr").eq(1).find("th").eq(6).attr("rowspan","3");
	$("thead tr").eq(1).find("th").eq(7).attr("rowspan","3");
	$("thead tr").eq(1).find("th").eq(8).attr("rowspan","3");*/

	};
	
	$(window).bind('resize', function() {
		$("#detail_list").jqGrid('setGridHeight', $(".main_chart").height()-(25*4));
		$("#detail_list").jqGrid('setGridWidth', $(".main_chart").width());		
	}).trigger('resize');
	
	};



function initEvent(){
	//검색버튼 클릭
	$("#btn_search").on("click",function(){
		var param = {
				coldt : $("#inp_monthdt1").val().replace(/-/g,'')
		};
		showLoader();
		reloadGrid("#detail_list", "./outsideinfo/selectCardCashList.do", param, "resultList");
	});
	
	//새로고침 버튼
	$("#btn_refresh").click(function() {
		window.location.reload();
	});
	
	//Enter 검색
	$("#inp_monthdt1").on("keydown", function(key) {
		if(key.keyCode == 13) {
			$("#btn_search").trigger("click");
		}
	});
	
	//삭제 버튼
	$("#btn_delete").on("click",function(){
		var deldt = $("#inp_monthdt1").val().replace(/-/g,'');
		if(!deldt){
			showAlert("년 월 을 입력해주세요"); 
			return;
		}
		ajaxCall("./outsideinfo/deleteCardCash.do", {coldt : deldt} , null, del_success, null);
		function del_success(data){
			console.log(data.result);
			if(data.result <= 0){
				showAlert("삭제하실 날짜를 다시 확인해주세요");
			} else {
				showAlert("삭제 되었습니다");
				$("#btn_search").trigger("click");
			}
		};
		
		
		
	});
	
};
