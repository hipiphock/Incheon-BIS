<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>배차 결과 이력/조회</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v801">
	
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BMS - 배차 결과 이력/조회</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--탭시작-->                                                
					<div class="pop-body">	
                        <div class="sub_body">
						<ul class="nav_pic2 nav-pills_pic">
                            <li class="active"><a href="#tab1" data-toggle="tab" class="icon6">차량별 배차이력 조회</a></li>
                            <li class=""><a href="#tab2" data-toggle="tab" class="icon6">노선별 배차이력 조회</a></li>
                            <li class=""><a href="#tab3" data-toggle="tab" class="icon7">차량,노선 배차이력 조회</a></li>
						</ul> 
                        </div>
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content_pic">
                            <!--차량별 시작-->
                            <div class="tab-pane active" id="tab1">
                                <div class="sub_tab_con_body">
                                    <!--검색시작-->                                                
                                    <div class="sub_two_sms_body">
                                            <!--상단버튼시작-->
                                            <div class="sub_top_btn2 bms2_magin">
                                                <ul>
                                                    <li><a href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                                                </ul>
                                            </div>
                                            <!--상단버끝-->
                                             <table class="two_serch2"  border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <th>일별</th>
                                                        <td class="lage">
                                                            <select class="in2 in_list2 serch_day_list" name="text">
                                                                <option value="01">2016-07-19</option>
                                                                <option value="02">리스트1</option>
                                                                <option value="03">리스트2</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </table>
                                            <div class="subcon_top3"> 
                                                <input type="text" class="in2 subtop_in_text" name="ID" placeholder="검색어 입력">
                                                <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                            </div>
                                    </div>	
                                    <!--검색끝-->
                                    <!--내용시작-->
                                    <div class="sms_conbody">
                                        <div class="subcon_statistic8">
                                            <!--차량별 배차이력 아래 탭-->
                                            <div class="statistic8_tab_body">
                                                <div class="statistic8_base_body">
                                                    <ul class="nav_pic_h nav-pills_pic_h">
                                                        <li class="active"><a href="#tab1-1" data-toggle="tab">월별 배차조회</a></li>
                                                        <li class=""><a href="#tab1-2" data-toggle="tab" >일별 배차조회</a></li>
                                                        <li class=""><a href="#tab1-3" data-toggle="tab" >차량 배차조회</a></li>
                                                        <li class=""><a href="#tab1-4" data-toggle="tab" >차량배차 조회상세</a></li>
                                                    </ul> 
                                                </div>
                                            <!--탭컨텐츠시작-->                      
                                            <div class="tab-content_pic5">
                                                <!--월별배차조회 시작-->
                                                <div class="tab-pane active" id="tab1-1">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                        차량별 월별배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--일별배차조회 시작-->
                                                <div class="tab-pane" id="tab1-2">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       차량별 일별배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--일별배차조회 끝-->
                                                <!--차량배차조회 시작-->
                                                <div class="tab-pane" id="tab1-3">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       차량별 차량배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--차량배차조회 끝-->
                                                <!--차량배차조회상세 시작-->
                                                <div class="tab-pane" id="tab1-4">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       차량별 차량배차 상세 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--차량배차조회상세 끝-->
                                            </div>
                                        </div>
                                        <!--돌발통계 아래 탭 끝-->
                                        </div>
                                    </div>
                                    <!--내용끝--> 
                                </div>
                            </div>
                            <!--차량별 끝-->
                            <!--노선별 시작-->
                            <div class="tab-pane" id="tab2">
                                 <div class="sub_tab_con_body">
                                    <!--검색시작-->                                                
                                    <div class="sub_two_sms_body">
                                            <!--상단버튼시작-->
                                            <div class="sub_top_btn2 bms2_magin">
                                                <ul>
                                                    <li><a href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                                                </ul>
                                            </div>
                                            <!--상단버끝-->
                                             <table class="two_serch2"  border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <th>일별</th>
                                                        <td class="lage">
                                                            <select class="in2 in_list2 serch_day_list" name="text">
                                                                <option value="01">2016-07-19</option>
                                                                <option value="02">리스트1</option>
                                                                <option value="03">리스트2</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </table>
                                            <div class="subcon_top3"> 
                                                <input type="text" class="in2 subtop_in_text" name="ID" placeholder="검색어 입력">
                                                <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                            </div>
                                    </div>	
                                    <!--검색끝-->
                                    <!--내용시작-->
                                    <div class="sms_conbody">
                                        <div class="subcon_statistic8">
                                            <!--차량별 배차이력 아래 탭-->
                                            <div class="statistic8_tab_body">
                                                <div class="statistic8_base_body">
                                                    <ul class="nav_pic_h nav-pills_pic_h">
                                                        <li class="active"><a href="#tab2-1" data-toggle="tab">월별 배차조회</a></li>
                                                        <li class=""><a href="#tab2-2" data-toggle="tab" >일별 배차조회</a></li>
                                                        <li class=""><a href="#tab2-3" data-toggle="tab" >차량 배차조회</a></li>
                                                        <li class=""><a href="#tab2-4" data-toggle="tab" >차량배차 조회상세</a></li>
                                                    </ul> 
                                                </div>
                                            <!--탭컨텐츠시작-->                      
                                            <div class="tab-content_pic5">
                                                <!--월별배차조회 시작-->
                                                <div class="tab-pane active" id="tab2-1">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                        노선별 월별배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--일별배차조회 시작-->
                                                <div class="tab-pane" id="tab2-2">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       노선별 일별배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--일별배차조회 끝-->
                                                <!--차량배차조회 시작-->
                                                <div class="tab-pane" id="tab2-3">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    노선별 차량배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--차량배차조회 끝-->
                                                <!--차량배차조회상세 시작-->
                                                <div class="tab-pane" id="tab2-4">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       노선별 차량배차 상세 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--차량배차조회상세 끝-->
                                            </div>
                                        </div>
                                        <!--돌발통계 아래 탭 끝-->
                                        </div>
                                    </div>
                                    <!--내용끝--> 
                                </div>
                            </div>
                            <!--노선별 끝-->
                            <!--차량노선 시작-->
                            <div class="tab-pane" id="tab3">
                                 <div class="sub_tab_con_body">
                                    <!--검색시작-->                                                
                                    <div class="sub_two_sms_body">
                                            <!--상단버튼시작-->
                                            <div class="sub_top_btn2 bms2_magin">
                                                <ul>
                                                    <li><a href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                                                </ul>
                                            </div>
                                            <!--상단버끝-->
                                             <table class="two_serch2"  border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <th>일별</th>
                                                        <td class="lage">
                                                            <select class="in2 in_list2 serch_day_list" name="text">
                                                                <option value="01">2016-07-19</option>
                                                                <option value="02">리스트1</option>
                                                                <option value="03">리스트2</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </table>
                                            <div class="subcon_top3"> 
                                                <input type="text" class="in2 subtop_in_text" name="ID" placeholder="검색어 입력">
                                                <span><img class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                            </div>
                                    </div>	
                                    <!--검색끝-->
                                    <!--내용시작-->
                                    <div class="sms_conbody">
                                        <div class="subcon_statistic8">
                                            <!--차량별 배차이력 아래 탭-->
                                            <div class="statistic8_tab_body">
                                                <div class="statistic8_base_body">
                                                    <ul class="nav_pic_h nav-pills_pic_h">
                                                        <li class="active"><a href="#tab3-1" data-toggle="tab">월별 배차조회</a></li>
                                                        <li class=""><a href="#tab3-2" data-toggle="tab" >일별 배차조회</a></li>
                                                        <li class=""><a href="#tab3-3" data-toggle="tab" >차량 배차조회</a></li>
                                                        <li class=""><a href="#tab3-4" data-toggle="tab" >차량배차 조회상세</a></li>
                                                    </ul> 
                                                </div>
                                            <!--탭컨텐츠시작-->                      
                                            <div class="tab-content_pic5">
                                                <!--월별배차조회 시작-->
                                                <div class="tab-pane active" id="tab3-1">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                        차량,노선 월별배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--일별배차조회 시작-->
                                                <div class="tab-pane" id="tab3-2">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       차량,노선 일별배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--일별배차조회 끝-->
                                                <!--차량배차조회 시작-->
                                                <div class="tab-pane" id="tab3-3">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       차량,노선 차량배차 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--차량배차조회 끝-->
                                                <!--차량배차조회상세 시작-->
                                                <div class="tab-pane" id="tab3-4">
                                                    <div class="bms2_con">
                                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                       차량,노선 차량배차 상세 표 나올 곳
                                                        </div>  
                                                    </div>
                                                </div>
                                                <!--차량배차조회상세 끝-->
                                            </div>
                                        </div>
                                        <!--돌발통계 아래 탭 끝-->
                                        </div>
                                    </div>
                                    <!--내용끝--> 
                                </div>
                            </div>
                            <!--차량노선 끝-->
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
