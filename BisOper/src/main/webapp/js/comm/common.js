/**
 * 
 */
var BG_RED          = 'rgba(250, 46, 46, 0.5)';
var BG_DEEP_RED     = 'rgba(255, 46, 46, 0.5)';
var BG_GREEN        = 'rgba(40, 255, 0, 0.5)';
var BG_DEEP_GREEN   = 'rgba(1, 233, 1, 0.5)';
var BG_YELLOW       = 'rgba(247, 254, 46, 0.5)';
var BG_DEEP_YELLOW  = 'rgba(255, 191, 240, 0.5)';
var BG_LIGHT_BLUE   = 'rgba(46, 204, 250, 0.5)';
var BG_GRAY         = 'rgba(230, 230, 230, 0.5)';
var BG_DEEP_GRAY    = 'rgba(235, 235, 235, 0.5)';

var COLOR_RED          = 'rgb(238, 0, 0)';
var COLOR_GREEN        = 'rgb(39, 174, 24)';
var COLOR_YELLOW       = 'rgb(234, 184, 30)';

var COLOR_DEEP_RED     = 'rgb(255, 46, 46)';

var COLOR_DEEP_GREEN   = 'rgb(1, 233, 1)';
var COLOR_DEEP_YELLOW  = 'rgb(255, 191, 240)';
var COLOR_LIGHT_BLUE   = 'rgb(46, 204, 250)';
var COLOR_GRAY         = 'rgb(230, 230, 230)';
var COLOR_DEEP_GRAY    = 'rgb(235, 235, 235)';

var YEAR_FORMAT1 = "yy-mm-dd";
var TIME_FORMAT1 = "HH:mm:ss";
var TIME_FORMAT2 = "HH:mm";
var TIME_FORMAT3 = "HH";

$(window.document).on("selectstart", function(event){return false;}); //prevent drag

$(document).ready(function(){
	amazonmenu.init({
		menuid: 'mysidebarmenu'
	});
	amazonmenu.init({
		menuid: 'mysidebarmenu2'
	});
	
	var attr = $("#view_attr").val();
	$("#menuWrap li").find("p").removeClass("menu_click");
	$("#menuWrap li").find("#"+attr).addClass("menu_click");
	$("#menuName").text(document.title);
		
	if(attr == "v102") {
		$(".top_serch").show();
	}else {
		$(".top_serch").hide();
	}
});

/********************************
 * 로딩 프로그래스 이미지 설정 
 **********************************/
function appendLoader(text) {
	$("body").prepend('<div class="loader"><div class="wrap"><img src="./images/loader_2.gif"><p>'+text+'</p></div></div>');
}
function setLoaderText(text){
	$(".loader p").text(text);
}
function getLoaderText(){
	return $(".loader p").text();
}
function showLoader() {
	$(".loader").show();
}
function hideLoader() {
	$(".loader").hide();
}
/********************************
 * console log
 * 
 **********************************/
var isDebug = true;
function log(text) {
	if(isDebug)
		console.log(text);
}

/********************************
 * 파일 다운로드 
 * @Require jquery.fileDownload.js
 * formId : 요청 폼 아이디
 **********************************/
function inquiryFileDownload(formId, isList) {
	var tempText = getLoaderText();
	setLoaderText("파일 다운로드 중..")
	alertify.success("파일 다운로드 요청중입니다.");
	showLoader();
	
	if (isList === undefined) {
		isList = false;
	}
	
	$.fileDownload($("#"+formId).prop('action'),{
	    isList: isList,
		httpMethod: "POST",
	    data:jQuery("#"+formId).serialize(),
	    successCallback: function(url) {
	    	hideLoader();
	    	setLoaderText(tempText)
	    	alertify.success("파일 다운로드가 완료되었습니다.");
	    },
	    failCallback: function(responesHtml, url){
	    	hideLoader();
	    	setLoaderText(tempText)
	    	alertify.error("파일 다운로드 중 오류가 발생하였습니다.");
	    }
	});
}

/**********************************************
 * 공통으로 사용하는 AJAX 함수
 * @param url 			 - ajax 호출 url
 * @param data 			 - ajax param
 * @param beforeSendFunc - ajax beforeSend 수행 함수
 * @param successFunc 	 - ajax success 수행 함수
 * @param errorFunc 	 - ajax error 수행 함수
 *********************************************/
$.ajaxSetup ({cache : false});

