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

<script src="./js/v06/v0604.js"></script>

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
                            <td><select id="buscomp_option">
                              		<option value="">전체</option>
                              	</select>
                            </td>
                            <th>버스노선</th>
                            <td><select id="route_option">
                           			 <option value="">전체</option>
                              	</select>
                            </td>
                            <th>차량번호</th>
                            <td><input type="search" id="carregno"> 
                            </td>
                            <th>단말기ID</th>
                            <td><input type="search" id="mdtid"> 
                            </td>
                            <th>이상유무</th>
                            <td><select id="statyn">
                              		<option value="">전체</option>
                              		<option value="0">비정상</option>
                              		<option value="1">정상</option>
                              	</select>
                            </td>
                            <td><label><input type="checkbox" class="checkBox" id="renew">갱신주기</label><input type="number" class="in50" id="renew_value" value="10" min="10"></td>
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
                    				<table id="main_table"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0604Right">
                			<div class="sub_title">
                				<h3>제어정보입력/전송</h3>
                			</div>
                			
                			<h4><label><input type="checkbox" class="checkBox" id="remctrl_checkbox">원격제어그룹</label></h4>
                			<table class="chart v0604Chart">
                				<tr>
                					<th>MDT Valid</th>
                					<td><select class="vaild" id="mdt_valid">
                              		
                              			</select>
                              		</td>
                					<th>LCD On/Off</th>
                					<td><select class="onoff" id="lcd_onoff">
                              			
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Sound On/Off</th>
                					<td><select class="onoff" id="sound_onoff">
                              			
                              			</select>
                              		</td>
                					<th>Detail On/Off</th>
                					<td><select class="onoff" id="detail_onoff">
                              			
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>AP Power On/Off</th>
                					<td><select class="onoff" id="appower_onoff">
                              		
                              			</select>
                              		</td>
                					<th>AP Auto On/Off</th>
                					<td><select class="onoff" id="apauto_onoff">
                              			
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Log Valid</th>
                					<td><select class="vaild" id="log_valid">
                              				
                              			</select>
                              		</td>
                					<th>Main<br>로그여부</th>
                					<td><select class="logyn" id="main_logyn">
                              			
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>RMC<br>로그여부</th>
                					<td><select class="logyn" id="rmc_logyn">
                              				
                              			</select>
                              		</td>
                					<th>LL<br>로그여부</th>
                					<td><select class="logyn" id="ll_logyn">
                              				
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Rev LL<br>로그여부</th>
                					<td><select class="logyn" id="revll_logyn">
                              				
                              			</select>
                              		</td>
                					<th>로그업로드</th>
                					<td><select class="onoff" id="logupload_onoff">
                              			
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>원격제어유형</th>
                					<td><select id="remctrl">
                              				<option value="0">none</option>
                              				
                              			</select>
                              		</td>
                					<th>Route<br>로그여부</th>
                					<td><select class="logyn" id="route_logyn">
                              				
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>Door<br>로그여부</th>
                					<td><select class="logyn" id="door_logyn">
                              			
                              			</select>
                              		</td>
                					<th>AP<br>로그여부</th>
                					<td><select class="logyn" id="ap_logyn">
                              			
                              				
                              			</select>
                              		</td>
                				</tr>
                			</table>
                			
                			<h4><label><input type="checkbox" class="checkBox" id="fixint_checkbox">정주기제어</label></h4>
                			<table class="chart v0604Chart">
                				<tr>
                					<th>정주기<br>발생주기</th>
                					<td><input type="number" value="0" id="fixint_cycl"> (0,20~60)
                              		</td>
                				</tr>
                			</table>
                			
                			<h4><label><input type="checkbox" class="checkBox" id="statreqyn_checkbox">상세상태요청</label></h4>
                			<table class="chart v0604Chart">
                				<tr>
                					<th>상세상태<br>요청여부</th>
                					<td><select id="statreqyn">
                              				
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
                        			<li><a href="javascript:void(0);" id="btn_transmit" class="authReset"><img src="./images/btn_send.png" alt="">전송</a></li>
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
