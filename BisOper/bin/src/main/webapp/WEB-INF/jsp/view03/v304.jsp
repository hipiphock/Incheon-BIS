<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>차량 정보 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v03/v304.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-303">
	
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>기반정보 - 차량 정보 조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);" ><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                        <table class="two_serch3"  border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <th>검색어 입력</th>
                                <td><div class="btn_box3">
                                        <input type="text" class="in subtop_in_text" name="ID" placeholder="차량 ID 또는 번호" id="text_search">
                                        <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼" id="btn_search"></span>
                                    </div>
                                    <a class="serch_clear3" id="btn_clear">clear</a>
                                    <div class="serch_check2"><label><input type="checkbox" name="check" class="check" id="check_detail">결과검색</label></div>
                                    </td>
                            </tr>
                        </table>
                    </div>
                    
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="sistem_conbody">
                    <p class="serch_number serch_number_left">검색 결과 <span id="list_count">2</span>건</p>
                    <!-- <p class="ex_right">* 차량 항목을 더블 클릭하면 현재 운행 정보를 확인할 수 있습니다.</p> -->
                    <div class="subcon_con3">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="car_list"></table>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
        </div>
        <!--내용끝-->
       
</body>
</html>
