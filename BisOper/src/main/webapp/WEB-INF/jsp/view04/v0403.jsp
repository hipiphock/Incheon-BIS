<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>운행서비스평가지원</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v04/v0403.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>통과시간대비제공정보비교</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0403">
                         <tr>
							<th>조회구분</th>
                            <td>
                              	<select id="option_selector">
                              		<option value="-1">전체</option>
                              		<option value="0">노선별</option>
                              		<option value="1">도로별</option>
                              	</select>
                            </td>
                            <th id="option_selected">노선번호</th>
                            <td>
                              	<select id="route_road_selector">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>안내기유형</th>
                            <td>
                              	<select id="bit_type_selector">
                              		<option value="">전체</option>
                              		<option value="25">LCD거치형32인치(양면)</option>
                              		<option value="72">LCD독립형32인치(단면)</option>
                              		<option value="41">LCD독립형32인치(단면-세미)</option>
                              		<option value="75">LCD독립형46인치(KIOSK)</option>
									<option value="69">LCD부착형26인치(단면)</option>
									<option value="70">LCD부착형26인치(양면)</option>
                              		<option value="71">LCD부착형32인치(단면)</option>
                              		<option value="79">LCD타워형26인치(2면)</option>
                              		<option value="73">LCD환승형52인치(단면)</option>
                              		<option value="31">LED독립형3단10인치(단면)</option>
                              		<option value="32">LED독립형3단10인치(양면)</option>
                              		<option value="55">LED독립형4단12인치(단면)</option>
                              		<option value="50">LED독립형5단10인치(단면)</option>
                              		<option value="30">LED부착형3단10인치(단면)</option>
                              		<option value="56">LED부착형4단12인치(단면)</option>
                              		<option value="59">LED타워형1단26인치(4면)</option>
								</select>
							</td>
							<th>정류소명</th>
                            <td><input type="search" id="search_by_keyword"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0403Left">
                			<div class="sub_title">
                				<h3 id="total_stop_result">정류소 검색결과</h3>
                				<a href="" class="topBtn_map" id="btn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>
                			
                			<!-- 정류소검색결과 -->
                			<div class="conten con1">
                    			<div class="main_chart" id="busstop_list_chart">
                    				<table id="bus_stop_list"></table>
                    			</div>
                    		</div>
                			
                			<div class="sub_title">
                				<h3>제공정보검색범위설정</h3>
                			</div>
                			
                			<!-- 제공정보검색범위설정-->
                			<div class="conten con2">
                    			<table class="chart v0403Chart">
                    				<tr>
                    					<th><input type="checkbox" checked="checked" class="checkBox">정류소통과시간(1)</th>
                    					<td><input type="date" class="in118"><input type="time" class="in50"> ~
                    						<input type="date" class="in118"><input type="time" class="in50">
                    					</td>
                    				</tr>
                    				<tr>
                    					<th><input type="checkbox" class="checkBox">정류소통과시간(2)</th>
                    					<td><input type="date" class="in118"><input type="time" class="in50"> ~
                    						<input type="date" class="in118"><input type="time" class="in50">
                    					</td>
                    				</tr>
                    				<tr>
                    					<th><input type="checkbox" class="checkBox">정류소통과시간(3)</th>
                    					<td><input type="date" class="in118"><input type="time" class="in50"> ~
                    						<input type="date" class="in118"><input type="time" class="in50">
                    					</td>
                    				</tr>
                    				<tr>
                    					<th><input type="checkbox" class="checkBox">정류소통과시간(4)</th>
                    					<td><input type="date" class="in118"><input type="time" class="in50"> ~
                    						<input type="date" class="in118"><input type="time" class="in50">
                    					</td>
                    				</tr>
                    				<tr>
                    					<th>도착예정시간범위</th>
                    					<td><input type="number" class="in50" id="exp_arr_time"> 분</td>
                    				</tr>
                    				<tr>
                    					<th>도착정보검색정류소수범위</th>
                    					<td><input type="number" class="in50" id="min_bstopcnt"> ~ <input type="number" class="in50" id="max_bstopcnt"></td>
                    				</tr>
                    			</table>
                    		</div>

                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0403Right">
                			<div class="sub_title">
                				<h3>정류소제공정보</h3>
                			</div>

                			<div class="conten">
                    			<div class="main_chart" id="detail_chart">
                    				<table id="busstop_detail_table"></table>
                    			</div>
                    		</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
