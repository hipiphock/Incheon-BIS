<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>메인 헤더</title>

</head>
<body>
<!---------------------------------top메뉴 시작  메뉴 인크루드할곳 시작----------------------------->
<div class="top_menu">
    <div class="menu_logo">
        <h1><a><img src="./images/logo.png" alt="버스운영관리시스템"></a><span>메인화면</span></h1><!--페이지마다 바뀌어야 할곳 1-->
    </div>
    <!--중앙메뉴시작-->
    <div class="manu_center">
        <ul>
        	<li class="menu1">
                <p class="menuname" id=""><a onClick="return false;">버스운행관리</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li>
                    	<a class="arrow">버스운행관제</a>
                    	<ul class="subDaps2">
                    		<!-- <li><a onclick="openMenuWindow('v0101.view')">실시간버스 위치관제</a></li> -->
                    		<li><a href="./v0102.view" target="_blank">노선도운행 모니터링</a></li>
                    		<li><a onclick="openMenuWindow('v0103.view')">버스공지사항 전송</a></li>
                    		<li><a onclick="openMenuWindow('v0104.view')">정류소 제공정보 조회</a></li>
                    	</ul>
                    </li> 
                    <li>
                    	<a class="arrow">돌발상황관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0105.view')">돌발상황 대응이력관리</a></li>
                    		<li><a onclick="openMenuWindow('v0106.view')">돌발대응 시나리오 관리</a></li>
                    		<li><a onclick="openMenuWindow('v0107.view')">돌발상황발생 대응관리</a></li>
                    	</ul>
                    </li>
                    <li><a onclick="openMenuWindow('v0108.view')">부당운행조회</a></li>
                    <li><a onclick="openMenuWindow('v0109.view')">운행종합상황조회</a></li>
                    <li><a onclick="openMenuWindow('v0110.view')">도착예정시간조회</a></li>
                    <li><a onclick="openMenuWindow('v0111.view')">돌발발생알람조회</a></li>
                </ul> 
            </li>
            <li class="menu2">
                <p class="menuname"><a onClick="return false;">배차관리</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v0201.view')">배차계획입력현황조회</a></li>
                    <li><a onclick="openMenuWindow('v0202.view')">배차준수현황조회</a></li>
                    <li><a onclick="openMenuWindow('v0203.view')">운행정시성현황조회</a></li>
                </ul> 
            </li>
            <li class="menu3">
                <p class="menuname"><a onClick="return false;">메시지관리</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v0301.view')">문자메시지전송</a></li>
                    <li><a onclick="openMenuWindow('v0302.view')">안내기통신메시지현황/이력</a></li>
                    <li><a onclick="openMenuWindow('v0303.view')">파일다운로드</a></li>
                    <li><a onclick="openMenuWindow('v0304.view')">제공시나리오관리</a></li>
                    <li><a onclick="openMenuWindow('v0305.view')">제공정보표출현황조회</a></li>
                    <li><a onclick="openMenuWindow('v0306.view')">파라미터전송</a></li>
                    <li><a onclick="openMenuWindow('v0307.view')">안내기부가정보조회</a></li>
                </ul> 
            </li>
            <li class="menu4">
                <p class="menuname"><a onClick="return false;">운행서비스평가</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v0401.view')">운행위반정보조회</a></li>
                    <li><a onclick="openMenuWindow('v0402.view')">운행위반정보분석</a></li>
                    <li><a onclick="openMenuWindow('v0403.view')">통과시간대비제공정보비교</a></li>
                    <li><a onclick="openMenuWindow('v0404.view')">통과시간대비제공정보비교조회</a></li>
                    <li><a onclick="openMenuWindow('v0405.view')">운행위반사항통보</a></li>
                    <li><a onclick="openMenuWindow('v0406.view')">운행위반패널티조회</a></li>
                    <li>
                    	<a class="arrow">운행평가</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0407.view')">운행정시성통계조회</a></li>
                    		<li><a onclick="openMenuWindow('v0408.view')">버스몰림율통계조회</a></li>
                    		<li><a onclick="openMenuWindow('v0409.view')">배차준수율통계조회</a></li>
                    		<li><a onclick="openMenuWindow('v0410.view')">준법운행율통계조회</a></li>
                    		<li><a onclick="openMenuWindow('v0411.view')">운전자운행실적통계조회</a></li>
                    	</ul>
                    </li>
                </ul> 
            </li>
            <li class="menu5">
                <p class="menuname"><a onClick="return false;">기반정보관리</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v0501.view')">버스회사/차고지정보조회</a></li>
                    <li><a onclick="openMenuWindow('v0502.view')">차량정보조회</a></li>
                    <li>
                    	<a class="arrow">노선관리/분석</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0503.view')">노선기초정보관리</a></li>
                    		<li><a onclick="openMenuWindow('v0504.view')">노선변경(인허가)관리</a></li>
                    		<li><a onclick="openMenuWindow('v0505.view')">노선굴곡도/경합율조회</a></li>
                    		<li><a onclick="openMenuWindow('v0506.view')">노선별경유노드조회</a></li>
                    		<li><a onclick="openMenuWindow('v0507.view')">노선/정류장 인허가 관리</a></li>
                    		<li><a onclick="openMenuWindow('v0508.view')">노선버전관리</a></li>
                    		<li><a onclick="openMenuWindow('v0509.view')">노선관리</a></li>
                    	</ul>
                    </li>
                    <li>
                    	<a class="arrow">정류소관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0510.view')">정류소기초정보관리</a></li>
                    		<li><a onclick="openMenuWindow('v0511.view')">정류소위치정보관리</a></li>
                    		<li><a onclick="openMenuWindow('v0512.view')">정류소기초인허가정보</a></li>
                    		<li><a onclick="openMenuWindow('v0513.view')">정류소정차노선조회</a></li>
                    		<li><a onclick="openMenuWindow('v0514.view')">정류소환승정보관리</a></li>
                    	</ul>
                    </li>
                    <li>
                    	<a class="arrow">운행횟수관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0515.view')">운행횟수/페널티내역조회</a></li>
                    		<li><a onclick="openMenuWindow('v0516.view')">이의신청내역조회</a></li>
                    	</ul>
                    </li>
                    <li><a onclick="openMenuWindow('v0517.view')">인허가관리</a></li>
                    <li><a onclick="openMenuWindow('v0518.view')">지하철역사주변BIT관리</a></li>
                    <li><a onclick="openMenuWindow('v0519.view')">매핑정보조회</a></li>
                    <li><a onclick="openMenuWindow('v0520.view')">정류소통과노선조회</a></li>
                </ul> 
            </li>
            <li class="menu6">
                <p class="menuname"><a onClick="return false;">시설물관리</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li>
                    	<a class="arrow">기본정보관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0601.view')">차량단말기 기초정보관리</a></li>
                    		<li><a onclick="openMenuWindow('v0602.view')">정류소안내기 기초정보관리</a></li>
                    		<li><a onclick="openMenuWindow('v0603.view')">전산장비 기초정보관리</a></li>
                    	</ul>
                    </li>
                    <li>
                    	<a class="arrow">시설물상태감시/제어</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0604.view')">차량단말기 상태정보 조회/제어</a></li>
                    		<li><a onclick="openMenuWindow('v0605.view')">정류소안내기 상태정보 조회/제어</a></li>
                    	</ul>
                    </li>
                    <li>
                    	<a class="arrow">유지보수관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0606.view')">시설물유지보수관리(BIT)</a></li>
                    		<li><a onclick="openMenuWindow('v0607.view')">시설물유지보수관리(BMT)</a></li>
                    		<li><a onclick="openMenuWindow('v0608.view')">시설물유지보수관리(무선 AP)</a></li>
                    		<li><a onclick="openMenuWindow('v0609.view')">유지보수업체정보관리</a></li>
                    	</ul>
                    </li>
                    <li><a onclick="openMenuWindow('v0610.view')">장애통계조회</a></li>
                    <li>
                    	<a class="arrow">이력관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0611.view')">BIT외부충격이력</a></li>
                    	</ul>
                    </li>
                </ul> 
            </li>
            <li class="menu7">
                <p class="menuname"><a onClick="return false;">단말업그레이드</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v0701.view')">무선업그레이드관리</a></li>
                    <li><a onclick="openMenuWindow('v0702.view')">무선업그레이드관리(로드닉스)</a></li>
                    <li><a onclick="openMenuWindow('v0703.view')">유선업그레이드관리</a></li>
                    <li><a onclick="openMenuWindow('v0704.view')">업그레이드현황조회</a></li>
                </ul> 
            </li>
            <li class="menu8">
                <p class="menuname"><a onClick="return false;">데이터관리</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v0801.view')">차량별 수집현황 조회</a></li>
                    <li><a onclick="openMenuWindow('v0802.view')">정류소 수집현황 조회</a></li>
                    <li><a onclick="openMenuWindow('v0803.view')">차량별 통신수집이력 조회</a></li>
                    <li><a onclick="openMenuWindow('v0804.view')">차량별 통신수집집계 조회</a></li>
                    <li><a onclick="openMenuWindow('v0805.view')">노선별일자별 평균수집율 조회</a></li>
                </ul> 
            </li>
            <li class="menu9">
                <p class="menuname"><a onClick="return false;">이력통계/분석</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li>
                    	<a class="arrow">운행이력조회</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0901.view')">회차별운행이력조회</a></li>
                    		<li><a onclick="openMenuWindow('v0902.view')">정류소별 운행이력 조회</a></li>
                    		<li><a onclick="openMenuWindow('v0903.view')">부당운행 이력조회</a></li>
                    		<li><a onclick="openMenuWindow('v0904.view')">운전자메시지 이력 조회</a></li>
                    		<li><a onclick="openMenuWindow('v0905.view')">시공간 운행이력 조회</a></li>
                    		<li><a onclick="openMenuWindow('v0906.view')">노선별운행대수조회</a></li>
                    		<li><a onclick="openMenuWindow('v0907.view')">차량단말기 제공이력조회</a></li>
                    		<li><a onclick="openMenuWindow('v0908.view')">단말기수집이력조회</a></li>
                    	</ul>
                    </li>
                    <li>
                    	<a class="arrow">운행통계조회</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v0909.view')">노선별 소통통계</a></li>
                    		<li><a onclick="openMenuWindow('v0910.view')">도로별 소통통계</a></li>
                    		<li><a onclick="openMenuWindow('v0911.view')">부당운행 통계조회</a></li>
                    		<li><a onclick="openMenuWindow('v0912.view')">돌발상황 통계조회</a></li>
                    		<li><a onclick="openMenuWindow('v0913.view')">운행이력 통계조회</a></li>
                    	</ul>
                    </li>
                    <li><a onclick="openMenuWindow('v0914.view')">서비스이용 통계조회</a></li>
                    <li><a onclick="openMenuWindow('v0915.view')">정류소별 SMS 건수 조회</a></li>
                </ul> 
            </li>
            <li class="menu10">
                <p class="menuname"><a onClick="return false;">운영정보관리</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li>
                    	<a class="arrow">사용자관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v1001.view')">사용자 정보/권한 관리</a></li>
                    		<li><a onclick="openMenuWindow('v1002.view')">로그인이력조회</a></li>
                    	</ul>
                    </li>
                    <li>
                    	<a class="arrow">운영코드관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v1003.view')">코드관리</a></li>
                    		<li><a onclick="openMenuWindow('v1004.view')">행정구역 정보조회</a></li>
                    	</ul>
                    </li>
                    <li>
                    	<a class="arrow">운영환경관리</a>
                    	<ul class="subDaps2">
                    		<li><a onclick="openMenuWindow('v1005.view')">운영파라미터관리</a></li>
                    		<li><a onclick="openMenuWindow('v1006.view')">운행위반기준정보관리</a></li>
                    		<!-- <li><a onclick="openMenuWindow('v1007.view')">화면메시지관리</a></li> -->
                    	</ul>
                    </li>
                </ul> 
			</li>
            <li class="menu11">
                <p class="menuname"><a onClick="return false;">외부연계정보</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v1101.view')">교통상황 연계정보조회</a></li>
                    <li><a onclick="openMenuWindow('v1102.view')">교통카드 연계정보관리</a></li>
                    <li><a onclick="openMenuWindow('v1103.view')">연계정보 송수신이력조회</a></li>
                    <li><a onclick="openMenuWindow('v1104.view')">뉴스정보 수집이력조회</a></li>
                    <li><a onclick="openMenuWindow('v1105.view')">기상정보 수집이력조회</a></li>
                    <!-- <li><a onclick="openMenuWindow('v1106.view')">연계기관/담당자관리</a></li> -->
                </ul> 
            </li>
            <li class="menu12">
                <p class="menuname"><a onClick="return false;">보고서</a></p>
                <img src="./images/menu_arow.png" alt="" class="menuArrow">
                <ul class="subDaps1">
                    <li><a onclick="openMenuWindow('v1201.view')">시설물상태현황</a></li>
                    <li><a onclick="openMenuWindow('v1202.view')">노선현황</a></li>
                    <li><a onclick="openMenuWindow('v1203.view')">배차계획서</a></li>
                    <li><a onclick="openMenuWindow('v1204.view')">일일버스운행정보</a></li>
                </ul> 
            </li>
        </ul>                
    </div>
    <!--중앙메뉴끝-->
    <!--오른쪽검색,환경설정 시작-->
    <div id="mysidebarmenu">
        <!-- <ul>
            <li class="box_set">
                <a><img src="./images/menu_icon9.png"><span class="manu_text">환경설정</span></a>
                <ul class="sub_set">
                    <img src="./images/menu_arow.png">
                    <li><a id="btn_bit_stat_set" href="javascript:void(0);">BIT 상태감시 설정</a></li>
                    <li><a id="btn_preferences" href="javascript:void(0);">환경 설정</a></li>
                    <li><a>종료</a></li>
                </ul> 
            </li>
        </ul> -->
        <div class="top_serch">
            <input id="input_total_search" type="text" class="top_serch_textbox" name="" placeholder="정류장, 노선, BIT">
            <img id="btn_search" src="./images/top_btn_serch.png">
        </div>
    </div>    
    <!--오른쪽검색,환경설정끝-->
    
