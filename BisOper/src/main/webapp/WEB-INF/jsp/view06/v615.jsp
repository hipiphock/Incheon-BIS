<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>이력조회 - 회차별 운행이력조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v06/v615.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">
	
<div class="big_wrap pop">
		<div class="pop_title2">
			<h2>이력조회 - 회차별 운행이력조회</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel1" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>버스목록</p></a></li>
                        <li><a id="btn_excel2" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>운행이력</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="bus306_serch_top">
                            <tr>
                                <th>운행일자</th>
                                <td>
                                	<input type="text" class="in bit_textid text175" id="start_date">
                                </td> 
                                <th>버스회사</th>
                                <td>
                                	<select class="in bit_list3 text175" id="option_company">
                                  	</select>
                                </td> 
                                <th>버스노선</th>
                                <td><select class="in bit_list3 text175" id="option_route">
                                	<option value="0">전체</option>
                                  	</select>
                                </td> 
                                <th>차량번호</th>
                                <td><input type="text" class="in bit_textid text175" id="search_regno"></td>                                                   
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
                	<div class="top_title">
                		<p id="search_count">버스검색 </p>
                	</div>
                	<div class="top_title2">
                		<p id="search_count2">회차별 운행이력 검색</p>
                	</div>
                	<div class="title3_checkbox" >
                	<h3 style="padding-left : 1262px; padding-top : 8px;"><label style="font-size: 12px;"><input id="check_detail" type="checkbox" name="check" class="check">결과내 검색</label></h3>
                	</div>
                    <div class="subcon_con3">
                    	<div class="subcon2_left">
                        	<!-- 검색부분 -->
                            <!-- <div class="serch_box">
                                             	<input id="input_searchWord" type="text" class="in bit_in_text" placeholder="검색어 입력">
                                             	<img id="btn_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼">
                            </div>
                            <a href="javascript:void(0);" id="btn_clear" class="serch_clear">clear</a>
                            <div class="serch_check">&nbsp;<label><input id="check_detail" type="checkbox" name="check" class="check">결과내 검색</label></div> -->
                            <!-- 검색추가부분 끝 -->	
                            <!-- <div class="base_left_chart_body"> -->
                            	<div class="main_chart" id="grid1"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                	<table id="route_search_list"></table>
                            	</div>
                            <!-- </div> -->
                        </div>
                        <div class="subcon2_right">
                        	<div class="main_chart" id="grid2"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                	<table id="event_list"></table>
                            	</div>
                        </div>
                	</div>
                </div>
                <!--내용끝-->

			</div>
			<!--내용 레이아웃끝-->   
        </div>
	</div>  
</body>
</html>
