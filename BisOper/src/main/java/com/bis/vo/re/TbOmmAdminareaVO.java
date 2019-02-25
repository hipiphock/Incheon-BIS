package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 행정구역 정보
 * Class Name 	  : TbOmmAdminareaVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2018.01.21	   주형빈                      최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbOmmAdminareaVO {
	private String areacd;		//NUMBER(3,0)
	private String admincd;	//NUMBER(5,0)
	private String areanm;		//VARCHAR2(20 BYTE)
	private String gareanm;	//VARCHAR2(20 BYTE)
	private String svcareacd;	//NUMBER(2,0)
	private String zipcode;	//VARCHAR2(6 BYTE)
	private String x_coord;	//FLOAT
	private String y_coord;	//FLOAT
	
	private String sel_code; // 검색조건 코드

	public String getAreacd() {
		return areacd;
	}

	public void setAreacd(String areacd) {
		this.areacd = areacd;
	}

	public String getAdmincd() {
		return admincd;
	}

	public void setAdmincd(String admincd) {
		this.admincd = admincd;
	}

	public String getAreanm() {
		return areanm;
	}

	public void setAreanm(String areanm) {
		this.areanm = areanm;
	}

	public String getGareanm() {
		return gareanm;
	}

	public void setGareanm(String gareanm) {
		this.gareanm = gareanm;
	}

	public String getSvcareacd() {
		return svcareacd;
	}

	public void setSvcareacd(String svcareacd) {
		this.svcareacd = svcareacd;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getX_coord() {
		return x_coord;
	}

	public void setX_coord(String x_coord) {
		this.x_coord = x_coord;
	}

	public String getY_coord() {
		return y_coord;
	}

	public void setY_coord(String y_coord) {
		this.y_coord = y_coord;
	}

	public String getSel_code() {
		return sel_code;
	}

	public void setSel_code(String sel_code) {
		this.sel_code = sel_code;
	}
	
	
}
