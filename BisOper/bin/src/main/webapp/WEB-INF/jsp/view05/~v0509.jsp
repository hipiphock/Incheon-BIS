<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>기반정보관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/lib/hashMap.js"></script>
<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="http://openapi.map.naver.com/openapi/v3/maps.js?clientId=WkpbXbSAEC5adp2jrVPi"></script>
<script src="./js/v01/nMap.js"></script>
<script src="./js/comm/jquery.js"></script>
<script src="./js/v03/v302.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="BMS-V-302">

        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>노선관리/분석 - 노선관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                    </ul>
                </div>
                <!--상단버끝-->
                <!--탭시작-->                                                
					<div class="pop-body">	
                        <div class="sub_body2">
						  <ul class="nav-pills_pic tab">
                                <li class="tab1 click" id="tab_list"><a href="#tab1">노선 인허가 검색</a></li>
                                <li class="tab2"><a id="tab_map" href="#tab2">노선편집</a></li>
								<li class="tab3"><a id="" href="#tab3">노선편집 적용</a></li> 
								<li class="tab4"><a id="" href="#tab4">무선 업그레이드</a></li>
								<li class="tab5"><a id="" href="#tab5">업그레이드 확인</a></li>      
						  </ul> 
                        </div>
                        <!--탭컨텐츠시작-->                      
						<div class="tab-content_pic2 v0509Body">
                            <!--노선 인허가 검색 시작-->
                            <div class="tab-pane active tabCon1" id="tab1">
                                <div class="sub_tab_con_body">
                                     <!--top-->
                                    <div class="btn_box">
                                        <ul>
                                            <li><a class="m_btn" href="javascript:void(0);" id="btn_show_mainPage">메인지도에 표시</a></li>
                                            <!-- <li><a class="m_btn" href="javascript:void(0);" id="btn_show_route">노선보기</a></li> -->
                                        </ul>
                                    </div>
                                    <div class="subcon_top2 btn_box">
                                        <input type="text" class="subtop_in_text" name="ID" id="input_searchWord" placeholder="노선ID 또는 노선명">
                                        <span><img id="btn_search" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                    </div>
                                    <a id="btn_clear" class="serch_clear2">clear</a>
                                    <div class="serch_check"><label><input type="checkbox" id="check_detail1" class="check">결과검색</label></div>
                                    <!--top 끝-->
                                    <div class="subcon_con">   
                                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                            <table id="route_detail_list"></table>
                                        </div>
                                                                                                                    
                                    </div>  
                                </div>
                            </div>
                            <!--노선 인허가 검색 끝-->
                            <!--노선편집 시작-->
                            <div class="tab-pane tabCon2" id="tab2">
                                <div class="sub_tab_con_body">
                                    <div class="base2_con">   
                                        <div class="base_left"><!--왼쪽-->    
                                                <div class="serch_box" style="width: 329px;">
                                             	<input id="input_searchWord2" type="text" class="in bit_in_text" placeholder="노선ID 또는 노선명">
                                             	<img id="btn_search2" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼">
                                         	</div>
                                         	<a id="btn_clear2" href="javascript:void(0);" class="serch_clear">clear</a>
                                         	<!-- <div class="serch_check"><label><input type="checkbox" id="check_detail2" class="check">결과검색</label></div> -->
                                            <div class="base_left_chart_body">
                                                <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                    <table id="route_simple_list"></table>
                                                    <div style="height: 5px; width: 100%; border: 1px solid #c2c2c2;"></div>
                                                    <table id="via_stop_list"></table>
                                                </div>
                                            </div><!--왼쪽 표-->                                          
                                        </div>
                                        <div class="base2_right"><!--오른쪽-->
                                            <p class="base2_title" id="selected_route_info"> 
                                                
                                            </p>
                                            <div class="btn_box2">
                                                <ul>
                                                    <li><a id="btn_first" class="m_btn btnimg1" style="border-right:none;" href="javascript:void(0);"><img src="./images/base_icon1.png">시점으로</a></li>
                                                    <li><a id="btn_prev" class="m_btn btnimg1" style="border-right:none;" href="javascript:void(0);"><img src="./images/base_icon3.png">이전지점</a></li>
                                                    <li><a id="btn_next" class="m_btn btnimg1" style="border-right:none;" href="javascript:void(0);"><img src="./images/base_icon4.png">다음지점</a></li>
                                                    <li><a id="btn_last" class="m_btn btnimg1" href="javascript:void(0);"><img src="./images/base_icon2.png">종점으로</a></li>
                                                </ul>
                                            </div>
                                             <div class="base_left_chart_body">
                                                <div class="main_chart" id="map"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <!--노선편집 끝-->
                            
                            <!--노선편집 적용 시작-->
                            <div class="tab-pane tabCon3" id="tab3">
                                <div class="sub_tab_con_body">
                                	  <div class="base2_con">  
                                	  노선편집적용 내용
                                	  </div>
                                </div>
                            </div>
                            <!--노선편집 적용 끝-->
                            
                            <!-- 무선업그레이드 시작-->
                            <div class="tab-pane tabCon4" id="tab4">
                                <div class="sub_tab_con_body">
                                	  <div class="base2_con">  
                                	 무선업그레이드
                                	  </div>
                                </div>
                            </div>
                            <!-- 무선업그레이드 끝-->
                            
                            <!-- 업그레이드 확인 시작-->
                            <div class="tab-pane tabCon5" id="tab5">
                                <div class="sub_tab_con_body">
                                	  <div class="base2_con">  
                                	업그레이드 확인
                                	  </div>
                                </div>
                            </div>
                            <!-- 업그레이드 확인  끝-->
                            
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
