<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>운행서비스평가지원</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v04/v0404.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>통과시간대비제공정보비교 조회</h2>
            </header>
            
            <article class="contenWrap">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                    	<li><a id="" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>텍스트저장</p></a></li>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>엑셀저장</p></a></li>
                        <li><a id="btn_refresh"><img src="./images/btn_big_re.png"></a><p><a id="btn_refresh">새로고침</a></p></li>
                    </ul>
                </div>
                <!--상단버튼끝--> 
            	
                <!--검색시작-->                                                
				<section class="serchBox">
                    <table class="top1 v0404">
                         <tr>
							<th>결과보기</th>
                            <td id="">
                              	<label><input type="radio" name="result" value=0> 통계 결과만 보기</label>
                              	<label><input type="radio" name="result" value=1> 상세 리스트 보기</label>
                            </td>
                            <th>조회날짜</th>
                            <td><input type="date" id="search_date"></td>
							<th>정류소명</th>
                            <td><input type="search" id="search_by_keyword"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 왼쪽 -->
                		<div class="conleft v0404Left">
                			<div class="sub_title">
                				<h3 id="total_stop_result">정류소 검색결과</h3>
                			</div>

                			<div class="conten">
                    			<div class="main_chart" id="busstop_list_chart">
                    				<table id="bus_stop_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 오른쪽 -->
                		<div class="conright v0404Right">
                			<div class="sub_title">
                				<h3>정류소제공정보</h3>
                			</div>

                			<div class="conten">
                    			<div class="main_chart" id="detail_chart">
                    				<table id="busstop_detail_table"></table>
                    			</div>
                    		</div>
                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
