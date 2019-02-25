/**
 * 
 */

$(document).ready(function(){
	if(paramResult != "") showAlert(paramResult);
	
	$(".btn_login").click(function() {
		if($("#user_id").val() == "") {
			showAlert("아이디를 입력해주세요.");
			return;
		}
		if($("#user_pw").val() == "") {
			showAlert("패스워드를 입력해주세요.");
			return;
		}
		document.loginForm.submit();
	});
});
