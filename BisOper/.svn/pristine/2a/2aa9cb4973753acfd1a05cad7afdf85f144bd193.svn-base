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

import com.bis.service.DispatchService;
import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbIchDayAllocPlanVO;
import com.bis.vo.re.TbIcmRoutemjbstopVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 배차관리
 * Business Name  : 
 * Class Name 	  : CtlrDispatch.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.10	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/dispatch")
public class CtlrDispatch{
	
	@Resource(name = "dispatchService")
	private DispatchService dispatchService;

	private Logger logger = LogManager.getLogger(this.getClass());
	
	/**
	 * 배차관리 / 배차계획입력현황조회
	 * @param model
	 * @param request
	 * @param compID
	 * @param routeID
	 * @return
	 */
	@RequestMapping(value = "/selectDispatchPlanList.do")
	public ModelAndView selectDispatchPlanList(Model model, HttpServletRequest request,
			@RequestParam(value = "companyID", required = false, defaultValue = "") String compID,
			@RequestParam(value = "routeID", required = false, defaultValue = "") String routeID){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIchDayAllocPlanVO>> resultMap = new HashMap<String, List<TbIchDayAllocPlanVO>>();
		try{
			TbIchDayAllocPlanVO vo = new TbIchDayAllocPlanVO();
			vo.setCompid(compID);
			vo.setRouteid(routeID);
			List<TbIchDayAllocPlanVO> resultList = dispatchService.selectDispatchPlanList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e){
			logger.error("##selectDispatchPlanList Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 배차관리 / 배차준수현황조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectCompRouteList.do")
	public ModelAndView selectCompRouteList(Model model, HttpServletRequest request, TbAdmRouteToComVO vo){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmRouteToComVO>> resultMap = new HashMap<String, List<TbAdmRouteToComVO>>();
		try{
			List<TbAdmRouteToComVO> resultList = dispatchService.selectCompRouteList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e){
			logger.error("##selectCompRouteList Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 배차관리 / 배차준수현황조회 / 배차준수현황
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectComplianceStatusList")
	public ModelAndView selectComplianceStatusList(Model model , HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmRouteToComVO>> resultMap = new HashMap<String, List<TbAdmRouteToComVO>>();
		try{
			List<TbAdmRouteToComVO> resultList = dispatchService.selectComplianceStatusList();
			resultMap.put("resultList", resultList);
		} catch (Exception e){
			logger.error("##selectComplianceStatusList Exception" + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 배차관리 / 운행정시성현황조회 / 주요 정류소 출력
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMainStopList")
	public ModelAndView selectMainStopList(Model model, HttpServletRequest request, TbIcmRoutemjbstopVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIcmRoutemjbstopVO>> resultMap = new HashMap<String, List<TbIcmRoutemjbstopVO>>();
		try {
			List<TbIcmRoutemjbstopVO> resultList = dispatchService.selectMainStopList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectMainStopList Exception" + e.toString());
		}
		return mv;
	}
	
	/**
	 * 배차관리 / 운행정시성현황조회 / 운행정시성현황
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectOperRegularityList")
	public ModelAndView selectOperRegularityList(Model model, HttpServletRequest request, TbIchDayAllocPlanVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIchDayAllocPlanVO>> resultMap = new HashMap<String, List<TbIchDayAllocPlanVO>>();
		try {
			List<TbIchDayAllocPlanVO> resultList = dispatchService.selectOperRegularityList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectOperRegularityList Exception" + e.toString());
		}
		return mv;
	}
}
