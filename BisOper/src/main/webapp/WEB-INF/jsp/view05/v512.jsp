<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 추가</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v512.js"></script>
<body>
	<jsp:include page="../comm/pop_choice.jsp"/>
        <div class="bitplus_wrap pop">
            <div class="pop_title">
                <h2>BIT 추가</h2>
                <!-- <p><a class="pop_close" href="javascript:void(0);"><img src="./images/close_white.png" alt="닫기"></a></p> -->
            </div>
            <div id="container" class="pop_conbody bitplus_pop"> 
                <!--1페이지 시작-->
                <div class="bit_plus_page1"><!------------------------BIT추가 1페이지 아래 [다음] 버튼 클릭 시 2페이지로 이동-->
                    <div class="layer_title">
                        <h3>기본사항</h3>
                    </div>
                    <table class="chart_pop1"  border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <th rowspan="2">추가할 BIT 갯수</th>
                            <td rowspan="2">
                                <input id="input_bit_number" type="text" class="in in_text bit_text2" name="bit">
                                <p class="ex_left ex_magin_top">* 추가 할 BIT가 여러개라면<br>공통적으로 값이 적용 됩니다.</p>
                            </td>
                            <th>소속 그룹</th>
                            <td><select id="select_group" class="in in_list bit_list2">
                                    <option value="01">리스트1</option>
                                    <option value="02">리스트2</option>
                                    <option value="03">리스트3</option>
                                </select>
                                <a id="btn_edit_group" class="ss_btn bitpop_btn"href="javascript:void(0);">그룹 편집</a>
                            </td>
                        </tr>
                        <tr>
                            <!-- <th style="border-left:1px solid #eaeaea!important;">정보제공 그룹</th>
                            <td>
                                <select id="select_provide_group" class="in in_list bit_list2">
                                    <option value="01">리스트1</option>
                                    <option value="02">리스트2</option>
                                    <option value="03">리스트3</option>
                                </select>
                                <a id="btn_edit_provide_group" class="ss_btn bitpop_btn"href="javascript:void(0);">그룹 편집</a>
                            </td> -->
                        </tr>
                        <tr>
                            <th>BIT 종류</th>
                            <td><select id="select_bit_type" class="in in_list bit_list2">
                                    <option value="01">리스트1</option>
                                    <option value="02">리스트2</option>
                                    <option value="03">리스트3</option>
                                </select></td>
                            <th>설치지점</th>
                            <td>
                                <input id="input_stop_name" type="text" class="in in_text bit_text2">
                                <a id="btn_sel_stop" class="ss_btn bitpop_btn"href="javascript:void(0);">지점 선택</a>
                            </td>
                        </tr>
                    </table>
                    <div class="layer_title">
                        <h3>소프트웨어 동작 기본값</h3>
                    </div>
                    <table class="chart_pop"  border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <th>음성안내 사용 유무</th>
                            <td><select id="select_voice_use_flag" class="in in_list bit_list2">
                                    <option value="1">네</option>
                                    <option value="0">아니오</option>
                                </select></td>
                            <th>외국어 표시 유무</th>
                            <td><select id="select_foreign_use_flag" class="in in_list bit_list2">
                                    <option value="0">아니오</option>
                                    <option value="1">네</option>
                                </select></td>
                            <th>제공정보 정렬 기준</th>
                            <td><select id="select_info_sort_type" class="in in_list bit_list2">
                                    <option value="0">노선번호기준</option>
                                    <option value="1">도착예정시간기준</option>
                                </select></td>
                        </tr>
                        <tr>
                            <th>[잠시후 도착] 표시 기준</th>
                            <td><select id="select_incoming_type" class="in in_list bit_list2">
                                    <option value="0">도착예정시간</option>
                                    <option value="1">잔여정류장개수</option>
                                </select></td>
                            <th>상태 업데이트 주기</th>
                            <td><input id="input_status_sendcycle" type="text" class="in in_text bit_text2"></td>
                            <th>스피커 볼륨</th>
                            <td><input id="input_speaker_volume" type="text" class="in in_text bit_text2"></td>
                        </tr>
                        <tr>
                            <th>잠시후 도착 기준 시간</th>
                            <td><input id="input_incoming_time" type="text" class="in in_text bit_text2"></td>
                            <th>웹캠 촬영주기</th>
                            <td colspan="3"><input id="input_image_sendcycle" type="text" class="in in_text bit_text2"></td>
                        </tr>
                        <tr>
                            <th>잠시후 도착 잔여 정류장</th>
                            <td><input id="input_incoming_stop" type="text" class="in in_text bit_text2"></td>
                            <th>스크린샷 촬영주기</th>
                            <td colspan="3"><input id="input_capture_sendcycle" type="text" class="in in_text bit_text2"></td>
                        </tr>
                    </table>
                    <div class="layer_title">
                        <h3>하드웨어 동작 기본값</h3>
                    </div>
                    <table class="chart_pop"  border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <th>BIT화면 켜지는 시각</th>
                            <td><input id="input_disp_st_time" type="text" class="in in_text bit_text2"></td>
                            <th>BIT화면 꺼지는 시각</th>
                            <td><input id="input_disp_ed_time" type="text" class="in in_text bit_text2"></td>
                            <th>충격 감지 사용여부</th>
                            <td><select id="select_crash_detect_flag" class="in in_list bit_list2" name="text">
                              		<option value="1">사용</option>
                                    <option value="0">사용안함</option>
                                </select></td>
                        </tr>
                        <tr>
                            <th>동작 감지 사용여부</th>
                            <td><select id="select_action_detect_flag" class="in in_list bit_list2">
                                    <option value="0">아니오</option>
                                    <option value="1">네</option>
                                </select></td>
                            <th>동작 감지 감도</th>
                            <td><input id="input_action_detect_time" type="text" class="in in_text bit_text2"></td>
                            <th>충격 감지 감도</th>
                            <td><input id="input_crash_detect_value" type="text" class="in in_text bit_text2"></td>
                        </tr>
                        <tr>
                            <th>팬 동작 최소온도(꺼짐)</th>
                            <td><input id="input_fan_min_temperature" type="text" class="in in_text bit_text2"></td>
                            <th>팬 동작 최대온도(켜짐)</th>
                            <td><input id="input_fan_max_temperature" type="text" class="in in_text bit_text2"></td>
                            <th>기본 조도값</th>
                            <td><input id="input_default_illumination_value" type="text" class="in in_text bit_text2"></td>
                        </tr>
                        <tr>
                            <th>히터 동작 최소온도(켜짐)</th>
                            <td><input id="input_heater_min_temperature" type="text" class="in in_text bit_text2"></td>
                            <th>히터 동작 최대온도(꺼짐)</th>
                            <td colspan="3"><input id="input_heater_max_temperature" type="text" class="in in_text bit_text2"></td>
                        </tr>
                    </table>
                    <!--1페이지 작은버튼-->
                    <div class="pop_left_btn">
                        <ul>
                            <li><a id="btn_value_save" href="javascript:void(0);" class="s_btn bit_pop_btn"><img src="./images/icon_file.png">값 저장</a></li>
                            <li><a id="btn_value_load" href="javascript:void(0);" class="s_btn bit_pop_btn"><img src="./images/icon_call.png">값 불러오기</a></li>
                        </ul>
                    </div>
                    <div class="pop_right_btn">
                        <ul>
                            <li><a id="btn_restore" href="javascript:void(0);" class="s_btn bit_pop_btn bit_pop_btn_left"><img src="./images/icon_re3.png">기본값 복원</a></li>
                        </ul>
                    </div>
                    <!--1페이지 아래작은버튼끝--> 
                    <!--아래 버튼 시작-->
                    <div class="pop_bottom_btn">
                        <ul>
                            <li class="bottom_save be"><a href="javascript:void(0);"> &lt;뒤로</a></li><!---------------비활성 상태일 때 css [.be] 추가-->
                            <li class="bottom_close"><a id="btn_next" href="javascript:void(0);">다음&gt; </a></li>
                        </ul>
                    </div>
                    <!--아래 버튼 끝-->
                </div> 
                <!--1페이지 끝-->
                <!--2페이지 시작-->
                <div class="bit_plus_page2"  style="display:none;">
                    <!-- <div class="bit_plus_page2_top">
                        <ul>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon1.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon2.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon3.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon4.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon5.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon6.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon7.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon8.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon12.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon9.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon10.png"></a></li>
                            <li><a href="javascript:void(0);"><img src="./images/bit_plus_icon11.png"></a></li>
                        </ul>
                    </div> -->
                    <div class="pop_bit_con2">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        	<table id="bit_list"></table>
                        </div>
                    </div>
                    <!--아래 버튼 시작-->
                    <div class="pop_bottom_btn">
                        <ul>
                            <li class="bottom_save"><a id="btn_back" href="javascript:void(0);"> < 뒤로</a></li>
                            <li class="bottom_close"><a id="btn_save" href="javascript:void(0);"><img src="./images/icon_ok.png">완료</a></li>
                        </ul>
                    </div>
                    <!--아래 버튼 끝-->
                </div> 
                <!--2페이지 끝-->
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
