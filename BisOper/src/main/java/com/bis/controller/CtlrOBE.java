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

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bis.service.ObeService;
import com.bis.util.ExcelUtil;
import com.bis.util.ParameterUtil;
import com.bis.vo.ObeStatusVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrOBE.java
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
@RequestMapping(value = "/obe")
public class CtlrOBE {
    
	@Resource(name = "obeService")
    private ObeService obeService;
	
	private Logger logger = LogManager.getLogger(this.getClass());
	
	/**
	 * OBE 상태 및 목록  조회
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectObeStateList.do")
    public ModelAndView selectObeStateList(Model model, HttpServletRequest request
    		,@RequestParam(value="searchWord", required=false, defaultValue="") String paramWord) {
       
        ModelAndView mv = new ModelAndView();
        
        Map<String, List<ObeStatusVO>> resultMap = new HashMap<String, List<ObeStatusVO>>();
        ObeStatusVO vo = new ObeStatusVO();
        vo.setArea_code("286"); //TODO 인천코드로 변경
        vo.setSearchWord(ParameterUtil.getStrParameter(paramWord));
        try {
        	List<ObeStatusVO> resultList = obeService.selectObeStateList(vo);

        	resultMap.put("resultList", resultList);
        	
        	
		} catch (Exception e) {
			logger.error("##selectObeList exception " + e.toString());
		}
        mv.addAllObjects(resultMap);
        mv.setViewName("jsonView");
        return mv;
    }
	
	@RequestMapping(value = "/downloadObeStateExcel.do")
	public void downloadObeStateExcel(@RequestParam(value="searchWord", required=false, defaultValue="") String paramWord,
	HttpServletRequest request, HttpServletResponse response,
			HttpSession session) {
		
		List<ObeStatusVO> obeList = null;
        ObeStatusVO vo = new ObeStatusVO();
        vo.setArea_code("286"); //TODO 인천코드로 변경
        vo.setSearchWord(ParameterUtil.getStrParameter(paramWord));
		try {
			obeList = obeService.selectObeStateList(vo);
		} catch (SQLException e) {
			logger.error("Obe Excel download exception " + e.toString());
		}
		
		// 워크북 생성
		HSSFWorkbook wb = new HSSFWorkbook();
					
		// 워크시트 생성
		HSSFSheet sheet = wb.createSheet("OBE 상태 목록");
		
		sheet.setGridsPrinted(false);
		sheet.setFitToPage(true);
		sheet.setDisplayGuts(true);

		ArrayList<HSSFRow> excRowList = new ArrayList<HSSFRow>();
		
		for (int i = 0; i < (obeList.size() + 1); i++) {
			excRowList.add(sheet.createRow(i));
			sheet.setColumnWidth(i, 4000);
			excRowList.get(i).setHeight((short)400);
		}
		
		HSSFCell cell = null;
		/*{label: "연결상태",		name:"conn_status",				index:"conn_status",			width: "7.5%", 	align:"center", formatter: set_conn_status},
        {label: "차량 ID",		name:"veh_id", 	   				index:"veh_id",		 			width: "10%", 	align:"center"},
        {label: "차량 번호",		name:"plate_no", 				index:"plate_no", 				width: "5%", 	align:"center"},
        {label: "연결된 IP",		name:"connect_ip", 	   			index:"connect_ip", 			width: "10%", 	align:"center"},
        {label: "최종갱신시간",		name:"update_date", 	   		index:"update_date", 			width: "5%", 	align:"center"},
       
        {label: "펌웨어버전",		name:"firmware_version",  		index:"firmware_version", 		width: "5%", 	align:"center"},
        {label: "펌웨어 버전체크",	name:"firmware_check",  		index:"firmware_check", 		width: "5%", 	align:"center", formatter: set_version_check},
        {label: "기반정보 버전",	name:"info_version",  			index:"info_version", 			width: "5%", 	align:"center"},
        {label: "기반정보 버전체크",	name:"curdb_check", 			index:"curdb_check", 			width: "7.5%", 	align:"center", formatter: set_version_check},
        {label: "예약정보 버전",	name:"info_reserve_version",	index:"info_reserve_version", 	width: "10%", 	align:"center"},
        {label: "예약정보 버전체크",	name:"rd_check", 				index:"rd_check", 				width: "15%",	align:"center", formatter: set_version_check}*/
		cell = excRowList.get(0).createCell(0);
		cell.setCellValue("연결상태");
		cell = excRowList.get(0).createCell(1);
		cell.setCellValue("차량 ID");
		cell = excRowList.get(0).createCell(2);
		cell.setCellValue("차량 번호");
		cell = excRowList.get(0).createCell(3);
		cell.setCellValue("연결된 IP");
		cell = excRowList.get(0).createCell(4);
		cell.setCellValue("최종갱신시간");
		cell = excRowList.get(0).createCell(5);
		cell.setCellValue("펌웨어버전");
		cell = excRowList.get(0).createCell(6);
		cell.setCellValue("펌웨어 버전체크");
		cell = excRowList.get(0).createCell(7);
		cell.setCellValue("기번정보 버전");
		cell = excRowList.get(0).createCell(8);
		cell.setCellValue("기반정보 버전체크");
		cell = excRowList.get(0).createCell(9);
		cell.setCellValue("예약정보 버전");
		cell = excRowList.get(0).createCell(10);
		cell.setCellValue("예약정보 버전체크");
		
