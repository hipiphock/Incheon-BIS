<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>버스운행관리</title>
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
                <h2>버스운행관제 - 정류소제공정보조회</h2>
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
                    <table class="top1 v0104">
                         <tr>
							<th>조회구분</th>
                            <td>
                              	<select>
                              		<option>전체</option>
                              		<option>노선별</option>
                              		<option>도로별</option>
                              	</select>
                            </td>
                            <th>노선번호</th>
                            <td>
                              	<select>
                              		<option>전체</option>
								</select>
							</td>
                            <th>안내기<br>유형</th>
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
							<th>정류소명</th>
                            <td>
                            	<select>
                              		<option>전체</option>
								</select>
							</td>
							<th>조회범위</th>
                            <td>
                              	<input type="number" class="in50">시간
                              	<input type="number" class="in50">분
							</td>
							<!--<th>검색어</th>
                            <td>
                              	<div class="serchInputBox">
                                     <input type="search" class="" name="ID" id="input_searchWord" placeholder="정류소명">
                                </div>
                                <a id="btn_clear" class="serch_clear2">clear</a>
							</td>-->
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0104Left">
                			<div class="sub_title">
                				<h3>정류소 검색결과  <span>0</span> 건</h3>
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도검색</a>
                			</div>
                			
                			
                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0104Right">
                			<div class="sub_title">
                				<h3>정류소 제공 정보</h3>
                			</div>
                			
                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
