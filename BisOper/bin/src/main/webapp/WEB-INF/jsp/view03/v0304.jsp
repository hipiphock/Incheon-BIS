<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>메시지관리</title>
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
                <h2>제공시나리오 관리</h2>
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
                    <table class="top1 v0304">
                         <tr>
							<th>광역</th>
                            <td>
                              	<select>
                              		<option>인천</option>
                              		<option>광역</option>
                              	</select>
                            </td>
                            <th>안내기유형</th>
                            <td>
                              	<select>
                              		<option>전체</option>
                              		<option>LCD거치형32인치</option>
                              		<option>LED부착형3단10인치</option>
                              		<option>LED독립형3단10인치</option>
                              		<option>LCD독립형32인치</option>
                              		<option>LED독립형5단10인치</option>
                              		<option>LED독립형4단12인치</option>
                              		<option>LED부착형4단12인치</option>
                              		<option>LED타워형1단26인치</option>
                              		<option>LCD부착형26인치</option>
                              		<option>LCD부착형32인치</option>
                              		<option>LCD독립형32인치</option>
                              		<option>LCD환승형52인치</option>
                              		<option>LCD독립형46인치</option>
                              		<option>LCD타워형26인치</option>
								</select>
							</td>
							<th>파라미터 ID</th>
                            <td>
                              	<select>
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
                		<div class="conleft v0304Left">
                			<div class="sub_title">
                				<h3>인천안내기 제공시나리오 검색결과</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0304Right">
                			<div class="sub_title">
                				<h3>시나리오 관리</h3>
                			</div>
                			
                			<h4>공통</h4>
                			<table class="chart v0304Chart">
                				<tr>
                					<th>파라미터ID</th>
                					<td colspan="3"><input type="text" class="in60"><input type="text" class="in100">
                						<select class="in100">
                              				<option>LCD거치형32인치</option>
                              				<option>LED부착형3단10인치</option>
                              				<option>LED독립형3단10인치</option>
                              				<option>LCD독립형32인치</option>
                              				<option>LED독립형5단10인치</option>
                              				<option>LED독립형4단12인치</option>
                              				<option>LED부착형4단12인치</option>
                              				<option>LED타워형1단26인치</option>
                              				<option>LCD부착형26인치</option>
                              				<option>LCD부착형32인치</option>
                              				<option>LCD독립형32인치</option>
                              				<option>LCD환승형52인치</option>
                              				<option>LCD독립형46인치</option>
                              				<option>LCD타워형26인치</option>
										</select>
                					</td>
                				</tr>
                				<tr>
                					<th>통신 재시도 횟수</th>
                					<td><input type="number"></td>
                					<th>타임아웃(초)</th>
                					<td><input type="number"></td>
                				</tr>
                				<tr>
                					<th>전광판 점등시각</th>
                					<td><input type="number"></td>
                					<th>전광판 소등시각</th>
                					<td><input type="number"></td>
                				</tr>
                				<tr>
                					<th>표출주기 버스정보</th>
                					<td><input type="number"></td>
                					<th>수동메시지</th>
                					<td><input type="number"></td>
                				</tr>
                			</table>
                			
                			<h4>LED</h4>
                			<table class="chart v0304Chart">
                				<tr>
                					<th>팬자동온도(℃)</th>
                					<td><input type="number"></td>
                					<th>히터자동온도(℃)</th>
                					<td><input type="number"></td>
                				</tr>
                				<tr>
                					<th>노선폰트유형</th>
                					<td><select>
                              				<option>굴림체</option>
                              				<option>돋움체</option>
                              				<option>바탕체</option>	
										</select>
									</td>
                					<th>노선폰트색상</th>
                					<td><select>
                              				<option>Red</option>
                              				<option>Green</option>
                              				<option>Yellow</option>	
										</select>
									</td>
                				</tr>
                				<tr>
                					<th>도착폰트유형</th>
                					<td><select>
                              				<option>굴림체</option>
                              				<option>돋움체</option>
                              				<option>바탕체</option>	
										</select>
									</td>
                					<th>도착폰트색상</th>
                					<td><select>
                              				<option>Red</option>
                              				<option>Green</option>
                              				<option>Yellow</option>	
										</select>
									</td>
                				</tr>
                				<tr>
                					<th>정류소폰트유형</th>
                					<td><select>
                              				<option>굴림체</option>
                              				<option>돋움체</option>
                              				<option>바탕체</option>	
										</select>
									</td>
                					<th>정류소폰트색상</th>
                					<td><select>
                              				<option>Red</option>
                              				<option>Green</option>
                              				<option>Yellow</option>	
										</select>
									</td>
                				</tr>
                			</table>
                			
                			<h4>LCD</h4>
                			<table class="chart v0304Chart">
                				<tr>
                					<th>팬자동온도(℃)</th>
                					<td>ON <input type="number" class="in60"> OFF <input type="number" class="in60"></td>
                				</tr>
                				<tr>
                					<th>히터자동온도(℃)</th>
                					<td>ON <input type="number" class="in60"> OFF <input type="number" class="in60"></td>
                				</tr>
                				<tr>
                					<th>음량제어설정</th>
                					<td>낮 <input type="number" class="in60"><input type="number" class="in50">
                						밤 <input type="number" class="in60"><input type="number" class="in50">
									</td>
                				</tr>
                				<tr>
                					<th>밝기제어설정</th>
                					<td>낮 <input type="number" class="in50">
                						<select class="in60">
                              				<option>어두움</option>
                              				<option>밝음</option>
										</select>
                						밤 <input type="number" class="in50">
                						<select class="in60">
                              				<option>어두움</option>
                              				<option>밝음</option>
										</select>
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
