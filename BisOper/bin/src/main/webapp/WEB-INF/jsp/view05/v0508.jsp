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
                <h2>노선관리/분석 - 노선버전관리</h2>
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
                    <table class="top1 v0508">
                         <tr>
                         	<td><label><input type="checkbox" class="checkBox">전체검색</label></td>
							<th>마스터적용일자</th>
                            <td><input type="date"> ~ <input type="date"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0508Left">
                			<div class="sub_title">
                				<h3>노선버전 검색결과 <span>0</span> 건</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    			테이블
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0508Right">
                			<div class="sub_title">
                				<h3>노선 버전 데이터 입력</h3>
                			</div>
                			
                			
                			<table class="chart v0508Chart">
                				<tr>
                					<th>Master 적용일자</th>
                					<td>
                						<input type="date" class="in180">
                						<label><input type="checkbox" class="checkBox">미입력</label>
                              		</td>
                				</tr>
                				<tr>
                					<th>노선번호</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>CSV 버전</th>
                					<td><input type="number"></td>
                				</tr>
                				<tr>
                					<th>GIS 버전</th>
                					<td><input type="number"></td>
                				</tr>
                				<tr>
                					<th>수정내용</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>비고</th>
                					<td><input type="text"></td>
                				</tr>
                				<tr>
                					<th>업데이트 파일</th>
                					<td><input type="text"></td>
                				</tr>
                			</table>
                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn5">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="btn_new" class="">입력</a></li>
                        			<li><a href="javascript:void(0);" id="btn_modify" class="authMod">수정</a></li>
                        			<li><a href="javascript:void(0);" id="" class=" disabled">삭제</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="" class="">엑셀업로드</a></li>
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
