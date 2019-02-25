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

<script src="./js/v05/v0503.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>노선관리/분석 - 노선기초정보관리</h2>
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
                    <table class="top1 v0503">
                         <tr>
							<th>버스회사</th>
                            <td>
                              	<select id="sel_compid">
                					<option>전체</option>
                              	</select>
							</td>
							<th>버스노선</th>
                            <td>
                              	<select id="sel_routeid">
                					<option>전체</option>
                              	</select>
							</td>
							<th>노선유형</th>
                            <td>
                              	<select id="select_routetpcd1">
                					<option>전체</option>
                              	</select>
							</td>
							<td><label><input type="checkbox" class="checkBox" id="check_useyn"> 미사용포함</label></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0503Left">
                			<div class="sub_title">
                				<h3>노선검색결과<span id="text_count1"></span></h3>
                			</div>

                			<div class="conten con1">
                    			<div class="main_chart">
                    				<table id="route_search_list"></table>
                    			</div>
                    		</div>
                    		
							<!-- 아래 노선배정버스회사 -->
                			<div class="conbottom v0503bottom1">
                				<div class="sub_title">
                					<h3><span id="text_routeno2"></span>노선배정버스회사<span id="text_count2"></span></h3>
                				</div>

                				<div class="conten">
                    				<div class="main_chart">
                    					<table id="comp_allot_list"></table>
                    				</div>
                    			</div>
                			</div>
                			
                			<!-- 아래 노선운행스케쥴 -->
                			<div class="conbottom v0503bottom2">
                				<div class="sub_title">
                					<h3><span id="text_routeno3"></span>노선운행스케줄<span id="text_count_text3"></span></h3>
                				</div>

                				<div class="conten">
                    				<div class="main_chart">
                    					<table id="run_schedule_list"></table>
                    				</div>
                    			</div>
                			</div>
                			
                			<!-- 아래 분기노선정보 -->
                			<div class="conbottom v0503bottom3">
                				<div class="sub_title">
                					<h3><span id="text_routeno4"></span>분기노선정보<span id="text_count4"></span></h3>
                				</div>

                				<div class="conten">
                    				<div class="main_chart">
                    					<table id="route_branch_list"></table>
                    				</div>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0503Right">
                			<table class="chart">
                				<tr>
                					<th>노선 ID</th>
                					<td><input type="text" class="inYellow" id="input_routeid"></td>
                					<th>운행유형</th>
                					<td><select id="select_runtpcd">
                							<option>고속형시외버스</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>노선번호</th>
                					<td><input type="text" class="inYellow" id="input_routeno"></td>
                					<th>공동배차<br>여부</th>
                					<td><select class="inYellow" id="select_jointallocyn">
                							<option>개별배차</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>노선유형</th>
                					<td><select class="inYellow" id="select_routetpcd2">
                							<option>간선형</option>
                              			</select>
                              		</td>
                					<th>사용여부</th>
                					<td><select class="inYellow" id="select_useyn">
                							<option>미사용</option>
                							<option>사용</option>
                              			</select>
                              		</td>
                				</tr>
                				<tr>
                					<th>노선설명</th>
                					<td colspan="3"><input type="text" class="in317" id="input_routedesc"></td>
                				</tr>
                				<tr>
                					<th>경유정류소수</th>
                					<td><input type="number" id="input_pass_bstopcnt"></td>
                					<th>운행시간(초)</th>
                					<td><input type="number" id="input_runtm"></td>
                				</tr>
                				<tr>
                					<th>노선거리(M)</th>
                					<td><input type="number" id="input_routelen"></td>
                					<th>운행거리(M)</th>
                					<td><input type="number" id="input_rundist"></td>
                				</tr>
                				<tr>
                					<th>노선굴곡도</th>
                					<td><input type="text" id="input_routecurv"></td>
                					<th>운행횟수</th>
                					<td><input type="number" id="input_runcnt"></td>
                				</tr>
                				<tr>
                					<th>면허버스수</th>
                					<td><input type="number" id="input_lic_buscnt"></td>
                					<th>예비버스수</th>
                					<td><input type="number" id="input_rsv_buscnt"></td>
                				</tr>
                				<tr>
                					<th>출발정류소</th>
                					<td><select class="inYellow" id="select_origin_bstopid">
                							<option>미사용</option>
                							<option>사용</option>
                              			</select>
                              		</td>
                					<th>적용시작일</th>
                					<td><input type="text" id="input_app_startdt"></td>
                				</tr>
                				<tr>
                					<th>종료정류소</th>
                					<td><select class="inYellow" id="select_dest_bstopid">
                							<option>미사용</option>
                							<option>사용</option>
                              			</select>
                              		</td>
                					<th>적용종료일</th>
                					<td><input type="text" id="input_app_enddt"></td>
                				</tr>
                				<tr>
                					<th>관할관청명</th>
                					<td colspan="3"><input type="text" class="in317" id="input_adminnm"></td>
                				</tr>
                				<tr>
                					<th>비고</th>
                					<td colspan="3"><input type="text" class="in317" id="input_descr"></td>
                				</tr>
                			</table>
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn2">
                        			<li><a href="javascript:void(0);" id="btn_branch" class="">분기설정</a></li>
                        			<li><a href="javascript:void(0);" id="btn_update" class="">수정</a></li><!-- 비활성일 시 disabled 추가, 활성일 시 틀래스 삭제-->
                        		</ul>
                        	</div>
                		</div>
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
