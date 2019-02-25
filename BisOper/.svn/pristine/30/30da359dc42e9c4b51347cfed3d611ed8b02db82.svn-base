package com.bis.auth;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

public class BisAccessDeniedHandler implements AccessDeniedHandler {

	private String movePage;

	public void setMovePage(String page) {
		this.movePage = page;
	}
	
	@Override
	public void handle(HttpServletRequest req, HttpServletResponse resp, AccessDeniedException e) throws IOException, ServletException {
		req.getRequestDispatcher(movePage).forward(req, resp);
	}

}
