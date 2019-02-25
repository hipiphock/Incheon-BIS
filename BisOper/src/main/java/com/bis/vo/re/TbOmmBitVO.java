package com.bis.vo.re;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT master
 * Business Name  : BIT 상태
 * Class Name 	  : TbOmmBitVO.java
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
public class TbOmmBitVO {

	private String facilid;//	number(7,0)
	private String bitid;//	number(7,0)
	private String bstopid;//	number(9,0)
	private String bittpcd;//	varchar2(2 byte)
	private String bittpnm;
	private String modem_serialno;//	varchar2(12 byte)
	private String detail;//	varchar2(100 byte)
	private String bstopid_1;//	number(9,0)
	private String admin;//	varchar2(30 byte)
	private String address;//	varchar2(60 byte)
	private String etc;//	varchar2(100 byte)
	private String viewbitid;//	number(5,0)
	private String projecttpcd;//	varchar2(2 byte)
	private String bitserver_id;//	number(2,0)
	private String news_send_ind;//	char(1 byte)
	private String weather_send_ind;//	char(1 byte)
	private String subway_send_ind;//	char(1 byte)
	private String tts_cntl_ind;//	char(1 byte)
	private String dmb_cntl_ind;//	char(1 byte)
	private String shock_cntl_ind;//	char(1 byte)
	private String protocol_ver;//	number(2,0)
	private String comnum;//	varchar2(30 byte)
	
	private String cdnm;
	private String bstopnm;
	private String lat, lng;
	private String minLat, minLng;
	private String maxLat, maxLng;
	private String comm_statyn;
	private String colldt;
	private String fault;
	private String short_bstopid;
	private String temper;
	private String door_onoff;
	
	private String view_flag;
	private String searchWord;
	
	// selectBitManageList - BIT 정보관리 조회
	private String projecttype;
	private String bittype;
	private String faciltpcd;// ;// 	varchar2(2 byte)
	private String modelnm;// 	varchar2(20 byte)
	private String installloc;// 	varchar2(50 byte)
	private String commlinktpcd	;// varchar2(1 byte)
	private String ipaddr_1;// 	varchar2(15 byte)
	private String ipaddr_2;// 	varchar2(15 byte)
	private String portno	;// varchar2(10 byte)
	private String macaddr;// 	varchar2(20 byte)
	private String manufymd;// 	date
	private String storeymd;// 	date
	private String delivymd;// 	date
	private String purchdt;// 	date
	private String installdt;// 	date
	private String maintn_relatorgid;// 	varchar2(8 byte)
	private String descr;// 	varchar2(250 byte)
	private String use_startdt;// 	date
	private String use_enddt	;// date
	private String useyn;// 	varchar2(1 byte)
	private String upddt;// 	date
	private String upd_userid;// 	varchar2(20 byte)
	private String com_linenum;// 	varchar2(50 byte)
	private String history;// 	varchar2(200 byte)
	private String power_num	;// varchar2(50 byte)
	private String com_asso;// 	varchar2(1 byte)
	private String 	bittp;
	private String projecttp;
	private String server_name;
	private String bit_modem_serialno;
	private String facil_modem_serialno;
	private String server_id;
	
	private String statyn;
	
	//v0305 
	private String cpviewbitid; ;// 관리ID
	private String posx;
	private String poxy;
	
	//v0606
	private String regdt; //
	private String faccd; //
	private String shortid;
	private String usecode;
	private String fail_occurdt;
	private String failtpcd;
	private String fail_detail;
	private String reg_userid;
	private String mobileno;
	private String fail_treatdt;
	private String failtreatcd;
	private String ascd;
	private String treat_detail;
	private String treat_userid;
	private String widearea;
	private String dest_min;
	private String call_back;
	private String sms_msg;
	
	//v0611
	private String ascomp;
	private String ascompid;
	private String adminnm; 
	
