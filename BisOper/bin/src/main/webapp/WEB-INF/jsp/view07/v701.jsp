<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>도착정보 신뢰도 분석</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v07/v701.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v701">
	
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>분석/가공 - 도착정보 신뢰도 분석</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a href="javascript:void(0);" id="btn_excel"><img src="./images/btn_big_save.png" id="btn_excel"><p>파일저장</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="two_serch7"  border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <th>기간 설정</th>
                                <td class="lage">                                    
                                    <input type="text" class="in in_text_b statistic_in" id="start_date">
                                    <input type="text" class="in in_text_b statistic_in" id="start_time">
                                    ~                                   
                                    <input type="text" class="in in_text_b statistic_in" id="end_date">
                                    <input type="text" class="in in_text_b statistic_in" id="end_time">
                                </td>
                                <th>조회 조건</th>
                                <td style="color:#000">
                                	<input type="text" plac class="in in_text_b serch_box_shot" readonly="readonly" placeholder="정류장 선택" id="input_stop_name">
                                	<input type="hidden" id="input_bit_id">
                                	<input type="hidden" id="input_stop_id">
                                	<a href="javascript:void(0);" class="serch_ch" id="btn_choice">선택</a>
                                	<a href="#" class="serch_clear5" id="btn_clear">clear</a>
                                	<!-- BIT 선택<input type="text" class="in in_text_b" name="ID">
                                	<input type="hidden" id="input_bit_id">
									<a href="javascript:void(0);" class="serch_ch" id="btn_choice">선택</a> -->
	                                <label><input type="checkbox" name="check" class="check statistic_check" id="check_all">전체지점</label>
	                                <span class="an_ser">범위 
	                                <input type="number" class="in in_text_b statistic_in4 input_range" id="input_start_range" value=1 min=1 max=10>
	                                 ~ 
	                               	<input type="number" class="in in_text_b statistic_in4 input_range" id="input_end_range" value=10 min=1 max=10></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="sistem_conbody">
                    <p class="serch_number serch_number_left">검색 결과 <span id="list_count">2</span>건</p>
                    <p class="ex_right">* 지점을 더블 클릭하면 상세 신뢰도 정보를 볼 수 있습니다.</p>
                    <div class="subcon_con3">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="arrival_trust_list"></table>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
        </div>
        <!--내용끝-->
        <jsp:include page="../comm/pop_choice.jsp"/>
</body>
</html>
