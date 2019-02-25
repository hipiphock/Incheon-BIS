<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 장애 등록/이력조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v513.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-509">
		<jsp:include page="../comm/pop_choice.jsp"/>
		<jsp:include page="../view05/pop_fail_add.jsp"/>
	
	   <%-- <jsp:include page="v509.jsp"/>	
	   <jsp:include page="v508.jsp"/>	
	   <jsp:include page="v510.jsp"/> 	   
	   <jsp:include page="pop_sel_stop.jsp"/>   
	   <jsp:include page="pop_addBit.jsp"/>		--%>   

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BIT관리 - BIT 장애 등록/이력조회</h2>
            </div>
            <div id="container" class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <!-- <li><a id="btn_bitGrp" href="javascript:void(0);"><img src="./images/btn_big_bit1.png"><p>BIT그룹</p></a></li>
                        <li><a id="bit_business" href="javascript:void(0);"><img src="./images/btn_big_bit2.png"><p>사업정보</p></a></li>
                        <li><a id="btn_manufactuer" href="javascript:void(0);"><img src="./images/btn_big_bit3.png"><p> 제조사 </p></a></li> -->
                        <li><a id="btn_excel_download" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                    <div class="subcon_con2">
                         <div class="bit_left" style="width: 70%"><!--왼쪽-->
                             <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                 <tr>
                                 	<th>조회기간</th>
                                   	<td>
                                     	<input type="text" class="in in_text_b statistic_in" id="st_date" style="width:35%;">
	                                    ~
	                                    <input type="text" class="in in_text_b statistic_in" id="ed_date" style="width:35%;">
                               		</td>
                                    <th>조회 대상<br>(BIT지점)</th>
                                	<td style="width:238px">
                                		<input type="text" class="in in_text_b serch_box_w" id="input_stop_name" readonly="readonly" style="width:100px;">
	                                	<input type="hidden" id="input_bit_id">
	                                	<a id="btn_choice" href="javascript:void(0);" class="serch_ch">선택</a>
	                                	<a id="btn_clear" href="javascript:void(0);" class="serch_clear5">clear</a>
	                                    <!-- <div class="serch_check5"><label><input type="checkbox" name="check" class="check" id="check_detail">결과검색</label></div> -->
	                                </td>
	                                <th>처리유무</th>
	                                <td style="width: 100px;"><select id="sel_treatyn" class="in in_list bit_list1" name="text">
                                         <option value="">전체</option>
                                         <option value="0">미처리</option>
                                         <option value="1">처리</option>
                                         </select>
                                     </td>
	                                <td style="width:100px; padding: 0;">
	                                	<button class="btn" id="btn_search"><img src="./images/serch_gray.png">검색</button>  
	                                </td>
                                 </tr>
                                 <!-- <tr>
                                     <th>제조사</th>
                                     <td><select id="sel_bit_company" class="in in_list bit_list1" name="text">
                                         <option value="01">리스트1</option>
                                         <option value="02">리스트2</option>
                                         <option value="03">리스트3</option>
                                         </select>
                                     </td>
                                     <th>사업</th>
                                     <td><select id="sel_bit_business" class="in in_list bit_list1" name="text">
                                             <option value="01">리스트1</option>
                                             <option value="02">리스트2</option>
                                             <option value="03">리스트3</option>
                                         </select>
                                     </td>
                                 </tr> -->
                             </table>
                                          
                             <div class="bit_left_chart_body" style="top:45px;">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="bit_fail_list"></table>
                                                </div>
                             </div><!--왼쪽 표-->                                          
                        </div>
                        <div class="bit_right" style="width: 30%; left: 70%;"><!--오른쪽-->
                            <div class="bit_right_chart_body">                                              
                                <!--탭시작 -->                                               
                                <div class="pop-body">	
                                	<div class="sub_layer_title">
                                    	<h3>BIT 장애 등록 및 처리</h3>
                                   	</div>
                                 	<table class="chart2 v513_height"  border="0" cellspacing="0" cellpadding="0">
	                                    <tr>
	                                        <th>시설물 ID</th>
	                                        <td><input id="input_facilid" type="text" class="in in_text bit_in" name="ID" disabled="disabled">
	                                        <a id="btn_choice2" href="javascript:void(0);" class="serch_ch" style="display:none">선택</a></td>
	                                    </tr>
	                                    <!-- <tr>
	                                        <th>시설물 유형</th>
	                                        <td><input id="input_faciltpnm" type="text" class="in in_text bit_in" name="ID" disabled="disabled"></td>
	                                    </tr> -->
	                                    <tr>
	                                        <th>설치 위치</th>
	                                        <td><input id="input_bstopnm" type="text" class="in in_text bit_in" name="ID" disabled="disabled"></td>
	                                    </tr>
	                                    <tr>
	                                        <th>등록 일시</th>
	                                        <td><input id="input_regdt" type="text" class="in in_text bit_in" name="ID" disabled="disabled"></td>
	                                    </tr>
	                                    <tr>
	                                        <th>장애 발생일시</th>
	                                        <td><input id="input_fail_occurdt" type="text" class="in in_text bit_in" name="ID" disabled="disabled"></td>
	                                    </tr>
	                                    <tr>
	                                        <th>장애 유형</th>
	                                        <td><input id="input_failtpnm" type="text" class="in in_text bit_in" name="ID" disabled="disabled"></td>
	                                    </tr>
	                                    <tr>
	                                        <th>장애 상세</th>
	                                        <td><input id="input_fail_detail" type="text" class="in in_text bit_in" name="ID" disabled="disabled"></td>
	                                    </tr>
	                                    <tr>
	                                        <th>장애 처리일시</th>
	                                        <td>
	                                        <input type="text" class="in in_text_b statistic_in" id="input_fail_treatdate" style="width: 80px;">
	                                        <input type="text" class="in in_text_b statistic_in" id="input_fail_treattime" style="width: 80px;">
	                                        </td>
	                                    </tr>
	                                    <tr>
	                                        <th>장애 처리유형</th>
	                                        <td><select id="select_failtreatcd" class="in in_list bit_list1" name="text">
	                                        <option value="1">처리</option>
                                         		</select>
                                         	</td>
	                                    </tr>
	                                    <tr>
	                                        <th>처리 상세내역</th>
	                                        <td><input id="input_treat_detail" type="text" class="in in_text bit_in" name="ID"></td>
	                                    </tr>
	                                    <tr>
	                                        <th>장애 처리자</th>
	                                        <td><input id="input_treat_userid" type="text" class="in in_text bit_in" name="ID"></td>
	                                    </tr>
                                        <tr>
	                                        <th>처리 여부</th>
	                                        <td><select id="select_treat_gubun" class="in in_list bit_list1" name="text">
	                                        	<option value="0">미처리</option>
                                         		<option value="1">처리</option>
                                         		</select>
                                         	</td>
	                                    </tr> 
                                     </table>
	                              </div>               
	                      	</div>
	                      	<div class="v513_wrap">
                                  	<!-- 버튼 -->
                                  	<div class="v513_btn">
                                  		<input type="file" id="input_img" accept=".jpg, .png, .jpeg" style="display: none;">
                                  		<ul>
                                  			<li><a id="btn_add_img" href="javascript:void(0);">추가/수정</a></li>
                                  			<li><a id="btn_del_img" href="javascript:void(0);">삭제</a></li>
                                  			<li><a id="btn_save_img" href="javascript:void(0);">저장</a></li>
                                  		</ul>
                                  	</div>
                                 	<div class="v513_img">
                                 		<img src="./images/no-img.png" alt="이미지를 등록해 주세요" id="fail_img">
                                 	</div>
                           </div> 
                           <!--왼쪽아래 버튼 시작-->
                           <div class="sms_btn1"><!--왼쪽아래 버튼-->
                               <ul class="con2_l">
                                   <li><a id="btn_add" href="javascript:void(0);"><img src="./images/icon_plus.png">추가</a></li>
                                   <li><a id="btn_mod" href="javascript:void(0);">수정</a></li>
                               </ul>
                               <ul class="con2_r">
                                   <li><a id="btn_save" href="javascript:void(0);" class="disabled"><img src="./images/icon_ok.png">저장</a></li>
                                   <li><a id="btn_cancel" href="javascript:void(0);" class="disabled"><img src="./images/close_black.png">취소</a></li>
                               </ul>
                           </div>  
                            <!--왼쪽아래 버튼 끝-->
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
