<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
</head>

<body>
	<div class="busd_wrap" id="pop_bus">
        <div class="busd_pop">
            <div class="pop_title">
                <h2>버스 상세 정보</h2>
                <p id="buspop_close"><img src="./images/close_white.png" alt="닫기"></p>
            </div>
            <div class="pop_conbody busd_pop"> 
                <div class="busd1">
                    <div class="layer_title bus_title">
                        <h3>최근 수집 이벤트</h3>
                        <p id="txt_center_colldt"></p>
                    </div>
                    <ul class="busdt_title">
                        <li>· 이벤트발생일시 <span id="txt_evt_occurdt"></span></li>
                        <li>· 운행 개시 시간 <span id="txt_run_startdt"></span></li>
                    </ul>
                    <table class="busd_t">
                        <tr>
                            <th>· 이벤트유형</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_evttpcd" readonly="readonly"></td>
                            <th>· 버스ID</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_busid" readonly="readonly"></td>
                            <th>· 좌표</th>
                            <td>
                                <input type="text" class="in in_text busd_text2" id="buspop_posx" readonly="readonly">
                                <input type="text" class="in in_text busd_text2" id="buspop_posy" readonly="readonly"></td>
                        </tr>
                        <tr>
                            <th>· 세부유형</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_evtsubtpcd" readonly="readonly"></td>
                            <th>· MDTID</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_mdtid" readonly="readonly"></td>
                            <th>· 각도</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_heading" readonly="readonly"></td>
                        </tr>
                        <tr>
                            <th>· 운행상태</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_rundistinctcd" readonly="readonly" ></td>
                            <th>· 노선ID</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_routeid" readonly="readonly" ></td> 
                            <th>· 속도</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_runspd" readonly="readonly" ></td> 
                        </tr>
                        <tr>
                            <th>· 막차</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_lastbusyn" readonly="readonly" ></td>
                            <th>· 노드ID</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_nodeid" readonly="readonly" ></td> 
                            <th>· 방향</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_dircd" readonly="readonly" ></td> 
                        </tr>
                        <tr>
                            <th>· 대차</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_chgbusyn" readonly="readonly" ></td>
                            <th>· 시컨스</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_pathseq" readonly="readonly" ></td> 
                            <th>· 정차시간</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_bstop_stoptm" readonly="readonly" ></td> 
                        </tr>
                        <tr>
                            <th>· 개문상태</th>
                            <td><input type="text" class="in in_text busd_text1" id="buspop_openstatcd" readonly="readonly" ></td>
                            <th>· 운행회차</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_plan_runord" readonly="readonly" ></td> 
                            <th>· 운행거리</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_rundist" readonly="readonly" ></td> 
                        </tr>
                        <tr>
                            <th>· 이벤트수집순번</th>
                            <td colspan="3"><input type="text" class="in in_text busd_text1 busdor" id="buspop_rcvseq"></td> 
                            <th>· 운행시간</th>
                            <td><input type="text" class="in in_text busd_text2" id="buspop_runtm" readonly="readonly" ></td> 
                        </tr>
                    </table>
                </div>
                
                <div class="busd2">
                    <div class="layer_title bus_title">
                        <h3>최근 단말기 제공 정보</h3>
                        <p id=txt_procdt></p>
                    </div>
                    <div class="busd2_l">
                        <h4>- 이격/시격 제공 정보 -</h4>
                        <table class="busd_t">
                            <tr>
                                <th>· <strong>앞앞차</strong></th>
                                <td><input type="text" id="buspop_ffbus_busid" class="in in_text busd_text2" readonly="readonly" ></td>
                                <td><input type="text" id="buspop_ffbus_locgap" class="in in_text busd_text3" readonly="readonly" >개</td>
                                <td><input type="text" id="buspop_ffbus_tmgap" class="in in_text busd_text3" readonly="readonly" >분</td>
                            </tr>
                            <tr>
                                <th>· <strong>앞차</strong></th>
                                <td><input type="text" id="buspop_fbus_busid" class="in in_text busd_text2 busdb" readonly="readonly" ></td>
                                <td><input type="text" id="buspop_fbus_locgap" class="in in_text busd_text3 busdb" readonly="readonly" >개</td>
                                <td><input type="text" id="buspop_fbus_tmgap" class="in in_text busd_text3 busdb" readonly="readonly" >분</td>
                            </tr>
                            <tr>
                                <th>· <strong>뒤차</strong></th>
                                <td><input type="text" id="buspop_nbus_busid" class="in in_text busd_text2 busdb" readonly="readonly" ></td>
                                <td><input type="text" id="buspop_nbus_locgap" class="in in_text busd_text3 busdb" readonly="readonly" >개</td>
                                <td><input type="text" id="buspop_nbus_tmgap" class="in in_text busd_text3 busdb" readonly="readonly" >분</td>
                            </tr>
                            <tr>
                                <th>· <strong>뒤뒤차</strong></th>
                                <td><input type="text" id="buspop_nnbus_busid" class="in in_text busd_text2" readonly="readonly" ></td>
                                <td><input type="text" id="buspop_nnbus_locgap" class="in in_text busd_text3" readonly="readonly" >개</td>
                                <td><input type="text" id="buspop_nnbus_tmgap" class="in in_text busd_text3" readonly="readonly" >분</td>
                            </tr>
                            <tr>
                                <th>· 이벤트제공순번</th>
                                <td><input type="text" id="buspop_sndseq" class="in in_text busd_text1 busdor" readonly="readonly" ></td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="busd2_r">
                        <h4>- 도착 예정 정보 -</h4>
                        <table class="busd_t">
                            <tr>
                                <th>· 종점도착예정시간</th>
                                <td colspan="3"><input type="text" id="buspop_dest_arrplantm" class="in in_text busd_text2" readonly="readonly" >분
                                   <span style="margin-left:30px"> · 잔여거리 <input type="text" id="buspop_dest_restdist" class="in in_text busd_text2" readonly="readonly" >m</span></td>
                            </tr>
                            <tr>
                                <th>· <strong>첫번째</strong></th>
                                <td><input type="text" id="buspop_bstopid_1"   class="in in_text busd_text4" readonly="readonly" ></td>
                                <td><input type="text" id="buspop_arrplantm_1" class="in in_text busd_text3" readonly="readonly" >분</td> 
                                <td><input type="text" id="buspop_trvspd_1"    class="in in_text busd_text3 busdy" readonly="readonly" >km/h</td>
                            </tr>
                            <tr>
                                <th>· <strong>두번째</strong></th>
                                <td><input type="text" id="buspop_bstopid_2"   class="in in_text busd_text4" readonly="readonly" ></td>
                                <td><input type="text" id="buspop_arrplantm_2" class="in in_text busd_text3" readonly="readonly" >분</td>
                                <td><input type="text" id="buspop_trvspd_2"    class="in in_text busd_text3 busdy" readonly="readonly" >km/h</td>
                            </tr>
                            <tr>
                                <th>· <strong>세번째</strong></th>
                                <td><input type="text" id="buspop_bstopid_3"   class="in in_text busd_text4" readonly="readonly" ></td>
                                <td><input type="text" id="buspop_arrplantm_3" class="in in_text busd_text3" readonly="readonly" >분</td>
                                <td><input type="text" id="buspop_trvspd_3"    class="in in_text busd_text3 busdr" readonly="readonly" >km/h</td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <div class="busd3">
                    <div class="layer_title bus_title">
                        <h3>단말기 상태 정보</h3>
                        <p id="txt_evt_occurdt2"></p>
                    </div>
                    <div class="on" id="buspop_bstart_statyn"><!--off상태일 때 클래스를 .off 로 바꿔주세요.-->
                        <p>전원<span>ON</span></p>
                    </div>
                    <table class="busd_t busd_t2">
                        <tr>
                            <th>· GPS</th>
                            <td><input type="text" id="buspop_gps_statyn" class="in in_text busd_text3" readonly="readonly" ></td>
                            <th>· 무선랜</th>
                            <td><input type="text" id="buspop_wlan_statyn" class="in in_text busd_text3" readonly="readonly" ></td>
                            <th>· 서브단말</th>
                            <td><input type="text" id="buspop_sub_term_statyn" class="in in_text busd_text3" readonly="readonly" ></td>
                            <th>· 메모리</th>
                            <td><input type="text" id="buspop_mem_statyn" class="in in_text busd_text3" readonly="readonly" ></td>
                        </tr>
                    </table>
                </div>
                
                <div class="busd4">
                    <div class="layer_title">
                        <h3>운행 조정 지시</h3>
                    </div>
                    <div class="busd4_con">
                        <p>메시지 내용 입력</p>
                        <input type="text" class="in in_text busd_text5" id="buspop_msg_cnt"><button id="buspop_msg_btn"><img src="./images/icon_call.png" alt="전송아이콘">전송</button>
                    </div>
                </div>
           </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
