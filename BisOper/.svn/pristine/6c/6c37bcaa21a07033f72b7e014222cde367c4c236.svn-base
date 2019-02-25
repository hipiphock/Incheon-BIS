<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>외부연계정보</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub_new.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v11/v1102.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-203">

	<div class="wrap1">
            <header class="pop_title">
                <h2>교통카드 연계정보관리</h2>
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
				<section class="serchBox v11serchBox">
                    <table class="top1 v1102">
                         <tr>
							<th>검색년월</th>
                            <td><input type="month" id="inp_monthdt1">
							</td>
                         </tr>
                    </table>
                    <a href="javascript:void(0);" id="btn_search"><img src="./images/serch_gray.png">검색</a>
                    <a href="javascript:void(0);" id="btn_delete" class="btn_del">삭제</a>
                </section>	
                <!--검색끝-->
                
                <section class="bodytBox towdep">
                	<div class="contenBox allBody">
                	
                		<!-- 위-->
                		<div class="conleft v1102top">
                			<div class="sub_title">
                				<h3>교통카드 및 현금수입금</h3>
                			</div>
                			<a href="" class="btn_map btn_graph"><img src="./images/btn_graph.png" alt="">그래프</a>
                			
                			
                			<div class="conten con1">
                    			<div class="main_chart">
                    				<table id="detail_list"></table>
                    			</div>
                    		</div>

                		</div>
                		
                		<!-- 아래 -->
                		<div class="conbottom v1102bottom">
                			<div class="sub_title">
                				<h3>교통카드 및 현금수입금 데이터베이스 저장</h3>
                			</div>
                			
                			<div class="conten">
                    			<table>
                    				<tr>
                    					<th>엑셀파일 선택</th>
                    					<td><input type="text" class="in260"><a href="javascript:void(0);" class="btn_fileOpen">파일열기</a></td>
                    					<th>결산년월</th>
                    					<td><input type="month" id="inp_monthdt2"></td>
                    				</tr>
                    			</table>
                    			<button class="btn">신규등록</button>
                    		</div>

                		</div>
                		
                	</div>  
                </section>
        </article>
	</div><!-- wrap1 끝 -->
</body>
</html>
