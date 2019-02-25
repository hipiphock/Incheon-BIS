<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>운행서비스평가지원</title>
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
                <h2>운행위반사항통보</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0405">
                         <tr>
							<th>운행일자</th>
                            <td><input type="date">
                            	<select class="in50">
                					<option>1시</option>
                					<option>2시</option>
                					<option>3시</option>
                					<option>4시</option>
                					<option>5시</option>
                					<option>6시</option>
                					<option>7시</option>
                					<option>8시</option>
                					<option>9시</option>
                					<option>10시</option>
                					<option>11시</option>
                					<option>12시</option>
                					<option>13시</option>
                					<option>14시</option>
                					<option>15시</option>
                					<option>16시</option>
                					<option>17시</option>
                					<option>18시</option>
                					<option>19시</option>
                					<option>20시</option>
                					<option>21시</option>
                					<option>22시</option>
                					<option>23시</option>
                					<option>24시</option>
                              	</select>
                              </td>
                            <th>버스회사</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>노선번호</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>운행위반유형</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>차량번호</th>
                            <td><input type="search"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0405Left">
                			<div class="sub_title">
                				<h3>검색결과 <span>0</span> 건</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0405Right">
                			<div class="sub_title">
                				<h3>운행위반내역검색</h3>
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>
                			
                			<!-- 운행위반내역검색 시작 -->
                			<div class="conten con1">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>
                			
                			<div class="sub_title">
                				<h3>패널티등록</h3>
                			</div>
                			
                			<!-- 패널티등록 시작 -->
                			<div class="conten con2">
                    			<table class="chart v0405Chart">
                    				<tr>
                    					<th>발생일시</th>
                    					<td><input type="text" disabled></td>
                    					<th>버스회사</th>
                    					<td><input type="text" disabled></td>
                    					<th>노선번호</th>
                    					<td><input type="text" disabled></td>
                    					<th>차량번호</th>
                    					<td><input type="text" disabled></td>
                    				</tr>
                    				<tr>
                    					<th>위반유형</th>
                    					<td><input type="text" disabled></td>
                    					<th>패널티유형</th>
                    					<td>
                    						<select class="inYellow">
                								<option>경고</option>
                              				</select>
                    					</td>
                    					<th>처리내역</th>
                    					<td colspan="3"><input type="text"></td>
                    				</tr>
                    			</table>
                    			<button class="btn_regi">등록</button>
                    		</div>
                    		
                    		<div class="sub_title">
                				<h3>패널티처리이력</h3>
                			</div>
                    		<!-- 패널티처리이력 시작 -->
                			<div class="conten con3">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
