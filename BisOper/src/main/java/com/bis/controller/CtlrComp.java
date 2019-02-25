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

import com.bis.service.BuscompService;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbDmhBusrunrecVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : Bus 회사/차고지 정보 관련
 * Class Name 	  : Ctlrcomp.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2018.12.28	   주형빈                       최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/comp")
public class CtlrComp {

	@Resource(name = "buscompService")
	private BuscompService buscompService;
	private Logger logger = LogManager.getLogger(this.getClass());	
	
	/**
	 * 버스회사 카테고리 리스트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	 @RequestMapping(value = "/selectCompCateList.do")
	public ModelAndView selectCompCateList(Model model, HttpServletRequest request) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusCompVO>> resultMap = new HashMap<String, List<TbAdmBusCompVO>>();		
		try {
						
			List<TbAdmBusCompVO> resultList = buscompService.selectBuscompCateList();
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectCompCateList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectCompCateList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 버스회사 정보 조회 
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	 @RequestMapping(value = "/selectCompInfoList.do")
		public ModelAndView selectBuscompCateList(Model model, HttpServletRequest request,
												  TbAdmBusCompVO vo) {

			ModelAndView mv = new ModelAndView();
			Map<String, List<TbAdmBusCompVO>> resultMap = new HashMap<String, List<TbAdmBusCompVO>>();		
			try {
							
				List<TbAdmBusCompVO> resultList = buscompService.selectCompInfoList(vo);
				resultMap.put("resultList", resultList);
				logger.debug("##selectCompInfoList resultList " + resultList.size());
			} catch (Exception e) {
				logger.error("##selectCompInfoList exception " +  e.toString());
			}

			mv.addAllObjects(resultMap);
			mv.setViewName("jsonView");
			return mv;
		}	 
	 
	
	/**
	 * 차고지 정보 조회 
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	 @RequestMapping(value = "/selectGarageInfoList.do")
		public ModelAndView selectSearchBusGarage(Model model, HttpServletRequest request,
												  TbAdmGarageVO vo) {

			ModelAndView mv = new ModelAndView();

			Map<String, List<TbAdmGarageVO>> resultMap = new HashMap<String, List<TbAdmGarageVO>>();		
			try {
							
				List<TbAdmGarageVO> resultList = buscompService.selectGarageInfoList(vo);
				resultMap.put("resultList", resultList);
				logger.debug("##selectGarageInfoList resultList " + resultList.size());
			} catch (Exception e) {
				logger.error("##selectGarageInfoList exception " +  e.toString());
			}

			mv.addAllObjects(resultMap);
			mv.setViewName("jsonView");
			return mv;
		}	 
	
		/**
		 * 운행횟수관리 - 버스회사별 운행횟수 조회 
		 * 
		 * @param model
		 * @param request
		 * @return
		 */
		 @RequestMapping(value = "/selectCompRunCount.do")
			public ModelAndView selectCompRunCount(Model model, HttpServletRequest request,
					TbDmhBusrunrecVO vo) {
			 	
				ModelAndView mv = new ModelAndView();

				Map<String, List<TbDmhBusrunrecVO>> resultMap = new HashMap<String, List<TbDmhBusrunrecVO>>();		
				try {
								
					List<TbDmhBusrunrecVO> resultList = buscompService.selectCompRunCount(vo);
					resultMap.put("resultList", resultList);
					logger.debug("##selectCompRunCount resultList " + resultList.size());
				} catch (Exception e) {
					logger.error("##selectCompRunCount exception " +  e.toString());
				}

				mv.addAllObjects(resultMap);
				mv.setViewName("jsonView");
				return mv;
			}	 
		
	
}