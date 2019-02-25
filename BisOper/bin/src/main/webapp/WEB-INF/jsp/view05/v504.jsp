<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT 모니터링</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v504.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v501">
        
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BIT관리 - BIT 모니터링</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                     <div class="subcon_con2">
                         <!--왼쪽-->
                        <div class="bit_left">
                            <table class="chart5"  border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <th>그룹</th>
                                    <td><select id="sel_bit_group" class="in in_list bit_list1" name="text">
                                        <option value="01">리스트1</option>
                                        <option value="02">리스트2</option>
                                        <option value="03">리스트3</option>
                                        </select></td>
                                    <th>BIT 종류</th>
                                    <td><select id="sel_bit_type" class="in in_list bit_list1" name="text">
                                        <option value="01">리스트1</option>
                                        <option value="02">리스트2</option>
                                        <option value="03">리스트3</option>
                                        </select>
                                    </td>
                                    <th>사업구분</th>
                                     <td><select id="sel_bit_business" class="in in_list bit_list1" name="text">
                                            <option value="01">리스트1</option>
                                            <option value="02">리스트2</option>
                                            <option value="03">리스트3</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>검색</th>
                                    <td colspan="5">
                                        <div class="btn_box4_2">
                                            <input id="input_search" type="text" class="in bit_in_text" name="ID" placeholder="BIT ID, 설치 지점명, 모바일ID 입력">
                                            <span><img id="img_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                        </div>
                                        <a id="btn_clear" href="javascript:void(0);" class="serch_clear3">clear</a>
                                        <div class="serch_check2"><input id="check_detail" type="checkbox" name="check" class="check">결과검색</div>
                                    </td>
                                </tr>
                            </table>
                                        
                            <div class="bit_left_chart_body3">
                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                	<table id="monitoring_list"></table>
                                </div>
                            </div>                                         
                        </div>
                        <!--오른쪽-->
                         <div class="bit_right2">
                            <!--오른쪽1 시작-->
                            <div class="bit_si_left2">
                                <div class="sub_layer_title">
                                    <h3>BIT 정보</h3>
                                </div>
                                <div class="bit_mo_top">
                                    <table class="bit3_chart5"  border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <th>BIT ID</th>
                                            <td><input id="input_bit_id" type="text" class="bit3_in2" readOnly></td>
                                            <th>지점명</th>
                                            <td><input id="input_stop_name" type="text" class="bit3_in2" readOnly></td>
                                        </tr>
                                        <tr>
                                            <th>BIT 종류</th>
                                            <td><input id="input_bit_type_name" type="text" class="bit3_in2" readOnly></td>
                                            <th>모바일 ID</th>
                                            <td><input id="input_service_id" type="text" class="bit3_in2" readOnly></td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="bit_mo_chart">
                                    <div class="bit_mo_chart_img"><!--<!--.bit_mo_chart_img 사이즈 [ width: 100%; height:100%;]-->
                                    	<img id="bit_img" alt="" src="" style="width:160px; height: 120px;">
                                    </div>
                                </div>
                            </div>
                            <!--오른쪽1 끝-->
                            <!--오른쪽2 시작-->
                            <div class="bit_si_right2">
                                <div class="sub_layer_title">
                                    <h3>BIT 상태 정보</h3>
                                </div>
                                <div class="bit_mo_top">
                                    <table class="bit3_chart5"  border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <th>온도</th>
                                            <td><input id="input_temperature" type="text" class="bit3_in2" readOnly></td>
                                            <th>습도</th>
                                            <td><input id="input_humidity" type="text" class="bit3_in2" readOnly></td>
                                        </tr>
                                        <tr>
                                            <th>화면상태</th>
                                            <td><select id="select_disp_state" class="subtop_in bit3_in2_list">
                                                <option value="1">켜짐</option>
                                                <option value="0">꺼짐</option>
                                                </select>
                                            </td>
                                            <th>도어</th>
                                            <td><select id="select_door_state" class="subtop_in bit3_in2_list">
                                                <option value="1">닫힘</option>
                                                <option value="0">열림</option>
                                                </select></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <!--오른쪽2 끝-->
                            <div class="bit_mo_chart">
                                    <div class="bit_mo_chart_img" id="image_wrap"><!-- 이미지 세개부터  .img_two 삭제-->
                                          <!-- <img src="./images/img_test.jpg">	
                                          <img src="./images/img_test.jpg"> -->
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
