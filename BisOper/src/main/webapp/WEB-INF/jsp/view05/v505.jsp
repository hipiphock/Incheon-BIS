<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>전체 BIT 보기</title>
<link rel="stylesheet" type="text/css" href="./css/sub_bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_comm.css"/>
<link rel="stylesheet" type="text/css" href="./css/style_sub.css"/>

<script src="./js/comm/commGrid.js"></script>
<script src="./js/comm/commDialog.js"></script>
<script src="./js/comm/common.js"></script>
<script src="./js/v05/v505.js"></script>

</head>

<body>
	<input type="hidden" id="view_attr" value="v501">
        
        <div class="big_wrap pop">
            <div class="pop_title2">
                <h2>BIT관리 - 전체 BIT 보기</h2>
            </div>
            <div class="pop_conbody2 bit_pop_con"> 
            <!--내용 레이아웃시작-->
            <div class="big_all_body_con">
                <!--상단버튼시작-->
                <div class="sub_top_btn">
                    <ul>
                        <li><a id="refresh" href="javascript:void(0);"><img src="./images/btn_big_re.png"><p>새로고침</p></a></li>
                    </ul>
                </div>
                <!--상단버튼끝-->
                <div class="base_conbody">
                     <div class="subcon_con2">
                     <div class="main_chart"><!--<!--.main_chart 사이즈 [ width: 100%; height:100%;]-->
                      	<table id="all_bit_list"></table>     
                     </div>     
                    </div>                         
                </div>
            </div>
             <!--내용 레이아웃끝-->   
        </div>
        </div>
        <!--내용끝-->
</body>
</html>
