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
<script src="./js/comm/jquery.js"></script>


</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>안내기부가정보조회</h2>
            </header>
            
            <article class="contenWrap">
                
                <!--탭 시작--> 
                <div class="tab">
                	<ul>
                		<li class="tab1 click">인천,인천(확대) 안내기</li>
                		<li class="tab2">광역, 부천, 김포 안내기</li>
                	</ul>
                </div>                                               
                <!--탭 끝-->
                
                <section class="bodytBox onedep tabDep">
                
                	<!-- 인천,인천(확대) 안내기 -->
                	<div class="contenBox allBody tabCon1">
                		
                		<div class="conleft v0307Left">
                			<div class="sub_title">
                				<h3>인천안내기 <span>0</span> 건</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                			<div class="conbottom">
                				파일유형 : 
                				<select class="in200">
                					<option>화상캠정보</option>
                					<option>영상정보</option>
                              		<option>로그파일정보</option>
                				</select>
                			</div>
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomLeft">
                        		<ul class="bottomBtn2">
                        			<li><a id="btn_new" class="">요청</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a id="" class="disabled">중단</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        		</ul>
                        	</div>
                			
                		</div>
                		
                		<div class="conright v0307Right">
                			<div class="sub_title">
                				<h3>안내기 표출정보</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                		</div>
                		
                		
                	</div> 
                	<!-- 인천,인천(확대) 안내기  끝--> 
                	
                	<!-- 광역, 부천, 김포 안내기 -->
                	<div class="contenBox allBody tabCon2">
                		
                		<div class="conleft v0307Left">
                			<div class="sub_title">
                				<h3>광역안내기 <span>0</span> 건</h3>
                			</div>

                			<div class="conten conten2">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                			<div class="conbottom2">
                				<table class="chart">
                					<tr>
                						<th>촬영주기</th>
                						<td><input type="number" class="in50"> 초 간격</td>
                						<th>촬영시간</th>
                						<td><input type="number" class="in50"> 분 동안</td>
                					</tr>
                					<tr>
                						<td colspan="4">
                							<label>
                								<input type="radio" name="cam" checked="checked">
                								상단캠
                							</label>
                							<label>
                								<input type="radio" name="cam">
                								전면캠
                							</label>
                							<label>
                								<input type="radio" name="cam">
                								화면캡쳐
                							</label>
                						</td>
                					</tr>
                				</table>
                			</div>
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomLeft">
                        		<ul class="bottomBtn2">
                        			<li><a id="btn_new" class="">요청</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a id="" class="disabled">중단</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        		</ul>
                        	</div>
                			
                		</div>
                		
                		<div class="conright v0307Right">
                			<div class="sub_title">
                				<h3>안내기 표출정보</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                		</div>
                		
                	</div> 
                	<!--광역, 부천, 김포 안내기 끝--> 

                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
