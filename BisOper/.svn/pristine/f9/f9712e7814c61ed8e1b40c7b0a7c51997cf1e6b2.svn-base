<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>이력조회 - 시공간 운행 이력 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v06/v610.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">
	
<div class="big_wrap pop">
		<div class="pop_title2">
			<h2>이력조회 - 시공간 운행 이력 조회</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                    	<span class="ex_613"><input type="checkbox">UnZoo기능 설정 <input type="checkbox">전체선택</span>
                        <table class="tong706_serch_top e_613">
                            <tr>
                                <th>선굵기</th>
                                <td>
                                	<input type="number" class="in bit_textid text50">
                                </td>
                                <th>운행일자</th>
                                <td>
                                	<input type="text" class="in bit_textid">
                                </td>
                                <th>버스회사</th>
                                <td>
                                	<select class="in bit_list3 list115" id="">
                                		<option value="">전체</option>
                                		<option value="">1</option>
                                  	</select>
                                </td>
                                <th>버스노선</th>
                                <td>
									<select class="in bit_list3 list115" id="">
                                		<option value="">전체</option>
                                		<option value="">1</option>
                                  	</select>
                                </td>
                                <th>차량번호</th>
                                <td>
                                	<input type="number" class="in bit_textid text100">
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="sistem_conbody">
                    <div class="e_top_title">
                		<p style="float:left;">시공간 그래프</p>
                		<div class="e_top_btn"> 
                			<p>그래프 표출</p>
                			<a href=""><img src="./images/icon_chart2.png" alt="그래프"></a>
							<a href=""><img src="./images/icon_chart3.png" alt="선택"></a>
						</div>
                	</div>
                    <div class="e_613_1">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id=""></table>
                        </div>
                    </div>
                    <p class="serch_number3">운행회차 이력</p>
                    <div class="e_613_2">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="">회차이력표</table>
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
