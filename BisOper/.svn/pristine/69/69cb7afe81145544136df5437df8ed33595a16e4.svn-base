package com.bis.controller;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import net.sf.json.JSONArray;

import org.apache.commons.io.FileUtils;
import org.apache.commons.net.ftp.FTPFile;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.bis.data.ScenarioData;
import com.bis.prop.GrobalProps;
import com.bis.service.BitService;
import com.bis.service.BusrouteService;
import com.bis.service.SystemService;
import com.bis.util.Const;
import com.bis.util.ExcelUtil;
import com.bis.util.FtpUtil;
import com.bis.util.ImageUtil;
import com.bis.util.ParameterUtil;
import com.bis.vo.ArrivalTrustVO;
import com.bis.vo.BitConnectHistoryVO;
import com.bis.vo.BitImgVO;
import com.bis.vo.BitScenDataVO;
import com.bis.vo.BitVO;
import com.bis.vo.MProcessCurrentVO;
import com.bis.vo.re.FileVO;
import com.bis.vo.re.TbAdmBusrouteVO;
import com.bis.vo.re.TbAdmBusstopVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbBitScenarioVO;
import com.bis.vo.re.TbIscBitmsgVO;
import com.bis.vo.re.TbIscBitstatVO;
import com.bis.vo.re.TbIshBitbusarrivVO;
import com.bis.vo.re.TbIshBitshockVO;
import com.bis.vo.re.TbMsgContentVO;
import com.bis.vo.re.TbNewBitparamVO;
import com.bis.vo.re.TbOmcBitctrlVO;
import com.bis.vo.re.TbOmcBitfileregVO;
import com.bis.vo.re.TbOmcMdtctrlVO;
import com.bis.vo.re.TbOmhFacilfailasVO;
import com.bis.vo.re.TbOmmBitVO;
import com.bis.vo.re.TbOmmBitparamVO;
import com.bis.vo.re.TbOmmCodeVO;
import com.bis.vo.re.TbOmmFacilVO;
import com.bis.vo.re.TbOmmWbitparamVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrBIT.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Controller
@RequestMapping(value = "/bit")
public class CtlrBIT {

	@Resource(name = "bitService")
	private BitService bitService;
	
	@Resource(name = "busrouteService")
	private BusrouteService busrouteService;
	
	@Resource(name = "systemService")
	private SystemService systemService;
	
	private Logger logger = LogManager.getLogger(this.getClass());

