<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>OBE관리</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>

<script src="./js/v04/v401.js"></script>
<script type="text/javascript">
	firmware_version = '${firmware_version}';
	info_version = '${info_version}';
	info_reserve_version = '${info_reserve_version}';
</script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v401">
	
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>OBE관리</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
             <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="btn_excel" href="javascript:void(0);"><img src="./images/btn_big_save.png"><p>파일저장</p></a></li>
                        <li><a id="btn_refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <!--검색시작-->                                                
				<div class="obe_serch_body">
                    
                        <table class="two_serch4" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <th>OBE 펌웨어 버전</th>
                                <td><input type="text" id="input_f_version" class="in big_in"></td>
                                <th>현행 기반정보 버전</th>
                                <td><input type="text" id="input_c_version" class="in big_in"></td>
                                <th>예약 기반정보 버전</th>
                                <td><input type="text" id="input_r_version" class="in big_in"></td>
                            </tr>
                            <tr>
                                <th>결과내 검색</th>
                                <td colspan="5">
                                    <div class="btn_box3">
                                        <input id="input_research" type="text" class="in subtop_in_text" name="ID" placeholder="차량 번호 입력">
                                        <span><img id="img_research" class="sub_serch_btn" src="./images/serch_gray.png" alt="검색버튼"></span>
                                    </div>
                                    <a id="btn_clear" href="javascript:void(0);" class="serch_clear3">clear</a>
                                    <div class="serch_check3"><input id="checkbox_detail_search" type="checkbox" name="check" class="check">상세검색</div>
                                    <div class="check_left">
                                    <input id="checkbox_auto_reload" type="checkbox" name="check" class="check">정보 자동 새로고침
                                    </div>
                                </td> 
                            </tr>
                        </table>
                   
                </div>	
                <!--검색끝-->
                <!--내용시작-->
                <div class="obe_conbody">
                    <p class="serch_number">검색 결과 <span>2건</span></p>
                    <div class="subcon_con3">
                        <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                       		<table id="obe_list"></table>
                        </div>
                    </div>
                </div>
                <!--내용끝-->
            </div>
             <!--내용 레이아웃끝-->   
        </div>
        </div>
        <!--내용끝-->
</body>
</html>
