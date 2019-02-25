package com.bis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;





import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.DispatchService;
import com.bis.service.USMService;
import com.bis.util.Const;
import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbBmhIncidRespVO;
import com.bis.vo.re.TbBmmIncidScnroVO;
import com.bis.vo.re.TbIchDayAllocPlanVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 버스운행관리 / 돌발상황관리
 * Business Name  : 
 * Class Name 	  : CtlrUSM.java
 * Description 	  : Unexpected Situation Manager
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.14	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Controller
@RequestMapping(value = "/usm")
public class CtlrUSM {
	
	@Resource(name = "usmService")
	private USMService usmService;
	
	private Logger logger = LogManager.getLogger(this.getClass());
	
	// 버스운행관리 / 돌발상황관리 / 돌발상황대응이력관리
	@RequestMapping(value = "/selectIncidReactHisList.do")
	public ModelAndView selectIncidReactHisList(Model model, HttpServletRequest request, TbBmhIncidRespVO vo){
				
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbBmhIncidRespVO>> resultMap = new HashMap<String, List<TbBmhIncidRespVO>>();
		try{
			List<TbBmhIncidRespVO> resultList = usmService.selectIncidReactHisList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e){
			logger.error("##selectIncidReachtHisList Exception" + e.toString())	;
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	// 버스운행관리 / 돌발상황관리 / 돌발대응시나리오관리
	@RequestMapping(value = "/selectIncidReactScnroList.do")
	public ModelAndView selectIncidReactScnroList(Model model, HttpServletRequest request,
			@RequestParam(value = "incidtpcd", required = false, defaultValue = "") String incidentType,
			@RequestParam(value = "incidresptpcd", required = false, defaultValue = "") String responseType){
				
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbBmmIncidScnroVO>> resultMap = new HashMap<String, List<TbBmmIncidScnroVO>>();
		try {
			TbBmmIncidScnroVO vo = new TbBmmIncidScnroVO();
			vo.setIncidtpcd(incidentType);
			vo.setIncidresptpcd(responseType);
			List<TbBmmIncidScnroVO> resultList = usmService.selectIncidReactScnroList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectIncidReactScnroList Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	// 버스운행관리 / 돌발상황관리 / 돌발대응시나리오관리 - 신규등록
	@RequestMapping(value = "/insertIncidReactScnro.do")
	public ModelAndView insertIncidReactScnro(Model model, HttpServletRequest request, TbBmmIncidScnroVO vo){
		
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			usmService.insertIncidReactScnro(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##insertIncidReactScnro exception" + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	// 버스운행관리 / 돌발상황관리 / 돌발대응시나리오관리 - 수정
	@RequestMapping(value = "/modifyIncidReactScnro.do")
	public ModelAndView modifyIncidReactScnro(Model model, HttpServletRequest request, 
			TbBmmIncidScnroVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			usmService.modifyIncidReactScnro(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##modifyIncidReactScnro exception" + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	// 버스운행관리 / 돌발상황관리 / 돌발대응시나리오관리 - 삭제
	@RequestMapping(value = "/deleteIncidReactScnro.do")
	public ModelAndView deleteIncidReactScnro(Model model, HttpServletRequest request, TbBmmIncidScnroVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			usmService.deleteIncidReactScnro(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##deleteIncidReactScnro exception" + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	// 버스운행관리 / 돌발상황관리 / 돌발상황발생대응관리
	@RequestMapping(value = "/selectRespHistList.do")
	public ModelAndView selectRespHistList(Model model, HttpServletRequest request,
			@RequestParam(value = "incidtpcd", required = false, defaultValue = "") String incidentType){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbBmhIncidRespVO>> resultMap = new HashMap<String, List<TbBmhIncidRespVO>>();
		try {
			TbBmhIncidRespVO vo = new TbBmhIncidRespVO();
			vo.setIncidtpcd(incidentType);
			List<TbBmhIncidRespVO> resultList = usmService.selectRespHistList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRespHistList Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	// 버스운행관리 / 돌발상황관리 / 돌발상황발생대응관리 - 신규등록
	@RequestMapping(value = "/insertReaction.do")
	public ModelAndView insertReaction(Model model, HttpServletRequest request, TbBmhIncidRespVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			usmService.insertReaction(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##insertReaction exception" + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	// 버스운행관리 / 돌발상황관리 / 돌발상황발생대응관리 - 수정
	@RequestMapping(value = "/modifyReaction.do")
	public ModelAndView modifyReaction(Model model, HttpServletRequest request, TbBmmIncidScnroVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			usmService.modifyReaction(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##modifyReaction exception" + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
}
