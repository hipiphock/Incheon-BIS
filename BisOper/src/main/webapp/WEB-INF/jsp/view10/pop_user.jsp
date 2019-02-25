<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
       <div class="manage_wrap" id="pop_user">
       	<input type="hidden" id="input_user_mode">
           <div class="pop_title">
               <h2 id="pop_user_title">사용자 등록</h2>
               <p><a id="btn_close" class="pop_close" href="javascript:void(0);"><img src="./images/close_white.png" alt="닫기"></a></p>
           </div>
           <div class="pop_conbody manage_pop">         
               <div class="layer_title">
                   <h3>사용자 정보 입력</h3>
               </div>
               <div class="pop_diteil_body2">
                   <table class="set_t" border="0" cellspacing="0" cellpadding="0">
                       <tr>
                           <th>사용자 ID</th>
                           <td>
                           		<input type="text" class="in in_text manage_text1" id="input_id">
                           		<input type="hidden" class="in in_text manage_text1" id="input_reg_id">
                           		<a id="btn_duplication" class="ss_btn manage_btn" href="javascript:void(0);">중복확인</a>
                   			</td>
                       </tr>
                       <!-- 사용자 추가 항목 -->
                       <tr class="add_wrap">
                           <th>사용자 등급</th>
                           <td>
                               <select class="in in_list manage_list" id="select_grade_pop">
                               </select>
                           </td>
                       </tr>
                        <tr class="add_wrap">
                           <th>사용자 이름</th>
                           <td><input type="text" class="in in_text manage_text2" id="input_name"></td>
                       </tr>
                       <tr class="add_wrap">
                           <th>비밀번호</th>
                           <td><input type="password" class="in in_text manage_text2" id="input_pw1"></td>
                       </tr>
                       <tr class="add_wrap">
                           <th>비밀번호 확인</th>
                           <td><input type="password" class="in in_text manage_text2" id="input_pw2"></td>
                       </tr>
                       <!-- 비밀번호 변경 항목 -->
                       <tr class="mod_wrap">
                           <th>현재 비밀번호</th>
                           <td><input type="password" class="in in_text manage_text2" id="input_cur_pw"></td>
                       </tr>
                        <tr class="mod_wrap">
                           <th>새 비밀번호</th>
                           <td><input type="password" class="in in_text manage_text2" id="input_new_pw1"></td>
                       </tr>
                       <tr class="mod_wrap">
                           <th>새 비밀번호 확인</th>
                           <td><input type="password" class="in in_text manage_text2" id="input_new_pw2"></td>
                       </tr>
                   </table>
               </div>
               <div class="pop_bottom_btn">
                   <ul>
                       <li class="bottom_save"><a id="btn1_save_pop" href="javascript:void(0);"><img src="./images/icon_ok.png">저장</a></li>
                       <li class="bottom_close pop_close"><a href="javascript:void(0);"><img src="./images/close_black.png">닫기</a></li>
                   </ul>
               </div>
          </div>
       </div> 
</body>
</html>
