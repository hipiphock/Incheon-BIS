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
 * Business Name  : 
 * Class Name 	  : CtlrView07.java
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
public class CtlrView07 {

	/**
	 * 분석/가공 - 도착정보 신뢰도 분석 
	 */
	@RequestMapping(value = "/v701.view") 
	public ModelAndView v701(Model model, HttpServletRequest request
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
		
		mv.setViewName("view07/v701");
        return mv;
		
	}
	
	/**
	 * 분석/가공 - 도착정보 신뢰도 분석 - 상세 
	 */
	@RequestMapping(value = "/v701_2.view") 
	public ModelAndView v701_2(Model model, HttpServletRequest request
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
		
		mv.setViewName("view07/v701_2");
        return mv;
		
	}
	
	/**
	 * 분석/가공 - 가공 파라미터
	 */
	@RequestMapping(value = "/v702.view") 
	public ModelAndView v702(Model model, HttpServletRequest request
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
		
		mv.setViewName("view07/v702");
        return mv;
		
	}
	
	/**
	 * 분석/가공 - 가공정보 시뮬레이션 
	 */
	@RequestMapping(value = "/v703.view") 
	public ModelAndView v703(Model model, HttpServletRequest request
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
		
		mv.setViewName("view07/v703");
        return mv;
		
	}
	
	/**
	 * 분석/가공 - 지점별 통행시간 
	 */
	@RequestMapping(value = "/v704.view") 
	public ModelAndView v704(Model model, HttpServletRequest request
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
		
		mv.setViewName("view07/v704");
        return mv;
	}
	
	/**
	 * 도착 정보 신뢰도 상세 
	 */
	@RequestMapping(value = "/v705.view") 
	public ModelAndView v705(Model model, HttpServletRequest request,
			@RequestParam(value="param1", required=true) String param1,
			@RequestParam(value="param2", required=true) String param2,
			@RequestParam(value="param3", required=true) String param3,
			@RequestParam(value="param4", required=true) String param4,
			@RequestParam(value="param5", required=true) String param5,
			@RequestParam(value="param6", required=true) String param6) {
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("start_date_time", param1);
			resultMap.put("end_date_time", param2);
			resultMap.put("start_range", param3);
			resultMap.put("end_range", param4);
			resultMap.put("bit_id", param5);
			resultMap.put("stop_id", URLDecoder.decode(param6, "UTF-8"));
		} catch (Exception e) {
			System.out.println("##v705 e: " + e.toString());
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view07/v705");
        return mv;
	}
	
	/**
	 * 차량별 수집현황
	 */
	@RequestMapping(value = "/v706.view") 
	public ModelAndView v706(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view07/v706");
        return mv;
	}
	
	/**
	 * 정류소 통신 수집현황
	 */
	@RequestMapping(value = "/v707.view") 
	public ModelAndView v707(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view07/v707");
        return mv;
	}
	
	/**
	 * 정류소 통신 수집이력
	 */
	@RequestMapping(value = "/v708.view") 
	public ModelAndView v708(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view07/v708");
        return mv;
	}
	
	/**
	 * 차량별 통신 수집집계
	 */
	@RequestMapping(value = "/v709.view") 
	public ModelAndView v709(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view07/v709");
        return mv;
	}
	
	//#########################
	/*** 차량단말업그레이드 - 무선업그레이드관리*/
	@RequestMapping(value = "/v0701.view") 
	public ModelAndView v0701(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view07/v0701");
        return mv;
	}
	
	/*** 차량단말업그레이드 - 무선업그레이드관리(로드닉스)*/
	@RequestMapping(value = "/v0702.view") 
	public ModelAndView v0702(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view07/v0702");
        return mv;
	}
	
	/*** 차량단말업그레이드 - 유선업그레이드관리*/
	@RequestMapping(value = "/v0703.view") 
	public ModelAndView v0703(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view07/v0703");
        return mv;
	}
	
	/*** 차량단말업그레이드 - 업그레이드현황조회*/
	@RequestMapping(value = "/v0704.view") 
	public ModelAndView v0704(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view07/v0704");
        return mv;
	}
}
