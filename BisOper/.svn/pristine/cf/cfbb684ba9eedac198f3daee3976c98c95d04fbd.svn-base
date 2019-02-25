<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>버스 돌발 이력 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v06/v608.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">
	
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>이력/통계 - 버스 돌발 이력 조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con">            
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">	            
                <!--탭시작-->                                                
					<div class="pop-body">	
                        <div class="sub_body">
						<ul class="nav_pic2 nav-pills_pic">
                            <li class="active"><a href="#tab1" data-toggle="tab" class="icon3">돌발이력 조회</a></li>
                            <li class=""><a href="#tab2" data-toggle="tab" class="icon1">돌발 통계</a></li>
						</ul> 
                        </div>
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content_pic">
                            <!--돌발이력조회 시작-->
                            <div class="tab-pane active" id="tab1">
                                <div class="sub_tab_con_body">	
                                	                               
                                    <!--검색시작-->
                                    <div class="sub_two_sms_body">
                                    		<!--상단버튼시작-->
                                            <div class="sub_top_btn2 bms2_magin">
                                                <ul>
                                                    <li><a href="javascript:void(0);""><img src="./images/btn_big_save.png" id="btn_excel"><p>파일저장</p></a></li>
                                                </ul>
                                            </div>
                                            <!--상단버끝--> 
                                        	<table class="two_serch_statistic7"  border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <th>날짜</th>
                                                        <td>                                    
					                                    <input type="text" class="in_h in_text_b statistic_in" id="start_date">
					                                    <input type="text" class="in_h in_text_b statistic_in" id="start_time">
					                                    ~                                    
					                                    <input type="text" class="in_h in_text_b statistic_in" id="end_date">
					                                    <input type="text" class="in_h in_text_b statistic_in" id="end_time">
		                                                </td>                                                                                                     
                                                    </tr>
                                        	</table>
                                        	<div class="serch_608">
                                        		<div class="subcon_top4">
                                            		<input type="text" class="subtop_in_text" name="ID" placeholder="차량번호,노선번호 입력" id="text_search"><!-- here -->
                                            		<span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼" id="btn_search2"></span>
                                        		</div>
                                        		<a href="" class="serch_clear3">clear</a>
                                        		<div class="serch_check2">
                                        			<label><input type="checkbox" name="check" class="check" id="check_detail">결과검색</label>
                                        		</div>
                                        	</div>                                        	
                                        <a href="javascript:void(0);" class="statistic8_serch_btn margin608" id="btn_search"><img src="./images/serch_gray.png">조회</a>                                       
                                    </div>
                                    <!--검색 끝-->
                                    <!--내용시작-->
                                    <div class="sms_conbody">
                                        <p class="serch_number">검색 결과 <span id="list_count">2</span>건</p>
                                        <div class="subcon_con3">
                                            <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                            	<table id="incident_list"></table>
                                            </div>
                                        </div>
                                    </div>
                                    <!--내용끝--> 
                                </div>
                            </div>
                            <!--돌발이력조회 끝-->
                            <!--돌발통계 시작-->
                            <div class="tab-pane" id="tab2">
                                <div class="sub_tab_con_body">
                                    <!--검색시작-->
                                    <div class="sub_two_sms_body">
                                        <table class="two_serch_statistic7"  border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <th>날짜</th>
                                                        <td>                                    
					                                    <input type="text" class="in_h in_text_b statistic_in" id="start_date2">
					                                    <input type="text" class="in_h in_text_b statistic_in" id="start_time2">
					                                    ~                                    
					                                    <input type="text" class="in_h in_text_b statistic_in" id="end_date2">
					                                    <input type="text" class="in_h in_text_b statistic_in" id="end_time2">
		                                                </td>
                                                    </tr>
                                        </table>
                                       <!--<a href="javascript:void(0);" class="statistic8_serch_btn"><img src="./images/serch_gray.png">조회</a>-->
                                    </div>
                                    <!--검색 끝-->
                                    <!--내용시작-->
                                    <div class="sms_conbody">
                                        <div class="subcon_statistic8">
                                            <!--돌발통계 아래 탭-->
                                            <div class="statistic8_tab_body">
                                                <div class="statistic8_base_body">
                                                    <ul class="nav_pic_h nav-pills_pic_h">
                                                        <li class="active"><a href="#tab1-1" data-toggle="tab">데이터</a></li>
                                                        <li class=""><a href="#tab1-2" data-toggle="tab" >그래프</a></li>
                                                    </ul> 
                                                </div>
                                            <!--탭컨텐츠시작-->                      
                                            <div class="tab-content_pic5">
                                                <!--동작조건 및 정보제공 시작-->
                                                <div class="tab-pane active" id="tab1-1">
                                                    <div class="sub_layer_title">
                                                        <h3>일별 돌발 통계 (건수)</h3>
                                                    </div>
                                                    <div class="statistic8_data_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       		<table id="incident_statistic_list"></table>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--그래프 시작-->
                                                <div class="tab-pane" id="tab1-2">
                                                    <div class="statistic8_data_con2">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       그래프 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--그래프 끝-->
                                            </div>
                                        </div>
                                        <!--돌발통계 아래 탭 끝-->
                                        </div>
                                    </div>
                                    <!--내용끝--> 
                                </div>
                            </div>
                            <!--돌발통계 끝-->
				        </div>
                        <!--탭컨텐츠끝-->
					</div>
                 	<!--탭끝-->
            </div>
             <!--내용 레이아웃끝-->  
             </div>
             </div> 
        <!--내용끝-->
</body>
</html>
