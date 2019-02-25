<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 정보 관리</title>
<link rel="stylesheet" type="text/css" href="./css/lib/jquery-ui.css"/>
<link rel="stylesheet" type="text/css" href="./css/lib/ui.jqgrid.css"/>

<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/lib/jquery.min.js"></script>
<script src="./js/lib/jquery-ui.js"></script>
<script src="./js/lib/jquery.jqGrid.min.js"></script>
<script src="./js/lib/jquery.jqGrid.src.js"></script>
<script src="./js/lib/amazonmenu.js"></script>
<script src="./js/lib/bootstrap.min.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v501.js"></script>

</head>

<body>
	<div id="pop_wrap" id="pop_bit">
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BIT관리 - BIT 정보 관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a><img src="./images/btn_big_bit1.png"><p>BIT그룹</p></a></li>
                        <li><a><img src="./images/btn_big_bit2.png"><p>사업정보</p></a></li>
                        <li><a><img src="./images/btn_big_bit3.png"><p> 제조사 </p></a></li>
                        <li><a><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody" style=" border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                   
                         <div class="bit_left"><!--왼쪽-->
                             <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                 <tr>
                                     <th>그룹</th>
                                     <td><select class="in in_list bit_list1" name="text">
                                         <option value="01">리스트1</option>
                                         <option value="02">리스트2</option>
                                         <option value="03">리스트3</option>
                                         </select>
                                     </td>
                                     <th>종류</th>
                                     <td><select class="in in_list bit_list1" name="text">
                                         <option value="01">리스트1</option>
                                         <option value="02">리스트2</option>
                                         <option value="03">리스트3</option>
                                         </select>
                                     </td>
                                 </tr>
                                 <tr>
                                     <th>제조사</th>
                                     <td><select class="in in_list bit_list1" name="text">
                                         <option value="01">리스트1</option>
                                         <option value="02">리스트2</option>
                                         <option value="03">리스트3</option>
                                         </select>
                                     </td>
                                     <th>사업</th>
                                     <td><select class="in in_list bit_list1" name="text">
                                             <option value="01">리스트1</option>
                                             <option value="02">리스트2</option>
                                             <option value="03">리스트3</option>
                                         </select>
                                     </td>
                                 </tr>
                                 <tr>
                                     <th>BIT 설치유형</th>
                                     <td><select class="in in_list bit_list1" name="text">
                                            <option value="01">리스트1</option>
                                            <option value="02">리스트2</option>
                                            <option value="03">리스트3</option>
                                        </select>
                                     </td>
                                     <th>검색어</th>
                                     <td>
                                         <div class="btn_box4">
                                             <input type="text" class="in bit_in_text" name="ID" placeholder="정류장명 / BIT ID 입력">
                                             <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                         </div>
                                     </td>
                                 </tr>
                             </table>
                                            
                             <div class="bit_left_chart_body" style=" border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                                                <div class="main_chart" style=" border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="bit_info_list"></table>
                                                </div>
                             </div><!--왼쪽 표-->                                          
                        </div>
                        <div class="bit_right" style=" border-bottom-right-radius: 10px;"><!--오른쪽-->
                            <div class="bit_right_chart_body">                                              
                                <!--탭시작 -->                                               
                                <div class="pop-body">	
                                    <div class="base_body">
                                        <ul class="nav_percent_h nav-pills_percent_h">
                                            <li class="active"><a href="#bit_tab1" data-toggle="tab" class="icon2">기본 정보</a></li>
                                            <li class=""><a href="#bit_tab2" data-toggle="tab" class="icon4">BIT설정 정보</a></li>
						                </ul> 
                                    </div>
                                    <!--탭컨텐츠시작-->                      
						            <div class="tab-content_pic3">
                                        <!--기본정보 시작-->
                                        <div class="tab-pane active" id="bit_tab1">
                                            <div class="sub_tab_con_body">
                                                <div class="sub_layer_title">
                                                    <h3>BIT 일반 정보</h3>
                                                </div>
                                                                <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>관리번호</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="ID"></td>
                                                                        <th>접속IP</th>
                                                                        <td>IP 내용이 나옵니다.
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>BIT 종류</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">리스트1</option>
                                                                                <option value="02">리스트2</option>
                                                                                <option value="03">리스트3</option>
                                                                            </select></td>
                                                                        <th>설치 지점</th>
                                                                        <td><input type="text" class="in in_text bit_in2" name="ID">
                                                                            <a class="bit_btn bor_non">선택</a><a class="bit_btn">삭제</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>BIT 설치유형</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">리스트1</option>
                                                                                <option value="02">리스트2</option>
                                                                                <option value="03">리스트3</option>
                                                                            </select></td>
                                                                        <th>제조사</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">리스트1</option>
                                                                                <option value="02">리스트2</option>
                                                                                <option value="03">리스트3</option>
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>적용중인<br>시나리오</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="ID"></td>
                                                                        <th>사업구분</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">리스트1</option>
                                                                                <option value="02">리스트2</option>
                                                                                <option value="03">리스트3</option>
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>아이콘 정렬</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">리스트1</option>
                                                                                <option value="02">리스트2</option>
                                                                                <option value="03">리스트3</option>
                                                                            </select></td>
                                                                        <th rowspan="3">소속 그룹</th>
                                                                        <td rowspan="3">
                                                                            <div class="bit_grup">
                                                                                <dt>그룹명</dt>
                                                                                <dd>
                                                                                    <ul>
                                                                                        <li>그룹1</li>
                                                                                        <li>그룹2</li>
                                                                                        <li>그룹3</li>
                                                                                        <li>그룹3</li>
                                                                                    </ul>
                                                                                </dd>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>정류장 위도</th>
                                                                        <td style="border-right:1px solid #eaeaea!important;"></td>
                                                                        
                                                                    </tr>
                                                                    <tr>
                                                                        <th>정류장 경도</th>
                                                                        <td style="border-right:1px solid #eaeaea!important;"></td>
                                                                        
                                                                    </tr>
                                                                </table>
                                                                <div class="sub_layer_title twodep2">
                                                                    <h3>등록 정보</h3>
                                                                </div>
                                                                <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>관리번호</th>
                                                                        <td colspan="3"><input type="text" class="in in_text bit_in3" name="ID"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>등록일시</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="ID"></td>
                                                                        <th>갱신일시</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="ID"></td>
                                                                    </tr>
                                                                </table>
                                            </div>
                                        </div>
                                        <!--기본정보 끝-->
                                        <!--BIT설정 정보 시작-->
                                        <div class="tab-pane" id="bit_tab2">
                                            <div class="sub_chart_body2"> 
                                                <div class="sub_layer_title">
                                                    <h3>소프트웨어 동작 기본값</h3>
                                                </div>
                                                                <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>음성안내<br>사용유무</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">네</option>
                                                                                <option value="02">아니오</option> 
                                                                            </select></td>
                                                                        <th>외국어표시<br>사용유무</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">아니오</option>
                                                                                <option value="02">네</option> 
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>[잠시후도착]<br>표시기준</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">도착예정시간</option>
                                                                                <option value="02">잔여정류장갯수</option>
                                                                            </select></td>
                                                                        <th>상태업데이트<br>주기</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>잠시후도착<br>기준시간</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>웹캠 촬영주기</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>잠시후도착<br>잔여정류장</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>스크린샷<br>촬영주기</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>제공정보<br>정렬방식</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">도착예정시간 기준</option>
                                                                                <option value="02">노선번호 기준</option>
                                                                            </select></td>
                                                                        <th>스피커볼륨</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                </table>
                                                                <div class="sub_layer_title twodep2">
                                                                    <h3>하드웨어 동작 기본값</h3>
                                                                </div>
                                                                <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>BIT화면<br>켜지는 시각</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>BIT화면<br>꺼지는 시각</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>동작감지<br>사용여부</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">아니오</option>
                                                                                <option value="02">네</option>
                                                                            </select></td>
                                                                        <th>동작감지 감도</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>팬동작<br>최소온도(꺼짐)</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>히터동작<br>최소온도(켜짐)</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>팬동작 최대온도(켜짐)</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                        <th>히터동작<br>최대온도(꺼짐)</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>충격감지<br>사용여부</th>
                                                                        <td><select class="in in_list bit_list1" name="text">
                                                                                <option value="01">네</option>
                                                                                <option value="02">아니오</option>
                                                                            </select></td>
                                                                        <th>기본 조도값</th>
                                                                        <td><input type="text" class="in in_text bit_in" name="text"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>충격감도</th>
                                                                        <td colspan="3"><input type="text" class="in in_text bit_in" style="width:214px" name="text"></td>
                                                                    </tr>
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
                                    <li><a><img src="./images/icon_plus.png">추가</a></li>
                                    <li><a>수정</a></li>
                                    <li><a>비활성</a></li>
                                    <li><a>새로고침</a></li>
                                </ul>
                                <ul class="con2_r bit_r">
                                    <li><a><img src="./images/icon_ok.png">저장</a></li>
                                    <li><a><img src="./images/close_black.png">취소</a></li>
                                </ul>
                            </div>  
                            <!--왼쪽아래 버튼 끝-->
                        </div>
                                         
                                      
                </div>
            </div>
             <!--내용 레이아웃끝-->  
                    
           </div>
        </div> 
        
	</div>
</body>
</html>
