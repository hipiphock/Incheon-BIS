package com.bis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.EvaluationService;
import com.bis.vo.re.TbDmhTmspaceVO;
import com.bis.vo.re.TbDmsBuscrowdVO;
import com.bis.vo.re.TbDmsRunonschedVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 운행서비스평가
 * Business Name  : 
 * Class Name 	  : CtlrOperEval.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.18	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Controller
@RequestMapping(value = "/evaluation")
public class CtlrOperEval {
	
	@Resource
	private EvaluationService evaluationService;
	
	private Logger logger = LogManager.getLogger(this.getClass());
	
	@RequestMapping(value = "/selectViolentOperHistList")
	public ModelAndView selectViolentOperHistList(Model model, HttpServletRequest request, TbDmhTmspaceVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbDmhTmspaceVO>> resultMap = new HashMap<String, List<TbDmhTmspaceVO>>();
		try {
			List<TbDmhTmspaceVO> resultList = evaluationService.selectViolentOperHistList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectViolentOperHistList Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 운행평가 - 운행정시성통계조회 - 하단에서 column을 가져온다.
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "selectRouteColumn")
	public ModelAndView selectRouteColumn(Model model, HttpServletRequest request, TbDmsRunonschedVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbDmsRunonschedVO>> resultMap = new HashMap<String, List<TbDmsRunonschedVO>>();
		try {
			List<TbDmsRunonschedVO> resultList = evaluationService.selectRouteColumn(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteColumn Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 운행평가 - 운행정시성통계조회 - get main data
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectOperTiming")
	public ModelAndView selectOperTiming(Model model, HttpServletRequest request,
			@RequestParam(value = "compid", required = true, defaultValue = "") String compid,
			@RequestParam("proccyclcd") String proccyclcd,
			@RequestParam("search_start_date") String search_start_date,
			@RequestParam("search_end_date") String search_end_date){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<Map<String, String>>> resultMap = new HashMap<String, List<Map<String, String>>>();
		try {
			TbDmsRunonschedVO vo = new TbDmsRunonschedVO();
			vo.setSearch_start_date(search_start_date);
			vo.setSearch_end_date(search_end_date);
			vo.setProccyclcd(proccyclcd);
			vo.setCompid(compid);
			
			List<Map<String, String>> resultList = evaluationService.selectOperTiming(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectOperationTiming exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 운행평가 - 버스몰림율통계 - 하단의 column을 가져온다.
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectStopColumn")
	public ModelAndView selectStopColumn(Model model, HttpServletRequest request, TbDmsBuscrowdVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbDmsBuscrowdVO>> resultMap = new HashMap<String, List<TbDmsBuscrowdVO>>();
		try {
			List<TbDmsBuscrowdVO> resultList = evaluationService.selectStopColumn(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteColumn Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 운행평가 - 버스몰림율통계 - get main data
	 * @param model
	 * @param request
	 * @param routeid
	 * @param proccyclcd
	 * @param search_start_date
	 * @param search_end_date
	 * @return
	 */
	@RequestMapping(value = "/selectCongestion")
	public ModelAndView selectCongestion(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid",	required = true) String routeid,
			@RequestParam(value = "proccyclcd",	required = true) String proccyclcd,
			@RequestParam(value = "search_start_date",	required = true) String search_start_date,
			@RequestParam(value = "search_end_date",	required = true) String search_end_date){
		ModelAndView mv = new ModelAndView();
		Map<String, List<Map<String, String>>> resultMap = new HashMap<String, List<Map<String, String>>>();
		try {
			TbDmsBuscrowdVO vo = new TbDmsBuscrowdVO();
			vo.setRouteid(routeid);
			vo.setProccyclcd(proccyclcd);
			vo.setSearch_start_date(search_start_date);
			vo.setSearch_end_date(search_end_date);
			
			List<Map<String, String>> resultList = evaluationService.selectCongestion(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectCongestion exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
}