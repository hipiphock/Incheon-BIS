<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>시스템운영_코드관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v02/v202.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-202">
	<jsp:include page="pop_category.jsp" />
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>시스템운영 - 코드관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con"  id="container">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a href="javascript:void(0);" id="btn_excel"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버끝-->
                <!--탭시작-->                                                
					<div class="pop-body">	
                        <div class="sub_body2">
						  <ul class="nav_pic2 nav-pills_pic">
                                <!-- <li class=""><a href="#tab1" data-toggle="tab" class="icon3">파라미터 관리</a></li> -->
                                <li class="active"><a href="#tab2" data-toggle="tab" class="icon1">코드 관리</a></li>                               
						  </ul> 
                        </div>
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content_pic2">
                            <!--파라미터관리 시작-->
                            <!-- <div class="tab-pane" id="tab1">
                                <div class="sub_tab_con_body">
                                    <div class="subcon_con2">
                                        <div class="subcon2_left">왼쪽
                                            <div class="subcon_left_chart_body2">
                                                <div class="sub_layer_title">
                                                    <h3>파라미터 그룹</h3>
                                                </div>
                                                <div class="sub_chart_body" style="top:0;">
                                                    <div class="main_chart"><!--.main_chart 사이즈 [ width: 100%; height:100%;]
                                                    	<table id="param_grp_list"></table>
                                                    </div>
                                                </div>
                                            </div>왼쪽 표 
                                        </div>
                                        <div class="subcon2_right">오른쪽
                                            <div class="subcon_right_chart_body">
                                                <div class="main_chart"><!--.main_chart 사이즈 [ width: 100%; height:100%;]
                                                    <table id="param_list"></table>
                                                </div>
                                            </div>
                                            <div class="subcon2_right_btn">왼쪽아래 버튼
                                                <ul class="con2_l">
                                                    <li><a id="btn1_mod" href="javascript:void(0);">수정</a></li>
                                                </ul>
                                                <ul class="con2_r">
                                                    <li><a id="btn1_save" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                                                    <li><a id="btn1_cancel" href="javascript:void(0);"><img src="./images/close_black.png">취소</a></li>
                                                </ul>
                                            </div>   
                                        </div>                                        
                                    </div>
                                </div>
                            </div> -->
                            <!--파라미터관리 끝-->
                            <!--코드관리 시작-->
                            <div class="tab-pane active" id="tab2">
                                <div class="sub_tab_con_body"> 
                                    <!--top-->
                                    <div class="subcon_top2"> 
                                        <input type="text" class="subtop_in_text" id="input_searchWord" placeholder="테이블명, 필드명">
                                        <span><img id="btn_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                    </div>
                                    <a id="btn_clear" href="javascript:void(0);" class="serch_clear2">clear</a>
                                    	<!-- <div class="serch_check"><label><input id="check_detail" type="checkbox" name="check" class="check">결과검색</label></div> -->
                                    <!--top 끝-->
                                    <div class="subcon_con">
                                        <div class="subcon2_left"><!--왼쪽-->
                                            <div class="subcon_left_chart_body">
                                                <!-- <div class="sub_layer_title">
                                                    <h3>파라미터 그룹</h3>
                                                </div> -->
                                                <div class="sub_chart_body div_code" style="top:0;">
                                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    	<table id="code_cate_list"></table>
                                                    </div>
                                                </div>
                                            </div><!--왼쪽 표--> 
                                            
                                            <div class="subcon_left_btn left_btn_p"><!--왼쪽 아래 버튼-->
                                                <ul>
                                                    <li><a id="btn1_mod"  href="javascript:void(0);">수정</a></li>                                                    
                                                    <li><a id="btn1_add" class="disabled" href="javascript:void(0);">추가</a></li>
                                                    <!-- <li><a id="btn1_del" class="disabled" href="javascript:void(0);">삭제</a></li> -->
                                                    <li><a id="btn1_save" class="disabled" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                                                    <li><a id="btn1_cancel" class="disabled" href="javascript:void(0);"><img src="./images/close_black.png">취소</a></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        <div class="subcon2_right"><!--오른쪽-->
                                            <div class="subcon_right_chart_body">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="code_list"></table>
                                                </div>
                                            </div>
                                            <div class="subcon2_right_btn"><!--왼쪽아래 버튼-->
                                                <ul class="con2_l">
                                                    <li><a id="btn2_mod"  href="javascript:void(0);">수정</a></li>                                                    
                                                    <li><a id="btn2_add" class="disabled" href="javascript:void(0);">추가</a></li>
                                                    <!-- <li><a id="btn2_del" class="disabled" href="javascript:void(0);">삭제</a></li> -->
                                                </ul>
                                                <ul class="con2_r">
                                                    <li><a id="btn2_save" class="disabled" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                                                    <li><a id="btn2_cancel" class="disabled" href="javascript:void(0);"><img src="./images/close_black.png">취소</a></li>
                                                </ul>
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
        <!--내용끝-->
        
</body>
</html>