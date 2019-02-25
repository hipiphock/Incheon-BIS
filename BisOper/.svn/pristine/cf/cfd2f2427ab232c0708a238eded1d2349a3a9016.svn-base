<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>통신데이터 관리 - 차량별 통신 수집이력 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/lib/hashMap.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/commChart.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v07/v708.js"></script>

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
                <h2>통신데이터 관리 - 차량별 통신 수집이력 조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="tong706_serch_top tong708">
                            <tr>
                                <th>기간</th>
                                <td>
                                	<input type="text" class="in bit_textid text90" id="start_date"> <input type="number" min="0" max="23" class="in bit_textid text37 hour_input" id="start_time"> ~
                                	<input type="text" class="in bit_textid text90" id="end_date"> <input type="number" min="0" max="23" class="in bit_textid text37 hour_input" id="end_time">
                                </td>
                                <th>회사</th>
                                <td>
                                	<select class="in bit_list3 list109" id="option_company">
                                		<option value="0">전체</option>
                                  	</select>
                                </td> 
                                <th>노선</th>
                                <td><select class="in bit_list3 list109" id="option_route">
                                  	</select>
                                </td>
                                <th>차량번호</th>
                                <td><select class="in bit_list3 list109" id="option_regno">
                                  	</select>
                                </td>
                                <th>구분</th>
                                <td>
                                	<select class="in bit_list3 list109" id="option_search">
                                		<option value="1">전체</option>
                                		<option value="2">수집</option>
                                		<option value="3">누락</option>
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
                    <p class="serch_number" id="search_count">통신 수집 이력 조회</p>
                    <div class="subcon_con3">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="event_list"></table>
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
