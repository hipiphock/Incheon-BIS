<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>정류장 이력 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v08/v801.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v801">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BMS - 정류장 이력 조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                     <div class="subcon_con2">
                                        <div class="base_left"><!--왼쪽-->
                                            
                                                <select class="in basetop_in_list">
                                                        <option value="01">리스트1</option>
                                                        <option value="02">리스트2</option>
                                                </select>
                                            
                                            <div class="base_left_chart_body">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                   <table id="base_stop_list"></table>
                                                </div>
                                            </div><!--왼쪽 표-->                                          
                                        </div>
                                        <div class="base_right"><!--오른쪽-->
                                            <div class="basecon_right_chart_body">                                              
                                                    <!--탭시작 -->                                               
					                               <div class="pop-body">	
                                                        <div class="base_body">
						                                  <ul class="nav_percent_h nav-pills_percent_h">
                                                            <li class="active"><a href="#tab1" data-toggle="tab" class="icon5">정류장 별 이용객 정보</a></li>
                                                            <li class=""><a href="#tab2" data-toggle="tab" class="icon5">정류장 별 이용객 이력</a></li>
						                                  </ul> 
                                                        </div>
                                                      <!--탭컨텐츠시작-->                      
						                              <div class="tab-content_pic3">
                                                        <!--정류장별 이용객 정보 시작-->
                                                        <div class="tab-pane active" id="tab1">
                                                            <div class="sub_tab_con_body">
                                                                <div class="sub_layer_title">
                                                                    <h3>등록정보</h3>
                                                                </div>
                                                                <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>날짜/시간</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                        <th>기점부터의 거리</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>등록</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                        <th>링크 상 경도</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>버텍스 순번</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                        <th>링크 내 정류장 순번</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                    </tr>
                                                                </table>
                                                                <div class="sub_layer_title twodep2">
                                                                    <h3>정류장별 이용객</h3>
                                                                </div>
                                                                <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th>정보 일시</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                        <th>이용객 수</th>
                                                                        <td><input type="text" class="in in_text_b serch_text" name="ID"></td>
                                                                    </tr>
                                                                </table> 
                                                            </div>
                                                        </div>
                                                        <!--정류장별 이용객 정보 끝-->
                                                        <!--정류장별 이용객 이력 시작-->
                                                        <div class="tab-pane" id="tab2">
                                                            <div class="sub_chart_body2"> 
                                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                                    정류장별 이용객 이력 화면 없음!!!!!!!!!!
                                                                </div> 
                                                            </div>
                                                        </div>
                                                        <!--정류장별 이용객 이력 끝-->
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
