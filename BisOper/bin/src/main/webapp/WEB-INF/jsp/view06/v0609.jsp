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


</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>유지보수관리 - 유지보수업체정보관리</h2>
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
                    <table class="top1 v0609">
                         <tr>
							<th>관계기관유형</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>기관명</th>
                            <td><input type="search"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0609Left">
                			<div class="sub_title">
                				<h3>기관정보</h3>
                			</div>

                			<div class="conten con1">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>
                    		
							<!-- 아래 관계기관정보 관리-->
                			<div class="conbottom v0609bottom">
                				<div class="sub_title">
                					<h3>관계기관정보 관리</h3>
                				</div>
                				
                				<table class="chart v0609Chart">
                					<tr>
                						<th>기관명</th>
                						<td><input type="text" class="inYellow"></td>
                						<th>기관유형</th>
                						<td>
                							<select class="inYellow">
                								<option>전체</option>
                              				</select>
                						</td>
                						<th>사업자번호</th>
                						<td><input type="text"></td>
                					</tr>
                					<tr>
                						<th>우편번호</th>
                						<td><input type="text"></td>
                						<th>주소</th>
                						<td colspan="3"><input type="text" class="in499"></td>
                					</tr>
                					<tr>
                						<th>전화번호</th>
                						<td><input type="text"></td>
                						<th>FAX번호</th>
                						<td colspan="3"><input type="text"></td>
                					</tr>
                					<tr>
                						<th>비고</th>
                						<td colspan="5"><input type="text" class="in803"></td>
                					</tr>
                				</table>
                			</div>
                			
                			<!-- 왼쪽버튼 -->
                        	<div class="bottom_btn bottomLeft">
                        		<ul class="bottomBtn4">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->    
                        			<li><a href="javascript:void(0);" id="" class="">수정</a></li>	
                        			<li><a href="javascript:void(0);" id="" class="">삭제</a></li>	
                        		</ul>
                        	</div>

                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0609Right">
                			<div class="sub_title">
                				<h3>담당자정보</h3>
                			</div>

                			<div class="conten con1">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>
                    		
							<!-- 아래 담당자정보관리 -->
                			<div class="conbottom v0609bottom">
                				<div class="sub_title">
                					<h3>담당자정보관리</h3>
                				</div>
                				
                				<table class="chart v0609Chart">
                					<tr>
                						<th>담당자명</th>
                						<td><input type="text" class="inYellow"></td>
                						<th>직책</th>
                						<td><input type="text" class="inYellow"></td>
                					</tr>
                					<tr>
                						<th>전화번호</th>
                						<td colspan="3"><input type="text" class="in288"></td>
                					</tr>
                					<tr>
                						<th>휴대폰번호</th>
                						<td colspan="3"><input type="text" class="inYellow in288"></td>
                					</tr>
                					<tr>
                						<th>이메일</th>
                						<td colspan="3"><input type="text" class="in288"></td>
                					</tr>
                					
                				</table>
                			</div>
                			
                			<!-- 오른쪽 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn4">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->    
                        			<li><a href="javascript:void(0);" id="" class="">수정</a></li>	
                        			<li><a href="javascript:void(0);" id="" class="">삭제</a></li>	
                        		</ul>
                        	</div>
                		</div>
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
