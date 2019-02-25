<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>정류장 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v03/v301.js"></script>

<script type="text/javascript">
var STOP_ID = '${stop_id}';
</script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-301">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>기반정보 - 정류장 관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                     <div class="subcon_con2">
                                        <div class="base_left"><!--왼쪽-->
                                        <!-- 검색추가부분 -->
                                            <div class="serch_box">
                                             	<input id="input_searchWord" type="text" class="in bit_in_text" placeholder="검색어 입력">
                                             	<img id="btn_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼">
                                         	</div>
                                         	<a id="btn_clear" class="serch_clear">clear</a>
                                         	<!-- <div class="serch_check"><label><input id="check_detail" type="checkbox" name="check" class="check">결과검색</label></div> -->
                                         <!-- 검색추가부분 끝 -->	
                                            <div class="base_left_chart_body">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="stop_list"></table>
                                                </div>
                                            </div><!--왼쪽 표-->                                          
                                        </div>
                                        <div class="base_right" style="background-color: #fff;"><!--오른쪽-->
                                            <div class="basecon_right_chart_body">                                              
                                                    <!--탭시작 -->                                               
					                               <div class="pop-body">	
                                                        <div class="base_body">
						                                  <ul class="nav_percent_h nav-pills_percent_h">
                                                            <li class="active"><a href="#tab1" data-toggle="tab" class="icon1">기본 정보</a></li>
                                                            <li class=""><a href="#tab2" data-toggle="tab" class="icon3">경유 노선정보</a></li>
						                                  </ul> 
                                                        </div>
                                                      <!--탭컨텐츠시작-->                      
						                              <div class="tab-content_pic6">
                                                        <!--기본정보 시작-->
                                                        <div class="tab-pane active" id="tab1">
                                                            <div class="sub_tab_con_body">
                                                                <div class="sub_layer_title">
                                                                    <h3>정류장 기본 정보</h3>
                                                                </div>
                                                                <table class="chart4"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>정류장 표준 ID</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_bstopid"></td>
                                                                        <th>정류장 종류</th>
                                                                        <td>
                                                                        	<select class="in2 in_list base_list1" id="select_bstoptpcd">
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>모바일 ID</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_short_bstopid"></td>
                                                                        <th>링크 ID</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_linkid"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>정류장 명</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_bstopnm"></td>
                                                                        <th>정류장 단축명</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_short_bstopnm"></td>
                                                                    </tr>
                                                                    <tr>
                                                                    	<th>권역코드</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_areacd"></td>
                                                                    	<th>관할관청명</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_adminnm"></td>  
                                                                    </tr>
                                                                    <tr>
                                                                    	<th>정류소시설</th>
                                                                    	<td><select class="in2 in_list base_list1" id="select_bstopfacilcd"></select></td>
                                                                        <th>차로갯수</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_lanecnt"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>위도</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_lat"></td>
                                                                        <th>경도</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_lng"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>위치구분코드</th> 
                                                                        <td><select class="in2 in_list base_list1" id="select_loctpcd"></select></td>
                                                                        <th>동명</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_dongnm"></td>  
                                                                    </tr>
                                                                    <tr>
                                                                        <th>중앙차로</th> 
                                                                        <td><select class="in2 in_list base_list1" id="select_centerlaneyn"></select></td>
                                                                        <th>정류장 사용여부</th>
                                                                        <td><input type="checkbox" name="check" class="check" id="check_useyn">사용함</td>  
                                                                    </tr>
                                                                    <tr>
                                                                    	<th>출도착 검출 반경</th>
                                                                        <td colspan="3">
                                                                        	<input type="text" class="in2 in_text base_text2" id="input_detectrange">
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>비고</th>
                                                                        <td colspan="3">  
                                                                            <input type="text" class="in2 in_text base_text2" id="input_descr">
                                                                        </td>   
                                                                    </tr>
                                                                </table>
                                                                <!-- <div class="sub_layer_title twodep2">
                                                                    <h3>정류장-링크 연동 정보</h3>
                                                                </div>
                                                                <table class="chart4"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>링크 ID</th>
                                                                        <td><input type="text" class="in2 in_text base_text1" id="input_linkid"></td>
                                                                        <th>링크 기점부터의 거리</th>
                                                                        <td><input type="text" class="in2 in_text base_text1" id="input_link_stop_len"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>링크 상 위도</th>
                                                                        <td><input type="text" class="in2 in_text base_text1" id="input_link_lat"></td>
                                                                        <th>링크 상 경도</th>
                                                                        <td><input type="text" class="in2 in_text base_text1" id="input_link_lng"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>버텍스 순번</th>
                                                                        <td><input type="text" class="in2 in_text base_text1" id="input_link_vtx_ord"></td>
                                                                        <th>링크 내 정류장 순번</th>
                                                                        <td><input type="text" class="in2 in_text base_text1" id="input_link_stop_ord"></td>
                                                                    </tr>
                                                                </table> -->
                                                                <div class="sub_layer_title twodep2">
                                                                    <h3>등록정보</h3>
                                                                </div>
                                                                <table class="chart4 last_boder"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>적용 시작일시</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_app_startdt"></td>
                                                                        <th>적용 종료일시</th>
                                                                        <td><input type="text" class="in2 in_text base_text0" id="input_app_enddt"></td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <!--기본정보 끝-->
                                                        <!--경유노선 시작-->
                                                        <div class="tab-pane" id="tab2">
                                                            <div class="sub_chart_body3"> 
                                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                                    <table id="bypass_route_list"></table>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                        <!--경유노선 끝-->
				                                    </div>
                                                    <!--탭컨텐츠끝-->
					                               </div>
                 	                              <!--탭끝-->  
                                                <div class="basecon_left_img"><!--아래 접은 이미지-->
                                                    <img src="./images/left_paper.png">
                                                </div>
                                            </div>
                                            
                                               
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
