<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
		<div class="manage_wrap" id="pop_text">
		<input type="hidden" id="input_grade_mode">
            <div class="pop_title">
                <h2 id="pop_grade_title">홍보메시지 추가</h2>
                <p><a href="javascript:void(0);" class="pop_close" id="btn_close_textpop"><img src="./images/close_white.png" alt="닫기"></a></p>
            </div>
            <div class="pop_conbody grade_puls">         
                <div class="pop_diteil_body2">
                    <p class="grplus_text"  id="pop_text_explain">추가 할 홍보메시지를 입력하세요.</p>
                    <input type="text" class="in in_text grplus" id="input_text_name" placeholder="홍보메시지">
                    <input type="hidden" class="in in_text grplus" id="input_grade_id">
                </div>
                <div class="pop_bottom_btn">
                    <ul>
                        <li class="bottom_save"><a id="btn_save_text" href="javascript:void(0);"><img src="./images/icon_ok.png">확인</a></li>
                        <li class="bottom_close pop_close"><a id="btn_cancel_text" href="javascript:void(0);" ><img src="./images/close_black.png">취소</a></li>
                    </ul>
                </div>
           </div>
        </div> 
</body>
</html>
