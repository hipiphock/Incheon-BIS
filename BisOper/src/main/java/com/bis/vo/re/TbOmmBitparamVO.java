package com.bis.vo.re;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : BIT 파라미터
 * Class Name 	  : TbOmmBitparamVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.22	    김주암                       최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbOmmBitparamVO {
	private String bittpcd;// 	varchar2(2 byte)
	private String 	bright_day_hms;// 	varchar2(6 byte)
	private String bright_night_hms;// 	varchar2(6 byte)
	private String comm_retrycnt;// 	number(2,0)
	private String comm_tmout;// 	number(6,0)
	private String day_bright;// 	number(3,0)
	private String day_volume;// 	number(5,0)
	private String dispcycl;// 	number(4,0)
	private String disp_offhms;// 	varchar2(6 byte)
	private String disp_onhms;// 	varchar2(6 byte)
	private String fan_temper;// r	number(4,1)
	private String fonttpcd;// 	varchar2(4 byte)
	private String font_colorcd;// 	varchar2(4 byte)
	private String heat_temper;// 	number(4,1)
	private String lcd_fan_temper;// 	number(4,1)
	private String lcd_fan_temper_1;// 	number(4,1)
	private String lcd_heat_temper;// 	number(4,1)
	private String lcd_heat_temper_1;// 	number(4,1)
	private String msgcycl;// 	number(4,0)
	private String night_bright;// 	number(3,0)
	private String night_volume;// 	number(5,0)
	private String paramid;// 	varchar2(10 byte)
	private String title;// 	varchar2(50 byte)
	private String upddt;// 	date
	private String volume_day_hms;// 	varchar2(6 byte)
	private String volume_night_hms;// 	varchar2(6 byte)
	//신규 장비 추가 컬럼
	private String arrival_type;
	private String arrival_remain;
	private String status_delay;
	private String capture_delay;
	private String order_type;
	private String volume_yn;
	private String promote_dis_time;
	private String promote_del_time;
	private String fan_oper_temp;
	private String fan_stop_temp;
	private String heater_oper_temp;
	private String heater_stop_temp;
	
	// selectBitParamList - 파라미터(시나리오) 조회
	private String searchWord;
	private String bitkind;	
	private String bittpnm;
	private String route_font;
	private String arrive_font;
	private String bstop_font;
	private String route_fontcolor;
	private String arrive_fontcolor;
	private String bstop_fontcolor;

	// 파라미터 제공
	private String bitid;
	private String bitmid;
	private String bstopid;	
	private String bstopnm;
	private String detail;
	private String bittype;
	private String snddt;	
	private String sndrslt;
	private String commerrcd;
	private String commerr;	
	private String paramid_1;	
	

	public String getBittpcd() {
		return bittpcd;
	}
	public void setBittpcd(String bittpcd) {
		this.bittpcd = bittpcd;
	}
	public String getBright_day_hms() {
		return bright_day_hms;
	}
	public void setBright_day_hms(String bright_day_hms) {
		this.bright_day_hms = bright_day_hms;
	}
	public String getBright_night_hms() {
		return bright_night_hms;
	}
	public void setBright_night_hms(String bright_night_hms) {
		this.bright_night_hms = bright_night_hms;
	}
	public String getComm_retrycnt() {
		return comm_retrycnt;
	}
	public void setComm_retrycnt(String comm_retrycnt) {
		this.comm_retrycnt = comm_retrycnt;
	}
	public String getComm_tmout() {
		return comm_tmout;
	}
	public void setComm_tmout(String comm_tmout) {
		this.comm_tmout = comm_tmout;
	}
	public String getDay_bright() {
		return day_bright;
	}
	public void setDay_bright(String day_bright) {
		this.day_bright = day_bright;
	}
	public String getDay_volume() {
		return day_volume;
	}
	public void setDay_volume(String day_volume) {
		this.day_volume = day_volume;
	}
	public String getDispcycl() {
		return dispcycl;
	}
	public void setDispcycl(String dispcycl) {
		this.dispcycl = dispcycl;
	}
	public String getDisp_offhms() {
		return disp_offhms;
	}
	public void setDisp_offhms(String disp_offhms) {
		this.disp_offhms = disp_offhms;
	}
	public String getDisp_onhms() {
		return disp_onhms;
	}
	public void setDisp_onhms(String disp_onhms) {
		this.disp_onhms = disp_onhms;
	}
	public String getFan_temper() {
		return fan_temper;
	}
	public void setFan_temper(String fan_temper) {
		this.fan_temper = fan_temper;
	}
	public String getFonttpcd() {
		return fonttpcd;
	}
	public void setFonttpcd(String fonttpcd) {
		this.fonttpcd = fonttpcd;
	}
	public String getFont_colorcd() {
		return font_colorcd;
	}
	public void setFont_colorcd(String font_colorcd) {
		this.font_colorcd = font_colorcd;
	}
	public String getHeat_temper() {
		return heat_temper;
	}
	public void setHeat_temper(String heat_temper) {
		this.heat_temper = heat_temper;
	}
	public String getLcd_fan_temper() {
		return lcd_fan_temper;
	}
	public void setLcd_fan_temper(String lcd_fan_temper) {
		this.lcd_fan_temper = lcd_fan_temper;
	}
	public String getLcd_fan_temper_1() {
		return lcd_fan_temper_1;
	}
	public void setLcd_fan_temper_1(String lcd_fan_temper_1) {
		this.lcd_fan_temper_1 = lcd_fan_temper_1;
	}
	public String getLcd_heat_temper() {
		return lcd_heat_temper;
	}
	public void setLcd_heat_temper(String lcd_heat_temper) {
		this.lcd_heat_temper = lcd_heat_temper;
	}
	public String getLcd_heat_temper_1() {
		return lcd_heat_temper_1;
	}
	public void setLcd_heat_temper_1(String lcd_heat_temper_1) {
		this.lcd_heat_temper_1 = lcd_heat_temper_1;
	}
	public String getMsgcycl() {
		return msgcycl;
	}
	public void setMsgcycl(String msgcycl) {
		this.msgcycl = msgcycl;
	}
	public String getNight_bright() {
		return night_bright;
	}
	public void setNight_bright(String night_bright) {
		this.night_bright = night_bright;
	}
	public String getNight_volume() {
		return night_volume;
	}
	public void setNight_volume(String night_volume) {
		this.night_volume = night_volume;
	}
	public String getParamid() {
		return paramid;
	}
	public void setParamid(String paramid) {
		this.paramid = paramid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getUpddt() {
		return upddt;
	}
	public void setUpddt(String upddt) {
		this.upddt = upddt;
	}
	public String getVolume_day_hms() {
		return volume_day_hms;
	}
	public void setVolume_day_hms(String volume_day_hms) {
		this.volume_day_hms = volume_day_hms;
	}
	public String getVolume_night_hms() {
		return volume_night_hms;
	}
	public void setVolume_night_hms(String volume_night_hms) {
		this.volume_night_hms = volume_night_hms;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getBitkind() {
		return bitkind;
	}
	public void setBitkind(String bitkind) {
		this.bitkind = bitkind;
	}
	public String getBittpnm() {
		return bittpnm;
	}
	public void setBittpnm(String bittpnm) {
		this.bittpnm = bittpnm;
	}
	public String getRoute_font() {
		return route_font;
	}
	public void setRoute_font(String route_font) {
		this.route_font = route_font;
	}
	public String getArrive_font() {
		return arrive_font;
	}
	public void setArrive_font(String arrive_font) {
		this.arrive_font = arrive_font;
	}
	public String getBstop_font() {
		return bstop_font;
	}
	public void setBstop_font(String bstop_font) {
		this.bstop_font = bstop_font;
	}
	public String getRoute_fontcolor() {
		return route_fontcolor;
	}
	public void setRoute_fontcolor(String route_fontcolor) {
		this.route_fontcolor = route_fontcolor;
	}
	public String getArrive_fontcolor() {
		return arrive_fontcolor;
	}
	public void setArrive_fontcolor(String arrive_fontcolor) {
		this.arrive_fontcolor = arrive_fontcolor;
	}
	public String getBstop_fontcolor() {
		return bstop_fontcolor;
	}
	public void setBstop_fontcolor(String bstop_fontcolor) {
		this.bstop_fontcolor = bstop_fontcolor;
	}
	public String getBitid() {
		return bitid;
	}
	public void setBitid(String bitid) {
		this.bitid = bitid;
	}
	public String getBitmid() {
		return bitmid;
	}
	public void setBitmid(String bitmid) {
		this.bitmid = bitmid;
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
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getBittype() {
		return bittype;
	}
	public void setBittype(String bittype) {
		this.bittype = bittype;
	}
	public String getSnddt() {
		return snddt;
	}
	public void setSnddt(String snddt) {
		this.snddt = snddt;
	}
	public String getSndrslt() {
		return sndrslt;
	}
	public void setSndrslt(String sndrslt) {
		this.sndrslt = sndrslt;
	}
	public String getCommerrcd() {
		return commerrcd;
	}
	public void setCommerrcd(String commerrcd) {
		this.commerrcd = commerrcd;
	}
	public String getCommerr() {
		return commerr;
	}
	public void setCommerr(String commerr) {
		this.commerr = commerr;
	}
	public String getParamid_1() {
		return paramid_1;
	}
	public void setParamid_1(String paramid_1) {
		this.paramid_1 = paramid_1;
	}
	public String getArrival_type() {
		return arrival_type;
	}
	public void setArrival_type(String arrival_type) {
		this.arrival_type = arrival_type;
	}
	public String getArrival_remain() {
		return arrival_remain;
	}
	public void setArrival_remain(String arrival_remain) {
		this.arrival_remain = arrival_remain;
	}
	public String getStatus_delay() {
		return status_delay;
	}
	public void setStatus_delay(String status_delay) {
		this.status_delay = status_delay;
	}
	public String getCapture_delay() {
		return capture_delay;
	}
	public void setCapture_delay(String capture_delay) {
		this.capture_delay = capture_delay;
	}
	public String getOrder_type() {
		return order_type;
	}
	public void setOrder_type(String order_type) {
		this.order_type = order_type;
	}
	public String getVolume_yn() {
		return volume_yn;
	}
	public void setVolume_yn(String volume_yn) {
		this.volume_yn = volume_yn;
	}
	public String getPromote_dis_time() {
		return promote_dis_time;
	}
	public void setPromote_dis_time(String promote_dis_time) {
		this.promote_dis_time = promote_dis_time;
	}
	public String getPromote_del_time() {
		return promote_del_time;
	}
	public void setPromote_del_time(String promote_del_time) {
		this.promote_del_time = promote_del_time;
	}
	public String getFan_oper_temp() {
		return fan_oper_temp;
	}
	public void setFan_oper_temp(String fan_oper_temp) {
		this.fan_oper_temp = fan_oper_temp;
	}
	public String getFan_stop_temp() {
		return fan_stop_temp;
	}
	public void setFan_stop_temp(String fan_stop_temp) {
		this.fan_stop_temp = fan_stop_temp;
	}
	public String getHeater_oper_temp() {
		return heater_oper_temp;
	}
	public void setHeater_oper_temp(String heater_oper_temp) {
		this.heater_oper_temp = heater_oper_temp;
	}
	public String getHeater_stop_temp() {
		return heater_stop_temp;
	}
	public void setHeater_stop_temp(String heater_stop_temp) {
		this.heater_stop_temp = heater_stop_temp;
	}
}
