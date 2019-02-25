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

<script src="./js/v10/v1006.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>운영환경관리 -운행위반기준정보관리</h2>
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
                    <table class="top1 v1006">
                         <tr>
							<th>적용기준일</th>
                            <td><input type="text" id="inp_search_startdt"></td>
                         </tr>
                    </table>
                    <a href="javascript:void(0);" id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v1006Left">
                			<div class="sub_title">
                				<h3>운행위반기준정보</h3>
                			</div>

                			<div class="conten">
                				<div class="main_chart">
                    				<table id="detail_list"></table>
                    			</div>
                			</div>
                			
                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v1006Right">
                			<div class="sub_title">
                				<h3>정보관리</h3>
                			</div>

                			<table class="chart v1006Chart">
                				<tr>
                					<th>개문주행임계거리<br>(m)</th>
                					<td><input type="number" id="input_open_run_thresdist"></td>
                					<th>개문주행임계속도<br>(Km/h)</th>
                					<td><input type="number" id="input_open_run_thresspd"> </td>
                				</tr>
                				<tr>
                					<th>과속임계속도<br>(Km/h)</th>
                					<td><input type="number" id="input_overspd_thresspd"></td>
                					<th>과속기준시간<br>(초)</th>
                					<td><input type="number" id="input_overspd_critictm"></td>
                				</tr>
                				<tr>
                					<th>급가속임계속도<br>(Km/h)</th>
                					<td><input type="number" id="input_accel_thresspd"></td>
                					<th>급감속임계속도<br>(Km/h)</th>
                					<td><input type="number" id="input_decel_thresspd"></td>
                				</tr>
                				<tr>
                					<th>급가속/급감속기준시간<br>(초)</th>
                					<td><input type="number" id="input_accel_decel_critictm"></td>
                					<th>노선이탈임계거리<br>(m)</th>
                					<td><input type="number" id="input_outroute_thresdist"></td>
                				</tr>
                				<tr>
                					<th>노선이탈임계시간<br>(분)</th>
                					<td><input type="number" id="input_outroute_threstm"></td>
                					<th>임의지연임계시간<br>(분)</th>
                					<td><input type="number" id="input_volun_delay_threstm"></td>
                				</tr>
                				<tr>
                					<th>동적이벤트임계시간<br>(분)</th>
                					<td><input type="number" id="input_dyna_evt_threstm"></td>
                					<th>정류소서비스임계속도<br>(Km/h)</th>
                					<td><input type="number" id="input_bstop_svc_thresspd"></td>
                				</tr>
                				<tr>
                					<th>적용시작일</th>
                					<td colspan="3"><input type="text" class="in248" id="input_app_startdt"></td>
                				</tr>
                				<tr>
                					<th>적용종료일</th>
                					<td colspan="3"><input type="text" class="in248" id="input_app_enddt"></td>
                				</tr>
                			</table>
                			
                			
                			<!-- 버튼 -->
                        	<div class="bottom_btn bottomRight">
                        		<ul class="bottomBtn3">
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
