<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>사업정보관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v509.js"></script>
<body>
	<jsp:include page="pop_business_add.jsp"/>
	<div class="" id="pop_business">
        <div class="business_wrap pop">
            <div class="pop_title2">
                <h2>사업정보 관리</h2>
            </div>
            <div id="container" class="pop_conbody2 business_pop"> 
                    <!--위 작은버튼-->
                    <div class="pop_left_btn3">
                        <ul>
                            <li><a id="pop_business_add" href="javascript:void(0);" class="s_btn bit_pop2_btn"><img src="./images/icon_plus.png">추가</a></li>
                            <li><a id="pop_business_mod" href="javascript:void(0);" class="s_btn bit_pop2_btn">수정</a></li>
                            <li><a id="pop_business_del" href="javascript:void(0);" class="s_btn bit_pop2_btn">삭제</a></li>
                            <li><a id="pop_business_refresh" href="javascript:void(0);" class="s_btn bit_pop2_btn"><img src="./images/icon_re2.png">새로고침</a></li>
                        </ul>
                    </div>
                    <div class="pop_right_btn">
                        <ul>
                            <li id="pop_business_download"><a href="javascript:void(0);" class="s_btn bit_pop2_btn bit_pop_btn_left"><img src="./images/icon_file.png">파일저장</a></li>
                        </ul>
                    </div>
                    <!--위 작은버튼끝--> 
                <div class="business_pop_con">
                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                    	<table id="pop_business_list"></table>
                    </div>
                </div>
                    <!--아래 버튼 시작-->
                    <div class="pop_bottom_btn2">
                        <ul>
                            <li id="pop_business_save" class="bottom_save"><a href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                            <li id="pop_business_cancel" class="bottom_close"><a href="javascript:void(0);"><img src="./images/close_black.png">취소</a></li>
                        </ul>
                    </div>
                    <!--아래 버튼 끝-->  
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
