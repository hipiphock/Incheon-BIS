<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>버스운행관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v01/v0104.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-303">
	
	<div class="big_wrap pop">
		<div class="pop_title2">
			<h2>버스운행관제 - 정류장 제공정보 조회</h2>
        </div>
		<div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="bus306_serch_top">
                            <tr>
                                <th>조회구분</th>
                                <td>
                                	<select class="in bit_list3 text144" id="search_option">
                             		   	<option value="1">전체</option>
                                		<option value="2">노선별</option>
                                		<option value="3">도로별</option>
                                  	</select>
                                </td> 
                                <th id="option_list_name">노선번호</th>
                                <td>
                                	<select class="in bit_list3 text144" id="option_list">
                                  	</select>
                                </td> 
                                <th>안내기유형</th>
                                <td><select class="in bit_list3 text144" id="option_type">
                                		<option value="">전체</option>
                                  	</select>
                                </td>
                                <th>정류소명</th>
                                <td><input type="text" class="in text143" id="option_name">
                                </td>
                                <th>조회범위</th>
                                <td>
                                	<input type="number" min="0" class="in text47" id="option_hour" value="0"> 시간<input type="number" min="0" max="59" class="in text47" id="option_minute" value="10"> 분
                                </td>                                                                 
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
                	<div class="top_title">
                		<p id="search_count">정류소 검색 결과</p>
                		<button class="s_btn"><img src="./images/icon_map.png" alt="지도검색버튼">지도검색</button>
                	</div>
                	<div class="top_title2">
                		<p id="search_count2">정류소 제공정보 검색 결과</p>
                	</div>
                    <div class="subcon_con3">
                    	<div class="subcon2_left">
                        	<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        		<table id="stop_list"></table>
                        	</div>
                        </div>
                        <div class="subcon2_right">
                        	<table id="oper_info_list"></table>
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
