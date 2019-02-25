<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT제어</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v503.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-502">
	<div class="big_wrap pop">
		<div class="pop_title2">
			<h2>BIT관리 - BIT 제어</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel_download" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>저장</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="bit_serch_top">
                            <tr>
                                <th>서버구분</th>
                                <td>
                                	<select class="in bit_list3 list_265" id="select_servertpcd">
                                		<option value="120">신규제공서버</option>
                                		<option value="126">신규제공서버2</option>
                                		<option value="121">인천제공서버</option>
                                		<option value="125">인천제공서버2</option>
                                		<option value="122">확대제공서버</option>
                                		<option value="123">광역제공서버</option>
                                  	</select>
                                </td> 
                                <th>안내기유형</th>
                                <td>
                                	<select class="in bit_list3 list_265" id="select_bittpcd">
                                  	</select>
                                </td> 
                                <th>검색어</th>
                                <td><input id="input_bitid" type="text" class="in bit_textid text_265" placeholder="BIT ID, 단축ID, 명칭"></td>                                                               
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
                    <p class="serch_number serch_number_left">검색 결과 <span id="list_count"></span>건</p>
                    <div class="subcon_con3">
                    	<div class="subcon_left bit503_left">
                        	<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        		<table id="base_info_list"></table>
                        	</div>
                        </div>
                        <!-- 제어 항목  -->
                        <!-- 제어 항목  -->
                        <div class="subcon_right bit503_right">
                        	<div class="sub_layer_title">
                        		<h3>제어 정보 입력/전송</h3>
                        	</div>
                        	<div class="chart_top new">
                        		<table class="bit_chart">
                        			<tr>
                        				<th>
                        					<label><input id="check_reset" type="checkbox" checked="checked">장비 Reset</label>
                       					</th>
                        				<td style="padding: 9px 7px;">
                        					<select id="select_sys_ctrl" class="in list85">
                                               <option value="0">시스템 변화없음</option>
                                               <option value="1">시스템 리셋</option>
                                    		</select>
                                    		<select id="select_lcd_ctrl" class="in list85">
                                               <option value="1">LCD ON</option>
                                               <option value="0">LCD OFF</option>
                                    		</select>
                                    		
                                    		<select id="select_w_reset" class="in text170">
                                               <option value="0">메인보드 재시동</option>
                                               <option value="1">제어보드 재시동</option>
                                               <option value="2">BIT프로세스 재시동</option>
                                               <option value="3">주통신장치 재시동</option>
                                               <option value="4">보조통신장치 재시동</option>
                                    		</select>
                                    		
                        				</td>
                        			</tr>
                        		</table>
                        	</div>
                        	<div class="all_check new">
                        		<span>
                        			<label><input id="check_all" type="checkbox">개별 항목 제어</label>
                       			</span>
                        	</div>
                        	<table class="bit_chart" id="ctrl_wrap">
                        		                        		
                        		<!-- 인천 ##### -->
                        		<!-- 인천 ##### -->
                        		<!-- 인천 ##### -->
                        		<!-- 인천 ##### -->
                        		<tr class="ic">
                        			<th>전원리셋여부</th>
                        			<td>
                        				<select id="select_i_power_reset" class="in text80">
                        					<option value="0">없음</option>
                        					<option value="1">리셋</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="ic">
                        			<th>화면전원자동</th>
                        			<td>
                        				<select id="select_i_power_mode" class="in text80">
                        					<option value="1">자동</option>	
                        					<option value="0">수동</option>
                        				</select>
                        			</td>
                        			<th>FAN자동여부</th>
                        			<td>
                        				<select id="select_i_fan_mode" class="in text80">
                        					<option value="1">자동</option>
                        					<option value="0">수동</option>
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="ic">
                        			<th>히터자동여부</th>
                        			<td>
                        				<select id="select_i_heater_mode" class="in text80">
                        					<option value="1">자동</option>
                        					<option value="0">수동</option>
                        				</select>
                        			</td>
                        			<th>음량자동여부</th>
                        			<td>
                        				<select id="select_i_volume_mode" class="in text80">
                        					<option value="1">자동</option>
                        					<option value="0">수동</option>
                        				</select>
                        			</td>
                        		</tr>
                        		
                        		<tr class="ic">
                        			<th>휘도자동여부</th>
                        			<td>
                        				<select id="select_i_light_mode" class="in text80">
                        					<option value="1">자동</option>
                        					<option value="0">수동</option>
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="ic">
                        			<th>LCD휘도</th>
                        			<td>
                        				<select id="select_i_light_value" class="in text80">
                        					<option value="0">어두움</option>
                        					<option value="1">밝음</option>	
                        				</select>
                        			</td>
                        			<th>LED휘도(%)</th>
                        			<td>
                        				<input type="number" class="in text80" id="input_i_led_light" value="10">
                        			</td>
                        		</tr>
                        		<tr class="ic">
                        			<th>LCD운영제어</th>
                        			<td>
                        				<select id="select_i_lcs_operCtrl" class="in text80">
                        					<option value="0">Normal</option>
                        					<option value="1">Off</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="ic">
                        			<th>화면ON/OFF</th>
                        			<td>
                        				<select id="select_i_monitor_onoff" class="in text80">
                        					<option value="1">ON</option>
                        					<option value="0">OFF</option>	
                        				</select>
                        			</td>
                        			<th>FAN ON/OFF</th>
                        			<td>
                        				<select id="select_i_fan_onoff" class="in text80">
                        					<option value="1">ON</option>
                        					<option value="0">OFF</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="ic">
                        			<th>히터 ON/OFF</th>
                        			<td>
                        				<select id="select_i_heater_onoff" class="in text80">
                        					<option value="1">ON</option>
                        					<option value="0">OFF</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="ic led">
                        			<th>볼륨</th>
                        			<td>
                        				<input type="number" class="in text80" id="input_i_volume" value="5">
                        			</td>
                        			<th>TTS 볼륨</th>
                        			<td>
                        				<input type="number" class="in text80" id="input_i_tts_volume" value="5">
                        			</td>
                        		</tr>
                        		<tr class="ic led">
                        			<th>한국어</th>
                        			<td>
                        				<input type="number" class="in text80" id="input_i_kr" value="1">
                        			</td>
                        			<th>영어</th>
                        			<td>
                        				<input type="number" class="in text80" id="input_i_en" value="0">
                        			</td>
                        		</tr>
                        		<tr class="ic led">
                        			<th>중국어</th>
                        			<td>
                        				<input type="number" class="in text80" id="input_i_ch" value="0">
                        			</td>
                        		</tr>
                        		
                        		<!-- 광역 ##### -->
                        		<!-- 광역 ##### -->
                        		<!-- 광역 ##### -->
                        		<!-- 광역 ##### -->
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x8E_6">LCD ON/OFF</label></th>
                        			<td>
                        				<select id="select_w_lcd_onoff" class="in list170">
                        					<option value="1">ON</option>
                        					<option value="0">OFF</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x8E_7">LCD 밝기</label></th>
                        			<td>
                        				<select id="select_w_lcd_light" class="in text170">
                        					<option value="0">자동조절</option>
                        					<option value="1">보통</option>
                        					<option value="2">밝음</option>
                        					<option value="3">매우밝음</option>
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x8E_17">볼륨</label></th>
                        			<td>
                        				 <input type="number" min="0" max="10" class="in text170" id="input_w_volume" value="3">
                        			</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x8E_12">FAN ON/OFF</label></th>
                        			<td>
                        				<select id="select_w_fan_onoff" class="in list170">
                        					<option value="1">ON</option>
                        					<option value="0">OFF</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x8E_13">히터 ON/OFF</label></th>
                        			<td>
                        				<select id="select_w_heater_onoff" class="in list170">
                        					<option value="1">ON</option>
                        					<option value="0">OFF</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x8E_23">충격영상촬영기준</label></th>
                        			<td>
                        				<input type="number" min="1" max="255" class="in text170" id="input_w_shock_val" value="200">
                        			</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x8E_21">ISM(1000~56635)</label></th>
                        			<td>
                        				<input type="number" min='1000' max='56635' class="in text170" id="input_w_ism" value="1000">
                        			</td>
                        		</tr>
                        		<!-- #### -->
                        		
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x99_0">BIT운영온도값</label></th>
                        			<td>
                        				<label>MIN&nbsp;<input type="number" min="0" class="in text62" id="input_w_temp_start" value="0"></label>
                        				<span>~</span>
                        				<label>MAX&nbsp;<input type="number" min="0" class="in text62" id="input_w_temp_end" value="0"></label>
                       				</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x9C_0">모니터동작시간</label></th>
                        			<td>
                        				<label>&nbsp;ON&nbsp;<input type="text" class="in text62" id="input_w_monitor_on" value="0500"></label>
                        				<span>~</span>
                        				<label>OFF&nbsp;&nbsp;<input type="text" class="in text62" id="input_w_monitor_off" value="2359"></label>
                       				</td>
                        		</tr>
                        		<tr class="wide">
                        			<th><label><input type="radio" name="wide_radio" value="v_0x92_0">표출언어</label></th>
                        			<td>
                        				<select id="select_w_lang" class="in list170">
                        					<option value="0">한국어</option>
                        					<option value="1">영어</option>	
                        					<option value="2">일본어</option>	
                        					<option value="3">중국어</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		
                        		<!-- 신규 구축  ####-->
                        		<!-- 신규 구축  ####-->
                        		<!-- 신규 구축 #### -->
                        		<tr class="new">
                        			<th>볼륨</th>
                        			<td><input type="number" class="in text170" id="input_e_volume"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>잠시후 도착조건</th>
                        			<td>
                        				<select id="select_e_incoming_type" class="in list170">
                        					<option value="0">시간기준</option>
                        					<option value="1">잔여 정류장 기준</option>	
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="new">
                        			<th>잠시후 도착 시간</th>
                        			<td><input type="number" class="in text170" id="input_e_incoming_time"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>잠시후 도착 정류장</th>
                        			<td><input type="number" class="in text170" id="input_e_incoming_stop"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>화면 저장 주기(초)</th>
                        			<td><input type="number" class="in text170" id="input_e_send_capture_cycle"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>정보 정렬 방식</th>
                        			<td>
                        				<select id="select_e_bit_sort_type" class="in list170">
                        					<option value="0">노선번호 기준</option>
                                            <option value="1">도착예정 기준</option>
                        				</select>
                        			</td>
                        		</tr>
                        		<tr class="new">
                        			<th>홍보이미지 대기(초)</th>
                        			<td><input type="number" class="in text170" id="input_e_arrv_info_time"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>홍보이미지 표출(초)</th>
                        			<td><input type="number" class="in text170" id="input_e_scenario_time"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>팬동작온도(MAX)</th>
                        			<td><input type="number" class="in text170" id="input_e_fan_max_temper"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>팬동작온도(MIN)</th>
                        			<td><input type="number" class="in text170" id="input_e_fan_min_temper"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>히터동작온도(MAX)</th>
                        			<td><input type="number" class="in text170" id="input_e_heater_max_temper"></td>
                        		</tr>
                        		<tr class="new">
                        			<th>히터동작온도(MIN)</th>
                        			<td><input type="number" class="in text170" id=input_e_heater_min_temper></td>
                        		</tr>
                        		<tr class="new">
                        			<th>음성정보</th>
                        			<td>
                        				<select id="select_e_volume_yn" class="in list170">
                                        	<option value="0">OFF</option>
                                            <option value="1">ON</option>
                                   		</select>
                        			</td>
                        		</tr>
                        	</table>
                        	<!-- 버튼 -->
                        	<div class="subcon_right_btn">
                        		<ul>
                        			<li style="width: 100%;"><a id="btn_send" href="javascript:void(0);">전송</a></li>
                        			<!-- <li><a id="btn_request" href="">상태정보요청</a></li> -->
                        		</ul>
                        	</div>
                        </div>   <!-- 제어 항목 END  -->
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
	</div>
</body>
</html>