</div>
<!--검색결과 시작-->
<div class="serch_result" style="display:none;"> <!--<-------------------top메뉴에서 검색하면 none이 show로 변해야 합니다--------->
    <div class="layer_title_main">
        <h3>검색결과</h3>
        <p class="close"><a id="btn_close_search"><img src="./images/close_black.png" alt="닫기"></a></p>
    </div>
    <!--탭시작-->                                                   
	<div class="panel-body2">	
    	<ul class="nav_serch nav-pills_serch" id="search_wrap">
	        <li id="btn_stop" class="active"><a href="#bus1" data-toggle="tab" class="serch_tab">정류장(<span id="txt_stop_search_cnt"></span>)</a></li>
	        <li id="btn_route" class=""><a href="#bus2" data-toggle="tab" class="serch_tab">노선(<span id="txt_route_search_cnt"></span>)</a></li>
	        <li id="btn_bit" class=""><a href="#bus3" data-toggle="tab" class="serch_tab">BIT(<span id="txt_bit_search_cnt"></span>)</a></li>
		</ul> 
        <!--탭컨텐츠시작-->                      
        <div class="tab-content">
            <div class="tab-pane active" id="bus1">
                <div class="mainserch_tab_con">
                    <!--표-->
                    <div class="main_tab_chart3">
                       <div class="main_chart" id="stop_search_wrap">
							<table id="stop_search_list"></table>
						</div><!--표 사이즈 [ width: 336px; height:100%;]-->
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="bus2">
                <div class="mainserch_tab_con">
                    <!--표-->
                    <div class="main_tab_chart3">
                        <div class="main_chart"  id="route_search_wrap">
                        	<table id="route_search_list"></table>
                        </div><!--표 사이즈 [ width: 336px; height:100%;]-->
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="bus3">
                <div class="mainserch_tab_con">
                    <!--표-->
                    <div class="main_tab_chart3">
                        <div class="main_chart" id="bit_search_wrap">
                        	<table id="bit_search_list"></table>	
                        </div><!--표 사이즈 [ width: 336px; height:100%;]-->
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="bus4">
                <div class="mainserch_tab_con">
                    <!--표-->
                    <div class="main_tab_chart3">
                        <div class="main_chart">
                        	<table id="veh_search_list"></table>
                        </div><!--표 사이즈 [ width: 336px; height:100%;]-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--검색결과 끝-->
        <!----------------------------------top메뉴 끝 인크루드할곳 끝------------------------------------->
</body>
</html>