package com.bis.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.bis.service.ObeService;
import com.bis.service.SystemService;
import com.bis.service.UserService;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 메인화면, 로그인
 * Class Name 	  : CtlrView01.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Controller
public class CtlrView01 {

	@Resource(name = "systemService")
    private SystemService systemService;
    
	@Resource(name="obeService")
	private ObeService obeService;
	
	@Resource(name="userService")
	private UserService userService;
	
	/**
	 * 로그인 
	 * code 100: 세션정보 없음, 101:인증 실패, 102: 중복로그인, 103: 권한 없음, 104: 로그아웃, 105:bad request
	 */
	@RequestMapping(value = "/v101.view")
	public ModelAndView v101(Model model, HttpServletRequest request
			,@ModelAttribute(value="code")String paramCode) {
		
		ModelAndView mv = new ModelAndView();
		
		Map<String, String> resultMap = new HashMap<String, String>();
		try {
			if(paramCode != null && !("").equalsIgnoreCase(paramCode)) {
				
				int code = Integer.valueOf(paramCode);
				switch (code) {
				case 100:
					resultMap.put("result", "로그아웃 되었습니다.");
					break;
				case 101:
					resultMap.put("result", "아이디 또는 비밀번호가 일치하지 않습니다.");
					break;
				case 102:
					resultMap.put("result", "다른 PC에서 동일한 계정으로 로그인 하였습니다.");
					break;
				case 103:
					resultMap.put("result", "사용 권한이 없습니다.");
					break;
				case 104:
					resultMap.put("result", "로그아웃 되었습니다.");
					break;
				case 105:
					resultMap.put("result", "잘못된 요청입니다. 105");
					break;
				}
			}
		} catch (Exception e) {
			System.out.println("### login e "+ e.toString());
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v101");
		return mv;
	}
	
	@RequestMapping(value = "/error.view")
	public String error(RedirectAttributes  redirectAttributes
			,@RequestParam(value="code") String paramCode) {
		
		redirectAttributes.addFlashAttribute("code", paramCode);
		return "redirect:/v101.view";
	}
	
	/**
	 * 메인화면 
	 */
	@RequestMapping(value = "/v102.view") 
	public ModelAndView v102(Model model, HttpServletRequest request) {
	
		HttpSession session = request.getSession();
		ModelAndView mv = new ModelAndView();
		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		/*try {
			//시스템 상의 버전 조회
			List<String> versionList = obeService.selectObeVersionList();
			System.out.println(versionList.get(0));
			
			resultMap.put("firmware_version", versionList.get(0));
			resultMap.put("info_version", versionList.get(1));
			resultMap.put("info_reserve_version", versionList.get(2));
		} catch (Exception e) {
			e.printStackTrace();
		}*/
		
//		mv.addAllObjects(resultMap);
		
		resultMap.put("userName", (String)session.getAttribute("userName"));
		resultMap.put("userId", (String)session.getAttribute("userId"));
		resultMap.put("rank", (String)session.getAttribute("rank"));
		
		mv.addAllObjects(resultMap);

		mv.setViewName("view01/v102");
        return mv;
	}
	
	////################
	
	/*** 버스운행관리 - 버스운행관제 - 실시간버스위치관제*/
	@RequestMapping(value = "/v0101.view") 
	public ModelAndView v0101(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0101");
        return mv;
	}
	
	/*** 버스운행관리 - 버스운행관제 - 노선도운행모니터링*/
	@RequestMapping(value = "/v0102.view") 
	public ModelAndView v0102(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0102");
        return mv;
	}
	
	/*** 버스운행관리 - 버스운행관제 - 버스공지사항전송*/
	@RequestMapping(value = "/v0103.view") 
	public ModelAndView v0103(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0103");
        return mv;
	}
	
	/*** 버스운행관리 - 버스운행관제 - 정류소제공정보조회*/
	@RequestMapping(value = "/v0104.view") 
	public ModelAndView v0104(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0104");
        return mv;
	}
	
	/*** 버스운행관리 - 돌발상황관리 - 돌발상황대응이력관리*/
	@RequestMapping(value = "/v0105.view") 
	public ModelAndView v0105(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0105");
        return mv;
	}
	
	/*** 버스운행관리 - 돌발상황관리 - 돌발상황대응시나리오관리*/
	@RequestMapping(value = "/v0106.view") 
	public ModelAndView v0106(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0106");
        return mv;
	}
	
	/*** 버스운행관리 - 돌발상황관리 - 돌발상황발생대응관리*/
	@RequestMapping(value = "/v0107.view") 
	public ModelAndView v0107(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0107");
        return mv;
	}
	
	/*** 버스운행관리 - 부당운행관리 - 부당운행조회*/
	@RequestMapping(value = "/v0108.view") 
	public ModelAndView v0108(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0108");
        return mv;
	}
	
	/*** 버스운행관리 - 운행종합상황조회*/
	@RequestMapping(value = "/v0109.view") 
	public ModelAndView v0109(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0109");
        return mv;
	}
	
	/*** 버스운행관리 - 도착예정시간조회*/
	@RequestMapping(value = "/v0110.view") 
	public ModelAndView v0110(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0110");
        return mv;
	}
	
	/*** 버스운행관리 - 돌발발생알람조회*/
	@RequestMapping(value = "/v0111.view") 
	public ModelAndView v0111(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view01/v0111");
        return mv;
	}
	
	
}
