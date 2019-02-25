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

import com.bis.service.SystemService;
import com.bis.util.Const;
import com.bis.util.ExcelUtil;
import com.bis.util.ParameterUtil;
import com.bis.vo.BisParameterVO;
import com.bis.vo.TableSpaceVO;
import com.bis.vo.re.TbEcmExorgVO;
import com.bis.vo.re.TbEcmExorgresponVO;
import com.bis.vo.re.TbOmcMdtfileregVO;
import com.bis.vo.re.TbOmmAdminareaVO;
import com.bis.vo.re.TbOmmCodeVO;
import com.bis.vo.re.TbOmmProcessVO;
import com.bis.vo.re.TbOmmUserVO;
import com.bis.vo.re.TbOmmViolparamVO;
import com.bis.vo.re.TbServerStatusVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrSystem.java
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
@RequestMapping(value = "/sys")
public class CtlrSystem {
    
	@Resource(name = "systemService")
    private SystemService systemService;
	
	private Logger logger = LogManager.getLogger(this.getClass());
	
	/**
	 * 유지보수업체정보관리 - 관계기관정보검색 (v0609)
	 */
	@RequestMapping(value = "/selectRelatorgList.do")
    public ModelAndView selectRelatorgList(Model model, HttpServletRequest request,
    		@RequestParam(value="orgtpcd", required=false, defaultValue="") String orgtpcd,
    		@RequestParam(value="orgnm", required=false, defaultValue="") String orgnm) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbEcmExorgVO>> resultMap = new HashMap<String, List<TbEcmExorgVO>>();
        
