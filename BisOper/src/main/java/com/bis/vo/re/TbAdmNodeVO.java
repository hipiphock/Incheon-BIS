package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 노드
 * Class Name 	  : TbAdmNodeVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbAdmNodeVO {

	private String nodeid;//	number(10,0)
	private String nodenm;//	varchar2(40 byte)
	private String nodegbcd;//	varchar2(1 byte)
	private String areacd;//	number(3,0)
	private String nodetpcd;//	varchar2(3 byte)
	private String noturnyn;//	varchar2(1 byte)
	private String descr;//	varchar2(250 byte)
	private String posx;//	number(12,6)
	private String posy;//	number(12,6)
	private String aprchwaycnt;//	number(2,0)
	private String nodestatcd;//	varchar2(1 byte)
	private String app_startdt;//	date
	private String app_enddt;//	date
	private String useyn;//	varchar2(1 byte)
	private String detectrange;//	number(4,0)
	
	private String lat, lng;
	private String minLat, minLng;
	private String maxLat, maxLng;
	
	/* TB_ADM_ROUTEPNODE */
	private String routeid;//	number(9,0)
	private String pathseq;//	number(5,0)
	private String dircd;//	varchar2(1 byte)
	private String node_sectdist;//	number(8,2)
	private String bstopseq;//	number(5,0)
	private String bstop_sectdist;//	number(8,2)
	private String upddt;//	date
	private String upd_userid;//	varchar2(20 byte)
	
	private String shortid;//
	
	private String bstopid;
	private String short_bstopid;
	private String bstopnm;
	
	private String routetpcd;
	private String st_bstopnm;
	private String ed_bstopnm;
	private String routeno;
	
	private String linkid;
	private String nodegbnm;
	private String bityn;                              
	private String congestlevcd;                      
	private String movavg_trvspd; 
	
	private String busid;
	private String rundistinctcd;
	private String rundistinctcdnm;
	private String tmgap;
	private String evttpcd;
	private String evtsubtpcd;
	private String runvioltpcd;
	private String incidtpcd;
	private String c00;
	private String c01;
	private String c02;
	private String c03;
    private String c04;
    private String c05;
    private String c06;
    private String c07;
    private String c08;
    
    private String carregno;
    private String evtsubtpcdnm;
    private String runvioltpcdnm;
    
	private String dirnm;//방향
	
    private String sumtrv;
    private String fname;
    private String lname; 
    
    
    
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getSumtrv() {
		return sumtrv;
	}
	public void setSumtrv(String sumtrv) {
		this.sumtrv = sumtrv;
	}
    
	public String getDirnm() {
		return dirnm;
	}
	public void setDirnm(String dirnm) {
		this.dirnm = dirnm;
	}
	public String getNodeid() {
		return nodeid;
	}
	public void setNodeid(String nodeid) {
		this.nodeid = nodeid;
	}
	public String getNodenm() {
		return nodenm;
	}
	public void setNodenm(String nodenm) {
		this.nodenm = nodenm;
	}
	public String getNodegbcd() {
		return nodegbcd;
	}
	public void setNodegbcd(String nodegbcd) {
		this.nodegbcd = nodegbcd;
	}
	public String getAreacd() {
		return areacd;
	}
	public void setAreacd(String areacd) {
		this.areacd = areacd;
	}
	public String getNodetpcd() {
		return nodetpcd;
	}
	public void setNodetpcd(String nodetpcd) {
		this.nodetpcd = nodetpcd;
	}
	public String getNoturnyn() {
		return noturnyn;
	}
	public void setNoturnyn(String noturnyn) {
		this.noturnyn = noturnyn;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
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
	public String getAprchwaycnt() {
		return aprchwaycnt;
	}
	public void setAprchwaycnt(String aprchwaycnt) {
		this.aprchwaycnt = aprchwaycnt;
	}
	public String getNodestatcd() {
		return nodestatcd;
	}
	public void setNodestatcd(String nodestatcd) {
		this.nodestatcd = nodestatcd;
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
	public String getDetectrange() {
		return detectrange;
	}
	public void setDetectrange(String detectrange) {
		this.detectrange = detectrange;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	public String getMinLat() {
		return minLat;
	}
	public void setMinLat(String minLat) {
		this.minLat = minLat;
	}
	public String getMinLng() {
		return minLng;
	}
	public void setMinLng(String minLng) {
		this.minLng = minLng;
	}
	public String getMaxLat() {
		return maxLat;
	}
	public void setMaxLat(String maxLat) {
		this.maxLat = maxLat;
	}
	public String getMaxLng() {
		return maxLng;
	}
	public void setMaxLng(String maxLng) {
		this.maxLng = maxLng;
	}
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getPathseq() {
		return pathseq;
	}
	public void setPathseq(String pathseq) {
		this.pathseq = pathseq;
	}
	public String getDircd() {
		return dircd;
	}
	public void setDircd(String dircd) {
		this.dircd = dircd;
	}
	public String getNode_sectdist() {
		return node_sectdist;
	}
	public void setNode_sectdist(String node_sectdist) {
		this.node_sectdist = node_sectdist;
	}
	public String getBstopseq() {
		return bstopseq;
	}
	public void setBstopseq(String bstopseq) {
		this.bstopseq = bstopseq;
	}
	public String getBstop_sectdist() {
		return bstop_sectdist;
	}
	public void setBstop_sectdist(String bstop_sectdist) {
		this.bstop_sectdist = bstop_sectdist;
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
	public String getShortid() {
		return shortid;
	}
	public void setShortid(String shortid) {
		this.shortid = shortid;
	}
	public String getBstopid() {
		return bstopid;
	}
	public void setBstopid(String bstopid) {
		this.bstopid = bstopid;
	}
	public String getShort_bstopid() {
		return short_bstopid;
	}
	public void setShort_bstopid(String short_bstopid) {
		this.short_bstopid = short_bstopid;
	}
	public String getBstopnm() {
		return bstopnm;
	}
	public void setBstopnm(String bstopnm) {
		this.bstopnm = bstopnm;
	}
	public String getRoutetpcd() {
		return routetpcd;
	}
	public void setRoutetpcd(String routetpcd) {
		this.routetpcd = routetpcd;
	}
	public String getSt_bstopnm() {
		return st_bstopnm;
	}
	public void setSt_bstopnm(String st_bstopnm) {
		this.st_bstopnm = st_bstopnm;
	}
	public String getEd_bstopnm() {
		return ed_bstopnm;
	}
	public void setEd_bstopnm(String ed_bstopnm) {
		this.ed_bstopnm = ed_bstopnm;
	}
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	public String getLinkid() {
		return linkid;
	}
	public void setLinkid(String linkid) {
		this.linkid = linkid;
	}
	public String getNodegbnm() {
		return nodegbnm;
	}
	public void setNodegbnm(String nodegbnm) {
		this.nodegbnm = nodegbnm;
	}
	public String getBityn() {
		return bityn;
	}
	public void setBityn(String bityn) {
		this.bityn = bityn;
	}
	public String getCongestlevcd() {
		return congestlevcd;
	}
	public void setCongestlevcd(String congestlevcd) {
		this.congestlevcd = congestlevcd;
	}
	public String getMovavg_trvspd() {
		return movavg_trvspd;
	}
	public void setMovavg_trvspd(String movavg_trvspd) {
		this.movavg_trvspd = movavg_trvspd;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
	}
	public String getRundistinctcd() {
		return rundistinctcd;
	}
	public void setRundistinctcd(String rundistinctcd) {
		this.rundistinctcd = rundistinctcd;
	}
	public String getRundistinctcdnm() {
		return rundistinctcdnm;
	}
	public void setRundistinctcdnm(String rundistinctcdnm) {
		this.rundistinctcdnm = rundistinctcdnm;
	}
	public String getTmgap() {
		return tmgap;
	}
	public void setTmgap(String tmgap) {
		this.tmgap = tmgap;
	}
	public String getEvttpcd() {
		return evttpcd;
	}
	public void setEvttpcd(String evttpcd) {
		this.evttpcd = evttpcd;
	}
	public String getEvtsubtpcd() {
		return evtsubtpcd;
	}
	public void setEvtsubtpcd(String evtsubtpcd) {
		this.evtsubtpcd = evtsubtpcd;
	}
	public String getRunvioltpcd() {
		return runvioltpcd;
	}
	public void setRunvioltpcd(String runvioltpcd) {
		this.runvioltpcd = runvioltpcd;
	}
	public String getIncidtpcd() {
		return incidtpcd;
	}
	public void setIncidtpcd(String incidtpcd) {
		this.incidtpcd = incidtpcd;
	}
	public String getC00() {
		return c00;
	}
	public void setC00(String c00) {
		this.c00 = c00;
	}
	public String getC01() {
		return c01;
	}
	public void setC01(String c01) {
		this.c01 = c01;
	}
	public String getC02() {
		return c02;
	}
	public void setC02(String c02) {
		this.c02 = c02;
	}
	public String getC03() {
		return c03;
	}
	public void setC03(String c03) {
		this.c03 = c03;
	}
	public String getC04() {
		return c04;
	}
	public void setC04(String c04) {
		this.c04 = c04;
	}
	public String getC05() {
		return c05;
	}
	public void setC05(String c05) {
		this.c05 = c05;
	}
	public String getC06() {
		return c06;
	}
	public void setC06(String c06) {
		this.c06 = c06;
	}
	public String getC07() {
		return c07;
	}
	public void setC07(String c07) {
		this.c07 = c07;
	}
	public String getC08() {
		return c08;
	}
	public void setC08(String c08) {
		this.c08 = c08;
	}
	public String getCarregno() {
		return carregno;
	}
	public void setCarregno(String carregno) {
		this.carregno = carregno;
	}
	public String getEvtsubtpcdnm() {
		return evtsubtpcdnm;
	}
	public void setEvtsubtpcdnm(String evtsubtpcdnm) {
		this.evtsubtpcdnm = evtsubtpcdnm;
	}
	public String getRunvioltpcdnm() {
		return runvioltpcdnm;
	}
	public void setRunvioltpcdnm(String runvioltpcdnm) {
		this.runvioltpcdnm = runvioltpcdnm;
	}
}
