<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>메시지관리</title>


<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v518.js"></script>


</head>

<body>
	<input type="hidden" id="view_attr" value="v601">

       <div class="big_wrap pop">
		<div class="pop_title2">
			<h2>문자메세지 전송</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel_download" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="bus306_serch_top">
                            <tr>
                            	<th>서버</th>
                                <td>
                                	<select class="in bit_list3 text144" name="구분" id="select_servertp">
                                    	<option value="121">인천제공서버</option>
                                    	<option value="125">인천제공서버2</option>
                                        <option value="122">인천확대서버</option>
                                  	</select>
                                </td> 
                                <th>구분</th>
                                <td>
                                	<select class="in bit_list3 text144" name="구분" id="select1">
                                    	<option value="0">노선별</option>
                                        <option value="1">도로별</option>
                                  	</select>
                                </td> 
                                <th id="type_text">노선명</th>
                                <td>
                                	<select class="in bit_list3 text144" name="노선명" id="select2">
                                  	</select>
                                </td>
                                <th>안내기유형</th>
                                <td>
                                	<select class="in bit_list3 text144" name="안내기유형" id="select3">
                                  	</select>
                                </td>
                                <th>정류소명</th>
                                <td>
                                	<select class="in bit_list3 text144" name="정류소명" id="select4">
                                  	</select>
                                </td>                                                  
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
                    <p class="serch_number serch_number_left">검색 결과 <span id="list_count1"></span>건</p>
                    <div class="subcon_con3">
                    	<div class="sms1">
                    		<table id="bit_sms_list"></table>
                    	</div>
                    	<div class="sms2">
                    		<div class="sms2_con_left">
                    			<p class="sms2_serch_number newSubTitle">메세지폼 <span id="list_count2"></span>건</p>
                    			<div class="sms2_chart">
                    				<table id="form_list"></table>
                    			</div>
                    		</div>
                    		<div class="sms2_con_right">
                    			<div class="sms2_right1">
                    			<div class="sms2_con_right_left">
                    				<div class="r_wrap">
                    					<div class="r_img1 r_img1_bg3"><!--3단10열일 때 : .r_img1_bg3 , 5단10열일 때 .r_img1_bg5-->
                    					<!-- 위 이미지 들어갈 곳 -->
                    					</div>
                    				</div>
                    				<div class="r2_btn">
                    					<ul>
                    						<li><a href="javascript:void(0);" id="btn_obj_add"><img src="./images/icon_plus.png">객체추가</a></li>
                    						<li><a href="javascript:void(0);" id="btn_obj_del">객체삭제</a></li>
                    						<li><a href="javascript:void(0);" id="btn_obj_last">마지막줄 추가</a></li>
                    					</ul>
                    				</div>
                    			</div>
                    				<div class="smsr_conten">
                    					<p class="smsr_title">- 안내기 유형 선택</p>
                    					<ul id="bit_kind">
                    						<li><button class="bittp click" id="bittp_3_10">3단10열</button></li><!-- 선택 되어있는 버튼에  .click 추가 -->
                    						<li><button class="bittp" id="bittp_5_10">5단10열</button></li>
                    						<li><button class="bittp" id="bittp_LCD">LCD</button></li>
                    					</ul>
                    					<p class="smsr_title">- 폰트 이름 선택</p>
                    					<ul id="font_kind">
                    						<li><button class="fontnm" id="fontnm_Gulim">굴림체</button></li><!-- 선택 되어있는 버튼에  .click 추가 -->
                    						<li><button class="fontnm click" id="fontnm_Dotum">돋움체</button></li>
                    						<li><button class="fontnm" id="fontnm_Batang">바탕체</button></li>
                    					</ul>
                    					<p class="smsr_title">- 폰트 크기 선택</p>
                    					<ul id="font_size">
                    						<li><button class="fontsize" id="fontsize_32px">16</button></li><!-- 선택 되어있는 버튼에  .click 추가 -->
                    						<li><button class="fontsize click" id="fontsize_48px">24</button></li>
                    						<li><button class="fontsize" id="fontsize_64px">32</button></li>
                    					</ul>
                    					<p class="smsr_title">- 폰트 색상 선택</p>
                    					<ul id="font_color">
                    						<li class="red"><button class="fontcolor" id="fontcolor_red">적색</button></li><!-- 선택 되어있는 버튼에  .click 추가 -->
                    						<li class="green"><button class="fontcolor" id="fontcolor_green">녹색</button></li>
                    						<li class="yellow"><button class="fontcolor click" id="fontcolor_yellow">황색</button></li>
                    					</ul>
                    					<p class="smsr_title2">※ 전송 전 확인사항</p>
                    					<ul>
                    						<li><button class="dispconfig" id="btn_dispconfig_0">전체교통</button></li><!-- 선택 되어있는 버튼에  .click 추가 -->
                    						<li><button class="dispconfig click" id="btn_dispconfig_1">1단홍보</button></li>
                    						<li><button class="dispconfig" id="btn_dispconfig_2">전체홍보</button></li>
                    					</ul>
                    					<p class="way">
                    					 	<span>표출방법</span>
                    						: <select class="in list170" name="표출방법" id="select_dispmthdcd">
                                  			</select>
                                  	   </p>
                                  	   <p class="way">
                                  	   		<span>정렬</span>
                    						: <select class="in list170" name="표출효과" id="select_dispeffectcd">
                    							<option value="0">없음</option>
                    							<option value="1">Centering</option>
                    							
                                  			</select>
                                  	   </p>
                                  	   <p class="way">
                                  	   		<span>표시페이지 수 </span>
                    						: <input id="input_pageCnt" type="number" min="0" class="in text80" readonly="readonly" >
                                  	   </p>
                    				</div>
                    			</div>
                           </div>  	
                    	</div>
                    	<div class="subcon2_right_btn"><!--왼쪽아래 버튼-->
                                    <div class="bit_sms_btn_left">
                                    	<p class="check"><input type="checkbox"><span style="line-height:26px;">셀프 메시지 여부</span></p>
                                    	<p><span>폼 ID</span><input type="text" id="input_formid" disabled="disabled" class="text100"></p>
                                    	<p><span>폼 이름</span><input type="text" id="input_formnm" class="text200"></p>
                                    </div>
                                	<ul class="con2_r bit_sms_btn_right">
                                		<li><a id="btn_init" href="javascript:void(0);"><img src="./images/icon_re3.png">초기화</a></li>
                                    	<li><a id="btn_save" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                                        <li><a id="btn_delete" href="javascript:void(0);"><img src="./images/close_black.png">삭제</a></li>
                                        <li><a id="btn_send_ctrl" href="javascript:void(0);">전송</a></li>
                                        <!-- <li><a id="btn_show_result" href="javascript:void(0);">전송결과</a></li> -->
                                    </ul>
                                </div> 
                    </div>
                  </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
</body>
</html>
