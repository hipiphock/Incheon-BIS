package com.bis.controller;

import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 시스템 운영
 * Class Name 	  : CtlrView02.java
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
public class CtlrView02 {
	
	
	/**
	 * 시스템 운영 - SMS 알림 관리 
	 */
	@RequestMapping(value = "/v204.view") 
	public ModelAndView v204(Model model, HttpServletRequest request
			,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view02/v204");
        return mv;
		
	}
	
	///######################
	/*** 배차관리 - 배차계획입력현황조회*/
	@RequestMapping(value = "/v0201.view") 
	public ModelAndView v0201(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view02/v0201");
        return mv;
	}
	
	/*** 배차관리 - 배차준수현황조회*/
	@RequestMapping(value = "/v0202.view") 
	public ModelAndView v0202(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view02/v0202");
        return mv;
	}
	
	/*** 배차관리 - 운행정시성현황조회*/
	@RequestMapping(value = "/v0203.view") 
	public ModelAndView v0203(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view02/v0203");
        return mv;
	}
}
