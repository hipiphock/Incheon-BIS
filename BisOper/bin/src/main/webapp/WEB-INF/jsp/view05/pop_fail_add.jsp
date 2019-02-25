<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
       <div class="manage_wrap" id="pop_fail">
           <div class="pop_title">
               <h2 id="pop_user_title">BIT 장애 등록</h2>
           </div>
           <div class="pop_conbody bit513_pop">    
               <div class="layer_title">
                   <h3>BIT 장애  정보 입력</h3>
               </div>
               <div class="pop_diteil_body2">
                   <table class="set_t bit513">
                       <tr>
                           <th>시설물 ID</th>
                           <td>
                           		<input type="text" class="in in_text bit513_text1" id="input_pop_facilid" disabled="disabled">
                           		<a id="btn_pop_choice" class="ss_btn manage_btn" href="javascript:void(0);">선택</a>
                   			</td>
                       </tr>
                       <tr>
                           <th>시설물 유형</th>
                           <td><input type="text" class="in in_text bit513_text" id="input_pop_faciltpnm" disabled="disabled"></td>
                       </tr>
                       <tr>
                           <th>설치 위치</th>
                           <td><input type="text" class="in in_text bit513_text" id="input_pop_detail" disabled="disabled"></td>
                       </tr>
                       <tr>
                           <th>장애 발생일시</th>
                           <td>
                              <input type="text" class="in in_text bit117_day" id="input_pop_stdate" style="margin-right: 1px">
                              <input type="text" class="in in_text bit117_day" id="input_pop_sttime">
                           </td>
                       </tr>
						<tr>
                           <th>장애 유형</th>
                           <td>
                               <select class="in in_list bit513_list" id="select_pop_failtpnm">
                               </select>
                           </td>
                       </tr>
                       <tr>
                           <th>장애 상세</th>
                           <td>
                               <input type="text" class="in in_text bit513_text" id="input_pop_fail_detail">
                           </td>
                       </tr>
                   </table>
               </div>
               <div class="pop_bottom_btn">
                   <ul>
                       <li class="bottom_save"><a id="btn_save2" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                       <li class="bottom_close pop_close"><a id="btn_close2" href="javascript:void(0);"><img src="./images/close_black.png">닫기</a></li>
                   </ul>
               </div>
          </div>
       </div> 
</body>
</html>
