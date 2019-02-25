<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>노선 시간표 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v03/v303.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v301">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>기반정보 - 노선 시간표 관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <div class="time_conbody">
                     <div class="subcon_con2">
                                        <div class="time_left"><!--왼쪽-->
                                            <div class="time_top_btn">
                                                <ul>
                                                    <li><a><img src="./images/time_icon1.png">공휴일 정보 관리</a></li>
                                                    <li><a id="btn_refresh"><img src="./images/icon_re2.png">새로고침</a></li>
                                                </ul>
                                                <span class="time_check">
                                                    <label><input type="checkbox" name="check_route_id" class="check" id="check_route_id">노선ID</label>  
                                                    <label><input type="checkbox" name="check_route_name" class="check" id="check_route_name">노선 명</label>
                                                </span>
                                            </div>
                                            <div class="serch_box2">
                                             	<input type="text" class="in bit_in_text" placeholder="검색어 입력" id="text_search">
                                             	<img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼" id="btn_search">
                                         	</div>
                                         	<a class="serch_clear" id="btn_clear">clear</a>
                                         	<label><div class="serch_check"><input type="checkbox" name="check_detail" class="check" id="check_detail">결과검색</div></label>
                                            <div class="time_left_chart_body">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="route_list"></table>
                                                </div>
                                            </div><!--왼쪽 표-->                                          
                                        </div>
                                        <div class="time_right"><!--오른쪽-->
                                            <div class="basecon_right_chart_body"> 
                                                <div class="sub_layer_title">
                                                     <h3>선택 시간표 정보</h3>
                                                </div>
                                                <table class="chart5"  border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                            <th>노선 ID</th>
                                                            <td><input type="text" class="in in_text time_in" name="ID" id="input_routeid" readonly></td>
                                                            <th width="100px;">노선명</th>
                                                            <td><input type="text" class="in in_text time_in" name="angle" id="input_routeno" readonly></td>
                                                    </tr>
                                                </table>
                                                <div class="sub_layer_title twodep2">
                                                     <h3>운행 시간표</h3>
                                                </div>
                                                <!-- <div class="time_kind">
                                                    <p class="left">
                                                        <label><input type="radio" name="operation_flag" value="1" id="radio_type">평일 운행</label>
                                                        <label><input type="radio" name="operation_flag" value="2" id="radio_type">토요일 운행</label>
                                                        <label><input type="radio" name="operation_flag" value="3" id="radio_type">휴일 운행</label>
                                                        <label><input type="radio" name="operation_flag" value="4" id="radio_type">공통 운행</label>
                                                    </p>
                                                    <p class="right">
                                                        <label><input type="checkbox" name="check" class="check">방학운행</label>
                                                    </p>
                                                </div> -->
                                                <div class="time_right_chart_body">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="run_list"></table>
                                                </div>
                                            </div>
                                                <div class="subcon2_right_btn"><!--왼쪽아래 버튼-->
                                                    <ul class="con2_r">
                                                    	<li><a id="btn_new"><img src="./images/icon_plus.png">추가</a></li>
                                                    	<li><a id="btn_del">삭제</a></li>
                                                        <li><a id="btn_save"><img src="./images/icon_ok.png">저장</a></li>
                                                        <li><a id="btn_cancel"><img src="./images/close_black.png">취소</a></li>
                                                    </ul>
                                                </div>   
                                                <div class="basecon_left_img"><!--아래 접은 이미지-->
                                                    <img src="./images/left_paper.png">
                                                </div>
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
