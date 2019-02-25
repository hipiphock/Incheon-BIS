<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>버스운행관리</title>
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
                <h2>돌발상황관리 - 돌발상황대응이력관리</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0105">
                         <tr>
							<th>검색발생기간</th>
                            <td>
                              	<select>
                              		<option>2018-11-14</option>
                              	</select> ~
                              	<select>
                              		<option>2018-11-14</option>
                              	</select>                             	
                            </td>
                            <th>돌발상황유형</th>
                            <td>
                              	<select>
                              		<option>전체</option>
                              		<option>고장</option>
                              		<option>교통정체</option>
                              		<option>긴급</option>
                              		<option>긴급공사</option>
                              		<option>도로폐쇠</option>
                              		<option>사고</option>
                              		<option>시위집회</option>
                              		<option>자연재해</option>
                              		<option>차량사고</option>
                              	</select>
							</td>
                            <th>진행여부</th>
                            <td>
                              	<select>
                              		<option>전체</option>
                              		<option>상황종료</option>
                              		<option>진행중</option>
								</select>
							</td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody v0105top">
						<div class="sub_title">
                			<h3>부당운행이력검색</h3>
                			<a href="" class="topBtn_map"><img src="./images/btn_map_h.png" alt="">지도이동</a>
                		</div>
	
                		<div class="main_chart">
                    			테이블
                    	</div>
                			
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
