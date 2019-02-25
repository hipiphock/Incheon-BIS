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


</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>돌발상황관리 - 돌발상황발생대응관리</h2>
            </header>
            
            <article class="contenWrap">
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0107">
                         <tr>
							<th>돌발유형</th>
                            <td>
                              	<select>
                              		<option>전체</option>
                              		<option>고장</option>
                              		<option>교통정체</option>
                              		<option>긴급</option>
                              		<option>긴급공사</option>
                              		<option>도로폐쇠</option>
                              		<option>사고</option>
                              		<option>시위집회</option>
                              		<option>자연재해</option>
                              		<option>차량사고</option>
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
                		<div class="conleft v0107Left">
                			<div class="sub_title">
                				<h3>대응조치 이력검색결과</h3>
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0107Right">
                			<div class="sub_title">
                				<h3>대응조치 이력관리</h3>
                			</div>
                			
                			
                			<table class="chart v0107Chart">
                				<tr>
                					<th>돌발ID</th>
                					<td>
                						<input type="text" class="inYellow">
                              		</td>
                				</tr>
                				<tr>
                					<th>돌발상황유형</th>
                					<td>
                						<select class="inYellow">
                              				<option>고장</option>
                              				<option>교통정체</option>
                              				<option>긴급</option>
                              				<option>긴급공사</option>
                              				<option>도로폐쇠</option>
                              				<option>사고</option>
                              				<option>시위집회</option>
                              				<option>자연재해</option>
                              				<option>차량사고</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>돌발 대응유형</th>
                					<td>
                						<select class="inYellow">
                							<option>전체</option>
                              				<option>링크관련기관통보</option>
                              				<option>우회노선검색</option>
                              				<option>우회지시</option>
                              				<option>전체차량공지</option>
                              				<option>정류소안내기공지</option>
                              				<option>차량대응지시</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>정보제공여부</th>
                					<td>
                						<select>
                							<option>제공</option>
                              				<option>미제공</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>단말기 ID</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>차량번호</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>링크ID</th>
                					<td><input type="text" class="in100"><input type="text" class="in145"></td>
                				</tr>
                				<tr>
                					<td colspan="2" style="height:7px; border-right: none; background: #f7f7f7;"></td>
                				</tr>
                				<tr>
                					<th>돌발수집유형</th>
                					<td><select class="inYellow">
                							<option>경찰청</option>
                              				<option>교통방송</option>
                              				<option>교통정보센터</option>
                              				<option>소방방재청</option>
                              				<option>차량단말기</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>발생일시</th>
                					<td><input type="text" class="inYellow"></td>
                				</tr>
                				<tr>
                					<th>돌발상세내역</th>
                					<td><input type="text" class="inYellow"></td>
                				</tr>
                				<tr>
                					<th>노선번호</th>
                					<td><input type="text" class="in100"><input type="text" class="in145"></td>
                				</tr>
                				<tr>
                					<th>비고</th>
                					<td><input type="text"></td>
                				</tr>
                			</table>
                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn5">
                        			<li><a id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a id="btn_new" class="authNew">신규등록</a></li>
                        			<li><a id="btn_modify" class="authMod">수정</a></li>
                        			<li><a id="" class=" disabled">돌발종료</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a id="" class=" disabled">돌발대응</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
