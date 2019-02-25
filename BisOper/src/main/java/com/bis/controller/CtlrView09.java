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
public class CtlrView09 {

	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 회차별운행이력조회*/
	@RequestMapping(value = "/v0901.view") 
	public ModelAndView v0901(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0901");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 정류소별 운행이력 조회*/
	@RequestMapping(value = "/v0902.view") 
	public ModelAndView v0902(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0902");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 부당운행 이력조회*/
	@RequestMapping(value = "/v0903.view") 
	public ModelAndView v0903(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0903");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 운전자메시지 이력 조회*/
	@RequestMapping(value = "/v0904.view") 
	public ModelAndView v0904(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0904");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 시공간 운행이력 조회*/
	@RequestMapping(value = "/v0905.view") 
	public ModelAndView v0905(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0905");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 노선별운행대수조회*/
	@RequestMapping(value = "/v0906.view") 
	public ModelAndView v0906(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0906");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 차량단말기 제공이력조회*/
	@RequestMapping(value = "/v0907.view") 
	public ModelAndView v0907(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0907");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행이력조회 - 단말기수집이력조회*/
	@RequestMapping(value = "/v0908.view") 
	public ModelAndView v0908(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0908");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행통계조회 - 노선별 소통통계*/
	@RequestMapping(value = "/v0909.view") 
	public ModelAndView v0909(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0909");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행통계조회 - 도로별 소통통계*/
	@RequestMapping(value = "/v0910.view") 
	public ModelAndView v0910(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0910");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행통계조회 - 부당운행 통계조회*/
	@RequestMapping(value = "/v0911.view") 
	public ModelAndView v0911(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0911");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행통계조회 - 돌발상황 통계조회*/
	@RequestMapping(value = "/v0912.view") 
	public ModelAndView v0912(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0912");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 운행통계조회 - 운행이력 통계조회*/
	@RequestMapping(value = "/v0913.view") 
	public ModelAndView v0913(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0913");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 서비스이용 통계조회*/
	@RequestMapping(value = "/v0914.view") 
	public ModelAndView v0914(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0914");
        return mv;
	}
	
	/*** 운행이력/통계정보분석 - 정류소별 SMS 건수 조회*/
	@RequestMapping(value = "/v0915.view") 
	public ModelAndView v0915(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view09/v0915");
        return mv;
	}
	
}
