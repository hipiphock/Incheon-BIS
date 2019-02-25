<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>운영단말 메인화면</title>

<link rel="stylesheet" type="text/css" href="./css/lib/jquery.contextMenu.css"/>
<link rel="stylesheet" type="text/css" href="./css/main_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_main.css"/>

<link rel="stylesheet" type="text/css" href="./css/menu.css"/>

<script src="./js/lib/hashMap.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>
<script src="./js/lib/jquery.contextMenu.js"></script>

<script src="//openapi.map.naver.com/openapi/v3/maps.js?clientId=WkpbXbSAEC5adp2jrVPi"></script>

<script src="./js/v01/v102.js"></script>
<script src="./js/v01/nMap.js"></script>

<script type="text/javascript">
	var USER_NAME = '${userName}';
	var USER_ID = '${userId}';
	var RANK = '${rank}';
	
	var FIRMWARE_VER = '${firmware_version}';
	var INFO_VER = '${info_version}';
	var RESERVE_VER = '${info_reserve_version}';
</script>

</head>
<body>
	<input type="hidden" id="view_attr" value="v102">
	<div id="wrap">
		<jsp:include page="pop_log.jsp" />
        <jsp:include page="../comm/header.jsp" />
        <!-- context menu wrap -->
        <div class="contextMenu bitMenu"></div>
        <div class="contextMenu stopMenu"></div>
        <div class="contextMenu routeMenu"></div>
        <div class="contextMenu nodeMenu"></div>
        
        <!--내용시작-->
        <div class="all_body">
            <!--상단버튼부분시작-->
            <div class="top_two">  
                <div class="two_left">
                    <ul>
                    	<!-- 선택 시   li =>"btn_click class 추가" -->
                        <li id="btn_showStop"><a><img src="./images/btn_1.png">정류장보기</a></li><!--클릭상태 버튼 '.btn_click' 추가-->
                        <!-- <li id="btn_showRouteStop"><a><img src="./images/btn_2.png">노선정류장보기</a></li> -->
                        <li id="btn_showBit"><a><img src="./images/btn_3.png">BIT 보기</a></li>
                        <!-- <li id="btn_showInci"><a><img src="./images/btn_7.png">돌발지점 표시</a></li> -->
                        <li id="btn_clearRoute"><a><img src="./images/btn_5.png">노선 지우기</a></li>
                    </ul>
                    <div class="main_list_box" style="padding-left: 10px;">
                        <span>버스보기</span>
                        <select class="main_list" id="select_route_show_type">
                            <option value="1">노선버스표시</option>
                            <!-- <option value="2">전체버스표시</option> -->
                            <option value="3">표시안함</option>
                        </select>
                    </div>
                    <!-- <ul>
                        <li id="btn_showNode"><a><img src="./images/btn_4.png">노드 보기</a></li>
                        <li id="btn_showInci"><a><img src="./images/btn_7.png">돌발지점 표시</a></li>
                        <li id="btn_clearRoute"><a><img src="./images/btn_5.png">노선 지우기</a></li>
                    </ul>  -->
                    <!-- <ul>
                        <li><a id="btn_logView" href="javascript:void(0);"><img src="./images/btn_9.png">로그보기</a></li>
                    </ul> --> 
                </div>
                <!-------------------------------접속정보 인크루드시작---------------------------->
                <div class="two_right">
                    <span id="login_info">운영자님 16.07.21 08:53:14 접속</span><a id="btn_logout" href="javascript:void(0);" class="btn_logout">로그아웃</a>
                </div>
                <!-------------------------------접속정보 인크루드끝------------------------------>
            </div>
            <!--상단버튼부분 끝-->
            
            <!--내용 레이아웃시작-->
            <div class="all_body_con">
                <!----------------------------------------------노선 시작------------------------------------------------------->
                <div class="nosun" id="route_wrap">
                    <!--노선 타이틀 시작-->
                    <div class="layer_title_main">
                        <h3>노선</h3>
                        <p class="close"><a id="btn_close1"><img src="./images/close_black.png" alt="닫기"></a></p>
                    </div>
                    <!--노선 내부 시작-->
                    <div class="nosun_con">
                        <!--노선 내부 상단정보 시작-->
                        <div class="nosun_number">
                            <p class="bus_number"><span class="bus_green">일반시내</span><span id="txt_routeno">123</span></p><!--[초록색 '.bus_green'][빨간색 '.bus_red'][파랑색 '.bus_blue']-->
                            <p class="bus_stop_number">305000392</p>
                            <p class="bus_route"><span class="bus_start">하나로클럽</span>→<span class="bus_last">구암</span></p>
                            <p class="bus_re"><span id="txt_run_cnt"></span> 운행중</p> 
                        </div>
                        <!-- <ul class="bus_btn">
                            <li><a id="btn_saveRoute"><img src="./images/icon_file.png" alt="저장아이콘">파일저장</a></li>
                            <li><a id="btn_route_timeTable">노선시간표</a></li>
                            <li><a id="btn_clearMap">노선표시 제거</a></li>
                        </ul> -->
                        <!--노선 내부 검색시작-->
                        <!-- <div class="nosun_serch">
                            <input type="text" class="nosun_serchbox" name="" placeholder="결과 내 검색"><span>찾기</span>
                        </div> -->
                        <!--노선 리스트-->
                        <div class="nosun_listbox">
                            <div class="nosun_list">
                            	<!--노선 리스트 표 시작-->
                            	<div class="nosun_list_title">
                            		<ul>
                            			<li>순번</li>
                            			<li>지점명</li>
                            			<li>종류</li>
                            			<li>차량번호</li>
                            			<li>모바일ID</li>
                            		</ul>
                            	</div>
                            	<div class="nosun_list_conten">
                            		<table class="nosun_list_table" id="via_stop_list">
                            			<!-- <tr>
                            				<td>000</td>
                            				<td>산성동/시내버스정류장</td>
                            				<td><img src="./images/btn_1.png" alt="정류장"></td>
                            				<td>충남71자8020</td>
                            				<td>00000</td>
                            			</tr>
                            			<tr>
                            				<td>2</td>
                            				<td>새마을금고앞</td>
                            				<td><img src="./images/btn_4.png" alt="노드"></td>
                            				<td>충남71자1020</td>
                            				<td>0</td>
                            			</tr>
                            			<tr>
                            				<td>26</td>
                            				<td>산성동/시내버스정류장</td>
                            				<td><img src="./images/btn_10.png" alt="종점"></td>
                            				<td>충남72자0020</td>
                            				<td>0</td>
                            			</tr> -->
                            		</table>
                            	</div>
                            	<!--노선 리스트 표 끝-->
							</div>
                        </div>
                    </div>
                    <!--노선 내부 끝-->
                    <div class="list_bottom">
                    	<span id="txt_route_inquiry_time"></span>
                        <!-- <input type="checkbox" name="check" class="check">자동갱신 16.08.23 14:35:01
                        <a class="re_new"><img src="./images/icon_re.png" alt="새로고침"></a> -->
                    </div>
                </div>
                <!------------------------------------------------노선 끝-------------------------------------------------------->
                <!-----------------------------------------------지도 시작------------------------------------------------------->
                <div class="map two_present" id="map_wrap"><!--[가운데 지도만 있을 때 '.one'][왼쪽 노선만 나왔을 때 '.two_nosun'][오른쪽 운영현황만 나왔을 때 '.two_present'][세개 모두 나왔을 때 '.three']-->
                    <!--지도 위 버튼 시작-->
                    <div class="map_btn">
                        <ul>
                            <li class="map_btn_click">지도보기</li><!--[선택'.map_btn_click'][비선택'.map_btn_nml']-->
                            <li class="map_btn_nml">겹쳐보기</li>
                            <li class="map_btn_nml">위성사진</li>
                        </ul>
                    </div>
                    <!--지도 위 버튼 끝-->
                    <!--지도 위 선택지점 상세 뷰 시작-->
                    <div class="main_active_wrap pop" id="stop_info_wrap" style="display: none;">
                        <div class="pop_title">
                            <h2>선택 지점 상세 뷰</h2>
                            <p><a href="javascript:hideArrivalInfo();"><img src="./images/close_white.png" alt="닫기"></a></p>
                        </div>
                        <div class="pop_conbody main_active_pop">
                            <!--정류장정보-->
                            <div class="main_active_con1">
                                <h5><img src="./images/icon_1.png">정류장 정보</h5>
                                <div class="busstop_body">
                                    <p class="busstop" id="txt_stop_name">기린대로덕진공원</p>
                                    <span id="txt_std_id">· 표준: 306101086</span><span id="txt_service_id">· 모바일: 31085</span>
                                    <h6 id="txt_stop_type">공용</h6>
                                    <input type="hidden" id="sel_lat">
                                    <input type="hidden" id="sel_lng">
                                    <input type="hidden" id="sel_stop_id">
                                    <ul>
                                        <li id="btn_move_stop"><a class="s_btn main_active_btn" href="javascript:void(0);"><img src="./images/icon_move.png">이동</a></li>
                                        <li id="btn_stop_detail"><a class="s_btn main_active_btn" href="javascript:void(0);"><img src="./images/icon_more.png">상세정보</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!--경유노선정보-->
                            <div class="main_active_con2">
                                <h5><img src="./images/icon_2.png">경유노선 정보</h5>
                                <div class="main_active_chart">
                                	<table id="via_route_list"></table>   	
                                </div>
                            </div>
                            <!--도착예정정보-->
                            <div class="main_active_con3">
                                <h5><img src="./images/icon_3.png">도착예정 정보</h5>
                                <p class="main_active_re">
                                	<!-- <label><input type="checkbox" name="check" class="check">자동갱신</label> -->
                                	<a class="re_new" id="btn_arr_refresh"><img src="./images/icon_re.png" alt="새로고침"></a>
                                </p>
                                <div class="main_active_chart" style="border-bottom-right-radius: 10px;">
                                	<table id="arrival_info_list"></table>
                                </div>
                            </div>
                        </div>                
                    </div>
                    <!--지도 위 선택지점 상세 뷰 끝-->
                    <div class="map_con">
                    	<div id="map"></div>
                    </div>
                </div>           
                <!------------------------------------------------지도 끝-------------------------------------------------------->
                <!--------------------------------------------운행현황 시작------------------------------------------------------->
                <div class="present">
                     <div class="layer_title_main">
                        <h3>운영현황 보기</h3>
                        <!-- <p class="close"><a><img src="./images/close_black.png" alt="닫기"></a></p> -->
                    </div>
                    <!--탭시작-->                                                   
					<div class="panel-body">	
						<ul class="nav nav-pills" id="nav_wrap">
                            <li id="btn_manage" class="active"><a href="#manage" data-toggle="tab">BIS운영현황</a></li>
                            <li id="btn_list" class=""><a href="#list" data-toggle="tab">BIT목록</a></li>
                            <li id="btn_error" class=""><a href="#error" data-toggle="tab">BIT상태이상</a></li>
						</ul> 
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content">
                            <!--bis운영현황 시작-->
                            <div class="tab-pane active" id="manage">
                                <div class="main_tab_con">
                                    <!--BIT통신상태-->
                                    <div class="tab_con_con1">
                                        <div class="main_tab_titel">
                                            <h4>BIT통신상태 현황 <span id="bit_com_state_time"></span></h4>
                                            <a class="title_btn re_new"><img id="btn_refresh_bit_table" src="./images/icon_re.png" alt="새로고침"></a>
                                            <!-- <a class="title_btn re_new"><img src="./images/icon_file.png" alt="파일저장"></a> -->
                                        </div>
                                        <div class="con1">
                                            <div class="main_chart" id="bit_com_state_wrap">
                                            	<table id="bit_com_state_list"></table>
                                            </div><!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                        </div>
                                        <div class="con1-2">     
                                            <div class="con1-2_number">
                                                <p class="con1-2_black" id="totalBit"></p>
                                                <p class="con1-2_green" id="normalBit"></p>
                                                <p class="con1-2_red" id="errorBit"></p>
                                            </div>  
                                        </div>    
                                    </div>
                                    <!--BIT상태이상-->
                                    <div class="tab_con_con2">
                                        <!-- <div class="con2_left"> -->
                                            <div class="main_tab_titel">
                                                <h4>BIT상태이상 <span id="txt_fault_date">2016-08-23 14:43:04</span></h4>
                                                <a class="title_btn re_new" id="btn_refresh_fault_table"><img src="./images/icon_re.png" alt="새로고침"></a>
                                            </div> 
                                            <div class="con2" style="width:335px;">                                           
                                                <table class="main_chart2" border="0" cellspacing="0" cellpadding="0" id="chart_fault">
                                                    <tr>
                                                        <th>통신이상</th>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th>도어열림</th>
                                                        <td>0</td>
                                                    </tr> 
                                                    <tr>
                                                        <th>전원이상</th>
                                                        <td>0</td>
                                                    </tr> 
                                                    <tr>
                                                        <th>화면1꺼짐</th>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <th>화면2꺼짐</th>
                                                        <td>0</td>
                                                    </tr>
                                                </table>
                                            </div>
                                       <!--  </div> -->
                                        <!-- <div class="con2_right">
                                            <div class="main_tab_titel">
                                                <h4></h4>
                                                <a class="title_btn re_new"><img src="./images/icon_re.png" alt="새로고침"></a>
                                            </div> 
                                            <div class="con2-2">                                           
                                                <table class="main_chart2" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <th></th>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th style="border-bottom: none;"></th>
                                                        <td style="border-bottom: none;"></td>
                                                    </tr> 
                                                </table>
                                            </div>
                                        </div>  -->
                                    </div>
                                    <!--데이터베이스-->
                                    <!-- <div class="tab_con_con3">
                                         <div class="main_tab_titel">
                                            <h4>데이터 베이스 <span id="usge_ck_time"></span></h4>
                                            <a class="title_btn re_new"><img src="./images/icon_re.png" alt="새로고침"></a>
                                        </div> 
                                        <div class="con3">
                                            <div class="main_chart">
                                            	<div class="main_database">
                                                    <ul>
                                                        <li>테이블스페이스</li>
                                                        <li>사용율</li>
                                                        <li>경고수준</li>
                                                        <li>현재사용량(GB)</li> 
                                                    </ul> 
                                                </div>
                                                <div class="main_database_con">
                                                    <ul id="tablespace_list">
                                                        <li>
                                                            <p>TRAF_TBS_DATA</p>
                                                            <p class="progress"><span class="pr_number">90%</span><span class="pr_bar_red pr_width"></span></p>퍼센트값과 동일하게 pr_width의 width값이 변해야 합니다
                                                            <p class="red">장애</p>
                                                            <p class="unt">55.61/92.72</p>
                                                        </li>
                                                        <li>
                                                            <p>TRAF_TBS_DATA</p>
                                                            <p class="progress"><span class="pr_number">10%</span><span class="pr_bar_green pr_width"></span></p>퍼센트값과 동일하게 pr_width의 width값이 변해야 합니다
                                                            <p class="green">정상</p>
                                                            <p class="unt">55.61/92.72</p>
                                                        </li>
                                                    </ul> 
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    
                                </div>
                            </div>
                            <!--bis운영현황 끝-->
                            <!--BIT목록 시작-->
                            <div class="tab-pane" id="list">
                                <div class="main_tab_con">
                                    <!--top-->
                                    <div class="main_tab_top">
                                        <div class="main_left_btn">
                                            <a class="title_btn re_new_left" id="btn_refresh_bit_list"><img src="./images/icon_re.png" alt="새로고침"></a>
                                           <!--  <a class="title_btn re_new_left"><img src="./images/icon_file.png" alt="저장"></a>
                                            <a class="title_btn re_new_left"><img src="./images/icon_excel.png" alt="엑셀저장"></a> -->
                                        </div>
                                        <div class="main_serchbox">
                                            <input id="search_word1" type="text" class="main_serch" name="" placeholder="찾을 BIT ID, 지점명으로 검색">
                                            <span><img id="search_btn1" class="serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                        </div>
                                    </div>
                                    <!--표-->
                                    <div class="main_tab_chart1"  id="bit_wrap">
                                       <table id="bit_list"></table>
                                        <!-- <div class="main_bit_list">
                                        	<table id="bit_list"></table>
                                        </div> --><!--표 사이즈 [ width: 335px; height:100%;]-->
                                    </div>
                                    <!--숫자-->
                                    <div class="main_tab_chart1-con" id="bit_status_text">
                                        <span>전체 : 94개소</span>
                                        <span>정상 : 72개소</span>
                                        <span>장애 : 22개소</span>   
                                    </div>
                                </div>
                            </div>
                            <!--BIT목록 끝-->
                            <!--BIT상태이상 시작-->
                            <div class="tab-pane" id="error">
                                <div class="main_tab_con">
                                    <!--top-->
                                    <div class="main_tab_top">
                                        <div class="main_left_btn">
                                            <p class="title_btn re_new_left" id="btn_refresh_fault_list"><img src="./images/icon_re.png" alt="새로고침"></p>
                                            
                                            	<select id="select_fault_kind" class="main_serchbox list_main">
                                            		<option value="0">전체</option>
                                            		<option value="1">통신이상</option>
                                            		<option value="2">도어열림</option>
                                            		<option value="3">전원이상</option>
                                            		<option value="4">화면꺼짐</option>
                                            	</select>
	                                        
                                            <!-- <p class="title_btn re_new_left"><img src="./images/icon_file.png" alt="저장"></p>
                                            <p class="title_btn re_new_left"><img src="./images/icon_excel.png" alt="엑셀저장"></p> -->
                                        </div>
                                    </div>
                                    <!--표-->
                                    <div class="main_tab_chart2">
                                        <div class="main_bit_list" id="bit_fail_wrap">
                                        	<table id="bit_fault_list"></table>
                                        </div><!-- main_chart 사이즈 [ width: 335px; height:100%;]-->
                                    </div>
                                </div>
                            </div> 
                            <!--BIT상태이상 끝-->
				        </div>
                        <!--탭컨텐츠끝-->
					</div>
                 	<!--탭끝-->
                    <!--서버상태시작-->
                    <div class="suver">
                        <div class="layer_title_main">
                            <h3>서버상태</h3>
                            <a class="title_btn re_new" id="btn_refresh_servrStat"><img src="./images/icon_re.png" alt="새로고침"></a>
                        </div>
                        <div class="main_chart" id="server_wrap">
                        	<table id="server_status_list"></table>
                        </div><!--main_chart 사이즈 [ width: 100%; height:100%;]-->
                    </div>
                    <!--서버상태끝-->
                </div>
                <!----------------------------------------------운행현황 끝------------------------------------------------------->
            </div>
            <!--내용 레이아웃끝-->
        </div>
        <!--내용끝-->
        <jsp:include page="../comm/footer.jsp" />  
	</div>
</body>
</html>
