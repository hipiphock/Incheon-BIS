<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>환경설정</title>
</head>
<body>
	<div class="pop_wrap" id="pop_Preferences">
        <div class="set_wrap pop">
            <div class="pop_title">
                <h2>환경설정</h2>
                <p><a class="pop_close" href="javascript:void(0);"><img src="./images/close_white.png" alt="닫기"></a></p>
            </div>
            <div class="pop_conbody set_pop">
                <!--탭시작-->                                                
					<div class="pop-body">	
						<ul class="nav_percent3 nav-pills_percent">
                            <li class="active"><a href="#pop_tab1" data-toggle="tab">연결설정</a></li>
                            <li class=""><a href="#pop_tab2" data-toggle="tab">지도설정</a></li>
                            <li class=""><a href="#pop_tab3" data-toggle="tab">일반설정</a></li>
						</ul> 
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content_percent">
                            <!--연결설정 시작-->
                            <div class="tab-pane active" id="pop_tab1">
                                <div class="main_tab_con_pop">
                                    <div class="layer_title">
                                        <h3>데이터베이스 연결 설정</h3>
                                    </div>
                                    <div class="pop_diteil_body">
                                        <table class="set_t" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <th>· 연결 할 데이터 베이스 종류를 선택합니다.</th>
                                                <td>
                                                    <select class="in in_list set_list" name="text" type="data" >
                                                        <option value="01">리스트1</option>
                                                        <option value="02">리스트2</option>
                                                        <option value="03">리스트3</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>· TNSNAME 또는 데이터 공급자 이름을 설정합니다.</th>
                                                <td>
                                                    <select class="in in_list set_list" name="text" type="TNSNAME" >
                                                        <option value="01">리스트1</option>
                                                        <option value="02">리스트2</option>
                                                        <option value="03">리스트3</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>· 사용자 ID를 입력합니다.</th>
                                                <td><input type="text" class="in in_text set_text" name="ID"></td>
                                            </tr>
                                            <tr>
                                                <th>· 사용자 비밀번호를 입력합니다.</th>
                                                <td><input type="password" class="in in_text set_text" name="PW"></td>
                                            </tr>
                                        </table>
                                        <a class="s_btn sub_btn"><img src="./images/btn_icon_set_test.png">연결테스트</a>
                                    </div>
                                    <div class="layer_title">
                                        <h3>VDS 연결 설정</h3>
                                    </div>
                                    <div class="pop_diteil_body">
                                        <table class="set_t" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <th>· VDS 연결 IP 주소를 입력합니다.</th>
                                                <td><input type="text" class="in in_text set_text" ></td>
                                            </tr>
                                            <tr>
                                                <th>· VDS 연결 포트를 입력합니다.</th>
                                                <td><input type="text" class="in in_text set_text" ></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="layer_title">
                                        <h3>FTP 연결 설정</h3>
                                    </div>
                                    <div class="pop_diteil_body">
                                        <table class="set_t" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <th>· FTP 서버 접속 IP 주소를 입력합니다.</th>
                                                <td><input type="text" class="in in_text set_text" ></td>
                                            </tr>
                                            <tr>
                                                <th>· FTP 서버 접속 포트를 입력합니다. (기본21)</th>
                                                <td><input type="text" class="in in_text set_text" ></td>
                                            </tr>
                                            <tr>
                                                <th>·  FTP 사용자 아이디를 입력합니다.</th>
                                                <td><input type="text" class="in in_text set_text" ></td>
                                            </tr>
                                            <tr>
                                                <th>· FTP 사용자 비밀번호를 입력합니다.</th>
                                                <td><input type="password" class="in in_text set_text" ></td>
                                            </tr>
                                        </table>
                                        <a class="s_btn sub_btn"><img src="./images/btn_icon_set_test.png">연결테스트</a>
                                    </div>
                                </div>
                            </div>
                            <!--연결설정 끝-->
                            <!--지도설정 시작-->
                            <div class="tab-pane" id="pop_tab2">
                                <div class="main_tab_con_pop">
                                    <div class="layer_title">
                                        <h3>지도 초기위치 설정</h3>
                                    </div>
                                    <div class="set_map">지도 들어갈 곳</div><!--width: 100%; height: 400px;-->
                                    <span class="set_map_text">위도<input type="text" class="in in_text set_text" ></span><span class="set_map_text">경도<input type="text" class="in in_text set_text" ></span>
                                </div>
                            </div>
                            <!--지도설정 끝-->
                            <!--일반설정 시작-->
                            <div class="tab-pane" id="pop_tab3">
                                <div class="main_tab_con_pop">
                                    <div class="layer_title">
                                        <h3>표시 설정</h3>
                                    </div>
                                    <div class="pop_diteil_body">
                                        <table class="set_t" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <th>· 메인화면 버스 아이콘 라벨</th>
                                                <td>
                                                    <select class="in in_list set_list" name="text">
                                                        <option value="01">표시 안함</option>
                                                        <option value="02">리스트1</option>
                                                        <option value="03">리스트2</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>· 버스 각도값 사용</th>
                                                <td>
                                                    <select class="in in_list set_list" name="text">
                                                        <option value="01">사용</option>
                                                        <option value="02">사용 안함</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div> 
                            <!--일반설정 끝-->
                            <div class="pop_bottom_btn">
                                <ul>
                                    <li class="bottom_save"><a><img src="./images/icon_ok.png">저장</a></li>
                                    <li class="bottom_close pop_close"><a><img src="./images/close_black.png">닫기</a></li>
                                </ul>
                            </div>
				        </div>
                        <!--탭컨텐츠끝-->
					</div>
                 	<!--탭끝-->
            </div>
        </div> 
        <div class="pop_back"></div>
	</div>
</body>
</html>
