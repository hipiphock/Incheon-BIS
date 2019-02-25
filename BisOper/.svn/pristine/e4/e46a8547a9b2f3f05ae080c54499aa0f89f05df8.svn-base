package com.bis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.ObeService;

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
public class CtlrView04 {

	@Resource(name="obeService")
	private ObeService obeService;
	/**
	 * OBE 관리 - OBE 정보관리  
	 */
	@RequestMapping(value = "/v401.view") 
	public ModelAndView v401(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			//시스템 상의 버전 조회
			List<String> versionList = obeService.selectObeVersionList();
			System.out.println(versionList.get(0));
			
			resultMap.put("firmware_version", versionList.get(0));
			resultMap.put("info_version", versionList.get(1));
			resultMap.put("info_reserve_version", versionList.get(2));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v401");
        return mv;
		
	}
	
	//################
	/*** 운행서비스평가지원 - 운행위반정보조회*/
	@RequestMapping(value = "/v0401.view") 
	public ModelAndView v0401(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0401");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행위반정보분석*/
	@RequestMapping(value = "/v0402.view") 
	public ModelAndView v0402(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0402");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 통과시간대비제공정보비교*/
	@RequestMapping(value = "/v0403.view") 
	public ModelAndView v0403(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0403");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 통과시간대비제공정보비교 조회*/
	@RequestMapping(value = "/v0404.view") 
	public ModelAndView v0404(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0404");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행위반사항통보*/
	@RequestMapping(value = "/v0405.view") 
	public ModelAndView v0405(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0405");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행위반패널티조회*/
	@RequestMapping(value = "/v0406.view") 
	public ModelAndView v0406(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0406");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행평가 - 운행정시성통계조회*/
	@RequestMapping(value = "/v0407.view") 
	public ModelAndView v0407(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0407");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행평가 - 버스몰림율통계조회*/
	@RequestMapping(value = "/v0408.view") 
	public ModelAndView v0408(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0408");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행평가 - 배차준수율통계조회*/
	@RequestMapping(value = "/v0409.view") 
	public ModelAndView v0409(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0409");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행평가 - 준법운행율통계조회*/
	@RequestMapping(value = "/v0410.view") 
	public ModelAndView v0410(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0410");
        return mv;
	}
	
	/*** 운행서비스평가지원 - 운행평가 - 운전자운행실적통계조회*/
	@RequestMapping(value = "/v0411.view") 
	public ModelAndView v0411(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view04/v0411");
        return mv;
	}
}
