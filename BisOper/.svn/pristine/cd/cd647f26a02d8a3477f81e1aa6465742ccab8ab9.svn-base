
package com.bis.auth;

import java.io.IOException;
import java.sql.SQLException;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

import com.bis.service.UserService;
import com.bis.vo.re.TbOmmUserVO;

/**
 * 
 * <PRE>
 * System Name		: 인천 BIS - 운영단말
 * Business Name	:
 * Class Name		: LogoutSuccessHandler.java
 * Description		:
 * Modification History
 * 	수정일		수정자		수정내용
 * ------	------	-------------------
 * 2017.11.16  박경원      최초생성
 * </pre>
 * @version
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public class LogoutSuccessHandler extends SimpleUrlLogoutSuccessHandler {
	private Logger logger = LogManager.getLogger(this.getClass());
	
	@Resource(name="userService")
	private UserService userService;
	
	@Override
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
		String refererUrl = request.getHeader("Referer");
        TbOmmUserVO vo = (TbOmmUserVO) authentication.getPrincipal();
        
        logger.debug(vo.getUserid() + " logout, from = " + refererUrl);
        
        try {
			userService.updateUserLogin(vo);
		} catch (SQLException e) {
			logger.error("로그아웃  정보 업데이트 Exception " + e.getMessage());
		}
        
        setDefaultTargetUrl("/error.view?code=100");
        super.onLogoutSuccess(request, response, authentication); 
	}
	
	
}
