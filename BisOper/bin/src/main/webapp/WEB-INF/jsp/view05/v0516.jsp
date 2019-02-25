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


</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운행횟수관리 - 이의신청내역조회</h2>
            </header>
            
            <article class="contenWrap">
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0516">
                         <tr>
							<th>검색기간</th>
                            <td><input type="date"> ~ <input type="date"></td>
                            <th>버스회사</th>
                            <td>
                              	<select>
                              		<option>전체</option>
                              	</select>
                            </td>
                            <th>처리상태</th>
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
                		<div class="conleft v0516Left">
                			<div class="sub_title">
                				<h3>이의신청내역</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0516Right">
                			<div class="sub_title">
                				<h3>이의신청내역(상세정보)</h3>
                			</div>
                			
                			
                			<table class="chart v0516Chart">
                				<tr>
                					<th>이의신청제목</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>이의신청내용</th>
                					<td><textarea rows="" cols=""></textarea></td>
                				</tr>
                				<tr>
                					<th>처리상태</th>
                					<td></td>
                				</tr>
                				<tr>
                					<th>처리자</th>
                					<td></td>
                				</tr>
                				<tr>
                					<th>처리일시</th>
                					<td><input type="datetime-local"></td>
                				</tr>
                				<tr>
                					<th>처리내용</th>
                					<td><textarea rows="" cols=""></textarea></td>
                				</tr>
                			</table>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
