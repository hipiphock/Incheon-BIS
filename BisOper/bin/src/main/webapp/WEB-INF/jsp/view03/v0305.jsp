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
                              	<select>
                              		<option>전체</option>
                              		<option>LCD거치형32인치</option>
                              		<option>LED부착형3단10인치</option>
                              		<option>LED독립형3단10인치</option>
                              		<option>LCD독립형32인치</option>
                              		<option>LED독립형5단10인치</option>
                              		<option>LED독립형4단12인치</option>
                              		<option>LED부착형4단12인치</option>
                              		<option>LED타워형1단26인치</option>
                              		<option>LCD부착형26인치</option>
                              		<option>LCD부착형32인치</option>
                              		<option>LCD독립형32인치</option>
                              		<option>LCD환승형52인치</option>
                              		<option>LCD독립형46인치</option>
                              		<option>LCD타워형26인치</option>
								</select>
							</td>
							<th>설치장소</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>안내기 ID</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
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
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
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