	/**
	 *안내기통신메시지현황/이력  - 상단과 하단 수동메시지 항목 (v0302)
	 */
	@RequestMapping(value = "/selectManualMsg.do")
	public ModelAndView selectBitList(Model model, HttpServletRequest request,
			@RequestParam(value = "bitid", required=false, defaultValue= "") String bitid) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();		
		try {
			TbIscBitmsgVO vo = new TbIscBitmsgVO();
			vo.setBitid(bitid);
			List<TbIscBitmsgVO> resultList = bitService.selectManualMsg(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectManualMsg resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectManualMsg exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *안내기통신메시지현황/이력  - 파라미터, 안내기제어  항목 (v0302)
	 */
	@RequestMapping(value = "/selectParamControl.do")
	public ModelAndView selectParamControl(Model model, HttpServletRequest request,
			@RequestParam(value = "ctrltpcd", required= true) String ctrltpcd, 
			@RequestParam(value = "bitid", required=false, defaultValue= "") String bitid) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();		
		try {
			TbIscBitmsgVO vo = new TbIscBitmsgVO();
			vo.setBitid(bitid);
			vo.setCtrltpcd(ctrltpcd);
			List<TbIscBitmsgVO> resultList = bitService.selectParamControl(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectParamControl resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectParamControl exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *안내기통신메시지현황/이력  - 상단과 하단 파일다운로드 항목 (v0302)
	 */
	@RequestMapping(value = "/selectFileDownload.do")
	public ModelAndView selectFileDownload(Model model, HttpServletRequest request,
			@RequestParam(value = "bitid", required=false, defaultValue= "") String bitid) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();		
		try {
			TbIscBitmsgVO vo = new TbIscBitmsgVO();
			vo.setBitid(bitid);
			List<TbIscBitmsgVO> resultList = bitService.selectFileDownload(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectileDownload resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectileDownload exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *안내기통신메시지현황/이력  - 상단과 하단 광역 BIT 수동메시지 (v0302)
	 */
	@RequestMapping(value = "/selectWbitManual.do")
	public ModelAndView selectWbitManual(Model model, HttpServletRequest request,
			@RequestParam(value = "bitid", required=false, defaultValue= "") String bitid) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();		
		try {
			TbIscBitmsgVO vo = new TbIscBitmsgVO();
			vo.setBitid(bitid);
			List<TbIscBitmsgVO> resultList = bitService.selectWbitManual(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectWbitManual resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectWbitManual exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *제공시나리오 관리  - 파라미터ID 카테고리 정보 (v0304)
	 */
	@RequestMapping(value = "/selectParamCateList.do")
	public ModelAndView selectWbitManual(Model model, HttpServletRequest request) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitparamVO>> resultMap = new HashMap<String, List<TbOmmBitparamVO>>();		
		try {
			List<TbOmmBitparamVO> resultList = bitService.selectParamCateList();
			resultMap.put("resultList", resultList);
			logger.debug("##selectParamCateList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectParamCateList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *제공시나리오 관리  - 인천안내기 제공시나리오 검색 (v0304)
	 */
	@RequestMapping(value = "/selectBitScenario.do")
	public ModelAndView selectBitScenario(Model model, HttpServletRequest request,
			@RequestParam(value="paramid", required =false, defaultValue="") String paramid,
			@RequestParam(value="bittpcd", required =false, defaultValue="") String bittpcd) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitparamVO>> resultMap = new HashMap<String, List<TbOmmBitparamVO>>();		
		try {
			TbOmmBitparamVO vo = new TbOmmBitparamVO();
			vo.setBittpcd(bittpcd);
			vo.setParamid(paramid);
			List<TbOmmBitparamVO> resultList = bitService.selectBitScenario(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectselectBitScenario resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectselectBitScenario exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *제공시나리오 관리  - 광역안내기 제공시나리오 검색 (v0304)
	 */
	@RequestMapping(value = "/selectWBitScenario.do")
	public ModelAndView selectWBitScenario(Model model, HttpServletRequest request,
			@RequestParam(value="paramid", required =false, defaultValue="") String paramid) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmWbitparamVO>> resultMap = new HashMap<String, List<TbOmmWbitparamVO>>();		
		try {
			TbOmmWbitparamVO vo = new TbOmmWbitparamVO();
			vo.setParamid(paramid);
			List<TbOmmWbitparamVO> resultList = bitService.selectWBitScenario(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectWBitScenario resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectWBitScenario exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *제공정보표출현황조회 - 상단 설치장소, 안내기 ID 카테고리 정보(v0305)
	 */
	@RequestMapping(value = "/selectBitInstallLocList.do")
	public ModelAndView selectBitInsallLocList(Model model, HttpServletRequest request){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			List<TbOmmBitVO> resultList = bitService.selectBitInstallLocList();
			resultMap.put("resultList", resultList);
			logger.debug("##selectBitInstallLocList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitInstallLocList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *제공정보표출현황조회 - 안내기검색결과 조회(v0305)
	 */
	@RequestMapping(value = "/selectBitLocation.do")
	public ModelAndView selectBitLocation(Model model, HttpServletRequest request,
			@RequestParam(value="bitid", required=false, defaultValue="") String bitid,
			@RequestParam(value="bittpcd", required=false, defaultValue="") String bittpcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			TbOmmBitVO vo = new TbOmmBitVO(); 
			vo.setBitid(bitid);
			vo.setBittpcd(bittpcd);
			List<TbOmmBitVO> resultList = bitService.selectBitLocation(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectBitLocation resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitLocation exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *안내기부가정보조회 - 좌측 인천 안내기 검색 리스트(v0307)
	 */
	@RequestMapping(value = "/selectIncheonBitStat.do")
	public ModelAndView selectIncheonBitStat(Model model, HttpServletRequest request){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitstatVO>> resultMap = new HashMap<String, List<TbIscBitstatVO>>();		
		try {
			List<TbIscBitstatVO> resultList = bitService.selectIncheonBitStat();
			resultMap.put("resultList", resultList);
			logger.debug("##selectIncheonBitStat resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectIncheonBitStat exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 *안내기부가정보조회 - 좌측 광역, 부천, 김포 안내기(v0307)
	 */
	@RequestMapping(value = "/selectOtherBitStat.do")
	public ModelAndView selectOtherBitStat(Model model, HttpServletRequest request){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitstatVO>> resultMap = new HashMap<String, List<TbIscBitstatVO>>();		
		try {
			List<TbIscBitstatVO> resultList = bitService.selectOtherBitStat();
			resultMap.put("resultList", resultList);
			logger.debug("##selectOtherBitStat resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectOtherBitStat exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *차량단말기 기초정보관리 - 차량단말기검색 (v0601)
	 */
	@RequestMapping(value = "/selectBusTerminal.do")
	public ModelAndView selectBusTerminal(Model model, HttpServletRequest request,
			@RequestParam(value="mdtid", required=false, defaultValue="") String mdtid,
			@RequestParam(value="modem_serialno", required=false, defaultValue="") String modem_serialno,
			@RequestParam(value="carregno", required=false, defaultValue="")String carregno,
			@RequestParam(value="compid", required=false, defaultValue="")String compid,
			@RequestParam(value="useyn", required=false, defaultValue="")String useyn){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmFacilVO>> resultMap = new HashMap<String, List<TbOmmFacilVO>>();		
		try {
			TbOmmFacilVO vo = new TbOmmFacilVO(); 
			vo.setMdtid(mdtid);
			vo.setModem_serialno(modem_serialno);
			vo.setCarregno(carregno);
			vo.setCompid(compid);
			vo.setUseyn(useyn);
			List<TbOmmFacilVO> resultList = bitService.selectBusTerminal(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectBusTerminal resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBusTerminal exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *전산장비 기초정보관리 - 전산장비 검색(v0603)
	 */
	@RequestMapping(value = "/selectEquip.do")
	public ModelAndView selectEquip(Model model, HttpServletRequest request,
			@RequestParam(value="garageapid", required=false, defaultValue="") String garageapid,
			@RequestParam(value="aptpcd", required=false, defaultValue="") String aptpcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmFacilVO>> resultMap = new HashMap<String, List<TbOmmFacilVO>>();		
		try {
			TbOmmFacilVO vo = new TbOmmFacilVO(); 
			vo.setGarageapid(garageapid);
			vo.setAptpcd(aptpcd);
			List<TbOmmFacilVO> resultList = bitService.selectEquip(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectEquip resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectEquip exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 전산장비 기초정보관리 - 전산장비 정보 수정, 차고지명  AP유형(v0603) 
	 */
	@RequestMapping(value = "/updateGarageIdType.do")
	public ModelAndView updateGarageIdType(Model model, HttpServletRequest request,
			TbOmmFacilVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			bitService.updateGarageIdType(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateGarageIdType exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 전산장비 기초정보관리 - 전산장비 정보 수정(v0603)
	 */
	@RequestMapping(value = "/updateEquipInfo.do")
	public ModelAndView updateEquipInfo(Model model, HttpServletRequest request,
			TbOmmFacilVO vo) {
		ModelAndView mv = new ModelAndView();
		HttpSession session = request.getSession();
		String userId = (String)session.getAttribute("userId");//ex.admin
		vo.setReg_userid(userId);
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			bitService.updateEquipInfo(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateEquipInfo exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 전산장비 기초정보관리 - 전산장비 신규등록, 시설물id AP유형 차고지명 (v0603)
	 */
	@RequestMapping(value = "/insertGarageap.do")
	public ModelAndView insertGarageap(Model model, HttpServletRequest request,
			TbOmmFacilVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = bitService.insertGarageap(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertGarageap exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 전산장비 기초정보관리 - 전산장비 신규등록 (v0603)
	 */
	@RequestMapping(value = "/insertFacil.do")
	public ModelAndView insertFacil(Model model, HttpServletRequest request,
			TbOmmFacilVO vo) {
		ModelAndView mv = new ModelAndView();
		HttpSession session = request.getSession();
		String userId = (String)session.getAttribute("userId");//ex.admin
		vo.setReg_userid(userId);
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = bitService.insertFacil(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertFacil exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *전산장비 기초정보관리 - 운영단말기 전산장비 검색(v0603)
	 */
	@RequestMapping(value = "/selectOptermEquip.do")
	public ModelAndView selectOptermEquip(Model model, HttpServletRequest request,
			@RequestParam(value="optermid", required=false, defaultValue="") String optermid,
			@RequestParam(value="optermusecd", required=false, defaultValue="") String optermusecd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmFacilVO>> resultMap = new HashMap<String, List<TbOmmFacilVO>>();		
		try {
			TbOmmFacilVO vo = new TbOmmFacilVO(); 
			vo.setOptermid(optermid);
			vo.setOptermusecd(optermusecd);
			List<TbOmmFacilVO> resultList = bitService.selectOptermEquip(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectOptermEquip resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectOptermEquip exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 전산장비 기초정보관리 - 운영단말기 정보 수정(v0603) 
	 */
	@RequestMapping(value = "/updateOpterm.do")
	public ModelAndView updateOpterm(Model model, HttpServletRequest request,
			TbOmmFacilVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			bitService.updateOpterm(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateOpterm exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 전산장비 기초정보관리 - 신규등록 시  쓸  optermid  (v0603) 
	 */
	@RequestMapping(value = "/selectMaxOptermid.do")
    public ModelAndView selectMaxOptermid(Model model, HttpServletRequest request) {
       
        ModelAndView mv = new ModelAndView();
        Map<String, TbAdmGarageVO> resultMap = new HashMap<String, TbAdmGarageVO>();
        try {
        	TbAdmGarageVO resultList = bitService.selectMaxOptermid();	
        	resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectMaxOptermid exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	/**
	 * 전산장비 기초정보관리 - 전산장비 신규등록, 시설물id AP유형 차고지명 (v0603)
	 */
	@RequestMapping(value = "/insertOpterm.do")
	public ModelAndView insertOpterm(Model model, HttpServletRequest request,
			TbOmmFacilVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = bitService.insertOpterm(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertOpterm exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 차량단말기 상태정보조회/제어 - 제어정보입력/전송 (v0604) 
	 */
	@RequestMapping(value = "/updateMdtCtrl.do")
	public ModelAndView updateMdtCtrl(Model model, HttpServletRequest request,
			TbOmcMdtctrlVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			bitService.updateMdtCtrl(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateMdtCtrl exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *시설물유지보수관리(BIT) - BIT A/S 이력검색 (v0606)
	 */
	@RequestMapping(value = "/selectBitAsList.do")
	public ModelAndView selectBitAsList(Model model, HttpServletRequest request,
			@RequestParam(value="fail_treatdt", required=false, defaultValue="") String fail_treatdt,
			@RequestParam(value="startdt", required=false, defaultValue="") String startdt,
			@RequestParam(value="enddt", required=false, defaultValue="") String enddt,
			@RequestParam(value="projecttpcd", required=false, defaultValue="") String projecttpcd,
			@RequestParam(value="failtreatcd", required=false, defaultValue="") String failtreatcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO(); 
			vo.setFail_treatdt(fail_treatdt);
			vo.setStartdt(startdt);
			vo.setEnddt(enddt);
			vo.setProjecttpcd(projecttpcd);
			vo.setFailtreatcd(failtreatcd);
			List<TbOmmBitVO> resultList = bitService.selectBitAsList(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectBitAsList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitAsList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 시설물유지보수관리(BIT)- BIT A/S 내역 수정  (v0606) 
	 */
	@RequestMapping(value = "/updateBitAs.do")
	public ModelAndView updateBitAs(Model model, HttpServletRequest request,
			TbOmhFacilfailasVO vo) {
		ModelAndView mv = new ModelAndView();

		HttpSession session = request.getSession();
		String userId = (String)session.getAttribute("userId");//ex.admin
		vo.setReg_userid(userId);
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			bitService.updateBitAs(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateBitAs exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 시설물유지보수관리(BIT)- BIT A/S 내역 삭제 (v0606)
	 */
	@RequestMapping(value = "deleteBitAs.do")
	public ModelAndView deleteBitAs(Model model, HttpServletRequest request, TbOmhFacilfailasVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		int result_code = Const.SQL_ERROR;
		
		try {
			result_code = bitService.deleteBitAs(vo);
		} catch (Exception e) {
			logger.error("deleteBitAs Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * 시설물유지보수관리(BIT) - SMS 전송 (v0603)
	 */
	@RequestMapping(value = "/insertSMSready.do")
	public ModelAndView insertSMSready(Model model, HttpServletRequest request,
			TbOmmBitVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = bitService.insertSMSready(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertSMSready exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *시설물유지보수관리(BMT) - BIT A/S 이력검색 (v0607)
	 */
	@RequestMapping(value = "/selectBitAsBMTList.do")
	public ModelAndView selectBitAsBMTList(Model model, HttpServletRequest request,
			@RequestParam(value="treat_gubun", required=false, defaultValue="") String treat_gubun,
			@RequestParam(value="startdt", required=false, defaultValue="") String startdt,
			@RequestParam(value="enddt", required=false, defaultValue="") String enddt,
			@RequestParam(value="failtreatcd", required=false, defaultValue="") String failtreatcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmhFacilfailasVO>> resultMap = new HashMap<String, List<TbOmhFacilfailasVO>>();		
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO(); 
			vo.setTreat_gubun(treat_gubun);
			vo.setStartdt(startdt);
			vo.setEnddt(enddt);
			vo.setFailtreatcd(failtreatcd);
			List<TbOmhFacilfailasVO> resultList = bitService.selectBitAsBMTList(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectBitAsBMTList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitAsBMTList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *시설물유지보수관리(BMT) - 차량번호 카테고리 정보 (v0607)
	 */
	@RequestMapping(value = "/selectCarInstallLoc.do")
	public ModelAndView selectCarInstallLoc(Model model, HttpServletRequest request){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			List<TbOmmBitVO> resultList = bitService.selectCarInstallLoc();
			resultMap.put("resultList", resultList);
			logger.debug("##selectCarInstallLoc resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectCarInstallLoc exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 시설물유지보수관리(AP무선) - 시설물명 카테고리 정보 (v0608)
	 */
	@RequestMapping(value = "/selectFacilnmCate.do")
	public ModelAndView selectFacilnmCate(Model model, HttpServletRequest request){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			List<TbOmmBitVO> resultList = bitService.selectFacilnmCate();
			resultMap.put("resultList", resultList);
			logger.debug("##selectFacilnmCate resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectFacilnmCate exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *시설물유지보수관리(AP무선) - 무선AP A/S 이력검색 (v0608)
	 */
	@RequestMapping(value = "/selectWAPAsList.do")
	public ModelAndView selectWAPAsList(Model model, HttpServletRequest request,
			@RequestParam(value="fail_treatdt", required=false, defaultValue="") String fail_treatdt,
			@RequestParam(value="startdt", required=false, defaultValue="") String startdt,
			@RequestParam(value="enddt", required=false, defaultValue="") String enddt,
			@RequestParam(value="failtpcd", required=false, defaultValue="") String failtpcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmhFacilfailasVO>> resultMap = new HashMap<String, List<TbOmhFacilfailasVO>>();		
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO();
			vo.setFail_treatdt(fail_treatdt);
			vo.setStartdt(startdt);
			vo.setEnddt(enddt);
			vo.setFailtpcd(failtpcd);
			List<TbOmhFacilfailasVO> resultList = bitService.selectWAPAsList(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectWAPAsList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectWAPAsList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *	장애통계조회  (v0610)
	 */
	@RequestMapping(value = "/selectFailStatList.do")
	public ModelAndView selectFailStatList(Model model, HttpServletRequest request,
			@RequestParam(value="startdt", required=false, defaultValue="") String startdt,
			@RequestParam(value="enddt", required=false, defaultValue="") String enddt){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmhFacilfailasVO>> resultMap = new HashMap<String, List<TbOmhFacilfailasVO>>();		
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO();
			vo.setStartdt(startdt);
			vo.setEnddt(enddt);
			List<TbOmhFacilfailasVO> resultList = bitService.selectFailStatList(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectFailStatList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectFailStatList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *	BIT외부충격이력 - (인천)정류소안내기검색 (v0611)
	 */
	@RequestMapping(value = "/selectStopTerminal.do")
	public ModelAndView selectStopTerminal(Model model, HttpServletRequest request,
			@RequestParam(value="bitid", required=false, defaultValue="") String bitid,
			@RequestParam(value="detail", required=false, defaultValue="") String detail,
			@RequestParam(value="bittpcd", required=false, defaultValue="") String bittpcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			TbOmmBitVO vo = new TbOmmBitVO();
			vo.setBitid(bitid);
			vo.setDetail(detail);
			vo.setBittpcd(bittpcd);
			List<TbOmmBitVO> resultList = bitService.selectStopTerminal(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectStopTerminal resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectStopTerminal exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *	BIT외부충격이력 - (인천)충격 이력 (v0611)
	 */
	@RequestMapping(value = "/selectColHistory.do")
	public ModelAndView selectColHistory(Model model, HttpServletRequest request,
			@RequestParam(value="bitid", required=true) String bitid,
			@RequestParam(value="startdt", required=false, defaultValue="") String startdt,
			@RequestParam(value="enddt", required=false, defaultValue="") String enddt){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIshBitshockVO>> resultMap = new HashMap<String, List<TbIshBitshockVO>>();		
		try {
			TbIshBitshockVO vo = new TbIshBitshockVO();
			vo.setBitid(bitid);
			vo.setStartdt(startdt);
			vo.setEnddt(enddt);
			List<TbIshBitshockVO> resultList = bitService.selectColHistory(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectColHistory resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectColHistory exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 *	BIT외부충격이력 - (인천)정류소안내기검색 (v0611)
	 */
	@RequestMapping(value = "/selectWStopTerminal.do")
	public ModelAndView selectWStopTerminal(Model model, HttpServletRequest request,
			@RequestParam(value="bitid", required=false, defaultValue="") String bitid,
			@RequestParam(value="detail", required=false, defaultValue="") String detail,
			@RequestParam(value="bittpcd", required=false, defaultValue="") String bittpcd){

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			TbOmmBitVO vo = new TbOmmBitVO();
			vo.setBitid(bitid);
			vo.setDetail(detail);
			vo.setBittpcd(bittpcd);
			List<TbOmmBitVO> resultList = bitService.selectWStopTerminal(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectWStopTerminal resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectWStopTerminal exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitList.do")
	public ModelAndView selectBitList(Model model, HttpServletRequest request,
			@RequestParam(value = "view_flag", required = false) String view_flag,
			@RequestParam(value = "searchWord", required = false) String paramWord,
			@RequestParam(value = "bittpcd", required = false) String bittpcd,
			@RequestParam(value = "projecttpcd", required = false) String projecttpcd,
			@RequestParam(value = "server_id", required = false) String server_id
			) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();		
		try {
			TbOmmBitVO vo = new TbOmmBitVO();
			vo.setView_flag(view_flag);	
			vo.setSearchWord(ParameterUtil.getStrParameter(paramWord));
			vo.setBittpcd(bittpcd);
			vo.setProjecttpcd(projecttpcd);
			vo.setServer_id(server_id);
			List<TbOmmBitVO> resultList = bitService.selectBitList(vo);
			
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectBitList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitList exception " +  e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
     * BIT (지도표출용) 목록 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMapBitList.do")
	public ModelAndView selectMapBitList(Model model, HttpServletRequest request,
			@RequestParam(value="minLat", required=true) String minLat,
    		@RequestParam(value="maxLat", required=true) String maxLat,
    		@RequestParam(value="minLng", required=true) String minLng,
    		@RequestParam(value="maxLng", required=true) String maxLng) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();
		try {
			TbOmmBitVO vo = new TbOmmBitVO();	
			vo.setMinLat(minLat);
			vo.setMaxLat(maxLat);
			vo.setMinLng(minLng);
			vo.setMaxLng(maxLng);
			
			List<TbOmmBitVO> resultList = bitService.selectMapBitList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("selectBitMapList Exception " + e.getMessage());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * BIT 충격감지 이력 - 조회결과
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectShockHisList.do")
	public ModelAndView selectShockHisList(Model model, HttpServletRequest request,
			@RequestParam(value = "text_search", required = false, defaultValue = "") String searchWord,			
			@RequestParam(value = "start_date_time", required = true) String start_date_time,
			@RequestParam(value = "end_date_time", required = true) String end_date_time,
			@RequestParam(value = "check_all", required = true) String check_all) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIshBitshockVO>> resultMap = new HashMap<String, List<TbIshBitshockVO>>();
		TbIshBitshockVO vo = new TbIshBitshockVO();

		vo.setSearchWord(searchWord);		
		vo.setStart_date_time(start_date_time);
		vo.setEnd_date_time(end_date_time);
		vo.setCheck_all(check_all);

		try {
			List<TbIshBitshockVO> resultList;

			resultList = bitService.selectShockHisList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectShockHisList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectShockHisList Exception " + e.getMessage());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * BIT 상태 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitStateHisList.do")
	public ModelAndView selectBitStatusHisList(Model model, HttpServletRequest request,
			@RequestParam(value = "text_search", required = false, defaultValue="") String searchWord,
			@RequestParam(value = "start_date_time", required = true) String start_date_time,
			@RequestParam(value = "end_date_time", required = true) String end_date_time) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIscBitstatVO>> resultMap = new HashMap<String, List<TbIscBitstatVO>>();
		TbIscBitstatVO vo = new TbIscBitstatVO();
		vo.setSearchWord(searchWord);
		vo.setStart_date_time(start_date_time);
		vo.setEnd_date_time(end_date_time);		

		try {
			List<TbIscBitstatVO> resultList = bitService.selectBitStateHisList(vo);
			resultMap.put("resultList", resultList);

			logger.debug("##selectBitStateHisList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitStateHisList exception " + e.toString());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * 이력/통계 - BIT 제공정보 이력 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitOfferInfoHisList.do")
	public ModelAndView selectBitOfferInfoHisList(Model model, HttpServletRequest request,
			@RequestParam(value = "bit_id", required = false) String paramBitId,
			@RequestParam(value = "st_dt", required = true) String paramStDt,
			@RequestParam(value = "ed_dt", required = true) String paramEdDt) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIshBitbusarrivVO>> resultMap = new HashMap<String, List<TbIshBitbusarrivVO>>();
		TbIshBitbusarrivVO vo = new TbIshBitbusarrivVO();
		
		try {
			vo.setSearchWord(ParameterUtil.getStrParameter(paramBitId));
			vo.setStart_date_time(ParameterUtil.getStrParameter(paramStDt));
			vo.setEnd_date_time(ParameterUtil.getStrParameter(paramEdDt));
			List<TbIshBitbusarrivVO> resultList = bitService.selectBitOfferInfoHisList(vo);

			resultMap.put("resultList", resultList);

		} catch (Exception e) {
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * BIT 상태 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitStateList.do")
	public ModelAndView selectBitStateList(Model model, HttpServletRequest request,
			@RequestParam(value = "text_search", required = false, defaultValue="") String searchWord) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIscBitstatVO>> resultMap = new HashMap<String, List<TbIscBitstatVO>>();
		TbIscBitstatVO vo = new TbIscBitstatVO();
		vo.setSearchWord(searchWord);
		
		try {
			List<TbIscBitstatVO> resultList = bitService.selectBitStateList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectBitStateList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitStateList exception " + e.toString());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * BIT 장애 이력조회
	 * @param model
	 * @param request
	 * @param vo (startdt, enddt, detail, treat_gubun)
	 * @return
	 */
	@RequestMapping(value = "/selectBitFailList.do")
	public ModelAndView selectBitFailList(Model model, HttpServletRequest request, TbOmhFacilfailasVO vo) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmhFacilfailasVO>> resultMap = new HashMap<String, List<TbOmhFacilfailasVO>>();
		try {
			List<TbOmhFacilfailasVO> resultList = bitService.selectBitFailList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBitFailList exception " + e.getMessage());
			e.printStackTrace();
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 장애 목록 엑셀 다운로드
	 * @param request
	 * @param response
	 * @param session
	 * @param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadBitFailExcel.do")
	public void downloadBitFailExcel(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){
		//앞 5글자("json=") 제거
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("BIT 장애 이력");
		
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
		cell.setCellValue("시설물 ID");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("등록일시");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("시설물 유형");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("등록 사용자ID");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("휴대폰 번호");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("장애 발생일시");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("장애 유형");
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("장애 처리일시");
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("장애 처리유형");
		cell = excRowList.get(0).createCell(9);
		cell.setCellValue("처리 상세내역");
		cell = excRowList.get(0).createCell(10);
		cell.setCellValue("처리 사용자ID");
		cell = excRowList.get(0).createCell(11);
		cell.setCellValue("처리 여부");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("facilid"));
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("regdt"));
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("faciltpnm"));
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("reg_userid"));
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("mobileno"));
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("fail_occurdt"));
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("failtpnm"));
			cell = excRowList.get(i).createCell(7);
			cell.setCellValue(map.get("fail_treatdt"));
			cell = excRowList.get(i).createCell(8);
			cell.setCellValue(map.get("failtreattpnm"));
			cell = excRowList.get(i).createCell(9);
			cell.setCellValue(map.get("treat_detail"));
			cell = excRowList.get(i).createCell(10);
			cell.setCellValue(map.get("treat_userid"));
			cell = excRowList.get(i).createCell(11);
			cell.setCellValue(map.get("treat_gubunnm"));
			i++;
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 11);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 11);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 11);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 장애 이력";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * BIT 지점 목록 조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectBitLocationList.do")
	public ModelAndView selectBitLocationList(Model model, HttpServletRequest request,
			@RequestParam(value="searchWord", required=false, defaultValue="") String searchWord) {
		ModelAndView mv = new ModelAndView();

		TbOmmBitVO vo = new TbOmmBitVO();
		vo.setSearchWord(searchWord);
		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();
		
		try {
			List<TbOmmBitVO> resultList = bitService.selectBitLocationList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 지점 목록 조회 Exception" + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	
	/**
	 * BIT 장애 유형, 처리 유형 조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectFailTreatTypeList.do")
	public ModelAndView selectFailTreatTypeList(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();

		TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO();
		Map<String, List<TbOmhFacilfailasVO>> resultMap = new HashMap<String, List<TbOmhFacilfailasVO>>();
		
		try {
			List<TbOmhFacilfailasVO> failTreatTypeList = bitService.selectFailTreatTypeList(vo);
			List<TbOmhFacilfailasVO> failTypeList = bitService.selectFailTypeList(vo);
			resultMap.put("failTreatTypeList", failTreatTypeList);
			resultMap.put("failTypeList", failTypeList);
		} catch (Exception e) {
			logger.error("BIT 장애 처리 유형 목록 조회 Exception" + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 장애 업데이트
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/updateBitFail.do")
	public ModelAndView updateBitFail(Model model, HttpServletRequest request, TbOmhFacilfailasVO vo) {
		ModelAndView mv = new ModelAndView();

		int result_code = Const.SQL_ERROR;
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		
		HttpSession session = request.getSession();
		String userId = (String) session.getAttribute("userId");//ex.admin
		vo.setReg_userid(userId);
		
		try {
			result_code = bitService.updateBitFail(vo);
		} catch (Exception e) {
			logger.error("BIT 장애 처리 유형 저장 Exception" + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 장애 등록
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/insertBitFail.do")
	public ModelAndView insertBitFail(Model model, HttpServletRequest request, TbOmhFacilfailasVO vo) {
		ModelAndView mv = new ModelAndView();

		int result_code = Const.SQL_ERROR;
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		
		HttpSession session = request.getSession();
		String userId = (String)session.getAttribute("userId");//ex.admin
		vo.setReg_userid(userId);
		try {
			result_code = bitService.insertBitFail(vo);
		} catch (Exception e) {
			logger.error("BIT 장애 등록 Exception" + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 관리 - 문자메세지 전송
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "selectBitSmsList.do")
	public ModelAndView selectBitSmsList(Model model, HttpServletRequest request, TbIscBitmsgVO vo,
			@RequestParam(value="by_route", required=true) boolean by_route) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();
		
		try {
			List<TbIscBitmsgVO> resultList = null;
			if (by_route) {
				resultList = bitService.selectBitSmsListByRoute(vo); //노선별
			} else {
				resultList = bitService.selectBitSmsListByRoad(vo); //도로별
			}
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("문자메세지 전송 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 관리 - 문자메세지 - 메세지폼리스트
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "selectMsgFormList.do")
	public ModelAndView selectMsgFormList(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();
		
		try {
			TbIscBitmsgVO vo = new TbIscBitmsgVO();
			List<TbIscBitmsgVO> resultList = bitService.selectMsgFormList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("메세지 폼 리스트 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 관리 - 문자메세지 - 파싱 메세지
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "selectParsedMsg.do")
	public ModelAndView selectParsedMsg(Model model, HttpServletRequest request, TbIscBitmsgVO tbIscBitmsgVO) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbMsgContentVO>> resultMap = new HashMap<String, List<TbMsgContentVO>>();
		
		try {
			List<TbIscBitmsgVO> resultList = bitService.selectMsgFormList(tbIscBitmsgVO);

			List<TbMsgContentVO> vo_list = new ArrayList<TbMsgContentVO>();
			String msg = resultList.get(0).getDisp_msgcontent();
				
			if (msg != null) {
				byte[] bytes = msg.getBytes();
				
				TbMsgContentVO vo = new TbMsgContentVO();
				int text_start_index = -1;
				boolean is_text = false;
				String prev_color = "";
				String prev_font = "";
				String prev_size = "";
				
				for (int i = 0; i < bytes.length; i++) {
					if (bytes[i] == TbMsgContentVO.SEPARATOR) {
						is_text = false;
						/**
						 * text 이후의 구분자 만났을 때 그 전까지를 하나의 객체로 인식, list에 추가
						 */
						if (text_start_index != -1) {
							int text_length = i - text_start_index;
							byte[] text_bytes = new byte[text_length];
							
							for (int j = 0; j < text_length; j++) {
								text_bytes[j] = bytes[j + text_start_index];
							}
							vo.setContent(new String(text_bytes));
							vo_list.add(vo);
							prev_color = vo.getColor();
							prev_font = vo.getFont();
							prev_size = vo.getSize();
							
							//새로운 객체 생성 후 이 전 객체의 스타일 저장
							vo = new TbMsgContentVO();
							vo.setColor(prev_color);
							vo.setFont(prev_font);
							vo.setSize(prev_size);
							text_start_index = -1;
						}
						
						//구분자 다음의 code를 vo에 setting
						if (i + 1 < bytes.length) {
							vo.setStyle(bytes[i+1]);
							
							i = i + 1;
						}
					/**
					 * text가 처음 나왔을 때의 index 저장
					 */
					} else if (!is_text) {
						is_text = true;
						text_start_index = i;
					}
				}
				
				//마지막이 text로 끝났을 때 처리
				if (text_start_index != -1) {
					int text_length = bytes.length - text_start_index;
					byte[] text_bytes = new byte[text_length];
				
					for (int j = 0; j < text_length; j++) {
						text_bytes[j] = bytes[j + text_start_index];
					}
					vo.setContent(new String(text_bytes));
					vo_list.add(vo);
				}
			}
			
			resultMap.put("resultList", vo_list);
		} catch (Exception e) {
			logger.error("메세지 폼 파싱 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 관리 - 문자메세지 - 메세지폼 추가
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "insertMsgForm.do")
	public ModelAndView insertMsgForm(Model model, HttpServletRequest request, TbIscBitmsgVO vo,
			@RequestParam(value="color_list", required=false, defaultValue="") String[] color_list,
			@RequestParam(value="font_list", required=false, defaultValue="") String[] font_list,
			@RequestParam(value="size_list", required=false, defaultValue="") String[] size_list,
			@RequestParam(value="contents_list", required=false, defaultValue="") String[] contents_list,
			@RequestParam(value="new_line_count_list", required=false, defaultValue="") String[] new_line_count_list) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		int result_code = Const.SQL_ERROR;
		
		try {
			String s = "";
			for (int i = 0; i < color_list.length; i++) {
				TbMsgContentVO content_vo = new TbMsgContentVO();
				content_vo.setColor(color_list[i]);
				content_vo.setFont(font_list[i]);
				content_vo.setSize(size_list[i]);
				content_vo.setContent(contents_list[i]);
		
				//정렬
				content_vo.setOrd(Integer.valueOf(vo.getDispeffectcd())); 
				//표출방법
				content_vo.setMthod(Integer.valueOf(vo.getDispmthdcd()));
				
				for (int j = Integer.parseInt(new_line_count_list[i]); j > 0; j--) {
					content_vo.setNew_line_count();
				}
				
				s += content_vo.getStyle(i);
			}
			
			vo.setDisp_msgcontent(s);
			
			
			result_code = bitService.insertMsgForm(vo);
		} catch (Exception e) {
			System.out.println("### insertMsgForm " + e.toString());
			logger.error("메세지 폼 추가  Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 관리 - 문자메세지 - 메세지폼 수정
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "updateMsgForm.do")
	public ModelAndView updateMsgForm(Model model, HttpServletRequest request, TbIscBitmsgVO vo,
			@RequestParam(value="color_list", required=false, defaultValue="") String[] color_list,
			@RequestParam(value="font_list", required=false, defaultValue="") String[] font_list,
			@RequestParam(value="size_list", required=false, defaultValue="") String[] size_list,
			@RequestParam(value="contents_list", required=false, defaultValue="") String[] contents_list,
			@RequestParam(value="new_line_count_list", required=false, defaultValue="") String[] new_line_count_list) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		int result_code = Const.SQL_ERROR;
		
		try {
			String s = "";
			for (int i = 0; i < color_list.length; i++) {
				TbMsgContentVO content_vo = new TbMsgContentVO();
				content_vo.setColor(color_list[i]);
				content_vo.setFont(font_list[i]);
				content_vo.setSize(size_list[i]);
				content_vo.setContent(contents_list[i]);
				
				//정렬
				content_vo.setOrd(Integer.valueOf(vo.getDispeffectcd())); 
				//표출방법
				content_vo.setMthod(Integer.valueOf(vo.getDispmthdcd()));
				
				for (int j = Integer.parseInt(new_line_count_list[i]); j > 0; j--) {
					content_vo.setNew_line_count();
				}
				
				s += content_vo.getStyle(i);
			}
			
			vo.setDisp_msgcontent(s);
			
			System.out.println("#######################");
			System.out.println(s);
			result_code = bitService.updateMsgForm(vo);
		} catch (Exception e) {
			logger.error("메세지 폼 수정  Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 관리 - 문자메세지 - 메세지폼 삭제
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "deleteMsgForm.do")
	public ModelAndView deleteMsgForm(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		int result_code = Const.SQL_ERROR;
		
		try {
			result_code = bitService.deleteMsgForm(vo);
		} catch (Exception e) {
			logger.error("메세지 폼 삭제 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 문자메세지 전송 목록 엑셀 다운로드
	 * @param request
	 * @param response
	 * @param session
	 * @param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadBitSmsList.do")
	public void downloadBitSmsList(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){
		//앞 5글자("json=") 제거
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("BIT 문자메세지 전송 목록");
		
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
		cell.setCellValue("관리 ID");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("BIT ID");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("설치 위치");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("설치 구");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("BIT 유형");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("센터 전송일시");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("Form ID");
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("메세지 순번");
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("서버 전송일시");
		cell = excRowList.get(0).createCell(9);
		cell.setCellValue("전송 결과");
		cell = excRowList.get(0).createCell(10);
		cell.setCellValue("응답일시");
		cell = excRowList.get(0).createCell(11);
		cell.setCellValue("통신오류");
		cell = excRowList.get(0).createCell(12);
		cell.setCellValue("내용");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("bitmid"));
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("bitid"));
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("installloc"));
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("adminnm"));
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("bittp"));
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("issuedt"));
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("formid"));
			cell = excRowList.get(i).createCell(7);
			cell.setCellValue(map.get("msgseq"));
			cell = excRowList.get(i).createCell(8);
			cell.setCellValue(map.get("snddt"));
			cell = excRowList.get(i).createCell(9);
			cell.setCellValue(map.get("sndrslt"));
			cell = excRowList.get(i).createCell(10);
			cell.setCellValue(map.get("reply_colldt"));
			cell = excRowList.get(i).createCell(11);
			cell.setCellValue(map.get("commerr"));
			cell = excRowList.get(i).createCell(12);
			cell.setCellValue(map.get("msgcontent"));
			i++;
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 12);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 12);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 12);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 문자메세지 전송 목록";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 수동메세지 현황
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitCurMessageList.do")
	public ModelAndView selectBitCurMessageList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitCurMessageList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 수동메세지 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 수동메세지 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitHisMessageList.do")
	public ModelAndView selectBitHisMessageList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitHisMessageList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 수동메세지 이력조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 파라미터
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitCurParameterList.do")
	public ModelAndView selectBitCurParameterList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitCurParameterList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 파라미터 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 파라미터 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitHisParameterList.do")
	public ModelAndView selectBitHisParameterList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitHisParameterList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 파라미터 이력 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 안내기 제어
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitCurControlList.do")
	public ModelAndView selectBitCurControlList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitCurControlList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 안내기제어 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 안내기 제어 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitHisControlList.do")
	public ModelAndView selectBitHisControlList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitHisControlList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 안내기제어 이력 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 파일 다운로드
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitCurDownloadList.do")
	public ModelAndView selectBitCurDownloadList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitCurDownloadList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 파일다운로드 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 파일 다운로드 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitHisDownloadList.do")
	public ModelAndView selectBitHisDownloadList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitHisDownloadList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 파일다운로드 이력 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 광역 수동메세지 현황
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitCurWMessageList.do")
	public ModelAndView selectBitCurWMessageList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitCurWMessageList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 광역수동메세지 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT관리 - BIT 제공정보 현황조회 - 광역수동메세지 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitHisWMessageList.do")
	public ModelAndView selectBitHisWMessageList(Model model, HttpServletRequest request, TbIscBitmsgVO vo) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbIscBitmsgVO>> resultMap = new HashMap<String, List<TbIscBitmsgVO>>();

		try {
			List<TbIscBitmsgVO> resultList = bitService.selectBitHisWMessageList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT제공정보 현황조회 - 광역 수동메세지 이력조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 제공정보 현황조회 엑셀 다운로드
	 * @param request
	 * @param response
	 * @param session
	 * @param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadBitCurInfo.do")
	public void downloadBitCurInfo(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){
		//앞 5글자("json=") 제거
		String name = list.split("=")[0];
		list = list.split("=")[1];
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("BIT제공정보 - " + name);
		
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
		cell.setCellValue("관리 ID");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("BIT ID");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("설치 위치");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("BIT 유형");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("단축 ID");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("센터전송일시");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("메세지 순번");
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("서버전송일시");
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("전송결과");
		cell = excRowList.get(0).createCell(9);
		cell.setCellValue("통신오류");
		cell = excRowList.get(0).createCell(10);
		cell.setCellValue("응답일시");
		cell = excRowList.get(0).createCell(11);
		cell.setCellValue("내용");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("bitmid"));
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("bitid"));
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("installloc"));
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("bittp"));
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("short_bstopid"));
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("issuedt"));
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("msgseq"));
			cell = excRowList.get(i).createCell(7);
			cell.setCellValue(map.get("snddt"));
			cell = excRowList.get(i).createCell(8);
			cell.setCellValue(map.get("sndrslt"));
			cell = excRowList.get(i).createCell(9);
			cell.setCellValue(map.get("commerr"));
			cell = excRowList.get(i).createCell(10);
			cell.setCellValue(map.get("reply_colldt"));
			cell = excRowList.get(i).createCell(11);
			cell.setCellValue(map.get("msgcontent"));
			i++;
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 11);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 11);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 11);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT제공정보 - " + name;
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * BIT 상태  - 조회결과 엑셀 다운로드 // BIT 상태 이력 호환
	 * 
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/excelBitStateList.do")
	public void excelBitStateList(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			@RequestBody String list) {
		
		logger.debug("in");
		logger.debug("list = " + list);
		list = list.substring(5);
		
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		
		resultMap = JSONArray.fromObject(list);
		logger.debug("resultMap = " + resultMap);
		logger.debug("resultMap size = " + resultMap.size());
		
		HSSFWorkbook wb = new HSSFWorkbook();
		HSSFSheet sheet = wb.createSheet("BIT 상태 목록");

		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

		for (int i = 0; i < (resultMap.size() + 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short) 400);
		}

		HSSFCell cell = null;
		
		// 라벨 생성
		cell = excRowList.get(0).createCell(0);
		cell.setCellValue("구분");		   		
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("사업구분");		   	
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("관리ID");		   	
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("BIT ID");		   		
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("단축ID");		   	
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("설치위치");		   	
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("안내기유형");		
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("수집일시");			
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("IP주소");			
		cell = excRowList.get(0).createCell(9);
		cell.setCellValue("통신회선ID");		
		cell = excRowList.get(0).createCell(10);
		cell.setCellValue("전기고객번호");	
		cell = excRowList.get(0).createCell(11);
		cell.setCellValue("통신사");			
		cell = excRowList.get(0).createCell(12);
		cell.setCellValue("통신상태");			
		cell = excRowList.get(0).createCell(13);
		cell.setCellValue("화면상태led");		
		cell = excRowList.get(0).createCell(14);
		cell.setCellValue("단면상태LCD");	
		cell = excRowList.get(0).createCell(15);
		cell.setCellValue("양면상태LCD");	
		cell = excRowList.get(0).createCell(16);
		cell.setCellValue("온도");				
		cell = excRowList.get(0).createCell(17);
		cell.setCellValue("도어");				
		cell = excRowList.get(0).createCell(18);
		cell.setCellValue("팬상태");		   	
		cell = excRowList.get(0).createCell(19);
		cell.setCellValue("히터상태");		   	
		cell = excRowList.get(0).createCell(20);
		cell.setCellValue("히터자동여부");	
		cell = excRowList.get(0).createCell(21);
		cell.setCellValue("팬자동여부");		
		cell = excRowList.get(0).createCell(22);
		cell.setCellValue("전원자동여부");	
		cell = excRowList.get(0).createCell(23);
		cell.setCellValue("음량");		   		
		cell = excRowList.get(0).createCell(24);
		cell.setCellValue("휘도");		   		
		cell = excRowList.get(0).createCell(25);
		cell.setCellValue("LED조도");		   	
		cell = excRowList.get(0).createCell(26);
		cell.setCellValue("LCD조도");			
		cell = excRowList.get(0).createCell(27);
		cell.setCellValue("충격");	
		
		// 열 생성
		int i = 1; // 0 : 라벨 행, 1~ : 데이터 행
		for(Map<String, String> map : resultMap ){			
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("etc"));					
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("widearea"));			
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("bitmid"));			
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("bitid"));				
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("sbstopid"));			
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("bstopnm"));			
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("bittype"));			
			cell = excRowList.get(i).createCell(7);
			cell.setCellValue(map.get("colldt"));			
			cell = excRowList.get(i).createCell(8);
			cell.setCellValue(map.get("ip_addr"));			
			cell = excRowList.get(i).createCell(9);
			cell.setCellValue(map.get("com_linenum"));	
			cell = excRowList.get(i).createCell(10);
			cell.setCellValue(map.get("power_num"));		
			cell = excRowList.get(i).createCell(11);
			cell.setCellValue(map.get("com_asso"));		
			cell = excRowList.get(i).createCell(12);
			cell.setCellValue(map.get("netstatus"));			
			cell = excRowList.get(i).createCell(13);
			cell.setCellValue(map.get("ledpwr_onoff"));	
			cell = excRowList.get(i).createCell(14);
			cell.setCellValue(map.get("lcdpwr_onoff1"));	
			cell = excRowList.get(i).createCell(15);
			cell.setCellValue(map.get("lcdpwr_onoff2"));	
			cell = excRowList.get(i).createCell(16);
			cell.setCellValue(map.get("temperature"));	
			cell = excRowList.get(i).createCell(17);
			cell.setCellValue(map.get("door_onoff"));		
			cell = excRowList.get(i).createCell(18);
			cell.setCellValue(map.get("fan_onoff"));		
			cell = excRowList.get(i).createCell(19);
			cell.setCellValue(map.get("heat_onoff"));		
			cell = excRowList.get(i).createCell(20);
			cell.setCellValue(map.get("heat_autoyn"));	
			cell = excRowList.get(i).createCell(21);
			cell.setCellValue(map.get("fan_autoyn"));		
			cell = excRowList.get(i).createCell(22);
			cell.setCellValue(map.get("pwr_autoyn"));		
			cell = excRowList.get(i).createCell(23);
			cell.setCellValue(map.get("volume"));			
			cell = excRowList.get(i).createCell(24);
			cell.setCellValue(map.get("lcd_bright"));		
			cell = excRowList.get(i).createCell(25);
			cell.setCellValue(map.get("led_lumino"));		
			cell = excRowList.get(i).createCell(26);
			cell.setCellValue(map.get("lcd_lumino"));		
			cell = excRowList.get(i).createCell(27);
			cell.setCellValue(map.get("shock"));			
			i++;
		}

		// Style Set
		ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
		ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);

		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 상태 목록";

		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}

	/**
	 * BIT관리 - 제공파라미터(시나리오) 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitParamList.do")
	public ModelAndView selectBitParamList(Model model, HttpServletRequest request,
			@RequestParam(value="servertp", required=true) String servertp,
			@RequestParam(value="paramid", required=false, defaultValue="") String paramid,
			@RequestParam(value="bittpcd", required=false, defaultValue="") String bittpcd) {		
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbNewBitparamVO>> resultMap = new HashMap<String, List<TbNewBitparamVO>>();
		TbNewBitparamVO vo = new TbNewBitparamVO();
		
		vo.setParamid(paramid);
		vo.setBittpcd(bittpcd);
		vo.setServertp(servertp);
		try {
			List<TbNewBitparamVO> resultList = bitService.selectBitParamList(vo);
			logger.debug("##selectBitParamList resultList " + resultList.size());
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBitParamList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
		
	/**
	 * BIT 제공파라미터(시나리오) 등록
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertBitParam.do")
	public ModelAndView insertBitParam(Model model, HttpServletRequest request,
			TbNewBitparamVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = bitService.insertBitParam(vo);			
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##insertBitParam exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 제공파라미터(시나리오) 수정
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateBitParam.do")
	public ModelAndView updateBitParam(Model model, HttpServletRequest request,
			TbNewBitparamVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			bitService.updateBitParam(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.debug("##updateBitParam exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 제공파라미터(시나리오) 삭제
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteBitParam.do")
	public ModelAndView deleteBitParam(Model model, HttpServletRequest request,
			TbNewBitparamVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {			
			int res = bitService.deleteBitParam(vo);
			resultMap.put("result", res);
		} catch (Exception e) {
			logger.debug("##deleteBitParam exception " + e.toString());
			resultMap.put("result", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 파라미터 한건 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitParam.do")
	public ModelAndView selectBitParam(Model model, HttpServletRequest request,
			TbNewBitparamVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, TbNewBitparamVO> resultMap = new HashMap<String, TbNewBitparamVO>();
		try {			
			resultMap.put("result", bitService.selectBitParam(vo));
		} catch (Exception e) {
			logger.debug("##deleteBitParam exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * BIT 제공파라미터(시나리오) - 조회결과 엑셀 다운로드
	 * 
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/excelBitParamList.do")
	public void excelBitParamList(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			@RequestBody String list) {
				
		String label = list.substring(6, list.indexOf("rows="));		
		String rows = list.substring(list.indexOf("rows=")+5);
		
		List<String> labelList = new ArrayList<String>();
		labelList = JSONArray.fromObject(label);
		
		List<Map<String, String>> rowsMap = new ArrayList<Map<String, String>>();
		rowsMap = JSONArray.fromObject(rows);		

		HSSFWorkbook wb = new HSSFWorkbook();
		HSSFSheet sheet = wb.createSheet("BIT 파라미터(시나리오) 목록");

		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

		for (int i = 0; i < (rowsMap.size() + 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short) 400);
		}

		HSSFCell cell = null;
		
		// 라벨 생성 (hidden column : 3) 
		for(int i = 0; i < labelList.size()-3; i++){
			cell = excRowList.get(0).createCell(i);
			cell.setCellValue(labelList.get(i));			
		}
		
		// 열 생성
		int i = 1; // 0 : 라벨 행, 1~ : 데이터 행
		for(Map<String, String> map : rowsMap ){			
			cell = excRowList.get(i).createCell(0);			
			cell.setCellValue(map.get("paramid"));			  	
			cell = excRowList.get(i).createCell(1);			
			cell.setCellValue(map.get("title"));			  	
			cell = excRowList.get(i).createCell(2);			
			cell.setCellValue(map.get("bittpnm"));			  	
			cell = excRowList.get(i).createCell(3);			
			cell.setCellValue(map.get("comm_retrycnt"));		
			cell = excRowList.get(i).createCell(4);			
			cell.setCellValue(map.get("comm_tmout"));			
			cell = excRowList.get(i).createCell(5);			
			cell.setCellValue(map.get("disp_onhms"));			
			cell = excRowList.get(i).createCell(6);			
			cell.setCellValue(map.get("disp_offhms"));			
			cell = excRowList.get(i).createCell(7);			
			cell.setCellValue(map.get("dispcycl"));			
			cell = excRowList.get(i).createCell(8);			
			cell.setCellValue(map.get("msgcycl"));			  	
			cell = excRowList.get(i).createCell(9);			
			cell.setCellValue(map.get("fan_temper"));			
			cell = excRowList.get(i).createCell(10);			
			cell.setCellValue(map.get("heat_temper"));			
			cell = excRowList.get(i).createCell(11);			
			cell.setCellValue(map.get("route_font"));			
			cell = excRowList.get(i).createCell(12);			
			cell.setCellValue(map.get("route_fontcolor"));		
			cell = excRowList.get(i).createCell(13);			
			cell.setCellValue(map.get("arrive_font"));			
			cell = excRowList.get(i).createCell(14);			
			cell.setCellValue(map.get("arrive_fontcolor"));	
			cell = excRowList.get(i).createCell(15);			
			cell.setCellValue(map.get("bstop_font"));			
			cell = excRowList.get(i).createCell(16);			
			cell.setCellValue(map.get("bstop_fontcolor"));		
			cell = excRowList.get(i).createCell(17);			
			cell.setCellValue(map.get("lcd_fan_temper"));		
			cell = excRowList.get(i).createCell(18);			
			cell.setCellValue(map.get("lcd_heat_temper"));		
			cell = excRowList.get(i).createCell(19);			
			cell.setCellValue(map.get("lcd_fan_temper_1"));	
			cell = excRowList.get(i).createCell(20);			
			cell.setCellValue(map.get("lcd_heat_temper_1"));	
			cell = excRowList.get(i).createCell(21);			
			cell.setCellValue(map.get("volume_day_hms"));		
			cell = excRowList.get(i).createCell(22);			
			cell.setCellValue(map.get("volume_night_hms"));	
			cell = excRowList.get(i).createCell(23);			
			cell.setCellValue(map.get("day_volume"));			
			cell = excRowList.get(i).createCell(24);			
			cell.setCellValue(map.get("night_volume"));		
			cell = excRowList.get(i).createCell(25);			
			cell.setCellValue(map.get("bright_day_hms"));		
			cell = excRowList.get(i).createCell(26);			
			cell.setCellValue(map.get("bright_night_hms"));	
			cell = excRowList.get(i).createCell(27);			
			cell.setCellValue(map.get("day_bright"));			
			cell = excRowList.get(i).createCell(28);			
			cell.setCellValue(map.get("night_bright"));
			i++;
		}
		
		// Style Set
		ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, rowsMap.size(), 0, 2);
		ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, rowsMap.size(), 0, 2);

		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 파라미터(시나리오) 목록";

		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * BIT 이상 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitFaultList.do")
	public ModelAndView selectBitFaultList(Model model, HttpServletRequest request,
			@RequestParam(value="opt", required=true) String opt) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();
		try {
			TbOmmBitVO vo = new TbOmmBitVO();
			vo.setFault(opt);
			List<TbOmmBitVO> resultList = bitService.selectBitFaultList(vo);
			resultMap.put("resultList", resultList);

		} catch (Exception e) {
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 카테고리 조회 - 사업, 정류소 명, 안내기유형, 노선명, 도로명
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectCategory.do")
	public ModelAndView selectCategorization(Model model, HttpServletRequest request,
			@RequestParam(value="type", required=true) String type,
			@RequestParam(value="is_first", required=false) boolean is_first) {
		ModelAndView mv = new ModelAndView();

		List<TbOmmBitVO> installloc_list = null;
		List<TbOmmCodeVO> type_list = null;
		List<TbOmmCodeVO> dispmethod_list = null;
		List<TbAdmBusrouteVO> route_list = null;
		List<TbOmmCodeVO> dispeffect_list = null;
		
		try {
			if (is_first) {
				installloc_list = bitService.selectBitInstallLoc();
				TbOmmCodeVO vo = new TbOmmCodeVO();
				vo.setCdcategid("BITTPCD");
				type_list = systemService.selectCodeList(vo);
				vo.setCdcategid("DISPMTHDCD");
				dispmethod_list = systemService.selectCodeList(vo);
				vo.setCdcategid("DISPEFFECTCD");
				dispeffect_list = systemService.selectCodeList(vo);
			}

			if (type.equals("0")) {
				route_list = busrouteService.selectRouteList(null);
			} else {
				route_list = busrouteService.selectRoadList();
			}
			mv.addObject("installloc_list", installloc_list);
			mv.addObject("type_list", type_list);
			mv.addObject("dispmethod_list", dispmethod_list);
			mv.addObject("route_list", route_list);
			mv.addObject("dispeffect_list", dispeffect_list);

		} catch (Exception e) {
			logger.error("BIT 카테고리 조회 Exception " + e.getMessage());
		}

		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * BIT  정보관리 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitManageList.do")
	public ModelAndView selectBitManageList(Model model, HttpServletRequest request,			
			@RequestParam(value="bittpcd", required=false, defaultValue="") String bittpcd,
			@RequestParam(value="projecttpcd", required=false, defaultValue="") String projecttpcd,
			@RequestParam(value="searchWord", required=false, defaultValue="") String searchWord,
			@RequestParam(value="server_id", required=false, defaultValue="") String server_id) {
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbOmmBitVO>> resultMap = new HashMap<String, List<TbOmmBitVO>>();
		
		try {
			TbOmmBitVO vo = new TbOmmBitVO();
			vo.setBittpcd(bittpcd);
			vo.setProjecttpcd(projecttpcd);
			vo.setSearchWord(searchWord);
			vo.setServer_id(server_id);
			
			List<TbOmmBitVO> resultList = bitService.selectBitManageList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectBitManageList resultList" + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitManageList exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	/**
	 * BIT 제어 결과 목록 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitCtrlResultList.do")
	public ModelAndView selectBitCtrlResultList(Model model, HttpServletRequest request,
			@RequestParam(value="server_id", required=false) String server_id,
			@RequestParam(value="bittpcd", required=false) String bittp) {
		
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbOmcBitctrlVO>> resultMap = new HashMap<String, List<TbOmcBitctrlVO>>();
		try {
			TbOmcBitctrlVO vo = new TbOmcBitctrlVO();
			vo.setServer_id(server_id);
			vo.setBittpcd(bittp);
			
			List<TbOmcBitctrlVO> resultList = bitService.selectBitCtrlResultList(vo);
			resultMap.put("resultList", resultList);
			mv.addAllObjects(resultMap);

		} catch (Exception e) {
			logger.error("selectBitCtrlResultList Exception " + e.getMessage());
		}

		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 시나리오 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectScenarioList.do")
	public ModelAndView selectScenarioList(Model model, HttpServletRequest request,
			@RequestParam(value="servertp", required=true) String servertp) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<TbBitScenarioVO>> resultMap = new HashMap<String, List<TbBitScenarioVO>>();

		try {
			TbBitScenarioVO vo = new TbBitScenarioVO();
			vo.setServertp(servertp);
			List<TbBitScenarioVO> resultList = bitService.selectScenarioList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 선택 된 시나리오 목록 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * BIT 시나리오 상세 조회
	 * @param model
	 * @param request
	 * @param paramId
	 *            시나리오 ID
	 * @return
	 */
	@RequestMapping(value = "/selectScenarioDetailList.do")
	public ModelAndView selectScinarioDetailList(Model model, HttpServletRequest request,
			@RequestParam(value = "scenario_id", required = true) String paramId,
			@RequestParam(value="servertp", required=true) String servertp) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<TbBitScenarioVO>> resultMap = new HashMap<String, List<TbBitScenarioVO>>();

		try {
			TbBitScenarioVO vo = new TbBitScenarioVO();
			vo.setSnr_id(paramId);
			vo.setServertp(servertp);
			List<TbBitScenarioVO> resultList = bitService.selectScenarioDetailList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 시나리오 상세 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * BIT 신규등록
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/registBit.do")
	public ModelAndView registBit(Model model, HttpServletRequest request,
			HttpSession session,TbOmmBitVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		int result_code = Const.SQL_ERROR;

		try {
			vo.setUpd_userid((String)session.getAttribute("userId"));
			result_code = bitService.registBit(vo);								
		} catch (Exception e) {
			logger.error("BIT 신규등록  Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 정보관리 업데이트
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/modBitInfo.do")
	public ModelAndView modBitInfo(Model model, HttpServletRequest request,
			HttpSession session, TbOmmBitVO vo) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();		
		int result_code = Const.SQL_ERROR;
		
		try {			
			vo.setUpd_userid((String)session.getAttribute("userId"));
			result_code = bitService.modBitInfo(vo);				
		} catch (Exception e) {
			logger.error("BIT 정보 관리 업데이트  Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	
	/**
	 * BIT 제공정보 현황
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectBitArrivalList.do")
	public ModelAndView selectBitArrivalList(Model model, HttpServletRequest request, 
			@RequestParam(value="bit_id", required=true, defaultValue="") String bitid) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbIshBitbusarrivVO>> resultMap = new HashMap<String,  List<TbIshBitbusarrivVO>>();
		TbIshBitbusarrivVO vo = new TbIshBitbusarrivVO();		
				
		try {
			vo.setBitid(bitid);
			List<TbIshBitbusarrivVO> resultList = bitService.selectBitArrivalList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("selectBitArrivalList  Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 지점등록 -  정류장 리스트 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBusStopList.do")
	public ModelAndView selectBusStopList(Model model, HttpServletRequest request,
			@RequestParam(value = "text_search", required = false, defaultValue="") String searchWord) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, List<TbAdmBusstopVO> > resultMap = new HashMap<String, List<TbAdmBusstopVO> > ();
		
		try {
			TbAdmBusstopVO vo = new TbAdmBusstopVO();			
			vo.setSearchWord(searchWord);
			List<TbAdmBusstopVO> resultList = bitService.selectBusStopList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 지점등록 - 정류장 리스트 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * 시설물 조회 - BIT 등록시 ID 중복 확인
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectAddBitFacilid.do")
	public ModelAndView selectAddBitFacilid(Model model, HttpServletRequest request) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, TbOmmBitVO> resultMap = new HashMap<String, TbOmmBitVO> ();
		
		try {
			TbOmmBitVO result = bitService.selectAddBitFacilid();
			resultMap.put("result", result);
			System.out.println("###");
			System.out.println(result.getFacilid());
			System.out.println("###");
		} catch (Exception e) {
			logger.error("selectAddBitFacilid Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * 이력/통계 - BIT 제공정보 이력(현황 호환) - excel 저장
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/excelBitOfferInfoList.do")
	public void excelBitOfferInfoList(HttpServletRequest request, HttpServletResponse response,
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
			HSSFSheet sheet = wb.createSheet("BIT 제공정보 목록");
			
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
			
			// 라벨 생성
			cell = excRowList.get(0).createCell(0);
			cell.setCellValue("이력등록일시");		
			cell = excRowList.get(0).createCell(1);
			cell.setCellValue("BIT ID");		
			cell = excRowList.get(0).createCell(2);
			cell.setCellValue("버스 ID");	    
			cell = excRowList.get(0).createCell(3);
			cell.setCellValue("차량번호");					
			cell = excRowList.get(0).createCell(4);
			cell.setCellValue("방향");	
			cell = excRowList.get(0).createCell(5);
			cell.setCellValue("안내 정보");	
			cell = excRowList.get(0).createCell(6);
			cell.setCellValue("잔여정류장갯수");		
			cell = excRowList.get(0).createCell(7);
			cell.setCellValue("노선 ID");		
			cell = excRowList.get(0).createCell(8);
			cell.setCellValue("노선명");   	
			cell = excRowList.get(0).createCell(9);
			cell.setCellValue("정류소 ID"); 
			cell = excRowList.get(0).createCell(10);
			cell.setCellValue("통과 정류소명"); 

			
			int i = 1; // 0 : 라벨 행, 1~ : 데이터 행
			for(Map<String, String> map : resultMap ){			
				cell = excRowList.get(i).createCell(0);
				cell.setCellValue(map.get("procdt"));       		
				cell = excRowList.get(i).createCell(1);
				cell.setCellValue(map.get("bitid"));         		
				cell = excRowList.get(i).createCell(2);
				cell.setCellValue(map.get("busid"));        		
				cell = excRowList.get(i).createCell(3);
				cell.setCellValue(map.get("carregno"));        	
				cell = excRowList.get(i).createCell(4);
				cell.setCellValue(map.get("dirnm"));        		
				cell = excRowList.get(i).createCell(5);
				cell.setCellValue(map.get("incoming_time")); 
				cell = excRowList.get(i).createCell(6);
				cell.setCellValue(map.get("rest_bstopcnt"));   
				cell = excRowList.get(i).createCell(7);
				cell.setCellValue(map.get("routeid"));         	
				cell = excRowList.get(i).createCell(8);
				cell.setCellValue(map.get("routeno"));     		
				cell = excRowList.get(i).createCell(9);
				cell.setCellValue(map.get("bstopid"));         	
				cell = excRowList.get(i).createCell(10);				
				cell.setCellValue(map.get("bstopnm"));
				i++;
			}
			
			// Style Set
			ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
			ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
			ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, resultMap.size(), 0, 2);

			Date now = new Date();

			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String fileName = formatDate.format(now) + " BIT 제공정보 목록";

			ExcelUtil.excelFileDownload(wb, request, response, fileName);			
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}
	
	/**
	 * BIT 충격감지 이력 - 조회결과 엑셀 다운로드
	 * 
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/excelBitShockList.do")
	public void downloadShockHisExcel(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			@RequestBody String list) {
		
		logger.debug("in");
		logger.debug("list = " + list);
		list = list.substring(5);
		
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		
		resultMap = JSONArray.fromObject(list);
		logger.debug("resultMap = " + resultMap);
		logger.debug("resultMap size = " + resultMap.size());
		
		ArrayList<TbIshBitshockVO> voList = new ArrayList<>();
		for(Map<String, String> map : resultMap){
			TbIshBitshockVO vo = new TbIshBitshockVO();
			
			vo.setBitid(map.get("bitid"));
			vo.setBstopnm(map.get("bstopnm"));
			vo.setColldt(map.get("colldt"));			
			vo.setDescription(map.get("description"));			
			voList.add(vo);
		}
		
		HSSFWorkbook wb = new HSSFWorkbook();
		HSSFSheet sheet = wb.createSheet("충격 감지 목록");

		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

		for (int i = 0; i < (voList.size()+ 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short) 400);
		}

		HSSFCell cell = null;

		cell = excRowList.get(0).createCell(0);
		cell.setCellValue("BIT ID");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("지점명");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("일시");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("비고");

		for (int i = 0; i < voList.size(); i++) {
			TbIshBitshockVO rowValue = voList.get(i);
			
			// BIT ID
			cell = excRowList.get(i + 1).createCell(0);
			cell.setCellValue(rowValue.getBitid());
			// 지점명
			cell = excRowList.get(i + 1).createCell(1);
			cell.setCellValue(rowValue.getBstopnm());
			// 일시
			cell = excRowList.get(i + 1).createCell(2);
			cell.setCellValue(rowValue.getColldt());
			// 비고
			cell = excRowList.get(i + 1).createCell(3);
			cell.setCellValue(rowValue.getDescription());
		}

		// Style Set
		ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, voList.size(), 0, 2);
		ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, voList.size(), 0, 2);

		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " 충격 감지 목록";

		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * BIT 제어된 파라미터 조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectCtrlBitParam.do")
	public ModelAndView selectCtrlBitParam(Model model, HttpServletRequest request, 
			@RequestParam(value="bitid", required=true) String bitid,
			@RequestParam(value="ctrltpcd", required=true) String ctrltpcd) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, TbNewBitparamVO> resultMap = new HashMap<String,  TbNewBitparamVO>();
		TbNewBitparamVO vo = new TbNewBitparamVO();		
				
		try {
			vo.setBitid(bitid);
			vo.setCtrltpcd(ctrltpcd);
			TbNewBitparamVO result = bitService.selectCtrlBitParam(vo);
			resultMap.put("result", result);
		} catch (Exception e) {
			logger.error("selectCtrlBitParam  Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT FTP 파일 목록 조회
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/selectFtpFileList.do")
	public ModelAndView selectFtpFileList(Model model, HttpServletRequest request,
			@RequestParam(value="server_id", required=true) String server_id) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbOmcBitfileregVO>> resultMap = new HashMap<String,  List<TbOmcBitfileregVO>>();
		TbOmcBitfileregVO vo = new TbOmcBitfileregVO();	
		vo.setServer_id(server_id);
				
		try {
			List<TbOmcBitfileregVO> resultList = bitService.selectFtpFileList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("selectFtpFileList  Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	
	/**
	 * FTP 파일 업로드
	 * @param model
	 * @param request
	 * @param session
	 * @param data_type
	 * @param files
	 */
	@ResponseBody
	@RequestMapping(value = "/ftpUploadFile.do")
	public ModelAndView ftpUploadFile(Model model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="filetpcd", required=true) String filetpcd,
			@RequestParam(value="filever", required=true) String filever,
			@RequestParam(value="serverInfo", required=true) String serverInfo,
			@RequestParam(value="app_startdt", required=true) String app_startdt,
			@RequestParam(value="file", required=true) MultipartFile multipart_file) {
		
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();

		ServletContext ctx = session.getServletContext();
		WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
		GrobalProps globalProps = (GrobalProps)webContext.getBean("propertyHolder");
		
		int resultCode = Const.SQL_ERROR;
		boolean isSuccess = false;
		
		int server = Integer.valueOf(serverInfo);
		
		FtpUtil ftpUtil = null;
		FtpUtil ftpUtil_ = null;
//		<option value="120">신규 FTP</option>
//		<option value="121">인천 FTP</option>
//		<option value="122">확대 FTP</option>
//		<option value="123">광역 FTP</option>
		if(server == 121 || server == 122 || server == 125) { //인천 121, 125   인천확대:122
			ftpUtil = new FtpUtil(globalProps, 121);
			ftpUtil_ = new FtpUtil(globalProps, 122);
		}else if(server == 123 || server == 124) { //광역 123, 124
			ftpUtil = new FtpUtil(globalProps, 123);
			ftpUtil_ = new FtpUtil(globalProps, 124);
		}else if(server == 120 || server == 126) { //신규 120, 126
			ftpUtil = new FtpUtil(globalProps, 120);
			ftpUtil_ = new FtpUtil(globalProps, 126);
		}
		
		
		File file = ftpUtil.multipartToFile(multipart_file);
		
		try {
			TbOmcBitfileregVO vo = new TbOmcBitfileregVO();
			int type = Integer.valueOf(filetpcd);
			if(ftpUtil.login()) {
				switch (server) {
					/** 신규서버 */
					case 120:
					case 126:
						ftpUtil.changeDirectory("/UPDATE/");
						/** 파일 삭제 로직 제거 */
						/*FTPFile[] list = ftpUtil.getFileList();
						for (int i = 0; i < list.length; i++) {
							String fileName = list[i].getName();
							if(!fileName.equals("ks_bit_version.ini")) {
								ftpUtil.deleteFileName(list[i].getName());
							}
						}*/
						isSuccess = ftpUtil.uploadFile("", file, null);
						vo.setFileloc("/UPDATE"); 
						break;
				
					/** 인천-확대 서버 */	
					case 121:
					case 122:
					case 125:
						switch (type) {
							case 14: //노선경로(root)
							case 34: //폼아이콘(root)
							case 44: //스케줄(root)
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/");
								break;
							case 31: //이미지(Image)
								ftpUtil.changeDirectory("/Image/");
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/Image");
								break;
							case 61: //운영프로그램(BIT SW)
								ftpUtil.changeDirectory("/BIT SW/");
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/BIT SW");
								break;
						}
						break;
					/** 광역 서버 */	
					case 123:
					case 124:
						switch (type) {
							case 31: //이미지
								ftpUtil.changeDirectory("/Image/");
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/Image");
								break;
							case 13: //정류장
							case 14: //노선경로
							case 15: //주요경유지
								ftpUtil.changeDirectory("/MASTER/");
								String name = multipart_file.getOriginalFilename();
								int idx = name.indexOf("."); 
								ftpUtil.makeDirectory(name.substring(0, idx));
								ftpUtil.changeDirectory(name.substring(0, idx)+"/");
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/MASTER/"+name.substring(0, idx)+"/");
								
								System.out.println("### " + name.substring(0, idx));
								
								break;
							case 71: //펌웨어 거치
								ftpUtil.changeDirectory("/BIS/DOWN/FIRM/HANG/");
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/BIS/DOWN/FIRM/HANG");
							break;
							case 72: //펌웨어 독립
								ftpUtil.changeDirectory("/BIS/DOWN/FIRM/INDE/");
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/BIS/DOWN/FIRM/INDE");
							break;	
							case 73: //광역운영프로그램
								ftpUtil.changeDirectory("/BIS/DOWN/MAINAPP/");
								isSuccess = ftpUtil.uploadFile("", file, null);
								vo.setFileloc("/BIS/DOWN/MAINAPP");
							break;
						}
						break;
				}
			}
			
			if(ftpUtil_ != null && ftpUtil_.login()) {
				
				switch (server) {
				/** 신규서버 */
				case 120:
				case 126:
					ftpUtil_.changeDirectory("/UPDATE/");
					/** 파일 삭제 로직 제거 */
					/*FTPFile[] list = ftpUtil.getFileList();
					for (int i = 0; i < list.length; i++) {
						String fileName = list[i].getName();
						if(!fileName.equals("ks_bit_version.ini")) {
							ftpUtil.deleteFileName(list[i].getName());
						}
					}*/
					isSuccess = ftpUtil_.uploadFile("", file, null);
					vo.setFileloc("/UPDATE"); 
					break;
			
				/** 인천-확대 서버 */	
				case 121:
				case 122:
				case 125:
					switch (type) {
						case 14: //노선경로(root)
						case 34: //폼아이콘(root)
						case 44: //스케줄(root)
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/");
							break;
						case 31: //이미지(Image)
							ftpUtil_.changeDirectory("/Image/");
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/Image");
							break;
						case 61: //운영프로그램(BIT SW)
							ftpUtil_.changeDirectory("/BIT SW/");
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/BIT SW");
							break;
					}
					break;
				/** 광역 서버 */	
				case 123:
				case 124:
					switch (type) {
						case 31: //이미지
							ftpUtil_.changeDirectory("/Image/");
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/Image");
							break;
						case 13: //정류장
						case 14: //노선경로
						case 15: //주요경유지
							ftpUtil_.changeDirectory("/MASTER/");
							String name = multipart_file.getOriginalFilename();
							int idx = name.indexOf("."); 
							ftpUtil_.makeDirectory(name.substring(0, idx));
							ftpUtil_.changeDirectory(name.substring(0, idx)+"/");
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/MASTER/"+name.substring(0, idx)+"/");
							
							System.out.println("### " + name.substring(0, idx));
							
							break;
						case 71: //펌웨어 거치
							ftpUtil_.changeDirectory("/BIS/DOWN/FIRM/HANG/");
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/BIS/DOWN/FIRM/HANG");
						break;
						case 72: //펌웨어 독립
							ftpUtil_.changeDirectory("/BIS/DOWN/FIRM/INDE/");
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/BIS/DOWN/FIRM/INDE");
						break;	
						case 73: //광역운영프로그램
							ftpUtil_.changeDirectory("/BIS/DOWN/MAINAPP/");
							isSuccess = ftpUtil_.uploadFile("", file, null);
							vo.setFileloc("/BIS/DOWN/MAINAPP");
						break;
					}
					break;
			}
			}
			
			if (isSuccess) {
				
				vo.setFiletpcd(filetpcd);
				vo.setFilenm(multipart_file.getOriginalFilename());
				vo.setApp_startdt(app_startdt);
				vo.setFilever(filever);
				vo.setServer_id(serverInfo);
				bitService.insertFtpFile(vo);
				resultCode = Const.SQL_SUCCESS;
			}else{
				resultCode = Const.SQL_ERROR;
			}
		} catch (Exception e) {
			logger.error("시나리오 파일 업로드 Exception " + e.getMessage());
			if (isSuccess) {
				ftpUtil.deleteFile(file);
			}
			resultCode = Const.SQL_ERROR;
		} finally {
			ftpUtil.logout();
		}
		resultMap.put("result", resultCode);
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * FTP 이미지 조회
	 * @param req
	 * @param res
	 * @param fileName
	 * @param servertp
	 */
	@RequestMapping("/getImage.do")
    public void getImage(HttpServletRequest req, HttpServletResponse res,
    		@RequestParam(value="fileName", required=true) String fileName,
    		@RequestParam(value="servertp", required=true) String servertp) {
    	System.out.println("##### getImage ");
		ByteArrayOutputStream bStream = null;
		byte[] imgData = null;
    	try{
			
    		ServletContext ctx = req.getSession().getServletContext();
    		WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
    		GrobalProps globalProps = (GrobalProps)webContext.getBean("propertyHolder");
    		
    		int server = Integer.valueOf(servertp);
    		
    		FtpUtil ftpUtil = new FtpUtil(globalProps, server);
    		
    		if(ftpUtil.login()) {
    			if(server == 120) {
    				ftpUtil.changeDirectory(Const.NEW_IMG_PATH);
    			}else {
    				ftpUtil.changeDirectory(Const.WIDE_IMG_PATH);
    			}
    			System.out.println("## " + URLDecoder.decode(fileName, "UTF-8"));
    			imgData = ftpUtil.getImageFile(URLDecoder.decode(fileName, "UTF-8"));
    		}
    		ftpUtil.logout();
    		bStream = new ByteArrayOutputStream();
			bStream.write(imgData);
			res.setHeader("Content-Type", "image/gif");
			res.setContentLength(bStream.size());
			
			bStream.writeTo(res.getOutputStream());
			
			res.getOutputStream().flush();
			res.getOutputStream().close();
    		
		} catch(Exception e){
			logger.error("이미지 가져오는 중 오류");
		} 
	}
	
	/**
	 * 시설물 장애 이미지 조회
	 * @param req
	 * @param res
	 * @param fileName
	 * @param servertp
	 */
	@RequestMapping("/getFaultImage.do")
    public void getFaultImage(HttpServletRequest req, HttpServletResponse res,
    		@RequestParam(value="facilid", required=true) String facilid,
    		@RequestParam(value="regdt", required=true) String regdt) {
    	
		ByteArrayOutputStream stream = new ByteArrayOutputStream();
		
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO();
    		vo.setFacilid(facilid);
    		vo.setRegdt(regdt);
    		TbOmhFacilfailasVO imgVo = bitService.selectFaultImg(vo);
	    	
	    	if(imgVo != null && imgVo.getFile_data() != null && imgVo.getFile_data().length > 0) {
	    		stream.write(imgVo.getFile_data());
	    		stream.writeTo(res.getOutputStream());
	    		res.getOutputStream().flush();
				res.getOutputStream().close();
	    	}else {
	    		String filePath = req.getSession().getServletContext().getRealPath("images");
				File file = new File(filePath + "/no-img.png");
				FileInputStream fis = new FileInputStream(file);
				
				BufferedInputStream in = new BufferedInputStream(fis);
				ByteArrayOutputStream bStream = new ByteArrayOutputStream();
				int imgByte;
				while ((imgByte = in.read()) != -1) {
				    bStream.write(imgByte);
				}
				fis.close();
				in.close();
				res.setHeader("Content-Type", "image/png");
				res.setContentLength(bStream.size());
				
				bStream.writeTo(res.getOutputStream());
				
				res.getOutputStream().flush();
				res.getOutputStream().close();
	    	}
			       		
		} catch (Exception e) {
			System.out.println("## e "  + e.toString());
			logger.error("이미지 가져오는 중 오류");
		}
	}
	
	/**
	 * 시설물 장애 이미지 등록
	 * @param model
	 * @param request
	 */
	@RequestMapping(value = "/insertFaultImg.do")
	public ModelAndView insertFaultImg(Model model, HttpServletRequest request,
			TbOmhFacilfailasVO vo) {
		
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();

		int resultCode = Const.SQL_ERROR;
		try {
			MultipartFile multiFile = vo.getImgFile();
			vo.setFile_data(multiFile.getBytes());
			vo.setFile_name(multiFile.getOriginalFilename());
			bitService.insertFaultImg(vo);
			resultCode = Const.SQL_SUCCESS;
		} catch (Exception e) {
			logger.error("장애 이미지 등록 Exception " + e.getMessage());
			resultCode = Const.SQL_ERROR;
		} 
		resultMap.put("result", resultCode);
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * 시설물 장애 이미지 삭제
	 * @param model
	 * @param request
	 */
	@RequestMapping(value = "/deleteFaultImg.do")
	public ModelAndView deleteFaultImg(Model model, HttpServletRequest request,
			@RequestParam(value="facilid", required=true) String facilid,
    		@RequestParam(value="regdt", required=true) String regdt) {
		
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();

		int resultCode = Const.SQL_ERROR;
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO();
			vo.setFacilid(facilid);
			vo.setRegdt(regdt);
			System.out.println("### del " + facilid + " " + regdt);
			bitService.deleteFaultImg(vo);
			resultCode = Const.SQL_SUCCESS;
		} catch (Exception e) {
			logger.error("장애 이미지 삭제 Exception " + e.getMessage());
			resultCode = Const.SQL_ERROR;
		} 
		resultMap.put("result", resultCode);
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * 시설물상태현황 - 선택된 시설물구분에 따른 장애요약 데이터
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectObstacleSumupList.do")
	public ModelAndView selectObstacleSumupList(Model model, HttpServletRequest request,
			@RequestParam("faciltpcd") String faciltpcd, 
			@RequestParam("search_startdt") String search_startdt, 
			@RequestParam("search_enddt") String search_enddt) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbOmhFacilfailasVO>> resultMap = new HashMap<String, List<TbOmhFacilfailasVO>>();
		
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO();
			vo.setFaciltpcd(faciltpcd);
			List<TbOmhFacilfailasVO> resultCount = bitService.selectFacilitiesCount(vo);
			resultMap.put("resultCount", resultCount); //카운트
			
			vo.setFaciltpcd(faciltpcd);
			vo.setSearch_startdt(search_startdt);
			vo.setSearch_enddt(search_enddt);
			List<TbOmhFacilfailasVO> resultSumup = bitService.selectObstacleSumupList(vo);
			resultMap.put("resultSumup", resultSumup); //장애요약
			
		} catch (Exception e) {
			logger.error("##selectObstacleSumupList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 시설물상태현황 - 선택된 시설물구분에 따른 장애현황 리스트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectObstacleDetailList.do")
	public ModelAndView selectObstacleDetailList(Model model, HttpServletRequest request,
			@RequestParam("faciltpcd") String faciltpcd, 
			@RequestParam("search_startdt") String search_startdt, 
			@RequestParam("search_enddt") String search_enddt) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<TbOmhFacilfailasVO>> resultMap = new HashMap<String, List<TbOmhFacilfailasVO>>();
		
		try {
			TbOmhFacilfailasVO vo = new TbOmhFacilfailasVO();
			vo.setFaciltpcd(faciltpcd);
			vo.setSearch_startdt(search_startdt);
			vo.setSearch_enddt(search_enddt);
			List<TbOmhFacilfailasVO> resultSumup = bitService.selectObstacleDetailList(vo);
			resultMap.put("resultList", resultSumup); 
			
		} catch (Exception e) {
			logger.error("##selectObstacleDetailList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	
	
	//##########################
	//######################### 이하 구버전 소스
	
	/**
	 * BIT 통신 상태 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitStatusList.do")
	public ModelAndView selectBitStatusList(Model model, HttpServletRequest request) {

		ModelAndView mv = new ModelAndView();

		Map<String, List<BitVO>> resultMap = new HashMap<String, List<BitVO>>();
		BitVO vo = new BitVO();
		vo.setArea_code("286"); 
		try {
			List<BitVO> resultList = bitService.selectBitStatusList(vo);
			logger.debug("##selectBitStatusList resultList " + resultList.size());
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("##selectBitStatusList exception " + e.toString());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}

	
	
	/**
	 * BIT 카테고리 조회
	 * @param model
	 * @param request
	 * @return
	 *//*
	@RequestMapping(value = "/selectCategory.do")
	public ModelAndView selectCategorization(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<BitVO>> resultMap = new HashMap<String, List<BitVO>>();

		try {
			BitVO bitVo = new BitVO();
			bitVo.setArea_code("286");
			List<BitVO> bitGroupList = bitService.selectBitGroupList(bitVo);
			List<BitVO> businessList = bitService.selectBusinessList(bitVo);
			List<BitVO> bitCompanyList = bitService.selectBitCompanyList(bitVo);
			List<BitVO> bitTypeList = bitService.selectBitType();
			List<BitVO> bitInstallTypeList = bitService.selectBitInstallType();

			resultMap.put("bitGroupList", bitGroupList);
			resultMap.put("bitBusinessList", businessList);
			resultMap.put("bitCompanyList", bitCompanyList);
			resultMap.put("bitTypeList", bitTypeList);
			resultMap.put("bitInstallTypeList", bitInstallTypeList);
		} catch (Exception e) {
			logger.error("BIT 카테고리 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}*/
	
	/**
	 * BIT 정보관리 목록 조회
	 * @param model
	 * @param request
	 * @param stop_name
	 * @param bit_id
	 * @param group_id
	 * @param type
	 * @param company_id
	 * @param business_id
	 * @param bit_install_type
	 * @return
	 */
	@RequestMapping(value = "/selectBitInfoList.do")
	public ModelAndView selectBitInfoList(Model model, HttpServletRequest request,
			@RequestParam(value = "text_search", required = false, defaultValue = "") String searchWord,
			@RequestParam(value = "group_id", required = false, defaultValue = "") String group_id,
			@RequestParam(value = "type", required = false, defaultValue = "") String type,
			@RequestParam(value = "company_id", required = false, defaultValue = "") String company_id,
			@RequestParam(value = "business_id", required = false, defaultValue = "") String business_id,
			@RequestParam(value = "bit_install_type", required = false, defaultValue = "") String bit_install_type) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setSearchWord(searchWord);
			vo.setBit_cate_id(group_id);
			vo.setBit_type(type);
			vo.setCompany_id(company_id);
			vo.setBusiness_id(business_id);
			vo.setBit_install_type(bit_install_type);
			vo.setArea_code("286");

			List<BitVO> resultList = bitService.selectBitInfoList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 정보 관리 조회  Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 관리 목록 엑셀 다운로드
	 * @param request
	 * @param response
	 * @param session
	 * @param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadBitInfoExcel.do")
	public void downloadBitInfoExcel(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){
		//앞 5글자("json=") 제거
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("BIT 관리 목록");
		
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
		cell.setCellValue("관리번호");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("사용여부");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("설치 지점명");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("모바일 ID");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("BIT 종류");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("BIT 설치유형");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("제조사");
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("사업명");
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("IP");
		cell = excRowList.get(0).createCell(9);
		cell.setCellValue("위도");
		cell = excRowList.get(0).createCell(10);
		cell.setCellValue("경도");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			logger.debug("#### " + map.get("stop_name"));
			//관리번호
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("bit_id"));
			//사용여부
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("use_flag"));
			//설치 지점명
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("stop_name"));
			//모바일 ID
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("service_id"));
			//BIT 종류
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("bit_type_name"));
			//BIT 설치유형
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("bit_install_type_name"));
			//제조사
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("company_name"));
			//사업명
			cell = excRowList.get(i).createCell(7);
			cell.setCellValue(map.get("business_title"));
			//IP
			cell = excRowList.get(i).createCell(8);
			cell.setCellValue(map.get("connect_ip"));
			//위도
			cell = excRowList.get(i).createCell(9);
			cell.setCellValue(map.get("lat"));
			//경도
			cell = excRowList.get(i).createCell(10);
			cell.setCellValue(map.get("lng"));
			i++;
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 관리 목록";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
		
	/**
	 * BIT 그룹 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitGroupList.do")
	public ModelAndView selectBitGroupList(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setArea_code("286");
			List<BitVO> resultList = bitService.selectBitGroupList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 그룹 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 그룹 추가
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertBitCate.do")
	public ModelAndView insertBitCate(Model model, HttpServletRequest request,
			@RequestParam(value="cate_name", required=true) String cate_name,
			@RequestParam(value="data_explain", required=false, defaultValue="") String data_explain) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		
		int result_code = Const.SQL_ERROR;
		
		try {
			BitVO vo = new BitVO();
			HttpSession session = request.getSession();
			String userId = (String) session.getAttribute("userId");//ex.admin
			vo.setCate_name(cate_name);
			vo.setUser_id(userId);
			vo.setData_explain(data_explain);
			vo.setArea_code("286");
			
			result_code = bitService.insertBitCate(vo);
		} catch (Exception e) {
			logger.error("BIT 그룹 추가 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 그룹 삭제
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteBitCate.do")
	public ModelAndView deleteBitCate(Model model, HttpServletRequest request,
			@RequestParam(value="bit_cate_id", required=true) String bit_cate_id,
			@RequestParam(value="bit_id_list", required=false, defaultValue="") String[] bit_id_list) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		List<BitVO> vo_list = new ArrayList<BitVO>();
		
		BitVO vo = new BitVO();
		vo.setBit_cate_id(bit_cate_id);
		vo_list.add(vo);
		
		for (int i = 0; i < bit_id_list.length; i++) {
			vo = new BitVO();
			vo.setBit_cate_id(null);
			vo.setBit_id(bit_id_list[i]);
			
			vo_list.add(vo);
		}
		
		int result_code = Const.SQL_ERROR;
		
		try {
			result_code = bitService.deleteBitCate(vo_list);
		} catch (Exception e) {
			logger.error("BIT 그룹 삭제 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 그룹 업데이트
	 * @param model
	 * @param request
	 * @param bit_cate_id
	 * @param cate_name
	 * @param data_explain
	 * @return
	 */
	@RequestMapping(value = "/saveBitCate.do")
	public ModelAndView saveBitCate(Model model, HttpServletRequest request,
			@RequestParam(value="bit_cate_id", required=true) String bit_cate_id,
			@RequestParam(value="cate_name", required=false, defaultValue="") String cate_name,
			@RequestParam(value="data_explain", required=false, defaultValue="") String data_explain,
			@RequestParam(value="bit_id_list", required=false, defaultValue="") String[] bit_id_list,
			@RequestParam(value="bit_id_list2", required=false, defaultValue="") String[] bit_id_list2) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		List<BitVO> vo_list = new ArrayList<BitVO>();
		List<BitVO> vo_list2 = new ArrayList<BitVO>();
		
		BitVO vo = new BitVO();
		vo.setBit_cate_id(bit_cate_id);
		vo.setCate_name(cate_name);
		vo.setData_explain(data_explain);
		
		vo_list.add(vo);
		
		
		for (int i = 0; i < bit_id_list.length; i++) {
			vo = new BitVO();
			vo.setBit_cate_id(bit_cate_id);
			vo.setBit_id(bit_id_list[i]);
			
			vo_list.add(vo);
		}
		
		for (int i = 0; i < bit_id_list2.length; i++) {
			vo = new BitVO();
			vo.setBit_id(bit_id_list2[i]);
			vo.setBit_cate_id(null);
			
			vo_list2.add(vo);
		}
		
		int result_code = 0;
		
		try {
			result_code = bitService.saveBitCate(vo_list, vo_list2);
		} catch (Exception e) {
			logger.error("BIT 그룹 업데이트  Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 그룹 상세 조회
	 * @param model
	 * @param request
	 * @param bit_cate_id
	 * @return
	 */
	@RequestMapping(value = "/selectBitGroupDetailList.do")
	public ModelAndView selectBitGroupDetailList(Model model, HttpServletRequest request,
			@RequestParam(value="bit_cate_id", required=true) String bit_cate_id) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setArea_code("286");
			vo.setBit_cate_id(bit_cate_id);
			List<BitVO> resultList = bitService.selectBitGroupDetailList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 그룹 상세 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 그룹 우측 BIT 리스트 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitRightList.do")
	public ModelAndView selectBitRightList(Model model, HttpServletRequest request,
			@RequestParam(value="text_search", required=false, defaultValue="") String searchWord) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setArea_code("286");
			vo.setSearchWord(searchWord);
			List<BitVO> resultList = bitService.selectBitRightList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 그룹 우측 BIT 리스트 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 사업 정보 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBusinessList.do")
	public ModelAndView selectBusinessList(Model model, HttpServletRequest request) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setArea_code("286");
			
			List<BitVO> resultList = bitService.selectBusinessList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("사업 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 사업 추가
	 * @param model
	 * @param request
	 * @param vo business_title, st_date, ed_date, constructor, data_explain, business_year
	 * @return
	 */
	@RequestMapping(value = "/insertBusiness.do")
	public ModelAndView insertBusiness(Model model, HttpServletRequest request, BitVO vo) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			vo.setArea_code("286");
			
			bitService.insertBusiness(vo);
			List<BitVO> resultList = bitService.selectBusinessList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("사업 추가 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 사업 삭제
	 * @param model
	 * @param request
	 * @param business_id
	 * @return BIT 사업 리스트
	 */
	@RequestMapping(value = "/deleteBusiness.do")
	public ModelAndView deleteBusiness(Model model, HttpServletRequest request,
			@RequestParam(value="business_id", required=true) String business_id) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setArea_code("286");
			vo.setBusiness_id(business_id);
			
			bitService.deleteBusiness(vo);
			List<BitVO> resultList = bitService.selectBusinessList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 사업 삭제 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 사업 저장
	 * @param model
	 * @param request
	 * @param grid row data의 json string
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/saveBitBusiness.do")
	public ModelAndView saveBitBusiness(Model model, HttpServletRequest request,
			@RequestBody String list) {
		ModelAndView mv =  new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer> ();
		List<Map<String, String> > businessList = JSONArray.fromObject(list);
		List<BitVO> vo_list = new ArrayList<BitVO>();
		
		for (Map<String, String> map: businessList) {
			BitVO vo = new BitVO();
			vo.setBusiness_title(map.get("business_title"));
			vo.setSt_date(map.get("st_date"));
			vo.setEd_date(map.get("ed_date"));
			vo.setConstructor(map.get("constructor"));
			vo.setData_explain(map.get("data_explain"));
			vo.setBusiness_year(map.get("business_year"));
			vo.setArea_code("286");
			
			vo_list.add(vo);
		}
		
		int result_code = Const.SQL_ERROR;
		
		try {
			result_code = bitService.saveBusiness(vo_list);
		} catch (Exception e) {
			System.out.println("사업 저장 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 사업목록 Excel 다운
	 * @param request
	 * @param response
	 * @param session
	 * @Param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadBitBusinessExcel.do")
	public void downloadBitBusinessExcel(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){
		
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("BIT 사업 목록");
		
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
		cell.setCellValue("연도");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("사업명");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("사업 시작일자");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("사업 종료일자");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("시공사");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("설명");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			logger.debug("#### " + map.get("business_title"));
			//연도
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("business_year"));
			//사업명
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("business_title"));
			//사업 시작일자
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("st_date"));
			//사업 종료일자
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("ed_date"));
			//시공사
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("constructor"));
			//설명
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("data_explain"));
			i++;
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 2);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 사업 목록";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * BIT 제조사 정보 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitCompanyList.do")
	public ModelAndView selectBitCompanyList(Model model, HttpServletRequest request) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setArea_code("286");
			
			List<BitVO> resultList = bitService.selectBitCompanyList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("제조사 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 제조사 추가
	 * @param model
	 * @param request
	 * @param vo company_id, company_name, tel_number, data_explain
	 * @return
	 */
	@RequestMapping(value = "/insertBitCompany.do")
	public ModelAndView insertBitCompany(Model model, HttpServletRequest request, BitVO vo) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			vo.setArea_code("286");
			
			bitService.insertBitCompany(vo);
			List<BitVO> resultList = bitService.selectBitCompanyList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("제조사 추가 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	
	
	/**
	 * BIT 제조사 삭제
	 * @param model
	 * @param request
	 * @param business_id
	 * @return BIT 제조사 리스트
	 */
	@RequestMapping(value = "/deleteBitCompany.do")
	public ModelAndView deleteBitCompany(Model model, HttpServletRequest request,
			@RequestParam(value="company_id", required=true) String company_id) {
		ModelAndView mv =  new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			BitVO vo = new BitVO();
			vo.setArea_code("286");
			vo.setCompany_id(company_id);
			
			bitService.deleteBitCompany(vo);
			List<BitVO> resultList = bitService.selectBitCompanyList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 제조사 삭제 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 제조사 저장
	 * @param model
	 * @param request
	 * @param list grid row data의 json string
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/saveBitCompany.do")
	public ModelAndView saveBitCompany(Model model, HttpServletRequest request,
			@RequestBody String list) {
		ModelAndView mv =  new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer> ();
		List<Map<String, String> > companyList = JSONArray.fromObject(list);
		List<BitVO> vo_list = new ArrayList<BitVO>();
		
		for (Map<String, String> map: companyList) {
			BitVO vo = new BitVO();
			vo.setCompany_name(map.get("company_name"));
			vo.setTel_number(map.get("tel_number"));
			vo.setData_explain(map.get("data_explain"));
			vo.setArea_code("286");
			
			vo_list.add(vo);
		}
		
		int result_code = Const.SQL_ERROR;
		
		try {
			result_code = bitService.saveBitCompany(vo_list);
		} catch (Exception e) {
			logger.error("제조사 저장 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	

	/**
	 * BIT 시나리오 업데이트
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateBitScenario.do")
	public ModelAndView updateBitScenario(Model model, HttpServletRequest request,
			@RequestParam(value = "bit_id", required = true) String[] bitId,
			@RequestParam(value = "scenario_id", required = true) String scenarioId) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();

		int result_code = Const.SQL_ERROR;
		try {
			List<BitVO> vo_list = new ArrayList<BitVO>();
			for (int i = 0; i < bitId.length; i++) {
				BitVO vo = new BitVO();
				vo.setScenario_id(scenarioId);
				vo.setBit_id(bitId[i]);
				vo_list.add(vo);
			}

			result_code = bitService.updateBitScenario(vo_list);
			
		} catch (Exception e) {
			logger.error("BIT 시나리오 업데이트 및 조회 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}

	/**
	 * 시나리오 추가
	 * @param auth
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertBitScenario.do")
	public ModelAndView insertBitScenario(Model model, HttpServletRequest request
			,@RequestParam(value = "servertp", required = true) String servertp) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		try {
			TbBitScenarioVO vo = new TbBitScenarioVO();
			vo.setServertp(servertp);
			if(servertp.equals("120")) {
				HttpSession session = request.getSession();
				String username = (String) session.getAttribute("userName");
				String userId = (String) session.getAttribute("userId");
				
				String date = new SimpleDateFormat("yyyyMMddHHmmss", Locale.KOREA).format(new Date());
				logger.debug("####username = " + username);
				logger.debug("####userId = " + userId);
				logger.debug("#### date = " + date);
				vo.setRegist_user_id(userId);
				vo.setScenario_id(date);
				vo.setRegist_dt(date);
				vo.setLast_version(date);
				vo.setUser_id(userId);
			}else {
				
			}
			// 시나리오 추가
			bitService.insertBitScenario(vo);
			resultMap.put("result_code", Const.SQL_SUCCESS);
		} catch (Exception e) {
			logger.error("시나리오 추가 Exception " + e.getMessage());
			resultMap.put("result_code", Const.SQL_ERROR);
		} 

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * 시나리오 설명 수정
	 * @param auth
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateScenario.do")
	public ModelAndView updateScenario(Model model, HttpServletRequest request,
			@RequestParam(value = "data_explain", required = true) String dataexplain,
			@RequestParam(value = "scenario_id", required = true) String scenarioId) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		int result_code = Const.SQL_ERROR;
		
		try {
			BitVO vo = new BitVO();
			vo.setScenario_id(scenarioId);
			vo.setData_explain(dataexplain);
			// 시나리오 추가
			result_code = bitService.updateScenario(vo);
		} catch (Exception e) {
			logger.error("시나리오 추가 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * 시나리오 삭제
	 * 
	 * @param model
	 * @param reqeust
	 * @param scenario_id
	 * @return
	 */
	@RequestMapping(value = "/deleteBitScenario.do")
	public ModelAndView deleteBitScenario(Model model, HttpServletRequest reqeust,
			@RequestParam(value = "scenario_id", required = true) String scenario_id,
			@RequestParam(value = "servertp", required = true) String servertp) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		int result_code = Const.SQL_ERROR;
		
		try {
			TbBitScenarioVO vo = new TbBitScenarioVO();
			vo.setServertp(servertp);
			vo.setScenario_id(scenario_id);
			result_code = bitService.deleteBitScenario(vo);
		} catch (Exception e) {
			logger.error("시나리오 삭제 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}

	/**
	 * 시나리오 이미지 리스트 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectImageList.do")
	public ModelAndView selectImageList(Model model, HttpServletRequest request
			,@RequestParam(value = "servertp", required = true) String servertp) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<BitVO>> resultMap = new HashMap<String, List<BitVO>>();

		try {
			if(servertp.equals("120")) { //신규
				BitVO vo = new BitVO();
				List<BitVO> resultList = bitService.selectImageList(vo);
				resultMap.put("resultList", resultList);
			}else { //광역
				ServletContext ctx = request.getSession().getServletContext();
				WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
				GrobalProps globalProps = (GrobalProps)webContext.getBean("propertyHolder");
				//광역 ftp server
				FtpUtil ftpUtil = new FtpUtil(globalProps, Integer.valueOf(servertp));
				
				List<BitVO> imgList = new ArrayList<BitVO>();
				if(ftpUtil.login()) {
					
					ftpUtil.changeDirectory(Const.WIDE_IMG_PATH);
					
					FTPFile[] list = ftpUtil.getFileList();
					for (int i = 0; i < list.length; i++) {
						BitVO vo = new BitVO();
						String fileName = list[i].getName();
						String time = ftpUtil.getFileDate(fileName);
						vo.setDisp_data_filename(fileName);
						vo.setRegist_dt(time);
						vo.setDisp_data_type("1");
						imgList.add(vo);
						System.out.println("#### " + fileName);
					}
					resultMap.put("resultList", imgList);
				}
			}
		} catch (Exception e) {
			logger.error("시나리오 이미지 리스트 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}

	/**
	 * 시나리오 영상 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectVideoList.do")
	public ModelAndView selectVideoList(Model model, HttpServletRequest request
			,@RequestParam(value = "servertp", required = true) String servertp) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<BitVO>> resultMap = new HashMap<String, List<BitVO>>();

		try {
			BitVO vo = new BitVO();
			List<BitVO> resultList = bitService.selectVideoList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("시나리오 영상 리스트 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}

	/**
	 * 시나리오 홍보 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectPromotionList.do")
	public ModelAndView selectPromotionList(Model model, HttpServletRequest request
			,@RequestParam(value = "servertp", required = true) String servertp) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<BitVO>> resultMap = new HashMap<String, List<BitVO>>();

		try {
			BitVO vo = new BitVO();
			List<BitVO> resultList = bitService.selectPromotionList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("시나리오 홍보 리스트 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * 시나리오 및 화면자료 업데이트
	 * @param model
	 * @param request
	 * @param scenario_id
	 * @param data_explain
	 * @param last_version
	 * @param scenario_ords
	 * @param disp_st_dts
	 * @param disp_ed_dts
	 * @param disp_times
	 * @param disp_data_ids
	 * @param disp_data_ids2
	 * @param data_explains
	 * @return
	 */
	@RequestMapping(value = "/saveScenario.do")
	public ModelAndView saveScenario(Model model, HttpServletRequest request,
			@RequestParam(value="scenario_id", required=true) String scenario_id,
			@RequestParam(value="data_explain", required=false, defaultValue="") String data_explain,
			@RequestParam(value="last_version", required=false, defaultValue="") String last_version,
			@RequestParam(value="scenario_ords", required=false, defaultValue="") String[] scenario_ords,
			@RequestParam(value="disp_st_dts", required=false, defaultValue="") String[] disp_st_dts,
			@RequestParam(value="disp_ed_dts", required=false, defaultValue="") String[] disp_ed_dts,
			@RequestParam(value="disp_times", required=false, defaultValue="") String[] disp_times,
			@RequestParam(value="disp_data_ids", required=false, defaultValue="") String[] disp_data_ids,
			@RequestParam(value="disp_data_ids2", required=false, defaultValue="") String[] disp_data_ids2,
			@RequestParam(value="data_explains", required=false, defaultValue="") String[] data_explains) {
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();

		int result_code = Const.SQL_ERROR;
		
		List<BitVO> vo_list = new ArrayList<BitVO>();	//시나리오, 상세항목
		List<BitVO> vo_list2 = new ArrayList<BitVO>();	//시나리오 화면 자료
		
		for (int i = 0; i < scenario_ords.length; i++) {
			BitVO vo = new BitVO();
			vo.setScenario_id(scenario_id);
			vo.setData_explain(data_explain);
			vo.setLast_version(last_version);
			vo.setScenario_ord(scenario_ords[i]);
			vo.setDisp_st_dt(disp_st_dts[i]);
			vo.setDisp_ed_dt(disp_ed_dts[i]);
			vo.setDisp_time(disp_times[i]);
			vo.setDisp_data_id(disp_data_ids[i]);
//			vo.setArea_code("286");
			
			vo_list.add(vo);
			
//			System.out.println("###scenario_id = " + vo.getScenario_id());
//			System.out.println("###data_explain = " + vo.getData_explain());
//			System.out.println("###last_version = " + vo.getLast_version());
//			System.out.println("###scenario_ord = " + vo.getScenario_ord());
//			System.out.println("###disp_st_dts = " + vo.getDisp_st_dt());
//			System.out.println("###disp_ed_dts = " + vo.getDisp_ed_dt());
//			System.out.println("###disp_time = " + vo.getDisp_time());
//			System.out.println("###disp_data_id = " + vo.getDisp_data_id());
		}
		
		for (int i = 0; i < disp_data_ids2.length; i++) {
			BitVO vo = new BitVO();
			vo.setDisp_data_id(disp_data_ids2[i]);
			vo.setData_explain(data_explains[i]);
			
			vo_list2.add(vo);
			
			/*System.out.println("###disp_data_id = " + vo.getDisp_data_id());
			System.out.println("###data_explain = " + vo.getData_explain());*/
		}
		
		try {
			result_code = bitService.saveScenario(vo_list, vo_list2);
		} catch (Exception e) {
			logger.error("시나리오 및 화면 자료 저장  Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}

	/**
	 * 시나리오 및 화면자료 업데이트
	 * @param model
	 * @param request
	 * @param scenario_id
	 * @param data_explain
	 * @param last_version
	 * @param scenario_ords
	 * @param disp_st_dts
	 * @param disp_ed_dts
	 * @param disp_times
	 * @param disp_data_ids
	 * @param disp_data_ids2
	 * @param data_explains
	 * @return
	 */
	@RequestMapping(value = "/saveWideScenario.do")
	public ModelAndView saveWideScenario(Model model, HttpServletRequest request,
			@RequestParam(value="snr_id", required=true) String snr_id,
			@RequestParam(value="arrSeq", required=false, defaultValue="") String[] arrSeq,
			@RequestParam(value="arrDisp_st_dts", required=false, defaultValue="") String[] arrDisp_st_dts,
			@RequestParam(value="arrView_times", required=false, defaultValue="") String[] arrView_times,
			@RequestParam(value="arrFile_name", required=false, defaultValue="") String[] arrFile_name) {
		
		ModelAndView mv = new ModelAndView();

		Map<String, Integer> resultMap = new HashMap<String, Integer>();

		int result_code = Const.SQL_ERROR;
		
		List<TbBitScenarioVO> list = new ArrayList<TbBitScenarioVO>();	//시나리오, 상세항목
		
		ScenarioData fileData = new ScenarioData();
		fileData.setbTotalCount((byte)(arrSeq.length));
		
		for (int i = 0; i < arrSeq.length; i++) {
			TbBitScenarioVO vo = new TbBitScenarioVO();
			vo.setSnr_id(snr_id);
			vo.setSeq(arrSeq[i]);
			vo.setData_type("1");
			vo.setFile_name(arrFile_name[i]);
			vo.setDisp_st_dt(arrDisp_st_dts[i]);
			vo.setFcount(arrSeq.length+"");
			vo.setBcdb(snr_id+".BCDB");
			vo.setFile_path(Const.WIDE_IMG_PATH);
			vo.setView_time(arrView_times[i]);
			list.add(vo);
			fileData.addScenario((byte)1 ,arrFile_name[i].getBytes());
		}
		File scFile = new File("D:/"+snr_id+".BCDB");
		if(scFile.exists()) {
			scFile.delete();
		}
		try {
			scFile.createNewFile();
			FileUtils.writeByteArrayToFile(scFile, fileData.GetByteArray());
		} catch (IOException e) {
			System.out.println("## file create except " + e.toString());
			logger.error("local config 파일 생성  IOException " + e.toString());
		}
		FtpUtil ftpUtil = new FtpUtil("10.1.11.70", 21, "BIT", "BIT1234");
		
		if(ftpUtil.login()) {
			ftpUtil.changeDirectory("/BIS/DOWN/SNR/");
			ftpUtil.uploadFile("", scFile, "");
			ftpUtil.logout();
	    	
			try {
				result_code = bitService.saveWideScenario(list);
			} catch (Exception e) {
				logger.error("시나리오 및 화면 자료 저장  Exception " + e.getMessage());
			} finally {
				resultMap.put("result_code", result_code);
			}
		}else {
			resultMap.put("result_code", Const.SQL_ERROR);
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	
	
	/**
	 * BIT 제어목록 조회
	 * @param model
	 * @param request
	 * @param stop_name
	 * @param bit_id
	 * @param group_id
	 * @param type
	 * @param company_id
	 * @param business_id
	 * @param bit_install_type
	 * @return
	 */
	@RequestMapping(value = "/selectBitControlList.do")
	public ModelAndView selectBitControlList(Model model, HttpServletRequest request,
			@RequestParam(value = "server_id", required = false, defaultValue = "") String server_id,
			@RequestParam(value = "bittpcd", required = false, defaultValue = "") String bittpcd,
			@RequestParam(value = "searchWord", required = false, defaultValue = "") String searchWord) {
		ModelAndView mv = new ModelAndView();
		Map<String, List<TbIscBitstatVO> > resultMap = new HashMap<String, List<TbIscBitstatVO> >();
		
		try {
			TbIscBitstatVO vo = new TbIscBitstatVO();
			vo.setServer_id(server_id);
			vo.setBittpcd(bittpcd);
			vo.setSearchWord(searchWord);

			List<TbIscBitstatVO> resultList = bitService.selectBitControlList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 제어 목록 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 제어 업데이트
	 * @param model
	 * @param request
	 * @param vo
	 * @return
	 */
	@RequestMapping(value = "/updateBitControl.do")
	public ModelAndView updateBitControl(Model model, HttpServletRequest request, BitVO vo) {
		ModelAndView mv = new ModelAndView();
	
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		
		int result_code = Const.SQL_ERROR;
/*		
		System.out.println("######################" + vo.getDisp_st_time());
		System.out.println("######################" + vo.getDisp_ed_time());
		System.out.println("######################" + vo.getFan_min_temperature());
		System.out.println("######################" + vo.getFan_max_temperature());
		System.out.println("######################" + vo.getHeater_min_temperature());
		System.out.println("######################" + vo.getHeater_max_temperature());
		System.out.println("######################" + vo.getInfo_sort_type());
		System.out.println("######################" + vo.getIncoming_type());
		System.out.println("######################" + vo.getIncoming_time());
		System.out.println("######################" + vo.getIncoming_stop());
		System.out.println("######################" + vo.getStatus_sendcycle());
		System.out.println("######################" + vo.getImage_sendcycle());
		System.out.println("######################" + vo.getCapture_sendcycle());
		System.out.println("######################" + vo.getSpeaker_volume());
		System.out.println("######################" + vo.getCrash_detect_flag());
		System.out.println("######################" + vo.getCrash_detect_value());
		*/
		try {
			//BIT 업데이트
			result_code = bitService.updateBitControl(vo);
		} catch (Exception e) {
			logger.error("BIT 제어 업데이트 Exception " + e.getMessage());
		} finally {
			resultMap.put("result_code", result_code);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * BIT 제어목록 Excel 다운
	 * @param request
	 * @param response
	 * @param session
	 * @Param list Row data의 JSON String
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/downloadBitControlExcel.do")
	public void downloadBitControlExcel(HttpServletRequest request, HttpServletResponse response,
			HttpSession session,
			@RequestBody String list){
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("BIT 제어 목록");
		
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
		cell.setCellValue("구분");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("관리번호");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("단축 ID");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("BIT ID");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("설치위치");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("BIT 유형");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("수집일시");
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("IP");
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("통신회선");
		
		int i = 1;
		for (Map<String, String> map : resultMap) {
			cell = excRowList.get(i).createCell(0);
			cell.setCellValue(map.get("descr"));
			cell = excRowList.get(i).createCell(1);
			cell.setCellValue(map.get("facilid"));
			cell = excRowList.get(i).createCell(2);
			cell.setCellValue(map.get("shortid"));
			cell = excRowList.get(i).createCell(3);
			cell.setCellValue(map.get("bitid"));
			cell = excRowList.get(i).createCell(4);
			cell.setCellValue(map.get("detail"));
			cell = excRowList.get(i).createCell(5);
			cell.setCellValue(map.get("bittpnm"));
			cell = excRowList.get(i).createCell(6);
			cell.setCellValue(map.get("colldt"));
			cell = excRowList.get(i).createCell(7);
			cell.setCellValue(map.get("ipaddr_1"));
			cell = excRowList.get(i).createCell(8);
			cell.setCellValue(map.get("com_linenum"));
			i++;
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, resultMap.size(), 0, 8);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 8);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, resultMap.size(), 0, 8);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 제어 목록";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	/**
	 * BIT 모니터링 리스트 조회 - 조회결과 Excel 다운로드
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitMonitoringList.do")
	public ModelAndView selectBitMonitoringList(Model model, HttpServletRequest request,
			@RequestParam(value = "search_word", required = false, defaultValue = "") String search_word,
			@RequestParam(value = "group_id", required = false, defaultValue = "") String group_id,
			@RequestParam(value = "type", required = false, defaultValue = "") String type,
			@RequestParam(value = "business_id", required = false, defaultValue = "") String business_id) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<BitVO>> resultMap = new HashMap<String, List<BitVO>>();

		try {
			BitVO vo = new BitVO();
			vo.setSearchWord(search_word);
			vo.setBit_cate_id(group_id);
			vo.setBit_type(type);
			vo.setBusiness_id(business_id);
			vo.setArea_code("286");
			List<BitVO> resultList = bitService.selectBitMonitoringList(vo);
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("BIT 모니터링 목록 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * 전체 BIT 조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitListAll.do")
	public ModelAndView selectBitListAll(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<BitVO> > resultMap = new HashMap<String, List<BitVO> >();
		
		try {
			List<BitVO> resultList = bitService.selectBitListAll();
			resultMap.put("resultList", resultList);
		} catch (Exception e) {
			logger.error("BIT 전체 목록 조회 Exception " + e.getMessage());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}

	/**
	 * BIT 초기 접속 이력
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitEarlyConnList.do")
	public ModelAndView selectBitEarlyConnList(Model model, HttpServletRequest request,
			@RequestParam(value = "text_search", required = true) String searchWord,						
			@RequestParam(value = "start_date_time", required = true) String start_date_time,
			@RequestParam(value = "end_date_time", required = true) String end_date_time) {

		ModelAndView mv = new ModelAndView();
		Map<String, List<BitConnectHistoryVO>> resultMap = new HashMap<String, List<BitConnectHistoryVO>>();
		BitConnectHistoryVO vo = new BitConnectHistoryVO();
		
		vo.setSearchWord(searchWord);		
		vo.setStart_date_time(start_date_time);
		vo.setEnd_date_time(end_date_time);

		try {
			List<BitConnectHistoryVO> resultList = bitService.selectBitEarlyConnList(vo);
			resultMap.put("resultList", resultList);
			logger.debug("##selectBitEarlyConnList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitEarlyConnList Exception " + e.getMessage());
		}
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * BIT 초기 접속 이력 - Excel 다운로드
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/downloadBitEarlyConnExcel.do")
	public void downloadBitEarlyConnExcel(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			@RequestParam(value = "bit_id", required = true) String[] bit_id,
			@RequestParam(value = "stop_name", required = true) String[] stop_name,
			@RequestParam(value = "hs_regist_dt", required = true) String[] hs_regist_dt,
			@RequestParam(value = "connect_ip", required = true) String[] connect_ip,
			@RequestParam(value = "disconnect_dt", required = true) String[] disconnect_dt){

		ArrayList<String[]> rowData = new ArrayList<>();
		
		rowData.add(bit_id);
		rowData.add(stop_name);
		rowData.add(hs_regist_dt);
		rowData.add(connect_ip);
		rowData.add(disconnect_dt);
		
		HSSFWorkbook wb = new HSSFWorkbook();
		HSSFSheet sheet = wb.createSheet("BIT 초기 접속 목록");

		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();

		for (int i = 0; i < (bit_id.length + 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short) 400);
		}
		
		HSSFCell cell = null;
		/*{label:"BIT ID",				name:"bit_id",				index:"bit_id",					width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"지점명",			name:"stop_name",			index:"stop_name",				width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"등록일자",			name:"hs_regist_dt",		index:"hs_regist_dt",			width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"연결된IP",			name:"connect_ip",			index:"connect_ip",				width: "100", 	align:"center", hidden:false, sortable:true},
        {label:"연결종료일자",	name:"disconnect_dt",		index:"disconnect_dt",			width: "100", 	align:"center", hidden:false, sortable:true},*/
		
		cell = excRowList.get(0).createCell(0);
		cell.setCellValue("BIT ID");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("지점명");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("등록일자");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("연결된IP");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("연결종료일자");
		
		for(int i=0; i<bit_id.length; i++){			
			// BIT ID
			cell = excRowList.get(i + 1).createCell(0);
			cell.setCellValue(rowData.get(0)[i]);
			// 지점명
			cell = excRowList.get(i + 1).createCell(1);
			cell.setCellValue(rowData.get(1)[i]);
			// 등록일자
			cell = excRowList.get(i + 1).createCell(2);
			cell.setCellValue(rowData.get(2)[i]);
			// 연결된IP
			cell = excRowList.get(i + 1).createCell(3);
			cell.setCellValue(rowData.get(3)[i]);
			// 연결종료일자
			cell = excRowList.get(i + 1).createCell(4);
			cell.setCellValue(rowData.get(4)[i]);
		}
		
		// Style Set
		ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, bit_id.length, 0, 2);
		ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, bit_id.length, 0, 2);

		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " BIT 초기 접속 목록";

		ExcelUtil.excelFileDownload(wb, request, response, fileName);		
	}
	
	/**
	 * BIT 이미지 요청
	 * type [0: bit img, 1: cam img]
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getBitImage.do")
	public ModelAndView getBitImage(Model model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="bit_id", required=true) String paramBitId,
			@RequestParam(value="type", required=true) int paramType) {
	   
		ModelAndView mv = new ModelAndView();
		Map<String, List<BitImgVO>> resultMap = new HashMap<String, List<BitImgVO>>();
		List<BitImgVO> resultList = new ArrayList<BitImgVO>();
	    try {
	    	logger.debug("#paramBitId |" + paramBitId+"|");
	    	ServletContext ctx = session.getServletContext();
		    WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
		    GrobalProps grobalProps = (GrobalProps)webContext.getBean("propertyHolder");
			
		    String path, imgName;
		    
		    if(paramType == 0) {
		    	path = grobalProps.getBitDir();
		    	imgName = paramBitId + "_";
		    }else {
		    	path = grobalProps.getCamDir();
		    	imgName = "WC_" + paramBitId + "_";
		    }
		    File dir = new File(path);
		    
		    File[] list = dir.listFiles();
		    for(int i=0; i<list.length; i++) {
		    	String name = list[i].getName();
				if(name.indexOf(imgName) == 0) {
					BitImgVO vo = new BitImgVO();
					byte[] imgBytes = ImageUtil.read(list[i]);
					String createDate = new SimpleDateFormat("yyyy-MM-dd a hh:mm").format(ImageUtil.getCreationTime(list[i]).toMillis());
					logger.debug("## [name:" + list[i].getName() + "] [date:" +createDate+"]");
					vo.setBit_id(paramBitId);
					vo.setBase64Img(Base64.getEncoder().encodeToString(imgBytes));
					vo.setCreate_date(createDate);
					resultList.add(vo);
				}
		    }
		    resultMap.put("resultList", resultList);
		
		} catch (Exception e) {
			logger.error("## e "  + e.toString());
		}
	    mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 시나리오 데이터 불러오기
	 * @param model
	 * @param request
	 * @param session
	 * @param disp_data_filename
	 * @param disp_data_type 1:이미지, 2: 영상, 3: 홍보
	 * @return
	 */
	@RequestMapping(value = "/getScenData.do")
	public ModelAndView getScenData(Model model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="disp_data_filename", required=true) String disp_data_filename,
			@RequestParam(value="disp_data_type", required=true) String disp_data_type) {
	   
		ModelAndView mv = new ModelAndView();
		Map<String, BitScenDataVO> resultMap = new HashMap<String, BitScenDataVO>();
		BitScenDataVO vo = null;

		try {
			logger.debug("###file_name = " + disp_data_filename);
			logger.debug("###data_type = " + disp_data_type);
	    	
	    	ServletContext ctx = session.getServletContext();
		    WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
		    GrobalProps globalProps = (GrobalProps)webContext.getBean("propertyHolder");
			
		    String path;
		    
		    switch (disp_data_type) {
		    case "1": path = globalProps.getScenImgDir(); break;
		    case "2": path = globalProps.getScenVideoDir(); break;
		    case "3": path = globalProps.getScenPromoDir(); break;
		    default: path = null;
		    }

		    if (path != null) {
				File dir = new File(path);

				File[] list = dir.listFiles();

				for (int i = 0; i < list.length; i++) {
					String name = list[i].getName();
					if (disp_data_filename.equals(name)) {
						vo = new BitScenDataVO();
						byte[] bytes = ImageUtil.read(list[i]);
						vo.setDisp_data_filename(disp_data_filename);
						vo.setBase64Img(Base64.getEncoder().encodeToString(bytes));
					}
				}
		    }
		    resultMap.put("dataVo", vo);
		} catch (Exception e) {
			logger.error("##시나리오 데이터 불러오기 Exception "  + e.getMessage());
		}
	    mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 시나리오 화면 자료 ID
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectDisplayDataId.do")
	public ModelAndView selectDisplayDataId(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		int id = -1;
		
		try {
			id = bitService.selectDisplayDataId();
		} catch (Exception e) {
			logger.error("시나리오 화면 자료 ID 불러오기 Exception " + e.getMessage());
		} finally {
			resultMap.put("id", id);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		
		return mv;
	}
	
	/**
	 * (신규BIT)시나리오 파일 업로드
	 * @param model
	 * @param request
	 * @param session
	 * @param data_type
	 * @param files
	 * @return
	 */
	@RequestMapping(value = "/upLoadNewScenData.do")
	public ModelAndView upLoadNewScenData(Model model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="data_id", required=true) String data_id,
			@RequestParam(value="row_id", required=true) Integer row_id,
			@RequestParam(value="data_type", required=true) String data_type,
			@RequestParam(value="files", required=true) MultipartFile multipart_file) {
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		
		String userId = (String) session.getAttribute("userId");//ex.admin
		ServletContext ctx = session.getServletContext();
		WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
		GrobalProps globalProps = (GrobalProps)webContext.getBean("propertyHolder");
		FtpUtil ftp_util = new FtpUtil(globalProps, 120);
		File file = ftp_util.multipartToFile(multipart_file);
		
		Boolean upload_success = false;
		String file_type = null;
//		String save_dir = null;
		int result_code = Const.SQL_ERROR;
		

		if ("1".equals(data_type)) {
			file_type = "IMG";
//			save_dir = globalProps.getScenImgDir();
		} else if ("2".equals(data_type)) {
			file_type = "AVI";
//			save_dir = globalProps.getScenVideoDir();
		}
		
		/**DEBUG**/
		logger.debug("####### row_id = " + row_id);
		logger.debug("####### data_type = " + data_type);
		logger.debug("####### file_name = " + multipart_file.getOriginalFilename());
		/*********/
		
		try {
			if(ftp_util.login()) {
				ftp_util.changeDirectory("/NOTICE/IMAGE");
				
//				String save_file_name = save_dir + multipart_file.getOriginalFilename();
					
				upload_success = ftp_util.uploadFile(file_type, file, null); //FTP에 업로드
//				multipart_file.transferTo(new File(save_file_name)); //Local에 업로드
			}
			
			if (upload_success) {
				BitVO vo = new BitVO();
				String date = new SimpleDateFormat("yyyyMMddHHmmss", Locale.KOREA).format(new Date());
					
				vo.setDisp_data_id(data_id);
				vo.setDisp_data_type(data_type);
				vo.setDisp_data_filename(multipart_file.getOriginalFilename());
				vo.setRegist_dt(date);
				vo.setUse_flag("1");
				vo.setRegist_user_id(userId);
				vo.setData_explain("설명 없음");
				vo.setData_version(null);
				vo.setArea_code("286");
				
				result_code = bitService.insertScenarioDisplay(vo);
			}
		} catch (Exception e) {
			logger.error("시나리오 파일 업로드 Exception " + e.getMessage());
			if (upload_success) {
				ftp_util.deleteFile(file);
			}
		} finally {
			resultMap.put("row_id", row_id);
			resultMap.put("result_code", result_code);
			ftp_util.logout();
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * (광역BIT)시나리오 파일 업로드
	 * @param model
	 * @param request
	 * @param session
	 * @param data_type
	 * @param files
	 * @return
	 */
	@RequestMapping(value = "/upLoadWideScenData.do")
	public ModelAndView upLoadWideScenData(Model model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="data_id", required=true) String data_id,
			@RequestParam(value="row_id", required=true) Integer row_id,
			@RequestParam(value="data_type", required=true) String data_type,
			@RequestParam(value="files", required=true) MultipartFile multipart_file) {
		ModelAndView mv = new ModelAndView();
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		
		String userId = (String) session.getAttribute("userId");//ex.admin
		ServletContext ctx = session.getServletContext();
		WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
		GrobalProps globalProps = (GrobalProps)webContext.getBean("propertyHolder");
		FtpUtil ftp_util = new FtpUtil(globalProps, 123);
		FtpUtil ftp_util_ = new FtpUtil(globalProps, 124);
		File file = ftp_util.multipartToFile(multipart_file);
		
		Boolean upload_success = false;
		String file_type = null;
//		String save_dir = null;
		int result_code = Const.SQL_ERROR;
		
		try {
			if(ftp_util.login()) {
				ftp_util.changeDirectory(Const.WIDE_IMG_PATH);
//				String save_file_name = save_dir + multipart_file.getOriginalFilename();
					
				upload_success = ftp_util.uploadFile(file_type, file, null); //FTP에 업로드
//				multipart_file.transferTo(new File(save_file_name)); //Local에 업로드
			}
			
			if(ftp_util_.login()) {
				ftp_util_.changeDirectory(Const.WIDE_IMG_PATH);
//				String save_file_name = save_dir + multipart_file.getOriginalFilename();
					
				upload_success = ftp_util_.uploadFile(file_type, file, null); //FTP에 업로드
//				multipart_file.transferTo(new File(save_file_name)); //Local에 업로드
			}
			
//			if (upload_success) {
//				BitVO vo = new BitVO();
//				String date = new SimpleDateFormat("yyyyMMddHHmmss", Locale.KOREA).format(new Date());
//					
//				vo.setDisp_data_id(data_id);
//				vo.setDisp_data_type(data_type);
//				vo.setDisp_data_filename(multipart_file.getOriginalFilename());
//				vo.setRegist_dt(date);
//				vo.setUse_flag("1");
//				vo.setRegist_user_id(userId);
//				vo.setData_explain("설명 없음");
//				vo.setData_version(null);
//				vo.setArea_code("286");
//				
//				result_code = bitService.insertScenarioDisplay(vo);
//			}
		} catch (Exception e) {
			logger.error("시나리오 파일 업로드 Exception " + e.getMessage());
			if (upload_success) {
				ftp_util.deleteFile(file);
			}
		} finally {
			resultMap.put("row_id", row_id);
			resultMap.put("result_code", result_code);
			ftp_util.logout();
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 홍보문구 등록
	 */
	@RequestMapping(value = "/insertTextScenData.do")
	public ModelAndView insertTextScenData(Model model, HttpServletRequest request, HttpSession session,
			@RequestParam(value="data_type", required=true) String data_type,
			@RequestParam(value="text", required=true) String text) {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Integer> resultMap = new HashMap<String, Integer>();
		
		String userId = (String) session.getAttribute("userId");//ex.admin
		try {
			BitVO vo = new BitVO();
			String date = new SimpleDateFormat("yyyyMMddHHmmss", Locale.KOREA).format(new Date());
			
			vo.setDisp_data_type(data_type);
			vo.setDisp_data_filename(text);
			vo.setRegist_dt(date);
			vo.setUse_flag("1");
			vo.setRegist_user_id(userId);
			
			bitService.insertScenarioText(vo);
			resultMap.put("result", Const.SQL_SUCCESS);
		} catch (Exception e) {
			// TODO: handle exception
			resultMap.put("result", Const.SQL_ERROR);
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	
	/**
	 * 분석/가공 - 도착정보 신뢰도 분석
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectArrivalTrustList.do")
	public ModelAndView selectArrivalTrustList(Model model, HttpServletRequest request,			
			@RequestParam(value = "check_all", required = false, defaultValue="") String check_all,						
			@RequestParam(value = "bit_id", required = false, defaultValue="") String bit_id,						
			@RequestParam(value = "stop_id", required = false, defaultValue="") String stop_id,						
			@RequestParam(value = "start_range", required = true) String start_range,						
			@RequestParam(value = "end_range", required = true) String end_range,						
			@RequestParam(value = "start_date_time", required = true) String start_date_time,
			@RequestParam(value = "end_date_time", required = true) String end_date_time) {
		
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<ArrivalTrustVO>> resultMap = new HashMap<String, List<ArrivalTrustVO>>();
		
		ArrivalTrustVO vo = new ArrivalTrustVO();
		
		try {
			vo.setArea_code("286"); 
			vo.setCheck_all(check_all);
			vo.setBit_id(bit_id);
			vo.setStop_id(stop_id);
			vo.setStart_date_time(start_date_time);
			vo.setEnd_date_time(end_date_time);
			vo.setStart_range(start_range);
			vo.setEnd_range(end_range);
			
			List<ArrivalTrustVO> resultList = bitService.selectArrivalTrustList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectArrivalTrustList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectArrivalTrustList exception " + e.toString());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 분석/가공 - 도착정보 신뢰도 분석/상세
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectArrivalTrustInfo.do")
	public ModelAndView selectArrivalTrustInfo(Model model, HttpServletRequest request,
			@RequestParam(value = "bit_id", required = true) String bit_id,						
			@RequestParam(value = "stop_id", required = true) String stop_id,						
			@RequestParam(value = "start_range", required = true) String start_range,						
			@RequestParam(value = "end_range", required = true) String end_range,						
			@RequestParam(value = "start_date_time", required = true) String start_date_time,
			@RequestParam(value = "end_date_time", required = true) String end_date_time) {
		
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<ArrivalTrustVO>> resultMap = new HashMap<String, List<ArrivalTrustVO>>();
		
		ArrivalTrustVO vo = new ArrivalTrustVO();
		
		try {
			vo.setBit_id(bit_id);
			vo.setStop_id(stop_id);
			vo.setStart_date_time(start_date_time);
			vo.setEnd_date_time(end_date_time);
			vo.setStart_range(start_range);
			vo.setEnd_range(end_range);
			
			List<ArrivalTrustVO> resultList = bitService.selectArrivalTrustInfo(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectArrivalTrustInfo resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectArrivalTrustInfo exception " + e.toString());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 분석/가공 - 도착정보 신뢰도 분석/상세 그래프용
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectTrustChartList.do")
	public ModelAndView selectTrustChartList(Model model, HttpServletRequest request,
			@RequestParam(value = "route_id", required = true) String route_id,	
			@RequestParam(value = "bit_id", required = true) String bit_id,						
			@RequestParam(value = "stop_id", required = true) String stop_id,						
			@RequestParam(value = "start_range", required = true) String start_range,						
			@RequestParam(value = "end_range", required = true) String end_range,						
			@RequestParam(value = "start_date_time", required = true) String start_date_time,
			@RequestParam(value = "end_date_time", required = true) String end_date_time) {
		
		ModelAndView mv = new ModelAndView();
		
		Map<String, List<ArrivalTrustVO>> resultMap = new HashMap<String, List<ArrivalTrustVO>>();
		
		ArrivalTrustVO vo = new ArrivalTrustVO();
		
		try {
			vo.setRoute_id(route_id);
			vo.setBit_id(bit_id);
			vo.setStop_id(stop_id);
			vo.setStart_date_time(start_date_time);
			vo.setEnd_date_time(end_date_time);
			vo.setStart_range(start_range);
			vo.setEnd_range(end_range);
			
			List<ArrivalTrustVO> resultList = bitService.selectTrustChartList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectTrustChartList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectTrustChartList exception " + e.toString());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 분석/가공 - 도착정보 신뢰도 분석 > excel 저장
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/excelArrivalTrustList.do")
	public void excelArrivalTrustList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="bit_id", required = true) String[] bit_id,    
			@RequestParam(value="stop_name", required = true) String[] stop_name, 
			@RequestParam(value="service_id", required = true) String[] service_id,
			@RequestParam(value="stop_id", required = true) String[] stop_id,   
			@RequestParam(value="err_01", required = true) String[] err_01,    
			@RequestParam(value="err_12", required = true) String[] err_12,    
			@RequestParam(value="err_23", required = true) String[] err_23,    
			@RequestParam(value="err_3", required = true) String[] err_3,     
			@RequestParam(value="err_4", required = true) String[] err_4,     
			@RequestParam(value="total_cnt", required = true) String[] total_cnt, 
			@RequestParam(value="trust", required = true) String[] trust){
		
		try {
			
			ArrayList<String[]> rowData = new ArrayList<>();
			
			rowData.add(bit_id);    
			rowData.add(stop_name); 
			rowData.add(service_id);
			rowData.add(stop_id);   
			rowData.add(err_01);    
			rowData.add(err_12);    
			rowData.add(err_23);    
			rowData.add(err_3);     
			rowData.add(err_4);     
			rowData.add(total_cnt); 
			rowData.add(trust);     

			HSSFWorkbook wb = new HSSFWorkbook();
			HSSFSheet sheet = wb.createSheet("도착정보 신뢰도 목록");

			sheet.setGridsPrinted(false);
			sheet.setFitToPage(true);
			sheet.setDisplayGuts(true);

			ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();
			
			for (int i = 0; i < (bit_id.length + 1); i++) {
				excRowList.add(sheet.createRow(i));
				sheet.setColumnWidth(i, 4000);
				excRowList.get(i).setHeight((short) 400);
			}
			
			HSSFCell cell = null;
			
			cell = excRowList.get(0).createCell(0);
			cell.setCellValue("BIT ID");	
			cell = excRowList.get(0).createCell(1);
			cell.setCellValue("지점명");		
			cell = excRowList.get(0).createCell(2);
			cell.setCellValue("모바일ID");	
			cell = excRowList.get(0).createCell(3);
			cell.setCellValue("정류장ID");	
			cell = excRowList.get(0).createCell(4);
			cell.setCellValue("0~1분");		
			cell = excRowList.get(0).createCell(5);
			cell.setCellValue("1~2분");		
			cell = excRowList.get(0).createCell(6);
			cell.setCellValue("2~3분");		
			cell = excRowList.get(0).createCell(7);
			cell.setCellValue("3분 이내 출발");	
			cell = excRowList.get(0).createCell(8);
			cell.setCellValue("3분 초과");   	
			cell = excRowList.get(0).createCell(9);
			cell.setCellValue("총 건수");   	
			cell = excRowList.get(0).createCell(10);
			cell.setCellValue("신뢰도(%)");
			
			for (int i = 0; i < bit_id.length; i++) {
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
			}
			
			// Style Set
			ExcelUtil.setStyleBorder(sheet, wb, excRowList, 0, bit_id.length, 0, 2);
			ExcelUtil.setStyleTitleSummary(wb, excRowList, 0, 2);
			ExcelUtil.setStyleNum(sheet, wb, excRowList, 0, bit_id.length, 0, 2);

			Date now = new Date();

			DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
			String fileName = formatDate.format(now) + " 도착정보 신뢰도 목록";

			ExcelUtil.excelFileDownload(wb, request, response, fileName);			
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}
		
	/**
	 * 분석/가공 - 지점별 통행시간
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectBitPassTimeList.do")
	public ModelAndView selectBitPassTimeList(Model model, HttpServletRequest request) {
		
		ModelAndView mv = new ModelAndView();		
		
		Map<String, List<MProcessCurrentVO>> resultMap = new HashMap<String, List<MProcessCurrentVO>>();
		
		MProcessCurrentVO vo = new MProcessCurrentVO();
		
		try {
			List<MProcessCurrentVO> resultList = bitService.selectBitPassTimeList(vo);
			resultMap.put("resultList", resultList);
			
			logger.debug("##selectBitPassTimeList resultList " + resultList.size());
		} catch (Exception e) {
			logger.error("##selectBitPassTimeList exception " + e.toString());
		}
		
		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");
		return mv;
	}
	
	/**
	 * 인천/확대 스케줄 이미지 목록 조회
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectScheduleImageList.do")
	public ModelAndView selectScheduleImageList(Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();

		Map<String, List<FileVO>> resultMap = new HashMap<String, List<FileVO>>();
		ServletContext ctx = request.getSession().getServletContext();
		WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
		GrobalProps globalProps = (GrobalProps)webContext.getBean("propertyHolder");
		try {
			FtpUtil ftpUtil = new FtpUtil(globalProps, 121); //인천 전용 121
			List<FileVO> fileList = new ArrayList<FileVO>();
			
			if(ftpUtil.login()) {
				ftpUtil.changeDirectory(Const.WIDE_IMG_PATH);
				FTPFile[] list = ftpUtil.getFileList();
				for (int i = 0; i < list.length; i++) {
					
					if(list[i].isFile()){
						FileVO vo = new FileVO();
						String fileName = list[i].getName();
						String fileSize = String.valueOf(list[i].getSize());
						System.out.println("####fileName " + fileName);
						System.out.println("####fileSize " + fileSize);
						vo.setFiledir("/Image");
						vo.setFilekind("이미지");
						vo.setFilenm(fileName);
						vo.setFilesize(fileSize);
						vo.setFilever("1");
						fileList.add(vo);
					}
				}
				resultMap.put("resultList", fileList);
			}else {
				System.out.println("####ftpUtil.login( fail ");
			}
			
		} catch (Exception e) {
			logger.error("시나리오 이미지 리스트 조회 Exception " + e.getMessage());
		}

		mv.addAllObjects(resultMap);
		mv.setViewName("jsonView");

		return mv;
	}
	
	/**
	 * 인천 확대 스케줄 파일 작성
	 * @param request
	 * @param response
	 * @param session
	 * @param list Row data의 JSON String
	 * @throws TransformerException 
	 * @throws IOException 
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/saveSchedulXml.do")
	public void saveSchedulXml(HttpServletRequest request, HttpServletResponse response,
			HttpSession session, 			@RequestBody String list) throws ParserConfigurationException, TransformerException, IOException{
		//앞 5글자("json=") 제거
		list = list.substring(5);
		List<Map<String, String>> resultMap = new ArrayList<Map<String, String>>();
		resultMap = JSONArray.fromObject(list);
		
		
		DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
		Document doc = docBuilder.newDocument();
		//standalone=''
		
		
		// 루트 엘리먼트
		Element media = doc.createElement("Media");
		media.setAttribute("version", "1.0");
		media.setAttribute("xmlns", "urn:MediaSchedule-Schema");
		doc.appendChild(media);
		
		//filelist
		Element fileList = doc.createElement("FileList");
		media.appendChild(fileList);
		
		//download
		Element downLoad = doc.createElement("Download");
		media.appendChild(downLoad);
		
		//download> group
		Element downGroup = doc.createElement("Group");
		downLoad.appendChild(downGroup);
		
		//schedule
		Element schedule = doc.createElement("Schedule");
		media.appendChild(schedule);
		//schedule > group
		Element schGroup = doc.createElement("Group");
		schedule.appendChild(schGroup);
		
		int i = 0;
		for (Map<String, String> map : resultMap) {
			if(i == 0) {
				downGroup.setAttribute("dateTime", map.get("down_time"));
				schedule.setAttribute("dateTime", map.get("down_time"));
				schGroup.setAttribute("time", map.get("disp_sdate"));
			}
			//file
			Element file = doc.createElement("File");
			file.setAttribute("name", map.get("filenm"));
			fileList.appendChild(file);
			
			//download > group > item
			Element downItem = doc.createElement("Item");
			downItem.setAttribute("size", map.get("filesize"));
			downItem.setAttribute("path", "Image/"+map.get("filenm"));
			downGroup.appendChild(downItem);
			
			//schdule > group > item
			Element schItem = doc.createElement("Item");
			schItem.setAttribute("type", "image");
			schItem.setAttribute("name", map.get("filenm"));
			schItem.setAttribute("running", map.get("run_time"));
			schGroup.appendChild(schItem);
			i++;
		}
		
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();

		transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
		transformer.setOutputProperty(OutputKeys.INDENT, "yes");	
		DOMSource source = new DOMSource(doc);

		//
		Date now = new Date();

		SimpleDateFormat transFormat = new SimpleDateFormat("yyyyMMdd");
		String today = transFormat.format(now);

		System.out.println("date " + today);
		
		StreamResult result = new StreamResult(new FileOutputStream(new File("D:\\xml\\"+today+".xml")));
	
		transformer.transform(source, result);
		
		downXml(request, response, (today+".xml"));
	}
	
	
	private void downXml(HttpServletRequest request, HttpServletResponse response, String realFileName) throws IOException {
		final String ISO = "ISO-8859-1";
		
		String userAgent = request.getHeader("User-Agent");
		
		File file = new File("D:\\xml\\"+realFileName);
		
		response.reset();
		response.setContentType("application/octet-stream; utf-8");
		response.setContentLength((int) file.length());
		
		if (userAgent != null && userAgent.indexOf("MSIE") > -1) { // IE 7.0
			String f_name = java.net.URLEncoder.encode(realFileName, "UTF-8");
			f_name = f_name.replaceAll("\\+", "%20").replaceAll("\n", ""); 
			response.setHeader("Content-Disposition", "attachment; filename=" + f_name + ";");
			
	    } else { 
	    	if (userAgent != null && userAgent.indexOf("Trident") > -1) { //IE 11
	    		String f_name = java.net.URLEncoder.encode(realFileName, "UTF-8");
				f_name = f_name.replaceAll("\\+", "%20").replaceAll("\n", ""); 
				response.setHeader("Content-Disposition", "attachment; filename=" + f_name + ";");
	    	}else{ // Chrome, opera...
	    		response.setHeader("Content-Disposition", "attachment; filename="+ new String(realFileName.getBytes("UTF-8"), ISO).replaceAll("\n", "") + ";");	    		
	    	}
	    }
		
		response.setHeader("Content-Transfer-Encoding", "binary");
		
		OutputStream out = response.getOutputStream();
		FileInputStream fis = null;

		try {
			try {
				fis = new FileInputStream(file);
			} catch (FileNotFoundException ex) {
				logger.error("# exception " + ex.toString());
			}
			FileCopyUtils.copy(fis, out);
		} catch (IOException ex) {
			logger.error("# exception " + ex.toString());
		} finally {
			if (fis != null) {
				fis.close();
			}
		}
		out.flush();
	} 
	
	
}
