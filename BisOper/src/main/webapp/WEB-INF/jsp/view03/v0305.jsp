<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>메시지관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v03/v0305.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>제공정보표출현황조회</h2>
            </header>
            
            <article class="contenWrap">
                
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0305">
                         <tr>
                            <th>안내기유형</th>
                            <td>
                              	<select id="cd_option">
                              		<option value="-1">전체</option>
								</select>
							</td>
							<th>설치장소</th>
                            <td>
                              	<select id="installloc_option">
                					<option value="-1">전체</option>
                              	</select>
							</td>
							<th>안내기 ID</th>
                            <td>
                               <input type="search" id="input">
							</td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox onedep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0305Left">
                			<div class="sub_title">
                				<h3>안내기 검색결과</h3>
                				<!--  <a class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a> -->
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    				<table id="main_table"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0305Right">
                			<ul class="conten">
                				<li></li>
                				<li></li>
                				<li></li>
                				<li></li>
                			</ul>
                		           			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn2">
                        			<li><a id="btn_new" class="disabled">전송</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a id="" class="disabled">중단</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
