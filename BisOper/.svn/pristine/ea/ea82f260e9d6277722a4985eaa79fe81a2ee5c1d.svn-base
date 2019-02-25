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
 * Class Name 	  : TbAdmBusrouteVO.java
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
public class CtlrView03 {
	
	/**
	 * 기반정보 - 정류장 관리 
	 * param1 : stop_id
	 */
	@RequestMapping(value = "/v301.view" /*, method = {RequestMethod.GET, RequestMethod.POST} */)
	public ModelAndView v301(Model model, HttpServletRequest request
			,@RequestParam(value="param1", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		System.out.println("#paramId " + paramId);
		
		try {
			resultMap.put("stop_id", paramId);
		} catch (Exception e) {
			System.out.println("#v301 Exception " + e.toString());
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v301");
        return mv;
		
	}
	/**
	 * 기반정보 - 노선 정보 관리
	 */
	@RequestMapping(value = "/v302.view") 
	public ModelAndView v302(Model model, HttpServletRequest request
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
		
		mv.setViewName("view03/v302");
        return mv;
		
	}
	
	/**
	 * 기반정보 - 노선시간표 관리 
	 */
	@RequestMapping(value = "/v303.view") 
	public ModelAndView v303(Model model, HttpServletRequest request
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
		
		mv.setViewName("view03/v303");
        return mv;
		
	}
	
	/**
	 * 기반정보 - 차량 정보 조회 
	 */
	@RequestMapping(value = "/v304.view") 
	public ModelAndView v304(Model model, HttpServletRequest request
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
		
		mv.setViewName("view03/v304");
        return mv;
		
	}
	
	
	
	
	//#################
	/*** 메시지관리 - 문자메시지전송*/
	@RequestMapping(value = "/v0301.view") 
	public ModelAndView v0301(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v0301");
        return mv;
	}
	
	/*** 메시지관리 - 안내기통신메시지현황/이력*/
	@RequestMapping(value = "/v0302.view") 
	public ModelAndView v0302(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v0302");
        return mv;
	}
	
	/*** 메시지관리 - 파일다운로드*/
	@RequestMapping(value = "/v0303.view") 
	public ModelAndView v0303(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v0303");
        return mv;
	}
	
	/*** 메시지관리 - 제공시나리오관리*/
	@RequestMapping(value = "/v0304.view") 
	public ModelAndView v0304(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v0304");
        return mv;
	}
	
	/*** 메시지관리 - 제공정보표출현황조회*/
	@RequestMapping(value = "/v0305.view") 
	public ModelAndView v0305(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v0305");
        return mv;
	}
	
	/*** 메시지관리 - 파라미터전송*/
	@RequestMapping(value = "/v0306.view") 
	public ModelAndView v0306(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v0306");
        return mv;
	}
	
	/*** 메시지관리 - 안내기부가정보조회*/
	@RequestMapping(value = "/v0307.view") 
	public ModelAndView v0307(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view03/v0307");
        return mv;
	}
	
}
