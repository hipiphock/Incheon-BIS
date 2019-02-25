<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
       <div class="manage_wrap" id="pop_category">
       	<input type="hidden" id="input_user_mode">
           <div class="pop_title">
               <h2 id="pop_user_title">카테고리 추가</h2>
               <p><a id="btn_close" class="pop_close" href="javascript:void(0);"><img src="./images/close_white.png" alt="닫기"></a></p>
           </div>
           <div class="pop_conbody manage_pop">         
               <div class="layer_title">
                   <h3>정보 입력</h3>
               </div>
               <div class="pop_diteil_body2">
                   <table class="set_t" border="0" cellspacing="0" cellpadding="0">
                      
                       <!-- 사용자 추가 항목 -->
                       <tr class="add_wrap">
                           <th>카테고리 ID</th>
                           <td><input type="text" class="in in_text manage_text2" id="input_p_cdcategid"></td>
                       </tr>
                        <tr class="add_wrap">
                           <th>카테고리 명</th>
                           <td><input type="text" class="in in_text manage_text2" id="input_p_cdcategnm"></td>
                       </tr>
                       <tr class="add_wrap">
                           <th>상세</th>
                           <td><input type="text" class="in in_text manage_text2" id="input_p_detail"></td>
                       </tr>
                       <tr class="add_wrap">
                           <th>설명</th>
                           <td><input type="text" class="in in_text manage_text2" id="input_p_descr"></td>
                       </tr>
                   </table>
               </div>
               <div class="pop_bottom_btn">
                   <ul>
                       <li class="bottom_save"><a id="btn_save_pop" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                       <li class="bottom_close pop_close"><a href="javascript:void(0);"><img src="./images/close_black.png">닫기</a></li>
                   </ul>
               </div>
          </div>
       </div> 
</body>
</html>
