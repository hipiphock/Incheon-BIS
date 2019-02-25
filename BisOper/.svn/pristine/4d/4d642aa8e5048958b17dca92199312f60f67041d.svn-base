<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>차량단말업그레이드</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v07/v0704.js"></script>

<style>
.ui-jqgrid .ui-jqgrid-htable th div {
    height:auto;
    overflow:hidden;
    padding-right:4px;
    padding-top:2px;
    position:relative;
    vertical-align:text-top;
    white-space:normal !important;
}
.color {
	background-color: #ff3232;
}
</style>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>업그레이드현황조회</h2>
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
                    <table class="top1 v0704">
                         <tr>
							<th>단말기회사</th>
                            <td>
                              	<select id="mdtcomp">
                					<option value="">전체</option>                					
                              	</select>
							</td>
							<th>버스회사</th>
                            <td>
                              	<select id="comp_option">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>버스노선</th>
                            <td>
                              	<select id="route_option">
                					<option value="">전체</option>
                              	</select>
							</td>
							<th>차량번호</th>
                            <td><input type="search" id="carregno"></td>
                            
                            <td><label><input type="radio" checked="checked" name="ver_select" value=1> 설정버전</label>
                            	<label><input type="radio" name="ver_select" value=2> 운영버전</label>
                            </td>
                            
                            <th>파일종류</th>
                            <td>
                              	<select id="file">
                					<option value=1>운행노선</option>
                					<option value=2>운행프로그램</option>
                					<option value=3>GIS LINK</option>
                					<option value=4>GIS NODE</option>
                					<option value=5>GIS 정류소</option>
                              	</select>
							</td>
							<th>버전</th>
                            <td><input type="number" class="in50" min=0 value=0 id="ver"></td>
                         </tr>
                    </table>
                    <a id="btn_search"><img src="./images/serch_gray.png">검색</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 위 -->
                		<div class="conleft v0704top">
                			<div class="sub_title">
                				<h3>업그레이드현황</h3>
                			</div>

                			<div class="conten con1">
                    			<div class="main_chart">
                    				<table id="top_table"></table>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 아래 -->
                		<div class="conbottom v0704bottom">
                			<div class="sub_title">
                				<h3>업그레이드이력</h3>
                			</div>

                			<div class="conten">
                    			<div class="main_chart">
                    				<table id="bottom_table"></table>
                    			</div>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
