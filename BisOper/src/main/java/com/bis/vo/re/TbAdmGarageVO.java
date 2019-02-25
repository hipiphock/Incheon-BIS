package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 차고지(운수사)
 * Class Name 	  : TbAdmGarageVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbAdmGarageVO {
	
	private String garageid;//	number(6,0)
	private String compid;//	number(6,0)
	private String garagenm;//	varchar2(20 byte)
	private String garagenm_1;//	varchar2(20 byte)
	private String addr;//	varchar2(60 byte)
	private String telno;//	varchar2(20 byte)
	private String mobileno;//	varchar2(20 byte)
	private String responernm;//	varchar2(40 byte)
	private String garagetpcd;//	varchar2(1 byte)
	private String owntpcd;//	varchar2(1 byte)
	private String legal_dim;//	number(8,2)
	private String own_dim;//	number(8,2)
	private String buildingtp;//	varchar2(20 byte)
	private String floors;//	varchar2(20 byte)
	private String man_route;//	varchar2(50 byte)
	private String coll_install;//	varchar2(20 byte)
	private String collequiptpcd;//	varchar2(1 byte)
	private String vpn_ipaddr;//	varchar2(15 byte)
	private String mdt_ipaddr;//	varchar2(15 byte)
	private String posx;//	number(12,6)
	private String posy;//	number(12,6)
	private String descr;//	varchar2(250 byte)
	private String app_startdt;//	date
	private String app_enddt;//	date
	private String useyn;//	varchar2(1 byte)
	private String upddt;//	date
	private String upd_userid;//	varchar2(20 byte)
	private String cstationyn;//	varchar2(1 byte)
	private String fstationyn;//	varchar2(1 byte)
	private String sstationyn;//	varchar2(1 byte)
	
	//버스 차고지 검색
	private String sdt; 
	private String edt;
	private String cdt;
	
	//v0603
	private String maxseq; //최대 garageapid
	
	
	public String getMaxseq() {
		return maxseq;
	}
	public void setMaxseq(String maxseq) {
		this.maxseq = maxseq;
	}
	public String getGarageid() {
		return garageid;
	}
	public void setGarageid(String garageid) {
		this.garageid = garageid;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getGaragenm() {
		return garagenm;
	}
	public void setGaragenm(String garagenm) {
		this.garagenm = garagenm;
	}
	public String getGaragenm_1() {
		return garagenm_1;
	}
	public void setGaragenm_1(String garagenm_1) {
		this.garagenm_1 = garagenm_1;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getTelno() {
		return telno;
	}
	public void setTelno(String telno) {
		this.telno = telno;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getResponernm() {
		return responernm;
	}
	public void setResponernm(String responernm) {
		this.responernm = responernm;
	}
	public String getGaragetpcd() {
		return garagetpcd;
	}
	public void setGaragetpcd(String garagetpcd) {
		this.garagetpcd = garagetpcd;
	}
	public String getOwntpcd() {
		return owntpcd;
	}
	public void setOwntpcd(String owntpcd) {
		this.owntpcd = owntpcd;
	}
	public String getLegal_dim() {
		return legal_dim;
	}
	public void setLegal_dim(String legal_dim) {
		this.legal_dim = legal_dim;
	}
	public String getOwn_dim() {
		return own_dim;
	}
	public void setOwn_dim(String own_dim) {
		this.own_dim = own_dim;
	}
	public String getBuildingtp() {
		return buildingtp;
	}
	public void setBuildingtp(String buildingtp) {
		this.buildingtp = buildingtp;
	}
	public String getFloors() {
		return floors;
	}
	public void setFloors(String floors) {
		this.floors = floors;
	}
	public String getMan_route() {
		return man_route;
	}
	public void setMan_route(String man_route) {
		this.man_route = man_route;
	}
	public String getColl_install() {
		return coll_install;
	}
	public void setColl_install(String coll_install) {
		this.coll_install = coll_install;
	}
	public String getCollequiptpcd() {
		return collequiptpcd;
	}
	public void setCollequiptpcd(String collequiptpcd) {
		this.collequiptpcd = collequiptpcd;
	}
	public String getVpn_ipaddr() {
		return vpn_ipaddr;
	}
	public void setVpn_ipaddr(String vpn_ipaddr) {
		this.vpn_ipaddr = vpn_ipaddr;
	}
	public String getMdt_ipaddr() {
		return mdt_ipaddr;
	}
	public void setMdt_ipaddr(String mdt_ipaddr) {
		this.mdt_ipaddr = mdt_ipaddr;
	}
	public String getPosx() {
		return posx;
	}
	public void setPosx(String posx) {
		this.posx = posx;
	}
	public String getPosy() {
		return posy;
	}
	public void setPosy(String posy) {
		this.posy = posy;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getApp_startdt() {
		return app_startdt;
	}
	public void setApp_startdt(String app_startdt) {
		this.app_startdt = app_startdt;
	}
	public String getApp_enddt() {
		return app_enddt;
	}
	public void setApp_enddt(String app_enddt) {
		this.app_enddt = app_enddt;
	}
	public String getUseyn() {
		return useyn;
	}
	public void setUseyn(String useyn) {
		this.useyn = useyn;
	}
	public String getUpddt() {
		return upddt;
	}
	public void setUpddt(String upddt) {
		this.upddt = upddt;
	}
	public String getUpd_userid() {
		return upd_userid;
	}
	public void setUpd_userid(String upd_userid) {
		this.upd_userid = upd_userid;
	}
	public String getCstationyn() {
		return cstationyn;
	}
	public void setCstationyn(String cstationyn) {
		this.cstationyn = cstationyn;
	}
	public String getFstationyn() {
		return fstationyn;
	}
	public void setFstationyn(String fstationyn) {
		this.fstationyn = fstationyn;
	}
	public String getSstationyn() {
		return sstationyn;
	}
	public void setSstationyn(String sstationyn) {
		this.sstationyn = sstationyn;
	}
	public String getSdt() {
		return sdt;
	}
	public void setSdt(String sdt) {
		this.sdt = sdt;
	}
	public String getEdt() {
		return edt;
	}
	public void setEdt(String edt) {
		this.edt = edt;
	}
	public String getCdt() {
		return cdt;
	}
	public void setCdt(String cdt) {
		this.cdt = cdt;
	}
	
}
