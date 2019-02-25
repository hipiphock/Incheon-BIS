package com.bis.controller;

import java.util.ArrayList;
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

import com.bis.service.UserService;
import com.bis.util.Const;
import com.bis.vo.re.TbOmmUserVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrUsers.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * 2017.11.15    박경원                        VO 변경
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/user")
public class CtlrUsers {

	@Resource(name = "userService")
	private UserService userService;
	
	private Logger logger = LogManager.getLogger(this.getClass());

	/**
	 * 사용자 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectUserList.do")
	public ModelAndView selectUserList(Model model, HttpServletRequest request,
			@RequestParam(value = "use_flag", required = false, defaultValue = "") String paramFlag) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmUserVO>> resultMap = new HashMap<String, List<TbOmmUserVO>>();
		TbOmmUserVO vo = new TbOmmUserVO();
		vo.setUseyn(paramFlag);
		try {
			List<TbOmmUserVO> resultList = userService.selectUserList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectUserList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 사용자 등급 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectUserRankList.do")
	public ModelAndView selectUserRankList(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmUserVO>> resultMap = new HashMap<String, List<TbOmmUserVO>>();
		try {
			TbOmmUserVO vo = new TbOmmUserVO();
			List<TbOmmUserVO> resultList = userService.selectUserRankList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectUserRankList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 별 메뉴 권한 목록 조회 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMenuRightList.do")
	public ModelAndView selectMenuRightList(Model model, HttpServletRequest request,
			@RequestParam(value = "authid", required = false) String paramAuth) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmUserVO>> resultMap = new HashMap<String, List<TbOmmUserVO>>();
		try {
			if(paramAuth == null) {
				HttpSession session = request.getSession();
				paramAuth = (String)session.getAttribute("rank");
				logger.debug("====== session rank |" + paramAuth+"|");
			}
			TbOmmUserVO vo = new TbOmmUserVO();
			vo.setAuthid(paramAuth);
			List<TbOmmUserVO> resultList = userService.selectMenuRightList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectUserRankList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 사용자 정보 조회 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectUserInfo.do")
	public ModelAndView selectUserInfo(Model model, HttpServletRequest request,
			@RequestParam(value = "userid", required = true) String paramId) {
		ModelAndView mv = new ModelAndView();

		Map<String, TbOmmUserVO> resultMap = new HashMap<String, TbOmmUserVO>();
		try {
			TbOmmUserVO vo = new TbOmmUserVO();
			vo.setUserid(paramId);
			TbOmmUserVO result = userService.selectUserInfo(vo);
			resultMap.put("result", result);
		} catch (Exception e) {
			logger.error("##selectUserRankList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 등록 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertUser.do")
	public ModelAndView insertUser(Model model, HttpServletRequest request,
			TbOmmUserVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			/*HttpSession session = request.getSession();
			String regId = (String)(session.getAttribute("userId"));
			vo.setRegist_user_id("admin");*/
			//TODO 비밀 번호 암호화 함수 미적용
			
			int res = userService.insertUser(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertUser exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 삭제 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteUser.do")
	public ModelAndView deleteUser(Model model, HttpServletRequest request,
			TbOmmUserVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			int res = userService.deleteUser(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##deleteUser exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 수정/ 비밀번호  변경 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/modifyUser.do")
	public ModelAndView modifyUser(Model model, HttpServletRequest request,
			TbOmmUserVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			/*HttpSession session = request.getSession();
			String regId = (String)(session.getAttribute("userId"));
			vo.setRegist_user_id("admin");*/
			//TODO 비밀 번호 암호화 함수 미적용
			
			int res = userService.modifyUser(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.error("##modifyUser exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 등급 등록 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertRank.do")
	public ModelAndView insertRank(Model model, HttpServletRequest request,
			TbOmmUserVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			int res = userService.insertRank(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.error("##insertRank exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 등급 수정 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateRank.do")
	public ModelAndView updateRank(Model model, HttpServletRequest request,
			TbOmmUserVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			int res = userService.updateRank(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.error("##updateRank exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 등급 삭제 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteRank.do")
	public ModelAndView deleteRank(Model model, HttpServletRequest request,
			TbOmmUserVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			int res = userService.deleteRank(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.error("##deleteRank exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 사용자 메뉴 권한 수정
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/modifyUserMenu.do")
	public ModelAndView modifyUserMenu(Model model, HttpServletRequest request,
			TbOmmUserVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			List<TbOmmUserVO> list = new ArrayList<TbOmmUserVO>();
			
			List<String> menuList = vo.getMenuList();
			List<String> cFlagList = vo.getcFlagList();
			List<String> rFlagList = vo.getrFlagList();
			List<String> uFlagList = vo.getuFlagList();
			List<String> dFlagList = vo.getdFlagList();
		
			for (int i = 0; i < menuList.size(); i++) {
				TbOmmUserVO rightVo = new TbOmmUserVO();
				rightVo.setAuthid(vo.getAuthid());
				rightVo.setMenuid(menuList.get(i));
				rightVo.setCre_authyn(cFlagList.get(i));
				rightVo.setRead_authyn(rFlagList.get(i));
				rightVo.setUpd_authyn(uFlagList.get(i));
				rightVo.setDel_authyn(dFlagList.get(i));
				list.add(rightVo);
			}
			
			int res = userService.modifyUserMenu(list);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.error("##modifyUserMenu exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 사용자 메뉴 권한 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getMenuAuth.do")
	public ModelAndView getMenuAuth(Model model, HttpServletRequest request, HttpSession session) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmUserVO>> resultMap = new HashMap<String, List<TbOmmUserVO>>();
		try {
			TbOmmUserVO vo = new TbOmmUserVO();
			String id = (String)(session.getAttribute("userId"));
			vo.setUserid(id);
			List<TbOmmUserVO> resultList = userService.selectUserMenuAuth(vo);
			System.out.println("####resultList " + resultList.size());
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##getMenuAuth exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
}
