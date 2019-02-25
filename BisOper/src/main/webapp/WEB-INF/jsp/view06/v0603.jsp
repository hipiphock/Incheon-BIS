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

<script src="./js/v06/v0603.js"></script>
<style type="text/css">
.hidden{
	display: none; 
}
</style>
</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>기본정보관리 - 전산장비 기초정보관리</h2>
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
                    <table class="top1 v0603">
                         <tr>
							<th>장비종류</th>
                            <td><select id="equip_option">
                              		<option value="1">차고지AP</option>
                              		<option value="2">운영단말기</option>
                              	</select>
                            </td>
                            <th>장비ID</th>
                            <td><input type="search" id="garageapid_input"> 
                            </td>
                            <th>장비유형</th>
                            <td><select id="aptpcd_option">
                              		<option value="-1">전체</option>
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
                		<div class="conleft v0603Left">
                			<div class="sub_title">
                				<h3>전산장비</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    				<table id="main_table"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0603Right">
                			<div class="sub_title">
                				<h3>정보관리</h3>
                			</div>
                			
                			<!-- 차고지AP 정보관리 탭 -->
                			<table class="chart v0603Chart">
                				<tr>
                					<th>차고지AP ID</th>
                					<td><input type="text" id="input_garageapid" readonly></td>
                					<th>시설물ID</th>
                					<td><input type="text" id="input_facilid" readonly></td>
                				</tr>
                				<tr>
                					<th>차고지명</th>
                					<td><select class="inYellow" id="select_garagenm">
                              			</select>
                              		</td>
                					<th>AP 유형</th>
                					<td><select class="inYellow" id="aptpcd_option2">

                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>통신링크유형</th>
                					<td><select id="select_commlinktype">
                              			</select>
                              		</td>
                					<th>IP 주소</th>
                					<td><input type="text" id="input_ipaddr_1"></td>
                				</tr>
                				<tr>
                					<th>포트번호</th>
                					<td><input type="text" id="input_portno"></td>
                					<th>모뎀시리얼<br>번호</th>
                					<td><input type="text" id="input_modem_serialno"></td>
                				</tr>
                				<tr>
                					<th>설치위치</th>
                					<td><input type="text" id="input_installloc"></td>
                					<th>모델명</th>
                					<td><input type="text" id="input_modelnm"></td>
                				</tr>
                				<tr>
                					<th>유지보수기관</th>
                					<td><select id="select_orgnm">   
                							<option value="0"> </option>      
                              			</select>
                              		</td>
                					<th>사용여부</th>
                					<td><select class="inYellow" id="select_useyn"> 
                              				<option value="0">미사용</option>
                              				<option value="1">사용</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>사용종료일시</th>
                					<td><input type="text" id="input_use_enddt" readonly></td>
                					<th>제작일자</th>
                					<td><input type="date" id="input_manufymd"></td>
                				</tr>
                				<tr>
                					<th>구매일자</th>
                					<td><input type="date" id="input_purchdt"></td>
                					<th>설치일자</th>
                					<td><input type="date" id="input_installdt"></td>
                				</tr>
                				<tr>
                					<th>비고</th>
                					<td colspan="3"><input type="text" class="in305" id="input_descr"></td>
                				</tr>
                			</table> 
                			
                			<!-- 운영단말기 정보관리 탭 -->
                			<table class="chart v0603Chart hidden">
                				<tr>
                					<th>운영단말기ID</th>
                					<td><input type="text" id="input_optermid" readonly></td>
                					<th>시설물ID</th>
                					<td><input type="text" id="facilid" readonly></td>
                				</tr>
                				<tr>
                					<th>매트릭스포트</th>
                					<td><input type="text" id="input_matrix_portno">                              			
                              		</td>
                					<th>운영단말용도</th>
                					<td><select class="inYellow" id="tp">
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>통신링크유형</th>
                					<td><select id="select_commlinktype2">
                              			</select>
                              		</td>
                					<th>IP 주소</th>
                					<td><input type="text" id="ipaddr"></td>
                				</tr>                
                				<tr>
                					<th>설치위치</th>
                					<td><input type="text" id="installloc"></td>
                					<th>모델명</th>
                					<td><input type="text" id="modelnm"></td>
                				</tr>
                				<tr>
                					<th>유지보수기관</th>
                					<td><select id="select_orgnm2">   
                							<option value="0"> </option>      
                              			</select>
                              		</td>
                					<th>사용여부</th>
                					<td><select class="inYellow" id="select_useyn2"> 
                              				<option value="0">미사용</option>
                              				<option value="1">사용</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>사용종료일시</th>
                					<td><input type="text" id="use_enddt" readonly></td>
                					<th>제작일자</th>
                					<td><input type="date" id="manufymd"></td>
                				</tr>
                				<tr>
                					<th>구매일자</th>
                					<td><input type="date" id="purchdt"></td>
                					<th>설치일자</th>
                					<td><input type="date" id="installdt"></td>
                				</tr>
                				<tr>
                					<th>비고</th>
                					<td colspan="3"><input type="text" class="in305" id="descr"></td>
                				</tr>
                			</table>                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn3">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="btn_new" class="">신규등록</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        			<li><a href="javascript:void(0);" id="btn_modify" class="">수정</a></li>
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
