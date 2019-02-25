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
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.RunService;
import com.bis.vo.re.TbAdhRoutepnodeupdVO;
import com.bis.vo.re.TbDmhBusrunrecVO;
import com.bis.vo.re.TbDmhTmspaceChartVO;
import com.bis.vo.re.TbDmsAllocobsrvVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 회차
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrRun.java
 * Description 	  : 
 * Modification History 
 *   수정일                수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.30	박주언		created new file
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Controller
@RequestMapping(value = "/run")
public class CtlrRun {
	
	@Resource(name = "runService")
	private RunService runService;
	
	private Logger logger = LogManager.getLogger(this.getClass());
	
	/**
	 * 이력통계/분석 - 운행이력조회 - 부당운행이력조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value="/selectBusRunList.do")
	public ModelAndView selectBusRunList(Model model, HttpServletRequest request, TbDmhBusrunrecVO vo){

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbDmhBusrunrecVO>> resultMap = new HashMap<String, List<TbDmhBusrunrecVO>>();

		try {
			List<TbDmhBusrunrecVO> resultList = runService.selectBusRunList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusRunEvent exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 운행평가 - 배차준수율통계조회 - 노선명 출력 리스트
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value="/selectRunObeyRoutenoList.do")
	public ModelAndView selectRunObeyRoutenoList(Model model, HttpServletRequest request, TbDmsAllocobsrvVO vo){

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbDmsAllocobsrvVO>> resultMap = new HashMap<String, List<TbDmsAllocobsrvVO>>();

		try {
			List<TbDmsAllocobsrvVO> resultList = runService.selectRunObeyRoutenoList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRunObeyRoutenoList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	
	/**
	 * 운행평가 - 배차준수율통계조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value="/selectRunObey.do")
	public ModelAndView selectRunPunctuality(Model model, HttpServletRequest request,
			@RequestParam("search_startdt") String search_startdt,
			@RequestParam("search_enddt") String search_enddt,
			@RequestParam("proccyclcd") String proccyclcd,
			@RequestParam(value ="compid", required=false) String compid){

		ModelAndView mv = new ModelAndView();
		Map<String, List<Map<String, String>>> resultMap = new HashMap<String, List<Map<String, String>>>();

		try {
			TbDmsAllocobsrvVO vo = new TbDmsAllocobsrvVO();
			vo.setSearch_startdt(search_startdt);
			vo.setSearch_enddt(search_enddt);
			vo.setProccyclcd(proccyclcd);
			vo.setCompid(compid);
			
			//serviceImpl에서 분기되어 리턴
			List<Map<String, String>> resultList = runService.selectRunObey(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRunObey exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	};
	
	
	/**
	 * 이력통계/분석 - 운행이력조회 - 시공간 운행이력 조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value="/selectStopListforGrid.do")
	public ModelAndView selectStopListforGrid(Model model, HttpServletRequest request,
			@RequestParam("search_date") String search_date,
			@RequestParam("routeid") String routeid){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdhRoutepnodeupdVO>> resultMap = new HashMap<String, List<TbAdhRoutepnodeupdVO>>();

		try {
			TbAdhRoutepnodeupdVO vo = new TbAdhRoutepnodeupdVO();
			vo.setRouteid(routeid);
			search_date = search_date.replaceAll("-", "");
			search_date = search_date + "235959";
			vo.setSearch_date(search_date);			
			List<TbAdhRoutepnodeupdVO> resultList = runService.selectStopListforGrid(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopListforGrid exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 이력통계/분석 - 운행이력조회 - 시공간 운행이력 조회
	 * @param model
	 * @param request
	 * @param busid
	 * @return
	 */
	@RequestMapping(value="/selectTimeSpaceBusRunList.do")
	public ModelAndView selectTimeSpaceBusRunList(Model model, HttpServletRequest request,
//			@RequestParam("search_date") String search_date,
//			@RequestParam(value="compid", required=false, defaultValue="") String compid,
//			@RequestParam(value="routeid", required=true) String routeid,
//			@RequestParam(value="busList", required=true) List<String> busList)
			@ModelAttribute(value="param") TbDmhTmspaceChartVO vo)
	{
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbDmhTmspaceChartVO>> resultMap = new HashMap<String, List<TbDmhTmspaceChartVO>>();

		try {
//			TbDmhTmspaceChartVO vo = new TbDmhTmspaceChartVO();
			String search_date = vo.getSearch_date();
			search_date = search_date.replaceAll("-", "");
			vo.setSearch_start_date(search_date + "000000");
			vo.setSearch_end_date(search_date + "235959");
//			vo.setCompid(compid);
//			vo.setRouteid(routeid);
//			vo.setBusList(busList);
			List<TbDmhTmspaceChartVO> resultList = runService.selectTimeSpaceBusRunList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectTimeSpaceBusRunList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	// used for selectTimeSpaceBusRunList
	class Parameter{
		String search_date;
		String compid;
		String routeid;
		List<String> busList;
		
		public Parameter(String search_date, String compid, String routeid, List<String> busList){
			this.search_date = search_date;
			this.compid = compid;
			this.routeid = routeid;
			this.busList = busList;
		}
	}
}