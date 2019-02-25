package com.bis.util;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * 
 * <PRE>
 * System Name 	  : 인천교통정보센터 - 운영단말
 * Business Name  : 엑셀 핸들
 * Class Name 	  : ExcelUtil.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.08.25	  장민준      최초생성
 * </PRE>
 * @version 1.0
 * @see tps.ftms.cmmn.util.ExcelUtil
 * @author Copyright (C) 2016 by Incheon All right reserved.
 */
@SuppressWarnings("rawtypes")
public class ExcelUtil {


	/**
	 * 엑셀파일에 sheet를 만들고 첫줄(title)을 생성
	 * 
	 * @param wb 엑셀파일을 만들기 위한 객체
	 * @param excelMap the excel map
	 * @return sheet 생성된 액셀 sheet
	 */
	public static HSSFSheet createSheetTiles(HSSFWorkbook wb, Map excelMap) {
		HSSFSheet sheet = wb.createSheet();
		HSSFRow header = sheet.createRow(0);
		HSSFCell cell = null;

		Set titles = excelMap.keySet();
		Iterator iter = titles.iterator();
		int i = 0;
		while (iter.hasNext()) {
			cell = header.createCell(i);
			cell.setCellValue(iter.next().toString());
			i++;
		}
		return sheet;
	} // createUserListSheet end

	/**
	 * 엑셀파일에 sheet를 만들고 첫줄(title)을 생성.
	 * 
	 * @param wb 엑셀파일을 만들기 위한 객체
	 * @param titles title로 쓸 이름들
	 * @param sheetName sheet의 이름
	 * @return the hSSF sheet
	 */
	public static HSSFSheet createSheetTiles(HSSFWorkbook wb, String[] titles, String sheetName) {
		HSSFSheet sheet = wb.createSheet(sheetName);
		HSSFRow header = sheet.createRow(0);
		HSSFCell cell = null;

		for (int i = 0; i < titles.length; i++) {
			cell = header.createCell(i);
			cell.setCellValue(titles[i]);
		}
		return sheet;
	} 

