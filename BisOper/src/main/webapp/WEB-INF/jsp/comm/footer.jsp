<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>메인 footer</title>
</head>
<body>
<div class="footer">
    <!-- <span>지도객체 갱신 : 08-23 14:35:01</span><span>버스위치 갱신 : 08-23 14:35:01</span> -->
    <span id="txt_lat">위도 35.8415192</span><span id="txt_lng">경도 127.1276656</span>
</div>
<jsp:include page="pop_set_bit.jsp"/>
<jsp:include page="pop_preferences.jsp"/>
</body>
</html>