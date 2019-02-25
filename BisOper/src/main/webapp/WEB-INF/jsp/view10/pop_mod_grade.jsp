<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>사용자 등급 변경</title>
</head>

<body>
	<div class="pop_wrap" id="pop_modGrade">
        <div class="manage_wrap pop">
            <div class="pop_title">
                <h2>사용자 등급 변경</h2>
                <p><a class="pop_close" href="javascript:void(0);"><img src="./images/close_white.png" alt="닫기"></a></p>
            </div>
            <div class="pop_conbody manage_pop">                       
                <div class="pop_diteil_body2">
                    <p class="grplus_text">[<span>운영자</span>]등급의 계정들을 다른 등급으로 변경 합니다</p>
                    <div class="grplus_chart">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                            표들어갈곳
                        </div>
                    </div>
                    <p class="grplus_text"><input type="checkbox" name="check" class="check">일괄 등급 지정
                        <select class="in in_list grlist" name="text" type="TNSNAME" >
                            <option value="00">변경할 등급을 선택하세요</option>
                            <option value="01">리스트1</option>
                            <option value="02">리스트2</option>
                        </select>
                    </p>
                </div>
                <div class="pop_bottom_btn">
                    <ul>
                        <li class="bottom_save"><a href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                        <li class="bottom_close pop_close"><a href="javascript:void(0);"><img src="./images/close_black.png">닫기</a></li>
                    </ul>
                </div>
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