	public String getDest_min() {
		return dest_min;
	}
	public void setDest_min(String dest_min) {
		this.dest_min = dest_min;
	}
	public String getCall_back() {
		return call_back;
	}
	public void setCall_back(String call_back) {
		this.call_back = call_back;
	}
	public String getSms_msg() {
		return sms_msg;
	}
	public void setSms_msg(String sms_msg) {
		this.sms_msg = sms_msg;
	}
	public String getAdminnm() {
		return adminnm;
	}
	public void setAdminnm(String adminnm) {
		this.adminnm = adminnm;
	}
	public String getAscomp() {
		return ascomp;
	}
	public void setAscomp(String ascomp) {
		this.ascomp = ascomp;
	}
	public String getAscompid() {
		return ascompid;
	}
	public void setAscompid(String ascompid) {
		this.ascompid = ascompid;
	}
	public String getRegdt() {
		return regdt;
	}
	public void setRegdt(String regdt) {
		this.regdt = regdt;
	}
	public String getFaccd() {
		return faccd;
	}
	public void setFaccd(String faccd) {
		this.faccd = faccd;
	}
	public String getShortid() {
		return shortid;
	}
	public void setShortid(String shortid) {
		this.shortid = shortid;
	}
	public String getUsecode() {
		return usecode;
	}
	public void setUsecode(String usecode) {
		this.usecode = usecode;
	}
	public String getFail_occurdt() {
		return fail_occurdt;
	}
	public void setFail_occurdt(String fail_occurdt) {
		this.fail_occurdt = fail_occurdt;
	}
	public String getFailtpcd() {
		return failtpcd;
	}
	public void setFailtpcd(String failtpcd) {
		this.failtpcd = failtpcd;
	}
	public String getFail_detail() {
		return fail_detail;
	}
	public void setFail_detail(String fail_detail) {
		this.fail_detail = fail_detail;
	}
	public String getReg_userid() {
		return reg_userid;
	}
	public void setReg_userid(String reg_userid) {
		this.reg_userid = reg_userid;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getFail_treatdt() {
		return fail_treatdt;
	}
	public void setFail_treatdt(String fail_treatdt) {
		this.fail_treatdt = fail_treatdt;
	}
	public String getFailtreatcd() {
		return failtreatcd;
	}
	public void setFailtreatcd(String failtreatcd) {
		this.failtreatcd = failtreatcd;
	}
	public String getAscd() {
		return ascd;
	}
	public void setAscd(String ascd) {
		this.ascd = ascd;
	}
	public String getTreat_detail() {
		return treat_detail;
	}
	public void setTreat_detail(String treat_detail) {
		this.treat_detail = treat_detail;
	}
	public String getTreat_userid() {
		return treat_userid;
	}
	public void setTreat_userid(String treat_userid) {
		this.treat_userid = treat_userid;
	}
	public String getWidearea() {
		return widearea;
	}
	public void setWidearea(String widearea) {
		this.widearea = widearea;
	}
	public String getCpviewbitid() {
		return cpviewbitid;
	}
	public void setCpviewbitid(String cpviewbitid) {
		this.cpviewbitid = cpviewbitid;
	}
	public String getPosx() {
		return posx;
	}
	public void setPosx(String posx) {
		this.posx = posx;
	}
	public String getPoxy() {
		return poxy;
	}
	public void setPoxy(String poxy) {
		this.poxy = poxy;
	}
	public String getFacilid() {
		return facilid;
	}
	public void setFacilid(String facilid) {
		this.facilid = facilid;
	}
	public String getBitid() {
		return bitid;
	}
	public void setBitid(String bitid) {
		this.bitid = bitid;
	}
	public String getBstopid() {
		return bstopid;
	}
	public void setBstopid(String bstopid) {
		this.bstopid = bstopid;
	}
	public String getBittpcd() {
		return bittpcd;
	}
	public void setBittpcd(String bittpcd) {
		this.bittpcd = bittpcd;
	}
	public String getBittpnm() {
		return bittpnm;
	}
	public void setBittpnm(String bittpnm) {
		this.bittpnm = bittpnm;
	}
	public String getModem_serialno() {
		return modem_serialno;
	}
	public void setModem_serialno(String modem_serialno) {
		this.modem_serialno = modem_serialno;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getBstopid_1() {
		return bstopid_1;
	}
	public void setBstopid_1(String bstopid_1) {
		this.bstopid_1 = bstopid_1;
	}
	public String getAdmin() {
		return admin;
	}
	public void setAdmin(String admin) {
		this.admin = admin;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEtc() {
		return etc;
	}
	public void setEtc(String etc) {
		this.etc = etc;
	}
	public String getViewbitid() {
		return viewbitid;
	}
	public void setViewbitid(String viewbitid) {
		this.viewbitid = viewbitid;
	}
	public String getProjecttpcd() {
		return projecttpcd;
	}
	public void setProjecttpcd(String projecttpcd) {
		this.projecttpcd = projecttpcd;
	}
	public String getBitserver_id() {
		return bitserver_id;
	}
	public void setBitserver_id(String bitserver_id) {
		this.bitserver_id = bitserver_id;
	}
	public String getNews_send_ind() {
		return news_send_ind;
	}
	public void setNews_send_ind(String news_send_ind) {
		this.news_send_ind = news_send_ind;
	}
	public String getWeather_send_ind() {
		return weather_send_ind;
	}
	public void setWeather_send_ind(String weather_send_ind) {
		this.weather_send_ind = weather_send_ind;
	}
	public String getSubway_send_ind() {
		return subway_send_ind;
	}
	public void setSubway_send_ind(String subway_send_ind) {
		this.subway_send_ind = subway_send_ind;
	}
	public String getTts_cntl_ind() {
		return tts_cntl_ind;
	}
	public void setTts_cntl_ind(String tts_cntl_ind) {
		this.tts_cntl_ind = tts_cntl_ind;
	}
	public String getDmb_cntl_ind() {
		return dmb_cntl_ind;
	}
	public void setDmb_cntl_ind(String dmb_cntl_ind) {
		this.dmb_cntl_ind = dmb_cntl_ind;
	}
	public String getShock_cntl_ind() {
		return shock_cntl_ind;
	}
	public void setShock_cntl_ind(String shock_cntl_ind) {
		this.shock_cntl_ind = shock_cntl_ind;
	}
	public String getProtocol_ver() {
		return protocol_ver;
	}
	public void setProtocol_ver(String protocol_ver) {
		this.protocol_ver = protocol_ver;
	}
	public String getComnum() {
		return comnum;
	}
	public void setComnum(String comnum) {
		this.comnum = comnum;
	}
	public String getCdnm() {
		return cdnm;
	}
	public void setCdnm(String cdnm) {
		this.cdnm = cdnm;
	}
	public String getBstopnm() {
		return bstopnm;
	}
	public void setBstopnm(String bstopnm) {
		this.bstopnm = bstopnm;
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
	public String getComm_statyn() {
		return comm_statyn;
	}
	public void setComm_statyn(String comm_statyn) {
		this.comm_statyn = comm_statyn;
	}
	public String getColldt() {
		return colldt;
	}
	public void setColldt(String colldt) {
		this.colldt = colldt;
	}
	public String getFault() {
		return fault;
	}
	public void setFault(String fault) {
		this.fault = fault;
	}
	public String getShort_bstopid() {
		return short_bstopid;
	}
	public void setShort_bstopid(String short_bstopid) {
		this.short_bstopid = short_bstopid;
	}
	public String getTemper() {
		return temper;
	}
	public void setTemper(String temper) {
		this.temper = temper;
	}
	public String getDoor_onoff() {
		return door_onoff;
	}
	public void setDoor_onoff(String door_onoff) {
		this.door_onoff = door_onoff;
	}
	public String getView_flag() {
		return view_flag;
	}
	public void setView_flag(String view_flag) {
		this.view_flag = view_flag;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getFaciltpcd() {
		return faciltpcd;
	}
	public void setFaciltpcd(String faciltpcd) {
		this.faciltpcd = faciltpcd;
	}
	public String getModelnm() {
		return modelnm;
	}
	public void setModelnm(String modelnm) {
		this.modelnm = modelnm;
	}
	public String getInstallloc() {
		return installloc;
	}
	public void setInstallloc(String installloc) {
		this.installloc = installloc;
	}
	public String getCommlinktpcd() {
		return commlinktpcd;
	}
	public void setCommlinktpcd(String commlinktpcd) {
		this.commlinktpcd = commlinktpcd;
	}
	public String getIpaddr_1() {
		return ipaddr_1;
	}
	public void setIpaddr_1(String ipaddr_1) {
		this.ipaddr_1 = ipaddr_1;
	}
	public String getIpaddr_2() {
		return ipaddr_2;
	}
	public void setIpaddr_2(String ipaddr_2) {
		this.ipaddr_2 = ipaddr_2;
	}
	public String getPortno() {
		return portno;
	}
	public void setPortno(String portno) {
		this.portno = portno;
	}
	public String getMacaddr() {
		return macaddr;
	}
	public void setMacaddr(String macaddr) {
		this.macaddr = macaddr;
	}
	public String getManufymd() {
		return manufymd;
	}
	public void setManufymd(String manufymd) {
		this.manufymd = manufymd;
	}
	public String getStoreymd() {
		return storeymd;
	}
	public void setStoreymd(String storeymd) {
		this.storeymd = storeymd;
	}
	public String getDelivymd() {
		return delivymd;
	}
	public void setDelivymd(String delivymd) {
		this.delivymd = delivymd;
	}
	public String getPurchdt() {
		return purchdt;
	}
	public void setPurchdt(String purchdt) {
		this.purchdt = purchdt;
	}
	public String getInstalldt() {
		return installdt;
	}
	public void setInstalldt(String installdt) {
		this.installdt = installdt;
	}
	public String getMaintn_relatorgid() {
		return maintn_relatorgid;
	}
	public void setMaintn_relatorgid(String maintn_relatorgid) {
		this.maintn_relatorgid = maintn_relatorgid;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getUse_startdt() {
		return use_startdt;
	}
	public void setUse_startdt(String use_startdt) {
		this.use_startdt = use_startdt;
	}
	public String getUse_enddt() {
		return use_enddt;
	}
	public void setUse_enddt(String use_enddt) {
		this.use_enddt = use_enddt;
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
	public String getCom_linenum() {
		return com_linenum;
	}
	public void setCom_linenum(String com_linenum) {
		this.com_linenum = com_linenum;
	}
	public String getHistory() {
		return history;
	}
	public void setHistory(String history) {
		this.history = history;
	}
	public String getPower_num() {
		return power_num;
	}
	public void setPower_num(String power_num) {
		this.power_num = power_num;
	}
	public String getCom_asso() {
		return com_asso;
	}
	public void setCom_asso(String com_asso) {
		this.com_asso = com_asso;
	}
	public String getProjecttype() {
		return projecttype;
	}
	public void setProjecttype(String projecttype) {
		this.projecttype = projecttype;
	}
	public String getBittype() {
		return bittype;
	}
	public void setBittype(String bittype) {
		this.bittype = bittype;
	}
	public String getBittp() {
		return bittp;
	}
	public void setBittp(String bittp) {
		this.bittp = bittp;
	}
	public String getProjecttp() {
		return projecttp;
	}
	public void setProjecttp(String projecttp) {
		this.projecttp = projecttp;
	}
	public String getServer_name() {
		return server_name;
	}
	public void setServer_name(String server_name) {
		this.server_name = server_name;
	}
	public String getBit_modem_serialno() {
		return bit_modem_serialno;
	}
	public void setBit_modem_serialno(String bit_modem_serialno) {
		this.bit_modem_serialno = bit_modem_serialno;
	}
	public String getFacil_modem_serialno() {
		return facil_modem_serialno;
	}
	public void setFacil_modem_serialno(String facil_modem_serialno) {
		this.facil_modem_serialno = facil_modem_serialno;
	}
		public String getServer_id() {
		return server_id;
	}
	public void setServer_id(String server_id) {
		this.server_id = server_id;
	}
	public String getStatyn() {
		return statyn;
	}
	public void setStatyn(String statyn) {
		this.statyn = statyn;
	}
}
