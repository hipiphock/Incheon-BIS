<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 충격감지 이력</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v06/v603.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>이력/통계 - BIT 충격감지 이력</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a href="javascript:void(0);" id="btn_excel" ><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"><p>새로고침</a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody_ch">

                <!--내용시작-->
                <div class="statistic3_conbody_ch">
                    <div class="sub_body">
						  <ul class="nav_pic2 nav-pills_pic">
                                <li class="active" id="tab_left"><a href="#tab1" data-toggle="tab" class="icon1">조회결과</a></li>
                                <!-- <li class="" id="tab_right"><a href="#tab2" data-toggle="tab" class="icon1">BIT목록</a></li> -->
						  </ul> 
                    </div>
                    <!--탭컨텐츠시작-->                      
                    <div class="tab-content_pic">
                            <!--조회결과 시작-->
                            <div class="tab-pane active" id="tab1">
                            	<!--1탭검색시작-->   
                            	<div class="ch_left_body">  
                					<div class="two_serch_left_ch">
                        			<table class="bit_ie"  border="0" cellspacing="0" cellpadding="0">
                            			<tr>
                                			<th>조회 기간</th>
                                			<td>
                                    		<!-- <select class="in_h in_list bit_list1" name="text">
                                        <option value="01">2016-07-19</option>
                                        <option value="02">리스트1</option>
                                        <option value="03">리스트2</option>
                                    		</select> -->
                                    		<input type="text" class="in_h in_text_b ch_in" id="start_date">
                                    		<input type="text" class="in_h in_text_b ch_in" id="start_time">
                                    		~
                                    <!-- <select class="in in_list2 statistic_day_list" name="text">
                                        <option value="01">2016-07-19</option>
                                        <option value="02">리스트1</option>
                                        <option value="03">리스트2</option>
                                    </select> -->
                                    <input type="text" class="in_h in_text_b ch_in" id="end_date">
                                    <input type="text" class="in_h in_text_b ch_in" id="end_time">
                                			</td>
                            			</tr>
                            			<tr>
                            	<th>조회 대상<br>(BIT지점)</th>
                                <td>
                                	<input type="text" class="in_h in_text_b serch_box_bit list_265" readonly="readonly" id="input_stop_name">
                                	<input type="hidden" id="input_bit_id">
                                	<a href="javascript:void(0);" class="serch_ch" id="btn_choice">선택</a>
                                	<a href="#" class="serch_clear5" id="btn_clear_leftTab">clear</a>
                                    <div class="serch_check5">
                                    	<label><input type="checkbox" name="check_all" class="check" id="check_all">전체지점</label>
                                    	<label><input type="checkbox" name="check_detail_leftTab" class="check statistic_check" id="check_detail_leftTab">결과검색</label>
                                    </div>
                                </td>
                            </tr>
                        			</table>
                    				</div>
                    			<button class="bit_603_btn" id="btn_search_leftTab"><img src="./images/serch_gray.png">검색</button>
                    			</div>         
								<!--1탭검색끝--> 
                            	<!-- 조회결과표 -->
                                <div class="subcon_con4">
                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                        <table id="shock_list"></table>
                                    </div>
                                </div>
                            </div>
                        	<!--목록 시작-->
                            <div class="tab-pane" id="tab2">
                            	<!--2탭검색시작-->
                				<div class="ch_left_body">
                					<table class="bit_ie"  border="0" cellspacing="0" cellpadding="0">
                                		<tr>
                                    <th>그룹</th>
                                    <td><select class="in_h in_list bit_list1" name="select_group" id="sel_bit_category">
                                        </select></td>
                                    <th>BIT 종류</th>
                                    <td><select class="in_h in_list bit_list1" name="select_group" id="sel_bit_type">
                                        </select>
                                    </td>
                                    <th>사업구분</th>
                                     <td><select class="in_h in_list bit_list1" name="select_group" id="sel_bit_business">
                                           	</select>
                                    </td>
                                	</tr>
                                	<tr>
                                    <th>검색</th>
                                    <td colspan="5">
                                        <div class="subcon_top4">
                                            <input type="text" class="subtop_in_text" name="ID" placeholder="BIT ID, 설치 지점명, 모바일ID 입력" id="text_search_rightTab">
                                            <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼" id="btn_search_rightTab"></span>
                                        </div>
                                        <a href="#" class="serch_clear3" id="btn_clear_rightTab">clear</a>
                                        <div class="serch_check2"><label><input type="checkbox" name="check" class="check" id="check_detail_rightTab">결과검색</label></div>
                                    </td>
                                </tr>
                            	</table>
                    			</div>         
								<!--2탭검색끝--> 
                            	<!-- 목록표 -->
                                <div class="subcon_con4">
                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                        <table id="bit_list"></table>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                </div>
                <div class="statistic3_con_right_ch">
                    <p class="statistic3_con_click_title"><span id="span_bit_id">BIT ID []</span> - <span id="span_bit_name">선택한 BIT 지점명이 나옵니다</span></p>
                    <div class="subcon_con_statistic3">       
                        <div class="sub_layer_title">
                            <h3>충격 감지 이미지</h3>
                        </div>
                        <div class="statistic3_vidio_list">
                            <div class="main_chart_img" id="image_wrap"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                            </div>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
                </div>
                </div>
            </div>
             <!--내용 레이아웃끝-->  
             
             </div> 
        <!--내용끝-->
        <jsp:include page="../comm/pop_choice.jsp"/>
</body>
</html>
