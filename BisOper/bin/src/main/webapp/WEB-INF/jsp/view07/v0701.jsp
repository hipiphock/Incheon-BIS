<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>차량단말업그레이드</title>
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
                <h2>무선업그레이드관리(LG)</h2>
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
				<section class="serchBox v07serchBox">
                    <table class="top1 v0701">
                         <tr>
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
							<th>차량번호</th>
                            <td><input type="search"></td>
                             <td><label><input type="checkbox" class="checkBox">전체 선택/해제</label></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                    <a id="" class="btn_ftp">FTP연결</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 위 -->
                		<div class="conleft v0701top">
                			<div class="sub_title">
                				<h3>무선업그레이드 차량</h3>
                			</div>

                			<div class="conten con1">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>

							<div class="conten con2">
                				<table>
                					<tr>
                						<th><label><input type="checkbox" class="checkBox"> 노선버전</label></th>
                						<td><input type="number"></td>
                						<th><label><input type="checkbox" class="checkBox"> 운영버전</label></th>
                						<td><input type="number"></td>
                						<th><label><input type="checkbox" class="checkBox"> GIS버전</label></th>
                						<td><input type="number"></td>
                						<th>적용일시</th>
                						<td><input type="date" class="in145"><input type="number" class="in90"></td>
                						<td><label style="color: #ba0202; font-weight: bold;"><input type="checkbox" class="checkBox"> 전송확인</label></td>
                					</tr>
                				</table>
                				<button class="btn"><img src="./images/icon_ok.png" alt="">전송</button>
                			</div>
                		</div>
                		
                		<!-- WORK 디렉토리 :-->
                		<div class="conbottom v0701bottom1">
                			<div class="sub_title">
                				<h3>FTP파일전송 - WORK 디렉토리 : <span>??</span></h3>
                				<button class="btn_polder"><img src="./images/btn_polder.png" alt=""></button>
                			</div>

                			<div class="conten">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>
                    		
                    		<table class="v0701Left_table">
                    			<tr>
                    				<th>버전일시</th>
                    				<td><input type="date" class="in120"> <input type="number" class="in40"></td>
                    				<td><label><input type="checkbox" class="checkBox">전체선택</label></td>
                    				<th style="width: 43px">버전</th>
                    				<td><input type="number" class="in50"></td>
                    			</tr>
                    		</table>
                    		
                    		<!-- 버튼 -->
                        	<div class="bottom_btn bottomLeft">
                        		<ul class="bottomBtn3">
                        			<li><a href="javascript:void(0);" id="" class="">버전적용</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">파일삭제</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="" class="">파일이동</a></li>
                        		</ul>
                        	</div>
                    		
                		</div>
                		
                		<!-- DOWNLOAD 디렉토리 :-->
                		<div class="conbottom v0701bottom2">
                			<div class="sub_title">
                				<h3>FTP파일전송 - WORK 디렉토리 : <span>??</span></h3>
                				<button class="btn_polder"><img src="./images/btn_polder.png" alt=""></button>
                			</div>

                			<div class="conten">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>
                    		
                    		<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn2">
                        			<li><a href="javascript:void(0);" id="" class="">파일삭제</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="" class="">폴더생성</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        		</ul>
                        	</div>
                    		
                		</div>
                		
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
