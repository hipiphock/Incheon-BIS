package com.bis.vo.re;

public class TbBmmIncidScnroVO {
	
	private String incidtpcd;		//	varchar2(2 byte)	yes		1	
	private String regseq;			//	number(10,0)		yes		2	
	private String incidresptpcd;	//	varchar2(2 byte)	yes		3	
	private String detail;			//	varchar2(100 byte)	yes		4
	
	// for update
	private String original_incidtpcd;		//	varchar2(2 byte)	yes		1	
	private String original_regseq;			//	number(10,0)		yes		2	
	private String original_incidresptpcd;	//	varchar2(2 byte)	yes		3	
	private String original_detail;			//	varchar2(100 byte)	yes		4
	
	public String getIncidtpcd() {
		return incidtpcd;
	}
	public void setIncidtpcd(String incidtpcd) {
		this.incidtpcd = incidtpcd;
	}
	public String getRegseq() {
		return regseq;
	}
	public void setRegseq(String regseq) {
		this.regseq = regseq;
	}
	public String getOriginal_incidtpcd() {
		return original_incidtpcd;
	}
	public void setOriginal_incidtpcd(String original_incidtpcd) {
		this.original_incidtpcd = original_incidtpcd;
	}
	public String getOriginal_incidresptpcd() {
		return original_incidresptpcd;
	}
	public void setOriginal_incidresptpcd(String original_incidresptpcd) {
		this.original_incidresptpcd = original_incidresptpcd;
	}
	public String getOriginal_detail() {
		return original_detail;
	}
	public void setOriginal_detail(String original_detail) {
		this.original_detail = original_detail;
	}
	public String getIncidresptpcd() {
		return incidresptpcd;
	}
	public void setIncidresptpcd(String incidresptpcd) {
		this.incidresptpcd = incidresptpcd;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getOriginal_regseq() {
		return original_regseq;
	}
	public void setOriginal_regseq(String original_regseq) {
		this.original_regseq = original_regseq;
	}
	
	
}
