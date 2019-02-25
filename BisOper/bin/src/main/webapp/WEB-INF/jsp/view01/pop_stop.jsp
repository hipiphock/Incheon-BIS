<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>BIT 그룹</title>
</head>

<body>
	<div class="busstop_wrap" id="pop_stop">
        <div class="busstop_pop">
            <div class="pop_title">
                <h2>[<span id="pop_stop_title">검단4동주민센터</span>] 정류소 상세 정보</h2>
                <input type="hidden" id="pop_stop_id">
                <p id="stoppop_close"><img src="./images/close_white.png" alt="닫기"></p>
            </div>
            <div class="pop_conbody busstop_pop" style="height:408px;"> 
                <!--왼쪽시작-->
                <div class="busstop_left">
                    <div class="layer_title">
                        <h3>정류소 경유노선</h3>
                    </div>
                    <div class="busstop_con">
                        <div class="main_chart">
                        	<table id="pop_route_list">
                        	</table>
                             <!--표 사이즈 width:175px; height:372px;-->
                        </div>
                    </div>
                </div>   
                <!--왼쪽끝-->
                
                <!--오른쪽시작-->
                <div class="busstop_right">
                   <div class="layer_title">
                        <h3>정류소 도착예정 시간정보</h3>
                    </div>
                    <div class="busstop_con">
                        <div class="main_chart">
                        	<table id="pop_arrival_list">
                        	</table>
                             <!--표 사이즈 width:622px; height:372px;-->
                        </div>
                    </div>
                </div>
                <!--오른쪽끝-->
                <!--아래 버튼 시작-->
                <div class="busstop_btn">
                    <ul>
                        <li class="bottom_close"><a href="#"><img src="./images/close_black.png">닫기</a></li>
                    </ul>
                </div>
                <!--아래 버튼 끝-->
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
