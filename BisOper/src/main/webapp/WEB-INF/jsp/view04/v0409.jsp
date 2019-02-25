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
<script src="./js/comm/commChart.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v04/v0409.js"></script>
</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행평가 - 배차준수율통계조회</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a href="javascript:void(0);" id="btn_excel"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0409">
                         <tr>
							<th>조회구분</th>
                            <td><select id="sel_proccyclcd">
                					<option>일별</option>
                					<option>월별</option>
                              	</select></td>
                            <th>기간</th>
                            <td>
                              <input type="text" class="in180" id="inp_search_startdt" autocomplete="off"> ~
                              <input type="text" class="in180" id="inp_search_enddt" autocomplete="off">
							</td>
							<th>버스회사</th>
                            <td>
                              	<select id="sel_compid">
                					<option>전체</option>
                              	</select>
							</td>
                         </tr>	
                    </table>
                    <a href="javascript:void(0);" id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 위-->
                		<div class="conleft v0409top">
                			<div class="sub_title">
                				<h3>그래프표출</h3>
                			</div>
                			<a href="javascript:void(0);" class="btn_map btn_graph"><img src="./images/btn_graph.png" alt="">그래프</a>
                			
                			<div class="conten con1">
                    			<div class="main_chart">
                    				<div id="container" style="width: 1340px; height: 430px; margin: 0 auto"></div>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 아래 -->
                		<div class="conbottom v0409bottom">
                			<div class="sub_title">
                				<h3>배차준수율통계조회</h3>
                			</div>
                			
                			<div class="conten">
                    			<div class="main_chart">
                    				<table id="detail_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
