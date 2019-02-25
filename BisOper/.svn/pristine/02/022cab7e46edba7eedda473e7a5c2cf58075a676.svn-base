<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 정보 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v501.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-501">
		<jsp:include page="../comm/pop_choice.jsp"/>
		<%-- <jsp:include page="v509.jsp"/>	
		<jsp:include page="v508.jsp"/>	
		<jsp:include page="v510.jsp"/> 	   
		<jsp:include page="pop_sel_stop.jsp"/>   
		<jsp:include page="pop_addBit.jsp"/>		--%>   

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BIT관리 - BIT 정보 관리</h2>
            </div>
            <div id="container" class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <!-- <li><a id="btn_bitGrp" href="javascript:void(0);"><img src="./images/btn_big_bit1.png"><p>BIT그룹</p></a></li>
                        <li><a id="bit_business" href="javascript:void(0);"><img src="./images/btn_big_bit2.png"><p>사업정보</p></a></li>
                        <li><a id="btn_manufactuer" href="javascript:void(0);"><img src="./images/btn_big_bit3.png"><p> 제조사 </p></a></li>
                        <li><a id="btn_excel_download" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li> -->
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                    <div class="subcon_con2">
                         <div class="bit_left"><!--왼쪽-->
                             <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                 <tr>
                                     <th>사업구분</th>
                                     <td><select id="select_projecttpcd_list" class="in in_list bit_list1" name="text">
                                         <option value="01">리스트1</option>
                                         <option value="02">리스트2</option>
                                         <option value="03">리스트3</option>
                                         </select>
                                     </td>
                                    <th>BIT타입</th>
                                     <td><select id="select_bittpcd_list" class="in in_list bit_list1" name="text">
                                             <option value="01">리스트1</option>
                                             <option value="02">리스트2</option>
                                             <option value="03">리스트3</option>
                                         </select>
                                     </td>     
                                 </tr>
                                 <tr>
                                 	<th>검색어</th>
                                     <td>
                                         <div class="btn_box4_2">
                                             <input id="input_search" type="text" class="in bit_in_text" name="ID" placeholder="정류장명 / BIT ID">
                                             <span><img id="btn_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                         </div>
                                         <a id="btn_clear" href="javascript:void(0);" class="serch_clear6">clear</a>
                                     </td>  
                                     <th>서버구분</th>
                                     <td><select id="select_server_kind" class="in in_list bit_list1" name="text">
                                             <option value="">전체</option>
                                             <option value="120">신규 제공</option>
                                             <option value="126">신규 제공2</option>
                                             <option value="121">인천 제공</option>
                                             <option value="125">인천 제공2</option>
                                             <option value="122">확대 제공</option>
                                             <option value="123">광역 제공</option>
                                         </select>
                                     </td>
                                                                        
                                     <!--<th> 종류</th>
                                     <td> <select id="sel_bit_type" class="in in_list bit_list1" name="text">
                                         <option value="01">리스트1</option>
                                         <option value="02">리스트2</option>
                                         <option value="03">리스트3</option>
                                         </select> 
                                     </td> -->
                                 </tr>
                             </table>
                             <div class="bit_number">검색 결과 <span id="result_cnt"> 0</span>건</div>              
                             <div class="bit_left_chart_body" style="top:116px;">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="bit_info_list"></table>
                                                </div>
                             </div><!--왼쪽 표-->                                          
                        </div>
                        <div class="bit_right"><!--오른쪽-->
                            <div class="bit_right_chart_body">                                              
                                <!--탭시작 -->                                               
                                <div class="pop-body">	
                                    <div class="base_body">
                                        <ul class="nav_percent_h nav-pills_percent_h">
                                            <li class="active"><a href="#tab1"  id="tab_facil" data-toggle="tab" class="icon4">시설물 정보</a></li>
                                            <li class=""><a href="#tab2" id="tab_bit" data-toggle="tab" class="icon2">기본 정보</a></li>
						                </ul> 
                                    </div>
                                    <!--탭컨텐츠시작-->                      
						            <div class="tab-content_pic3">
                                        <!--기본정보 시작-->
                                        <div class="tab-pane active" id="tab1">
                                            <div class="sub_tab_con_body"> 
                                                <div class="sub_layer_title">
                                                    <h3 style="height: 28px;">시설물 기본값</h3>
                                                </div>
                                                                <table id="table_facil" class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>시설물 ID</th>
                                                                        <td>
                                                                        	<input id="input_facilid" type="text" class="in in_text bit_in" name="text" readonly="readonly">                                                                        									                                	
                                                                       	</td>
                                                                        <th>설치위치</th>
                                                                        <td>
                                                                        	<!-- <input id="input_installloc" type="text" class="in in_text bit_in" name="text"  readonly="readonly"> -->                                                                        	
                                                                        	<input type="text" class="in in_text_b serch_box_w" id="input_installloc" readonly="readonly" style="width:161px;">
                                                                        	<input type="hidden" id="input_bstopid">
										                                	<a id="btn_choice" href="javascript:void(0);" class="serch_ch">선택</a>
                                                                        </td>
                                                                    </tr>
                                                                     <tr>
                                                                        <th>모델명</th>
																		<td><input id="input_modelnm" type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>사용여부</th>
                                                                        <td><select id="select_useyn" class="in in_list bit_list1" name="text">
                                                                                <option value="1">사용</option>
                                                        						<option value="0">사용안함</option>
                                                                            </select></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>IP  #1</th>
                                                                        <td><input id="input_ipaddr_1" type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>IP  #2</th>
                                                                        <td><input id="input_ipaddr_2" type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>통신링크 유형</th>
                                                                        <td><select id="select_commlinktpcd" class="in in_list bit_list1" name="text">
                                                                                <option value="1">test</option>
                                                        						<option value="0">test</option>
                                                                            </select></td>
                                                                        <th>포트번호</th>
                                                                        <td><input id="input_portno" type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>MAC 주소</th>
                                                                        <td><input id="input_macaddr" type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>모뎀<br>시리얼번호</th>
                                                                        <td><input id="input_facil_modem_serialno" type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>제작일자</th>
                                                                        <td><input id="input_manufymd" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                        <th>입고일자</th>
                                                                        <td><input id="input_storeymd" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>출고일자</th>
                                                                        <td><input id="input_delivymd" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                        <th>구매일시</th>
                                                                        <td><input id="input_purchdt" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>설치일시</th>
                                                                        <td><input id="input_installdt" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                        <th>유지보수<br>관계기관</th>
                                                                        <td><select id="select_maintn_relatorgid" class="in in_list bit_list1" name="text">
                                                                                <option value="0">아니오</option>
                                                                                <option value="1">네</option>
                                                                            </select></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>사용<br>시작일시</th>
                                                                        <td><input id="input_use_startdt" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                        <th>사용<br>종료일시</th>
                                                                        <td><input id="input_use_enddt" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>COM_ASSO</th>
                                                                        <td><input id="input_com_asso" type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>변경일시</th>
                                                                        <td><input id="input_upddt" type="text" class="in in_text bit_in" name="text" readonly="readonly"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>통신회선ID</th>
                                                                        <td><input id="input_com_linenum" type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>전기고객번호</th>
                                                                        <td><input id="input_power_num" type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>                                                                    
                                                                    <tr>
                                                                        <!-- <th>변경자ID</th>
                                                                        <td><input id="input_upd_userid" type="text" class="in in_text bit_in" name="text"></td> -->
                                                                        <th>기록</th>
                                                                        <td colspan="3"><input id="input_history" type="text" class="in in_text bit_in" style="width:314px" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>설명</th>
                                                                        <td colspan="3"><input id="input_descr" type="text" class="in in_text bit_in3" style="width:314px" name="text"></td>
                                                                    </tr>                                                                      
                                                                </table>
                                            </div>
                                        </div>
                                        <!--기본정보 끝-->
                                        <!--BIT설정 정보 시작-->
                                        <div class="tab-pane" id="tab2">
                                        	<div class="sub_chart_body2">
                                                <div class="sub_layer_title">
                                                    <h3>BIT 일반 정보</h3>
                                                </div>
                                                                <table id="table_bit" class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>BIT ID</th>
                                                                        <td><input id="input_bitid" type="text" class="in in_text bit_in" name="ID" readonly="readonly"></td>
                                                                        <th>설치 정류장</th>
                                                                        <td id="td_bstop"><input id="input_bstopnm" type="text" class="in in_text bit_in" name="ID" placeholder="시설물 탭에서 설정"readonly="readonly">
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                    	<th>사업구분</th>
                                                                        <td><select id="select_projecttpcd" class="in in_list bit_list1" name="text">
                                                                                <option value="1">세종-공주 광역버스정보시스템 구축사업</option>
                                                                            </select>
                                                                        </td>
                                                                    	 <th>BIT 유형</th>
                                                                        <td><select id="select_bittpcd" class="in in_list bit_list1" name="text">
                                                                                <option value="1">LCD</option>
                                                                                <option value="2">LED</option>
                                                                                <option value="3">양면형</option>
                                                                            </select></td>                                                                                                                                              
                                                                    </tr>
                                                                    <!-- 
                                                                    <tr>
                                                                        <th>BIT 설치유형</th>
                                                                        <td><select id="select_bit_install_type" class="in in_list bit_list1" name="text">
                                                                                <option value="0">독립형</option>
                                                                                <option value="1">거치형</option>
                                                                            </select></td>
                                                                        <th>제조사</th>
                                                                        <td><select id="select_company_id" class="in in_list bit_list1" name="text">
                                                                                <option value="2015001">한국정보기술</option>
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>적용중인<br>시나리오</th>
                                                                        <td><input id="input_scenario_id" type="text" class="in in_text bit_in" name="ID"></td>
                                                                        <th>아이콘 정렬</th>
                                                                        <td><select id="select_icon_position" class="in in_list bit_list1" name="text">
                                                                                <option value="0">오른쪽</option>
                                                                                <option value="1">왼쪽</option>
                                                                            </select></td>                                                                        
                                                                    </tr> -->                                                                                                                                          
                                                                   	<tr>
                                                                    	<th>NEWS_SEND_IND</th>
                                                                        <td><select id="select_news_send_ind" class="in in_list bit_list1" name="text">
                                                                                <option value="0">Off</option>
                                                                                <option value="1">On</option>
                                                                     		</select></td>
                                                                     	<th>TTS_CNTL_IND</th>
                                                                        <td><select id="select_tts_cntl_ind" class="in in_list bit_list1" name="text">
                                                                                <option value="0">Off</option>
                                                                                <option value="1">On</option>
                                                                     		</select></td>                                                      
                                                                    </tr>                                                                    
                                                                    <tr>
                                                                    	<th>WEATHER_SEND_IND</th>
                                                                        <td><select id="select_weather_send_ind" class="in in_list bit_list1" name="text">
                                                                                <option value="0">Off</option>
                                                                                <option value="1">On</option>
                                                                     		</select></td>
                                                                   		<th>배차 사용 여부</th>
                                                                        <td><select id="select_dmb_cntl_ind" class="in in_list bit_list1" name="text">
                                                                                <option value="0">미사용</option>
                                                                                <option value="1">사용</option>
                                                                     		</select></td>                                                       
                                                                    </tr>
                                                                    <tr>
                                                                    	<th>SUBWAY_SEND_IND</th>
                                                                        <td><select id="select_subway_send_ind" class="in in_list bit_list1" name="text">
                                                                                <option value="0">Off</option>
                                                                                <option value="1">On</option>
                                                                     		</select></td>
                                                                   		<th>SHOCK_CNTL_IND</th>
                                                                        <td><select id="select_shock_cntl_ind" class="in in_list bit_list1" name="text">
                                                                                <option value="0">Off</option>
                                                                                <option value="1">On</option>
                                                                     		</select></td>                                                       
                                                                    </tr>
                                                                    <tr>
                                                                        <th>BIT SERVER ID</th>
                                                                        <td><input id="input_bitserver_id" type="text" class="in in_text bit_in" name="ID" ></td>
                                                                        <th>COMNUM</th>
                                                                        <td><input id="input_comnum" type="text" class="in in_text bit_in" name="ID">
                                                                    </tr>
                                                                    <tr>                                                                        
                                                                        <th>설치구</th>
                                                                        <td><input id="input_admin" type="text" class="in in_text bit_in" name="ID" >
                                                                    </tr>                                                                    
                                                                </table>
                                                                <div class="sub_layer_title twodep2">
                                                                    <h3>등록 정보</h3>
                                                                </div>
                                                                <table class="chart2 bit_con_table"  border="0" cellspacing="0" cellpadding="0">
                                                                	<tr>
                                                                    	<th>주소</th>
                                                                        <td colspan="3"><input id="input_address" type="text" class="in in_text bit_in3" name="ID">
                                                                            <!-- <a id="btn_sel_stop" href="javascript:void(0);" class="bit_btn bor_non">선택</a><a href="javascript:void(0);" class="bit_btn">삭제</a> -->
                                                                        </td>
                                                                 	</tr> 
                                                                    <tr>
                                                                        <th>상세설명</th>
                                                                        <td colspan="3"><input id="input_detail" type="text" class="in in_text bit_in3" name="ID"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>비고</th>
                                                                        <td colspan="3"><input id="input_etc" type="text" class="in in_text bit_in3" name="ID"></td>
                                                                    </tr>                                                                    
                                                                    <!-- <tr>
                                                                        <th>등록일시</th>
                                                                        <td><input id="input_regist_dt" type="text" class="in in_text bit_in" name="ID"></td>
                                                                        <th>갱신일시</th>
                                                                        <td><input id="input_update_dt" type="text" class="in in_text bit_in" name="ID"></td>
                                                                    </tr> -->
                                                                </table>
                                            </div>                                            
                                        </div>
                                                        <!--BIT설정 정보 끝-->
                                    </div>
                                    <!--탭컨텐츠끝-->
                                </div>
                                <!--탭끝-->  
                                                
                            </div>
                            <!--왼쪽아래 버튼 시작-->
                            <div class="sms_btn1"><!--왼쪽아래 버튼-->
                                <ul class="con2_l">
                                    <li><a id="btn_add" href="javascript:void(0);"><img src="./images/icon_plus.png">추가</a></li>
                                    <li><a id="btn_mod" href="javascript:void(0);" class="authMod">수정</a></li>
                                    <!-- <li><a id="btn_deactive" href="javascript:void(0);">비활성</a></li> -->
                                    <li><a id="btn_refresh2" href="javascript:void(0);">새로고침</a></li>
                                </ul>
                                <ul class="con2_r">                                
                                    <li><a id="btn_save" href="javascript:void(0);" class="authSave disabled"><img src="./images/icon_ok.png">저장</a></li>
                                    <li><a id="btn_cancel" href="javascript:void(0);" class="authCancel"><img src="./images/close_black.png">취소</a></li>
                                </ul>
                            </div>  
                            <!--왼쪽아래 버튼 끝-->
                        </div>
                                         
                    </div>                         
                </div>
            </div>
             <!--내용 레이아웃끝--> 
             </div>
             </div>  
        <!--내용끝-->
</body>
</html>
