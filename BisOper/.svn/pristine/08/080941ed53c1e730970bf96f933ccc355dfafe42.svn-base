<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>통신데이터 관리 - 정류소 통신 수집현황 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/lib/hashMap.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/commChart.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v07/v707.js"></script>

<script type="text/javascript">
	var START_DATE_TIME = '${start_date_time}';
	var END_DATE_TIME = '${end_date_time}';
	var START_RANGE = '${start_range}';
	var END_RANGE = '${end_range}';
	var BIT_ID = '${bit_id}';
	var STOP_ID = '${stop_id}';
</script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v705">
	
	<div class="big_wrap pop">
            <div class="pop_title2">
                <h2>통신데이터 관리 - 정류소 통신 수집현황 조회</h2>
            </div>
        <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                    	<span class="ex_706">조회시작시각 부터 최대 24시간 까지 조회합니다 ></span>
                        <table class="tong706_serch_top tong707">
                            <tr>
                                <th>조회구분</th>
                                <td width="100px">
                                	<select class="in bit_list3 list78" id="search_option">
                                		<option value="1">시간별</option>
                                		<option value="2">일별</option>
                                  	</select>
                                </td>
                                <th>기간</th>
                                 <td>
                                	<input type="text" class="in bit_textid text75" id="start_date"> <input type="number" min="0" max="23" class="in bit_textid text37 hour_input" id="start_time"> ~
                                	<input type="text" class="in bit_textid text75" id="end_date"> <input type="number" min="0" max="23" class="in bit_textid text37 hour_input" id="end_time">
                                </td>
                                <th>노선번호</th>
                                <td width="100px">
                                	<select class="in bit_list3 list78" id="option_list">
                                  	</select>
                                </td>
                                <th>통계내용</th>
                                <td width="130px">
									<select class="in bit_list3 list109" id="event_type">
                                		<option value="1">이벤트수집건수</option>
                                		<option value="2">정류소도착건수</option>
                                		<option value="3">정류소출발건수</option>
                                		<option value="5">평균통신지연시간</option>
                                  	</select>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="sistem_conbody">
                    <p class="serch_number" id="search_count">정류소 통신 수집 현황</p>
                    <div class="subcon_con3">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="stop_list"></table>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->     
        </div>
	</div>
</body>
</html>