	/**
	 * 엑셀 파일을 만든다
	 * 
	 * @param wb 액셀파일을 생성하는 객체
	 * @param objectList 액셀파일에 들어갈 데이터
	 * @param excelMap title로 사용될 이름과 데이터 객체의 멤버면수 이름들
	 */
	public static void createExcelFile(HSSFWorkbook wb, List objectList, Map excelMap) {

		HSSFSheet sheet = createSheetTiles(wb, excelMap);

		Collection attributes = excelMap.values();
		Iterator iter = attributes.iterator();
		String[] attributeList = new String[excelMap.size()];
		int l = 0;
		while (iter.hasNext()) {
			attributeList[l] = iter.next().toString();
			l++;
		}
		int rowNum = 1;
		HSSFCell cell;
		for (int i = 0; i < objectList.size(); i++) {
			Object object = objectList.get(i);
			HSSFRow row = sheet.createRow(rowNum++);
			for (int j = 0; j < attributeList.length; j++) {
				cell = row.createCell(j);

				Object value = null;

				try {
					if (object instanceof Map) {
						value = PropertyUtils.getProperty(object, attributeList[j]);
					} else if (attributeList[j].matches("[a-zA-Z][a-zA-Z0-9_]*\\.[a-zA-Z][a-zA-Z0-9_]*(\\.[a-zA-Z][a-zA-Z0-9_]*)*")) {
						value = PropertyUtils.getNestedProperty(object,
								attributeList[j]);
					} else if (attributeList[j].matches("[a-zA-Z][a-zA-Z0-9_]*")) {
						value = PropertyUtils.getSimpleProperty(object, attributeList[j]);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}

				cell.setCellValue(new HSSFRichTextString((value == null) ? "" : value.toString()));
			}
		}
	} // createExcelFile end

	/**
	 * 엑셀 파일을 만든다
	 * 
	 * @param wb 액셀파일을 생성하는 객체
	 * @param objectList 액셀파일에 들어갈 데이터
	 * @param excelMap title로 사용될 이름과 데이터 객체의 멤버면수 이름들
	 * @param cellType cell type 지정(string or number)
	 */
	public static void createExcelFile(HSSFWorkbook wb, List objectList, Map excelMap, String[] cellType) {

		HSSFSheet sheet = createSheetTiles(wb, excelMap);

		Collection attributes = excelMap.values();
		Iterator iter = attributes.iterator();
		String[] attributeList = new String[excelMap.size()];
		int l = 0;
		while (iter.hasNext()) {
			attributeList[l] = iter.next().toString();
			l++;
		}
		short rowNum = 1;
		HSSFCell cell;
		for (int i = 0; i < objectList.size(); i++) {
			Object object = objectList.get(i);
			HSSFRow row = sheet.createRow(rowNum++);
			for (int j = 0; j < attributeList.length; j++) {
				cell = row.createCell(j);

				Object value = null;

				try {
					if (object instanceof Map) {
						value = PropertyUtils.getProperty(object, attributeList[j]);
					} else if (attributeList[j].matches("[a-zA-Z][a-zA-Z0-9_]*\\.[a-zA-Z][a-zA-Z0-9_]*(\\.[a-zA-Z][a-zA-Z0-9_]*)*")) {
						value = PropertyUtils.getNestedProperty(object, attributeList[j]);
					} else if (attributeList[j].matches("[a-zA-Z][a-zA-Z0-9_]*")) {
						value = PropertyUtils.getSimpleProperty(object, attributeList[j]);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}

				if (cellType.length > j && cellType[j] != null && "number".equals(cellType[j])) {
					cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);
					try {
						cell.setCellValue(Double.parseDouble((value == null) ? "0" : value.toString()));
					}
					catch (Exception e) {
						cell.setCellValue(new HSSFRichTextString((value == null) ? "" : value.toString()));
					}
				} else {
					cell.setCellType(HSSFCell.CELL_TYPE_STRING);
					cell.setCellValue(new HSSFRichTextString((value == null) ? "" : value.toString()));
				}
			}
		}
	}

	/**
	 * 특정객체의 값을 엑셀파일의 sheet에 cell로 그려준다.
	 * 
	 * @param object the object
	 * @param attribute the attribute
	 * @param sheet the sheet
	 * @param rowNum the row num
	 * @param colNum the col num
	 */
	public static void makeExcelCell(Object object, String attribute, HSSFSheet sheet, int rowNum, int colNum) {
		HSSFRow row = sheet.createRow(rowNum);
		HSSFCell cell = row.createCell(colNum);
		Object value = null;
		try {
			if (attribute.matches("[a-zA-Z][a-zA-Z0-9_]*\\.[a-zA-Z][a-zA-Z0-9_]*(\\.[a-zA-Z][a-zA-Z0-9_]*)*")) {
				value = PropertyUtils.getNestedProperty(object, attribute);
			} else if (attribute.matches("[a-zA-Z][a-zA-Z0-9_]*")) {
				value = PropertyUtils.getSimpleProperty(object, attribute);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		cell.setCellValue(new HSSFRichTextString((value == null) ? "" : value.toString()));

	}

	/**
	 * 특정값을 엑셀파일의 sheet에 cell로 그려준다.
	 * 
	 * @param value the value
	 * @param sheet the sheet
	 * @param rowNum the row num
	 * @param colNum the col num
	 */
	public static void makeExcelCell(String value, HSSFSheet sheet, int rowNum, int colNum) {
		HSSFRow row = sheet.createRow(rowNum);
		HSSFCell cell = row.createCell(colNum);
		cell.setCellValue(new HSSFRichTextString((value == null) ? "" : value.toString()));
	}

	/**
	 * 특정값을 엑셀파일의 sheet에 cell로 그려준다.
	 * 
	 * @param value the value
	 * @param sheet the sheet
	 * @param rowNum the row num
	 * @param colNum the col num
	 * @param valueType the value type
	 */
	public static void makeExcelCell(Object value, HSSFSheet sheet, int rowNum, int colNum, String valueType) {
		HSSFRow row = sheet.createRow(rowNum);
		HSSFCell cell = row.createCell(colNum);

		if (valueType.equals("number")) {
			cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);
			cell.setCellValue(Double.parseDouble((String.valueOf(value) == null) ? "0.0" : String.valueOf(value)));
		} else if (valueType.equals("String")) {
			cell.setCellType(HSSFCell.CELL_TYPE_STRING);
			cell.setCellValue(new HSSFRichTextString((value == null) ? "" : value.toString()));
		}
	}

	/**
	 * 액셀파일 다운로드.
	 * 
	 * @param wb 액셀파일 객체
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @author ryan 08.05.29
	 */
	public static void excelFileDownload(HSSFWorkbook wb, HttpServletRequest request, HttpServletResponse response) {
		excelFileDownload(wb, request, response, null);
	}

	/**
	 * 액셀파일 다운로드.
	 * 
	 * @param wb the wb
	 * @param request the request
	 * @param response the response
	 * @param realFileName the real file name
	 */
	public static void excelFileDownload(HSSFWorkbook wb, HttpServletRequest request, HttpServletResponse response, String realFileName) {
		ServletContext servletContext = request.getSession().getServletContext();
		String file = "";
		if (realFileName == null || realFileName.trim().length() == 0) {
			file = request.getParameter("file");
			if (file == null || file.equals("")) {
				file = "/anonymous.xls";
			}
		} else {
			try {
				file = new String(realFileName.getBytes("euc-kr"), "8859_1");
			}
			catch (Exception e) {
				file = realFileName;
			}
			if (realFileName.indexOf(".") == -1)
				file = file + ".xls";
		}

		String fileName = file.substring(file.lastIndexOf("/") + 1);

		BufferedOutputStream outfile = null;
		String mimetype = servletContext.getMimeType(file);

		response.setContentType(mimetype);
		response.setHeader("Set-Cookie", "fileDownload=true; path=/");
		response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

		try {
			outfile = new BufferedOutputStream(response.getOutputStream(), 1024);
			wb.write(outfile);
			outfile.flush();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (outfile != null)
				try {
					outfile.close();
				} catch (IOException e) {
				}
		}
	} 
	
	public static void xssExcelFileDownload(XSSFWorkbook wb, HttpServletRequest request, HttpServletResponse response, String realFileName) {
		ServletContext servletContext = request.getSession().getServletContext();
		String file = "";
		if (realFileName == null || realFileName.trim().length() == 0) {
			file = request.getParameter("file");
			if (file == null || file.equals("")) {
				file = "/anonymous.xlsx";
			}
		} else {
			try {
				file = new String(realFileName.getBytes("euc-kr"), "8859_1");
			}
			catch (Exception e) {
				file = realFileName;
			}
			if (realFileName.indexOf(".") == -1)
				file = file + ".xlsx";
		}

		String fileName = file.substring(file.lastIndexOf("/") + 1);

		BufferedOutputStream outfile = null;
		String mimetype = servletContext.getMimeType(file);

		response.setContentType(mimetype);
		response.setHeader("Set-Cookie", "fileDownload=true; path=/");
		response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

		try {
			outfile = new BufferedOutputStream(response.getOutputStream(), 1024);
			wb.write(outfile);
			outfile.flush();
		} catch (IOException e) {
			System.out.println("excel exp " +e.toString());
			e.printStackTrace();
		} finally {
			if (outfile != null)
				try {
					outfile.close();
				} catch (IOException e) {
				}
		}
	} 
	
	

	/**
	 * <p>
	 * description about class
	 * </p>
	 * Excel file parsing.
	 * 
	 * @param xslInputStream the xsl input stream
	 * @param excelPropList the excel prop list
	 * @param clazz the clazz
	 * @return the list
	 * @throws Exception the exception
	 * @author jay 08.06.27
	 */
	public static List<Object> excelFileParsing(InputStream xslInputStream, List excelPropList, Class clazz) throws Exception {
		List<Object> dataList = new ArrayList<Object>();

		HSSFWorkbook wb = new HSSFWorkbook(xslInputStream);
		HSSFSheet sheet = wb.getSheetAt(0);
		int lastNum = sheet.getLastRowNum();
		int lastCellNum = sheet.getRow(0).getLastCellNum();

		for (int i = 1; i < lastNum; i++) {
			Object clazzObject = clazz.newInstance();
			for (int k = 0; lastCellNum > k; k++) {
				HSSFCell cell = sheet.getRow(i).getCell(k);
				switch (cell.getCellType()) {
				case HSSFCell.CELL_TYPE_NUMERIC:
					PropertyUtils.setNestedProperty(clazzObject,
							(String) excelPropList.get(k),
							String.valueOf(cell.getNumericCellValue()));
					break;
				case HSSFCell.CELL_TYPE_STRING:
					PropertyUtils.setNestedProperty(clazzObject,
							(String) excelPropList.get(k), cell
									.getRichStringCellValue().getString());
					break;
				default:
					PropertyUtils.setNestedProperty(clazzObject,
							(String) excelPropList.get(k),
							String.valueOf(cell.getNumericCellValue()));
					break;
				}
			}
			dataList.add(clazzObject);
		}
		return dataList;
	}

	/**
	 * <p>
	 * description about class
	 * </p>
	 * Excel file parsing.
	 * 
	 * @param xslInputStream excel file의 inputStream
	 * @return List<List<String>>0열의 타이틀을 포함한 엑셀데이터를 반환
	 * @throws Exception the exception
	 * @author jay 08.07.28 엑셀의 row단위로 List<cell value>를 만들고, 그것을 List에 담아 반환한다.
	 */
	@SuppressWarnings("unchecked")
	public static List<List> excelFileParsing(InputStream xslInputStream) throws Exception {
		List dataList = new ArrayList();

		HSSFWorkbook wb = new HSSFWorkbook(xslInputStream);
		HSSFSheet sheet = wb.getSheetAt(0);
		int lastNum = sheet.getLastRowNum();
		int lastCellNum = sheet.getRow(0).getLastCellNum();

		for (int i = 1; i <= lastNum; i++) {
			List<String> data = new ArrayList<String>();
			String value = "";
			for (int k = 0; lastCellNum > k; k++) {
				HSSFCell cell = null;
				try {
					cell = sheet.getRow(i).getCell(k);
				} catch (NullPointerException npe) {
					continue;
				}
				if (cell == null)
					continue;
				switch (cell.getCellType()) {
				case HSSFCell.CELL_TYPE_NUMERIC:
					value += String.valueOf(cell.getNumericCellValue()).trim();
					data.add(String.valueOf(cell.getNumericCellValue()));
					break;
				case HSSFCell.CELL_TYPE_STRING:
					value += cell.getRichStringCellValue().getString().trim();
					data.add(cell.getRichStringCellValue().getString());
					break;
				default:
					value += cell.getRichStringCellValue().getString().trim();
					data.add(cell.getRichStringCellValue().getString());
					break;
				}
			}
			if (value.length() <= 0) {
				continue;
			}

			dataList.add(data);
		}
		return dataList;
	}

	/**
	 * <p>
	 * description about class
	 * </p>
	 * Excel file parsing nvl list.
	 * 
	 * @param xslInputStream excel file의 inputStream
	 * @return List<List<String>>0열의 타이틀을 포함한 엑셀데이터를 반환 Cell안에 내용이 null일경우
	 * String "" 반환
	 * @throws Exception the exception
	 * @author 09.01.19 엑셀의 row단위로 List<cell value>를 만들고, 그것을 List에 담아 반환한다.
	 */
	@SuppressWarnings("unchecked")
	public static List<List> excelFileParsingNvlList(InputStream xslInputStream) throws Exception {
		List dataList = new ArrayList();

		HSSFWorkbook wb = new HSSFWorkbook(xslInputStream);
		HSSFSheet sheet = wb.getSheetAt(0);
		int lastNum = sheet.getLastRowNum();
		int lastCellNum = sheet.getRow(0).getLastCellNum();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		for (int i = 1; i <= lastNum; i++) {
			List<String> data = new ArrayList<String>();
			String value = "";
			for (int k = 0; lastCellNum > k; k++) {
				HSSFCell cell = null;
				if (sheet.getRow(i) == null
						|| sheet.getRow(i).getCell(k) == null) {
					value += "";
					data.add("");
					continue;
				}
				else {
					cell = sheet.getRow(i).getCell(k);
				}
				switch (cell.getCellType()) {
				case HSSFCell.CELL_TYPE_NUMERIC:
					value += String.valueOf(sdf.format(cell.getDateCellValue())).trim();
					data.add(String.valueOf(sdf.format(cell.getDateCellValue())));
					break;
				case HSSFCell.CELL_TYPE_STRING:
					value += cell.getRichStringCellValue().getString().trim();
					data.add(cell.getRichStringCellValue().getString());
					break;
				default:
					value += cell.getRichStringCellValue().getString().trim();
					data.add(cell.getRichStringCellValue().getString());
					break;
				}
			}
			if (value.length() <= 0) {
				continue;
			}

			dataList.add(data);
		}
		return dataList;
	}

	/**
	 * <p>
	 * description about class
	 * </p>
	 * Excel file parsing.
	 * 
	 * @param xslInputStream excel file의 inputStream
	 * @param headerMap the header map
	 * @return List<Map<String>>0열의 타이틀을 포함한 엑셀데이터를 반환
	 * @throws Exception the exception
	 * @author KongJongpil 09.02.06 엑셀의 row단위로 List<cell value>를 만들고, 그것을 List에
	 * 담아 반환한다.
	 */
	@SuppressWarnings("unchecked")
	public static List<List> excelFileParsing(InputStream xslInputStream, Map headerMap) throws Exception {
		List dataList = new ArrayList();

		HSSFWorkbook wb = new HSSFWorkbook(xslInputStream);
		HSSFSheet sheet = wb.getSheetAt(0);
		int lastNum = sheet.getLastRowNum();
		int lastCellNum = sheet.getRow(0).getLastCellNum();

		for (int i = 1; i <= lastNum; i++) {
			// List data = new ArrayList();
			Map data = new HashMap();
			String value = "";
			for (int k = 0; lastCellNum > k; k++) {
				HSSFCell cell = null;
				try {
					cell = sheet.getRow(i).getCell(k);
				} catch (NullPointerException npe) {
					continue;
				}
				if (cell == null)
					continue;
				Object val = null;
				switch (cell.getCellType()) {
				case HSSFCell.CELL_TYPE_NUMERIC:
					value += String.valueOf(cell.getNumericCellValue()).trim();
					val = String.valueOf((int) cell.getNumericCellValue());
					break;
				case HSSFCell.CELL_TYPE_STRING:
					value += cell.getRichStringCellValue().getString().trim();
					val = cell.getRichStringCellValue().getString();
					break;
				default:
					value += cell.getRichStringCellValue().getString().trim();
					val = cell.getRichStringCellValue().getString();
					break;
				}
				data.put(headerMap.get(k + ""), val);
			}
			if (value.length() <= 0) {
				continue;
			}

			dataList.add(data);
		}
		return dataList;
	}

	/**
	 * 필수 field값 체크.
	 * 
	 * @param excelData parsing한 엑셀데이터
	 * @param fieldNos 체크해야할 필드의 index 배열
	 */
	public static void validateRequiredField(List<List<String>> excelData, Integer[] fieldNos) {
		List<String> data = null;
		for (int i = 0; i < excelData.size(); i++) {
			data = excelData.get(i);
			for (int j = 0; j < fieldNos.length; j++) {
				if (StringUtils.isBlank(data.get(fieldNos[j]))) {

				}
			}
		}
	}

	/**
	 * <p>
	 * description about class
	 * </p>
	 * Excel file date parsing.
	 * 
	 * @param xslInputStream excel file의 inputStream
	 * @return List<List<String>>0열의 타이틀을 포함한 엑셀데이터를 반환
	 * @throws Exception the exception
	 * @author jay 09.07.30 엑셀의 row단위로 List<cell value>를 만들고, 그것을 List에 담아
	 * 반환한다.(날짜 데이터 처리)
	 */
	@SuppressWarnings({ "unchecked", "deprecation" })
	public static List<List> excelFileDateParsing(InputStream xslInputStream) throws Exception {
		List dataList = new ArrayList();

		HSSFWorkbook wb = new HSSFWorkbook(xslInputStream);
		HSSFSheet sheet = wb.getSheetAt(0);
		int lastNum = sheet.getLastRowNum();
		int lastCellNum = sheet.getRow(0).getLastCellNum();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");

		for (int i = 1; i <= lastNum; i++) {
			List<String> data = new ArrayList<String>();
			String value = "";
			for (int k = 0; lastCellNum > k; k++) {
				HSSFCell cell = null;
				try {
					cell = sheet.getRow(i).getCell((short) k);
				} catch (NullPointerException npe) {
					continue;
				}
				if (cell == null)
					continue;
				switch (cell.getCellType()) {
				case HSSFCell.CELL_TYPE_NUMERIC:
					value += String.valueOf(sdf.format(cell.getDateCellValue())).trim();
					data.add(String.valueOf(sdf.format(cell.getDateCellValue())));
					break;
				case HSSFCell.CELL_TYPE_STRING:
					value += cell.getRichStringCellValue().getString().trim();
					data.add(cell.getRichStringCellValue().getString());
					break;
				default:
					value += cell.getRichStringCellValue().getString().trim();
					data.add(cell.getRichStringCellValue().getString());
					break;
				}
			}
			if (value.length() <= 0) {
				continue;
			}

			dataList.add(data);
		}
		return dataList;
	}
	
	public static void setStyleTitleSummary(HSSFWorkbook wb, ArrayList<HSSFRow> rowList, int rowPosition, int columnPosition) {
		
		HSSFCell cell = null;
		
		//Font 스타일 생성
	    HSSFFont hf = wb.createFont();
	    hf.setFontHeightInPoints((short) 14);
	    hf.setColor((short) HSSFColor.BLACK.index);
	    hf.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
	    hf.setFontName("맑은 고딕");
	    
	    HSSFCellStyle cellStyle =  wb.createCellStyle();
	    //상하 정렬
	    cellStyle.setVerticalAlignment(HSSFCellStyle.ALIGN_LEFT);
		
		//백그라운드 색상 
	    cellStyle.setFillBackgroundColor((short) HSSFColor.WHITE.index );
		cellStyle.setFont(hf);
		
		rowList.get(rowPosition).setHeight((short)700);
		cell = rowList.get(rowPosition).getCell(columnPosition);
		cell.setCellStyle(cellStyle);
	}
	
	public static void setStyleNum(HSSFSheet sheet, HSSFWorkbook wb, ArrayList<HSSFRow> rowList, 
			int rowStart, int rowEnd, int columnStart, int columnEnd) {
		
		HSSFCell cell = null;
		
		//Font 스타일 생성
	    HSSFFont hf = wb.createFont();
	    hf.setFontHeightInPoints((short) 10);
	    hf.setFontName("맑은 고딕");
	    
	    // CELL_TYPE_NUMERIC 부분 공통 스타일
 		HSSFCellStyle cellStyleNum =  wb.createCellStyle();
 		cellStyleNum.setDataFormat(HSSFDataFormat.getBuiltinFormat("#,##0"));
 		cellStyleNum.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
 		cellStyleNum.setBorderBottom(HSSFCellStyle.BORDER_THIN);
 		cellStyleNum.setBottomBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleNum.setBorderLeft(HSSFCellStyle.BORDER_THIN);
 		cellStyleNum.setLeftBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleNum.setBorderRight(HSSFCellStyle.BORDER_THIN);
 		cellStyleNum.setRightBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleNum.setBorderTop(HSSFCellStyle.BORDER_THIN);
 		cellStyleNum.setTopBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleNum.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
 		cellStyleNum.setFont(hf);
		
 		for(int i = rowStart; i <= rowEnd; i++){
 			for(int j = columnStart; j <= columnEnd; j++){
 				cell = rowList.get(i).getCell(j);
 				cell.setCellStyle(cellStyleNum);
 			}
 		}
	}
	
	public static void setStyleBorder(HSSFSheet sheet, HSSFWorkbook wb, ArrayList<HSSFRow> rowList, 
			int rowStart, int rowEnd, int columnStart, int columnEnd) {
		
		HSSFCell cell = null;
		
		//Font 스타일 생성
	    HSSFFont hf = wb.createFont();
	    hf.setFontHeightInPoints((short) 10);
	    hf.setFontName("맑은 고딕");
	    
	    // CELL_TYPE_NUMERIC 부분 공통 스타일
 		HSSFCellStyle cellStyleBorder =  wb.createCellStyle();
 		cellStyleBorder.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
 		cellStyleBorder.setBorderBottom(HSSFCellStyle.BORDER_THIN);
 		cellStyleBorder.setBottomBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleBorder.setBorderLeft(HSSFCellStyle.BORDER_THIN);
 		cellStyleBorder.setLeftBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleBorder.setBorderRight(HSSFCellStyle.BORDER_THIN);
 		cellStyleBorder.setRightBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleBorder.setBorderTop(HSSFCellStyle.BORDER_THIN);
 		cellStyleBorder.setTopBorderColor(HSSFColor.GREY_40_PERCENT.index);
 		cellStyleBorder.setAlignment(HSSFCellStyle.ALIGN_CENTER);
 		cellStyleBorder.setFont(hf);
		
 		for(int i = rowStart; i <= rowEnd; i++){
 			for(int j = columnStart; j <= columnEnd; j++){
 				cell = rowList.get(i).getCell(j);
 				cell.setCellStyle(cellStyleBorder);
 			}
 		}
	}
	
	//해당 셀 가운데 정렬
	public static void setStyleAlignCenter(
			HSSFSheet sheet, HSSFWorkbook wb, ArrayList<HSSFRow> rowList, 
			int rowStart, int rowEnd, int columnStart, int columnEnd, int fontSize ) {
		
		HSSFCell cell = null;
	    
		HSSFFont hf = wb.createFont();
	    hf.setFontHeightInPoints((short)fontSize);
	    hf.setFontName("맑은 고딕");
		
 		HSSFCellStyle style =  wb.createCellStyle();

 		style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
 		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
 		style.setFont(hf);
 		for(int i = rowStart; i <= rowEnd; i++){
 			for(int j = columnStart; j <= columnEnd; j++){
 				cell = rowList.get(i).getCell(j);
 				cell.setCellStyle(style);
 			}
 		}
 		
 		sheet.addMergedRegion(new CellRangeAddress(rowStart, rowEnd, columnStart, columnEnd));
	}
	
	//해당 셀 가운데 정렬
	public static void setStyleAlignCenterBorder(
			HSSFSheet sheet, HSSFWorkbook wb, ArrayList<HSSFRow> rowList, 
			int rowStart, int rowEnd, int columnStart, int columnEnd, int fontSize, String type, short bg_color ) {
		
		HSSFCell cell = null;
	    
		HSSFFont hf = wb.createFont();
	    hf.setFontHeightInPoints((short)fontSize);
	    hf.setFontName("맑은 고딕");
		
 		HSSFCellStyle style =  wb.createCellStyle();

 		style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
 		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
 		style.setWrapText(true);
 		style.setFont(hf);
 		for(int i = rowStart; i <= rowEnd; i++){
 			for(int j = columnStart; j <= columnEnd; j++){
 				cell = rowList.get(i).getCell(j);
 				cell.setCellStyle(style);
 			}
 		}
 		
 		if(bg_color != -1){
 			style.setFillForegroundColor(bg_color); 
 	        style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
 		}
 		
 		if(type.equals("T")){
 			style.setBorderTop(HSSFCellStyle.BORDER_MEDIUM);
 			style.setTopBorderColor(HSSFColor.BLACK.index);
 			style.setBorderRight(HSSFCellStyle.BORDER_THIN);
 			style.setRightBorderColor(HSSFColor.BLACK.index);
 			style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
 			style.setBottomBorderColor(HSSFColor.BLACK.index);
 			style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
 			style.setLeftBorderColor(HSSFColor.BLACK.index);
 		}else if(type.equals("B")){
 			style.setBorderTop(HSSFCellStyle.BORDER_THIN);
 			style.setTopBorderColor(HSSFColor.BLACK.index);
 			style.setBorderRight(HSSFCellStyle.BORDER_THIN);
 			style.setRightBorderColor(HSSFColor.BLACK.index);
 			style.setBorderBottom(HSSFCellStyle.BORDER_MEDIUM);
 			style.setBottomBorderColor(HSSFColor.BLACK.index);
 			style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
 			style.setLeftBorderColor(HSSFColor.BLACK.index);
 		}else if(type.equals("C")){
 			style.setBorderTop(HSSFCellStyle.BORDER_THIN);
 			style.setTopBorderColor(HSSFColor.BLACK.index);
 			style.setBorderRight(HSSFCellStyle.BORDER_THIN);
 			style.setRightBorderColor(HSSFColor.BLACK.index);
 			style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
 			style.setBottomBorderColor(HSSFColor.BLACK.index);
 			style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
 			style.setLeftBorderColor(HSSFColor.BLACK.index);
 		}
 		
 		sheet.addMergedRegion(new CellRangeAddress(rowStart, rowEnd, columnStart, columnEnd));
	}
	
	//해당 영역 테두리 그리기
	public static void setStyleBorder_Edge(
			HSSFSheet sheet, HSSFWorkbook wb, ArrayList<HSSFRow> rowList, 
			int row, int col, 
			String type, 
			short extenal_border_type, short extenal_border_color, 
			short intenal_border_type, short intenal_border_color, 
			int font_size,
			short boldWeight) {
		
//		setStyleBorder_Edge(
//				HSSFSheet sheet, 
//				HSSFWorkbook wb, 
//				ArrayList<HSSFRow> rowList, 
//				int row, int col,               							--셀 위치
//				String type, 												--영역 타입(LeftTop, LeftBottom...)
//				short extenal_border_type, short extenal_border_color,  	--외부 테두리 유형 및 색
//				short intenal_border_type, short intenal_border_color, 		--내부 테두리 유형 및 색
//				int font_size,												--셀 폰트 크기
//				short boldWeight)											--셀 폰트 굵기
		
		HSSFCell cell = null;
	    
 		HSSFCellStyle cellStyle =  wb.createCellStyle();
 		cellStyle =  wb.createCellStyle();
 		HSSFFont hf = wb.createFont();
	    
 		//폰트 설정
 		hf.setBoldweight(boldWeight);
 		hf.setFontHeightInPoints((short)font_size);
 		hf.setFontName("맑은 고딕");
 		cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
 		cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
 		cellStyle.setWrapText(true); 
 		cellStyle.setFont(hf);

 		//테두리 설정	    
 		if(type.equals("LT")){
 			cellStyle.setBorderTop(extenal_border_type);
 	 		cellStyle.setTopBorderColor(extenal_border_color);
 	 		cellStyle.setBorderRight(intenal_border_type);
 	 		cellStyle.setRightBorderColor(intenal_border_color);
 	 		cellStyle.setBorderBottom(intenal_border_type);
 	 		cellStyle.setBottomBorderColor(intenal_border_color);
 	 		cellStyle.setBorderLeft(extenal_border_type);
 	 		cellStyle.setLeftBorderColor(extenal_border_color);
 		}else if(type.equals("RT")){
 			cellStyle.setBorderTop(extenal_border_type);
 	 		cellStyle.setTopBorderColor(extenal_border_color);
 	 		cellStyle.setBorderRight(extenal_border_type);
 	 		cellStyle.setRightBorderColor(extenal_border_color);
 	 		cellStyle.setBorderBottom(intenal_border_type);
 	 		cellStyle.setBottomBorderColor(intenal_border_color);
 	 		cellStyle.setBorderLeft(intenal_border_type);
 	 		cellStyle.setLeftBorderColor(intenal_border_color);
 		}else if(type.equals("LB")){
 			cellStyle.setBorderTop(intenal_border_type);
 	 		cellStyle.setTopBorderColor(intenal_border_color);
 	 		cellStyle.setBorderRight(intenal_border_type);
 	 		cellStyle.setRightBorderColor(intenal_border_color);
 	 		cellStyle.setBorderBottom(extenal_border_type);
 	 		cellStyle.setBottomBorderColor(extenal_border_color);
 	 		cellStyle.setBorderLeft(extenal_border_type);
 	 		cellStyle.setLeftBorderColor(extenal_border_color);
 		}else if(type.equals("RB")){
 			cellStyle.setBorderTop(intenal_border_type);
 	 		cellStyle.setTopBorderColor(intenal_border_color);
 	 		cellStyle.setBorderRight(extenal_border_type);
 	 		cellStyle.setRightBorderColor(extenal_border_color);
 	 		cellStyle.setBorderBottom(extenal_border_type);
 	 		cellStyle.setBottomBorderColor(extenal_border_color);
 	 		cellStyle.setBorderLeft(intenal_border_type);
 	 		cellStyle.setLeftBorderColor(intenal_border_color);
 		}else if(type.equals("L")){
 			cellStyle.setBorderTop(intenal_border_type);
 	 		cellStyle.setTopBorderColor(intenal_border_color);
 	 		cellStyle.setBorderRight(intenal_border_type);
 	 		cellStyle.setRightBorderColor(intenal_border_color);
 	 		cellStyle.setBorderBottom(intenal_border_type);
 	 		cellStyle.setBottomBorderColor(intenal_border_color);
 	 		cellStyle.setBorderLeft(extenal_border_type);
 	 		cellStyle.setLeftBorderColor(extenal_border_color);
 		}else if(type.equals("R")){
 			cellStyle.setBorderTop(intenal_border_type);
 	 		cellStyle.setTopBorderColor(intenal_border_color);
 	 		cellStyle.setBorderRight(extenal_border_type);
 	 		cellStyle.setRightBorderColor(extenal_border_color);
 	 		cellStyle.setBorderBottom(intenal_border_type);
 	 		cellStyle.setBottomBorderColor(intenal_border_color);
 	 		cellStyle.setBorderLeft(intenal_border_type);
 	 		cellStyle.setLeftBorderColor(intenal_border_color);
 		}else if(type.equals("T")){
 			cellStyle.setBorderTop(extenal_border_type);
 	 		cellStyle.setTopBorderColor(extenal_border_color);
 	 		cellStyle.setBorderRight(intenal_border_type);
 	 		cellStyle.setRightBorderColor(intenal_border_color);
 	 		cellStyle.setBorderBottom(intenal_border_type);
 	 		cellStyle.setBottomBorderColor(intenal_border_color);
 	 		cellStyle.setBorderLeft(intenal_border_type);
 	 		cellStyle.setLeftBorderColor(intenal_border_color);
 		}else if(type.equals("B")){
 			cellStyle.setBorderTop(intenal_border_type);
 	 		cellStyle.setTopBorderColor(intenal_border_color);
 	 		cellStyle.setBorderRight(intenal_border_type);
 	 		cellStyle.setRightBorderColor(intenal_border_color);
 	 		cellStyle.setBorderBottom(extenal_border_type);
 	 		cellStyle.setBottomBorderColor(extenal_border_color);
 	 		cellStyle.setBorderLeft(intenal_border_type);
 	 		cellStyle.setLeftBorderColor(intenal_border_color);
 		}else if(type.equals("C")){
 			cellStyle.setBorderTop(intenal_border_type);
 	 		cellStyle.setTopBorderColor(intenal_border_color);
 	 		cellStyle.setBorderRight(intenal_border_type);
 	 		cellStyle.setRightBorderColor(intenal_border_color);
 	 		cellStyle.setBorderBottom(intenal_border_type);
 	 		cellStyle.setBottomBorderColor(intenal_border_color);
 	 		cellStyle.setBorderLeft(intenal_border_type);
 	 		cellStyle.setLeftBorderColor(intenal_border_color);
 		}
 		
 		cell = rowList.get(row).getCell(col);
		cell.setCellStyle(cellStyle);
	}
	
	public static void SetCellToData(XSSFSheet  sheet,Row style,Row row,int nRow,int nCol,String strData) {
		try{
			if(strData == null) strData = "";
			if(row == null) row = sheet.createRow(nRow);
			Cell cell = row.getCell(nCol);
			if(cell == null){
				cell = row.createCell(nCol);
			}
			System.out.println("SetCellToData  = " + strData);
			if(style!= null) {
				cell.setCellStyle(style.getCell(nCol).getCellStyle());
			} else {
				System.out.println( "style is null = "+strData );
			}
			if(cell == null)
				System.out.println( "cell is null = "+strData );
				
			cell.setCellValue(strData);
		} catch( Exception e) {
			System.out.println( "SetCellToData Exception ="+e.toString() );
			
		}
	}
	public static void SetCellToInteger(XSSFSheet  sheet,Row style,Row row,int nRow,int nCol,String strData) {
		try {
			if(strData == null) return;
			if(strData != null && strData.contains(".") == true) {
				 SetCellToDouble( sheet,style,row, nRow, nCol,strData);
				return;
			}
				
			if(row == null) row = sheet.createRow(nRow);
			Cell cell = row.getCell(nCol);
			if(cell == null){
				cell = row.createCell(nCol);
			}
			System.out.println("SetCellToInteger  = " + strData);
			int num = Integer.parseInt(strData);
			if(style!= null) cell.setCellStyle(style.getCell(nCol).getCellStyle());
			cell.setCellFormula(null);
			cell.setCellValue(num);
		} catch( Exception e) {
			System.out.println( "SetCellToInteger Exception= "+e.toString() );
			
		}
	}
	public static void SetCellToDouble(XSSFSheet  sheet,Row style,Row row,int nRow,int nCol,String strData) {
		try {
			if(row == null) row = sheet.createRow(nRow);
			Cell cell = row.getCell(nCol);
			if(cell == null){
				cell = row.createCell(nCol);
			}
			System.out.println("SetCellToDouble  = " + strData);
			Double num = Double.parseDouble(strData);
			if(style!= null) cell.setCellStyle(style.getCell(nCol).getCellStyle());
			cell.setCellFormula(null);
			cell.setCellValue(num);
		} catch( Exception e) {
			System.out.println( "SetCellToDouble ="+e.toString() );
		}
	}
	public static Row getRow(int rowcnt, Sheet sheet) {
		Row destRow = sheet.getRow(rowcnt);
        if(destRow==null) destRow = sheet.createRow(rowcnt);
        
        return destRow;
	}
	
}
