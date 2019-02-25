<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>메시지 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v03/v0306.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">

       <div class="big_wrap pop">
		<div class="pop_title2">
			<h2>파라미터 전송</h2>
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
                                		<!-- <option value="123">광역제공서버</option> -->
                                		<!-- <option value="124">강화제공서버</option> -->
                                  	</select>
                                </td> 
                                <!-- <th>구분</th>
                                <td>
                                	<select id="select_cate_flag" class="in bit_list3" name="구분">
                                	<option value="0">노선별</option>
                                	<option value="1">도로별</option>
                                  	</select>
                                </td>
                                <th id="cate_name">노선명</th>
                                <td>
                                	<select id="select_cate_type" class="in bit_list3" name="노선명">
                                  	</select>
                                </td> -->
                                <th>안내기유형</th>
                                <td>
                                	<select id="select_bit_type" class="in bit_list3 list_265" name="안내기유형" id="sel_bittp">
                                  	</select>
                                </td> 
                                <!-- <th>정류소명</th>
                                <td>
                                	<select id="select_bstop" class="in bit_list3" name="안내기유형">
                                  	</select>
                                </td>    -->                                                 
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
                        		<table id="bit_param_list"></table>
                        	</div>
                        </div>
                         <div class="sinalio_right">
                        	<!-- 파라미터 선택 --> 
                        	<div class="para_transmit">                  	
                        		<div class="bit_char_title">
                        			<h3>파라미터 선택</h3>
                        		</div>
                        		<div class="para_top">
                        			파라미터 ID : <select id="select_param_id" class="in list345 bitin">
                                               <option value="01">리스트1</option>
                                               <option value="02">리스트2</option>
                                    		</select>
                                </div>
                        		
                        	</div>     
                        	<!-- 파라미터 선택 끝 --> 
                        		
                        		<!-- 공통 -->                        	
                        		<div class="bit_char_title ic_wrap">
                        			<h3>공통</h3>
                        		</div>
                        		<table class="bit_chart para_chart ic_wrap">
                        			<tr>
                        				<th>통신 재시도 횟수</th>
                        				<td><input type="number" min="1" max="5" class="in text140 bitin" id="input_comm_retrycnt" readonly="readonly"></td>
                        				<th class="le_line">통신 타임아웃(초)</th>
                        				<td><input type="number" min="1" max="10" class="in text140 bitin" id="input_comm_tmout" readonly="readonly"></td>
                        			</tr>
                        			<tr class="led_wrap">
                        				<th>전광판 점등시각</th>
                        				<td><input type="number" class="in text140 bitin" id="input_disp_onhms" readonly="readonly"></td>
                        				<th class="le_line">전광판 소등시각</th>
                        				<td><input type="number" class="in text140 bitin" id="input_disp_offhms" readonly="readonly"></td>
                        			</tr>
                        			<tr  class="led_wrap" dis>
                        				<th>표출주기 (버스정보)</th>
                        				<td><input type="number" min="0" max="15" class="in text140 bitin" id="input_dispcycl" readonly="readonly"></td>
                        				<th class="le_line">표출주기 (수동메시지)</th>
                        				<td><input type="number" min="0" max="15" class="in text140 bitin" id="input_msgcycl" readonly="readonly"></td>
                        			</tr>
                        		</table>
                        	
                        	<!-- LED -->
                        	
                        		<div class="bit_char_title bit_title2 ic_wrap">
                        			<h3>LED</h3>
                        		</div>
                        		<table class="bit_chart led_wrap para_chart ic_wrap" >
                        			<tr>
                        				<th>팬자동온도(℃)</th>
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" name="팬자동온도" id="input_fan_temper" readonly="readonly"></td>
                        				<th class="le_line">히터 자동온도(℃)</th>
                        				<td><input type="number" min="-20" max ="50" class="in text140 bitin" name="히터자동온도" id="input_heat_temper" readonly="readonly"></td>
                        			</tr>
                        			<tr>
                        				<th>노선명 폰트유형</th>
                        				<td>
                        					<select class="in text140 bitin" id="select_route_font" disabled="disabled">
                        						<option value=""></option>
                        						<option value="0">굴림체</option>
                        						<option value="1">돋움체</option>
                        						<option value="2">바탕체</option>
                       						</select>	
                       					</td>
                        				<th class="le_line">노선명 폰트색상</th>
                        				<td>
                       						<select class="in text140 bitin" id="select_route_fontcolor" disabled="disabled">
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
                       						<select class="in text140 bitin" id="select_arrive_font" disabled="disabled">
                        						<option value=""></option>
                        						<option value="0">굴림체</option>
                        						<option value="1">돋움체</option>
                        						<option value="2">바탕체</option>
                       						</select>
                       					</td>
                        				<th class="le_line">예정시간 폰트색상</th>
                        				<td>
                       						<select class="in text140 bitin" id="select_arrive_fontcolor" disabled="disabled">
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
                        					<select class="in text140 bitin" id="select_bstop_font" disabled="disabled">
                        						<option value=""></option>
                        						<option value="0">굴림체</option>
                        						<option value="1">돋움체</option>
                        						<option value="2">바탕체</option>
                       						</select>
                        				</td>
                        				<th class="le_line">정류소수 폰트색상</th>
                        				<td>
                       						<select class="in text140 bitin" id="select_bstop_fontcolor" disabled="disabled">
                        						<option value="0"></option>
                        						<option value="1">RED</option>
                        						<option value="2">GREEN</option>
                        						<option value="3">YELLOW</option>
                       						</select>
                       					</td>
                        			</tr>
                        		</table>
                        		
                        	<!-- LCD -->
                        	
                        		<div class="bit_char_title bit_title2 ic_wrap">
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
                        				<td><input type="number" class="in text62 bitin" id="input_volume_day_hms">>
                        					<input type="number" class="in text62 bitin" id="input_day_volume"></td>
                        				<th class="le_line">(밤)</th>
                        				<td><input type="number" class="in text62 bitin" id="input_volume_night_hms">>
                        					<input type="number" class="in text62 bitin" id="input_night_volume"></td>
                        			</tr>
                        			<tr>
                        				<th>밝기 제어 설정 (낮)</th>
                        				<td><input type="number" class="in text62 bitin" id="input_bright_day_hms">>
                        					<input type="number" class="in text62 bitin" id="input_day_bright"></td>
                        				<th class="le_line">(밤)</th>
                        				<td><input type="number" class="in text62 bitin" id="input_bright_night_hms">>
                        					<input type="number" class="in text62 bitin" id="input_night_bright"></td>
                        			</tr>
                        		</table>
                        		
                        		
                        		
                        		<div class="bit_char_title bit_title2 vitzo_wrap" >
                        			<h3>선택 내역</h3>
                        		</div>
                        		<table class="bit_chart vitzo_wrap" >
                        			<tr>
                        				<th>볼륨</th>
                        				<td><input type="text" class="in text140 bitin" id="input_e_volume" readonly="readonly"></td>
                        				<th class="le_line">음성정보</th>
                        				<td>
                        					<select id="select_e_volume_yn" class="in list140 bitin" disabled="disabled">
                                               <option value="0">OFF</option>
                                               <option value="1">ON</option>
                                    		</select>
                        				</td>
                        			</tr>
                        			<tr>
                        				<th rowspan="2">잠시후도착 조건</th>
                        				<td rowspan="2">
                        					<select id="select_e_incoming_type" class="in list140 bitin" disabled="disabled">
                                               <option value="0">시간 기준</option>
                                               <option value="1">잔여 정류장 기준</option>
                                    		</select>
                                    	</td>
                        				<th class="le_line">잠시후도착시간</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_incoming_time" readonly="readonly">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th class="le_line">잠시후도착정류장</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_incoming_stop" readonly="readonly">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>Screen Capture(초)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_send_capture_cycle" readonly="readonly">
                        				</td>
                        				<th class="le_line">정보정렬 방식</th>
                        				<td>
                        					<select id="select_e_bit_sort_type" class="in list140 bitin" disabled="disabled">
                                               <option value="0">노선번호 기준</option>
                                               <option value="1">도착예정 기준</option>
                                    		</select>
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>홍보이미지 대기</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_arrv_info_time" readonly="readonly">
                        				</td>
                        				
                        				<th class="le_line">홍보이미지 표출</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_scenario_time" readonly="readonly">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>팬동작온도(MAX)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_fan_max_temper" readonly="readonly">
                        				</td>
                        				
                        				<th class="le_line">팬동작온도(MIN)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_fan_min_temper" readonly="readonly">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>히터동작온도(MAX)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_heater_max_temper" readonly="readonly">
                        				</td>
                        				
                        				<th class="le_line">히터동작온도(MIN)</th>
                        				<td>
                        					<input type="text" class="in text140 bitin" id="input_e_heater_min_temper" readonly="readonly">
                        				</td>
                        			</tr>
                        			<tr>
                        				<th>모니터ON시간</th>
                        				<td><input type="text" class="in text140 bitin" id="input_e_monitor_on" readonly="readonly"></td>
                        				<th class="le_line">모니터OFF시간</th>
                        				<td><input type="text" class="in text140 bitin" id="input_e_monitor_off" readonly="readonly"></td>
                        			</tr>
                        			
                        		</table>  
                        	<!-- 버튼 -->
                        	<div class="bit3_btn">
                        		<a href="javascript:void(0);" id="btn_send"><img src="./images/icon_ok.png" alt="">전송</a>
                        	</div>                        	
                        </div>                       
                        <!-- <div class="sinalio_right">
                        	파라미터ID
                        		<div class="bit_char_title">
                        			<h3>파라미터ID</h3>
                        		</div>
                        		<table class="bit_chart">
                        			<tr>
                        				<th>파라미터ID</th>
                        				<td><select id="" class="in list140 bitin" name="파라미터ID">
                                               <option value="01">리스트1</option>
                                               <option value="02">리스트2</option>
                                    		</select>
                                    		<input type="text" class="in text140 bitin" name="파라미터ID 입력">
                                    	</td>
                        			</tr>
                        		</table>
                        	
                        	LCD 점등/소등시간
                        		<div class="bit_char_title bit_title2">
                        			<h3>LCD 점등/소등시간</h3>
                        		</div>
                        		<table class="bit_chart">
                        			<tr>
                        				<th>점등시간</th>
                        				<td><input type="text" class="in text140 bitin" name="점등시간"></td>
                        				<th class="le_line">소등시간</th>
                        				<td><input type="text" class="in text140 bitin" name="소등시간"></td>
                        			</tr>
                        		</table>
                        	온도설정
                        		<div class="bit_char_title bit_title2">
                        			<h3>운영온도설정 (℃)</h3>
                        		</div>
                        		<table class="bit_chart">
                        			<tr>
                        				<th>최대온도 (℃)</th>
                        				<td><input type="text" class="in text140 bitin" name="최대온도"></td>
                        				<th class="le_line">최소온도 (℃)</th>
                        				<td><input type="text" class="in text140 bitin" name="최소온도"></td>
                        			</tr>
                        		</table>
                        		제어설정
                        		<div class="bit_char_title bit_title2">
                        			<h3>제어설정</h3>
                        		</div>
                        		<table class="bit_chart">
                        			<tr>
                        				<th>음량</th>
                        				<td><input type="text" class="in text140 bitin" name="최대온도"></td>
                        				<th class="le_line">LEC밝기</th>
                        				<td><select id="" class="in list140 bitin" name="파라미터ID">
                                               <option value="01">리스트1</option>
                                               <option value="02">리스트2</option>
                                    		</select>
                                    	</td>
                        			</tr>
                        			<tr>
                        				<th>히터전원</th>
                        				<td><select id="" class="in list140 bitin" name="파라미터ID">
                                               <option value="01">리스트1</option>
                                               <option value="02">리스트2</option>
                                    		</select>
                                    	</td>
                        				<th class="le_line">팬전원</th>
                        				<td><select id="" class="in list140 bitin" name="파라미터ID">
                                               <option value="01">리스트1</option>
                                               <option value="02">리스트2</option>
                                    		</select>
                                    	</td>
                        			</tr>
                        			<tr>
                        				<th>언어설정</th>
                        				<td><select id="" class="in list140 bitin" name="파라미터ID">
                                               <option value="01">리스트1</option>
                                               <option value="02">리스트2</option>
                                    		</select>
                                    	</td>
                        				<th class="le_line">충격영상 촬영기준값</th>
                        				<td><input type="text" class="in text140 bitin" name="최소온도"></td>
                        			</tr>
                        		</table>
                        	<div class="basecon_left_img">
                        		<img src="./images/left_paper.png">
                        	</div>
                        	버튼
                        	<div class="bit3_btn">
                        		<a href=""><img src="./images/icon_ok.png" alt="">전송</a>
                        	</div>
                        </div> -->
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
	</div>
</body>
</html>