		for (int i = 0; i < obeList.size(); i++){
			ObeStatusVO rowValue = obeList.get(i);
			//연결 상태
			cell = excRowList.get(i+1).createCell(0);
			String status = rowValue.getConn_status();
			if ("1".equals(status)) {
				status = "연결정상";
			} else {
				status = "연결끊김";
			}
			cell.setCellValue(status);
			//차량 ID
			cell = excRowList.get(i+1).createCell(1);
			cell.setCellValue(rowValue.getVeh_id());
			//차량 번호
			cell = excRowList.get(i+1).createCell(2);
			cell.setCellValue(rowValue.getPlate_no());
			//연결된 IP
			cell = excRowList.get(i+1).createCell(3);
			cell.setCellValue(rowValue.getConnect_ip());
			//최종갱신시간
			cell = excRowList.get(i+1).createCell(4);
			cell.setCellValue(rowValue.getUpdate_date());
			//펌웨어버전
			cell = excRowList.get(i+1).createCell(5);
			cell.setCellValue(rowValue.getFirmware_version());
			//펌웨어 버전 체크
			cell = excRowList.get(i+1).createCell(6);
			cell.setCellValue(set_version_check(rowValue.getFirmware_check()));
			//기반정보 버전
			cell = excRowList.get(i+1).createCell(7);
			cell.setCellValue(rowValue.getInfo_version());
			//기반정보 체크
			cell = excRowList.get(i+1).createCell(8);
			cell.setCellValue(set_version_check(rowValue.getCurdb_check()));
			//예약정보 버전
			cell = excRowList.get(i+1).createCell(9);
			cell.setCellValue(rowValue.getInfo_reserve_version());
			//예약정보 버전 체크
			cell = excRowList.get(i+1).createCell(10);
			cell.setCellValue(set_version_check(rowValue.getRd_check()));
		}
		
		//Style Set
		ExcelUtil.setStyleBorder( sheet, wb, excRowList, 0, obeList.size(), 0, 2);
		ExcelUtil.setStyleTitleSummary( wb, excRowList, 0, 2);
		ExcelUtil.setStyleNum( sheet, wb, excRowList, 0, obeList.size(), 0, 2);
		
		Date now = new Date();

		DateFormat formatDate = DateFormat.getDateInstance(DateFormat.FULL);
		String fileName = formatDate.format(now) + " OBE 상태 목록";
		
		ExcelUtil.excelFileDownload(wb, request, response, fileName);
	}
	
	private String set_version_check(String version_check_code) {
		String version_check = "";
		switch (version_check_code) {
		case  "1": version_check = "최신버전"; break;
		case  "0": version_check = "업데이트 필요"; break;
		case "-1": version_check = "정보없음"; break;
		default: break;
		}
		
		return version_check;
	}
}
