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
public class CtlrView11 {

	/*** 외부연계정보 - 교통상황 연계정보조회*/
	@RequestMapping(value = "/v1101.view") 
	public ModelAndView v1101(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view11/v1101");
        return mv;
	}
	
	/*** 외부연계정보 - 교통카드 연계정보관리*/
	@RequestMapping(value = "/v1102.view") 
	public ModelAndView v1102(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view11/v1102");
        return mv;
	}
	
	/*** 외부연계정보 - 연계정보 송수신이력조회*/
	@RequestMapping(value = "/v1103.view") 
	public ModelAndView v1103(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view11/v1103");
        return mv;
	}
	
	/*** 외부연계정보 - 뉴스정보 수집이력조회*/
	@RequestMapping(value = "/v1104.view") 
	public ModelAndView v1104(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view11/v1104");
        return mv;
	}
	
	/*** 외부연계정보 - 기상정보 수집이력조회*/
	@RequestMapping(value = "/v1105.view") 
	public ModelAndView v1105(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view11/v1105");
        return mv;
	}
	
	/*** 외부연계정보 - 연계기관/담당자관리*/
	@RequestMapping(value = "/v1106.view") 
	public ModelAndView v1106(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view11/v1106");
        return mv;
	}
	
	
	
}
