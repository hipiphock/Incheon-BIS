<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>BIT제공정보 현황조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v05/v519.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">
	
<div class="big_wrap pop">
		<div class="pop_title2">
			<h2>BIT관리 - BIT제공정보 현황조회</h2>
		</div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
            	<!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel_download" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                    </ul>
                </div>
            	<!--탭시작-->                                                
				<div class="pop-body">	
                	<div class="sub_body2">
						<ul class="nav_pic2 nav-pills_pic">
                            <li class="active"><a href="#tab1" data-toggle="tab" class="icon4">수동 메시지</a></li>
                            <li class=""><a href="#tab2" data-toggle="tab" class="icon1">파라미터</a></li>
                            <li class=""><a href="#tab3" data-toggle="tab" class="icon4">안내기 제어</a></li>
                            <li class=""><a href="#tab4" data-toggle="tab" class="icon3">파일 다운로드</a></li>
                            <li class=""><a href="#tab5" data-toggle="tab" class="icon2">광역BIT 수동메시지</a></li>
						</ul> 
                 	</div>
                    <!--탭컨텐츠시작-->                      
					<div class="tab-content_pic2">
                    	<!--수동메시지 시작-->
                        <div class="tab-pane active" id="tab1">
                        	<div class="present_bady">
                        		<table id="message_list"></table>
                        	</div>
                        	<p class="present_number serch_number_left"><span class="clicked_id"></span> 전송이력리스트  <span class="list_count">0</span>건</p>
                    		<div class="present_bady2">
                    			<table id="message_detail_list"></table> 
                    		</div>
                     	</div>
                        <!--수동메시지 끝-->
                        <!--파라미터 시작-->
                        <div class="tab-pane" id="tab2">
                       		<div class="present_bady">
                        		<table id="parameter_list"></table>
                        	</div>
                        	<p class="present_number serch_number_left"><span class="clicked_id"></span> 전송이력리스트  <span class="list_count">0</span>건</p>
                    		<div class="present_bady2">
                    			<table id="parameter_detail_list"></table> 
                    		</div>
                    	</div>
                        <!--파라미터 끝-->
                        <!--안내기제어 시작-->
                        <div class="tab-pane" id="tab3">
                       		<div class="present_bady">
                        		<table id="control_list"></table>
                        	</div>
                        	<p class="present_number serch_number_left"><span class="clicked_id"></span> 전송이력리스트  <span class="list_count">0</span>건</p>
                    		<div class="present_bady2">
                    			<table id="control_detail_list"></table> 
                    		</div>
                    	</div>
                        <!---안내기제어 끝-->
                        <!--파일다운로드 시작-->
                        <div class="tab-pane" id="tab4">
                       		<div class="present_bady">
                        		<table id="download_list"></table>
                        	</div>
                        	<p class="present_number serch_number_left"><span class="clicked_id"></span> 전송이력리스트  <span class="list_count">0</span>건</p>
                    		<div class="present_bady2">
                    			<table id="download_detail_list"></table> 
                    		</div>
                    	</div>
                        <!---파일다운로드 끝-->
                        <!--광역BIT 수동메시지 시작-->
                        <div class="tab-pane" id="tab5">
                       		<div class="present_bady">
                        		<table id="w_message_list"></table>
                        	</div>
                        	<p class="present_number serch_number_left"><span class="clicked_id"></span> 전송이력리스트  <span class="list_count">0</span>건</p>
                    		<div class="present_bady2">
                    			<table id="w_message_detail_list"></table> 
                    		</div>
                    	</div>
                        <!---광역BIT 수동메시지 끝-->
                        
                        <!-- 아래표 -->
                       <!--   <p class="present_number serch_number_left"><span>클릭한 이름  광역 BIT 수동메시지</span> 전송이력리스트  <span>0</span>건</p>
                    	<div class="present_bady2">
                    		아래표 들어갈 곳 
                    	</div> -->
                    	<!-- 아래표 끝-->
                    	
	        		</div>
                    <!--탭컨텐츠끝-->
				</div>
               	<!--탭끝-->
            </div>
            <!--내용 레이아웃끝-->
   		</div>
	</div>  
</body>
</html>
