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
public class CtlrView06 {

	/**
	 * 이력/통계 - BIT 장애 이력 
	 */
	@RequestMapping(value = "/v601.view") 
	public ModelAndView v601(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view06/v601");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - BIT 제공정보 이력 조회 
	 */
	@RequestMapping(value = "/v602.view") 
	public ModelAndView v602(Model model, HttpServletRequest request
			,@RequestParam(value="param1", required=false, defaultValue="") String paramId1
			,@RequestParam(value="param2", required=false, defaultValue="") String paramId2) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			
			resultMap.put("bitid", paramId1);
			resultMap.put("bstopnm", URLDecoder.decode(paramId2, "UTF-8"));
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v602");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - BIT 충격감지 이력 
	 */
	@RequestMapping(value = "/v603.view") 
	public ModelAndView v603(Model model, HttpServletRequest request
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
		
		mv.setViewName("view06/v603");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - BIT 상태 이력
	 */
	@RequestMapping(value = "/v604.view") 
	public ModelAndView v604(Model model, HttpServletRequest request
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
		
		mv.setViewName("view06/v604");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 초기 접속 이력 
	 */
	@RequestMapping(value = "/v605.view") 
	public ModelAndView v605(Model model, HttpServletRequest request
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
		
		mv.setViewName("view06/v605");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - BIT 파일 이력
	 */
	@RequestMapping(value = "/v606.view") 
	public ModelAndView v606(Model model, HttpServletRequest request
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
		
		mv.setViewName("view06/v606");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 버스운행 이력 조회 
	 */
	@RequestMapping(value = "/v607.view") 
	public ModelAndView v607(Model model, HttpServletRequest request
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
		
		mv.setViewName("view06/v607");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 버스 돌발 이력 통계
	 */
	@RequestMapping(value = "/v608.view") 
	public ModelAndView v608(Model model, HttpServletRequest request
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
		
		mv.setViewName("view06/v608");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 버스 위반 이력 통계
	 */
	@RequestMapping(value = "/v609.view") 
	public ModelAndView v609(Model model, HttpServletRequest request
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
		
		mv.setViewName("view06/v609");
        return mv;
		
	}
	
	/**
	 * BIT 제어이력
	 */
	@RequestMapping(value = "/v610.view") 
	public ModelAndView v610(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v610");
        return mv;
	}
	
	/**
	 * 이력/통계 - 차량단말기 제공이력
	 */
	@RequestMapping(value = "/v611.view") 
	public ModelAndView v611(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view06/v611");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 차량단말기 수집이력
	 */
	@RequestMapping(value = "/v612.view") 
	public ModelAndView v612(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view06/v612");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 시공간운행이력
	 */
	@RequestMapping(value = "/v613.view") 
	public ModelAndView v613(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view06/v613");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 노선별 운행 대수
	 */
	@RequestMapping(value = "/v614.view") 
	public ModelAndView v614(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view06/v614");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 회차별 운행 이력
	 */
	@RequestMapping(value = "/v615.view") 
	public ModelAndView v615(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view06/v615");
        return mv;
		
	}
	
	/**
	 * 이력/통계 - 회차별 운행 이력
	 */
	@RequestMapping(value = "/v616.view") 
	public ModelAndView v616(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("view06/v616");
        return mv;
		
	}
	//######################
	
	/*** 시설물관리 - 기본정보관리 - 차량단말기 기초정보관리*/
	@RequestMapping(value = "/v0601.view") 
	public ModelAndView v0601(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0601");
        return mv;
	}
	
	/*** 시설물관리 - 기본정보관리 - 정류소안내기 기초정보관리*/
	@RequestMapping(value = "/v0602.view") 
	public ModelAndView v0602(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0602");
        return mv;
	}
	
	/*** 시설물관리 - 기본정보관리 - 전산장비 기초정보관리*/
	@RequestMapping(value = "/v0603.view") 
	public ModelAndView v0603(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0603");
        return mv;
	}
	
	/*** 시설물관리 - 시설물상태감시/제어 - 차량단말기 상태정보조회/제어*/
	@RequestMapping(value = "/v0604.view") 
	public ModelAndView v0604(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0604");
        return mv;
	}
	
	/*** 시설물관리 - 시설물상태감시/제어 - 정류소안내기 상태정보 조회/제어*/
	@RequestMapping(value = "/v0605.view") 
	public ModelAndView v0605(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0605");
        return mv;
	}
	
	/*** 시설물관리 - 유지보수관리 - 시설물유지보수관리 - BIT*/
	@RequestMapping(value = "/v0606.view") 
	public ModelAndView v0606(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0606");
        return mv;
	}
	
	/*** 시설물관리 - 유지보수관리 - 시설물유지보수관리 - BMT*/
	@RequestMapping(value = "/v0607.view") 
	public ModelAndView v0607(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0607");
        return mv;
	}
	
	/*** 시설물관리 - 유지보수관리 - 시설물유지보수관리 - 무선 AP*/
	@RequestMapping(value = "/v0608.view") 
	public ModelAndView v0608(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0608");
        return mv;
	}
	
	/*** 시설물관리 - 유지보수관리 - 유지보수업체정보관리*/
	@RequestMapping(value = "/v0609.view") 
	public ModelAndView v0609(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0609");
        return mv;
	}
	
	/*** 시설물관리 - 장애통계조회*/
	@RequestMapping(value = "/v0610.view") 
	public ModelAndView v0610(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0610");
        return mv;
	}
	
	/*** 시설물관리 - 이력관리 - BIT외부충격이력*/
	@RequestMapping(value = "/v0611.view") 
	public ModelAndView v0611(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view06/v0611");
        return mv;
	}
}
