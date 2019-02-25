<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>운영정보관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v10/v1001.js"></script>

</head>
       <%-- <jsp:include page="pop_add_grade.jsp" />
       <jsp:include page="pop_mod_grade.jsp" /> --%>
<body>    
	<div class="big_wrap pop">
		<input type="hidden" id="view_attr" value="BMS-V-201">
		
       	<jsp:include page="pop_grade.jsp" />
		<jsp:include page="pop_user.jsp" />
       	
       	<div class="pop_title2">
       		<h2>사용자관리 - 사용자정보/권한 관리</h2>
  		</div>
        
        <div class="pop_conbody2 bit_pop_con" id="container"> 
        	<!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--탭시작-->                                                
				<div class="pop-body">	
                	<div class="sub_body">
						<ul class="nav_pic2 nav-pills_pic">
                            <li class="active"><a href="#tab1" data-toggle="tab" class="icon1">계정 관리</a></li>
                            <li class=""><a href="#tab2" data-toggle="tab" class="icon2">메뉴 접근 권한관리</a></li>
						</ul> 
                 	</div>
                    <!--탭컨텐츠시작-->                      
					<div class="tab-content_pic">
                    	<!--계정관리 시작-->
                        <div class="tab-pane active" id="tab1">
                        	<div class="sub_tab_con_body">
                            	<!--top-->
                                <div class="subcon_top">표시설정 
                                	<select class="subtop_in subtop_in_list" id="select_use">
                                    	<option value="1">사용 중인 계정</option>
                                        <option value="0">사용 안 하는 계정</option>
                                        <option value="">모두 표시</option>
                                  	</select>
                              	</div>
                                <!--top 끝-->
                                <div class="subcon_con">
                                	<div class="subcon_left sis_left1"><!--왼쪽-->
                                    	<div class="subcon_left_chart_body">
                                        	<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                            	<table id="user_list"></table>
                                            </div>
                                        </div><!--왼쪽 표-->
                                        <div class="subcon_left_btn"><!--왼쪽아래 버튼-->
                                        	<ul>
                                            	<li><a href="javascript:void(0);" id="btn1_new"><img src="./images/icon_plus.png">계정추가</a></li>
                                                <li><a href="javascript:void(0);" id="btn1_mod">수정</a></li>
                                                <li><a href="javascript:void(0);" id="btn1_del">삭제</a></li>
                                                <li><a href="javascript:void(0);" id="btn1_disable">사용중지</a></li>
                                                <li><a href="javascript:void(0);" id="btn1_refresh"><img src="./images/icon_re2.png">새로고침</a></li>
                                         	</ul>
                                      	</div> 
                                        <div class="subcon_right_img"><!--아래 접은 이미지-->
                                        	<img src="./images/right_paper.png">
                                        </div>   
                                	</div>
                                    <div class="subcon_right sis_right1"><!--오른쪽-->
                                    	<table class="chart3"  border="0" cellspacing="0" cellpadding="0">
                                        	<tr>
                                            	<th>사용자 ID</th>
                                               	<td><input type="text" class="in in_text manage_text1" id="input_userid" disabled="disabled"></td>
                                            </tr>
                                            <tr>
                                            	<th>사용자 명</th>
                                                <td><input type="text" class="in in_text manage_text1" id="input_usernm"></td>
                                            </tr>
                                            <tr>
                                            	<th>등급</th>
                                                <td>
                                                	<select class="in in_list manage_list2" id="select_authid">
                                                    </select>
                                                </td>
                                          	</tr>
                                            <tr>
                                                <th>사용자 유형</th>
                                                <td><input type="text" class="in in_text manage_text1" id="input_cdnm" disabled="disabled"></td>
                                          	</tr>
                                          	 <tr>
                                                <th>버스회사명</th>
                                                <td><input type="text" class="in in_text manage_text1" id="input_compnm" disabled="disabled"></td>
                                            </tr>
                                            <tr>
                                            	<th>기관명</th>
                                                <td><input type="text" class="in in_text manage_text1" id="input_orgnm" disabled="disabled"></td>
                                          	</tr>
                                            <tr>
                                                <th>부서명</th>
                                                <td><input type="text" class="in in_text manage_text1" id="input_deptnm" disabled="disabled"></td>
                                            </tr>
                                            <tr>
                                                <th>직급명</th>
                                                <td><input type="text" class="in in_text manage_text1" id="input_posnnm" disabled="disabled"></td>
                                            </tr>
                                            <tr>
                                         		<th>사용여부</th>
                                                <td>
                                                	<select class="in in_list manage_list2" id="select_useyn" disabled="disabled">
                                                    	<option value="1">사용</option>
                                                        <option value="0">미사용</option>
                                                   	</select>
                                              	</td>
                                        	</tr>
                                           
                                   		</table>
                                        <div>
                                        	<a class="m_btn manage_m_btn" href="javascript:void(0);" id="btn_change_pw"><img src="./images/btn_icon_pessword.png">비밀번호 변경</a>
                                        </div>
                                        <div class="subcon_right_btn"><!--오른쪽아래 버튼-->
                                            <ul>
                                                <li><a href="javascript:void(0);" id="btn1_save"><img src="./images/icon_ok.png">저장</a></li>
                                                <li><a href="javascript:void(0);" id="btn1_cancel"><img src="./images/close_black.png">취소</a></li>
                                            </ul>
                                        </div>   
                          			</div>
                        		</div>
                      		</div>
                     	</div>
                        <!--계정관리 끝-->
                        <!--접근권환관리 시작-->
                        <div class="tab-pane" id="tab2">
                       		<div class="sub_tab_con_body">
                            	<!--top-->
                                <div class="subcon_top"> 
                            		<p class="click_title">선택등급:<span class="grade"></span></p>
                              	</div>
                                <!--top 끝-->
                                <div class="subcon_con">
                                	<div class="subcon2_left sis_left"><!--왼쪽-->
                                		<div class="subcon_left_chart_body">
                                        	<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                            	<table id="rank_list"></table>
                                            </div>
                                      	</div><!--왼쪽 표-->
                                 		<div class="subcon2_left_btn"><!--왼쪽아래 버튼-->
                                            <ul>
                                                <li><a id="btn2_new"><img src="./images/icon_plus.png">추가</a></li>
                                                <li><a id="btn2_mod">수정</a></li>
                                                <li><a id="btn2_del">삭제</a></li>
                                            </ul>
                                        </div> 
                                 	</div>
                                    <div class="subcon2_right sis_right"><!--오른쪽-->
                                         <div class="subcon_right_chart_body">
                                             <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                               	<table id="menu_list"></table>
                                             </div>
                                         </div>
                                         <div class="subcon2_right_btn"><!--왼쪽아래 버튼-->
                                             <ul class="con2_r">
                                                 <li><a id="btn2_save" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                                                 <li><a id="btn2_cancel" href="javascript:void(0);"><img src="./images/close_black.png">취소</a></li>
                                             </ul>
                                         </div> 
                                         <div class="subcon_left_img"><!--아래 접은 이미지-->
                                             <img src="./images/left_paper.png">
                                         </div>   
                                     </div>
                              	</div>
                         	</div>
                    	</div>
                        <!--접근권한관리 끝-->
	        		</div>
                    <!--탭컨텐츠끝-->
				</div>
               	<!--탭끝-->
            </div>
            <!--내용 레이아웃끝-->
   		</div>
	</div>  
</body>
</html>