<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>버스운행관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v01/v0106.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>돌발상황관리 - 돌발대응시나리오관리</h2>
            </header>
            
            <article class="contenWrap">
                
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0106">
                         <tr>
							<th>돌발유형</th>
                            <td>
                              	<select id="incidtpcd">
                              		<option value="">전체</option>
                              		<option value="21">고장</option>
                              		<option value="32">교통정체</option>
                              		<option value="23">긴급</option>
                              		<option value="34">긴급공사</option>
                              		<option value="33">도로폐쇠</option>
                              		<option value="22">사고</option>
                              		<option value="35">시위집회</option>
                              		<option value="36">자연재해</option>
                              		<option value="37">차량사고</option>
                              	</select>
                            </td>
                            <th>대응유형</th>
                            <td>
                              	<select id="incidresptpcd">
                					<option value="">전체</option>
                              		<option value="6">링크관련기관통보</option>
                              		<option value="2">우회노선검색</option>
                              		<option value="3">우회지시</option>
                              		<option value="4">전체차량공지</option>
                              		<option value="5">정류소안내기공지</option>
                              		<option value="1">차량대응지시</option>
                              	</select>
							</td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox onedep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0106Left">
                			<div class="sub_title">
                				<h3>돌발대응 시나리오 검색 결과</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    				<table id="search_result"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0106Right">
                			<div class="sub_title">
                				<h3>돌발대응 시나리오 관리</h3>
                			</div>
                			<table class="chart v0106Chart">
                				<tr>
                					<th>돌발유형</th>
                					<td>
                						<select class="inYellow" id="select_incidtpcd">
                              				<option value="21">고장</option>
                              				<option value="32">교통정체</option>
		                              		<option value="23">긴급</option>
        		                      		<option value="34">긴급공사</option>
                		              		<option value="33">도로폐쇠</option>
                        		      		<option value="22">사고</option>
                              				<option value="35">시위집회</option>
		                              		<option value="36">자연재해</option>
        		                      		<option value="37">차량사고</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>순번</th>
                					<td><input type="number" class="inYellow" id="input_regseq"></td>
                				</tr>
                				<tr>
                					<th>대응유형</th>
                					<td>
                						<select class="inYellow" id="select_incidresptpcd">
		                					<option value="">전체</option>
        		                      		<option value="6">링크관련기관통보</option>
                		              		<option value="2">우회노선검색</option>
                        		      		<option value="3">우회지시</option>
                              				<option value="4">전체차량공지</option>
		                              		<option value="5">정류소안내기공지</option>
        		                      		<option value="1">차량대응지시</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>대응내용</th>
                					<td>
                						<textarea rows="" cols="" class="inYellow" id="input_detail"></textarea>
                					</td>
                				</tr>
                			</table>
                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn4">
                        			<li><a id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a id="btn_new" class="authNew disabled">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a id="btn_modify" class="authMod">수정</a></li>
                        			<li><a id="btn_delete" class="authDel">삭제</a></li>
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
