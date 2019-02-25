package com.bis.controller;

import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.BitService;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : CtlrView05.java
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
public class CtlrView05 {
	
	@Resource(name = "bitService")
	private BitService bitService;

	/**
	 * BIT 관리 - BIT 정보관리 
	 */
	@RequestMapping(value = "/v501.view") 
	public ModelAndView v501(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v501");
        return mv;
	}
	
	/**
	 * BIT 장애 등록 / 이력 조회
	 */
	@RequestMapping(value = "/v513.view") 
	public ModelAndView v513(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v513");
        return mv;
	}
	
	/**
	 * BIT 상태 조회
	 */
	@RequestMapping(value = "/v514.view") 
	public ModelAndView v514(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v514");
        return mv;
	}
	
	/**
	 * BIT시나리오 관리
	 */
	@RequestMapping(value = "/v515.view") 
	public ModelAndView v515(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v515");
        return mv;
	}
	
	/**
	 * BIT 파라미터 전송
	 */
	@RequestMapping(value = "/v516.view") 
	public ModelAndView v516(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v516");
        return mv;
	}
	/**
	 * BIT 파일 다운로드
	 */
	@RequestMapping(value = "/v517.view") 
	public ModelAndView v517(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v517");
        return mv;
	}
	
	/**
	 * BIT 문자 메시지 전송
	 */
	@RequestMapping(value = "/v518.view") 
	public ModelAndView v518(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v518");
        return mv;
	}
	
	/**
	 * BIT 제공정보 현황조회
	 */
	@RequestMapping(value = "/v519.view") 
	public ModelAndView v519(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v519");
        return mv;
	}
	
	
	
	//################# 구버전코드
	
	
	
	@RequestMapping(value = "/v501Group.view") 
	public ModelAndView v501Group(Model model, HttpServletRequest request
			,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/pop_bit_group");
        return mv;
		
	}
	
	/**
	 * BIT 관리 - 시정홍보자료관리 
	 */
	@RequestMapping(value = "/v502.view") 
	public ModelAndView v502(Model model, HttpServletRequest request
			,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v502");
        return mv;
		
	}
	
	/**
	 * BIT 관리 - BIT 제어 
	 */
	@RequestMapping(value = "/v503.view") 
	public ModelAndView v503(Model model, HttpServletRequest request
			,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v503");
        return mv;
		
	}
	
	/**
	 * BIT 관리 - BIT 모니터링 
	 */
	@RequestMapping(value = "/v504.view") 
	public ModelAndView v504(Model model, HttpServletRequest request,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v504");
        return mv;
	}
	
	/**
	 * BIT 관리 - 전체 BIT 보기 
	 */
	@RequestMapping(value = "/v505.view") 
	public ModelAndView v505(Model model, HttpServletRequest request
			,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v505");
        return mv;
		
	}
	
	/**
	 * BIT 관리 - BIT 시간표 이미지 전송
	 */
	@RequestMapping(value = "/v506.view") 
	public ModelAndView v506(Model model, HttpServletRequest request
			,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v506");
        return mv;
		
	}
	
