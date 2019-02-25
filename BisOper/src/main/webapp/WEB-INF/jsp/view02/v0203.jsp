<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>배차관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v02/v0203.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행정시성 현황조회</h2>
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
                    <table class="top1 v0203">
                         <tr>
							<th>운행일자</th>
                            <td><input type="date"></td>
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
                		<div class="conleft v0203Left">
                			<div class="sub_title">
                				<h3 id="total_search">회사별 노선리스트 <span>0</span> 건</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart" id="company_route_chart">
                    				<table id="company_route_list"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0203Right">
                			<div class="sub_title">
                				<h3>운행정시성현황</h3>
                			</div>
                			
                			<!-- 선택버스노선 정류소 소통정보 시작 -->
                			<div class="conten">
                    			<div class="main_chart" id="oper_regularity_chart">
                    				<table id="oper_regularity_list"></table>
                    			</div>
                    		</div>

                		</div>

                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
