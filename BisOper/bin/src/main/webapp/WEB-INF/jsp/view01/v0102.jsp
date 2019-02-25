<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">

<title>버스운행관제</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v01/v0102.js"></script>

</head>
	   
<body>
	<input type="hidden" id="view_attr" value="BMS-V-305">
	<jsp:include page="pop_bus.jsp" /> 
    <jsp:include page="pop_stop.jsp" /> 
        <div class="nosun305_wrap">
            <div class="pop_title2">
                <h2>버스운행관제 - 노선도 모니터링</h2>
            </div>
            <div class="pop_conbody2 nosun305_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <div class="nosun_conbody">
                     <div class="subcon_con2">
                                        <div class="base_left nosun_left"><!--왼쪽-->
                                        	<!-- 검색 -->
                                        	<div class="no_serch">
                                        		<div class="n_btn_box">
                                            		<input id="input_search" type="text" class="in bit_in_text" name="ID" placeholder="노선명 검색">
                                            		<span><img id="btn_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                         		</div>
                                         		<a id="btn_clear" href="javascript:void(0);" class="serch_clear6">clear</a>
                                         	</div>
                                         	<!-- 검색 끝-->
                                            <div class="base_left_chart_body nosun_body">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="route_list"></table>
                                                </div>
                                            </div><!--왼쪽 표-->                                          
                                        </div>
                                        <div class="base_right nosun_right" style="background-color: #fff;"><!--오른쪽-->
                                        	<div class="nosun_first">
                                        		<div class="nosun_title1">
                                        			<p><span id="route_num">-</span> <span></span></p>
                                        			<p class="t1">( 전체: <span id="totalCnt">0</span> 종료: <span id="stopCnt">0</span> 정상: <span id="normalCnt">0</span> 공차: <span id="emptyCnt">0</span> 돌발: <span id="inciCnt">0</span> 노선이탈: <span id="awayCnt">0</span> 임의지연: <span id="delayCnt">0</span> )</p>
                                        		</div>
                                        		<div class="nosun_title2">
                                        			<ul>
                                        				<li><img src="./images/nosun_plus.png">교차로</li>
                                        				<li><img src="./images/nosun_r_arrow1.png">정류소</li>
                                        				<li><img src="./images/nosun_r_arrow2.png">안내기설치정류소</li>
                                        				<li><img src="./images/nosun_bus_blue.png">정상운행버스</li>
                                        				<li><img src="./images/nosun_bus_red.png">돌발/이탈/지연운행버스</li>
                                        				<li><img src="./images/nosun_bus_green.png">운행안함/종료/중단/공차</li>
                                        			</ul>
                                        		</div>
                                        	</div>
                                            <div class="basecon_right_chart_body nosun_body"> 
                                            	<!-- 정류장 -->                                             
                                                <div class="bus_wrap">
                                                	<div class="bus_con">
                                                		<!--<div class="para odd">
                                                			<ul>
                                                				<li>1 										1줄에 24개 버스정류장이 있습니다.
                                                					<p class="bus_b"><span>9999(100분)</span></p>		파랑버스: .bus_b , 초록버스: .bus_g , 빨강버스: .bus_r
                                                					<div class="nosun n_yellow">					노랑: .n_yellow , 초록: .n_green , 빨강: .n_red
                                                						<img src="./images/nosun_r_arrow1.png">		하얀화살표: nosun_r_arrow1.png , 노란화살표: nosun_r_arrow2.png , 플러스모양: nosun_plus.png
                                                						<p class="stop_name">무지개아파트</p>
                                                					</div>
                                                				</li>
                                                				<li>2
                                                					<p class="bus_g"><span>1112(99분)</span></p>
                                                					<div class="nosun n_green">
                                                						<img src="./images/nosun_plus.png">
                                                						<p class="stop_name"></p>
                                                					</div>
                                                				</li>
                                                			</ul>
                                                		</div>
                                                		<div class="para even">
                                                			<ul>
                                                				<li>										맨 마지막  li에  .last 를 삽입 해 주세요
                                                					<p class="bus_b"><span>1111(99분)</span></p>
                                                					<div class="nosun n_yellow">
                                                						<img src="./images/nosun_plus.png">
                                                						<p class="stop_name">무지개아파트</p>
                                                					</div>
                                                				</li>
                                                			</ul>
                                                		</div>-->
                                                	</div>
                                                </div> 
												<!-- 정류장  끝--> 
											</div>    
                                        </div>
                      </div>                
                </div>
            </div>
             <!--내용 레이아웃끝-->   
        </div>
        </div>
        <!--내용끝-->
       
</body>
</html>