	/**
	 * BIT 관리 - BIT 관광지 이미지 전송 
	 */
	@RequestMapping(value = "/v507.view") 
	public ModelAndView v507(Model model, HttpServletRequest request
			,@RequestParam(value="location", required=false, defaultValue="") String paramLocation
            ,@RequestParam(value="addr", required=false, defaultValue="") String paramAddr
            ,@RequestParam(value="matrixNo", required=false, defaultValue="") String paramMatrixNo
            ,@RequestParam(value="id", required=false, defaultValue="") String paramId) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try {
			resultMap.put("location", paramLocation);
			resultMap.put("addr", URLDecoder.decode(paramAddr, "UTF-8"));
			resultMap.put("matrixNo",paramMatrixNo);
			resultMap.put("id", paramId);
		} catch (Exception e) {
			
		}
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v507");
        return mv;
	}

	/**
	 * BIT 관리 - BIT 그룹 관리 
	 */
	@RequestMapping(value = "/v508.view") 
	public ModelAndView v508(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v508");
        return mv;
	}
	
	/**
	 * BIT 관리 -  사업 정보 관리 
	 */
	@RequestMapping(value = "/v509.view") 
	public ModelAndView v509(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v509");
        return mv;
	}
	
	/**
	 * BIT 관리 -  제조사 관리 
	 */
	@RequestMapping(value = "/v510.view") 
	public ModelAndView v510(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v510");
        return mv;
	}
	
	/**
	 * BIT 관리 -  scenario 관리 
	 */
	@RequestMapping(value = "/v511.view") 
	public ModelAndView v511(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v511");
        return mv;
	}
	
	/**
	 * BIT 관리 - BIT 추가 
	 */
	@RequestMapping(value = "/v512.view") 
	public ModelAndView v512(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v512");
        return mv;
	}
	
	/**
	 * 인천/확대 시정홍보 스케줄 화면
	 */
	@RequestMapping(value = "/v520.view") 
	public ModelAndView v520(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v520");
        return mv;
	}
	
	//#########################
	
	/*** 기반정보관리 - 버스회사/차고지정보조회*/
	@RequestMapping(value = "/v0501.view") 
	public ModelAndView v0501(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0501");
        return mv;
	}
	
	/*** 기반정보관리 - 차량정보조회*/
	@RequestMapping(value = "/v0502.view") 
	public ModelAndView v0502(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0502");
        return mv;
	}
	
	/*** 기반정보관리 - 노선관리/분석 - 노선기초정보관리*/
	@RequestMapping(value = "/v0503.view") 
	public ModelAndView v0503(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0503");
        return mv;
	}
	
	/*** 기반정보관리 - 노선관리/분석 - 노선변경(인허가)관리*/
	@RequestMapping(value = "/v0504.view") 
	public ModelAndView v0504(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0504");
        return mv;
	}
	
	/*** 기반정보관리 - 노선관리/분석 - 노선굴곡도/경합율조회*/
	@RequestMapping(value = "/v0505.view") 
	public ModelAndView v0505(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0505");
        return mv;
	}
	
	/*** 기반정보관리 - 노선관리/분석 - 노선별경유노드조회*/
	@RequestMapping(value = "/v0506.view") 
	public ModelAndView v0506(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0506");
        return mv;
	}
	
	/*** 기반정보관리 - 노선관리/분석 - 노선/정류장 인허가 관리*/
	@RequestMapping(value = "/v0507.view") 
	public ModelAndView v0507(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0507");
        return mv;
	}
	
	/*** 기반정보관리 - 노선관리/분석 - 노선버전관리*/
	@RequestMapping(value = "/v0508.view") 
	public ModelAndView v0508(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0508");
        return mv;
	}
	
	/*** 기반정보관리 - 노선관리/분석 - 노선관리*/
	@RequestMapping(value = "/v0509.view") 
	public ModelAndView v0509(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0509");
        return mv;
	}
	
	/*** 기반정보관리 - 정류소관리 - 정류소기초정보관리*/
	@RequestMapping(value = "/v0510.view") 
	public ModelAndView v0510(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0510");
        return mv;
	}
	
	/*** 기반정보관리 - 정류소관리 - 정류소위치정보관리*/
	@RequestMapping(value = "/v0511.view") 
	public ModelAndView v0511(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0511");
        return mv;
	}
	
	/*** 기반정보관리 - 정류소관리 - 정류소기초인허가정보*/
	@RequestMapping(value = "/v0512.view") 
	public ModelAndView v0512(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0512");
        return mv;
	}
	
	/*** 기반정보관리 - 정류소관리 - 정류소정차노선조회*/
	@RequestMapping(value = "/v0513.view") 
	public ModelAndView v0513(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0513");
        return mv;
	}
	
	/*** 기반정보관리 - 정류소관리 - 정류소환승정보관리*/
	@RequestMapping(value = "/v0514.view") 
	public ModelAndView v0514(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0514");
        return mv;
	}
	
	/*** 기반정보관리 - 운행횟수관리 - 운행횟수/페널티내역조회*/
	@RequestMapping(value = "/v0515.view") 
	public ModelAndView v0515(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0515");
        return mv;
	}
	
	/*** 기반정보관리 - 운행횟수관리 - 이의신청내역조회*/
	@RequestMapping(value = "/v0516.view") 
	public ModelAndView v0516(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0516");
        return mv;
	}
			
	/*** 기반정보관리 - 인허가관리*/
	@RequestMapping(value = "/v0517.view") 
	public ModelAndView v0517(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0517");
        return mv;
	}		
			
	/*** 기반정보관리 - 지하철역사주변BIT관리*/
	@RequestMapping(value = "/v0518.view") 
	public ModelAndView v0518(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0518");
        return mv;
	}			
			
	/*** 기반정보관리 - 매핑정보조회*/
	@RequestMapping(value = "/v0519.view") 
	public ModelAndView v0519(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0519");
        return mv;
	}			
			
	/*** 기반정보관리 - 정류소통과노선조회*/
	@RequestMapping(value = "/v0520.view") 
	public ModelAndView v0520(Model model, HttpServletRequest request) {
	
		ModelAndView mv = new ModelAndView();
		Map<String, String> resultMap = new HashMap<String, String>();
		mv.addAllObjects(resultMap);
		
		mv.setViewName("view05/v0520");
        return mv;
	}	
}
