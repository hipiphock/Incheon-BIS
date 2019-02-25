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

import com.bis.service.MessageService;
import com.bis.util.Const;
import com.bis.vo.re.TbBmhMdtmsgVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - Message Manager
 * Business Name  : 
 * Class Name 	  : CtlrMessage.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.31	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Controller
@RequestMapping(value = "/message")
public class CtlrMessage {
	
	@Resource
	private MessageService messageService;
	
	private Logger logger = LogManager.getLogger(this.getClass());
	
	/**
	 * v0103
	 * 버스운행관제 / 버스공지사항전송
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/sendNoticeMessage")
	public ModelAndView sendNoticeMessage(Model model, HttpServletRequest request, TbBmhMdtmsgVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			messageService.sendNoticeMessage(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##sendNoticeMessage exception" + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * v0904
	 * 이력통계/분석 - 운행이력조회 - 운전자메시지 이력조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectMessageList")
	public ModelAndView selectMessageList(Model model, HttpServletRequest request, TbBmhMdtmsgVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbBmhMdtmsgVO>> resultMap = new HashMap<String, List<TbBmhMdtmsgVO>>();
		try{
			List<TbBmhMdtmsgVO> resultList = messageService.selectMessageList(vo);
			resultMap.put("resultList", resultList);
		} catch(Exception e){
			logger.error("##selectMessageList Exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
}
