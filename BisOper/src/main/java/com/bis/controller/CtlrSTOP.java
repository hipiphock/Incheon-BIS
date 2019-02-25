package com.bis.controller;

import java.sql.SQLException;
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
import org.apache.poi.ss.formula.functions.T;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.BusstopService;
import com.bis.util.Const;
import com.bis.util.ExcelUtil;
import com.bis.util.ParameterUtil;
import com.bis.vo.re.TbAdmBusstopVO;
import com.bis.vo.re.TbAdmNodeVO;
import com.bis.vo.re.TbBmcBstopbusarrivVO;
import com.bis.vo.re.TbBusstopVO;
import com.bis.vo.re.TbDmsPassingTimeVO;
import com.bis.vo.re.TbOmmBitVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrSTOP.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * 2019.01.22	박주언		added new method(selectStopListwithCondition, selectStopDetailList,
 * 								selectStopDetailStatistics)
 * 
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Controller
@RequestMapping(value = "/stop")
public class CtlrSTOP {

	@Resource(name = "busstopService")
	private BusstopService busstopService;

	private Logger logger = LogManager.getLogger(this.getClass());

	/**
	 * 운행종합상황조회 - 왼쪽 테이블에서 한 row를 더블클릭시 나타나는 오른쪽 위 테이블 (v0109)
	 */
	@RequestMapping(value = "/selectBusStopComunication.do")
    public ModelAndView selectBusStopList(Model model, HttpServletRequest request,
    		@RequestParam(value= "routeid", required= true) String routeid) {
       
        ModelAndView mv = new ModelAndView();
        Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
        try {
        	TbAdmBusstopVO vo = new TbAdmBusstopVO();
        	vo.setRouteid(routeid);
        	List<TbAdmBusstopVO> resultList = busstopService.selectBusStopComunication(vo);	
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusStopComunication exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 상단 카테고리 경로에 대한 출발/도착 정류소 정보 OR 검색시 나타나는 정류소(v0110)
	 */
	@RequestMapping(value = "/selectStopsLists.do")
	public ModelAndView selectRoutePNode(Model model, HttpServletRequest request,
			@RequestParam(value = "routeid", required = true) String routeid,
			@RequestParam(value = "pathseq1", required = false, defaultValue="") String c00,
			@RequestParam(value = "pathseq2", required = false, defaultValue="") String c01) {
		
		ModelAndView mv = new ModelAndView(); 
		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>(); 
		
		try{
			TbAdmNodeVO vo = new TbAdmNodeVO();
			vo.setRouteid(routeid);	
			vo.setC00(c00);
			vo.setC01(c01);
			List<TbAdmNodeVO> resultList = busstopService.selectStopsLists(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectStopsLists resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectStopsLists exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
		}
	
	/**
	 * 시설물유지관리보수(BIT) -  정류소명, 단축 ID, 시설물ID 카테고리 정보 (v0606
	 */
	@RequestMapping(value = "/selectStopFacilCateList.do")
    public ModelAndView selectStopFacilCateList(Model model, HttpServletRequest request) {
       
        ModelAndView mv = new ModelAndView();
        Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();
        try {
        	List<TbOmmBitVO> resultList = busstopService.selectStopFacilCateList();	
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopFacilCateList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 정류장 목록  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectStopList.do")
	public ModelAndView selectStopList(Model model, HttpServletRequest request,
			@RequestParam(value="searchWord", required=false, defaultValue="") String paramWord) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbBusstopVO>> resultMap = new HashMap<String, List<TbBusstopVO>>();
		TbBusstopVO vo = new TbBusstopVO();
		vo.setSearchWord(ParameterUtil.getStrParameter(paramWord));
		try {
			List<TbBusstopVO> resultList = busstopService.selectStopList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * (지도) 정류장 목록  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMapStopList.do")
	public ModelAndView selectMapStopList(Model model, HttpServletRequest request,
			@RequestParam(value="minLat", required=true) String minLat,
			@RequestParam(value="maxLat", required=true) String maxLat,
			@RequestParam(value="minLng", required=true) String minLng,
			@RequestParam(value="maxLng", required=true) String maxLng) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		vo.setMinLat(minLat);
		vo.setMaxLat(maxLat);
		vo.setMinLng(minLng);
		vo.setMaxLng(maxLng);
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectMapStopList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectMapStopList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * (지도) 노드(지점) 목록  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMapNodeList.do")
	public ModelAndView selectMapNodeList(Model model, HttpServletRequest request,
			@RequestParam(value="minLat", required=true) String minLat,
			@RequestParam(value="maxLat", required=true) String maxLat,
			@RequestParam(value="minLng", required=true) String minLng,
			@RequestParam(value="maxLng", required=true) String maxLng) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmNodeVO>> resultMap = new HashMap<String, List<TbAdmNodeVO>>();
		TbAdmNodeVO vo = new TbAdmNodeVO();
		vo.setMinLat(minLat);
		vo.setMaxLat(maxLat);
		vo.setMinLng(minLng);
		vo.setMaxLng(maxLng);
		try {
			List<TbAdmNodeVO> resultList = busstopService.selectMapNodeList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectMapNodeList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 경유 노선 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectViaRouteList.do")
	public ModelAndView selectViaRouteList(Model model, HttpServletRequest request,
			@RequestParam(value="bstopid", required=true) String paramId,
			@RequestParam(value="yncheck", required=false) String yncheck
			) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		vo.setBstopid(paramId);
		if(yncheck!=null){
			vo.setYncheck(yncheck);
		}
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectViaRouteList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectViaRouteList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 경유 노선 도착정보 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectArrivalInfoList.do")
	public ModelAndView selectArrivalInfoList(Model model, HttpServletRequest request,
			@RequestParam(value="bstopid", required=true) String paramId) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		vo.setBstopid(paramId);
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectArrivalInfoList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectViaRouteList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	
	/**
	 * 정류장 카테고리  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectStopCateList.do")
	public ModelAndView selectStopCateList(Model model, HttpServletRequest request,
			TbAdmBusstopVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectStopCateList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopCateList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 정류장 기초정보조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectStopBasicInfoList.do")
	public ModelAndView selectStopBasicInfoList(Model model, HttpServletRequest request,
			TbAdmBusstopVO vo) {

		ModelAndView mv = new ModelAndView();

		System.out.println(vo);
		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectStopBasicInfoList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopBasicInfoList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 정류소기초정보 수정
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateStopBasicInfo.do")
	public ModelAndView updateStopBasicInfo(Model model, HttpServletRequest request, TbAdmBusstopVO vo,
			HttpSession session) {
		ModelAndView mv = new ModelAndView();
			
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			String userId = (String)session.getAttribute("userId");
			vo.setUpd_userid(userId);
			busstopService.updateStopBasicInfo(vo);
			
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateStopBasicInfo exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	

	/**
	 * 노선조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectRouteListWithComp.do")
	public ModelAndView selectRouteListWithComp(Model model, HttpServletRequest request,
			@RequestParam(value="compid", required=false) String compid){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		vo.setCompid(compid);
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectRouteListWithComp(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteListWithComp exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	
	/**
	 * 정류소정차노선조회 - 정류소 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectSearchStopList.do")
	public ModelAndView selectSearchStopList(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectSearchStopList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectSearchStopList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 정류소정차노선조회 - 정류소정차노선검색
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectSearchStopRouteList.do")
	public ModelAndView selectSearchStopRouteList(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectSearchStopRouteList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectSearchStopRouteList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}	
	
	
	/**
	 * 정류소관리 - 지하철역 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectSearchSubwayList.do")
	public ModelAndView selectSearchSubwayList(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectSearchSubwayList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectSearchSubwayList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}	

	/**
	 * 정류소관리 - 환승지하철역 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectSearchTransferSubwayList.do")
	public ModelAndView selectSearchTransferSubwayList(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectSearchTransferSubwayList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectSearchTransferSubwayList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}	
	
	/** 
	 * 정류소관리 - 환승지하철역 추가
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertTransferSubway.do")
	public ModelAndView insertTransferSubway(Model model, HttpServletRequest request, 
			TbAdmBusstopVO vo) {
		
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			int cnt = busstopService.insertTransferSubway(vo);
			resultMap.put("result", cnt);
		} catch (Exception e) {
			logger.debug("##insertTransferSubway exception " + e.toString());
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
	@RequestMapping(value = "/deleteTransferSubway.do")
	public ModelAndView deleteTransferSubway(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			int cnt = busstopService.deleteTransferSubway(vo);
			
			resultMap.put("result", cnt);
		} catch (Exception e) {
			logger.debug("##deleteTransferSubway exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 정류소통과노선조회 - 정류소 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectSearchStopInfoList.do")
	public ModelAndView selectSearchStopInfoList(Model model, HttpServletRequest request,
			@RequestParam("projecttpcd") String projecttpcd,
			@RequestParam("bitid") String bitid,
			@RequestParam("bstopnm") String bstopnm,
			@RequestParam("bittpcd") String bittpcd){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList ;
			if( ParameterUtil.empty(projecttpcd) && ParameterUtil.empty(bitid) 
			    && ParameterUtil.empty(bstopnm) && ParameterUtil.empty(bittpcd)){ //전체조회
				resultList = busstopService.selectSearchStopInfoAllList();
			} else { //조건조회
				TbAdmBusstopVO vo = new TbAdmBusstopVO();
				vo.setProjecttpcd(projecttpcd);
				vo.setBitid(bitid);
				vo.setBstopnm(bstopnm);
				vo.setBitid(bitid);
				resultList = busstopService.selectSearchStopInfoList(vo);
			}
			
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectSearchStopInfoList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}	
	
	
	/**
	 * 정류소통과노선조회 - 통과노선 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectStopPassRouteList.do")
	public ModelAndView selectStopPassRouteList(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectStopPassRouteList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopPassRouteList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 운행서비스평가 / 통과시간대비제공정보비교 / 정류소검색결과
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 * added by 박주언
	 */
	@RequestMapping(value = "/selectStopListwithCondition")
	public ModelAndView selectStopListwithCondition(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectStopListwithCondition(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopListwithCondition exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 운행서비스평가 / 통과시간대비제공정보비교 / 정류소제공정보
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 * added by 박주언
	 */
	@RequestMapping(value = "/selectStopDetailList")
	public ModelAndView selectStopDetailList(Model model, HttpServletRequest request, TbBmcBstopbusarrivVO vo){
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbBmcBstopbusarrivVO>> resultMap = new HashMap<String, List<TbBmcBstopbusarrivVO>>();
		try {
			List<TbBmcBstopbusarrivVO> resultList = busstopService.selectStopDetailList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopDetailList Exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 운행서비스평가 / 통과시간대비제공정보비교조회 / 종류소제공정보(통계 결과만 보기)
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 * added by 박주언
	 */
	@RequestMapping(value = "/selectStopDetailStatistics")
	public ModelAndView selectStopDetailStatistics(Model model, HttpServletRequest request, TbDmsPassingTimeVO vo){
		 
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbDmsPassingTimeVO>> resultMap = new HashMap<String, List<TbDmsPassingTimeVO>>();
		try {
			List<TbDmsPassingTimeVO> resultList = busstopService.selectStopDetailStatistics(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStopDetailStatistics Exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	 }
	
	/**
	 * 정류소기초인허가정보 - 정류소인허가검색
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/selectSearchPermissionList.do")
	public ModelAndView selectSearchPermissionList(Model model, HttpServletRequest request, TbAdmBusstopVO vo){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectSearchPermissionList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectSearchPermissionList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}	
	

	/**
	 * 정류소기초인허가정보 - 인허가 마스터적용
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateMasterPermission.do")
	public ModelAndView updateMasterPermstat(Model model, HttpServletRequest request, TbAdmBusstopVO vo,
			HttpSession session) {
		ModelAndView mv = new ModelAndView();
			
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		try {
			String userId = (String)session.getAttribute("userId");
			vo.setTreat_userid(userId);
			busstopService.updateMasterPermstat(vo);
			
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateMasterPermstat exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	
	
	
	
	
	
	//### 이하 구버전 소스


	/**
	 * 정류장 목록 엑셀 저장
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/excelStopList.do", method=RequestMethod.POST)
	public void excelStopList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="bstopid", required=true) String[] stop_id,
			@RequestParam(value="short_bstopid", required=true) String[] service_id,
			@RequestParam(value="bstopnm", required=true) String[] stop_name){

		try{
			ArrayList<String[]> rowData = new ArrayList<>();

			rowData.add(stop_id);
			rowData.add(service_id);
			rowData.add(stop_name);			

			HSSFWorkbook wb = new HSSFWorkbook();			
			HSSFSheet sheet = wb.createSheet("정류장 목록");

			sheet.setGridsPrinted(false);
			sheet.setFitToPage(true);
			sheet.setDisplayGuts(true);

			ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

			for (int i = 0; i < (stop_id.length + 1); i++) {
				excRowList.add(sheet.createRow(i));
				sheet.setColumnWidth(i, 3000);
				excRowList.get(i).setHeight((short)400);
			}

			HSSFCell cell = null;
			//			{label:'표준 ID',			name:'stop_id',        index:'stop_id',         width: "95",   type: "I", sorttype:"number",	align:"center"},
			//          {label:'모바일 ID',		name:'service_id',     index:'service_id',      width: "95",   type: "I", sorttype:"number", 	align:"center"},
			//          {label:'정류장명',		name:'stop_name',      index:'stop_name',       width: "177",  type: "I", sorttype:"text", 	    align:"left"},
			cell = excRowList.get(0).createCell(0);
			cell.setCellValue("표준 ID");
			cell = excRowList.get(0).createCell(1);
			cell.setCellValue("모바일 ID");
			cell = excRowList.get(0).createCell(2);
			cell.setCellValue("정류장명");

			for (int i=0;i<stop_id.length;i++){				
				cell = excRowList.get(i+1).createCell(0);
				cell.setCellValue(rowData.get(0)[i]);

				cell = excRowList.get(i+1).createCell(1);
				cell.setCellValue(rowData.get(1)[i]);

				cell = excRowList.get(i+1).createCell(2);
				cell.setCellValue(rowData.get(2)[i]);				
			}

			//Style Set
			ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, stop_id.length, 0, 2);
			ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 2);
			ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, stop_id.length, 0, 2);

			Date now = new Date();

			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String fileName = formatDate.format(now) + " 정류장 목록";

			ExcelUtil.excelFileDownload(wb, request, response, fileName);
		} catch (Exception e){
			e.printStackTrace();
		}
	}
	//#############v305
    /**
     * 노선도모니터링 버스클릭팝업
     * @param vo
     * @return
     * @throws SQLException
     */
    @RequestMapping(value = "/selectBusPopup.do")
	public ModelAndView selectBusPopup(Model model, HttpServletRequest request,
			@RequestParam(value="busid", required=true) String busid){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		vo.setBusid(busid);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusPopup(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusPopup exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

    /**
     * 노선도모니터링 정류소클릭팝업
     * @param vo
     * @return
     * @throws SQLException
     */
    @RequestMapping(value = "/selectStopPopup.do")
   	public ModelAndView selectStopPopup(Model model, HttpServletRequest request,
   			@RequestParam(value="bstopid", required=true) String bstopid,
   			@RequestParam(value="routeid", required=true) String routeid){

   		ModelAndView mv = new ModelAndView();

   		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
   		TbAdmBusstopVO vo = new TbAdmBusstopVO();
   		vo.setBstopid(bstopid);
   		vo.setRouteid(routeid);

   		try {
   			List<TbAdmBusstopVO> resultList = busstopService.selectStopPopup(vo);
   			resultMap.put("resultList", resultList);
   		} catch (Exception e) {
   			logger.error("##selectStopPopup exception " + e.toString());
   		}
   		mv.addAllObjects(resultMap);
   		mv.setViewName("jsonView");
   		return mv;
   	}
    /**
     * 노선도모니터링 메시지
     * @param vo
     * @return
     * @throws SQLException
     */
    @RequestMapping(value = "/updateMsg.do")
   	public ModelAndView updateMsg(Model model, HttpServletRequest request,
   			@RequestParam(value="mdtid", required=true) String mdtid,
   			@RequestParam(value="busid", required=true) String busid,
   			@RequestParam(value="routeid", required=true) String routeid,
   			@RequestParam(value="message_content", required=true) String message_content,
   			@RequestParam(value="msgtpcd", required=true) String msgtpcd){
    	
   		ModelAndView mv = new ModelAndView();
   		int result_code = Const.SQL_ERROR;
   		
   		Map<String, Integer> resultMap = new HashMap<String, Integer>();
   		TbAdmBusstopVO vo = new TbAdmBusstopVO();
   		
   		HttpSession session = request.getSession();
		String userId = (String) session.getAttribute("userId");//ex.admin
		vo.setReg_userid(userId);
		String usertpcd = (String) session.getAttribute("usertpcd");
		vo.setUsertpcd(usertpcd);
		
		vo.setMdtid(mdtid);
		vo.setBusid(busid);
		vo.setRouteid(routeid);
		vo.setMessage_content(message_content);
		vo.setMsgtpcd(msgtpcd);
	   	 try {
	 		result_code = busstopService.updateMsg(vo);
	 	} catch (Exception e) {
	 		logger.error("updateMsg Exception" + e.getMessage());
	 	} finally {
	 		resultMap.put("result_code", result_code);
	 	}
	 	
	 	mv.addAllObjects(resultMap);
	 	mv.setViewName("jsonView");
	 	
	 	return mv;
   	}
   
	//#################v306
	/**
	 * 정류장 제공정보 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBstopList.do")
	public ModelAndView selectBstopList(Model model, HttpServletRequest request,
			@RequestParam(value="searchWord", required=false) String searchWord,
			@RequestParam(value="routeid", required=false) String routeid,
			@RequestParam(value="roadnm", required=false) String roadnm,
			@RequestParam(value="bittpcd", required=false) String bittpcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		vo.setSearchWord(searchWord);
		vo.setRoadnm(roadnm);
		vo.setRouteid(routeid);
		vo.setBittpcd(bittpcd);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBstopList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBstopList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	@RequestMapping(value="/selectBstopInfo.do")
	public ModelAndView selectBstopInfo(Model model, HttpServletRequest request,
			@RequestParam(value="bstopid", required=false) String bstopid,
			@RequestParam(value="time", required=false) String time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		if(time=="NaN"){
			logger.error("!@#$ "+time);
		}
		else
			logger.error("!@#$ not nan "+time);
		vo.setTime(time);
		vo.setBstopid(bstopid);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBstopInfo(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBstopInfo exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	@RequestMapping(value="/selectBittpcdList.do")
	public ModelAndView selectBittpcdList(Model model, HttpServletRequest request){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();


		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBittpcdList();
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBittpcdList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 정류장 제공정보 조회 엑셀 다운로드
	 * @param request
	 * @param response
	 * @param session
	 * @param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadBstopInfo.do")
	public void downloadBstopInfo(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){


		try {
			logger.debug("in");
			logger.debug("list = " + list);
			list = list.substring(5);

			List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();

			resultMap = JSONArray.fromObject(list);			
			logger.debug("resultMap = " + resultMap);
			logger.debug("resultMap size = " + resultMap.size());

			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet("정류장 제공정보 목록");

			sheet.setGridsPrinted(false);
			sheet.setFitToPage(true);
			sheet.setDisplayGuts(true);

			ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

			for (int i = 0; i < (resultMap.size() + 1); i++) {
				excRowList.add(sheet.createRow(i));
				sheet.setColumnWidth(i, 3000);
				excRowList.get(i).setHeight((short) 400);
			}

			HSSFCell cell = null;

			cell = excRowList.get(0).createCell(0);
			cell.setCellValue("이벤트발생시간");
			cell = excRowList.get(0).createCell(1);
			cell.setCellValue("가공일시");
			cell = excRowList.get(0).createCell(2);
			cell.setCellValue("노선번호");
			cell = excRowList.get(0).createCell(3);
			cell.setCellValue("방향구분");
			cell = excRowList.get(0).createCell(4);
			cell.setCellValue("차량번호");
			cell = excRowList.get(0).createCell(5);
			cell.setCellValue("남은노드수");
			cell = excRowList.get(0).createCell(6);
			cell.setCellValue("남은정류소수");
			cell = excRowList.get(0).createCell(7);
			cell.setCellValue("도착예정시간");
			cell = excRowList.get(0).createCell(8);
			cell.setCellValue("막차여부");

			int i = 1;
			for (Map<String, String> map : resultMap) {
				cell = excRowList.get(i).createCell(0);
				cell.setCellValue(map.get("eventdt"));
				cell = excRowList.get(i).createCell(1);
				cell.setCellValue(map.get("procdt"));
				cell = excRowList.get(i).createCell(2);
				cell.setCellValue(map.get("routeno"));
				cell = excRowList.get(i).createCell(3);
				cell.setCellValue(map.get("dirtype"));
				cell = excRowList.get(i).createCell(4);
				cell.setCellValue(map.get("caregno"));
				cell = excRowList.get(i).createCell(5);
				cell.setCellValue(map.get("rest_nodecnt"));
				cell = excRowList.get(i).createCell(6);
				cell.setCellValue(map.get("rest_bstopcnt"));
				cell = excRowList.get(i).createCell(7);
				cell.setCellValue(map.get("arrplantm"));
				cell = excRowList.get(i).createCell(8);
				cell.setCellValue(map.get("lastbusyn"));
				i++;
			}

			// Style Set
			ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
			ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
			ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);

			Date now = new Date();

			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String fileName = formatDate.format(now) + " 정류장 제공정보 목록";

			ExcelUtil.excelFileDownload(wb, request, response, fileName);			
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

	//################# v706
	/**
	 * 차량별 수집현황 조회
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value="/selectBusEvent.do")
	public ModelAndView selectBusEvent(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=false) String routeid,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time,
			@RequestParam(value="event_type", required=true) String event_type,
			@RequestParam(value="search_type", required=true) String search_type,
			@RequestParam(value="time", required=true) String time,
			@RequestParam(value="dt01", required=false) String dt01,
			@RequestParam(value="dt02", required=false) String dt02,
			@RequestParam(value="dt03", required=false) String dt03,
			@RequestParam(value="dt04", required=false) String dt04,
			@RequestParam(value="dt05", required=false) String dt05,
			@RequestParam(value="dt06", required=false) String dt06,
			@RequestParam(value="dt07", required=false) String dt07,
			@RequestParam(value="dt08", required=false) String dt08,
			@RequestParam(value="dt09", required=false) String dt09,
			@RequestParam(value="dt10", required=false) String dt10,
			@RequestParam(value="dt11", required=false) String dt11,
			@RequestParam(value="dt12", required=false) String dt12,
			@RequestParam(value="dt13", required=false) String dt13,
			@RequestParam(value="dt14", required=false) String dt14,
			@RequestParam(value="dt15", required=false) String dt15,
			@RequestParam(value="dt16", required=false) String dt16,
			@RequestParam(value="dt17", required=false) String dt17,
			@RequestParam(value="dt18", required=false) String dt18,
			@RequestParam(value="dt19", required=false) String dt19,
			@RequestParam(value="dt20", required=false) String dt20,
			@RequestParam(value="dt21", required=false) String dt21,
			@RequestParam(value="dt22", required=false) String dt22,
			@RequestParam(value="dt23", required=false) String dt23,
			@RequestParam(value="dt24", required=false) String dt24,
			@RequestParam(value="dt25", required=false) String dt25,
			@RequestParam(value="dt26", required=false) String dt26,
			@RequestParam(value="dt27", required=false) String dt27,
			@RequestParam(value="dt28", required=false) String dt28,
			@RequestParam(value="dt29", required=false) String dt29,
			@RequestParam(value="dt30", required=false) String dt30,
			@RequestParam(value="dt31", required=false) String dt31){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);
		vo.setEvent_type(event_type);
		vo.setSearch_type(search_type);
		vo.setTime(time);

		vo.setDt01(dt01);
		vo.setDt02(dt02);
		vo.setDt03(dt03);
		vo.setDt04(dt04);
		vo.setDt05(dt05);
		vo.setDt06(dt06);
		vo.setDt07(dt07);
		vo.setDt08(dt08);
		vo.setDt09(dt09);
		vo.setDt10(dt10);
		vo.setDt11(dt11);
		vo.setDt12(dt12);
		vo.setDt13(dt13);
		vo.setDt14(dt14);
		vo.setDt15(dt15);
		vo.setDt16(dt16);
		vo.setDt17(dt17);
		vo.setDt18(dt18);
		vo.setDt19(dt19);
		vo.setDt20(dt20);
		vo.setDt21(dt21);
		vo.setDt22(dt22);
		vo.setDt23(dt23);
		vo.setDt24(dt24);
		vo.setDt25(dt25);
		vo.setDt26(dt26);
		vo.setDt27(dt27);
		vo.setDt28(dt28);
		vo.setDt29(dt29);
		vo.setDt30(dt30);
		vo.setDt31(dt31);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusEvent(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusEvent exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}


	//################# v707
	/**
	 * 정류소별 수집현황 조회
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value="/selectBusStopEvent.do")
	public ModelAndView selectBusStopEvent(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=false) String routeid,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time,
			@RequestParam(value="event_type", required=true) String event_type,
			@RequestParam(value="search_type", required=true) String search_type,
			@RequestParam(value="dt01", required=false) String dt01,
			@RequestParam(value="dt02", required=false) String dt02,
			@RequestParam(value="dt03", required=false) String dt03,
			@RequestParam(value="dt04", required=false) String dt04,
			@RequestParam(value="dt05", required=false) String dt05,
			@RequestParam(value="dt06", required=false) String dt06,
			@RequestParam(value="dt07", required=false) String dt07,
			@RequestParam(value="dt08", required=false) String dt08,
			@RequestParam(value="dt09", required=false) String dt09,
			@RequestParam(value="dt10", required=false) String dt10,
			@RequestParam(value="dt11", required=false) String dt11,
			@RequestParam(value="dt12", required=false) String dt12,
			@RequestParam(value="dt13", required=false) String dt13,
			@RequestParam(value="dt14", required=false) String dt14,
			@RequestParam(value="dt15", required=false) String dt15,
			@RequestParam(value="dt16", required=false) String dt16,
			@RequestParam(value="dt17", required=false) String dt17,
			@RequestParam(value="dt18", required=false) String dt18,
			@RequestParam(value="dt19", required=false) String dt19,
			@RequestParam(value="dt20", required=false) String dt20,
			@RequestParam(value="dt21", required=false) String dt21,
			@RequestParam(value="dt22", required=false) String dt22,
			@RequestParam(value="dt23", required=false) String dt23,
			@RequestParam(value="dt24", required=false) String dt24,
			@RequestParam(value="dt25", required=false) String dt25,
			@RequestParam(value="dt26", required=false) String dt26,
			@RequestParam(value="dt27", required=false) String dt27,
			@RequestParam(value="dt28", required=false) String dt28,
			@RequestParam(value="dt29", required=false) String dt29,
			@RequestParam(value="dt30", required=false) String dt30,
			@RequestParam(value="dt31", required=false) String dt31){
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);
		vo.setEvent_type(event_type);
		vo.setSearch_type(search_type);

		vo.setDt01(dt01);
		vo.setDt02(dt02);
		vo.setDt03(dt03);
		vo.setDt04(dt04);
		vo.setDt05(dt05);
		vo.setDt06(dt06);
		vo.setDt07(dt07);
		vo.setDt08(dt08);
		vo.setDt09(dt09);
		vo.setDt10(dt10);
		vo.setDt11(dt11);
		vo.setDt12(dt12);
		vo.setDt13(dt13);
		vo.setDt14(dt14);
		vo.setDt15(dt15);
		vo.setDt16(dt16);
		vo.setDt17(dt17);
		vo.setDt18(dt18);
		vo.setDt19(dt19);
		vo.setDt20(dt20);
		vo.setDt21(dt21);
		vo.setDt22(dt22);
		vo.setDt23(dt23);
		vo.setDt24(dt24);
		vo.setDt25(dt25);
		vo.setDt26(dt26);
		vo.setDt27(dt27);
		vo.setDt28(dt28);
		vo.setDt29(dt29);
		vo.setDt30(dt30);
		vo.setDt31(dt31);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusStopEvent(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusStopEvent exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	//################# v708
	/**
	 * 버스회사조회
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value="/selectCompList.do")
	public ModelAndView selectCompList(Model model, HttpServletRequest request){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();


		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectCompList();
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectCompList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}	


	/**
	 * 차량번호조회
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value="/selectCarRegNo.do")
	public ModelAndView selectCarRegNo(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=true) String routeid){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectCarRegNo(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectCarRegNo exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 차량별 통신수집이력 조회
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value="/selectBusEventLog.do")
	public ModelAndView selectBusEventLog(Model model, HttpServletRequest request,
			@RequestParam(value="busid", required=false) String busid,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time,
			@RequestParam(value="event_type", required=true) String event_type){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setBusid(busid);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);
		vo.setEvent_type(event_type);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusEventLog(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusEventLog exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	//##########v709
	/**
	 * 노선별 평균수집율 조회
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value="/selectRouteAvgPercnt.do")
	public ModelAndView selectRouteAvgPercnt(Model model, HttpServletRequest request,
			@RequestParam(value="percnt1", required=true) String percnt1,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setPercnt1(percnt1);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);


		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectRouteAvgPercnt(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteAvgPercnt exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 차량별 수집율 조회
	 * @param model
	 * @param request
	 * @return
	 */

	@RequestMapping(value="/selectBusAvgPercnt.do")
	public ModelAndView selectBusAvgPercnt(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=true) String routeid,
			@RequestParam(value="percnt1", required=true) String percnt1,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);
		vo.setPercnt1(percnt1);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusAvgPercnt(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusAvgPercnt exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	//###########v611
	/**
	 * 차량단말기 제공이력조회
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	@RequestMapping(value="/selectBusMdtEvent.do")
	public ModelAndView selectBusMdtEvent(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=true) String routeid,
			@RequestParam(value="busid", required=true) String busid,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);
		vo.setBusid(busid);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusMdtEvent(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusMdtEvent exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	//###########v612

	@RequestMapping(value="/selectRouteList.do")
	public ModelAndView selectRouteList(Model model, HttpServletRequest request){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();


		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectRouteList();
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	@RequestMapping(value="/selectBusListWithBusrun.do")
	public ModelAndView selectBusListWithBusrun(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=true) String routeid){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusListWithBusrun(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusListWithBusrun exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 차량단말기 수집이력조회
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	@RequestMapping(value="/selectBusMdtCollEvent.do")
	public ModelAndView selectBusMdtCollEvent(Model model, HttpServletRequest request,
			@RequestParam(value="evttpcd", required=true) String evttpcd,
			@RequestParam(value="busid", required=true) String busid,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setEvttpcd(evttpcd);
		vo.setBusid(busid);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusMdtCollEvent(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusMdtCollEvent exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	//###########v614
	/**
	 * 노선별 운행대수 조회
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	@RequestMapping(value="/selectRouteRunList.do")
	public ModelAndView selectRouteRunList(Model model, HttpServletRequest request,
			@RequestParam(value="compid", required=true) String compid,
			@RequestParam(value="routeid", required=true) String routeid,
			@RequestParam(value="start_time", required=true) String start_time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setCompid(compid);
		vo.setRouteid(routeid);
		vo.setStart_time(start_time);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectRouteRunList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRouteRunList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	@RequestMapping(value="/selectBusRunList.do")
	public ModelAndView selectBusRunList(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=true) String routeid,
			@RequestParam(value="start_time", required=true) String start_time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);
		vo.setStart_time(start_time);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusRunList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusRunList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	//###########v615
	/**
	 * 회차별운행이력 왼쪽그리드
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	@RequestMapping(value="/selectBusWithStat.do")
	public ModelAndView selectBusWithStat(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=true) String routeid,
			@RequestParam(value="compid", required=true) String compid){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);
		vo.setCompid(compid);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusWithStat(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusWithStat exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	/**
	 * 회차별운행이력 오른쪽그리드
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	@RequestMapping(value="/selectBusRunEvent.do")
	public ModelAndView selectBusRunEvent(Model model, HttpServletRequest request,
			@RequestParam(value="carregno", required=true) String carregno,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time,
			@RequestParam(value="compid", required=true) String compid,
			@RequestParam(value="routeid", required=true) String routeid){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setCarregno(carregno);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);
		vo.setCompid(compid);
		vo.setRouteid(routeid);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusRunEvent(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusRunEvent exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}


	//###########v616
	/**
	 * 정류소별운행이력 왼쪽그리드
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	@RequestMapping(value="/selectBusWithStat2.do")
	public ModelAndView selectBusWithStat2(Model model, HttpServletRequest request,
			@RequestParam(value="routeid", required=false) String routeid,
			@RequestParam(value="compid", required=false) String compid,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="searchWord", required=false) String searchWord){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();

		vo.setRouteid(routeid);
		vo.setCompid(compid);
		vo.setStart_time(start_time);
		vo.setSearchWord(searchWord);

		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectBusWithStat2(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBusWithStat2 exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	/**
     * 정류소별운행이력 오른쪽그리드
     * 정류소별 출발도착시간조회
     * @param vo
     * @return
     * @throws SQLException
     */
    @RequestMapping(value="/selectStartArrivTimeList.do")
	public ModelAndView selectStartArrivTimeList(Model model, HttpServletRequest request,
			@RequestParam(value="searchWord", required=true) String searchWord,
			@RequestParam(value="routeid", required=true) String routeid,
			@RequestParam(value="busid", required=true) String busid,
			@RequestParam(value="start_time", required=true) String start_time,
			@RequestParam(value="end_time", required=true) String end_time){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbAdmBusstopVO>> resultMap = new HashMap<String, List<TbAdmBusstopVO>>();
		TbAdmBusstopVO vo = new TbAdmBusstopVO();
		vo.setRouteid(routeid);
		vo.setBusid(busid);
		vo.setStart_time(start_time);
		vo.setEnd_time(end_time);
		vo.setSearchWord(searchWord);
		try {
			List<TbAdmBusstopVO> resultList = busstopService.selectStartArrivTimeList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectStartArrivTimeList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	
	
	
	
	////////////공용엑셀
	/**
	 * 엑셀 다운로드
	 * @param request
	 * @param response
	 * @param session
	 * @param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadExcelFile.do")
	public void downloadBusEvent(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){

		try {
			
			List<String> colLabelMap = new ArrayList<String>();
			List<String> colNameMap = new ArrayList<String>();
			List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();

			
			// List = fileName + columnLabel + columnName + columnData;
			String list2 = list.substring(list.indexOf("]")+1); // columnName + columnData;
			
			String fileName = list.substring(list.indexOf("\"")+1, list.indexOf("\"",list.indexOf("\"")+1));//" 제목 "
			String colLabel	= list.substring(list.indexOf("["), list.indexOf("]")+1);
			String colName = list2.substring(0,list2.indexOf("]")+1);
			String colData = list2.substring(list2.indexOf("]")+1);
			
			//logger.error("list  = " + list);
			//logger.error("list2 = " + list2);
			
			//logger.error("fileName = "+fileName);
			//logger.error("colLabel = "+colLabel);
			//logger.error("colName = "+colName);
			//logger.error("colData = "+colData);

			colLabelMap = JSONArray.fromObject(colLabel);
			colNameMap = JSONArray.fromObject(colName);
			resultMap = JSONArray.fromObject(colData);

			//logger.debug("resultMap = " + resultMap);
			//logger.debug("resultMap size = " + resultMap.size());

			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet(fileName);

			sheet.setGridsPrinted(false);
			sheet.setFitToPage(true);
			sheet.setDisplayGuts(true);

			ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

			for (int i = 0; i < (resultMap.size() + 1); i++) {
				excRowList.add(sheet.createRow(i));
				sheet.setColumnWidth(i, 3000);
				excRowList.get(i).setHeight((short) 400);
			}

			HSSFCell cell = null;
			
			for(int i=1; i< colLabelMap.size();i++){
				cell = excRowList.get(0).createCell(i-1);
				cell.setCellValue(colLabelMap.get(i));
			}

			int i = 1;
			for (Map<String, String> map : resultMap) {
				for(int j=1;j<colNameMap.size();j++){
					cell = excRowList.get(i).createCell(j-1);
					cell.setCellValue(map.get(colNameMap.get(j)));
				}
				i++;
			}

			// Style Set
			ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
			ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
			ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);

			Date now = new Date();

			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String Name = formatDate.format(now) +" " + fileName;

			ExcelUtil.excelFileDownload(wb, request, response, Name);			
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

}
