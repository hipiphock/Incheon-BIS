<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>통신데이터 관리 - 차량별 통신 수집집계 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/lib/hashMap.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/commChart.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v07/v709.js"></script>

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
                <h2>통신데이터 관리 - 차량별 통신 수집집계 조회</h2>
            </div>
           <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel1" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>노선별</p></a></li>
                        <li><a id="btn_excel2" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>차량별</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="bit_serch_top tong709">
                            <tr>
                                <th>운행일자</th>
                                <td>
                                	<input type="text" class="in bit_textid text175" id="start_date"> ~ <input type="text" class="in bit_textid text175" id="end_date">
                                </td> 
                                <th>제외검지율(%)</th>
                                <td width="200px;">
                                	<input type="number" class="in bit_textid text75" id="option_percent" value="40" min="0" max="100"> 이하 제외
                                </td>                                                           
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
                	<div class="top_title">
                		<p id="search_count">노선별 평균 수집율</p>
                	</div>
                	<div class="top_title2">
                		<p id="search_count2">차량별 수집율 검색 결과</p>
                	</div>
                    <div class="subcon_con3">
                    	<div class="subcon2_left">
                        	<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        		<table id="route_list"></table>
                        	</div>
                        </div>
                        <div class="subcon2_right">
                        	<table id="bus_list"></table>
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
