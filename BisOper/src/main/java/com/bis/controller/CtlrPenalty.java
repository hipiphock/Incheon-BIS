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
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.PenaltyService;
import com.bis.util.Const;
import com.bis.vo.re.TbAdhPenaltyTreatVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 운행서비스평가 / 운행위반사항통보
 * Business Name  : 
 * Class Name 	  : CtlrPenalty.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.25	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/penalty")
public class CtlrPenalty {
	
	@Resource
	private PenaltyService penaltyService;
	
	private Logger logger = LogManager.getLogger(this.getClass());
	
	@RequestMapping(value = "/selectPenaltyProcessList")
	public ModelAndView selectPenaltyProcessList(Model model, HttpServletRequest request, TbAdhPenaltyTreatVO vo){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdhPenaltyTreatVO>> resultMap = new HashMap<String, List<TbAdhPenaltyTreatVO>>();
		try{
			List<TbAdhPenaltyTreatVO> resultList = penaltyService.selectPenaltyProcessList(vo);
			resultMap.put("resultList", resultList);
		} catch(Exception e){
			logger.error("##selectPenaltyProcessList Exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "/registerNewPenalty")
	public ModelAndView registerNewPenalty(Model model, HttpServletRequest request, TbAdhPenaltyTreatVO vo,
			HttpSession session){
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			String userID = (String)session.getAttribute("userId");
			vo.setTreat_userid(userID);
			int asdf = penaltyService.registerNewPenalty(vo);
			resultMap.put("result", asdf);
		} catch (Exception e) {
			logger.debug("##registerNewPenalty Exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	
	/**
	 * 운행횟수관리 - 운행횟수/페널티내역조회 페널티 리스트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectPenaltyList")
	public ModelAndView selectPenaltyList(Model model, HttpServletRequest request, TbAdhPenaltyTreatVO vo){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdhPenaltyTreatVO>> resultMap = new HashMap<String, List<TbAdhPenaltyTreatVO>>();
		try{
			List<TbAdhPenaltyTreatVO> resultList = penaltyService.selectPenaltyList(vo);
			resultMap.put("resultList", resultList);
		} catch(Exception e){
			logger.error("##selectPenaltyList Exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
}
