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

<script src="./js/v04/v0405.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행위반사항통보</h2>
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
                    <table class="top1 v0405">
                         <tr>
							<th>운행일자</th>
                            <td><input type="date" id="inputDate">
                            	<select class="in50">
                					<option>1시</option>
                					<option>2시</option>
                					<option>3시</option>
                					<option>4시</option>
                					<option>5시</option>
                					<option>6시</option>
                					<option>7시</option>
                					<option>8시</option>
                					<option>9시</option>
                					<option>10시</option>
                					<option>11시</option>
                					<option>12시</option>
                					<option>13시</option>
                					<option>14시</option>
                					<option>15시</option>
                					<option>16시</option>
                					<option>17시</option>
                					<option>18시</option>
                					<option>19시</option>
                					<option>20시</option>
                					<option>21시</option>
                					<option>22시</option>
                					<option>23시</option>
                					<option>24시</option>
                              	</select>
                              </td>
                            <th>버스회사</th>
                            <td>
                              	<select id="busCompany">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>노선번호</th>
                            <td>
                              	<select id="busRoute">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>운행위반유형</th>
                            <td>
                              	<select id="violenceType">
                					<option value="">전체</option>
                					<option value=12>개문주행</option>
                					<option value=15>과속</option>
                					<option value=17>급가속</option>
                					<option value=16>급감속</option>
                					<option value=10>노선이탈</option>
                					<option value=14>노선임의변경</option>
                					<option value=13>무정차통과</option>
									<option value=11>임의지연</option>
                              	</select>
							</td>
							<th>차량번호</th>
                            <td><input type="search" id="input_carregno"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0405Left">
                			<div class="sub_title">
                				<h3 id="bus_search_result">검색결과 <span>0</span> 건</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart" id="bus_chart">
                    				<table id="bus_list"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0405Right">
                			<div class="sub_title">
                				<h3 id="violent_search_result">운행위반내역검색</h3>
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>
                			
                			<!-- 운행위반내역검색 시작 -->
                			<div class="conten con1">
                    			<div class="main_chart" id="violent_chart">
                    				<table id="violent_operation_list"></table>
                    			</div>
                    		</div>
                			
                			<div class="sub_title">
                				<h3>패널티등록</h3>
                			</div>
                			
                			<!-- 패널티등록 시작 -->
                			<div class="conten con2">
                    			<table class="chart v0405Chart">
                    				<tr>
                    					<th>발생일시</th>
                    					<td><input type="text" id="input_evt_occurdt" disabled></td>
                    					<th>버스회사</th>
                    					<td><input type="text" id="input_compnm" disabled></td>
                    					<th>노선번호</th>
                    					<td><input type="text" id="input_routeno" disabled></td>
                    					<th>차량번호</th>
                    					<td><input type="text" id="input_carno" disabled></td>
                    				</tr>
                    				<tr>
                    					<th>위반유형</th>
                    					<td><input type="text" id="input_runvioltype" disabled></td>
                    					<th>패널티유형</th>
                    					<td>
                    						<select class="inYellow" id="select_penaltyType">
                								<option value=1>경고</option>
                								<option value=2>행정처분</option>
                								<option value=3>인허가취소</option>
                								<option value=4>면허정지</option>
                              				</select>
                    					</td>
                    					<th>처리내역</th>
                    					<td colspan="3"><input type="text" id="process_detail"></td>
                    				</tr>
                    			</table>
                    			<button class="btn_regi">등록</button>
                    		</div>
                    		
                    		<div class="sub_title">
                				<h3>패널티처리이력</h3>
                			</div>
                    		<!-- 패널티처리이력 시작 -->
                			<div class="conten con3">
                    			<div class="main_chart" id="penalty_chart">
                    				<table id="penalty_process_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
