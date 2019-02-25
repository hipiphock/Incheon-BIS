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
                <h2>운영코드관리 - 행정구역 정보조회</h2>
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
                    <table class="top1 v1004">
                         <tr>
							<th>권역코드</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
                            <th>권역코드</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
							<th>시군구명</th>
                            <td>
                              	<select>
                					<option>전체</option>
                              	</select>
							</td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
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
