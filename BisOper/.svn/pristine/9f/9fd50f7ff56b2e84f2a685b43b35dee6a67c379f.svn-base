<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>SMS 알림 관리</title>
<link rel="stylesheet" type="text/css" href="./css/lib/jquery-ui.css"/>
<link rel="stylesheet" type="text/css" href="./css/lib/ui.jqgrid.css"/>

<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/lib/jquery.min.js"></script>
<script src="./js/lib/jquery-ui.js"></script>
<script src="./js/lib/jquery.jqGrid.min.js"></script>
<script src="./js/lib/jquery.jqGrid.src.js"></script>
<script src="./js/lib/amazonmenu.js"></script>
<script src="./js/lib/bootstrap.min.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>
<script src="./js/v02/v204.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v201">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>시스템 운영 - SMS 알림 관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--탭시작-->                                                
					<div class="pop-body">	
                        <div class="sub_body">
						<ul class="nav_pic2 nav-pills_pic">
                            <li class="active"><a href="#tab1" data-toggle="tab" class="icon4">연락처 관리</a></li>
                            <li class=""><a href="#tab2" data-toggle="tab" class="icon2">SMS전송 이력 조회</a></li>
						</ul> 
                        </div>
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content_pic">
                            <!--연락처관리 시작-->
                            <div class="tab-pane active" id="tab1">
                                <div class="sub_tab_con_body">
                                    <div class="sms_subcon_con_left"><!--왼쪽--> 
                                        <div class="subcon_left_chart_body">
                                                <div class="sub_layer_title">
                                                    <h3>연락처 목록</h3>
                                                </div>
                                                <div class="sms_left">
                                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    	<table id="tell_list"></table>
                                                    </div>
                                                </div>
                                        </div>    
                                        <div class="sms_btn1"><!--왼쪽아래 버튼-->
                                                <ul class="con2_l">
                                                    <li><a><img src="./images/icon_plus.png">추가</a></li>
                                                    <li><a>수정</a></li>
                                                    <li><a>삭제</a></li>
                                                </ul>
                                                <ul class="con2_r">
                                                    <li><a><img src="./images/icon_ok.png">저장</a></li>
                                                    <li><a><img src="./images/close_black.png">취소</a></li>
                                                </ul>
                                        </div>                                                                                 
                                    </div>
                                    <div class="sms_arrow_btn"><!--이동버튼--> 
                                        <button class="right"></button><!--활성상태--> 
                                        <button class="left_b"></button><!--비활성상태: 클래스명에 '_b'를 추가해주세요--> 
                                    </div>
                                    <div class="sms_subcon_con_right"><!--오른쪽--> 
                                        <div class="subcon_left_chart_body">
                                                <div class="sub_layer_title">
                                                    <h3>그룹목록</h3>
                                                </div>
                                                <div class="sms_right1">
                                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    	<table id="grp_list"></table>
                                                    </div>
                                                </div>
                                                <div class="sub_layer_title twodep">
                                                    <h3>선택한 그룹에 속한 연락처</h3>
                                                </div>
                                                <div class="sms_right2">
                                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    	<table id="sel_grp_tell_list"></table>
                                                    </div>
                                                </div>
                                        </div>    
                                        <div class="sms_btn2"><!--오른쪽아래 버튼-->
                                                <ul class="con2_l">
                                                    <li><a><img src="./images/icon_plus.png">그룹추가</a></li>
                                                    <li><a>선택그룹 삭제</a></li>
                                                </ul>
                                                <ul class="con2_r">
                                                    <li><a><img src="./images/icon_re2.png">새로고침</a></li>
                                                </ul>
                                        </div>                                                                                 
                                    </div>
                                </div>
                            </div>
                            <!--연락처관리 끝-->
                            <!--SMS전속이력조회시작-->
                            <div class="tab-pane" id="tab2">
                                <div class="sub_tab_con_body">
                                    <!--검색시작-->                                                
				                        <div class="sub_two_sms_body">
                                            <!--상단버튼시작-->
                                            <div class="sub_top_btn2">
                                                <ul>
                                                    <li><a><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                                                </ul>
                                            </div>
                                            <!--상단버끝-->
                                             <table class="two_serch2"  border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <th>기간</th>
                                                        <td class="lage">
                                                            <select class="in2 in_list2 serch_day_list" name="text">
                                                                <option value="01">2016-07-19 오후 3:24:56</option>
                                                                <option value="02">리스트1</option>
                                                                <option value="03">리스트2</option>
                                                            </select> ~
                                                            <select class="in2 in_list2 serch_day_list" name="text">
                                                                <option value="01">2016-07-19 오후 4:24:56</option>
                                                                <option value="02">리스트1</option>
                                                                <option value="03">리스트2</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </table>
                                            <div class="subcon_top3"> 
                                                <input type="text" class="in2 subtop_in_text" name="ID" placeholder="검색어 입력">
                                                <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                            </div>
                                        </div>	
                                        <!--검색끝-->
                                        <!--내용시작-->
                                        <div class="sms_conbody">
                                            <p class="serch_number">검색 결과 <span>2건</span></p>
                                            <div class="subcon_con3">
                                            <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                         		<table id="sms_list"></table>
                                            </div>
                                        </div>
                                </div>
                                <!--내용끝--> 
                                </div>
                            </div>
                            <!--SMS전속이력조회 끝-->
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
