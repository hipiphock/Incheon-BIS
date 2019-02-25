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
                <h2>유지보수관리 - 시설물유지보수관리 - BMT</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>엑셀저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
                
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0607">
                         <tr>
                            <th>검색기간</th>
                            <td><input type="date"> ~ <input type="date"></td>
                            <th>처리유형</th>
                            <td><select>
                              		<option>전체</option>
                              		
                              	</select>
                            </td>
                            <th>처리구분</th>
                            <td><select>
                              		<option>전체</option>
                              	</select>
                            </td>
                            <td><label><input type="checkbox" class="checkBox">전체 선택/해제</label></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0607Left">
                			<div class="sub_title">
                				<h3>BMT A/S 이력검색</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0607Right">
                			<div class="sub_title">
                				<h3>BMT A/S 입력/처리</h3>
                			</div>
                			<table class="chart v0607Chart">
                				<tr>
                					<th>수신<br>전화번호</th>
                					<td><input type="text" class="in260"><a href="" class="btn">추가</a>
                						<textarea rows="" cols=""></textarea><a href="" class="btn" style="margin-top: 3px;">Clear</a>
                					</td>
                				</tr>
                				<tr>
                					<th>응답<br>전화번호</th>
                					<td><input type="text" class="in260">
                						<textarea rows="" cols=""></textarea>
                					</td>
                				</tr>
                			</table>
                			<a href="" class="btn" style="margin: 3px"><img src="./images/btn_send.png" alt="">SMS전송</a>
                			
                			<table class="chart v0607Chart" style="margin-top:10px; border-top: 1px solid #b1b1b1">
                				<tr>
                					<th>차량번호</th>
                					<td colspan="3"><input type="text" class="in120">
                						<select class="in180">
                              				<option></option>
                              			</select>
                					</td>
                				</tr>
                				<tr>
                					<th>장애발생일시</th>
                					<td colspan="3"><input type="date" class="in180">
                						<input type="time" class="in120">
                					</td>
                				</tr>
                				<tr>
                					<th>요청자</th>
                					<td><input type="text"></td>
                					<th>전화번호</th>
                					<td><input type="text" class="inYellow"></td>
                				</tr>
                				<tr>
                					<th>장애유형</th>
                					<td><select>
                              				<option></option>
                              			</select>
                              		</td>
                					<th>장애상세내역</th>
                					<td><input type="text"></td>
                				</tr>
                			</table>
                			
                			<table class="chart v0607Chart" style="margin-top:3px; border-top: 1px solid #b1b1b1">
                				<tr>
                					<th>처리일시</th>
                					<td colspan="3"><input type="date" class="in180">
                						<input type="time" class="in120">
                					</td>
                				</tr>
                				<tr>
                					<th>처리자</th>
                					<td><input type="text"></td>
                					<th>처리구분</th>
                					<td><select>
                              				<option></option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>처리유형</th>
                					<td><select>
                              				<option></option>
                              			</select>
                              		</td>
                					<th>처리상세내역</th>
                					<td><input type="text"></td>
                				</tr>
                			</table>
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn4">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->    
                        			<li><a href="javascript:void(0);" id="" class="">수정</a></li>	
                        			<li><a href="javascript:void(0);" id="" class="">삭제</a></li>	
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
