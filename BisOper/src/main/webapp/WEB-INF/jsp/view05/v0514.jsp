<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>기반정보관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v0514.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>정류소관리 - 정류소환승정보관리</h2>
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
            	
                <section class="bodytBox onedep2">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0514Left">
                			<div class="sub_title">
                				<h3>정류소 <span id="stop_cnt">0</span> 건</h3>
                				<a href="javascript:void(0);" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>

                			<div class="conten">
                    			<div class="main_chart">
                    				<table id="stop_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0514Right">
                			<div class="sub_title">
                				<h3>지하철역 검색 결과 <span id="sbwy_cnt">0</span> 건</h3>
                				<a href="javascript:void(0);" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>

                			<!-- 정류소별 정차노선검색 시작 -->
                			<div class="conten con1">
                    			<div class="main_chart">
                    				<table id="subway_list"></table>
                    			</div>
                    		</div>
                			
                			<div class="sub_title">
                				<h3>환승지하철</h3>
                			</div>
                			
                			<!-- 환승지하철 시작 -->
                			<div class="conten con2">
                    			<div class="main_chart">
                    				<table id="transfer_subway_list"></table>
                    			</div>
                    		</div>
                    		
                    		
                    		<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn2">
                        			<li><a href="javascript:void(0);" id="btn_new" class="authNew"><img src="./images/bit_plus_icon7.png" alt="">정류소환승지하철 추가</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="btn_delete" class="">정류소환승지하철 삭제</a></li>
                        		</ul>
                        	</div>
                    		

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
