<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>인천시 운영단말 로그인</title>

<link rel="stylesheet" type="text/css" href="./css/lib/alertify.core.css"/>
<link rel="stylesheet" type="text/css" href="./css/lib/alertify.default.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css" />

<script src="./js/lib/jquery.min.js"></script>
<script src="./js/lib/alertify.min.js"></script>
<script src="./js/lib/amazonmenu.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v01/v101.js"></script>



<script type="text/javascript">
	var paramResult = '${result}';
</script>

</head>
<body>
	<div id="wrap_login">
        <!--top시작-->
       	<div class="login_top">
            <h1><a ><img src="./images/logo.png" alt="버스운영관리시스템"></a></h1>
        </div>
        <!--top끝-->
        
        <!--내용시작-->
        <div class="login_body all_body">
            <!--로그인 팝업 시작-->
            <div class="login_wrap pop">
                <div class="pop_title">
                    <h2>로그인</h2>
                    <p><a><img src="./images/close_white.png" alt="닫기"></a></p>
                </div>
                <form name="loginForm" action="j_spring_security_check" method="post">
                <div class="pop_conbody">
                    <div class="login_con">
                        <img src="./images/login_logo.png">
                        <input type="text" class="login_textbox" name="user_id" id="user_id" placeholder="아이디를 입력하세요">
                        <input type="password" class="login_textbox" name="user_pw" id="user_pw" placeholder="비밀번호를 입력하세요" autocomplete="off">
                        
                        <button class="btn_login">로그인</button><!--로그인 버튼-->
                        <!-- <p class="btn btn_setting">
                        	<a><img src="./images/login_icon1.png" alt="환경설정">환경설정</a>
                        </p>
                        <p class="btn btn_close"><a><img src="./images/login_icon2.png" alt="종료">종료</a></p> -->
                    </div>
                </div>
                </form>
            </div>
             <!--로그인 팝업 끝-->
        </div>
        <!--내용끝-->
        
        <!--푸터시작-->
        <!--<?php include ('inc/foot.php'); ?>    푸터 인크루드-->
        <div class="footer">
            <!-- <span>지도객체 갱신 : 08-23 14:35:01</span><span>버스위치 갱신 : 08-23 14:35:01</span><span>위도 35.8415192</span><span>경도 127.1276656</span> -->
        </div>
        <!--푸터끝-->       
	</div>
</body>
</html>