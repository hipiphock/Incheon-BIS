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


</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행통계조회 - 돌발상황 통계조회</h2>
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
                    <table class="top1 v0912">
                         <tr>
							<th>조회구분</th>
                            <td>
                              	<select>
                					<option>시간별</option>
                              	</select>
							</td>
							<th>기간</th>
                            <td><input type="date"> <input type="number" class="in50"> ~ <input type="date"> <input type="number" class="in50"></td>
							<th>버스회사</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>노선번호</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>통계유형</th>
                            <td>
                              	<select>
                					<option>회사노선별</option>
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
                		<div class="conleft v0912Left">
                			<div class="sub_title">
                				<h3>버스회사선택</h3>
                			</div>
                			<a href="" class="btn_map btn_all"><img src="./images/btn_all.png" alt="">전체선택</a>

                			<div class="conten con1">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0912Right">
                			<div class="sub_title">
                				<h3>돌발상황 통계 그래프</h3>
                			</div>
                			<a href="" class="btn_map btn_graph"><img src="./images/btn_graph.png" alt="">그래프</a>
                			
                			<div class="conten con1">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 아래 -->
                		<div class="conbottom v0912bottom">
                			<div class="sub_title">
                				<h3>돌발상황통계조회</h3>
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
