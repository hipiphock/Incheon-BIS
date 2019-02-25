package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 노선버전관리
 * Class Name 	  : TbAdhRouteversionpdVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.15	    주형빈                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbAdhRouteversionpdVO {
	private String num;				//NUMBER
	private String masterdate;		//DATE
	private String route;			//VARCHAR2(20 BYTE)
	private String modifycont;		//VARCHAR2(200 BYTE)
	private String csvver;			//NUMBER
	private String gisver;			//NUMBER
	private String memo;			//VARCHAR2(100 BYTE)
	private String updatefile;		//VARCHAR2(100 BYTE)
	
	private String search_startdt;
	private String search_enddt;
	
	
	public String getNum() {
		return num;
	}
	public void setNum(String num) {
		this.num = num;
	}
	public String getMasterdate() {
		return masterdate;
	}
	public void setMasterdate(String masterdate) {
		this.masterdate = masterdate;
	}
	public String getRoute() {
		return route;
	}
	public void setRoute(String route) {
		this.route = route;
	}
	public String getModifycont() {
		return modifycont;
	}
	public void setModifycont(String modifycont) {
		this.modifycont = modifycont;
	}
	public String getCsvver() {
		return csvver;
	}
	public void setCsvver(String csvver) {
		this.csvver = csvver;
	}
	public String getGisver() {
		return gisver;
	}
	public void setGisver(String gisver) {
		this.gisver = gisver;
	}
	public String getMemo() {
		return memo;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
	public String getUpdatefile() {
		return updatefile;
	}
	public void setUpdatefile(String updatefile) {
		this.updatefile = updatefile;
	}
	public String getSearch_startdt() {
		return search_startdt;
	}
	public void setSearch_startdt(String search_startdt) {
		this.search_startdt = search_startdt;
	}
	public String getSearch_enddt() {
		return search_enddt;
	}
	public void setSearch_enddt(String search_enddt) {
		this.search_enddt = search_enddt;
	}

	
}
