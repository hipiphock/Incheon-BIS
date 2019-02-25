<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>시설물관리</title>
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
                <h2>시설물상태감시/제어 - 차량단말기 상태정보조회/제어</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
                
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0604">
                         <tr>
							<th>버스회사</th>
                            <td><select>
                              		<option>전체</option>
                              		
                              	</select>
                            </td>
                            <th>버스노선</th>
                            <td><select>
                              		<option>전체</option>
                              	</select>
                            </td>
                            <th>차량번호</th>
                            <td><select>
                              		<option>전체</option>
                              		
                              	</select>
                            </td>
                            <th>단말기ID</th>
                            <td><select>
                              		<option>전체</option>
                              		
                              	</select>
                            </td>
                            <th>이상유무</th>
                            <td><select>
                              		<option>전체</option>
                              		
                              	</select>
                            </td>
                            <td><label><input type="checkbox" class="checkBox">갱신주기</label><input type="number" class="in50"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0604Left">
                			<div class="sub_title">
                				<h3>차량단말기 상태</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0604Right">
                			<div class="sub_title">
                				<h3>제어정보입력/전송</h3>
                			</div>
                			
                			<h4><label><input type="checkbox" class="checkBox">원격제어그룹</label></h4>
                			<table class="chart v0604Chart">
                				<tr>
                					<th>MDT Valid</th>
                					<td><select>
                              				<option>Invalid</option>
                              				
                              			</select>
                              		</td>
                					<th>LCD On/Off</th>
                					<td><select>
                              				<option>ON</option>
                              				<option>OFF</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Sound On/Off</th>
                					<td><select>
                              				<option>ON</option>
                              				<option>OFF</option>
                              			</select>
                              		</td>
                					<th>Detail On/Off</th>
                					<td><select>
                              				<option>ON</option>
                              				<option>OFF</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>AP Power On/Off</th>
                					<td><select>
                              				<option>ON</option>
                              				<option>OFF</option>
                              			</select>
                              		</td>
                					<th>AP Auto On/Off</th>
                					<td><select>
                              				<option>ON</option>
                              				<option>OFF</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Log Valid</th>
                					<td><select>
                              				<option>Invalid</option>
                              				
                              			</select>
                              		</td>
                					<th>Main<br>로그여부</th>
                					<td><select>
                              				<option>로깅안함</option>
                              				
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>RMC<br>로그여부</th>
                					<td><select>
                              				<option>로깅안함</option>
                              				
                              			</select>
                              		</td>
                					<th>LL<br>로그여부</th>
                					<td><select>
                              				<option>로깅안함</option>
                              				
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Rev LL<br>로그여부</th>
                					<td><select>
                              				<option>로깅안함</option>
                              				
                              			</select>
                              		</td>
                					<th>로그업로드</th>
                					<td><select>
                              				<option>ON</option>
                              				<option>OFF</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>원격제어유형</th>
                					<td><select>
                              				<option>none</option>
                              				
                              			</select>
                              		</td>
                					<th>Route<br>로그여부</th>
                					<td><select>
                              				<option>로깅안함</option>
                              				
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Door<br>로그여부</th>
                					<td><select>
                              				<option>로깅안함</option>
                              				
                              			</select>
                              		</td>
                					<th>AP<br>로그여부</th>
                					<td><select>
                              				<option>로깅안함</option>
                              				
                              			</select>
                              		</td>
                				</tr>
                			</table>
                			
                			<h4><label><input type="checkbox" class="checkBox">정주기제어</label></h4>
                			<table class="chart v0604Chart">
                				<tr>
                					<th>정주기<br>발생주기</th>
                					<td><input type="number"> (0,20~60)
                              		</td>
                				</tr>
                			</table>
                			
                			<h4><label><input type="checkbox" class="checkBox">상세상태요청</label></h4>
                			<table class="chart v0604Chart">
                				<tr>
                					<th>상세상태<br>요청여부</th>
                					<td><select>
                              				<option>미요청</option>
                              				<option>요청</option>
                              			</select>
                              		</td>
                				</tr>
                			</table>
                			
                			<h4>원시기초정보</h4>
                			<table class="chart v0604Chart">
                				<tr>
                					<th>버스ID</th>
                					<td><input type="text" class="inYellow"></td>
                					<th>모뎀시리얼</th>
                					<td><input type="text" class="inYellow"></td>
                				</tr>
                				
                			</table>
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn2">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/btn_send.png" alt="">전송</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">전송결과</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->    			
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
