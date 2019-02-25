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

<script src="./js/v05/v0517.js"></script>
</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>인허가관리</h2>
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
                    <table class="top1 v0517">
                         <tr>
							<th>요청일자</th>
                            <td><input type="text" id="inp_search_startdt"> ~ <input type="text" id="inp_search_enddt"></td>
                            <th>인허가구분</th>
                            <td>
                              <select id="sel_permtpcd">
                					<option>전체</option>
                					<option></option>
                              	</select>
							</td>
							<th>인허가상태</th>
                            <td>
                            	<select id="sel_permstatcd">
                					<option>전체</option>
                					<option></option>
                              	</select>
							</td>
                            <td>
                              	<label><input type="checkbox" id="allCheck" class="checkbox"> 전체 선택/해제</label>
							</td>
							
                         </tr>
                    </table>
                    <a href="javascript:void(0);" id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 위 -->
                		<div class="conleft v0517top">
                			<div class="sub_title">
                				<h3>인허가관리 <span id="perm_cnt">0</span>건</h3>
                			</div>
                			
                			<div class="conten con1">
                    			<div class="main_chart">
                    				<table id="detail_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 아래 -->
                		<div class="conbottom v0517bottom">
                			<table>
                				<tr>
                					<th>인허가처리구분</th>
                					<td width="300px"><select id="sel_permstatcd2">
                							<option>시스템적용</option>
                							<option></option>
                              			</select>
                					</td>
                					<th>처리상세내역</th>
                					<td><input type="text"></td>
                				</tr>
                			</table>
                			<button class="btn"><img src="./images/icon_ok.png" alt="">마스터적용</button>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
