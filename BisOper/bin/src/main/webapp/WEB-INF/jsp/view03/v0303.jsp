<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>메시지관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script type="text/javascript" src="./js/v03/v0303.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">
<div class="big_wrap pop">
		<div class="pop_title2">
			<h2>파일 다운로드</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel_download" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>저장</p></a></li>
                    </ul>
                </div>
                <!--검색시작-->                                                
				<div class="sub_two_serch_body">
                    <div class="two_serch_left">
                       <table class="bit_serch_top v0303">
                            <tr>
                                <th>사업구분</th>
                                <td>
                                	<select id="select_servertpcd">
                                    	<option value="120">신규제공서버</option>
                                    	<option value="126">신규제공서버2</option>
                                		<option value="121">인천제공서버</option>
                                		<option value="125">인천제공서버2</option>
                                		<option value="122">확대제공서버</option>
                                		<option value="123">광역제공서버</option>
                                		<!-- <option value="124">강화제공서버</option> -->
                                  	</select>
                                </td> 
                                <th>구분</th>
                                <td>
                                	<select>
                                    	<option value="0">노선별</option>
                                        <option value="1">리스트2</option>
                                        <option value="2">리스트3</option>
                                  	</select>
                                </td>
                                <th>노선명</th>
                                <td>
                                	<select>
                                    	<option value="0">전체</option>
                                        <option value="1">리스트2</option>
                                        <option value="2">리스트3</option>
                                  	</select>
                                </td>
                                <th>안내기유형</th>
                                <td>
                                	<select>
                                    	<option value="0">전체</option>
                                        <option value="1">리스트2</option>
                                        <option value="2">리스트3</option>
                                  	</select>
                                </td>
                                <th>정류소명</th>
                                <td>
                                	<select>
                                    	<option value="0">전체</option>
                                        <option value="1">리스트2</option>
                                        <option value="2">리스트3</option>
                                  	</select>
                                </td>
                                <td style="border-left: 1px solid #e2e2e2">
                                	<label><input type="checkbox" class="checkbox">전체선택/해제</label>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button id="btn_search"><img src="./images/serch_gray.png">검색</button>
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="bit_conbody">
   
                    <div class="subcon_con3" style="top:8px;">
                    	<p class="serch_number serch_number_left sub_title title1">안내기 검색 결과 <span id="list_count1">100</span>건
                    		<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                    	</p>
                    	<div class="file_left">
                    		<div class="subcon_left_chart_body">
                        		<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                        			<table id="bit_list"></table>
                        		</div>
                        	</div>
                        	<!-- 버튼 -->
                        	<div class="subcon_left_btn">
                        		<ul>
                        			<li><a id="btn_req_download"><img src="./images/btn_send.png" alt=""> 전송</a></li>
                        			<li><a href="">전송결과</a></li>
                        		</ul>
                        	</div>
                        	<div class="subcon_right_img">
                        		<img src="./images/right_paper.png">
                        	</div>
                        </div>
                        <p class="serch_number2 serch_number_left sub_title title2">파일 등록정보 <span id="list_count2">2</span>건</p>
                        <div class="file_right">
                        	<div class="file_right1">
                        		<div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;] 파일 등록정보 표-->
                        			<table id="file_list">
                        			</table>
                        		</div>
                        	</div>
                        	<div class="file_right2">
                        		<div class="bit_char_title">
                        			<h3>FTP파일 전송</h3>
                        		</div>
                        		<!-- <div class="file2_title">
                        			<p>현재 디렉토리: </p>
                        		</div> -->
                        		<div class="file_right2_bottom">
                        			<table class="chart2">
                        				<tr>
                        					<th>FTP서버선택</th>
                        					<td>
                        						<select id="select_ftp_server" class="in text205 bitin" disabled="disabled">
                        							<option value="120">신규 FTP</option>
			                                		<option value="121">인천 FTP</option>
			                                		<option value="122">확대 FTP</option>
			                                		<option value="123">광역 FTP</option>
                                    			</select>
                        					</td>
                        					<th>파일유형</th>
                        					<td>
                        						<select id="select_filetpcd" class="in text205 bitin">
                                               		<option value="01"></option>
                                               		<option value="02">리스트2</option>
                                               		<option value="03">리스트3</option>
                                    			</select>
                        					</td>
                        				</tr>
                        				<tr>
                        					<th>파일버전</th>
                        					<td>
                        						<input type="text" id="input_filever" class="in text205 bitin">
                        					</td>
                        					<th>적용일자</th>
                        					<td>
                        						<input type="text" id="input_stdt" class="in text100 bitin">
                        						<input type="text" id="input_sttm" class="in text100 bitin">
                        					</td>
                        				</tr>
                        				<tr>
                        					<th>파일선택</th>
                        					<td colspan="3">
                        						<input type="text" id="input_file_name" class="in text205 bitin" value="선택 파일 없음.">
                        						<input type="file" id="input_file" style="display: none;" onchange="javascript:setFileName();">
                        						<button class="btn_file" onclick="document.getElementById('input_file').click(); return false;">파일선택</button>
                        					</td>
                        				</tr>
                        				<tr>
                        					<th>전송결과</th>
                        					<td colspan="3">
												<span class="success" id="txt_upload_result"></span>
                        					</td>
                        				</tr>
                        			</table>
                        		</div>
                        		<!-- <div class="file_right2_chart">
                        			<div class="main_chart"><!--.main_chart 사이즈 [ width: 100%; height:100%;]FTP 파일전송 표
                        				<table id=""></table>
                        			</div>
                        		</div> -->
                        	</div>
                        	<!-- 버튼 -->
                        	<div class="file_right_btn">
                        		<p class="file_ll"><input type="checkbox"> Connecuion trace</p>
                         		
                        		<ul class="file_rr">
                         			<li><a href="">FTP연결</a></li> 
                        			<li><a href="" class="disabled">Download</a></li> 
									<li><a id="btn_schedule">스케줄작성</a></li>
                        			<li><a id="btn_upload">Upload</a></li>
                        			<li><a href="" class="disabled">파일삭제</a></li> 
                        			<li><a href="" class="disabled">폴더생성</a></li> 
                         			<li><a href="">작업중지</a></li> 
                        			<li><a href="" class="disabled">스케줄작성</a></li>
                        		</ul>
                        	</div>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
	</div>
</body>
</html>
