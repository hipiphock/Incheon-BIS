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
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.OutsideInfoService;
import com.bis.util.Const;
import com.bis.vo.re.TbAdmLinkVO;
import com.bis.vo.re.TbEchCardcashVO;
import com.bis.vo.re.TbEchExorgincidVO;
import com.bis.vo.re.TbEchLnkdsndrcvVO;
import com.bis.vo.re.TbEchNewscollVO;
import com.bis.vo.re.TbEchWeathercollVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 외부연계정보
 * Class Name 	  : CtlrOutsideInfo.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.24	   주형빈                       최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/outsideinfo") 
public class CtlrOutsideInfo {

	@Resource(name = "outsideinfoService")
	private OutsideInfoService outsideinfoService;
	private Logger logger = LogManager.getLogger(this.getClass());	
	
	/**
	 * 교통카드 연계정보관리 - 교통카드 및 현금수입금 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	 @RequestMapping(value = "/selectCardCashList.do")
	public ModelAndView selectCardCashList(Model model, HttpServletRequest request, TbEchCardcashVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbEchCardcashVO>> resultMap = new HashMap<String, List<TbEchCardcashVO>>();		
		try {
			List<TbEchCardcashVO> resultList = outsideinfoService.selectCardCashList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectCardCashList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectCardCashList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	 
	 
	/**
	 * 교통카드 연계정보관리 - 내역 삭제
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	 @RequestMapping(value="/deleteCardCash")
	 public ModelAndView deleteCardCash(Model model, HttpServletRequest request, TbEchCardcashVO vo){
		 
		  ModelAndView mv = new ModelAndView();        
	        Map<String, Integer> resultMap = new HashMap<String, Integer>();
	        
	        try {
	        	int cnt = outsideinfoService.deleteCardCash(vo);
	        	resultMap.put("result", cnt);
			} catch (Exception e) {
				logger.error("##deleteCardCash exception " + e.toString());
				resultMap.put("result", Const.SQL_ERROR);
			}
	        mv.addAllObjects(resultMap);
	        mv.setViewName("jsonView");
	        return mv;
	 }
		
	 /**
	 * 기상정보 수집이력조회 - 기상정보 수집이력검색 
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "/selectWeatherCallList.do")
	public ModelAndView selectWeatherCallList(Model model, HttpServletRequest request, TbEchWeathercollVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbEchWeathercollVO>> resultMap = new HashMap<String, List<TbEchWeathercollVO>>();		
		try {
			List<TbEchWeathercollVO> resultList = outsideinfoService.selectWeatherCallList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectWeatherCallList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectWeatherCallList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	} 
	 
	 /**
	 * 외부연계정보 - 연계정보 송수신이력조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "/selectLinkedOutsideInfoList.do")
	public ModelAndView selectLinkedOutsideInfoList(Model model, HttpServletRequest request, TbEchLnkdsndrcvVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbEchLnkdsndrcvVO>> resultMap = new HashMap<String, List<TbEchLnkdsndrcvVO>>();		
		try {
			List<TbEchLnkdsndrcvVO> resultList = outsideinfoService.selectLinkedOutsideInfoList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectLinkedOutsideInfoList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectLinkedOutsideInfoList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	} 
	
	 /**
	 * 외부연계정보 - 교통상황 연계정보 조회 - 돌발수집이력검색
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "/selectIncidRecordList.do")
	public ModelAndView selectIncidRecordList(Model model, HttpServletRequest request, TbEchExorgincidVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbEchExorgincidVO>> resultMap = new HashMap<String, List<TbEchExorgincidVO>>();		
		try {
			List<TbEchExorgincidVO> resultList = outsideinfoService.selectIncidRecordList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectIncidRecordList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectIncidRecordList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	} 
	
	

	 /**
	 * 외부연계정보 - 교통상황 연계정보 조회 - 돌발변경이력검색
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "/selectIncidChangedRecordList.do")
	public ModelAndView selectIncidChangedRecordList(Model model, HttpServletRequest request, TbEchExorgincidVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbEchExorgincidVO>> resultMap = new HashMap<String, List<TbEchExorgincidVO>>();		
		try {
			List<TbEchExorgincidVO> resultList = outsideinfoService.selectIncidChangedRecordList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectIncidChangedRecordList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectIncidChangedRecordList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	} 
	
	

	 /**
	 * 외부연계정보 - 교통상황 연계정보 조회 - 관련링크검색
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "/selectIncidLinkInfoList.do")
	public ModelAndView selectIncidLinkInfoList(Model model, HttpServletRequest request, TbAdmLinkVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmLinkVO>> resultMap = new HashMap<String, List<TbAdmLinkVO>>();		
		try {
			List<TbAdmLinkVO> resultList = outsideinfoService.selectIncidLinkInfoList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectIncidLinkInfoList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectIncidLinkInfoList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	} 
	
	/**
	 * 외부연계정보 - 뉴스정보 수집이력조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	
	@RequestMapping(value = "/selectNewScollList.do")
	public ModelAndView selectNewScollList(Model model, HttpServletRequest request, TbEchNewscollVO vo) {
		
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbEchNewscollVO>> resultMap = new HashMap<String, List<TbEchNewscollVO>>();		
		try {
			List<TbEchNewscollVO> resultList = outsideinfoService.selectNewScollList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectNewScollList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectNewScollList exception " +  e.toString());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	} 
	
	 
	
}