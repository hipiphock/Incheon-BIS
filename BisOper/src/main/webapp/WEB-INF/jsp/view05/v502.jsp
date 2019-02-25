<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>시정홍보 자료 관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v502.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v501">

	  <%--  <jsp:include page="v511.jsp"/> --%>
        
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BIT관리 - 시정홍보 관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_scene" href="javascript:void(0);"><img src="./images/btn_big_bit4.png"><p>시나리오</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                     <div class="subcon_con2">
                         <!--왼쪽-->
                        <div class="bit_left">
                            <div class="sub_layer_title">
                                <h3>BIT 목록</h3>
                            </div>
                            <table class="chart2"  border="0" cellspacing="0" cellpadding="0">
                                
                                <tr>
                                	<th>서버구분</th>
                                    <td>	
                                    	<select id="select_servertpcd" class="in in_list bit_list1">
                                            <option value="120">신규제공서버</option>
                                            <option value="126">신규제공서버2</option>
<!--                                 			<option value="121">인천제공서버</option> -->
<!--                                 			<option value="122">확대제공서버</option> -->
                                			<option value="123">광역제공서버</option>
<!--                                 			<option value="124">강화제공서버</option> -->
                                        </select>
                                    </td>
                                	<!-- <th>서버구분</th>
                                    <td><select id="sel_bit_business" class="in in_list bit_list1" name="text">
                                            <option value="01">리스트1</option>
                                            <option value="02">리스트2</option>
                                            <option value="03">리스트3</option>
                                        </select>
                                    </td> -->
                                    <th>BIT유형</th>
                                    <td><select id="sel_bittpcd" class="in in_list bit_list1" name="text">
                                       </select>
                                   	</td>
                                    
                                </tr>
                                <tr>
                                    <th>검색어</th>
                                    <td colspan="3">
                                        <div class="btn_box4_2">
                                             <input id="input_search" type="text" class="in bit_in_text" name="ID" placeholder="정류장명 / BIT ID">
                                             <span><img id="img_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                         </div>
                                         <a id="btn_clear" href="javascript:void(0);" class="serch_clear6">clear</a>
                                    </td>
                                </tr>
                            </table>
                                        
                            <div class="bit_left_chart_body2" style="top:120px;">
                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                	<table id="bit_list"></table>
                                </div>
                            </div>                                         
                        </div>
                        <!--오른쪽-->
                         <!-- <div class="bit_right2">
                            		오른쪽1 시작
                            <div class="bit_si_left">
                                <div class="sub_layer_title">
                                    <h3>적용중인 시나리오</h3>
                                </div>
                                <div class="bit_si_top">
                                    <p class="si_txt">BIT-1 홈플러스<span>적용 된 시나리오 20160714155315</span></p>
                                </div>
                                <div class="bit_si_chart">
                                    <div class="main_chart"><!--.main_chart 사이즈 [ width: 100%; height:100%;]
                                        <table id="scene_list"></table>
                                    </div>
                                </div>
                            </div> -->
                            <!--오른쪽1 끝-->
                            <!--오른쪽2 시작-->
                            <div class="bit_si_right">
                                <div class="sub_layer_title">
                                    <h3>선택 된 시나리오</h3>
                                </div>
                                <div class="bit_si_top">
                                    <p class="bit_si_serch" style="padding-left: 15px;">시나리오 선택
                                    <select id="sel_scenario_list" class="subtop_in si_list" style="width:73%;">
                                        <option value="00">시나리오 선택</option>
                                        <option value="01">리스트1</option>
                                        <option value="02">리스트2</option>
                                    </select>
                                    </p>
                                    <p id="btn_scenario_apply" class="si_btn" style="border-right:1px solid #d4d4d4"><img src="./images/si_icon_ok.png" alt="시나리오적용버튼"><span>시나리오 전송</span></p>
                                   <!--  <p id="btn_apply_result" class="si_btn"><img src="./images/si_icon_list.png" alt="전송결과"><span>전송 결과</span></p> -->
                                </div>
                                <div class="bit_si_chart">
                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                          <table id="scene_sel_list"></table>
                                    </div>
                                </div>
                            </div>
                            <!--오른쪽2 끝-->
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