        try {
        	TbEcmExorgVO vo = new TbEcmExorgVO();
        	vo.setOrgnm(orgnm);
        	vo.setOrgtpcd(orgtpcd);
        	List<TbEcmExorgVO> resultList = systemService.selectRelatorgList(vo);
        	
        	resultMap.put("resultList", resultList);
        	logger.debug("##selectRelatorgList result" + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRelatorgList exception " + e.toString());
		}
        
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 유지보수업체정보관리 - 관계기관정보 신규등록(v0609)
	 */
	@RequestMapping(value = "/insertRelatorg.do")
	public ModelAndView insertRelatorg(Model model, HttpServletRequest request,
			TbEcmExorgVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			vo.setRelatorgid(systemService.selectMaxRelatorgid().getMaxseq()); 
			int res = systemService.insertRelatorg(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertRelatorg exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *  유지보수업체정보관리 - 관계기관정보 내용 수정(v0609)
	 */
	@RequestMapping(value = "/updateRelatorg.do")
	public ModelAndView updateRelatorg(Model model, HttpServletRequest request,
			TbEcmExorgVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = systemService.updateRelatorg(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##updateRelatorg exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *  유지보수업체정보관리 - 관계기관정보 내용 삭제(v0609)
	 */
	@RequestMapping(value = "/deleteRelatorg.do")
	public ModelAndView deleteRelatorg(Model model, HttpServletRequest request,
			TbEcmExorgVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = systemService.deleteRelatorg(vo);			
			systemService.deleteExorgrespon(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##deleteRelatorg exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *유지보수업체정보관리 - 담당자정보검색 (v0609)
	 */
	@RequestMapping(value = "/selectExorgresponList.do")
    public ModelAndView selectExorgresponList(Model model, HttpServletRequest request,
    		@RequestParam(value="relatorgid", required=true) String relatorgid) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbEcmExorgresponVO>> resultMap = new HashMap<String, List<TbEcmExorgresponVO>>();
        
        try {
        	TbEcmExorgresponVO vo = new TbEcmExorgresponVO();
        	vo.setRelatorgid(relatorgid);
        	List<TbEcmExorgresponVO> resultList = systemService.selectExorgresponList(vo);
        	
        	resultMap.put("resultList", resultList);
        	logger.debug("##selectExorgresponList result" + resultList.size());
		} catch (Exception e) {
			logger.error("##selectExorgresponList exception " + e.toString());
		}
        
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 *  유지보수업체정보관리 - 담당자 신규등록(v0609)
	 */
	@RequestMapping(value = "/insertExorgrespon.do")
	public ModelAndView insertExorgrespon(Model model, HttpServletRequest request,
			TbEcmExorgresponVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = systemService.insertExorgrespon(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertExorgrespon exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *  유지보수업체정보관리  - 담당자 삭제(v0609)
	 */
	@RequestMapping(value = "/deleteExorgrespon.do")
	public ModelAndView deleteExorgrespon(Model model, HttpServletRequest request,
			TbEcmExorgVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = systemService.deleteExorgrespon(vo);		
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##deleteRelatorg exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *  유지보수업체정보관리 - 담당자 내용 수정(v0609)
	 */
	@RequestMapping(value = "/updateExorgrespon.do")
	public ModelAndView updateExorgrespon(Model model, HttpServletRequest request,
			TbEcmExorgresponVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = systemService.updateExorgrespon(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##updateExorgrespon exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *BIT외부충격이력 - (인천)유지보수 업체 정보 (v0611)
	 */
	@RequestMapping(value = "/selectRelatorgInfo.do")
    public ModelAndView selectRelatorgInfo(Model model, HttpServletRequest request,
    		@RequestParam(value="relatorgid", required=true) String relatorgid) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbEcmExorgVO>> resultMap = new HashMap<String, List<TbEcmExorgVO>>();
        
        try {
        	TbEcmExorgVO vo = new TbEcmExorgVO();
        	vo.setRelatorgid(relatorgid);
        	List<TbEcmExorgVO> resultList = systemService.selectRelatorgInfo(vo);
        	
        	resultMap.put("resultList", resultList);
        	logger.debug("##selectRelatorgInfo result" + resultList.size());
		} catch (Exception e) {
			logger.error("##selectRelatorgInfo exception " + e.toString());
		}
        
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 무선업그레이드관리(lg) - 노선, 운영, GIS 최신버전 정보 (v0701, v0702)
	 */
	@RequestMapping(value = "/selectUptodateVer.do")
    public ModelAndView selectUptodateVer(Model model, HttpServletRequest request,
    		@RequestParam(value="detail", required=false ,defaultValue="") String detail)
    		 {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmcMdtfileregVO>> resultMap = new HashMap<String, List<TbOmcMdtfileregVO>>();
        
        try {
        	TbOmcMdtfileregVO vo = new TbOmcMdtfileregVO();
        	vo.setDetail(detail);
        	List<TbOmcMdtfileregVO> resultList = systemService.selectUptodateVer(vo);
        	
        	resultMap.put("resultList", resultList);
        	logger.debug("##selectUptodateVer result" + resultList.size());
		} catch (Exception e) {
			logger.error("##selectUptodateVer exception " + e.toString());
		}
        
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 무선업그레이드관리(lg) - 무선업그레이드 전송 (v0701) 
	 */
	@RequestMapping(value = "/updateUptodateVer.do")
	public ModelAndView updateUptodateVer(Model model, HttpServletRequest request,
			TbOmcMdtfileregVO vo) {
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = systemService.updateUptodateVer(vo);
			if(res == 0)
				res = systemService.insertUptodateVer(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##updateUptodateVer exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 코드 카테고리 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectCodeCateList.do")
    public ModelAndView selectCodeCateList(Model model, HttpServletRequest request,
    		@RequestParam(value="searchWord", required=false, defaultValue="") String searchWord) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();
        	vo.setSearchWord(searchWord);        	
        	List<TbOmmCodeVO> resultList = systemService.selectCodeCateList(vo);
        	
        	resultMap.put("resultList", resultList);
        	logger.debug("##selectCodeCateList result" + resultList.size());
		} catch (Exception e) {
			logger.error("##selectCodeCateList exception " + e.toString());
		}
        
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 코드성 데이터  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectCodeList.do")
    public ModelAndView selectCodeList(Model model, HttpServletRequest request
    		,@RequestParam(value="cdcategid", required=true) String cdcategid) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();
        	vo.setCdcategid(ParameterUtil.getStrParameter(cdcategid));
        	List<TbOmmCodeVO> resultList = systemService.selectCodeList(vo);
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectCodeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 신규 코드 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectNewCodeCd.do")
    public ModelAndView selectNewCodeCd(Model model, HttpServletRequest request
    		,@RequestParam(value="cdcategid", required=true) String cdcategid) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, TbOmmCodeVO> resultMap = new HashMap<String, TbOmmCodeVO>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();
        	vo.setCdcategid(ParameterUtil.getStrParameter(cdcategid));
        	TbOmmCodeVO result = systemService.selectNewCodeCd(vo);
        	resultMap.put("result", result);
		} catch (Exception e) {
			logger.error("##selectNewCodeCd exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	
	/**
	 * 코드  수정
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/saveCode.do")
    public ModelAndView saveCode(Model model, HttpServletRequest request,
      		TbOmmCodeVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	List<TbOmmCodeVO> list = new ArrayList<TbOmmCodeVO>();
        
        	List<String> cdcategidList = vo.getCdcategidList();
			List<String> cdList = vo.getCdList();
			List<String> useynList = vo.getUseynList();
			List<String> cdnmList = vo.getCdnmList();
			List<String> detailList = vo.getDetailList();
			List<String> descrList = vo.getDescrList();				
				
			if(vo.getCdcategidList() != null){        		
				for (int i = 0; i < cdcategidList.size(); i++) {
					TbOmmCodeVO paVo = new TbOmmCodeVO();
					paVo.setCdcategid(cdcategidList.get(i));
					paVo.setCd(cdList.get(i));
					paVo.setUseyn(useynList.get(i));
					paVo.setCdnm(cdnmList.get(i));
					paVo.setDetail(detailList.get(i));
					paVo.setDescr(descrList.get(i));
					list.add(paVo);
				}				
        	}
			
        	int res = systemService.saveCode(list, vo);
        	
        	resultMap.put("result", res);
		} catch (Exception e) {
			logger.error("##saveCode exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/excelCodeList.do")
	public void excelCodeList(HttpServletRequest request, HttpServletResponse response, HttpSession session,			
			@RequestBody String list){		
		
		logger.debug("in");
		logger.debug("list = " + list);
		list = list.substring(5);
		
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		
		resultMap = JSONArray.fromObject(list);
		logger.debug("resultMap = " + resultMap);
		logger.debug("resultMap size = " + resultMap.size());
		
		ArrayList<TbOmmCodeVO> voList = new ArrayList<>();
		for(Map<String, String> map : resultMap){
			TbOmmCodeVO vo = new TbOmmCodeVO();
			
			vo.setCdcategid(map.get("cdcategid"));
			vo.setCd(map.get("cd"));
			vo.setUseyn(map.get("useyn"));
			vo.setCdnm(map.get("cdnm"));
			vo.setDetail(map.get("detail"));
			vo.setDescr(map.get("descr"));
			
			voList.add(vo);
		}
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet( voList.get(0).getCdcategid() + " 코드 목록");
		
		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();
		
		for (int i = 0; i < (voList.size() + 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short)400);
		}
		
		HSSFCell cell = null;
	       
		cell = excRowList.get(0).createCell(0);
		cell.setCellValue("카테고리");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("코드");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("사용여부");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("코드 값");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("설명");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("비고");
		
		for (int i = 0; i < voList.size(); i++){
			TbOmmCodeVO rowValue = voList.get(i);
			
			cell = excRowList.get(i+1).createCell(0);			
			cell.setCellValue(rowValue.getCdcategid());
			
			cell = excRowList.get(i+1).createCell(1);
			cell.setCellValue(rowValue.getCd());
			
			cell = excRowList.get(i+1).createCell(2);			
			cell.setCellValue(rowValue.getUseyn().equals("1") ? "사용" : "미사용");
					
			cell = excRowList.get(i+1).createCell(3);
			cell.setCellValue(rowValue.getCdnm());
			
			cell = excRowList.get(i+1).createCell(4);
			cell.setCellValue(rowValue.getDetail());
			
			cell = excRowList.get(i+1).createCell(5);
			cell.setCellValue(rowValue.getDescr());
		}

		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, voList.size(), 0, 2);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, voList.size(), 0, 2);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " " + voList.get(0).getCdcategid() +" 코드 목록";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * 기반정보 정류장관리 코드성 데이터  일괄 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBusStopCodeList.do")
    public ModelAndView selectBusStopCodeList(Model model, HttpServletRequest request) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();
        	vo.setCdcategid("BSTOPTPCD");
        	List<TbOmmCodeVO> bstoptpcdList = systemService.selectCodeList(vo);
        	vo.setCdcategid("CENTERLANEYN");
        	List<TbOmmCodeVO> centerlaneyn = systemService.selectCodeList(vo);
        	vo.setCdcategid("BSTOPFACILCD");
        	List<TbOmmCodeVO> bstopfacilcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("BAYTPCD");
        	List<TbOmmCodeVO> baytpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("LOCTPCD");
        	List<TbOmmCodeVO> loctpcd = systemService.selectCodeList(vo);
        	resultMap.put("bstoptpcdList", bstoptpcdList);
        	resultMap.put("centerlaneyn", centerlaneyn);
        	resultMap.put("bstopfacilcd", bstopfacilcd);
        	resultMap.put("baytpcd", baytpcd);
        	resultMap.put("loctpcd", loctpcd);
		} catch (Exception e) {
			logger.error("##selectCodeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * BIT관리 제공파라미터(시나리오)관리 코드성 데이터  일괄 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitParamCodeList.do")
    public ModelAndView selectBitParamCodeList(Model model, HttpServletRequest request) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();
        	vo.setCdcategid("BITTPCD");
        	List<TbOmmCodeVO> bittpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("FONTTPCD");
        	List<TbOmmCodeVO> fonttpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("COLORCD");
        	List<TbOmmCodeVO> colorcd = systemService.selectCodeList(vo);        	
        
        	resultMap.put("bittpcd", bittpcd);
        	resultMap.put("fonttpcd", fonttpcd);
        	resultMap.put("colorcd", colorcd);        	
        
		} catch (Exception e) {
			logger.error("##selectBitParamCodeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * BIT 정보관리 - 코드성 데이터 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitManageCodeList.do")
    public ModelAndView selectBitManageCodeList(Model model, HttpServletRequest request) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();        	

        	vo.setCdcategid("PROJECTTPCD");
        	List<TbOmmCodeVO> projecttpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("BITTPCD");
        	List<TbOmmCodeVO> bittpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("COMMLINKTPCD");
        	List<TbOmmCodeVO> commlinktpcd = systemService.selectCodeList(vo);
        	vo.setOrgtpcd("91");	//현장시설유지보수
        	List<TbOmmCodeVO> relatorgid = systemService.selectRelatorgidList(vo);
        	
        	resultMap.put("projecttpcd", projecttpcd);
        	resultMap.put("bittpcd", bittpcd);
        	resultMap.put("commlinktpcd", commlinktpcd);
        	resultMap.put("relatorgid", relatorgid);
        
		} catch (Exception e) {
			logger.error("##selectBitParamDepth1List exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 서버 상태 목록 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectServerStateList.do")
    public ModelAndView selectServerStateList(Model model, HttpServletRequest request) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TbServerStatusVO>> resultMap = new HashMap<String, List<TbServerStatusVO>>();
        try {
        	List<TbServerStatusVO> resultList = systemService.selectServerStateList();
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectServerStateList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 서버별 BIT 상태 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitServerStatList.do")
    public ModelAndView selectBitServerStatList(Model model, HttpServletRequest request) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TbServerStatusVO>> resultMap = new HashMap<String, List<TbServerStatusVO>>();
        try {
        	List<TbServerStatusVO> resultList = systemService.selectBitServerStatList();
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBitServerStatList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 코드 카테고리 삭제
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteCodecategory.do")
    public ModelAndView deleteCodeCate(Model model, HttpServletRequest request, TbOmmCodeVO vo) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        try {
        	systemService.deleteCodecategory(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			resultMap.put("result", Const.SQL_ERROR);
			logger.error("##deleteCodeCate exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 카테고리  수정
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateCodecategory.do")
    public ModelAndView updateCodecategory(Model model, HttpServletRequest request,
      		TbOmmCodeVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	List<TbOmmCodeVO> list = new ArrayList<TbOmmCodeVO>();
        
        	List<String> arrCdcategid = vo.getArrCdcategid();
			List<String> arrCdcategnm = vo.getArrCdcategnm();
			List<String> arrDetail = vo.getArrDetail();
			List<String> arrDescr = vo.getArrDescr();
				
			if(arrCdcategid != null){        		
				for (int i = 0; i < arrCdcategid.size(); i++) {
					TbOmmCodeVO paVo = new TbOmmCodeVO();
					paVo.setCdcategid(arrCdcategid.get(i));
					paVo.setCdcategnm(arrCdcategnm.get(i));
					paVo.setDetail(arrDetail.get(i));
					paVo.setDescr(arrDescr.get(i));
					list.add(paVo);
				}				
        	}
			
        	systemService.updateCodecategory(list);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##saveCode exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	
	/**
	 * 카테고리  등록
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertCodecategory.do")
    public ModelAndView insertCodecategory(Model model, HttpServletRequest request,
      		TbOmmCodeVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	systemService.insertCodecategory(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##insertCodecategory exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	

	
	
	/**
	 * 노선기초정보관리 코드정보 일괄 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRouteBasicInfoCodeList.do")
    public ModelAndView selectRouteBasicInfoCodeList(Model model, HttpServletRequest request) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();
        	vo.setCdcategid("ROUTETPCD");
        	List<TbOmmCodeVO> routetpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("RUNTPCD");
        	List<TbOmmCodeVO> runtpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("JOINTALLOCYN");
        	List<TbOmmCodeVO> jointallocyn = systemService.selectCodeList(vo);
        	vo.setCdcategid("USEYN");
        	List<TbOmmCodeVO> useyn = systemService.selectCodeList(vo);
        	resultMap.put("routetpcd", routetpcd);
        	resultMap.put("runtpcd", runtpcd);
        	resultMap.put("jointallocyn", jointallocyn);
        	resultMap.put("useyn", useyn);
		} catch (Exception e) {
			logger.error("##selectRouteBasicInfoCodeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	
	/**
	 * 정류소기초정보관리 코드정보 일괄 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectStopBasicInfoCodeList.do")
    public ModelAndView selectStopBasicInfoCodeList(Model model, HttpServletRequest request) {
        
		ModelAndView mv = new ModelAndView();        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        
        try {
        	TbOmmCodeVO vo = new TbOmmCodeVO();
        	vo.setCdcategid("BSTOPFACILCD"); //정류소시설유형
        	List<TbOmmCodeVO> bstopfacilcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("CENTERLANEYN"); //중앙차로여부
        	List<TbOmmCodeVO> centerlaneyn = systemService.selectCodeList(vo);
        	vo.setCdcategid("BAYTPCD"); //베이유형
        	List<TbOmmCodeVO> baytpcd = systemService.selectCodeList(vo);
        	vo.setCdcategid("USEYN"); //사용여부
        	List<TbOmmCodeVO> useyn = systemService.selectCodeList(vo);
        	
        	resultMap.put("bstopfacilcd", bstopfacilcd);
        	resultMap.put("centerlaneyn", centerlaneyn);
        	resultMap.put("baytpcd", baytpcd);
        	resultMap.put("useyn", useyn);
		} catch (Exception e) {
			logger.error("##selectStopBasicInfoCodeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	

	/**
	 * 행정구역 정보조회 - 행정구역 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectAdminareaList.do")
    public ModelAndView selectAdminareaList(Model model, HttpServletRequest request, TbOmmAdminareaVO vo) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TbOmmAdminareaVO>> resultMap = new HashMap<String, List<TbOmmAdminareaVO>>();
        try {
        	List<TbOmmAdminareaVO> resultList = systemService.selectAdminareaList(vo);
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectAdminareaList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 운영파라미터관리 - 프로세스조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectProcessList.do")
    public ModelAndView selectProcessList(Model model, HttpServletRequest request, TbOmmProcessVO vo) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TbOmmProcessVO>> resultMap = new HashMap<String, List<TbOmmProcessVO>>();
        try {
        	List<TbOmmProcessVO> resultList = systemService.selectProcessList(vo);
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectProcessList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 운영파라미터관리 - 프로세스 등록
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertProcess.do")
    public ModelAndView insertProcess(Model model, HttpServletRequest request,
    		TbOmmProcessVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	systemService.insertProcess(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##insertProcess exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 운영파라미터관리 - 프로세스 수정
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateProcess.do")
    public ModelAndView updateProcess(Model model, HttpServletRequest request,
    		TbOmmProcessVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	systemService.updateProcess(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##updateProcess exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 운영파라미터관리 - 프로세스 삭제
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteProcess.do")
    public ModelAndView deleteProcess(Model model, HttpServletRequest request,
    		TbOmmProcessVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	systemService.deleteProcess(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##deleteProcess exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 운영위반기준정보관리 - 운행위반기준정보검색
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectViolateList.do")
    public ModelAndView selectViolateList(Model model, HttpServletRequest request, TbOmmViolparamVO vo) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TbOmmViolparamVO>> resultMap = new HashMap<String, List<TbOmmViolparamVO>>();
        try {
        	List<TbOmmViolparamVO> resultList = systemService.selectViolateList(vo);
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectViolateList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	
	/**
	 * 운행위반기준정보관리 - 운행위반기준정보 신규등록
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertViolate.do")
    public ModelAndView insertViolate(Model model, HttpServletRequest request,
    		TbOmmViolparamVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	systemService.insertViolate(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##insertViolate exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	

	/**
	 * 운행위반기준정보관리 - 운행위반기준정보 수정
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateViolate.do")
    public ModelAndView updateViolate(Model model, HttpServletRequest request,
    		TbOmmViolparamVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	systemService.updateViolate(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##updateViolate exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	

	/**
	 * 운행위반기준정보관리 - 운행위반기준정보 삭제
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteViolate.do")
    public ModelAndView deleteViolate(Model model, HttpServletRequest request,
    		TbOmmViolparamVO vo) {
       		
        ModelAndView mv = new ModelAndView();        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        
        try {
        	systemService.deleteViolate(vo);
        	resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("##deleteViolate exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	
	/**
	 * 관계기관 정보 조회 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectRelatorgidList.do")
    public ModelAndView selectRelatorgidList(Model model, HttpServletRequest request, TbOmmCodeVO vo) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TbOmmCodeVO>> resultMap = new HashMap<String, List<TbOmmCodeVO>>();
        try {
        	List<TbOmmCodeVO> resultList = systemService.selectRelatorgidList(vo);
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectRelatorgidList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	
	//######################## 이하 구 버전 / 수정 코드 위로 올리기 #####################

		
	/**
	 * 테이블 스페이스 및 상태 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectTableSpaceList.do")
    public ModelAndView selectTableSpaceList(Model model, HttpServletRequest request) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TableSpaceVO>> resultMap = new HashMap<String, List<TableSpaceVO>>();
        try {
        	List<TableSpaceVO> resultList = systemService.selectTableSpaceList();
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectObeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	
	
	/**
	 * 파라미터 그룹  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectParamGrpList.do")
    public ModelAndView selectParamGrpList(Model model, HttpServletRequest request) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<BisParameterVO>> resultMap = new HashMap<String, List<BisParameterVO>>();
        try {
        	List<BisParameterVO> resultList = systemService.selectParamGrpList();
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectCodeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }

	/**
	 * 파라미터  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectParamList.do")
    public ModelAndView selectParamList(Model model, HttpServletRequest request,
    		@RequestParam(value="param_group_id", required=false) String paramGrpId) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<BisParameterVO>> resultMap = new HashMap<String, List<BisParameterVO>>();
        try {
        	BisParameterVO vo = new BisParameterVO();
        	vo.setParam_group_id(paramGrpId);
        	List<BisParameterVO> resultList = systemService.selectParamList(vo);
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectParamList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 시스템 접속 이력 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectLoginHisList.do")
    public ModelAndView selectLoginHisList(Model model, HttpServletRequest request,
    		TbOmmUserVO vo) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<TbOmmUserVO>> resultMap = new HashMap<String, List<TbOmmUserVO>>();
        try {
        	logger.debug("##" + vo.getLogin_startdt());
        	logger.debug("##" + vo.getLogin_enddt());
        	List<TbOmmUserVO> resultList = systemService.selectLoginHisList(vo);
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectLoginHisList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadLoginHisExcel.do")
	public void downloadLoginHisExcel(HttpServletRequest request, HttpServletResponse response,	@RequestBody String list){
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("시스템 접속 이력 목록");
		
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
		cell.setCellValue("사용자 ID");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("사용자 명");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("등급");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("접속시간");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("종료시간");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("호스트 IP");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("histno"));
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("userid"));
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("usernm"));
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("authnm"));
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("login_startdt"));
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("login_enddt"));
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("ipaddr"));
			i++;
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 6);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 6);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 6);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " 시스템 접속 이력 목록";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * 파라미터  수정
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateParameter.do")
    public ModelAndView updateParameter(Model model, HttpServletRequest request,
    		BisParameterVO vo) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, Integer> resultMap = new HashMap<String, Integer>();
        try {
        	List<BisParameterVO> list = new ArrayList<BisParameterVO>();
		
        	List<String> idList = vo.getIdList();
			List<String> valueList = vo.getValueList();
			List<String> explainList = vo.getExplainList();
			List<String> remarkList = vo.getRemarkList();
		
			for(int i=0; i<idList.size(); i++) {
				BisParameterVO paVo = new BisParameterVO();
				paVo.setParam_group_id(vo.getParam_group_id());
				paVo.setParam_id(idList.get(i));
				paVo.setParam_value(valueList.get(i).replace("|", ""));
				paVo.setParam_explain(explainList.get(i).replace("|", ""));
				paVo.setRemark(remarkList.get(i).replace("|", ""));
			
				list.add(paVo);
			}
        	int res = systemService.updateParameter(list);
        	resultMap.put("result", res);
		} catch (Exception e) {
			logger.error("##updateParameter exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }	
}
