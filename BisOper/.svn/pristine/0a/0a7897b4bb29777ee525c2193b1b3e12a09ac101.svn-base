/**
 * ### require 
 * /css/lib/alertify.default.css
 * /js/lib/alertify.min.js
 */

/*document.querySelector("head").insertAdjacentHTML(
        'beforeend',
        '<link rel = "stylesheet" type = "text/css" href = "./css/lib/alertify.core.css"/>'
        +'<link rel = "stylesheet" type = "text/css" href = "./css/lib/alertify.default.css"/>'
        +'<script type = "text/javascript" src = "./js/lib/alertify.min.js"></script>'
    );*/

function reset() {
//	$("#toggleCSS").attr("href", "../themes/alertify.default.css");
	alertify.set({
		labels : {
			ok     : "확인",
			cancel : "취소"
		},
		delay : 5000,
		buttonReverse : false,
		buttonFocus   : "ok"
	});
}

/**
 * confirm dialog 표출
 * content : dialog contents
 * confirm : callback
 */
function showConfirmDlg(content, callback) {
	reset();
	alertify.confirm(content, function (e) {
		if (e) { //확인
			callback();
		} else {  //취소
			alertify.success("요청이 취소되었습니다.");
		}
	});
	return false;
}

/**
 * confirm alert 표출
 * content : alert contents
 */
function showAlert(content) {
	reset();
	alertify.alert(content);
	return false;
}