function ajaxCall(url, data, beforeSend, success, error){
	/*if(tradition == true) {
		$.ajaxSettings.traditional = true;
		tradition=false;
	}*/

	$.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType : "json",
        beforeSend: beforeSend,
        success: success,
        error: error
	});
}

/**********************************************
 * data가 배열일 경우 사용하는 AJAX 함수
 * Controller에서 @RequestBody String으로 받고
 * 파싱해서 사용 가능
 * @param url 			 - ajax 호출 url
 * @param data 			 - ajax param
 * @param beforeSendFunc - ajax beforeSend 수행 함수
 * @param successFunc 	 - ajax success 수행 함수
 * @param errorFunc 	 - ajax error 수행 함수
 *********************************************/
$.ajaxSetup ({cache : false});

function ajaxCallList(url, data, beforeSend, success, error){
	$.ajax({
		type: "POST",
		url: url,
        data : JSON.stringify(data),
        dataType:"json",
        contentType: "application/json; charset=utf-8",
        beforeSend: beforeSend,
        success: success,
        error: error
	});
}


/**********************************************************
 * time input 설정
 * id: input 아이디
 * format: 시간 형식 ex) hh:mm:ss, hh:mm p 
 * maxLength: 최대 길이
 ***********************************************************/
function setTimePicker(id, type, maxLen) {

	if(maxLen != null || maxLen != "") $("#"+id).attr('maxlength', maxLen);
	
	if(type == "pass") {
		$("#"+id).attr("type", "password");
	}else{
		$("#"+id).attr("type", "text");
		
		$("#"+id).keyup(function(){
			if(type == "number") {
				$(this).val($(this).val().replace(/[^0-9]/g,""));
			}else if(type == "alphabet") {
				$(this).val($(this).val().replace(/[0-9]|[^\!-z\s]/gi,""));
			}
	    }); 
	}
}

/**********************************************************
 * time input 설정
 * id: input 아이디
 * format: 시간 형식 ex) hh:mm:ss, hh:mm p 
 ***********************************************************/
function initTimePicker(id, format, init) {
	
	$("#"+id).timepicker({
	    timeFormat: format,
	    interval: 1,
	    minTime: '00:00',
	    maxTime: '23:59',
	    defaultTime: '00',
	    startTime: '00:00',
	    dynamic: true,
	    dropdown: true,
	    scrollbar: true,
	    zindex: 99999
	});
	
	var strTime; 
	if(init) {
		strTime = new Date().format(format);
	}else {
		strTime = "0000";
	}
	$("#"+id).timepicker("setTime", strTime);
}

/**********************************************************
 * date input 설정
 * id: input 아이디
 * format: 시간 형식 ex) yyyy-mm-dd yyyy:mm:dd 
 * maxLength: 최대 길이
 ***********************************************************/
function initCalendar(id, format, init) {
	jQuery(function($){
		 $.datepicker.regional['ko'] = {
		  closeText: '닫기',
		  prevText: '이전',
		  nextText: '다음',
		  currentText: '오늘',
		  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		  monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		  dayNames: ['일','월','화','수','목','금','토'],
		  dayNamesShort: ['일','월','화','수','목','금','토'],
		  dayNamesMin: ['일','월','화','수','목','금','토'],
		  weekHeader: 'Wk',
		  dateFormat: format,
		  firstDay: 1,    //시작요일 
		  isRTL: false,
		  showMonthAfterYear: true,
		  yearSuffix: '년'};
		 $.datepicker.setDefaults($.datepicker.regional['ko']);
	});
	$("#"+id).datepicker({changeMonth: true, changeYear:true});
	
	if(init == true) {
		var currentDate = new Date();
		
	//	var next = new Date(Date.parse(currentDate) + 1000 * 60 * 5); //5분 후
	//	var yesterday = new Date(Date.parse(currentDate) - 1000 * 60 * 60 * 24);	//어제
		$("#"+id).val($.datepicker.formatDate(format, currentDate));
	}
}

function setCalendar(objId, format, date) {
	$("#"+objId).val($.datepicker.formatDate(format, date));
}

/**********************************************************
 * input 설정
 * id: 아이디
 * type: pass(패스워드), number(숫자만), alphabet(영문만), normal(일반)
 * maxLength: 최대 길이
 ***********************************************************/
