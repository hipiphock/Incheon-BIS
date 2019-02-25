<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 시나리오 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v511.js"></script>
<body>
	<jsp:include page="pop_upload.jsp" />
	<jsp:include page="pop_text.jsp" />
	<div class="" id="pop_mng_scene">
        <div class="sina_wrap pop">
            <div class="pop_title2">
                <h2>시나리오 관리</h2>
            </div>
            <div id="container" class="pop_conbody2 sina_pop"> 
                <!--왼쪽시작-->
                <div class="sina_left1">
                    <div class="layer_title">
                        <h3>시나리오 목록</h3>
                    </div>
                    <!--왼쪽위 작은버튼
                    <div class="pop_left_btn">
                        <ul>
                            <li><a href="javascript:void(0)" id="pop_add_button" class="s_btn bit_pop2_btn"><img style="margin-top: -3px;" src="./images/icon_plus.png">추가</a></li>
                          	<li><a href="javascript:void(0)" id="pop_save_button" class="s_btn bit_pop2_btn">저장</a></li>
                            
                            <li><a href="javascript:void(0)" id="pop_delete_button" class="s_btn bit_pop2_btn">삭제</a></li>
                        </ul>
                    </div>
                    	왼쪽위작은버튼끝-->
                    <select class="sina_select" id="select_servertpcd">
               	 		<option value="120">신규제공서버</option>
<!--                                 			<option value="121">인천제공서버</option> -->
<!--                                 			<option value="122">확대제공서버</option> -->
               			<option value="123">광역제공서버</option>
<!--                                 			<option value="124">강화제공서버</option> -->
                    </select>
                    <div class="sina_ch">
                        <div class="main_chart pop_left_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                            <table id="pop_scenario_list"></table>
                        </div>
                    </div>
                    <!-- 시나리오목록 버튼 -->
                    <div class="sina_bottom_btn1">
                    	<ul>
                    		<li><a href="javascript:void(0)" id="pop_add_button"><img src="./images/icon_plus.png" alt="">추가</a></li>
                    		<li><a href="javascript:void(0)" id="pop_save_button">저장</a></li>
                    		<li><a href="javascript:void(0)" id="pop_delete_button">삭제</a></li>
                    	</ul>
                    </div>
                </div>   
                <!--왼쪽끝-->
                <!--가운데시작-->
                <div class="sina_left2">
                    <div class="layer_title">
                        <h3>시나리오 상세항목</h3>
                    </div>
                    <p class="sina_pop_title">선택한 노선 ID명이 나옵니다</p>
                    <div class="btn_box6">
                    	<ul>
							<li><a id="btn_up" class="s_btn sina_btn btnimg2" style="border-right:none;" href="javascript:void(0);"><img style="margin-left: 2px;" src="./images/arow_top.png"></a></li>
                            <li><a id="btn_down"class="s_btn sina_btn btnimg2" style="border-right:none;" href="javascript:void(0);"><img style="margin-left: 2px;" src="./images/arow_bottom.png"></a></li>
                            <li><a id="btn_del" class="s_btn sina_btn btnimg2" href="javascript:void(0);">선택삭제</a></li>
						</ul>
                    </div>
                    <div class="sina_ch">
                        <div class="main_chart pop_middle_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        <table id="pop_scenario_detail_list"></table>
                        </div>
                    </div>
                     <!-- 상세항목 버튼 -->
                    <div class="subcon2_right_btn">
                    	<ul class="con2_r">
                    		<li><a id="btn_save" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                    		<li><a id="btn_cancel" href="javascript:void(0);"><img src="./images/close_black.png">취소</a></li>
                    	</ul>
                    </div>
                </div> 
                <!--가운데끝-->
                <!--오른쪽시작-->
                <div class="sina_right">
                    <ul class="nav_percent3 nav-pills_percent">
                        <li class="active"><a href="#si_tab1" data-toggle="tab">이미지 자료</a></li>
                        <!-- <li class=""><a href="#si_tab2" data-toggle="tab">영상 자료</a></li>
                        <li class=""><a href="#si_tab3" data-toggle="tab">홍보 메세지</a></li> -->
                    </ul> 
                    <!--탭컨텐츠시작-->                      
				    <div class="tab-content_percent">
                        <!--이미지자료 시작-->
                        <div class="tab-pane active" id="si_tab1">
                            <div class="sina_pop3_img">
                            	<img id="scenario_img" style="height: 200px; max-width: 380px; display: block; margin-left: auto; margin-right: auto;">
                            </div>
                            <div class="sina_pop3_two">
                                 <p class="sina_pop_arow"><a href="javascript:void(0);"><img src="./images/si_btn_arow.png"></a></p>
                                <div class="btn_box6">
                                    <ul>
                                        <li><a class="s_btn sina_btn add" style="border-right:none;" href="javascript:void(0);"><img style="margin-top: -3px;" src="./images/icon_plus.png">추가</a></li>
                                        <li><a class="s_btn sina_btn notUse" style="border-right:none;" href="javascript:void(0);">사용안함</a></li>
                                        <li><a class="s_btn sina_btn refresh" href="javascript:void(0);">새로고침</a></li>
                                    </ul>
                                </div>
                                <div class="sina_ch2">
                                    <div class="main_chart pop_right_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                    	<table id="pop_image_list"></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--영상자료 시작-->
                        <div class="tab-pane" id="si_tab2">
                            <div class="sina_pop3_img">
                            	<video id="scenario_video" width="381" height="200" controls>
                            		<source id="scenario_video_src" type="video/avi" src=""/>
                            	</video>
                            </div>
                            <div class="sina_pop3_two">
                                 <p class="sina_pop_arow"><a href="javascript:void(0);"><img src="./images/si_btn_arow.png"></a></p>
                                <div class="btn_box6">
                                    <ul>
                                        <li><a class="s_btn sina_btn add" style="border-right:none;" href="javascript:void(0);"><img style="margin-top: -3px;" src="./images/icon_plus.png">추가</a></li>
                                        <li><a class="s_btn sina_btn notUse" style="border-right:none;" href="javascript:void(0);">사용안함</a></li>
                                        <li><a class="s_btn sina_btn refresh" href="javascript:void(0);">새로고침</a></li>
                                    </ul>
                                </div>
                                <div class="sina_ch2">
                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
										<table id="pop_video_list"></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--홍보메세지 시작-->
                        <div class="tab-pane" id="si_tab3">
                            <div class="sina_pop3_img">홍보메세지 나올 곳</div>
                            <div class="sina_pop3_two">
                                 <p class="sina_pop_arow"><a href="javascript:void(0);"><img src="./images/si_btn_arow.png"></a></p>
                                <div class="btn_box6">
                                    <ul>
                                        <li><a class="s_btn sina_btn add" style="border-right:none;" href="javascript:void(0);"><img style="margin-top: -3px;" src="./images/icon_plus.png">추가</a></li>
                                        <li><a class="s_btn sina_btn notUse" style="border-right:none;" href="javascript:void(0);">사용안함</a></li>
                                        <li><a class="s_btn sina_btn refresh" href="javascript:void(0);">새로고침</a></li>
                                    </ul>
                                </div>
                                <div class="sina_ch2">
                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                    	<table id="pop_promotion_list"></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <!--오른쪽끝-->

                <!--아래 버튼 시작
                <div class="pop_bottom_btn2">
                    <ul>
                        <li id="btn_save" class="bottom_save"><a href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                        <li id="btn_cancel" class="bottom_close"><a href="javascript:void(0);"><img src="./images/close_black.png">취소</a></li>
                    </ul>
                </div>
   				아래 버튼 끝-->
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
