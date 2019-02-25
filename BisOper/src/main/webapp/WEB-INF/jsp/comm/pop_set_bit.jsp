<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>BIT 상태 감시 설정</title>
</head>
<body>
	<div class="pop_wrap" id="pop_setBit">
        <div class="bitset_wrap pop">
            <div class="pop_title">
                <h2>BIT 상태 감시 설정</h2>
                <p><a class="pop_close" href="javascript:void(0);"><img src="./images/close_white.png" alt="닫기"></a></p>
            </div>
            <div class="pop_conbody bitset_pop">
                <div class="bitset_left">
                    <div class="layer_title">
                        <h3>버스 상태 감시 팝업</h3>
                    </div>
                    <div class="pop_diteil_body2">
                        <ul>
                            <li><input type="checkbox" name="check" class="check">버스 위반 감시</li>
                            <li><input type="checkbox" name="check" class="check">버스 돌발 감시</li> 
                        </ul>
                    </div>
                </div>
                <div class="bitset_right">
                    <div class="layer_title">
                        <h3>BIT 상태 감시 팝업</h3>
                    </div>
                    <div class="pop_diteil_body2">
                        <ul>
                            <li><input type="checkbox" name="check" class="check">BIT 충격 감지</li>
                            <li><input type="checkbox" name="check" class="check">BIT 온도 경고(℃) 
                            <p class="bitset_number"><input type="text" class="in bitset_numberbox" name="numbertbox"> ~ <input type="text" class="in bitset_numberbox" name="numbertbox"></p></li><!--숫자 상하로 커지고 작아지는 버튼 넣기-->
                            <li><input type="checkbox" name="check" class="check">BIT 습도 경고(℃) 
                            <p class="bitset_number"><input type="text" class="in bitset_numberbox" name="numbertbox"> ~ <input type="text" class="in bitset_numberbox" name="numbertbox"></p></li><!--숫자 상하로 커지고 작아지는 버튼 넣기-->
                            <li><input type="checkbox" name="check" class="check">BIT 도어 열림</li>
                        </ul>
                    </div>
                </div>
                <div class="pop_bottom_btn">
                    <ul>
                        <li class="bottom_save"><a><img src="./images/icon_ok.png">적용</a></li>
                        <li class="bottom_close pop_close"><a><img src="./images/close_black.png">닫기</a></li>
                    </ul>
                </div>
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
