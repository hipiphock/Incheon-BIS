package com.bis.auth;

import java.io.IOException;
import java.sql.SQLException;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import com.bis.service.UserService;
import com.bis.vo.re.TbOmmUserVO;



/**
 * 
 * <PRE>
 * System Name		: 인천 BIS - 운영단말
 * Business Name	:
 * Class Name		: LoginSuccessHandler.java
 * Description		:
 * Modification History
 * 	수정일		수정자		수정내용
 * ------	------	-------------------
 * 2017.11.16  박경원        접속이력 추가
 * </pre>
 * @version
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
	private Logger logger = LogManager.getLogger(this.getClass());
//	private String targetUrlParameter;
	@Resource(name = "userService")
	private UserService userService;
	
	@Override 
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication auth) throws IOException, ServletException { 
		
		HttpSession session = (HttpSession) request.getSession();
		
		TbOmmUserVO vo = (TbOmmUserVO) auth.getPrincipal();
		session.setAttribute("userName", vo.getUsername());
		session.setAttribute("userId", vo.getUserid());
		session.setAttribute("rank", vo.getAuthid());
		session.setAttribute("usertpcd", vo.getUsertpcd());
//		session.setAttribute("menuAuthMap", vo.getMenuAuthMap());
		
		String remoteAddr = request.getHeader("X-FORWARDED-FOR");
        if (remoteAddr == null || "".equals(remoteAddr)) {
            remoteAddr = request.getRemoteAddr();
        }
        
        logger.debug("IP = " + remoteAddr);
        
        vo.setIpaddr(remoteAddr);
		
        try {
			userService.insertUserLogin(vo);
		} catch (SQLException e) {
			logger.error("접속이력 등록 Exception" + e.getMessage());
		}
//		super.onAuthenticationSuccess(request, response, auth); 
		getRedirectStrategy().sendRedirect(request, response, "/v102.view");
	}
}
