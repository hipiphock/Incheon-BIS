package com.bis.vo.re;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 정류장
 * Class Name 	  : TbAdmBusstopVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07	    황중모                       최초생성
 * 2019.01.22	박주언		added new variable
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbAdmBusstopVO {

	private String bstopid;//	number(9,0)
	private String areacd;//	number(3,0)
	private String short_bstopid;//	number(5,0)
	private String bstopnm;//	varchar2(40 byte)
	private String eng_bstopnm;//	varchar2(40 byte)
	private String short_bstopnm;//	varchar2(40 byte)
	private String bstoptpcd;//	varchar2(1 byte)
	private String centerlaneyn;//	varchar2(1 byte)
	private String adminnm;//	varchar2(30 byte)
	private String descr;//	varchar2(250 byte)
	private String bstopfacilcd;//	varchar2(1 byte)
	private String baytpcd;//	varchar2(1 byte)
	private String baylen;//	number(6,2)
	private String lanecnt;//	number(2,0)
	private String linkid;//	number(10,0)
	private String posx;//	number(12,6)
	private String posy;//	number(12,6)
	private String loctpcd;//	varchar2(1 byte)
	private String dongnm;//	varchar2(20 byte)
	private String app_startdt;//	date
	private String app_enddt;//	date
	private String useyn;//	varchar2(1 byte)
	private String upddt;//	date
	private String upd_userid;//	varchar2(20 byte)
	private String link_posx;//	number(12,6)
	private String link_posy;//	number(12,6)
	private String detectrange;//	number(4,0)
	private String manno;//	varchar2(10 byte)
	
	private String lat, lng;
	private String minLat, minLng;
	private String maxLat, maxLng;
	private String linknm;
	private String searchWord;
	
	private String centerlanenm;
	
	private String routeid;
	private String routeno;
	private String routetpcd;
	private String routedesc;
	
	private String carregno;
	private String cur_bstopnm;
	private String rest_bstopcnt;
	private String arrplantm;
	private String est_nodecnt;
	
	private String compnm;
	private String origin_bstopid;
	private String dest_bstopid;
	private String bitid;
	
	private String dircd;
	
	
	//v305
	private String  llinkid;
	private String  rundistinctcd;
	private String  congestlev_cd;
	private String  fbus_busid;
	private String  nbus_busid;
	private String  ffbus_busid;
	private String  nnbus_busid;
	private String  bstopid_1;
	private String  trvspd_1;
	private String  bstopid_2;
	private String  trvspd_2;
	private String  bstopid_3;
	private String  trvspd_3;
	private String  dest_arrplantm;
	private String  dest_restdist;
	private String  gps_statyn;
	private String  wlan_statyn;
	private String  sub_term_statyn;
	private String  mem_statyn;
	private String  bstart_statyn;
	private String  carno;
	private String  incidtpcd;
	private String  yncheck;
	private String  rcvseq;
	private String  play_runord;
	private String  sndseq;
	private String  message_content;
	private String  msgtpcd;
	private String  reg_userid;
	private String  usertpcd;
	
	//v306
	private String installloc;
	private String bittype;
	private String bstoptype;
	private String bittpcd;
	private String widearea;
	
	private String roadnm;
	private String time;
	
	private String cd;
	private String cdnm;
	
	private String eventdt;		
	private String dirtype; 	
	private String caregno;		
	private String rest_nodecnt;
	private String lastbusyn;	
	
	
	//v706
	private String busid;
	private String dtavg;
	private String start_time;
	private String end_time;
	private String event_type;
	private String search_type;
	
	private String dt01,dt02,dt03,dt04,dt05,dt06,dt07,dt08,dt09,dt10,dt11,dt12,dt13,dt14,dt15;
	private String dt16,dt17,dt18,dt19,dt20,dt21,dt22,dt23,dt24,dt25,dt26,dt27,dt28,dt29,dt30,dt31;
	
	
	//v707
	
	private String bstopseq;
	
	//v708
	private String compid;
	
	private String evt_occurdt;		
	private String center_colldt;
	private String evttype; 	 
	private String evtsubtype;		
	private String regno;			
	private String mdtid; 	   		
	private String nodeid; 	    	
	private String nodenm;			
	private String llinknm;			
	private String pathseq; 		
	private String runstattype;		
	private String lastbus;			
	private String emptybus; 		
	private String chgbus;			
	private String openstattype;	
	private String emgcy; 	   		
	private String accid;			
	private String trbl;			
	private String runvioltype; 	
	private String runspd;			
	private String rundist; 	 
	private String runtm;			
	private String real_runord;		
	private String bstop_stoptm; 
	
	//v709
	private String avgp1;
	private String avgp2;
	private String percnt1;
	private String percnt2;
	private String run_startdt;
	private String run_enddt;
	private String start_pathseq;
	private String end_pathseq;
	private String detect_nodecnt;
	private String tmgap;
	private String bstop_arriv_cnt;
	private String bstop_dep_cnt;
	private String cross_pass_cnt;
	private String total_nodecnt;
	private String total_bstopcnt;
	private String outroutecnt;
	
	
	//v611
	private String  arrivtm;
	private String  starttm;
	private String  procdt;
	private String  ffcarreno;
	private String  fcarreno;
	private String  ncarreno;
	private String  nncarreno;
	private String  ffbus_locgap;
	private String  ffbus_tmgap;
	private String  fbus_locgap;
	private String  fbus_tmgap;
	private String  nbus_locgap;
	private String  nbus_tmgap;
	private String  nnbus_locgap;
	private String  nnbus_tmgap;
	private String  bstopid_1nm;
	private String  arrplantm_1;
	private String  bstopid_2nm;
	private String  arrplantm_2;
	private String  bstopid_3nm;
	private String  arrplantm_3;
	
	//v612
	private String  msgseq;
	private String  dtime;
	private String  evttpcd;
	private String  evtsubtpcd;
	private String  heading;
	private String  modem_serialno;
	private String  emptybusyn;
	private String  chgbusyn;
	private String  evttp;
	private String  openstatcd;
	private String  mdtstatcd;
	private String  runstatcd;
	private String  runstatcd_1;
	
	//v614
	private String  lic_buscnt;
	private String  runcnt;
	private String  routetpcdnm;
	private String  runsts;
	private String  lowplateyn;
	private String  busstatcd;
	
	//v615
	private String  busstatnm;
	private String  driverid;
	private String  bus_drivernm;
	private String  plan_runord;
	private String  overspdcnt;
	private String  openruncnt;
	private String  accelcnt;
	private String  decelcnt;
	private String  stopskipcnt;
	private String  voldelaycnt;
	private String  trblcnt;
	private String  accidcnt;
	private String  emgcycnt;
	
	//v616
	private String  runord;
	private String  start_stopnm;
	private String  end_stopnm;
	private String  stop_time;
	
	
	//v0510
	private String nodegbcd;
	
	//0520
	private String gu;
	private String projecttpcd;
	private String address;
	
	//v0109
	private String snm; //정류소명
	private String avg_trvspd; //평균통행속도
	private String avg_stoptm; //평균통행시간
	private String avg_trvltm; //서비스시간(초)
	
	
	//TB_ADM_SBWYSTA
	private String staid;		//number(9,0)
	private String stanm;		//varchar2(20 byte)
	private String eng_stanm;	//varchar2(20 byte)
	private String transyn;		//varchar2(1 byte)
	private String linenm;		//varchar2(20 byte)
	private String linenm2;		//varchar2(20 byte)
	private String linenm3;		//varchar2(20 byte)
	private String lines; 		//line1+2+3 
	
	//TB_ADM_SBWYTOBSTOP
	private String stagateid;	//number(2,0)
	private String sectdist;	//number(8,2)
	
	// selectStopDetailList
	private String min_rest_bstopcnt;
	private String max_rest_bstopcnt;
	private String from_date;
	private String to_date;
	private String roadno;

	//TB_ADH_BUSSTOPPERM
	private String reqdt;			//date
	private String updtpcd;			//varchar2(1 byte)
	private String req_userid;		//varchar2(20 byte)
	private String permstatcd;		//varchar2(1 byte)
	private String treatdt;			//date
	private String treat_userid; 	//varchar2(20 byte)
	private String detail;			//varchar2(100 byte)
	
	//v0512
	private String updtype;
	private String req_user;
	private String permstat;
	private String treat_user;
	private String search_startdt;
	private String search_enddt;
	
	
	
	public String getMin_rest_bstopcnt() {
		return min_rest_bstopcnt;
	}
	public void setMin_rest_bstopcnt(String min_rest_bstopcnt) {
		this.min_rest_bstopcnt = min_rest_bstopcnt;
	}
	public String getMax_rest_bstopcnt() {
		return max_rest_bstopcnt;
	}
	public void setMax_rest_bstopcnt(String max_rest_bstopcnt) {
		this.max_rest_bstopcnt = max_rest_bstopcnt;
	}
	public String getFrom_date() {
		return from_date;
	}
	public void setFrom_date(String from_date) {
		this.from_date = from_date;
	}
	public String getTo_date() {
		return to_date;
	}
	public void setTo_date(String to_date) {
		this.to_date = to_date;
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
	public String getLines() {
		return lines;
	}
	public void setLines(String lines) {
		this.lines = lines;
	}
	public String getStaid() {
		return staid;
	}
	public void setStaid(String staid) {
		this.staid = staid;
	}
	public String getStanm() {
		return stanm;
	}
	public void setStanm(String stanm) {
		this.stanm = stanm;
	}
	public String getEng_stanm() {
		return eng_stanm;
	}
	public void setEng_stanm(String eng_stanm) {
		this.eng_stanm = eng_stanm;
	}
	public String getTransyn() {
		return transyn;
	}
	public void setTransyn(String transyn) {
		this.transyn = transyn;
	}
	public String getLinenm() {
		return linenm;
	}
	public void setLinenm(String linenm) {
		this.linenm = linenm;
	}
	public String getLinenm2() {
		return linenm2;
	}
	public void setLinenm2(String linenm2) {
		this.linenm2 = linenm2;
	}
	public String getLinenm3() {
		return linenm3;
	}
	public void setLinenm3(String linenm3) {
		this.linenm3 = linenm3;
	}
	public String getStagateid() {
		return stagateid;
	}
	public void setStagateid(String stagateid) {
		this.stagateid = stagateid;
	}
	public String getSectdist() {
		return sectdist;
	}
	public void setSectdist(String sectdist) {
		this.sectdist = sectdist;
	}
	public String getSnm() {
		return snm;
	}
	public void setSnm(String snm) {
		this.snm = snm;
	}
	public String getAvg_trvspd() {
		return avg_trvspd;
	}
	public void setAvg_trvspd(String avg_trvspd) {
		this.avg_trvspd = avg_trvspd;
	}
	public String getAvg_stoptm() {
		return avg_stoptm;
	}
	public void setAvg_stoptm(String avg_stoptm) {
		this.avg_stoptm = avg_stoptm;
	}
	public String getAvg_trvltm() {
		return avg_trvltm;
	}
	public void setAvg_trvltm(String avg_trvltm) {
		this.avg_trvltm = avg_trvltm;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getNodegbcd() {
		return nodegbcd;
	}
	public void setNodegbcd(String nodegbcd) {
		this.nodegbcd = nodegbcd;
	}
	public String getBstopid() {
		return bstopid;
	}
	public void setBstopid(String bstopid) {
		this.bstopid = bstopid;
	}
	public String getAreacd() {
		return areacd;
	}
	public void setAreacd(String areacd) {
		this.areacd = areacd;
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
	public String getEng_bstopnm() {
		return eng_bstopnm;
	}
	public void setEng_bstopnm(String eng_bstopnm) {
		this.eng_bstopnm = eng_bstopnm;
	}
	public String getShort_bstopnm() {
		return short_bstopnm;
	}
	public void setShort_bstopnm(String short_bstopnm) {
		this.short_bstopnm = short_bstopnm;
	}
	public String getBstoptpcd() {
		return bstoptpcd;
	}
	public void setBstoptpcd(String bstoptpcd) {
		this.bstoptpcd = bstoptpcd;
	}
	public String getCenterlaneyn() {
		return centerlaneyn;
	}
	public void setCenterlaneyn(String centerlaneyn) {
		this.centerlaneyn = centerlaneyn;
	}
	public String getAdminnm() {
		return adminnm;
	}
	public void setAdminnm(String adminnm) {
		this.adminnm = adminnm;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getBstopfacilcd() {
		return bstopfacilcd;
	}
	public void setBstopfacilcd(String bstopfacilcd) {
		this.bstopfacilcd = bstopfacilcd;
	}
	public String getBaytpcd() {
		return baytpcd;
	}
	public void setBaytpcd(String baytpcd) {
		this.baytpcd = baytpcd;
	}
	public String getBaylen() {
		return baylen;
	}
	public void setBaylen(String baylen) {
		this.baylen = baylen;
	}
	public String getLanecnt() {
		return lanecnt;
	}
	public void setLanecnt(String lanecnt) {
		this.lanecnt = lanecnt;
	}
	public String getLinkid() {
		return linkid;
	}
	public void setLinkid(String linkid) {
		this.linkid = linkid;
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
	public String getLoctpcd() {
		return loctpcd;
	}
	public void setLoctpcd(String loctpcd) {
		this.loctpcd = loctpcd;
	}
	public String getDongnm() {
		return dongnm;
	}
	public void setDongnm(String dongnm) {
		this.dongnm = dongnm;
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
	public String getLink_posx() {
		return link_posx;
	}
	public void setLink_posx(String link_posx) {
		this.link_posx = link_posx;
	}
	public String getLink_posy() {
		return link_posy;
	}
	public void setLink_posy(String link_posy) {
		this.link_posy = link_posy;
	}
	public String getDetectrange() {
		return detectrange;
	}
	public void setDetectrange(String detectrange) {
		this.detectrange = detectrange;
	}
	public String getManno() {
		return manno;
	}
	public void setManno(String manno) {
		this.manno = manno;
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
	public String getLinknm() {
		return linknm;
	}
	public void setLinknm(String linknm) {
		this.linknm = linknm;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getCenterlanenm() {
		return centerlanenm;
	}
	public void setCenterlanenm(String centerlanenm) {
		this.centerlanenm = centerlanenm;
	}
	public String getRouteid() {
		return routeid;
	}
	
	
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	public String getRoutetpcd() {
		return routetpcd;
	}
	public void setRoutetpcd(String routetpcd) {
		this.routetpcd = routetpcd;
	}
	public String getRoutedesc() {
		return routedesc;
	}
	public void setRoutedesc(String routedesc) {
		this.routedesc = routedesc;
	}
	public String getCarregno() {
		return carregno;
	}
	public void setCarregno(String carregno) {
		this.carregno = carregno;
	}
	public String getCur_bstopnm() {
		return cur_bstopnm;
	}
	public void setCur_bstopnm(String cur_bstopnm) {
		this.cur_bstopnm = cur_bstopnm;
	}
	public String getRest_bstopcnt() {
		return rest_bstopcnt;
	}
	public void setRest_bstopcnt(String rest_bstopcnt) {
		this.rest_bstopcnt = rest_bstopcnt;
	}
	public String getArrplantm() {
		return arrplantm;
	}
	public void setArrplantm(String arrplantm) {
		this.arrplantm = arrplantm;
	}
	public String getEst_nodecnt() {
		return est_nodecnt;
	}
	public void setEst_nodecnt(String est_nodecnt) {
		this.est_nodecnt = est_nodecnt;
	}
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getOrigin_bstopid() {
		return origin_bstopid;
	}
	public void setOrigin_bstopid(String origin_bstopid) {
		this.origin_bstopid = origin_bstopid;
	}
	public String getDest_bstopid() {
		return dest_bstopid;
	}
	public void setDest_bstopid(String dest_bstopid) {
		this.dest_bstopid = dest_bstopid;
	}
	public String getBitid() {
		return bitid;
	}
	public void setBitid(String bitid) {
		this.bitid = bitid;
	}
	public String getDircd() {
		return dircd;
	}
	public void setDircd(String dircd) {
		this.dircd = dircd;
	}
	public String getInstallloc() {
		return installloc;
	}
	public void setInstallloc(String installloc) {
		this.installloc = installloc;
	}
	public String getBittype() {
		return bittype;
	}
	public void setBittype(String bittype) {
		this.bittype = bittype;
	}
	public String getBstoptype() {
		return bstoptype;
	}
	public void setBstoptype(String bstoptype) {
		this.bstoptype = bstoptype;
	}
	public String getBittpcd() {
		return bittpcd;
	}
	public void setBittpcd(String bittpcd) {
		this.bittpcd = bittpcd;
	}
	public String getWidearea() {
		return widearea;
	}
	public void setWidearea(String widearea) {
		this.widearea = widearea;
	}
	public String getRoadnm() {
		return roadnm;
	}
	public void setRoadnm(String roadnm) {
		this.roadnm = roadnm;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
	}
	public String getDtavg() {
		return dtavg;
	}
	public void setDtavg(String dtavg) {
		this.dtavg = dtavg;
	}
	public String getStart_time() {
		return start_time;
	}
	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}
	public String getEnd_time() {
		return end_time;
	}
	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}
	public String getEvent_type() {
		return event_type;
	}
	public void setEvent_type(String event_type) {
		this.event_type = event_type;
	}
	public String getCd() {
		return cd;
	}
	public void setCd(String cd) {
		this.cd = cd;
	}
	public String getCdnm() {
		return cdnm;
	}
	public void setCdnm(String cdnm) {
		this.cdnm = cdnm;
	}
	public String getEventdt() {
		return eventdt;
	}
	public void setEventdt(String eventdt) {
		this.eventdt = eventdt;
	}
	public String getDirtype() {
		return dirtype;
	}
	public void setDirtype(String dirtype) {
		this.dirtype = dirtype;
	}
	public String getCaregno() {
		return caregno;
	}
	public void setCaregno(String caregno) {
		this.caregno = caregno;
	}
	public String getRest_nodecnt() {
		return rest_nodecnt;
	}
	public void setRest_nodecnt(String rest_nodecnt) {
		this.rest_nodecnt = rest_nodecnt;
	}
	public String getLastbusyn() {
		return lastbusyn;
	}
	public void setLastbusyn(String lastbusyn) {
		this.lastbusyn = lastbusyn;
	}
	public String getBstopseq() {
		return bstopseq;
	}
	public void setBstopseq(String bstopseq) {
		this.bstopseq = bstopseq;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getEvt_occurdt() {
		return evt_occurdt;
	}
	public void setEvt_occurdt(String evt_occurdt) {
		this.evt_occurdt = evt_occurdt;
	}
	public String getCenter_colldt() {
		return center_colldt;
	}
	public void setCenter_colldt(String center_colldt) {
		this.center_colldt = center_colldt;
	}
	public String getEvttype() {
		return evttype;
	}
	public void setEvttype(String evttype) {
		this.evttype = evttype;
	}
	public String getEvtsubtype() {
		return evtsubtype;
	}
	public void setEvtsubtype(String evtsubtype) {
		this.evtsubtype = evtsubtype;
	}
	public String getRegno() {
		return regno;
	}
	public void setRegno(String regno) {
		this.regno = regno;
	}
	public String getMdtid() {
		return mdtid;
	}
	public void setMdtid(String mdtid) {
		this.mdtid = mdtid;
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
	public String getLlinknm() {
		return llinknm;
	}
	public void setLlinknm(String llinknm) {
		this.llinknm = llinknm;
	}
	public String getPathseq() {
		return pathseq;
	}
	public void setPathseq(String pathseq) {
		this.pathseq = pathseq;
	}
	public String getRunstattype() {
		return runstattype;
	}
	public void setRunstattype(String runstattype) {
		this.runstattype = runstattype;
	}
	public String getLastbus() {
		return lastbus;
	}
	public void setLastbus(String lastbus) {
		this.lastbus = lastbus;
	}
	public String getEmptybus() {
		return emptybus;
	}
	public void setEmptybus(String emptybus) {
		this.emptybus = emptybus;
	}
	public String getChgbus() {
		return chgbus;
	}
	public void setChgbus(String chgbus) {
		this.chgbus = chgbus;
	}
	public String getOpenstattype() {
		return openstattype;
	}
	public void setOpenstattype(String openstattype) {
		this.openstattype = openstattype;
	}
	public String getEmgcy() {
		return emgcy;
	}
	public void setEmgcy(String emgcy) {
		this.emgcy = emgcy;
	}
	public String getAccid() {
		return accid;
	}
	public void setAccid(String accid) {
		this.accid = accid;
	}
	public String getTrbl() {
		return trbl;
	}
	public void setTrbl(String trbl) {
		this.trbl = trbl;
	}
	public String getRunvioltype() {
		return runvioltype;
	}
	public void setRunvioltype(String runvioltype) {
		this.runvioltype = runvioltype;
	}
	public String getRunspd() {
		return runspd;
	}
	public void setRunspd(String runspd) {
		this.runspd = runspd;
	}
	public String getRundist() {
		return rundist;
	}
	public void setRundist(String rundist) {
		this.rundist = rundist;
	}
	public String getRuntm() {
		return runtm;
	}
	public void setRuntm(String runtm) {
		this.runtm = runtm;
	}
	public String getReal_runord() {
		return real_runord;
	}
	public void setReal_runord(String real_runord) {
		this.real_runord = real_runord;
	}
	public String getBstop_stoptm() {
		return bstop_stoptm;
	}
	public void setBstop_stoptm(String bstop_stoptm) {
		this.bstop_stoptm = bstop_stoptm;
	}
	public String getSearch_type() {
		return search_type;
	}
	public void setSearch_type(String search_type) {
		this.search_type = search_type;
	}
	public String getDt01() {
		return dt01;
	}
	public void setDt01(String dt01) {
		this.dt01 = dt01;
	}
	public String getDt02() {
		return dt02;
	}
	public void setDt02(String dt02) {
		this.dt02 = dt02;
	}
	public String getDt03() {
		return dt03;
	}
	public void setDt03(String dt03) {
		this.dt03 = dt03;
	}
	public String getDt04() {
		return dt04;
	}
	public void setDt04(String dt04) {
		this.dt04 = dt04;
	}
	public String getDt05() {
		return dt05;
	}
	public void setDt05(String dt05) {
		this.dt05 = dt05;
	}
	public String getDt06() {
		return dt06;
	}
	public void setDt06(String dt06) {
		this.dt06 = dt06;
	}
	public String getDt07() {
		return dt07;
	}
	public void setDt07(String dt07) {
		this.dt07 = dt07;
	}
	public String getDt08() {
		return dt08;
	}
	public void setDt08(String dt08) {
		this.dt08 = dt08;
	}
	public String getDt09() {
		return dt09;
	}
	public void setDt09(String dt09) {
		this.dt09 = dt09;
	}
	public String getDt10() {
		return dt10;
	}
	public void setDt10(String dt10) {
		this.dt10 = dt10;
	}
	public String getDt11() {
		return dt11;
	}
	public void setDt11(String dt11) {
		this.dt11 = dt11;
	}
	public String getDt12() {
		return dt12;
	}
	public void setDt12(String dt12) {
		this.dt12 = dt12;
	}
	public String getDt13() {
		return dt13;
	}
	public void setDt13(String dt13) {
		this.dt13 = dt13;
	}
	public String getDt14() {
		return dt14;
	}
	public void setDt14(String dt14) {
		this.dt14 = dt14;
	}
	public String getDt15() {
		return dt15;
	}
	public void setDt15(String dt15) {
		this.dt15 = dt15;
	}
	public String getDt16() {
		return dt16;
	}
	public void setDt16(String dt16) {
		this.dt16 = dt16;
	}
	public String getDt17() {
		return dt17;
	}
	public void setDt17(String dt17) {
		this.dt17 = dt17;
	}
	public String getDt18() {
		return dt18;
	}
	public void setDt18(String dt18) {
		this.dt18 = dt18;
	}
	public String getDt19() {
		return dt19;
	}
	public void setDt19(String dt19) {
		this.dt19 = dt19;
	}
	public String getDt20() {
		return dt20;
	}
	public void setDt20(String dt20) {
		this.dt20 = dt20;
	}
	public String getDt21() {
		return dt21;
	}
	public void setDt21(String dt21) {
		this.dt21 = dt21;
	}
	public String getDt22() {
		return dt22;
	}
	public void setDt22(String dt22) {
		this.dt22 = dt22;
	}
	public String getDt23() {
		return dt23;
	}
	public void setDt23(String dt23) {
		this.dt23 = dt23;
	}
	public String getDt24() {
		return dt24;
	}
	public void setDt24(String dt24) {
		this.dt24 = dt24;
	}
	public String getDt25() {
		return dt25;
	}
	public void setDt25(String dt25) {
		this.dt25 = dt25;
	}
	public String getDt26() {
		return dt26;
	}
	public void setDt26(String dt26) {
		this.dt26 = dt26;
	}
	public String getDt27() {
		return dt27;
	}
	public void setDt27(String dt27) {
		this.dt27 = dt27;
	}
	public String getDt28() {
		return dt28;
	}
	public void setDt28(String dt28) {
		this.dt28 = dt28;
	}
	public String getDt29() {
		return dt29;
	}
	public void setDt29(String dt29) {
		this.dt29 = dt29;
	}
	public String getDt30() {
		return dt30;
	}
	public void setDt30(String dt30) {
		this.dt30 = dt30;
	}
	public String getDt31() {
		return dt31;
	}
	public void setDt31(String dt31) {
		this.dt31 = dt31;
	}
	public String getAvgp1() {
		return avgp1;
	}
	public void setAvgp1(String avgp1) {
		this.avgp1 = avgp1;
	}
	public String getAvgp2() {
		return avgp2;
	}
	public void setAvgp2(String avgp2) {
		this.avgp2 = avgp2;
	}
	public String getPercnt1() {
		return percnt1;
	}
	public void setPercnt1(String percnt1) {
		this.percnt1 = percnt1;
	}
	public String getPercnt2() {
		return percnt2;
	}
	public void setPercnt2(String percnt2) {
		this.percnt2 = percnt2;
	}
	public String getRun_startdt() {
		return run_startdt;
	}
	public void setRun_startdt(String run_startdt) {
		this.run_startdt = run_startdt;
	}
	public String getRun_enddt() {
		return run_enddt;
	}
	public void setRun_enddt(String run_enddt) {
		this.run_enddt = run_enddt;
	}
	public String getStart_pathseq() {
		return start_pathseq;
	}
	public void setStart_pathseq(String start_pathseq) {
		this.start_pathseq = start_pathseq;
	}
	public String getEnd_pathseq() {
		return end_pathseq;
	}
	public void setEnd_pathseq(String end_pathseq) {
		this.end_pathseq = end_pathseq;
	}
	public String getDetect_nodecnt() {
		return detect_nodecnt;
	}
	public void setDetect_nodecnt(String detect_nodecnt) {
		this.detect_nodecnt = detect_nodecnt;
	}
	public String getTmgap() {
		return tmgap;
	}
	public void setTmgap(String tmgap) {
		this.tmgap = tmgap;
	}
	public String getBstop_arriv_cnt() {
		return bstop_arriv_cnt;
	}
	public void setBstop_arriv_cnt(String bstop_arriv_cnt) {
		this.bstop_arriv_cnt = bstop_arriv_cnt;
	}
	public String getBstop_dep_cnt() {
		return bstop_dep_cnt;
	}
	public void setBstop_dep_cnt(String bstop_dep_cnt) {
		this.bstop_dep_cnt = bstop_dep_cnt;
	}
	public String getCross_pass_cnt() {
		return cross_pass_cnt;
	}
	public void setCross_pass_cnt(String cross_pass_cnt) {
		this.cross_pass_cnt = cross_pass_cnt;
	}
	public String getTotal_nodecnt() {
		return total_nodecnt;
	}
	public void setTotal_nodecnt(String total_nodecnt) {
		this.total_nodecnt = total_nodecnt;
	}
	public String getTotal_bstopcnt() {
		return total_bstopcnt;
	}
	public void setTotal_bstopcnt(String total_bstopcnt) {
		this.total_bstopcnt = total_bstopcnt;
	}
	public String getOutroutecnt() {
		return outroutecnt;
	}
	public void setOutroutecnt(String outroutecnt) {
		this.outroutecnt = outroutecnt;
	}
	public String getArrivtm() {
		return arrivtm;
	}
	public void setArrivtm(String arrivtm) {
		this.arrivtm = arrivtm;
	}
	public String getStarttm() {
		return starttm;
	}
	public void setStarttm(String starttm) {
		this.starttm = starttm;
	}
	public String getProcdt() {
		return procdt;
	}
	public void setProcdt(String procdt) {
		this.procdt = procdt;
	}
	public String getFfcarreno() {
		return ffcarreno;
	}
	public void setFfcarreno(String ffcarreno) {
		this.ffcarreno = ffcarreno;
	}
	public String getFcarreno() {
		return fcarreno;
	}
	public void setFcarreno(String fcarreno) {
		this.fcarreno = fcarreno;
	}
	public String getNcarreno() {
		return ncarreno;
	}
	public void setNcarreno(String ncarreno) {
		this.ncarreno = ncarreno;
	}
	public String getNncarreno() {
		return nncarreno;
	}
	public void setNncarreno(String nncarreno) {
		this.nncarreno = nncarreno;
	}
	public String getFfbus_locgap() {
		return ffbus_locgap;
	}
	public void setFfbus_locgap(String ffbus_locgap) {
		this.ffbus_locgap = ffbus_locgap;
	}
	public String getFfbus_tmgap() {
		return ffbus_tmgap;
	}
	public void setFfbus_tmgap(String ffbus_tmgap) {
		this.ffbus_tmgap = ffbus_tmgap;
	}
	public String getFbus_locgap() {
		return fbus_locgap;
	}
	public void setFbus_locgap(String fbus_locgap) {
		this.fbus_locgap = fbus_locgap;
	}
	public String getFbus_tmgap() {
		return fbus_tmgap;
	}
	public void setFbus_tmgap(String fbus_tmgap) {
		this.fbus_tmgap = fbus_tmgap;
	}
	public String getNbus_locgap() {
		return nbus_locgap;
	}
	public void setNbus_locgap(String nbus_locgap) {
		this.nbus_locgap = nbus_locgap;
	}
	public String getNbus_tmgap() {
		return nbus_tmgap;
	}
	public void setNbus_tmgap(String nbus_tmgap) {
		this.nbus_tmgap = nbus_tmgap;
	}
	public String getNnbus_locgap() {
		return nnbus_locgap;
	}
	public void setNnbus_locgap(String nnbus_locgap) {
		this.nnbus_locgap = nnbus_locgap;
	}
	public String getNnbus_tmgap() {
		return nnbus_tmgap;
	}
	public void setNnbus_tmgap(String nnbus_tmgap) {
		this.nnbus_tmgap = nnbus_tmgap;
	}
	public String getBstopid_1nm() {
		return bstopid_1nm;
	}
	public void setBstopid_1nm(String bstopid_1nm) {
		this.bstopid_1nm = bstopid_1nm;
	}
	public String getArrplantm_1() {
		return arrplantm_1;
	}
	public void setArrplantm_1(String arrplantm_1) {
		this.arrplantm_1 = arrplantm_1;
	}
	public String getBstopid_2nm() {
		return bstopid_2nm;
	}
	public void setBstopid_2nm(String bstopid_2nm) {
		this.bstopid_2nm = bstopid_2nm;
	}
	public String getArrplantm_2() {
		return arrplantm_2;
	}
	public void setArrplantm_2(String arrplantm_2) {
		this.arrplantm_2 = arrplantm_2;
	}
	public String getBstopid_3nm() {
		return bstopid_3nm;
	}
	public void setBstopid_3nm(String bstopid_3nm) {
		this.bstopid_3nm = bstopid_3nm;
	}
	public String getArrplantm_3() {
		return arrplantm_3;
	}
	public void setArrplantm_3(String arrplantm_3) {
		this.arrplantm_3 = arrplantm_3;
	}
	public String getBusstatnm() {
		return busstatnm;
	}
	public void setBusstatnm(String busstatnm) {
		this.busstatnm = busstatnm;
	}
	public String getDriverid() {
		return driverid;
	}
	public void setDriverid(String driverid) {
		this.driverid = driverid;
	}
	public String getBus_drivernm() {
		return bus_drivernm;
	}
	public void setBus_drivernm(String bus_drivernm) {
		this.bus_drivernm = bus_drivernm;
	}
	public String getPlan_runord() {
		return plan_runord;
	}
	public void setPlan_runord(String plan_runord) {
		this.plan_runord = plan_runord;
	}
	public String getOverspdcnt() {
		return overspdcnt;
	}
	public void setOverspdcnt(String overspdcnt) {
		this.overspdcnt = overspdcnt;
	}
	public String getOpenruncnt() {
		return openruncnt;
	}
	public void setOpenruncnt(String openruncnt) {
		this.openruncnt = openruncnt;
	}
	public String getAccelcnt() {
		return accelcnt;
	}
	public void setAccelcnt(String accelcnt) {
		this.accelcnt = accelcnt;
	}
	public String getDecelcnt() {
		return decelcnt;
	}
	public void setDecelcnt(String decelcnt) {
		this.decelcnt = decelcnt;
	}
	public String getStopskipcnt() {
		return stopskipcnt;
	}
	public void setStopskipcnt(String stopskipcnt) {
		this.stopskipcnt = stopskipcnt;
	}
	public String getVoldelaycnt() {
		return voldelaycnt;
	}
	public void setVoldelaycnt(String voldelaycnt) {
		this.voldelaycnt = voldelaycnt;
	}
	public String getTrblcnt() {
		return trblcnt;
	}
	public void setTrblcnt(String trblcnt) {
		this.trblcnt = trblcnt;
	}
	public String getAccidcnt() {
		return accidcnt;
	}
	public void setAccidcnt(String accidcnt) {
		this.accidcnt = accidcnt;
	}
	public String getEmgcycnt() {
		return emgcycnt;
	}
	public void setEmgcycnt(String emgcycnt) {
		this.emgcycnt = emgcycnt;
	}
	public String getMsgseq() {
		return msgseq;
	}
	public void setMsgseq(String msgseq) {
		this.msgseq = msgseq;
	}
	public String getDtime() {
		return dtime;
	}
	public void setDtime(String dtime) {
		this.dtime = dtime;
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
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getModem_serialno() {
		return modem_serialno;
	}
	public void setModem_serialno(String modem_serialno) {
		this.modem_serialno = modem_serialno;
	}
	public String getEmptybusyn() {
		return emptybusyn;
	}
	public void setEmptybusyn(String emptybusyn) {
		this.emptybusyn = emptybusyn;
	}
	public String getChgbusyn() {
		return chgbusyn;
	}
	public void setChgbusyn(String chgbusyn) {
		this.chgbusyn = chgbusyn;
	}
	public String getEvttp() {
		return evttp;
	}
	public void setEvttp(String evttp) {
		this.evttp = evttp;
	}
	public String getOpenstatcd() {
		return openstatcd;
	}
	public void setOpenstatcd(String openstatcd) {
		this.openstatcd = openstatcd;
	}
	public String getMdtstatcd() {
		return mdtstatcd;
	}
	public void setMdtstatcd(String mdtstatcd) {
		this.mdtstatcd = mdtstatcd;
	}
	public String getRunstatcd() {
		return runstatcd;
	}
	public void setRunstatcd(String runstatcd) {
		this.runstatcd = runstatcd;
	}
	public String getRunstatcd_1() {
		return runstatcd_1;
	}
	public void setRunstatcd_1(String runstatcd_1) {
		this.runstatcd_1 = runstatcd_1;
	}
	public String getLic_buscnt() {
		return lic_buscnt;
	}
	public void setLic_buscnt(String lic_buscnt) {
		this.lic_buscnt = lic_buscnt;
	}
	public String getRuncnt() {
		return runcnt;
	}
	public void setRuncnt(String runcnt) {
		this.runcnt = runcnt;
	}
	public String getRoutetpcdnm() {
		return routetpcdnm;
	}
	public void setRoutetpcdnm(String routetpcdnm) {
		this.routetpcdnm = routetpcdnm;
	}
	public String getRunsts() {
		return runsts;
	}
	public void setRunsts(String runsts) {
		this.runsts = runsts;
	}
	public String getLowplateyn() {
		return lowplateyn;
	}
	public void setLowplateyn(String lowplateyn) {
		this.lowplateyn = lowplateyn;
	}
	public String getBusstatcd() {
		return busstatcd;
	}
	public void setBusstatcd(String busstatcd) {
		this.busstatcd = busstatcd;
	}
	public String getRunord() {
		return runord;
	}
	public void setRunord(String runord) {
		this.runord = runord;
	}
	public String getStart_stopnm() {
		return start_stopnm;
	}
	public void setStart_stopnm(String start_stopnm) {
		this.start_stopnm = start_stopnm;
	}
	public String getEnd_stopnm() {
		return end_stopnm;
	}
	public void setEnd_stopnm(String end_stopnm) {
		this.end_stopnm = end_stopnm;
	}
	public String getStop_time() {
		return stop_time;
	}
	public void setStop_time(String stop_time) {
		this.stop_time = stop_time;
	}
	public String getLlinkid() {
		return llinkid;
	}
	public void setLlinkid(String llinkid) {
		this.llinkid = llinkid;
	}
	public String getRundistinctcd() {
		return rundistinctcd;
	}
	public void setRundistinctcd(String rundistinctcd) {
		this.rundistinctcd = rundistinctcd;
	}
	public String getCongestlev_cd() {
		return congestlev_cd;
	}
	public void setCongestlev_cd(String congestlev_cd) {
		this.congestlev_cd = congestlev_cd;
	}
	public String getFbus_busid() {
		return fbus_busid;
	}
	public void setFbus_busid(String fbus_busid) {
		this.fbus_busid = fbus_busid;
	}
	public String getNbus_busid() {
		return nbus_busid;
	}
	public void setNbus_busid(String nbus_busid) {
		this.nbus_busid = nbus_busid;
	}
	public String getFfbus_busid() {
		return ffbus_busid;
	}
	public void setFfbus_busid(String ffbus_busid) {
		this.ffbus_busid = ffbus_busid;
	}
	public String getNnbus_busid() {
		return nnbus_busid;
	}
	public void setNnbus_busid(String nnbus_busid) {
		this.nnbus_busid = nnbus_busid;
	}
	public String getBstopid_1() {
		return bstopid_1;
	}
	public void setBstopid_1(String bstopid_1) {
		this.bstopid_1 = bstopid_1;
	}
	public String getTrvspd_1() {
		return trvspd_1;
	}
	public void setTrvspd_1(String trvspd_1) {
		this.trvspd_1 = trvspd_1;
	}
	public String getBstopid_2() {
		return bstopid_2;
	}
	public void setBstopid_2(String bstopid_2) {
		this.bstopid_2 = bstopid_2;
	}
	public String getTrvspd_2() {
		return trvspd_2;
	}
	public void setTrvspd_2(String trvspd_2) {
		this.trvspd_2 = trvspd_2;
	}
	public String getBstopid_3() {
		return bstopid_3;
	}
	public void setBstopid_3(String bstopid_3) {
		this.bstopid_3 = bstopid_3;
	}
	public String getTrvspd_3() {
		return trvspd_3;
	}
	public void setTrvspd_3(String trvspd_3) {
		this.trvspd_3 = trvspd_3;
	}
	public String getDest_arrplantm() {
		return dest_arrplantm;
	}
	public void setDest_arrplantm(String dest_arrplantm) {
		this.dest_arrplantm = dest_arrplantm;
	}
	public String getDest_restdist() {
		return dest_restdist;
	}
	public void setDest_restdist(String dest_restdist) {
		this.dest_restdist = dest_restdist;
	}
	public String getGps_statyn() {
		return gps_statyn;
	}
	public void setGps_statyn(String gps_statyn) {
		this.gps_statyn = gps_statyn;
	}
	public String getWlan_statyn() {
		return wlan_statyn;
	}
	public void setWlan_statyn(String wlan_statyn) {
		this.wlan_statyn = wlan_statyn;
	}
	public String getSub_term_statyn() {
		return sub_term_statyn;
	}
	public void setSub_term_statyn(String sub_term_statyn) {
		this.sub_term_statyn = sub_term_statyn;
	}
	public String getMem_statyn() {
		return mem_statyn;
	}
	public void setMem_statyn(String mem_statyn) {
		this.mem_statyn = mem_statyn;
	}
	public String getBstart_statyn() {
		return bstart_statyn;
	}
	public void setBstart_statyn(String bstart_statyn) {
		this.bstart_statyn = bstart_statyn;
	}
	public String getCarno() {
		return carno;
	}
	public void setCarno(String carno) {
		this.carno = carno;
	}
	public String getIncidtpcd() {
		return incidtpcd;
	}
	public void setIncidtpcd(String incidtpcd) {
		this.incidtpcd = incidtpcd;
	}
	public String getYncheck() {
		return yncheck;
	}
	public void setYncheck(String yncheck) {
		this.yncheck = yncheck;
	}
	public String getRcvseq() {
		return rcvseq;
	}
	public void setRcvseq(String rcvseq) {
		this.rcvseq = rcvseq;
	}
	public String getPlay_runord() {
		return play_runord;
	}
	public void setPlay_runord(String play_runord) {
		this.play_runord = play_runord;
	}
	public String getSndseq() {
		return sndseq;
	}
	public void setSndseq(String sndseq) {
		this.sndseq = sndseq;
	}
	public String getMessage_content() {
		return message_content;
	}
	public void setMessage_content(String message_content) {
		this.message_content = message_content;
	}
	public String getReg_userid() {
		return reg_userid;
	}
	public void setReg_userid(String reg_userid) {
		this.reg_userid = reg_userid;
	}
	public String getUsertpcd() {
		return usertpcd;
	}
	public void setUsertpcd(String usertpcd) {
		this.usertpcd = usertpcd;
	}
	public String getMsgtpcd() {
		return msgtpcd;
	}
	public void setMsgtpcd(String msgtpcd) {
		this.msgtpcd = msgtpcd;
	}
	public String getGu() {
		return gu;
	}
	public void setGu(String gu) {
		this.gu = gu;
	}
	public String getProjecttpcd() {
		return projecttpcd;
	}
	public void setProjecttpcd(String projecttpcd) {
		this.projecttpcd = projecttpcd;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getReqdt() {
		return reqdt;
	}
	public String getRoadno() {
		return roadno;
	}
	public void setRoadno(String roadno) {
		this.roadno = roadno;
	}

	public void setReqdt(String reqdt) {
		this.reqdt = reqdt;
	}
	public String getUpdtpcd() {
		return updtpcd;
	}
	public void setUpdtpcd(String updtpcd) {
		this.updtpcd = updtpcd;
	}
	public String getReq_userid() {
		return req_userid;
	}
	public void setReq_userid(String req_userid) {
		this.req_userid = req_userid;
	}
	public String getPermstatcd() {
		return permstatcd;
	}
	public void setPermstatcd(String permstatcd) {
		this.permstatcd = permstatcd;
	}
	public String getTreatdt() {
		return treatdt;
	}
	public void setTreatdt(String treatdt) {
		this.treatdt = treatdt;
	}
	public String getTreat_userid() {
		return treat_userid;
	}
	public void setTreat_userid(String treat_userid) {
		this.treat_userid = treat_userid;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getUpdtype() {
		return updtype;
	}
	public void setUpdtype(String updtype) {
		this.updtype = updtype;
	}
	public String getReq_user() {
		return req_user;
	}
	public void setReq_user(String req_user) {
		this.req_user = req_user;
	}
	public String getPermstat() {
		return permstat;
	}
	public void setPermstat(String permstat) {
		this.permstat = permstat;
	}
	public String getTreat_user() {
		return treat_user;
	}
	public void setTreat_user(String treat_user) {
		this.treat_user = treat_user;
	}
	
	
}
