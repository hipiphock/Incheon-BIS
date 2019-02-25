<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>운영정보관리</title>
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
                <h2>운영코드관리 - 코드관리</h2>
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
            	
                <section class="bodytBox onedep2">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v1003Left">
                			<div class="sub_title">
                				<h3>코드선택</h3>
                			</div>

                			<div class="conten">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v1003Right">
                			<div class="sub_title">
                				<h3>코드 검색 결과 <span>0</span> 건</h3>
                			</div>

                			<!-- 정류소별 정차노선검색 시작 -->
                			<div class="conten con1">
                    			<div class="main_chart">
                    				테이블
                    			</div>
                    		</div>

                			<!-- 환승지하철 시작 -->
                			<div class="conten con2">
                    			<table>
                    				<tr>
                    					<th>카테고리ID</th>
                    					<td><input type="text" class="inYellow"></td>
                    					<th>카테고리명</th>
                    					<td><input type="text" class="inYellow"></td>
                    					<th>상세내역</th>
                    					<td><input type="text" ></td>
                    				</tr>
                    				<tr>
                    					<th>비고</th>
                    					<td colspan="5"><input type="text" class="in499"> <span>※ 주의 : 사업구분코드값수정은 프로그램 담당자와 상의후 결정하세요</span></td>
                    				</tr>
                    			</table>
                    		</div>
                    		
                    		
                    		<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn4">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="btn_new" class="authNew disabled">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="btn_modify" class="authMod">수정</a></li>
                        			<li><a href="javascript:void(0);" id="btn_delete" class="authDel">삭제</a></li>
                        		</ul>
                        	</div>
                    		

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
