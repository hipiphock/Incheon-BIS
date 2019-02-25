<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
<div class="bit_busstop_wrap" id="pop_choice2">
    <div class="pop_title">
        <h2 id="txt_title2">정류장 선택</h2>
        <p><a id="btn_close2"><img src="./images/close_white.png" alt="닫기"></a></p>
    </div>
    <div class="pop_conbody bit_busstop_hight">
        <div class="pop_top">
            <p>검색어</p>        
            <div class="btn_box5">
                <input type="text" class="in bit_in_text" name="ID" placeholder="검색어 입력" id="input_pop_word2">
                <span><img id="btn_pop_search2" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
            </div>
        </div>
        <div class="pop_bit_con">
            <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
            	<table id="pop_list2"></table>
            </div>
        </div>
        <p class="ex_center">* 원하는 row를 더블 클릭하면 선택 됩니다.</p>
   </div>
</div> 
<div class="pop_back"></div>
</body>
</html>
