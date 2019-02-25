<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>파라미터 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script type="text/javascript" src="./js/v05/v515.js"></script>


</head>

<body>
	<input type="hidden" id="view_attr" value="v601">

    <div class="big_wrap pop">
		<div class="pop_title2">
			<h2>BIT관리 - 파라미터 관리</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="bit_serch_top sinalio_serch">
                            <tr>
                                <th>서버구분</th>
                                <td>
                                	<select class="in bit_list3 list_265" id="select_servertpcd">
                                		<option value="120">신규제공서버</option>
                                		<option value="126">신규제공서버2</option>
                                		<option value="121">인천제공서버</option>
                                		<option value="125">인천제공서버2</option>
                                		<option value="122">확대제공서버</option>
                                		<!-- <option value="123">광역제공서버</option>
                                		<option value="124">강화제공서버</option> -->
                                  	</select>
                                </td> 
                                <th>안내기유형</th>
                                <td>
                                	<select class="in bit_list3 list_265" id="select_bittpcd_list">
                                  	</select>
                                </td> 
                                <!-- <th>파라미터ID</th>
                                <td>
                                	<select class="in bit_list3 list_265" id="select_param_list">
                                    	<option value="0">리스트1</option>
                                        <option value="1">리스트2</option>
                                        <option value="2">리스트3</option>
                                  	</select>                                  	
                                </td> -->
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
                    <p class="serch_number serch_number_left">검색 결과 <span id="list_count">2</span>건</p>
                    <div class="subcon_con3">
                    	<div class="sinalio_left">
                        	<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        		<table id="parameter_list"></table>
                        	</div>
                        </div>
                        <div class="sinalio_right">
                        	<!-- 공통 -->
                        	<!-- 공통 -->                        	
                        		<div class="bit_char_title">
                        			<h3>공통</h3>
                        		</div>
                        		<table class="bit_chart para_chart">
                        			<tr>
                        				<th>파라미터 ID</th>
                        				<td colspan="3">
                        					<input type="text" class="in text90 bitin" id="input_paramid">
                        					<input type="text" class="in text144 bitin" id="input_title">
                        					<select id="select_bittpcd" class="in list190 bitin">
                                               <option value="01">리스트1</option>
                                               <option value="02">리스트2</option>
                                    		</select>
                        				</td>
                        			</tr>
                        			<tr  class="ic_wrap">
                        				<th>통신 재시도 횟수</th>
                        				<td><input type="number" min="1" max="5" class="in text140 bitin" id="input_comm_retrycnt"></td>
                        				<th class="le_line">통신 타임아웃(초)</th>
                        				<td><input type="number" min="1" max="10" class="in text140 bitin" id="input_comm_tmout"></td>
                        			</tr>
                        			<tr class="ic_wrap">
                        				<th>전광판 점등시각</th>
                        				<td><input type="number" class="in text140 bitin" id="input_disp_onhms"></td>
                        				<th class="le_line">전광판 소등시각</th>
                        				<td><input type="number" class="in text140 bitin" id="input_disp_offhms"></td>
                        			</tr>
                        			<tr  class="ic_wrap">
                        				<th>표출주기 (버스정보)</th>
                        				<td><input type="number" min="0" max="15" class="in text140 bitin" id="input_dispcycl"></td>
                        				<th class="le_line">표출주기 (수동메시지)</th>
                        				<td><input type="number" min="0" max="15" class="in text140 bitin" id="input_msgcycl"></td>
                        			</tr>
                        		</table>
                        	
                        	<!-- LED -->
                        	
                        		<div class="bit_char_title bit_title2 ic_wrap">
                        			<h3>LED</h3>
                        		</div>
                        		<table class="bit_chart led_wrap para_chart ic_wrap" >
                        			<tr>
                        				<th>팬자동온도(℃)</th>  
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" id="input_fan_temper"></td>
                        				<th class="le_line">히터 자동온도(℃)</th>
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" id="input_heat_temper"></td>
                        			</tr>
                        			<tr>
                        				<th>노선명 폰트유형</th>
                        				<td>
                        					<select class="in text140 bitin" id="select_route_font">
                        						<option value=""></option>
                        						<option value="0">굴림체</option>
                        						<option value="1">돋움체</option>
                        						<option value="2">바탕체</option>
                       						</select>
                       					</td>
                        				<th class="le_line">노선명 폰트색상</th>
                        				<td>
                       						<select class="in text140 bitin" id="select_route_fontcolor">
                        						<option value="0"></option>
                        						<option value="1">RED</option>
                        						<option value="2">GREEN</option>
                        						<option value="3">YELLOW</option>
                       						</select>
                       					</td>
                        			</tr>
                        			<tr>
                        				<th>예정시간 폰트유형</th>
                        				<td>
                        					<select class="in text140 bitin" id="select_arrive_font">
                        						<option value=""></option>
                        						<option value="0">굴림체</option>
                        						<option value="1">돋움체</option>
                        						<option value="2">바탕체</option>
                       						</select>
                       					</td>
                        				<th class="le_line">예정시간 폰트색상</th>
                        				<td>
                        					<select class="in text140 bitin" id="select_arrive_fontcolor">
                        						<option value="0"></option>
                        						<option value="1">RED</option>
                        						<option value="2">GREEN</option>
                        						<option value="3">YELLOW</option>
                       						</select>
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>정류소수 폰트유형</th>
                        				<td>
                       						<select class="in text140 bitin" id="select_bstop_font">
                       							<option value=""></option>
                        						<option value="0">굴림체</option>
                        						<option value="1">돋움체</option>
                        						<option value="2">바탕체</option>
                       						</select>
                       					</td>
                        				<th class="le_line">정류소수 폰트색상</th>
                        				<td>
                       						<select class="in text140 bitin" id="select_bstop_fontcolor">
                        						<option value="0"></option>
                        						<option value="1">RED</option>
                        						<option value="2">GREEN</option>
                        						<option value="3">YELLOW</option>
                       						</select>
                       					</td>
                        			</tr>
                        		</table>
                        		
                        	<!-- LCD -->
                        	
                        		<div class="bit_char_title bit_title2  ic_wrap">
                        			<h3>LCD</h3>
                        		</div>
                        		<table class="bit_chart led_wrap para_chart ic_wrap" >
                        			<tr>
                        				<th>팬 자동온도 (℃) (ON)</th>
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" id="input_lcd_fan_temper"></td>
                        				<th class="le_line">(OFF)</th>
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" id="input_lcd_fan_temper_1"></td>
                        			</tr>
                        			<tr>
                        				<th>히터 자동온도(℃)(ON)</th>
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" id="input_lcd_heat_temper"></td>
                        				<th class="le_line">(OFF)</th>
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" id="input_lcd_heat_temper_1"></td>
                        			</tr>
                        			<tr>
                        				<th>음량 제어 설정 (낮)</th>
                        				<td><input type="text" class="in text62 bitin" id="input_volume_day_hms">>
                        					<input type="number" class="in text62 bitin" id="input_day_volume"></td>
                        				<th class="le_line">(밤)</th>
                        				<td><input type="text" class="in text62 bitin" id="input_volume_night_hms">>
                        					<input type="number" class="in text62 bitin" id="input_night_volume"></td>
                        			</tr>
                        			<tr>
                        				<th>밝기 제어 설정 (낮)</th>
                        				<td><input type="text" class="in text62 bitin" id="input_bright_day_hms">>
                        					<input type="number" class="in text62 bitin" id="input_day_bright"></td>
                        				<th class="le_line">(밤)</th>
                        				<td><input type="text" class="in text62 bitin" id="input_bright_night_hms">>
                        					<input type="number" class="in text62 bitin" id="input_night_bright"></td>
                        			</tr>
                        		</table>
                        	
                        	
                        		
                        		<!-- 확대사업  -->
                        		<!-- 확대사업  -->
                        		<!-- 확대사업  -->
                        		<!-- <div class="bit_char_title bit_title2 vitzo_wrap" >
                        			<h3>파라미터 입력</h3>
                        		</div> -->
                        		<table class="bit_chart vitzo_wrap" >
                        			<tr>
                        				<th>볼륨</th>
                        				<td><input type="number" min="0" max ="9" class="in text140 bitin" id="input_e_volume"></td>
                        				<th class="le_line">음성정보</th>
                        				<td>
                        					<select id="select_e_volume_yn" class="in list140 bitin">
                                               <option value="0">OFF</option>
                                               <option value="1">ON</option>
                                    		</select>
                        				</td>
                        			</tr>
                        			<tr>
                        				<th rowspan="2">잠시후도착 조건</th>
                        				<td rowspan="2"><select id="select_e_incoming_type" class="in list140 bitin">
                                               <option value="0">시간 기준</option>
                                               <option value="1">잔여 정류장 기준</option>
                                    		</select>
                                    	</td>
                        				<th class="le_line">잠시후도착시간</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_incoming_time">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th class="le_line">잠시후도착정류장</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_incoming_stop">
                        				</td>
                        			</tr>
                        			
                        			
                        			<tr>
                        				<th>Screen Capture(초)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_send_capture_cycle">
                        				</td>
                        				<th class="le_line">정보정렬 방식</th>
                        				<td>
                        					<select id="select_e_bit_sort_type" class="in list140 bitin">
                                               <option value="0">노선번호 기준</option>
                                               <option value="1">도착예정 기준</option>
                                    		</select>
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>홍보메시지 대기</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_arrv_info_time">
                        				</td>
                        				
                        				<th class="le_line">홍보메시지 표출</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_scenario_time">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>팬동작온도(MAX)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_fan_max_temper">
                        				</td>
                        				
                        				<th class="le_line">팬동작온도(MIN)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_fan_min_temper">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>히터동작온도(MAX)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_heater_max_temper">
                        				</td>
                        				
                        				<th class="le_line">히터동작온도(MIN)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_heater_min_temper">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>모니터ON시간</th>
                        				<td><input type="text" class="in text140 bitin" id="input_e_monitor_on"></td>
                        				<th class="le_line">모니터OFF시간</th>
                        				<td><input type="text" class="in text140 bitin" id="input_e_monitor_off"></td>
                        			</tr>
                        			<tr>
                        				<th>상태정보전송주기</th>
                        				<td colspan="3"><input type="text" class="in text140 bitin" id="input_e_send_status_cycle"></td>
                        			</tr>
                        		</table> <!-- 확대사업 end -->
                        		
                        	<!-- 버튼 -->
                        	<div class="sinalio_right_btn">
                        		<ul>
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="btn_new" class="authNew">신규등록</a></li>
                        			<li><a href="javascript:void(0);" id="btn_modify" class="authMod">수정</a></li>
                        			<li><a href="javascript:void(0);" id="btn_delete" class="authDel">삭제</a></li>
                        			<li><a href="javascript:void(0);" id="btn_cancel" class="authDel">취소</a></li>
                        		</ul>
                        	</div>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
	</div>
</body>
</html>
