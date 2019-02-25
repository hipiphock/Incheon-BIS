<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>운행이력/통계정보분석</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>
<script src="./js/v09/v0903.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행이력조회 - 부당운행 이력조회</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0903">
                         <tr>
							<th>발생일시</th>
                            <td><input type="date" id="input_date"></td>
							<th>버스회사</th>
                            <td>
                              	<select id="busCompany">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>버스노선</th>
                            <td>
                              	<select id="busRoute">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>부당운행유형</th>
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
                            <td><input type="search" id="busno"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0903Left">
                			<div class="sub_title">
                				<h3 id="run_search_result">운행회차</h3>
                			</div>

                			<div class="conten">
                    			<div class="main_chart" id="run_chart">
                    				<table id="bus_run_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 오른쪽-->
                		<div class="conright v0903Right">
                			<div class="sub_title">
                				<h3>부당운행이력</h3>
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>

                			<div class="conten">
                    			<div class="main_chart" id="violence_chart">
                    				<table id="violent_operation_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
