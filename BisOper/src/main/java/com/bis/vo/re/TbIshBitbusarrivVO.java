package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 제공정보 이력
 * Class Name 	  : TbIshBitbusarrivVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.14					김주암					최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbIshBitbusarrivVO {
	
	private String procdt;// 	date
	private String bitid;// 	number(7,0)
	private String routeid;// 	number(9,0)
	private String dircd;// 	varchar2(1 byte)
	private String busid;// 	number(9,0)
	private String rest_nodecnt;// 	number(5,0)
	private String rest_bstopcnt;// t	number(10,0)
	private String arrplantm;// 	number(6,0)
	private String lastbusyn;// 	varchar2(1 byte)
	private String evtsubtpcd;// 	varchar2(1 byte)
	private String incidtpcd;// 	varchar2(2 byte)
	private String msgseq;// 	number(10,0)
	private String snddt;// 	date
	private String sndrsltcd	;// varchar2(1 byte)
	private String commerrcd;// 	varchar2(2 byte)
	private String reply_colldt;// 	date
	
	// selectBitOfferInfoHisList / BIT 제공정보 이력 조회
	private String searchWord;
	private String start_date_time;
	private String end_date_time;	
	private String incoming_time;
	private String routeno;
	private String carregno;
	private String bstopid;
	private String bstopnm;
	private String dirnm;
	private String lastbusnm;
	private String evtsubnm;
	private String incidnm;
	private String sndrslnm;
	private String commerrnm;
	private String short_bstopid;
	
	public String getProcdt() {
		return procdt;
	}
	public void setProcdt(String procdt) {
		this.procdt = procdt;
	}
	public String getBitid() {
		return bitid;
	}
	public void setBitid(String bitid) {
		this.bitid = bitid;
	}
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getDircd() {
		return dircd;
	}
	public void setDircd(String dircd) {
		this.dircd = dircd;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
	}
	public String getRest_nodecnt() {
		return rest_nodecnt;
	}
	public void setRest_nodecnt(String rest_nodecnt) {
		this.rest_nodecnt = rest_nodecnt;
	}
	public String getArrplantm() {
		return arrplantm;
	}
	public void setArrplantm(String arrplantm) {
		this.arrplantm = arrplantm;
	}
	public String getLastbusyn() {
		return lastbusyn;
	}
	public void setLastbusyn(String lastbusyn) {
		this.lastbusyn = lastbusyn;
	}
	public String getEvtsubtpcd() {
		return evtsubtpcd;
	}
	public void setEvtsubtpcd(String evtsubtpcd) {
		this.evtsubtpcd = evtsubtpcd;
	}
	public String getIncidtpcd() {
		return incidtpcd;
	}
	public void setIncidtpcd(String incidtpcd) {
		this.incidtpcd = incidtpcd;
	}
	public String getMsgseq() {
		return msgseq;
	}
	public void setMsgseq(String msgseq) {
		this.msgseq = msgseq;
	}
	public String getSnddt() {
		return snddt;
	}
	public void setSnddt(String snddt) {
		this.snddt = snddt;
	}
	public String getSndrsltcd() {
		return sndrsltcd;
	}
	public void setSndrsltcd(String sndrsltcd) {
		this.sndrsltcd = sndrsltcd;
	}
	public String getCommerrcd() {
		return commerrcd;
	}
	public void setCommerrcd(String commerrcd) {
		this.commerrcd = commerrcd;
	}
	public String getReply_colldt() {
		return reply_colldt;
	}
	public void setReply_colldt(String reply_colldt) {
		this.reply_colldt = reply_colldt;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getStart_date_time() {
		return start_date_time;
	}
	public void setStart_date_time(String start_date_time) {
		this.start_date_time = start_date_time;
	}
	public String getEnd_date_time() {
		return end_date_time;
	}
	public void setEnd_date_time(String end_date_time) {
		this.end_date_time = end_date_time;
	}
	public String getIncoming_time() {
		return incoming_time;
	}
	public void setIncoming_time(String incoming_time) {
		this.incoming_time = incoming_time;
	}
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	public String getCarregno() {
		return carregno;
	}
	public void setCarregno(String carregno) {
		this.carregno = carregno;
	}
	public String getBstopid() {
		return bstopid;
	}
	public void setBstopid(String bstopid) {
		this.bstopid = bstopid;
	}
	public String getBstopnm() {
		return bstopnm;
	}
	public void setBstopnm(String bstopnm) {
		this.bstopnm = bstopnm;
	}
	public String getDirnm() {
		return dirnm;
	}
	public void setDirnm(String dirnm) {
		this.dirnm = dirnm;
	}
	public String getLastbusnm() {
		return lastbusnm;
	}
	public void setLastbusnm(String lastbusnm) {
		this.lastbusnm = lastbusnm;
	}
	public String getEvtsubnm() {
		return evtsubnm;
	}
	public void setEvtsubnm(String evtsubnm) {
		this.evtsubnm = evtsubnm;
	}
	public String getIncidnm() {
		return incidnm;
	}
	public void setIncidnm(String incidnm) {
		this.incidnm = incidnm;
	}
	public String getSndrslnm() {
		return sndrslnm;
	}
	public void setSndrslnm(String sndrslnm) {
		this.sndrslnm = sndrslnm;
	}
	public String getCommerrnm() {
		return commerrnm;
	}
	public void setCommerrnm(String commerrnm) {
		this.commerrnm = commerrnm;
	}
	public String getRest_bstopcnt() {
		return rest_bstopcnt;
	}
	public void setRest_bstopcnt(String rest_bstopcnt) {
		this.rest_bstopcnt = rest_bstopcnt;
	}
	public String getShort_bstopid() {
		return short_bstopid;
	}
	public void setShort_bstopid(String short_bstopid) {
		this.short_bstopid = short_bstopid;
	}
}
