package com.bis.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.BusrouteService;
import com.bis.util.Const;
import com.bis.util.ExcelUtil;
import com.bis.util.ParameterUtil;
import com.bis.vo.BusrouteVO;
import com.bis.vo.ProcessParameterVO;
import com.bis.vo.re.TbAdhRouteversionpdVO;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmBusVO;
import com.bis.vo.re.TbAdmBusrouteVO;
import com.bis.vo.re.TbAdmNodeVO;
import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbAdmRouteschedVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrROUTE.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * 2019.01.04	박주언		새로운 controller/query 추가
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/route")
public class CtlrROUTE {

	@Resource(name = "busrouteService")
	private BusrouteService busrouteService;
	private Logger logger = LogManager.getLogger(this.getClass());	
	
	/**
	 * 운행종합상황조회 - 검색시 왼쪽 테이블에 버스운행현황 리스트 출력 (v0109)
	 */
	@RequestMapping(value = "/selectBusOperList.do")
    public ModelAndView selectBusOperList(Model model, HttpServletRequest request,
    		@RequestParam(value= "routeid", required= false, defaultValue="") String routeid) {
       
        ModelAndView mv = new ModelAndView();
        Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();
        try {
        	TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
        	vo.setRouteid(routeid);
        	List<TbAdmBusrouteVO> resultList = busrouteService.selectBusOperList(vo);	
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusOperList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 도착예정시간조회 - 예정시간 누적 계산 출력 리스트(v0110)
	 */
	@RequestMapping(value = "/selectArrivalTime.do")
	public ModelAndView selectArrivalTime(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid", required = true) String routeid,
			@RequestParam(value = "pathseq1", required = true) String c00,
			@RequestParam(value = "pathseq2", required = true) String c01) {
		
		ModelAndView mv = new ModelAndView(); 
		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>(); 
		
		try{
			TbAdmNodeVO vo = new TbAdmNodeVO();
			vo.setRouteid(routeid);	
			vo.setC00(c00);
			vo.setC01(c01);
			List<TbAdmNodeVO> resultList = busrouteService.selectArrivalTime(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectArrivalTime resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectArrivalTime exception " +  e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
		}
	
	/**
	 * 경로에 대한 출발/도착 정류소 정보
	 * @param model 
	 * @param request
	 * @return 
	 */
	@RequestMapping(value = "/selectRoutePNode.do")
	public ModelAndView selectRoutePNode(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid", required = true) String paramRouteid) {
		ModelAndView mv = new ModelAndView(); 
		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>(); 
		
		try{
			TbAdmNodeVO vo = new TbAdmNodeVO();
			
			vo.setRouteid(paramRouteid);	
			List<TbAdmNodeVO> resultList = busrouteService.selectRoutePNode(vo);
			
			resultMap.put("resultList", resultList);
			logger.debug("##selectRouteList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
		}
	
	/**
	 * 노선 목록 조회 / 팝업 메뉴용
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteList.do")
	public ModelAndView selectRouteList(Model model, HttpServletRequest request,
			@RequestParam(value = "searchWord", required = false, defaultValue = "") String paramWord) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
			vo.setSearchWord(ParameterUtil.getStrParameter(paramWord));			
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteList(vo);
			resultMap.put("resultList", resultList);			
			logger.debug("##selectRouteList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * (지도)버스 위치 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMapBusList.do")
	public ModelAndView selectMapBusList(Model model, HttpServletRequest request,
			@RequestParam(value = "route_id", required = false) String paramRouteId) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();

		try {
			TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
			vo.setSearchWord(ParameterUtil.getStrParameter(paramRouteId));
			List<TbAdmBusrouteVO> resultList = busrouteService.selectMapBusList(vo);	
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectMapBusList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 선택 노선  버스 위치 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBusLocList.do")
	public ModelAndView selectBusLocList(Model model, HttpServletRequest request,
			@RequestParam(value = "route_id", required = true) String paramRouteId) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();

		try {
			TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
			vo.setSearchWord(ParameterUtil.getStrParameter(paramRouteId));
			List<TbAdmBusrouteVO> resultList = busrouteService.selectBusLocList(vo);	
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusLocList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}	
	
	/**
	 * 기반정보 - 노선 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteInfoList.do")
	public ModelAndView selectRouteInfoList(Model model, HttpServletRequest request,
			@RequestParam(value = "searchWord", required = false, defaultValue = "") String paramWord) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();
		TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
		vo.setSearchWord(ParameterUtil.getStrParameter(paramWord));
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteInfoList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteInfoList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 기반정보 - 경유정류장(노드) 조회
	 * nodegbcd 2:정류장만 조회  1:노드 , null: 경유전체
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectViaNodeList.do")
	public ModelAndView selectViaNodeList(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid", required = true) String paramRouteId,
			@RequestParam(value = "nodegbcd", required = false) String paramGb) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>();
		TbAdmNodeVO vo = new TbAdmNodeVO();
		vo.setRouteid(ParameterUtil.getStrParameter(paramRouteId));
		vo.setNodegbcd(paramGb);
		try {
			List<TbAdmNodeVO> resultList = busrouteService.selectViaNodeList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectViaNodeList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 기반정보 - 차량 정보 조회 & 차량 선택 팝업
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectVehicleList.do")
	public ModelAndView selectVehicleList(Model model, HttpServletRequest request,
			@RequestParam(value = "view_flag", required = false, defaultValue = "") String view_flag,
			@RequestParam(value = "search_word", required = false, defaultValue = "") String searchWord) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusVO>> resultMap = new HashMap<String, List<TbAdmBusVO>>();
		TbAdmBusVO vo = new TbAdmBusVO();
		vo.setView_flag(view_flag);		
		vo.setSearchWord(searchWord);

		try {
			List<TbAdmBusVO> resultList = busrouteService.selectVehicleList(vo);

			logger.debug("##selectVehicleList resultList " + resultList.size());
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectVehicleList exception " + e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 기반정보 - 노선 시간표 관리(왼쪽)
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteScheduleList.do")
	public ModelAndView selectRouteScheduleList(Model model, HttpServletRequest request,
			@RequestParam(value = "search_word", required = false, defaultValue="") String searchWrod,
			@RequestParam(value = "check_route_id", required = true) String check_route_id,
			@RequestParam(value = "check_route_name", required = true) String check_route_name) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();
		TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
		
		vo.setSearchWord(searchWrod);
		vo.setRouteid(check_route_id);
		vo.setRouteno(check_route_name);

		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteScheduleList(vo);
			logger.debug("##selectRouteScheduleList resultList " + resultList.size());
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteScheduleList exception " + e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 기반정보 - 노선 시간표 관리(오른쪽)
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteScheduleInfo.do")
	public ModelAndView selectRouteScheduleInfo(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid", required = true) String routeid) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmRouteschedVO>> resultMap = new HashMap<String, List<TbAdmRouteschedVO>>();
		TbAdmRouteschedVO vo = new TbAdmRouteschedVO();

		vo.setRouteid(routeid);		

		try {
			List<TbAdmRouteschedVO> resultList2 = busrouteService.selectRouteScheduleInfo(vo);
			logger.debug("##selectRouteScheduleInfo resultList2 " + resultList2.size());
			resultMap.put("resultList2", resultList2);
		} catch (Exception e) {
			logger.error("##selectRouteScheduleInfo exception " + e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * BIT관리 파라미터전송 - 도로명, 노선명 그룹 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value ="/selectBitParamDepth2List.do")
    public ModelAndView selectBitParamDepth2List(Model model, HttpServletRequest request,
    		@RequestParam(value="cate_flag", required=true) String cate_flag) {        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();
        
        try {

			switch (cate_flag) {
			case "0":
				TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
				List<TbAdmBusrouteVO> routeid = busrouteService.selectRouteList(vo);
				resultMap.put("routeid", routeid);
				break;
				
			case "1":
				List<TbAdmBusrouteVO> roadnm = busrouteService.selectRoadList();
				resultMap.put("roadnm", roadnm);
				break;
			}
        	
		} catch (Exception e) {
			logger.error("##selectBitParamDepth2List exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 버스노선 카테고리 리스트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteCateList.do")
	public ModelAndView selectRouteCateList(Model model, HttpServletRequest request,
			@RequestParam(value = "useyn", required = false, defaultValue = "") String useyn,
			@RequestParam(value = "compid", required = false, defaultValue = "") String compid) {
		
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
			vo.setCompid(compid);
			vo.setUseyn(useyn); //1사용출력 , 0미사용 출력 , null전체출력
			
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteCateList(vo);
			
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteCateList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteCateList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	

	/**
	 * 노선기초정보관리 노선검색결과
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteBasicInfoList.do")
	public ModelAndView selectRouteBasicInfoList(Model model, HttpServletRequest request, TbAdmBusrouteVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteBasicInfoList(vo);
			
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteBasicInfoList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteBasicInfoList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/** 
	 * 노선배정버스회사
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteAllotList.do")
	public ModelAndView selectRouteAllotList(Model model, HttpServletRequest request, TbAdmBusrouteVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteAllotList(vo);
			
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteAllotList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteAllotList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 노선운행스케쥴
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteRunScaduleList.do")
	public ModelAndView selectRouteRunScaduleList(Model model, HttpServletRequest request, TbAdmRouteschedVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmRouteschedVO>> resultMap = new HashMap<String, List<TbAdmRouteschedVO>>();		
		try {
			List<TbAdmRouteschedVO> resultList = busrouteService.selectRouteRunScaduleList(vo);
			
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteRunScaduleList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteRunScaduleList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 분기노선정보
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteBranchList.do")
	public ModelAndView selectRouteBranchList(Model model, HttpServletRequest request, TbAdmBusrouteVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteBranchList(vo);
			
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteBranchList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteBranchList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	


	/** 
	 * 노선기초정보 수정
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateRouteBasicInfo.do")
	public ModelAndView updateRouteBasicInfo(Model model, HttpServletRequest request, TbAdmBusrouteVO vo,
			HttpSession session) {
		ModelAndView mv = new ModelAndView();
			
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			String userId = (String)session.getAttribute("userId");
			vo.setUpd_userid(userId);
			busrouteService.updateRouteBasicInfo(vo);
			
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateBusTreatyn exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/** 
	 * 분기설정
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertBranchRoute.do")
	public ModelAndView insertBranchRoute(Model model, HttpServletRequest request, 
			@RequestParam("routeid") String routeid,
			@RequestParam("pair_routeidList[]") List<String> pair_routeidList) {
		
		ModelAndView mv = new ModelAndView();
		TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
		vo.setRouteid(routeid);
		vo.setPair_routeidList(pair_routeidList);
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			int cnt = busrouteService.insertBranchRoute(vo);
			
			resultMap.put("result", cnt);
		} catch (Exception e) {
			logger.debug("##insertBranchRoute exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 분기노선 삭제
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteRouteBranch.do")
	public ModelAndView deleteRouteBranch(Model model, HttpServletRequest request, TbAdmBusrouteVO vo){
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			int cnt = busrouteService.deleteRouteBranch(vo);
			
			resultMap.put("result", cnt);
		} catch (Exception e) {
			logger.debug("##deleteRouteBranch exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 노선굴곡도/경합율조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteRateCurv.do")
	public ModelAndView selectRouteRateCurv(Model model, HttpServletRequest request, TbAdmBusrouteVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteRateCurv(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteRateCurv resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteRateCurv exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/** 
	 *  v0505 하단 정보 출력 데이터 
	 *
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteInfoData.do")
	public ModelAndView selectRouteInfoData(Model model, HttpServletRequest request, TbAdmBusrouteVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, TbAdmBusrouteVO> resultMap = new HashMap<String, TbAdmBusrouteVO>();		
		try {
			resultMap.put("result", busrouteService.selectRouteInfoData(vo));

		} catch (Exception e) {
			logger.error("##selectRouteInfoData exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 노선광역코드별목록
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteWideareaList.do")
	public ModelAndView selectRouteWideareaList(Model model, HttpServletRequest request, TbAdmBusrouteVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteWideareaList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteWideareaList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteWideareaList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 노선경유노드조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteViaNodeList.do")
	public ModelAndView selectRouteViaNodeList(Model model, HttpServletRequest request, TbAdmNodeVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>();		
		try {
			List<TbAdmNodeVO> resultList = busrouteService.selectRouteViaNodeList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteViaNodeList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteViaNodeList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 노선버전관리 - 노선버전검색
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteVersionList.do")
	public ModelAndView selectRouteVersionList(Model model, HttpServletRequest request, TbAdhRouteversionpdVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbAdhRouteversionpdVO>> resultMap = new HashMap<String, List<TbAdhRouteversionpdVO>>();		
		try {
			List<TbAdhRouteversionpdVO> resultList = busrouteService.selectRouteVersionList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectRouteVersionList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteVersionList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/** 
	 * 노선버전관리 - 버전 데이터 입력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertRouteVersionList.do")
	public ModelAndView insertRouteVersionList(Model model, HttpServletRequest request, TbAdhRouteversionpdVO vo){ 
		
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			int cnt = busrouteService.insertRouteVersionList(vo);
			
			resultMap.put("result", cnt);
		} catch (Exception e) {
			logger.debug("##insertRouteVersionList exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/** 
	 * 노선버전관리 - 버전 데이터 수정
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateRouteVersionList.do")
	public ModelAndView updateRouteVersionList(Model model, HttpServletRequest request, TbAdhRouteversionpdVO vo){
		ModelAndView mv = new ModelAndView();
			
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			busrouteService.updateRouteVersionList(vo);
			
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateRouteVersionList exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 노선버전관리 - 버전 데이터 삭제
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteRouteVersionList.do")
	public ModelAndView deleteRouteVersionList(Model model, HttpServletRequest request, TbAdhRouteversionpdVO vo){
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			busrouteService.deleteRouteVersionList(vo);
			
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##deleteRouteVersionList exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 보고서-노선현황 리스트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectCurrentStateList.do")
	public ModelAndView selectCurrentStateList(Model model, HttpServletRequest request, TbAdmBusrouteVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectCurrentStateList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectCurrentStateList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectCurrentStateList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	
	
	
	/**
	 * 버스운행관리 / 버스운행관제 / 버스공지사항전송 / 회사 목록 가져오기
	 * @param model
	 * @param request
	 * @return
	 * added by 박주언
	 */
	@RequestMapping(value = "/selectCompList.do")
	public ModelAndView selectCompList(Model model, HttpServletRequest request){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusCompVO>> resultMap = new HashMap<String, List<TbAdmBusCompVO>>();
		try{
			List<TbAdmBusCompVO> companyList = busrouteService.selectCompList();
			resultMap.put("companyList", companyList);
			 logger.debug("##selectCompList companyList" + companyList.size());
		} catch (Exception e){
			logger.error("##selectCompList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	
	/**
	 * 버스운행관리 / 버스운행관제 / 버스공지사항전송 / 노선 목록 가져오기 - 회사를 골랐을 때
	 * @param model
	 * @param request
	 * @return
	 * added by 박주언
	 */
	@RequestMapping(value = "/selectRouteListbyCompany.do")
	public ModelAndView selectRouteListbyCompany(Model model, HttpServletRequest request,
			@RequestParam(value="compid", required=false, defaultValue = "") String compID){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmRouteToComVO>> resultMap = new HashMap<String, List<TbAdmRouteToComVO>>();
		try{
			TbAdmRouteToComVO vo = new TbAdmRouteToComVO();
			vo.setCompid(ParameterUtil.getStrParameter(compID));
			List<TbAdmRouteToComVO> resultList = busrouteService.selectRouteListbyCompany(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectRouteListbyCompany resultList " + resultList.size());
		} catch (Exception e){
			logger.error("##selectRouteListbyCompany exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 버스운행관리 / 버스운행관제 / 버스공지사항전송 / 버스 목록 가져오기
	 * @param model
	 * @param request
	 * @return
	 * added by 박주언
	 */
	@RequestMapping(value = "selectBusListtoNotify.do")
	public ModelAndView selectBusListtoNotify(Model model, HttpServletRequest request, TbAdmBusrouteVO vo){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();		
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectBusListtoNotify(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusListtoNotify Exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	//################ 이하 구버전 소스 ################
    //################ 수정 된 코드는 위에 작성 ################

	/**
	 * 기반정보 - 노선 목록 조회 > excel 저장
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/excelRouteDetailList.do")
	public void excelRouteDetailList(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list) {
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
							
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet(" 노선 정보 목록");
				
		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();
				
		for (int i = 0; i < (resultMap.size() + 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short)400);
		}
				
		HSSFCell cell = null;
     
		cell = excRowList.get(0).createCell(0);
		cell.setCellValue("버스회사");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("노선 ID");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("노선명");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("노선유형");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("노선설명");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("정류장수");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("노선거리(km)");
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("굴곡도");
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("공동배차여부");
		cell = excRowList.get(0).createCell(9);
		cell.setCellValue("출발정류소");
		cell = excRowList.get(0).createCell(10);
		cell.setCellValue("종료정류소");
		cell = excRowList.get(0).createCell(11);
		cell.setCellValue("적용시작일");
		cell = excRowList.get(0).createCell(12);
		cell.setCellValue("적용종료일");
		cell = excRowList.get(0).createCell(13);
		cell.setCellValue("사용여부");
		cell = excRowList.get(0).createCell(14);
		cell.setCellValue("면허버스 수");
		cell = excRowList.get(0).createCell(15);
		cell.setCellValue("예비버스 수");
		cell = excRowList.get(0).createCell(16);
		cell.setCellValue("운행거리(km)");
		cell = excRowList.get(0).createCell(17);
		cell.setCellValue("운행시간(분)");
		cell = excRowList.get(0).createCell(18);
		cell.setCellValue("운행횟수");
		cell = excRowList.get(0).createCell(19);
		cell.setCellValue("관활관청");
		cell = excRowList.get(0).createCell(20);
		cell.setCellValue("변경자");
		cell = excRowList.get(0).createCell(21);
		cell.setCellValue("변경일자");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("compnm"));
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("routeid"));
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("routeno"));
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("routetpcd"));
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("routedesc"));
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("pass_bstopcnt"));
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("routelen"));
			cell = excRowList.get(i).createCell(7);
			cell.setCellValue(map.get("routecurv"));
			cell = excRowList.get(i).createCell(8);
			cell.setCellValue(map.get("jointallocyn"));
			cell = excRowList.get(i).createCell(9);
			cell.setCellValue(map.get("origin_bstopid"));
			cell = excRowList.get(i).createCell(10);
			cell.setCellValue(map.get("dest_bstopid"));
			cell = excRowList.get(i).createCell(11);
			cell.setCellValue(map.get("app_startdt"));
			cell = excRowList.get(i).createCell(12);
			cell.setCellValue(map.get("app_enddt"));
			cell = excRowList.get(i).createCell(13);
			cell.setCellValue(map.get("useyn"));
			cell = excRowList.get(i).createCell(14);
			cell.setCellValue(map.get("lic_buscnt"));
			cell = excRowList.get(i).createCell(15);
			cell.setCellValue(map.get("rsv_buscnt"));
			cell = excRowList.get(i).createCell(16);
			cell.setCellValue(map.get("rundist"));
			cell = excRowList.get(i).createCell(17);
			cell.setCellValue(map.get("runtm"));
			cell = excRowList.get(i).createCell(18);
			cell.setCellValue(map.get("runcnt"));
			cell = excRowList.get(i).createCell(19);
			cell.setCellValue(map.get("admnm"));
			cell = excRowList.get(i).createCell(20);
			cell.setCellValue(map.get("upd_userid"));
			cell = excRowList.get(i).createCell(21);
			cell.setCellValue(map.get("upddt"));
			i++;
		}
				
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 21);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 21);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 21);
		
		Date now = new Date();
		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " 노선 정보 목록";
				
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}

	/**
	 * 기반정보 - 노선 경로(상) 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectExploreUpList.do")
	public ModelAndView selectExploreUpList(Model model, HttpServletRequest request,
			@RequestParam(value = "searchWord", required = false, defaultValue = "") String paramWord) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<BusrouteVO>> resultMap = new HashMap<String, List<BusrouteVO>>();
		BusrouteVO vo = new BusrouteVO();
		vo.setArea_code("286"); // 
		vo.setSearchWord(ParameterUtil.getStrParameter(paramWord));
		try {
			List<BusrouteVO> resultList = busrouteService.selectExploreUpList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectExploreUpList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 기반정보 - 노선 경로(하) 조회 > excel 저장
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/excelExploreDownList.do")
	public void excelExploreDownList(HttpServletRequest request, HttpServletResponse response,
			@RequestBody String list) {
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
							
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet(" 상세 경로 목록");
				
		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();
				
		for (int i = 0; i < (resultMap.size() + 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short)400);
		}
				
		HSSFCell cell = null;
     
		cell = excRowList.get(0).createCell(0);
		cell.setCellValue("순번");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("정류장 ID");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("단축번호");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("정류장명");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("유형");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("방향");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("거리");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("bstopseq"));
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("nodeid"));
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("shortid"));
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("nodenm"));
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("nodegbcd"));
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("dircd"));
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("bstop_sectdist"));
			i++;
		}
				
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 6);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 6);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 6);
		
		Date now = new Date();
		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " 상세 경로 목록";
				
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}

	/**
	 * 기반정보/메인- 노선버텍스 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteVtxList.do")
	public ModelAndView selectRouteVtxList(Model model, HttpServletRequest request,
			@RequestParam(value = "route_id", required = true) String paramRouteId) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();
		TbAdmBusrouteVO vo = new TbAdmBusrouteVO();
		vo.setRouteid(ParameterUtil.getStrParameter(paramRouteId));
		try {
			List<TbAdmBusrouteVO> resultList = busrouteService.selectRouteVtxList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteVtxList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 기반정보 - 노선 시간표 관리 / 편집
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/insertRouteScheduleInfo.do")
	public ModelAndView  insertRouteScheduleInfo(Model model, HttpServletRequest request,
			@RequestBody String jsonArray) {
		
		ModelAndView mv =  new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		List<Map<String, String>> rowsMap = new ArrayList<Map<String, String>>();		
		
		rowsMap = JSONArray.fromObject(jsonArray);
		
		String route_id = rowsMap.get(0).get("route_id");
		
//		int result_code = Const.SQL_ERROR;
		TbAdmRouteschedVO vo = null;		
		ArrayList<TbAdmRouteschedVO> rowList = new ArrayList<>();
		
		for (int i = 1; i < rowsMap.size(); i++) {
			vo = new TbAdmRouteschedVO();
			Map<String, String> row = rowsMap.get(i);
			
			vo.setRouteid(route_id);
			vo.setFbus_dephms(row.get("fbus_dephms"));
			vo.setLbus_dephms(row.get("lbus_dephms"));
			vo.setDescr(row.get("descr"));
			vo.setDowtpcd(row.get("dowtpcd"));
			
			rowList.add(vo);
		}
		
		/*int delete_count = 0;
		int insert_count = 0;
		
		try {
			delete_count = busrouteService.deleteRouteScheduleInfo(vo);
			logger.debug("##deleteRouteScheduleInfo " + delete_count);
		} catch (Exception e) {
			logger.error("##deleteRouteScheduleInfo exception " + e.toString());
		}
		
		try {
			
			if (rowList.size() > 0) {
				for (BusTimeTableVO row : rowList) {
					insert_count += busrouteService.insertRouteScheduleInfo(row);
				}
			}
			
			logger.debug("##insertRouteScheduleInfo " + insert_count);			
			resultMap.put("result", insert_count);			
		} catch (Exception e) {
			logger.error("##insertRouteScheduleInfo exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);						
		}*/
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");		
		return mv;
	}
	
	/**
	 * 선택 노선 경유지 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	/*@RequestMapping(value = "/selectViaNodeList.do")
	public ModelAndView selectViaNodeList(Model model, HttpServletRequest request,
			@RequestParam(value = "route_id", required = true) String paramRouteId) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<NodeVO>> resultMap = new HashMap<String, List<NodeVO>>();

		try {
			NodeVO vo = new NodeVO();
			vo.setRoute_id(ParameterUtil.getStrParameter(paramRouteId));
			List<NodeVO> resultList = busrouteService.selectViaNodeList(vo);	
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectViaNodeList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}*/

	/**
	 * 기반정보 - 차량 정보 조회 > Excel 다운로드
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/downloadVehicleExcel.do")
	public void downloadVehicleExcel(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			@RequestParam(value = "busid", required = true) String[] busid,
			@RequestParam(value = "carregno", required = true) String[] carregno,
			@RequestParam(value = "bus_type_name", required = true) String[] bus_type_name,			
			@RequestParam(value = "compnm", required = true) String[] compnm,
			@RequestParam(value = "lowplateyn", required = true) String[] lowplateyn,
			@RequestParam(value = "vehcapa", required = true) String[] vehcapa,
			@RequestParam(value = "descr", required = true) String[] descr,
			@RequestParam(value = "useyn", required = true) String[] useyn,
			@RequestParam(value = "obe_id", required = true) String[] obe_id,
			@RequestParam(value = "area_code", required = true) String[] area_code,
			@RequestParam(value = "regist_dt", required = true) String[] regist_dt,
			@RequestParam(value = "update_dt", required = true) String[] update_dt) {
		
		try {
			ArrayList<String[]> rowData = new ArrayList<>();

			rowData.add(busid);
			rowData.add(carregno);
			rowData.add(bus_type_name);
			rowData.add(compnm);
			rowData.add(lowplateyn);
			rowData.add(vehcapa);
			rowData.add(descr);
			rowData.add(useyn);
			rowData.add(obe_id);
			rowData.add(area_code);
			rowData.add(regist_dt);
			rowData.add(update_dt);

			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet("차량 정보 목록");

			sheet.setGridsPrinted(false);
			sheet.setFitToPage(true);
			sheet.setDisplayGuts(true);

			ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

			for (int i = 0; i < (busid.length + 1); i++) {
				excRowList.add(sheet.createRow(i));
				sheet.setColumnWidth(i, 4000);
				excRowList.get(i).setHeight((short) 400);
			}

			HSSFCell cell = null;

			cell = excRowList.get(0).createCell(0);
			cell.setCellValue("차량 ID");
			cell = excRowList.get(0).createCell(1);
			cell.setCellValue("차량 번호");
			cell = excRowList.get(0).createCell(2);
			cell.setCellValue("차량종류");
			cell = excRowList.get(0).createCell(3);
			cell.setCellValue("운수사");
			cell = excRowList.get(0).createCell(4);
			cell.setCellValue("저상여부");
			cell = excRowList.get(0).createCell(5);
			cell.setCellValue("승차제한인원");
			cell = excRowList.get(0).createCell(6);
			cell.setCellValue("비고");
			cell = excRowList.get(0).createCell(7);
			cell.setCellValue("사용여부");
			cell = excRowList.get(0).createCell(8);
			cell.setCellValue("OBE ID");
			cell = excRowList.get(0).createCell(9);
			cell.setCellValue("권역명");
			cell = excRowList.get(0).createCell(10);
			cell.setCellValue("등록일자");
			cell = excRowList.get(0).createCell(11);
			cell.setCellValue("업데이트 일자");

			for (int i = 0; i < busid.length; i++) {
				// 차량 ID
				cell = excRowList.get(i + 1).createCell(0);
				cell.setCellValue(rowData.get(0)[i]);
				// 차량 번호
				cell = excRowList.get(i + 1).createCell(1);
				cell.setCellValue(rowData.get(1)[i]);
				// 차량종류
				cell = excRowList.get(i + 1).createCell(2);
				cell.setCellValue(rowData.get(2)[i]);
				// 운수사
				cell = excRowList.get(i + 1).createCell(3);
				cell.setCellValue(rowData.get(3)[i]);
				// 저상여부
				cell = excRowList.get(i + 1).createCell(4);
				cell.setCellValue(rowData.get(4)[i]);
				// 승차제한인원
				cell = excRowList.get(i + 1).createCell(5);
				cell.setCellValue(rowData.get(5)[i]);
				// 비고
				cell = excRowList.get(i + 1).createCell(6);
				cell.setCellValue(rowData.get(6)[i]);
				// 사용여부
				cell = excRowList.get(i + 1).createCell(7);
				cell.setCellValue(rowData.get(7)[i]);
				// OBE ID
				cell = excRowList.get(i + 1).createCell(8);
				cell.setCellValue(rowData.get(8)[i]);
				// 권역명
				cell = excRowList.get(i + 1).createCell(9);
				cell.setCellValue(rowData.get(9)[i]);
				// 등록일자
				cell = excRowList.get(i + 1).createCell(10);
				cell.setCellValue(rowData.get(10)[i]);
				// 업데이트 일자
				cell = excRowList.get(i + 1).createCell(11);
				cell.setCellValue(rowData.get(11)[i]);
			}

			// Style Set
			ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, busid.length, 0, 11);
			ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 11);
			ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, busid.length, 0, 11);

			Date now = new Date();

			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String fileName = formatDate.format(now) + " 차량 정보 목록";

			ExcelUtil.excelFileDownload(wb, request, response, fileName);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
		
	/**
	 * 분석/가공 - 가공 파라미터>파라미터 리스트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectProcParamList.do")
	public ModelAndView selectProcParamList(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<ProcessParameterVO>> resultMap = new HashMap<String, List<ProcessParameterVO>>();

		try {
			ProcessParameterVO vo = new ProcessParameterVO();			
			List<ProcessParameterVO> resultList = busrouteService.selectProcParamList(vo);	
			resultMap.put("resultList", resultList);
			logger.debug("##selectProcParamList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectProcParamList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 분석/가공 - 가공 파라미터>노선 파라미터 리스트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value ="selectRouteProcParamList")
	public ModelAndView selectRouteProcParamList(Model model, HttpServletRequest request,
			@RequestParam(value = "route_id", required = true) String route_id) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<ProcessParameterVO>> resultMap = new HashMap<String, List<ProcessParameterVO>>();

		try {
			ProcessParameterVO vo = new ProcessParameterVO();
			vo.setRoute_id(route_id);
			
			List<ProcessParameterVO> resultList = busrouteService.selectRouteProcParamList(vo);	
			resultMap.put("resultList", resultList);
			logger.debug("##selectRouteProcParamList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteProcParamList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 분석/가공 - 가공 파라미터>파라미터 리스트 - excel 저장
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/excelProcParamList.do")
	public void excelProcParamList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="proc_param_id", required=true) String[] proc_param_id,	
			@RequestParam(value="change_hs_no", required=true) String[] change_hs_no,	
			@RequestParam(value="ptrn_rate", required=true) String[] ptrn_rate,    	
			@RequestParam(value="kalman_rate", required=true) String[] kalman_rate,  	
			@RequestParam(value="weight_1", required=true) String[] weight_1,      	
			@RequestParam(value="weight_2", required=true) String[] weight_2,      	
			@RequestParam(value="weight_3", required=true) String[] weight_3,      	
			@RequestParam(value="weight_4", required=true) String[] weight_4,      	
			@RequestParam(value="weight_5", required=true) String[] weight_5,      	
			@RequestParam(value="weight_6", required=true) String[] weight_6,      	
			@RequestParam(value="weight_7", required=true) String[] weight_7,      	
			@RequestParam(value="weight_8", required=true) String[] weight_8,      	
			@RequestParam(value="weight_9", required=true) String[] weight_9,      	
			@RequestParam(value="weight_10", required=true) String[] weight_10,      	
			@RequestParam(value="vailid_clct_time", required=true) String[] vailid_clct_time,
			@RequestParam(value="remark", required=true) String[] remark){
		
		try {
			ArrayList<String[]> rowData = new ArrayList<>();
			
			rowData.add(proc_param_id);	
			rowData.add(change_hs_no);	
			rowData.add(ptrn_rate);    	
			rowData.add(kalman_rate);  	
			rowData.add(weight_1);      	
			rowData.add(weight_2);      	
			rowData.add(weight_3);      	
			rowData.add(weight_4);      	
			rowData.add(weight_5);      	
			rowData.add(weight_6);      	
			rowData.add(weight_7);      	
			rowData.add(weight_8);      	
			rowData.add(weight_9);      	
			rowData.add(weight_10);      	
			rowData.add(vailid_clct_time);
			rowData.add(remark);
			
			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet("가공 파라미터 목록");

			sheet.setGridsPrinted(false);
			sheet.setFitToPage(true);
			sheet.setDisplayGuts(true);
			
			ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

			for (int i = 0; i < (proc_param_id.length + 1); i++) {
				excRowList.add(sheet.createRow(i));
				sheet.setColumnWidth(i, 4000);
				excRowList.get(i).setHeight((short) 400);
			}

			HSSFCell cell = null;	
			
			cell = excRowList.get(0).createCell(0);
			cell.setCellValue("파라미터ID");	
			cell = excRowList.get(0).createCell(1);
			cell.setCellValue("변경ID");		
			cell = excRowList.get(0).createCell(2);
			cell.setCellValue("패턴비율");		
			cell = excRowList.get(0).createCell(3);
			cell.setCellValue("칼만필터링 비율");
			cell = excRowList.get(0).createCell(4);
			cell.setCellValue("가중치1");		
			cell = excRowList.get(0).createCell(5);
			cell.setCellValue("가중치2");		
			cell = excRowList.get(0).createCell(6);
			cell.setCellValue("가중치3");		
			cell = excRowList.get(0).createCell(7);
			cell.setCellValue("가중치4");		
			cell = excRowList.get(0).createCell(8);
			cell.setCellValue("가중치5");		
			cell = excRowList.get(0).createCell(9);
			cell.setCellValue("가중치6");		
			cell = excRowList.get(0).createCell(10);
			cell.setCellValue("가중치7");		
			cell = excRowList.get(0).createCell(11);
			cell.setCellValue("가중치8");		
			cell = excRowList.get(0).createCell(12);
			cell.setCellValue("가중치9");		
			cell = excRowList.get(0).createCell(13);
			cell.setCellValue("가중치10");	
			cell = excRowList.get(0).createCell(14);
			cell.setCellValue("유효시간(H)");	
			cell = excRowList.get(0).createCell(15);
			cell.setCellValue("설명");
			
			for (int i = 0; i < proc_param_id.length; i++) {	
				cell = excRowList.get(i + 1).createCell(0);
				cell.setCellValue(rowData.get(0)[i]);			
				cell = excRowList.get(i + 1).createCell(1);
				cell.setCellValue(rowData.get(1)[i]);
				cell = excRowList.get(i + 1).createCell(2);
				cell.setCellValue(rowData.get(2)[i]);
				cell = excRowList.get(i + 1).createCell(3);
				cell.setCellValue(rowData.get(3)[i]);
				cell = excRowList.get(i + 1).createCell(4);
				cell.setCellValue(rowData.get(4)[i]);
				cell = excRowList.get(i + 1).createCell(5);
				cell.setCellValue(rowData.get(5)[i]);
				cell = excRowList.get(i + 1).createCell(6);
				cell.setCellValue(rowData.get(6)[i]);
				cell = excRowList.get(i + 1).createCell(7);
				cell.setCellValue(rowData.get(7)[i]);
				cell = excRowList.get(i + 1).createCell(8);
				cell.setCellValue(rowData.get(8)[i]);
				cell = excRowList.get(i + 1).createCell(9);
				cell.setCellValue(rowData.get(9)[i]);
				cell = excRowList.get(i + 1).createCell(10);
				cell.setCellValue(rowData.get(10)[i]);
				cell = excRowList.get(i + 1).createCell(11);
				cell.setCellValue(rowData.get(11)[i]);
				cell = excRowList.get(i + 1).createCell(12);
				cell.setCellValue(rowData.get(12)[i]);
				cell = excRowList.get(i + 1).createCell(13);
				cell.setCellValue(rowData.get(13)[i]);
				cell = excRowList.get(i + 1).createCell(14);
				cell.setCellValue(rowData.get(14)[i]);
				cell = excRowList.get(i + 1).createCell(15);
				cell.setCellValue(rowData.get(15)[i]);
			}
			
			// Style Set
			ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, proc_param_id.length, 0, 2);
			ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
			ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, proc_param_id.length, 0, 2);
					
			Date now = new Date();
			
			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String fileName = formatDate.format(now) + " 가공 파라미터 목록";
			
			ExcelUtil.excelFileDownload(wb, request, response, fileName);
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
	}
	
	/**
	 * 분석/가공 - 가공 파라미터>노선 파라미터 리스트 - excel 저장
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/excelRouteProcParamList.do")
	public void excelRouteProcParamList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="route_name", required=true) String[] route_name,    
			@RequestParam(value="route_id", required=true) String[] route_id,      
			@RequestParam(value="route_ord", required=true) String[] route_ord,     
			@RequestParam(value="st_node_name", required=true) String[] st_node_name,  
			@RequestParam(value="ed_node_name", required=true) String[] ed_node_name,  
			@RequestParam(value="st_node_id", required=true) String[] st_node_id,    
			@RequestParam(value="ed_node_id", required=true) String[] ed_node_id,    
			@RequestParam(value="proc_param_id", required=true) String[] proc_param_id, 
			@RequestParam(value="change_hs_no", required=true) String[] change_hs_no){
		
		try {
			ArrayList<String[]> rowData = new ArrayList<>();
			
			rowData.add(route_name);   
			rowData.add(route_id);     
			rowData.add(route_ord);    
			rowData.add(st_node_name); 
			rowData.add(ed_node_name); 
			rowData.add(st_node_id);   
			rowData.add(ed_node_id);   
			rowData.add(proc_param_id);
			rowData.add(change_hs_no);
			
			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet("노선 파라미터 목록");

			sheet.setGridsPrinted(false);
			sheet.setFitToPage(true);
			sheet.setDisplayGuts(true);
			
			ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

			for (int i = 0; i < (route_name.length + 1); i++) {
				excRowList.add(sheet.createRow(i));
				sheet.setColumnWidth(i, 4000);
				excRowList.get(i).setHeight((short) 400);
			}

			HSSFCell cell = null;
			
			cell = excRowList.get(0).createCell(0);
			cell.setCellValue("선택");	
			cell = excRowList.get(0).createCell(1);
			cell.setCellValue("노선번호");	
			cell = excRowList.get(0).createCell(2);
			cell.setCellValue("노선표준ID");
			cell = excRowList.get(0).createCell(3);
			cell.setCellValue("노선순번");	  
			cell = excRowList.get(0).createCell(4);
			cell.setCellValue("시점명");	
			cell = excRowList.get(0).createCell(5);
			cell.setCellValue("종점명");	
			cell = excRowList.get(0).createCell(6);
			cell.setCellValue("시점ID");	
			cell = excRowList.get(0).createCell(7);
			cell.setCellValue("종점ID");	
			cell = excRowList.get(0).createCell(8);
			cell.setCellValue("파라미터ID");
			cell = excRowList.get(0).createCell(9);
			cell.setCellValue("변경ID");
			
			for (int i = 0; i < proc_param_id.length; i++) {	
				cell = excRowList.get(i + 1).createCell(0);
				cell.setCellValue(rowData.get(0)[i]);			
				cell = excRowList.get(i + 1).createCell(1);
				cell.setCellValue(rowData.get(1)[i]);
				cell = excRowList.get(i + 1).createCell(2);
				cell.setCellValue(rowData.get(2)[i]);
				cell = excRowList.get(i + 1).createCell(3);
				cell.setCellValue(rowData.get(3)[i]);
				cell = excRowList.get(i + 1).createCell(4);
				cell.setCellValue(rowData.get(4)[i]);
				cell = excRowList.get(i + 1).createCell(5);
				cell.setCellValue(rowData.get(5)[i]);
				cell = excRowList.get(i + 1).createCell(6);
				cell.setCellValue(rowData.get(6)[i]);
				cell = excRowList.get(i + 1).createCell(7);
				cell.setCellValue(rowData.get(7)[i]);
				cell = excRowList.get(i + 1).createCell(8);
				cell.setCellValue(rowData.get(8)[i]);
				cell = excRowList.get(i + 1).createCell(9);
				cell.setCellValue(rowData.get(9)[i]);
			}
			
			// Style Set
			ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, proc_param_id.length, 0, 2);
			ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
			ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, proc_param_id.length, 0, 2);
					
			Date now = new Date();
			
			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String fileName = formatDate.format(now) + " 노선 파라미터 목록";
			
			ExcelUtil.excelFileDownload(wb, request, response, fileName);
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}		
	}	
	
	/**
	 * 기반정보 - 노선도 노선목록 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectImgRouteList.do")
	public ModelAndView selectImgRouteList(Model model, HttpServletRequest request,
			@RequestParam(value = "searchWord", required = false) String paramWord) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusrouteVO>> resultMap = new HashMap<String, List<TbAdmBusrouteVO>>();

		try {
			TbAdmBusrouteVO vo = new TbAdmBusrouteVO();	
			vo.setSearchWord(paramWord);
			List<TbAdmBusrouteVO> resultList = busrouteService.selectImgRouteList(vo);	
			resultMap.put("resultList", resultList);
			logger.debug("##selectImgRouteList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectImgRouteList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 기반정보 - 노선도 노선목록 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteNodeList.do")
	public ModelAndView selectRouteNodeList(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid") String paramId) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>();

		try {
			TbAdmNodeVO vo = new TbAdmNodeVO();	
			vo.setRouteid(paramId);
			List<TbAdmNodeVO> resultList = busrouteService.selectRouteNodeList(vo);	
			
			List<TbAdmNodeVO> busList = busrouteService.selectBusOperInfoList(vo);	
			
			
			resultMap.put("resultList", resultList);
			resultMap.put("busList", busList);
			logger.debug("##selectRouteNodeList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRouteNodeList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 기반정보 - 노선도 노선목록 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectNodeTrafficList.do")
	public ModelAndView selectNodeTrafficList(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid") String paramId) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>();

		try {
			TbAdmNodeVO vo = new TbAdmNodeVO();	
			vo.setRouteid(paramId);
			List<TbAdmNodeVO> resultList = busrouteService.selectRouteNodeList(vo);	
			
			resultMap.put("resultList", resultList);
			logger.debug("##selectNodeTrafficList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectNodeTrafficList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 기반정보 - 노선별 운행버스 정보 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBusOperInfoList.do")
	public ModelAndView selectBusOperInfoList(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid") String paramId) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>();

		try {
			TbAdmNodeVO vo = new TbAdmNodeVO();	
			vo.setRouteid(paramId);
			
			List<TbAdmNodeVO> busList = busrouteService.selectBusOperInfoList(vo);	
			resultMap.put("busList", busList);
		} catch (Exception e) {
			logger.error("##selectBusOperInfoList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
}
