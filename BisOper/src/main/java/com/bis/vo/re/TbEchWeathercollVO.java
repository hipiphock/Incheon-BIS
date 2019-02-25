package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 기상정보 연계정보 관리
 * Class Name 	  : TbEchWeathercollVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2018.01.25	   주형빈                      최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbEchWeathercollVO {

	private String areacd;				//NUMBER(3,0)
	private String occurdt;				//DATE
	private String proccyclcd;			//VARCHAR2(1 BYTE)
	private String weathertpcd;			//VARCHAR2(1 BYTE)
	private String max_temper;			//NUMBER(4,1)
	private String min_temper;			//NUMBER(4,1)
	private String cur_temper;			//NUMBER(4,1)
	private String winddir;				//VARCHAR2(4 BYTE)
	private String windspd;				//NUMBER(4,1)
	private String rainfall;			//NUMBER(4,0)
	private String snowfall;			//NUMBER(4,0)
	private String rainproblt;			//NUMBER(5,2)
	private String colldt;				//DATE
	private String weatherstatus;		//VARCHAR2(60 BYTE)
	private String for_max_temper;		//NUMBER(4,1)
	private String for_min_temper;		//NUMBER(4,1)
	private String for_rainproblt_m;	//NUMBER(5,2)
	private String for_rainproblt_a;	//NUMBER(5,2)
	private String for_weather;			//VARCHAR2(60 BYTE)
	private String for_weathertpcd;		//VARCHAR2(2 BYTE)
	private String tod_max_temper;		//NUMBER(4,1)
	private String tod_min_temper;		//NUMBER(4,1)
	private String tod_rainproblt_m;	//NUMBER(5,2)
	private String tod_rainproblt_a;	//NUMBER(5,2)
	private String tod_weather;			//VARCHAR2(60 BYTE)
	private String tod_weathertpcd;		//VARCHAR2(2 BYTE)
	
	private String cur_weathertpnm;
	private String for_weathertpnm;
	private String tod_weathertpnm;
	private String search_startdt;
	private String search_enddt;
	
	public String getAreacd() {
		return areacd;
	}
	public void setAreacd(String areacd) {
		this.areacd = areacd;
	}
	public String getOccurdt() {
		return occurdt;
	}
	public void setOccurdt(String occurdt) {
		this.occurdt = occurdt;
	}
	public String getProccyclcd() {
		return proccyclcd;
	}
	public void setProccyclcd(String proccyclcd) {
		this.proccyclcd = proccyclcd;
	}
	public String getWeathertpcd() {
		return weathertpcd;
	}
	public void setWeathertpcd(String weathertpcd) {
		this.weathertpcd = weathertpcd;
	}
	public String getMax_temper() {
		return max_temper;
	}
	public void setMax_temper(String max_temper) {
		this.max_temper = max_temper;
	}
	public String getMin_temper() {
		return min_temper;
	}
	public void setMin_temper(String min_temper) {
		this.min_temper = min_temper;
	}
	public String getCur_temper() {
		return cur_temper;
	}
	public void setCur_temper(String cur_temper) {
		this.cur_temper = cur_temper;
	}
	public String getWinddir() {
		return winddir;
	}
	public void setWinddir(String winddir) {
		this.winddir = winddir;
	}
	public String getWindspd() {
		return windspd;
	}
	public void setWindspd(String windspd) {
		this.windspd = windspd;
	}
	public String getRainfall() {
		return rainfall;
	}
	public void setRainfall(String rainfall) {
		this.rainfall = rainfall;
	}
	public String getSnowfall() {
		return snowfall;
	}
	public void setSnowfall(String snowfall) {
		this.snowfall = snowfall;
	}
	public String getRainproblt() {
		return rainproblt;
	}
	public void setRainproblt(String rainproblt) {
		this.rainproblt = rainproblt;
	}
	public String getColldt() {
		return colldt;
	}
	public void setColldt(String colldt) {
		this.colldt = colldt;
	}
	public String getWeatherstatus() {
		return weatherstatus;
	}
	public void setWeatherstatus(String weatherstatus) {
		this.weatherstatus = weatherstatus;
	}
	public String getFor_max_temper() {
		return for_max_temper;
	}
	public void setFor_max_temper(String for_max_temper) {
		this.for_max_temper = for_max_temper;
	}
	public String getFor_min_temper() {
		return for_min_temper;
	}
	public void setFor_min_temper(String for_min_temper) {
		this.for_min_temper = for_min_temper;
	}
	public String getFor_rainproblt_m() {
		return for_rainproblt_m;
	}
	public void setFor_rainproblt_m(String for_rainproblt_m) {
		this.for_rainproblt_m = for_rainproblt_m;
	}
	public String getFor_rainproblt_a() {
		return for_rainproblt_a;
	}
	public void setFor_rainproblt_a(String for_rainproblt_a) {
		this.for_rainproblt_a = for_rainproblt_a;
	}
	public String getFor_weather() {
		return for_weather;
	}
	public void setFor_weather(String for_weather) {
		this.for_weather = for_weather;
	}
	public String getFor_weathertpcd() {
		return for_weathertpcd;
	}
	public void setFor_weathertpcd(String for_weathertpcd) {
		this.for_weathertpcd = for_weathertpcd;
	}
	public String getTod_max_temper() {
		return tod_max_temper;
	}
	public void setTod_max_temper(String tod_max_temper) {
		this.tod_max_temper = tod_max_temper;
	}
	public String getTod_min_temper() {
		return tod_min_temper;
	}
	public void setTod_min_temper(String tod_min_temper) {
		this.tod_min_temper = tod_min_temper;
	}
	public String getTod_rainproblt_m() {
		return tod_rainproblt_m;
	}
	public void setTod_rainproblt_m(String tod_rainproblt_m) {
		this.tod_rainproblt_m = tod_rainproblt_m;
	}
	public String getTod_rainproblt_a() {
		return tod_rainproblt_a;
	}
	public void setTod_rainproblt_a(String tod_rainproblt_a) {
		this.tod_rainproblt_a = tod_rainproblt_a;
	}
	public String getTod_weather() {
		return tod_weather;
	}
	public void setTod_weather(String tod_weather) {
		this.tod_weather = tod_weather;
	}
	public String getTod_weathertpcd() {
		return tod_weathertpcd;
	}
	public void setTod_weathertpcd(String tod_weathertpcd) {
		this.tod_weathertpcd = tod_weathertpcd;
	}
	public String getCur_weathertpnm() {
		return cur_weathertpnm;
	}
	public void setCur_weathertpnm(String cur_weathertpnm) {
		this.cur_weathertpnm = cur_weathertpnm;
	}
	public String getFor_weathertpnm() {
		return for_weathertpnm;
	}
	public void setFor_weathertpnm(String for_weathertpnm) {
		this.for_weathertpnm = for_weathertpnm;
	}
	public String getTod_weathertpnm() {
		return tod_weathertpnm;
	}
	public void setTod_weathertpnm(String tod_weathertpnm) {
		this.tod_weathertpnm = tod_weathertpnm;
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
