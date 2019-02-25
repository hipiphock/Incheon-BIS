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

<script src="./js/v04/v0406.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행위반패널티조회</h2>
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
                    <table class="top1 v0406">
                         <tr>
							<th>기간</th>
                            <td><input type="date" id="search_start_date"> ~ <input type="date" id="search_end_date"></td>
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
							<th>패널티유형</th>
                            <td>
                              	<select id="penaltyType">
                              		<option value="">전체</option>
									<option value=1>경고</option>
                					<option value=2>행정처분</option>
                					<option value=3>인허가취소</option>
                					<option value=4>면허정지</option>
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
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">

                		<div class="main_chart" id="penalty_chart">
                    		<table id="penalty_process_list"></table>
                    	</div>
                			
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
