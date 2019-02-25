<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>버스 위반 이력 조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v06/v609.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v601">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>이력/통계 - 버스 위반 이력 조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con" id="container"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--탭시작-->                                                
					<div class="pop-body">	
                        <div class="sub_body">
						<ul class="nav_pic2 nav-pills_pic">
                            <li class="active" id="tab_left"><a href="#tab1" data-toggle="tab" class="icon3">위반이력 조회</a></li>
                           <!--  <li class="" id="tab_right"><a href="#tab2" data-toggle="tab" class="icon1">위반 통계</a></li> -->
						</ul> 
                        </div>
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content_pic">
                            <!--위반이력조회 시작-->
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
                                        <table class="two_serch5"  border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <th>조회 기간</th>
                                                <!-- <td width="630px"> -->
                                                <td>                                    
			                                    <input type="text" class="in_h in_text_b statistic_in" id="start_date">
			                                    <input type="text" class="in_h in_text_b statistic_in" id="start_time">
			                                    ~                                    
			                                    <input type="text" class="in_h in_text_b statistic_in" id="end_date">
			                                    <input type="text" class="in_h in_text_b statistic_in" id="end_time">
                                                </td>
                                                <th>조건 설정</th>
                                                <td><input type="text" class="in_text_statistic8 serch_box_w" readonly="readonly" style="width:86px;" id="input_plate_no">
                                                	<input type="hidden" id="input_veh_id">
                                                	<a href="javascript:void(0);" class="serch_ch" id="btn_choice">선택</a>
                                                	<a href="javascript:void(0);" class="serch_clear5" id="btn_clear">clear</a>
                                    				<div class="serch_check5"><label><input type="checkbox" name="check" class="check" id="check_detail">결과검색</label></div>
                                    			</td>
                                            </tr>
                                        </table>
                                        <a href="javascript:void(0);" class="statistic8_serch_btn" id="btn_search"><img src="./images/serch_gray.png">검색</a>                                        
                                    </div>
                                    <!--검색 끝-->
                                    <!--내용시작-->
                                    <div class="sms_conbody">                                        
                                        <p class="serch_number">검색 결과 <span id="list_count">2</span>건</p>
                                        <div class="subcon_con3">
                                            <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                            	<table id="violation_list"></table>
                                            </div>
                                        </div>
                                    </div>
                                    <!--내용끝--> 
                                </div>
                            </div>
                            <!--위반이력조회 끝-->
                            <!--위반통계 시작-->
                            <div class="tab-pane" id="tab2">
                                <div class="sub_tab_con_body">                                   
                                    <!--내용시작-->
                                    <div class="statistic9_conbody">
                                        <div class="subcon_statistic8">
                                            <!--위반통계 아래 탭-->
                                            <div class="statistic8_tab_body">
                                                <div class="statistic8_base_body">
                                                    <ul class="nav_pic_h nav-pills_pic_h">
                                                        <li class="active"><a href="#tab1-1" data-toggle="tab">통계요약</a></li>
                                                        <li class=""><a href="#tab1-2" data-toggle="tab" >일별통계</a></li>
                                                        <li class=""><a href="#tab1-3" data-toggle="tab" >노선/버스 기준 통계</a></li>
                                                    </ul> 
                                                </div>
                                            <!--탭컨텐츠시작-->                      
                                            <div class="tab-content_pic5">
                                                <!--통계요약 시작-->
                                                <div class="tab-pane active" id="tab1-1">
                                                    <!--상단검색-->
                                                    <div class="statistic9_two_serch">
                                                        <table class="two_serch6"  border="0" cellspacing="0" cellpadding="0">
                                                         <tr>
                                                             <th>통계 기준 연도</th>
                                                             <td><input type="text" class="in in_text"></td>
                                                             <th>기준 월</th>
                                                             <td><input type="text" class="in in_text w_s"></td>
                                                        </table>
                                                        <a href="javascript:void(0);" class="statistic9_serch_btn"><img src="./images/serch_gray.png">조회</a>
                                                    </div>
                                                    <!--상단검색 끝-->
                                                    <div class="statistic9_con2">
                                                        <!--통계자료 시작-->
                                                        <div class="tong">
                                                            <div class="sub_layer_title">
                                                                <h3>통계자료</h3>
                                                            </div>
                                                            <p class="statistic9_con2_top">통계 기준
                                                                <select class="in_h in_list2" name="text">
                                                                    <option value="01">월간</option>
                                                                    <option value="02">리스트2</option>
                                                                    <option value="03">리스트3</option>
                                                                </select>
                                                            </p>
                                                            <!--통계 왼쪽-->
                                                            <div class="statistic9_two_con_left">
                                                                <div class="layer_title">
                                                                    <h4>◆ 무정차가 많은 버스 TOP 10</h4>
                                                                </div>
                                                                <div class="tong_con"><!--표 리스트 10개 1칸 높이 30px [width: 100%; height: 330px;]-->
                                                                    <table id="irregular_bus_list1"></table> 
                                                                </div>
                                                                <div class="layer_title">
                                                                    <h4>◆ 노선 이탈이 많은 버스 TOP 10</h4>
                                                                </div>
                                                                <div class="tong_con"><!--표 리스트 10개 1칸 높이 30px [width: 100%; height: 330px;]-->
                                                                    <table id="routeBreak_bus_list1"></table> 
                                                                </div>
                                                            </div>
                                                            <!--통계 오른쪽-->
                                                            <div class="statistic9_two_con_right">
                                                                <div class="layer_title">
                                                                    <h4>◆ 무정차가 많은 노선 TOP 10</h4>
                                                                </div>
                                                                <div class="tong_con"><!--표 리스트 10개 1칸 높이 30px [width: 100%; height: 330px;]-->
                                                                    <table id="irregular_bus_list2"></table>  
                                                                </div>
                                                                <div class="layer_title">
                                                                    <h4>◆ 노선 이탈이 많은 노선 TOP 10</h4>
                                                                </div>
                                                                <div class="tong_con"><!--표 리스트 10개 1칸 높이 30px [width: 100%; height: 330px;]-->
                                                                    <table id="routeBreak_bus_list2"></table> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--통계자료 끝-->
                                                        <!--연간 월별 통계 시작-->
                                                        <div class="ye_tong">
                                                            <div class="sub_layer_title">
                                                                <h3>연간 월별 통계</h3>
                                                            </div>
                                                            <div class="ye_tong_con"><!--연간 월별 통계 [width: 100%; height: 350px;]-->
                                                           연간 월별통계 내용
                                                            </div>
                                                            
                                                        </div>
                                                        <!--연간 월별 통계 끝-->
                                                    </div>
                                                </div>
                                                <!--일별통계 시작-->
                                                <div class="tab-pane" id="tab1-2">                                                    
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       일별통계 나올 곳 화면 없음!!!!!!!!
                                                        </div>
                                                </div>
                                                <!--노선/버스기준통계 시작-->
                                                <div class="tab-pane" id="tab1-3">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       버스기준통계 나올 곳 화면 없음!!!!!!!!
                                                        </div>
                                                </div>
                                                <!--노선/버스기준통계 끝-->
                                            </div>
                                        </div>
                                        <!--위반통계 아래 탭 끝-->
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
        <jsp:include page="../comm/pop_choice.jsp"/>
</body>
</html>
