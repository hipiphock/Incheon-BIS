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

<script src="./js/v09/v0914.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>서비스이용 통계조회</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>통계저장</p></a></li>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>WEB저장</p></a></li>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>ARS저장</p></a></li>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>SMS저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0914">
                         <tr>
							<th>조회년 - 월</th>
                            <td><input type="month">
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0914Left">
                			<div class="sub_title">
                				<h3>서비스매체별 이용통게</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart" id="chart_chart">
                    				<table id="main_table"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0914Right">
                			<div class="sub_title">
                				<h3>WEB 일일 사용내역</h3>
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>
                			
                			<!-- WEB 일일 사용내역 시작 -->
                			<div class="conten con1">
                    			<div class="main_chart" id="web_chart">
                    				<table id="web_table"></table>
                    			</div>
                    		</div>
                			
                			<div class="sub_title">
                				<h3>ARS 서비스 일일 사용내역</h3>
                			</div>
                			
                			<!-- ARS 서비스 시작 -->
                			<div class="conten con2">
                    			<div class="main_chart" id="ARS_chart">
                    				<table id="ARS_table"></table>
                    			</div>
                    		</div>
                    		
                    		<div class="sub_title">
                				<h3>SMS 서비스 일일 사용내역</h3>
                			</div>
                			
                    		<!-- MS 서비스 시작 -->
                			<div class="conten con3">
                    			<div class="main_chart" id="MS_chart">
                    				<table id="MS_table"></table>
                    			</div>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
