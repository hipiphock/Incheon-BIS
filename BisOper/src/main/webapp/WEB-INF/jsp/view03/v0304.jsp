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

<script src="./js/v03/v0304.js"></script>
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
                              	<select id="w_option">
                              		<option value="1">인천</option>
                              		<option value="2">광역</option>
                              	</select>
                            </td>
                            <th>안내기유형</th>
                            <td>
                              	<select id="cd_option">
                              		<option value="-1">전체</option>
								</select>
							</td>
							<th>파라미터 ID</th>
                            <td>
                              	<select id="param_option">
                					<option value="-1">전체</option>
                              		
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
                    				<table id="main_table"></table>
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
                					<td colspan="3"><input type="text" class="in60" id="input_paramid"><input type="text" class="in100" id="input_title">
                						<select class="in100" id="select_bittpcd">
										</select>
                					</td>
                				</tr>
                				<tr>
                					<th>통신 재시도 횟수</th>
                					<td><input type="number" id="input_comm_retrycnt"></td>
                					<th>타임아웃(초)</th>
                					<td><input type="number" id="input_comm_tmout"></td>
                				</tr>
                				<tr>
                					<th>전광판 점등시각</th>
                					<td><input type="datetime" id="input_disp_onhms"></td>
                					<th>전광판 소등시각</th>
                					<td><input type="datetime" id="input_disp_offhms"></td>
                				</tr>
                				<tr>
                					<th>표출주기 버스정보</th>
                					<td><input type="number" id="input_dispcycl"></td>
                					<th>수동메시지</th>
                					<td><input type="number" id="input_msgcycl"></td>
                				</tr>
                			</table>
                			
                			<h4>LED</h4>
                			<table class="chart v0304Chart">
                				<tr>
                					<th>팬자동온도(℃)</th>
                					<td><input type="number" id="input_fan_temper"></td>
                					<th>히터자동온도(℃)</th>
                					<td><input type="number" id="input_heat_temper"></td>
                				</tr>
                				<tr>
                					<th>노선폰트유형</th>
                					<td><select id="select_route_font">
                              				<option value="0">굴림체</option>
                              				<option >돋움체</option>
                              				<option >바탕체</option>	
										</select>
									</td>
                					<th>노선폰트색상</th>
                					<td><select id="select_route_fontcolor">
                              				<option value='Red'>Red</option>
                              				<option value='Green'>Green</option>
                              				<option value='Yellow'>Yellow</option>	
										</select>
									</td>
                				</tr>
                				<tr>
                					<th>도착폰트유형</th>
                					<td><select id="select_arrive_font">
                              				<option value="0">굴림체</option>
                              				<option>돋움체</option>
                              				<option>바탕체</option>	
										</select>
									</td>
                					<th>도착폰트색상</th>
                					<td><select id="select_arrive_fontcolor">
                              				<option value='Red'>Red</option>
                              				<option value='Green'>Green</option>
                              				<option value='Yellow'>Yellow</option>	
										</select>
									</td>
                				</tr>
                				<tr>
                					<th>정류소폰트유형</th>
                					<td><select id="select_bstop_font">
                              				<option value="0">굴림체</option>
                              				<option>돋움체</option>
                              				<option>바탕체</option>	
										</select>
									</td>
                					<th>정류소폰트색상</th>
                					<td><select id="select_bstop_fontcolor">
                              				<option value='Red'>Red</option>
                              				<option value='Green'>Green</option>
                              				<option value='Yellow'>Yellow</option>	
										</select>
									</td>
                				</tr>
                			</table>
                			
                			<h4>LCD</h4>
                			<table class="chart v0304Chart">
                				<tr>
                					<th>팬자동온도(℃)</th>
                					<td>ON <input type="number" class="in60" id="input_lcd_fan_temper"> OFF <input type="number" class="in60" id="input_lcd_fan_temper_1"></td>
                				</tr>
                				<tr>
                					<th>히터자동온도(℃)</th>
                					<td>ON <input type="number" class="in60" id="input_lcd_heat_temper"> OFF <input type="number" class="in60" id="input_lcd_heat_temper_1"></td>
                				</tr>
                				<tr>
                					<th>음량제어설정</th>
                					<td>낮 <input type="datetime" class="in60" id="input_volume_day_hms"><input type="number" class="in50" id="input_day_volume">
                						밤 <input type="datetime" class="in60" id="input_volume_night_hms"><input type="number" class="in50" id="input_night_volume">
									</td>
                				</tr>
                				<tr>
                					<th>밝기제어설정</th>
                					<td>낮 <input type="datetime" class="in50" id="input_bright_day_hms">
                						<select class="in60" id="select_day_bright">
                              				<option value='0'>어두움</option>
                              				<option value='1'>밝음</option>
										</select>
                						밤 <input type="datetime" class="in50" id="input_bright_night_hms">
                						<select class="in60" id="select_night_bright">
                              				<option value="0">어두움</option>
                              				<option value="1">밝음</option>
										</select>
									</td>
                				</tr>
                			</table>
                		           			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn4">
                        			<li><a id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a id="btn_new">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제  class="authNew disabled"-->
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
