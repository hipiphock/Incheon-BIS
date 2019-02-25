<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
</head>

<body>
	<div class="pop_wrap" id="pop_select">
        <div class="bit_busstop_wrap pop">
            <div class="pop_title">
                <h2>정류장 선택</h2>
                <p><a href="javascript:void(0);" class="pop_close"><img src="./images/close_white.png" alt="닫기"></a></p>
            </div>
            <div class="pop_conbody bit_busstop_hight">
                <div class="pop_top">
                    <p>검색어</p>        
                    <div class="btn_box5">
                        <input id="pop_busstop_input_search" type="text" class="in bit_in_text" name="ID" placeholder="정류장 ID 또는 정류장명">
                        <span><img id="pop_busstop_img_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                    </div>
                </div>
                <div class="pop_bit_con">
                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                    	<table id="pop_busstop_list"></table>
                    </div>
                </div>
                <p class="ex_center">* 원하는 정류장을 더블 클릭하면 선택 됩니다.</p>
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
