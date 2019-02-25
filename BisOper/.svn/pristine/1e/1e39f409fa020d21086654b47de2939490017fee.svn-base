<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>버스운행 이력조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>
<script src="./js/v06/v607.js"></script>

<script src="./js/lib/hashMap.js"></script>
<script src="http://openapi.map.naver.com/openapi/v3/maps.js?clientId=WkpbXbSAEC5adp2jrVPi"></script>
<script src="./js/v01/nMap.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>이력/통계 - 버스운행 이력조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                
                <div class="statistic7_conbody">
                     <div class="subcon_con2">
                         <!--왼쪽-->
                        <div class="statistic7_left">
                            <div class="sub_layer_title">
                                <h3>이력 검색</h3>
                            </div>
                            <table class="statistic7_chart"  border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <th>시작일</th>
                                    <td>
                                        <input type="text" class="in in_text_statistic7 statistic_in2" id="start_date">
                                        <input type="text" class="in in_text_statistic7 statistic_in2" id="start_time">
                                    </td>
                                    <th>종료일</th>
                                    <td>
                                        <input type="text" class="in in_text_statistic7 statistic_in2" id="end_date">
                                        <input type="text" class="in in_text_statistic7 statistic_in2" id="end_time">
                                    </td>
                                </tr>
                                <tr>
                                     <th>노선</th>
                                     <td>
                                     	<input type="text"  class="in in_text_b serch_box_shot" readonly="readonly" id="input_route">
                                     	<input type="hidden" id="input_route_id">
                                     	<a href="javascript:void(0);" class="serch_ch" id="btn_choice1">선택</a>
                                     </td>
                                    <th>차량번호</th>
                                    <td>
                                    	<input type="text" class="in in_text_b serch_box_shot" readonly="readonly" id="input_plate_no" >
                                    	<input type="hidden" id="input_veh_id">
                                    	<a href="javascript:void(0);" class="serch_ch" id="btn_choice2">선택</a>
                                    </td>
                                </tr>
                            </table>
                            <button class="statistic7_serch_btn" id="btn_search"><img src="./images/serch_gray.png">검색</button>
                            
                            <div class="sub_layer_title" style="clear: both;">
                                <h3>결과 내 검색</h3>
                            </div>
                            <div class="statistic7_serch2">
                                <dt>찾기</dt>
                                <dd class="btn_box3">
                                        <input type="text" class="in subtop_in_text" name="ID" placeholder="차량번호, 지점명" id="text_list_search">
                                        <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼" id="btn_list_search"></span>
                                </dd>
                                <dd><a href="javascript:void(0);" class="serch_clear3" id="btn_clear">clear</a>
                                    <div class="serch_check3">
                                	<label><input type="checkbox" name="check" class="check" id="check_regular" checked="checked">정주기</label>
                                    <label><input type="checkbox" name="check" class="check" id="check_event" checked="checked">이벤트</label>
                                    </div>
                                </dd>
                                <dd class="check_left">
                                	<span style="padding-right: 5px; ">|</span>
                                    <label><input type="checkbox" name="check" class="check" id="check_detail">결과검색</label>
                                </dd>
                            </div> 
                            <div class="statistic7_serch3">
                                <div class="btn_box7">
                                                <ul>
                                                    <li><a class="s_btn bus607_btn" style="border-right:none;" href="javascript:void(0);"><img src="./images/base_icon1.png"></a></li>
                                                    <li><a class="s_btn bus607_btn" style="border-right:none;" href="javascript:void(0);"><img src="./images/base_icon3.png"></a></li>
                                                    <li><a class="s_btn bus607_btn" style="border-right:none;"href="javascript:void(0);"><img src="./images/base_icon4.png"></a></li>
                                                    <li><a class="s_btn bus607_btn" href="javascript:void(0);"><img src="./images/base_icon2.png"></a></li>
                                                </ul>
                                </div>
                                <div class="btn_box_right">
                                    <ul>
                                        <il><a class="s_btn statistic7_save" href="javascript:void(0);" id="btn_excel"><img src="./images/icon_file.png">파일저장</a></il>
                                    </ul>
                                </div>
                            </div>
                            <div class="statistic7_left_chart_body">
                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                	<table id="operation_list"></table>
                                </div>
                            </div>                                         
                        </div>
                        <!--오른쪽-->
                         <div class="statistic7_right">
                            <!-- <div class="statistic7_right_top">
                                버스 아이콘 라벨
                                    <select class="subtop_in statistic_day_list">
                                        <option value="01">표시안함</option>
                                        <option value="02">리스트1</option>
                                        <option value="03">리스트2</option>
                                 </select>
                            </div> -->
                            <div class="statistic7_map_new"><!-- CSS 변경 / style_sub.css line:502 / top:45px  > top:0px -->
                                <div class="main_chart" id="map"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->                                
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
        <jsp:include page="../comm/pop_choice.jsp"/>
        <jsp:include page="../comm/pop_choice2.jsp"/>
</body>
</html>
