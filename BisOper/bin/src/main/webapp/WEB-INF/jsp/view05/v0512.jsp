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
                <h2>정류소관리 - 정류소기초인허가정보</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    	<li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_move.png"><p>위치편집</p></a></li>
                    	<li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_xmap.png"><p>XMAP설정</p></a></li>
                    	<li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_xcm.png"><p>XCM설정</p></a></li>
                    	<li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>XMAP파일</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
                
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0512">
                         <tr>
							<th>요청일자</th>
                            <td><input type="date"> ~ <input type="date"></td>
                            <th>정류소명</th>
                            <td><select>
                              		<option>전체</option>
                              	</select>
                            </td>
                            <th>인허가상태</th>
                            <td><select>
                              		<option>전체</option>
                              	</select>
                            </td>
                            <td><label><input type="checkbox" class="checkBox">최근편집용</label></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0512Left">
                			<div class="sub_title">
                				<h3>정류소 검색결과 <span>0</span> 건</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0512Right">
                			<div class="sub_title">
                				<h3>정류소 데이터 입력</h3>
                			</div>
                			
                			
                			<table class="chart v0512Chart">
                				<tr>
                					<th>인허가처리</th>
                					<td><select>
                              				<option>시스템적용</option>
                              			</select>
                              			<a href="" class="btnR">마스터조회</a>
                              		</td>
                				</tr>
                				<tr>
                					<th>처리상세내역</th>
                					<td><input type="text"><a href="" class="btnR">마스터적용</a>
                					</td>
                				</tr>
                				<tr>
                					<th>Last Uploaded</th>
                					<td><input type="text"><a href="" class="btnR">XMAP업로드</td>
                				</tr>
                				<tr>
                					<th>XMAP적용시작</th>
                					<td><input type="date"><a href="" class="btnR">인허가삭제</td>
                				</tr>
                				<tr>
                					<th>마스터적용시작</th>
                					<td><input type="date"><a href="" class="btnR">적용일수정</td>
                				</tr>
                			</table>
                			
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