function setInputCtrl(id, type, maxLen) {

	if(maxLen != null || maxLen != "") $("#"+id).attr('maxlength', maxLen);
	
	if(type == "pass") {
		$("#"+id).prop("type", "password");
	}else{
		$("#"+id).prop("type", "text");
		
		$("#"+id).keyup(function(){
			if(type == "number") {
				$(this).val($(this).val().replace(/[^0-9]/g,""));
			}else if(type == "alphabet") {
				$(this).val($(this).val().replace(/[0-9]|[^\!-z\s]/gi,""));
			} else if(type == "integer") {
				$(this).val($(this).val().replace(/[^0-9|^-]/g,""));
				$(this).val($(this).val().replace(/[0-9]-/g, ""));
			}
	    }); 
	}
}

/************************************************************
 * Date format
 * usage(ex) : var cur = new Date().format("yyyy-MM-dd HH:mm:ss");
 ************************************************************/
Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var weekShort = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|e|HH|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "e": return weekShort[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.str = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".str(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

/********************************
 * modal dialog 
 * id : wrap id
 * containerId : draggable container id
 **********************************/
function getDialog(id, containerId) {
	var dlg = $("#" + id).dialog({
		autoOpen: false,
		height: "auto",
		width: "auto",
//	      resizable: false,
		draggable: false,
		modal: true
	});
	$(".ui-dialog").draggable({containment: "#"+containerId});
	
	return dlg;
}

/********************************
 * 검색 기간 유효성 채크
 * $sData,$eDate,$sTime,$eTime : input obj
 **********************************/
function checkTermEffective($sDate, $eDate, $sTime, $eTime) {
	var sDtTm, eDtTm;
	
	var sD = $sDate.val().replace(/-/gi, "").replace(/:/gi, "");
	var eD = $eDate.val().replace(/-/gi, "").replace(/:/gi, "");
	
	if($sTime != null && $eTime != null) {
		var sT = $sTime.val().replace(/-/gi, "").replace(/:/gi, "");
		var eT = $eTime.val().replace(/-/gi, "").replace(/:/gi, "");
		sDtTm = "" + sD + sT;
		eDtTm = "" + eD + eT;
	}else {
		sDtTm = "" + sD;
		eDtTm = "" + eD;
	}
	if(Number(eDtTm) > Number(sDtTm)) {
		return true;
	}else{
		return false;
	}
}

/**********************************************************
 * 정규식 체크
 * type: NUM, HAN, ENG
 ***********************************************************/
function checkRegExp(type, text) {
	var check;
	if(type == "NUM") {
//		$.isNumeric(text)
		check = /^[0-9]*$/;
	}else if(type == "HAN") {
		check = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
	}else if(type == "ENG") {
		check = /^[A-za-z]/g;
	}
	return check.test(text);
} 

/**********************************************************
 * 메뉴 화면 요청
 * url: 요청 url
 * param1, param2, param3, param4, param5, param6
 ***********************************************************/
function openMenuWindow(url, param1, param2, param3, param4, param5, param6) {
	
	$("#openPage").remove();
	window.open("", url, "width=1366px, height=792px, resizable=0, scrollbars=0"); //윈도우 명칭 설정 
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "movePage");
	form.action = url;
	form.target = url;
	form.method = "POST";
	
	if(param1 != null) {
		para   = document.createElement('INPUT');     
		para.type  = 'HIDDEN';
		para.name  = 'param1';
		para.value = param1;
		form.appendChild(para);
	}
	if(param2 != null) {
		para       = document.createElement('INPUT');
		para.type  = 'HIDDEN';
		para.name  = 'param2';
		para.value = param2;
		form.appendChild(para);
	}
	if(param3 != null) {
		para       = document.createElement('INPUT');
		para.type  = 'HIDDEN';
		para.name  = 'param3';
		para.value = param3;
		form.appendChild(para);
	}
	if(param4 != null) {
		para       = document.createElement('INPUT');
		para.type  = 'HIDDEN';
		para.name  = 'param4';
		para.value = param4;
		form.appendChild(para);
	}
	if(param5 != null) {
		para       = document.createElement('INPUT');
		para.type  = 'HIDDEN';
		para.name  = 'param5';
		para.value = param5;
		form.appendChild(para);
	}
	if(param6 != null) {
		para       = document.createElement('INPUT');
		para.type  = 'HIDDEN';
		para.name  = 'param6';
		para.value = param6;
		form.appendChild(para);
	}
	document.body.appendChild(form);
	
	form.submit();
}