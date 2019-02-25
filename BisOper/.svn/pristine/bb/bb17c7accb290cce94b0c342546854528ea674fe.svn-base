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

<script src="./js/v04/v0402.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행위반정보분석</h2>
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
                    <table class="top1 v0402">
                         <tr>
							<th>조회구분</th>
                            <td><select id="date_month_selector">
                					<option value="">시간별</option>
                					<option value="0">일별</option>
                					<option value="1">월별</option>
                              	</select></td>
                            <th>기간</th>
                            <td>
                              <input type="date" class="in145"><input type="number" class="in50">~
                              <input type="date" class="in145"><input type="number" class="in50">	
							</td>
							<th>버스회사</th>
                            <td>
                              	<select id="busCompany">
                					<option value="">전체</option>
                              	</select>
							</td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0402Left">
                			<div class="sub_title">
                				<h3>버스회사선택</h3>
                			</div>
                			<a href="" class="btn_map btn_all" id="btn_all"><img src="./images/btn_all.png" alt="">전체선택</a>

                			<div class="conten con1">
                				<div class="main_chart">
                    				<table id="bus_company_list"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0402Right">
                			<div class="sub_title">
                				<h3>그래프표출</h3>
                			</div>
                			<a href="" class="btn_map btn_graph" id="btn_graph"><img src="./images/btn_graph.png" alt="">그래프</a>
                			
                			<!-- 선택버스노선 정류소 소통정보 시작 -->
                			<div class="conten con1">
                    			<div class="main_chart">
                    				<table id="main_graph"></table>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 아래 -->
                		<div class="conbottom v0402bottom">
                			<div class="sub_title">
                				<h3>운행위반분석조회</h3>
                			</div>
                			
                			<!-- 선택버스노선 정류소 소통정보 시작 -->
                			<div class="conten">
                    			<div class="main_chart">
                    				<table id="violence_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
