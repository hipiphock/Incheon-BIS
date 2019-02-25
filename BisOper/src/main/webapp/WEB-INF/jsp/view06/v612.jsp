<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>이력조회 - 차량단말기 수집 이력 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v06/v612.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">
	
<div class="big_wrap pop">
		<div class="pop_title2">
			<h2>이력조회 - 차량단말기 수집 이력 조회</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <!-- <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_chart.png"><p>그래프</p></a></li> -->
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="e_serch_top">
                            <tr>
                                <th>이벤트유형</th>
                                <td>
                                	<select class="in bit_list3 list190" id="event_option">
                                		<option value="0">전체이벤트</option>
                                		<option value="1">시동ON</option>
                                		<option value="5">시동OFF</option>
                                		<option value="2">차고지출발</option>
                                		<option value="4">차고지도착</option>
                                		<option value="21">기본이벤트</option>
                                		<option value="22">정주기이벤트</option>
                                		<option value="23">동적이벤트</option>
                                		<option value="24">돌발이벤트</option>
                                		<option value="25">위반이벤트</option>
                                  	</select>
                                </td> 
                                <th>이벤트일시</th>
                                <td>
                                	<input type="text" class="in bit_textid" id="start_date"> 
                                	<input type="text" class="in bit_textid" id="start_time"> 
                                	&nbsp;~&nbsp;
                                	<input type="text" class="in bit_textid" id="end_time">
                                </td>
                                <th>버스ID</th>
                                <td>
                                	<input type="text" class="in bit_textid" id="search_busid">
                                </td>                                                        
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
                    <div class="subcon_con2">
                    	<div class="subcon2_left nosun_left">
                    		<div class="e_left1">
                    			<div class="sub_layer_title">
                    				<h3>노선리스트</h3>
                    			</div>
                    			<div class="e_left_con">
                        			<div class="main_chart" id="grid1"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        				<table id="route_list"></table>
                        			</div>
                        		</div>
                        	</div>
                        	<div class="e_left2">
                        		<div class="sub_layer_title">
                    				<h3>버스리스트</h3>
                    			</div>
                        		<div class="e_left_con">
                        			<div class="main_chart" id="grid2"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        				<table id="bus_list"></table>
                        			</div>
                        		</div>
                        	</div>
                        </div>
                        <div class="subcon2_right nosun_right">
                        	<div class="main_chart" id="grid3"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="event_list"></table>
                        	</div>
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
