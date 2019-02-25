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
                <h2>기본정보관리 - 차량단말기 기초정보관리</h2>
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
                    <table class="top1 v0601">
                         <tr>
							<th>버스회사</th>
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
                            <th>단말기<br>시리얼번호</th>
                            <td><select>
                              		<option>전체</option>
                              	</select>
                            </td>
                            <th>사용여부</th>
                            <td><select>
                              		<option>전체</option>
                              	</select>
                            </td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0601Left">
                			<div class="sub_title">
                				<h3>차량단말기</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0601Right">
                			<div class="sub_title">
                				<h3>정보관리</h3>
                			</div>
                			
                			
                			<table class="chart v0601Chart">
                				<tr>
                					<th>차량단말기ID</th>
                					<td><input type="text"></td>
                					<th>시설물ID</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>차량등록번호</th>
                					<td><select>
                              				<option>미설치</option>
                              			</select>
                              		</td>
                					<th>IP주소</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>유지보수기관</th>
                					<td><select>
                              				<option>KT</option>
                              			</select>
                              		</td>
                					<th>모델명</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>구매일자</th>
                					<td><input type="date"></td>
                					<th>설치일자</th>
                					<td><input type="date"></td>
                				</tr>
                				<tr>
                					<th>단말기<br>시리얼번호</th>
                					<td><input type="text"></td>
                					<th>모뎀<br>시리얼번호</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>설치위치</th>
                					<td colspan="3"><input type="text" class="in305"></td>
                				</tr>
                				<tr>
                					<th>사용여부</th>
                					<td><select>
                              				<option>미사용</option>
                              			</select>
                              		</td>
                					<th>사용종료일시</th>
                					<td><input type="datetime"></td>
                				</tr>
                				<tr>
                					<th>비고</th>
                					<td colspan="3"><input type="text" class="in305"></td>
                				</tr>
                			</table>
                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn3">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="" class="">수정</a></li>
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
