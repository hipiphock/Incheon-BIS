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

<script src="./js/v10/v1005.js"></script>
</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운영환경관리 - 운영파라미터관리</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a href="javascript:void(0);" id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a href="javascript:void(0);" id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a href="javascript:void(0);" id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
                
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v1005">
                         <tr>
							<th>프로세스 ID</th>
                            <td><select id="sel_processid">
                              		<option>전체</option>
                              		
                              	</select>
                            </td>
                            <th>프로세스명</th>
                            <td><input type="text" id="inp_processnm">
                            </td>
                         </tr>
                    </table>
                    <a href="javascript:void(0);" id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v1005Left">
                			<div class="sub_title">
                				<h3>프로세스목록</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    				<table id="detail_list"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v1005Right">
                			<div class="sub_title">
                				<h3>프로세스 관리</h3>
                			</div>

                			<table class="chart v1005Chart">
                				<tr>
                					<th>프로세스 ID</th>
                					<td><input type="text" class="inYellow" id="input_processid"></td>
                				</tr>
                				<tr>
                					<th>프로세스명</th>
                					<td><input type="text" class="inYellow" id="input_processnm"></td>
                				</tr>
                				<tr>
                					<th>IP주소</th>
                					<td><input type="text" class="inYellow" id="input_ipaddr"></td>
                				</tr>
                				<tr>
                					<th>포트번호</th>
                					<td><input type="text" class="inYellow" id="input_portno"></td>
                				</tr>
                				<tr>
                					<th>사용자명</th>
                					<td><input type="text" id="input_userid"></td>
                				</tr>
                				<tr>
                					<th>비밀번호</th>
                					<td><input type="text" id="input_passwd"></td>
                				</tr>
                			</table>
                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn4">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="btn_insert" class="">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="btn_update" class="">수정</a></li>
                        			<li><a href="javascript:void(0);" id="btn_delete" class="">삭제</a></li>
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
