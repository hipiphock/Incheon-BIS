<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 제공정보 현황  조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v519.js"></script>


</head>

<body>
	<input type="hidden" id="view_attr" value="v519">
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BIT관리 - BIT 제공정보 현황  조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                        <table class="two_serch"  border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td>
                                	<input type="text" class="in in_text_b serch_box_shot list_265" readonly="readonly" id="input_stop_name">
                                	<input type="hidden" id="input_bit_id">
                                	<a href="javascript:void(0);" class="serch_ch" id="btn_choice">선택</a>
                                	<a href="#" class="serch_clear5" id="btn_clear">clear</a>
                                    <div class="serch_check5"><label><input type="checkbox" name="check_detail" class="check" id="check_detail">결과검색</label></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="sistem_conbody">
                    <p class="serch_number">검색 결과 <span id="list_count">2</span>건</p>
                    <div class="subcon_con3">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="bit_supply_list"></table>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝--> 
             </div>
             </div>  
        <!--내용끝-->
        <jsp:include page="../comm/pop_choice.jsp"/>
</body>
</html>
