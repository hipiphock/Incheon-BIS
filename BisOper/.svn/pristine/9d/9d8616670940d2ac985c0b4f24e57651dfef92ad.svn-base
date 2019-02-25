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

<script src="./js/v05/v0510.js"></script>
</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>정류소관리 - 정류소기초정보관리</h2>
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
                    <table class="top1 v0510">
                         <tr>
							<th>정류소시설유형</th>
                            <td><select id="sel_bstopfacilcd">
                              		<option>전체</option>
                              	</select>
                            </td>
                            <th>정류소명</th>
                            	<td><input type="text" id="inp_bstopnm"></td>
                            <th>관할관청</th>
                            	<td><input type="text" id="inp_adminnm"></td>
                            <th>동명</th>
                            <td><input type="text" id="inp_dongnm"></td>
                            <td><label><input type="checkbox" class="checkBox" id="chk_useyn">미사용포함</label>
                            	<label><input type="checkbox" class="checkBox" id="chk_viaStop">노선경유정류장</label>
                            </td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0510Left">
                			<div class="sub_title">
                				<h3>정류소 검색결과 <span id="stop_cnt">0</span> 건</h3>
                				<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    				<table id="stop_detail_list"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0510Right">
                			<div class="sub_title">
                				<h3>정류소 데이터 입력</h3>
                			</div>
                			
                			
                			<table class="chart v0510Chart">
                				<tr>
                					<th>정류소ID</th>
                					<td><input type="text" class="inYellow" id="input_bstopid" readonly></td>
                					<th>정류소명</th>
                					<td><input type="text" class="inYellow" id="input_bstopnm"></td>
                				</tr>
                				<tr>
                					<th>권역코드</th>
                					<td><input type="text" class="inYellow" id="input_areacd"></td>
                					<th>영문정류소명</th>
                					<td><input type="text" id="input_eng_bstopnm"></td>
                				</tr>
                				<tr>
                					<th>관할관청명</th>
                					<td><input type="text" id="input_adminnm"></td>
                					<th>베이유형</th>
                					<td><select id="select_baytpcd">
                              				<option>데이터 없음</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>베이길이</th>
                					<td><input type="number" id="input_baylen"></td>
                					<th>차로수</th>
                					<td><input type="number" id="input_lanecnt"></td>
                				</tr>
                				<tr>
                					<th>검지범위</th>
                					<td><input type="text" id="input_detectrange"></td>
                					<th>사용여부</th>
                					<td><select id="select_useyn">
                              				<option>미사용</option>
                              				<option>사용</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>중앙차로여부</th>
                					<td><select id="select_centerlaneyn">
                              				<option>노변</option>
                              			</select>
                              		</td>
                					<th>정류소시설<br>유형</th>
                					<td><select id="select_bstopfacilcd">
                              				<option>무개형(폴)</option>
                              			</select>
                					</td>
                				</tr>
                				<tr>
                					<th>적용시작일</th>
                					<td><input type="text" id="input_app_startdt"></td>
                					<th>적용종료일</th>
                					<td><input type="text" id="input_app_enddt"></td>
                				</tr>
                				<tr>
                					<th>X 좌표</th>
                					<td><input type="text" class="inYellow" id="input_posx"></td>
                					<th>Y 좌표</th>
                					<td><input type="text" class="inYellow" id="input_posy"></td>
                				</tr>
                				<tr>
                					<th>비고</th>
                					<td colspan="3"><input type="text" class="in305" id="input_descr"></td>
                				</tr>
                			</table>
                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn3">
                        			<li><a href="javascript:void(0);" id="btn_reset" class="authReset"><img src="./images/bit_plus_icon11.png" alt="">초기화</a></li>
                        			<li><a href="javascript:void(0);" id="btn_modify" class="authMod">수정</a></li>
                        			<li><a href="javascript:void(0);" id="" class="">위치편집</a></li>
                        		</ul>
                        	</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
