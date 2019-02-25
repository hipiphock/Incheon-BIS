package com.bis.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : 
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Controller
public class CtlrView10 {
	
	
	/*** 운영정보관리  - 사용자관리 - 사용자권한관리, 사용자정보관리*/
	@RequestMapping(value = "/v1001.view") 
	public ModelAndView v1001(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view10/v1001");
        return mv;
	}
	
	/*** 운영정보관리  - 사용자관리 - 로그인이력조회*/
	@RequestMapping(value = "/v1002.view") 
	public ModelAndView v1002(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view10/v1002");
        return mv;
	}
	
	/*** 운영정보관리  - 운영코드관리 - 코드관리*/
	@RequestMapping(value = "/v1003.view") 
	public ModelAndView v1003(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view10/v1003");
        return mv;
	}
	
	/*** 운영정보관리  - 운영코드관리 - 행정구역 정보조회*/
	@RequestMapping(value = "/v1004.view") 
	public ModelAndView v1004(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view10/v1004");
        return mv;
	}
	
	/*** 운영정보관리  - 운영환경관리 - 운영파라미터관리*/
	@RequestMapping(value = "/v1005.view") 
	public ModelAndView v1005(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view10/v1005");
        return mv;
	}
	
	/*** 운영정보관리  - 운영환경관리 - 운행위반기준정보관리*/
	@RequestMapping(value = "/v1006.view") 
	public ModelAndView v1006(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view10/v1006");
        return mv;
	}	
	
}
