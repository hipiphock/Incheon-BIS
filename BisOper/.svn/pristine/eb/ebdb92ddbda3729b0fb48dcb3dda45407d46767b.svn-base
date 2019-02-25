<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>노선별 가공 파라미터 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v07/v702.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v701">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>분석/가공 - 노선별 가공 파라미터 관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a href="javascript:void(0);" id="btn_excel1"><img src="./images/btn_big_save.png"><p>파라미터</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_excel2"><img src="./images/btn_big_save.png"><p>노선 별</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                    <div class="analy_con1">
                        <div class="sub_layer_title">
                            <h3>가공 파라미터 정보</h3>
                        </div>
                        <div class="analy_con1_chart">
                            <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                <table id="top_param_list"></table>
                            </div> 
                        </div>
                            <!--위 아래 버튼 시작-->
                            <div class="sms_btn2">
                                <ul class="con2_r">
                                    <li><a href="javascript:void(0);"><img src="./images/icon_ok.png">신규</a></li>
                                    <li><a href="javascript:void(0);"><img src="./images/close_black.png">수정</a></li>
                                </ul>
                            </div>  
                            <!--위 아래 버튼 끝-->                     
                    </div>
                    <div class="analy_con2">
                        <div class="sub_layer_title">
                            <h3>노선 별 가공 파라미터</h3>
                        </div>
                        <!--위 작은버튼-->
                    <div class="analy_left_btn">
                        <a href="javascript:void(0);" class="s_btn analy_btn" id="btn_choice">노선선택</a>
                        <span class="" id="input_route">선택 노선 없음</span>
                        <input type="hidden" id="input_route_id">
                    </div>
                    <div class="analy_right_btn">
                        <span>선택 된 파라미터 ID / 변경ID :</span>
                        <span id="selected_id">없음</span>
                        <a href="javascript:void(0);" class="s_btn analy_btn" id="set_parameter">파라미터 적용</a>
                    </div>
                    <!--위 작은버튼끝--> 
                        <div class="analy_con1_chart2">
                            <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                 <table id="bot_route_list"></table>   	
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
</body>
</html>
