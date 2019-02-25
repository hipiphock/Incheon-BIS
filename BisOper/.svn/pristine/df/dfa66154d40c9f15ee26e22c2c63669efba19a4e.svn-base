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

<script src="./js/v06/v0606.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>유지보수관리 - 시설물유지보수관리 - BIT</h2>
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
                    <table class="top1 v0606">
                         <tr>
							<th>사업구분</th>
                            <td><select id="projecttpcd">
                              		<option value="">전체</option>
                              		
                              	</select>
                            </td>
                            <th>검색기간</th>
                            <td><input type="date" id="startdt"> ~ <input type="date" id="enddt"></td>
                            <th>처리유형</th>
                            <td><select id="failtreat_toplist">
                              		<option value="">전체</option>
                              	</select>
                            </td>
                            <th>처리구분</th>
                            <td><select id="fail_treat">
                              		<option value="">전체</option>
                              		<option value="1">처리</option>
                              		<option value="2">미처리</option>
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
                		<div class="conleft v0606Left">
                			<div class="sub_title">
                				<h3>BIT A/S 이력검색</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    				<table id="main_table"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0606Right">
                			<div class="sub_title">
                				<h3>BIT A/S 입력/처리</h3>
                			</div>
                			<table class="chart v0606Chart">
                				<tr>
                					<th>시설물ID</th>
                					<td><input type="text" id="facilid" readonly></td>
                					<th>단축ID</th>
                					<td><input type="text" id="short_bstopid" readonly></td>
                				</tr>
                				<tr>
                					<th>정류소명</th>
                					<td colspan="3">
                						<select class="in305" id="bstop">
                              		
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>장애발생일시</th>
                					<td colspan="3"><input type="date" class="in200" id="fail_occurdt_date"> <input type="time" class="in100" value="00:00:00" id="fail_occurdt_time"></td>
                				</tr>
                				<tr>
                					<th>장애상세내역</th>
                					<td colspan="3"><input type="text" class="in305" id="input_fail_detail"></td>
                				</tr>
                			</table>
                			
                			<table class="chart v0606Chart" style="margin-top:7px; border-top: 1px solid #b1b1b1">
                				<tr>
                					<th>처리유형</th>
                					<td><select id="failtreat_bottomlist">
                              			</select>
                              		</td>
                					<th>KT담당기사</th>
                					<td><input type="text" id="input_treat_userid"></td>
                				</tr>
                				<tr>
                					<th>처리일시</th>
                					<td colspan="3"><input type="date" class="in200" id="treatdt"> <input type="time" class="in100" value="00:00:00" id="treatdt_time"></td>
                				</tr>
                				<tr>
                					<th>처리상세내역</th>
                					<td colspan="3"><input type="text" class="in305" id="input_treat_detail"></td>
                				</tr>
                			</table>
                			
                			<table class="chart v0606Chart" style="margin-top:7px; border-top: 1px solid #b1b1b1">
                				<tr>
                					<th>SMS 수신<br>전화번호</th>
                					<td><input type="text" class="inYellow" id="dest_min"></td>
                					<th>응답전화번호</th>
                					<td><input type="text" id="call_back"></td>
                				</tr>
                				<tr>
                					<th>SMS내용</th>
                					<td colspan="3"><input type="text" class="in305 inYellow" id="sms_msg"></td>
                				</tr>
                			</table>
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn5">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="btn_new" class="">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->    
                        			<li><a href="javascript:void(0);" id="btn_modify" class="">수정</a></li>	
                        			<li><a href="javascript:void(0);" id="btn_delete" class="">삭제</a></li>	
                        			<li><a href="javascript:void(0);" id="btn_sms" class=""><img src="./images/btn_send.png" alt="">SMS전송</a></li>	
                        		</ul>
                        	</div>
                		</div>              		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
