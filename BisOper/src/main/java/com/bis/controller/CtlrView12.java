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
public class CtlrView12 {

	/*** 보고서 - 시설물상태현황*/
	@RequestMapping(value = "/v1201.view") 
	public ModelAndView v1201(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view12/v1201");
        return mv;
	}
	
	/*** 보고서 - 노선현황*/
	@RequestMapping(value = "/v1202.view") 
	public ModelAndView v1202(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view12/v1202");
        return mv;
	}
	
	/*** 보고서 - 배차계획서*/
	@RequestMapping(value = "/v1203.view") 
	public ModelAndView v1203(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view12/v1203");
        return mv;
	}
	
	/*** 보고서 - 일일버스운행정보*/
	@RequestMapping(value = "/v1204.view") 
	public ModelAndView v1204(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view12/v1204");
        return mv;
	}
	
	
}
