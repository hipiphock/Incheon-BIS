package com.bis.vo.re;
/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 운영 프로세스 정보
 * Class Name 	  : TbOmmProcessVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2018.01.22	   주형빈                      최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbOmmProcessVO {
	private String processid;		//VARCHAR2(10 BYTE)
	private String processnm;		//VARCHAR2(20 BYTE)
	private String ipaddr;			//VARCHAR2(15 BYTE)
	private String portno;			//VARCHAR2(10 BYTE)
	private String userid;			//VARCHAR2(20 BYTE)
	private String passwd;			//VARCHAR2(20 BYTE)
	private String descr;			//VARCHAR2(250 BYTE)
	
	private String sel_code;
	private String count;
	
	
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public String getSel_code() {
		return sel_code;
	}
	public void setSel_code(String sel_code) {
		this.sel_code = sel_code;
	}
	public String getProcessid() {
		return processid;
	}
	public void setProcessid(String processid) {
		this.processid = processid;
	}
	public String getProcessnm() {
		return processnm;
	}
	public void setProcessnm(String processnm) {
		this.processnm = processnm;
	}
	public String getIpaddr() {
		return ipaddr;
	}
	public void setIpaddr(String ipaddr) {
		this.ipaddr = ipaddr;
	}
	public String getPortno() {
		return portno;
	}
	public void setPortno(String portno) {
		this.portno = portno;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}



}
