<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>시설물관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v06/v0611.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>이력관리 - BIT외부충격이력</h2>
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
                    <table class="top1 v0611">
                         <tr>
                         	<td><label><input type="radio" name="v0611Radio" checked="checked" id="radio_incheon"> 인천</label>
                         		<label><input type="radio" name="v0611Radio" id="radio_w"> 광역</label>
                         	</td>
							<th>안내기ID</th>
                            <td>
                            	<input id="bitid">
                              	
							</td>
							<th>정류소명</th>
                            <td>
                              	<input id="detail">
							</td>
							<th>안내기유형</th>
                            <td>
                              	<select id="bittpcd">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>기간</th>
                            <td>
                              <input type="date" id="startdt"> ~ <input type="date" id="enddt">
							</td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0611Left">
                			<div class="sub_title">
                				<h3>정류소안내기</h3>
                			</div>

                			<div class="conten con1">
                    			<div class="main_chart">
                    				<table id="main_table"></table>
                    			</div>
                    		</div>
                    		
							<!-- 아래 관계기관정보 관리-->
                			<div class="conbottom v0611bottom">
                				<div class="sub_title">
                					<h3>유지보수 업체정보</h3>
                				</div>
                				
                				<div class="conten">
                    			<div class="main_chart2">
                    				<table id="bottom_table"></table>
                    			</div>
                    		</div>
                				
                			</div>
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0611Right">
                			<div class="sub_title">
                				<h3>충격이력</h3>
                			</div>

                			<div class="conten con1">
                    			<div class="main_chart3">
                    				<table id="right_table"></table>
                    			</div>
                    		</div>
                    		
							<!-- 아래 담당자정보관리 -->
                			<div class="conbottom v0611bottom">
                				<div class="sub_title">
                					<h3>충격이력비교</h3>
                				</div>
                				<textarea rows="" cols="" class="inTr"></textarea>
                				
                			</div>
                			
                			<!-- 오른쪽 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn2">
                        			<li><a href="javascript:void(0);" id="" class="">영상보기</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">적용</a></li>
                        		</ul>
                        	</div>
                		</div>
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
