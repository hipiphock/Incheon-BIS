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
                <h2>도착예정시간조회</h2>
            </header>
            
            <article class="contenWrap">
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0110">
                         <tr>
							<th>노선번호</th>
                            <td>
                              	<select>
                              		<option>02(강화)</option>
                              	</select>
                            </td>
                            <th>출발정류소</th>
                            <td>
                              	<select>
                              		<option></option>
                              	</select>
							</td>
                            <th>도착정류소</th>
                            <td>
                              	<select>
                              		<option></option>
								</select>
							</td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox onedep">
                	<div class="contenBox allBody">

                		<div class="main_chart">
                    			테이블
                    	</div>
                			
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
