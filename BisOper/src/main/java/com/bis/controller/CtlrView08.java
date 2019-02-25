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
 * Class Name 	  : CtlrView08.java
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
public class CtlrView08 {

	/**
	 * BMS - 정류장 이력 조회
	 */
	@RequestMapping(value = "/v801.view") 
	public ModelAndView v801(Model model, HttpServletRequest request
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
		
		mv.setViewName("view08/v801");
        return mv;
		
	}
	
	/**
	 * BMS - 배차결과 이력조회
	 */
	@RequestMapping(value = "/v802.view") 
	public ModelAndView v802(Model model, HttpServletRequest request
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
		
		mv.setViewName("view08/v802");
        return mv;
		
	}
	
	/**
	 * BMS - 버스 노선이탈 위반 이력 통계
	 */
	@RequestMapping(value = "/v803.view") 
	public ModelAndView v803(Model model, HttpServletRequest request
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
		
		mv.setViewName("view08/v803");
        return mv;
		
	}
	
	/**
	 * BMS - 버스 속도위반 이력
	 */
	@RequestMapping(value = "/v804.view") 
	public ModelAndView v804(Model model, HttpServletRequest request
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
		
		mv.setViewName("view08/v804");
        return mv;
		
	}
	
	/**
	 * BMS - 버스 운행거리 이력
	 */
	@RequestMapping(value = "/v805.view") 
	public ModelAndView v805(Model model, HttpServletRequest request
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
		
		mv.setViewName("view08/v805");
        return mv;
		
	}
	
	/**
	 * BMS - 교통카드 집계자료
	 */
	@RequestMapping(value = "/v806.view") 
	public ModelAndView v806(Model model, HttpServletRequest request
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
		
		mv.setViewName("view08/v806");
        return mv;
		
	}
	
	//######################
	
	/*** 통신데이터관리 - 차량별 수집현황 조회*/
	@RequestMapping(value = "/v0801.view") 
	public ModelAndView v0801(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view08/v0801");
        return mv;
	}
	
	/*** 통신데이터관리 - 정류소 수집현황 조회*/
	@RequestMapping(value = "/v0802.view") 
	public ModelAndView v0802(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view08/v0802");
        return mv;
	}
	
	/*** 통신데이터관리 - 차량별 통신수집이력 조회*/
	@RequestMapping(value = "/v0803.view") 
	public ModelAndView v0803(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view08/v0803");
        return mv;
	}
	
	/*** 통신데이터관리 - 차량별 통신수집집계 조회*/
	@RequestMapping(value = "/v0804.view") 
	public ModelAndView v0804(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view08/v0804");
        return mv;
	}
	
	/*** 통신데이터관리 - 노선별일자별 평균수집율 조회*/
	@RequestMapping(value = "/v0805.view") 
	public ModelAndView v0805(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view08/v0805");
        return mv;
	}
}
