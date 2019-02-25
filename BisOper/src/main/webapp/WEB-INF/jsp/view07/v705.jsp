<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>도착정보 신뢰도 분석 - 상세</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/lib/hashMap.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/commChart.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v07/v705.js"></script>

<script type="text/javascript">
	var START_DATE_TIME = '${start_date_time}';
	var END_DATE_TIME = '${end_date_time}';
	var START_RANGE = '${start_range}';
	var END_RANGE = '${end_range}';
	var BIT_ID = '${bit_id}';
	var STOP_ID = '${stop_id}';
</script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v705">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>도착정보 신뢰도 상세</h2>
            </div>
            <!--내용 레이아웃시작-->
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            	<div class="big_all_body_con">
                	<!--상단버튼시작-->
                	<div class="sub_top_btn">
                    	<ul>
                        	<li><a href="javascript:void(0);" id="btn_excel" ><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        	<li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"><p>새로고침</a></li>
                    	</ul>
                	</div>
                	<!--상단버튼끝-->
                	<div class="base_conbody_ch">
                		<!--왼쪽내용시작-->
                		<div class="do705_wrap">
                			<p class="statistic3_con_click_title" id="text_title" style="line-height: 20px;"></p>
                            	<!-- 표 -->
                                <div class="do705_left_wrap">
                                    <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                        <table id="trust_detail_list"></table>
                                    </div>
                                </div>
                		</div>
                		<!-- 왼쪽내용끝 -->
                		<!-- 오른쪽내용시작 -->
                		<div class="statistic3_con_right_ch">
                    		<p class="statistic3_con_click_title"><span>선택 노선</span> - <span id="txt_route"></span></p>
                    		<div class="subcon_con_statistic3">  
                    		    <div class="do705_right_top">
                    		    	<p>데이터 기준 :<span id="text_range"></span></p>
                    		    	<p>
                    		    		<!-- <span>
                    		    			<select id="" class="in in_list do705_list" name="text">
                                         		<option value="01">리스트1</option>
                                         		<option value="02">리스트2</option>
                                         		<option value="03">리스트3</option>
                                         	</select>
                                        </span> 
										<span>잔여정류장 개수</span>
										<span>데이터</span>-->
									</p>
                    		    </div>
                        		<div class="do705_right_chart_body">
                            		<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                            			<div id="chart" style="width: 655px; height: 509px;"></div>
                            		</div>
                            	</div>
                            	<!--왼쪽아래 버튼-->
                        		<div class="subcon2_right_btn">
                                    <div class="do705_left_text">
                                    	<p>설정 된 그래프 요약 방식 : [<span id="chart_opt_txt">오차 최대값</span>]</p>
                                    	<input type="hidden" id="input_chart_opt" value="MAX"> 
                                    </div>
                                	<ul class="con2_r do705_width">
                                      	<li><a class="opt selected" id="MAX" href="javascript:void(0);">최대값</a></li>
                                      	<li><a class="opt" id="MIN" href="javascript:void(0);">최소값</a></li>
                                      	<li><a class="opt" id="AVG" href="javascript:void(0);">평균값</a></li>
                                      	<li><a class="opt" id="SUM" href="javascript:void(0);">없음</a></li>
                                    </ul>
                                </div> 
                    		</div>
                		</div>
                		<!--오른쪽 내용끝-->
                	</div>
                </div>
            </div>
             <!--내용 레이아웃끝-->     
        </div>
</body>
</html>
