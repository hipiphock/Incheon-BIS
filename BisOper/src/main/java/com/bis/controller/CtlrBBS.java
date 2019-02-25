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

import com.bis.service.BbsService;
import com.bis.vo.re.TbIchProtestreqVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 문의 관련
 * Class Name 	  : CtlrBBS.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.16	   주형빈                       최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/bbs")
public class CtlrBBS {

	@Resource(name = "bbsService")
	private BbsService bbsService;
	private Logger logger = LogManager.getLogger(this.getClass());	
	
	/**
	 * 이의신청내역조회 - 이의신청내역
	 * 
	 * @param model
	 * @param request
	 * @return
	 */

	 @RequestMapping(value = "/selectReqtreatcdList.do")
	public ModelAndView selectReqtreatcdList(Model model, HttpServletRequest request, TbIchProtestreqVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIchProtestreqVO>> resultMap = new HashMap<String, List<TbIchProtestreqVO>>();		
		try {
			List<TbIchProtestreqVO> resultList = bbsService.selectReqtreatcdList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectReqtreatcdList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectReqtreatcdList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv; 
	}
		
}