package com.bis.vo;

import java.util.List;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : TbBitVO.java
 * Description 	  : BIT, BIT_STATUS
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class BitVO {
	private String searchWord;
	private String view_flag;
	
	private String bit_id;              //NUMBER      22
	private List<String> bit_id_list;
	private String bit_type;            //CHAR        1
	private String firmware_version;    //VARCHAR2    20          	 
	private String voice_use_flag;      //CHAR        1           	 
	private String foreign_use_flag;    //CHAR        1           	 
	private String speaker_volume;      //NUMBER      22          	 
	private String scenario_volume;     //NUMBER      22          	 
	private String disp_st_time;        //CHAR        4           	 
	private String disp_ed_time;        //CHAR        4           	 
	private String light_st_time_sm;    //CHAR        4           	 
	private String light_ed_time_sm;    //CHAR        4           	 
	private String light_st_time_wt;    //CHAR        4           	 
	private String light_ed_time_wt;    //CHAR        4           	 
	private String scenario_sort;       //CHAR        4           	 
	private String ism_st_time;         //CHAR        4           	 
	private String ism_remain_time;     //CHAR        4           	 
	private String ism_repeat_time;     //CHAR        4           	 
	private String action_detect_flag;  //CHAR        1           	 
	private String action_detect_time;  //NUMBER      22          	 
	private String fan_min_temperature; //NUMBER      22          	 
	private String fan_max_temperature; //NUMBER      22          	 
	private String heater_min_temperature; //NUMBER      22          	 
	private String crash_detect_flag;   //CHAR        1           	 
	private String heater_max_temperature; //NUMBER      22          	 
	private String crash_detect_value;  //NUMBER      22          	 
	private String default_illumination_value; //NUMBER      22          	 
	private String incoming_type;       //CHAR        1           	 
	private String incoming_time;       //NUMBER      22          	 
	private String incoming_stop;       //NUMBER      22          	 
	private String incoming_type_wa;    //CHAR        1           	 
	private String incoming_time_wa;    //NUMBER      22          	 
	private String incoming_stop_wa;    //NUMBER      22          	 
	private String crash_send_yn;       //CHAR        1           	 
	private String ftp_stanby_min;      //VARCHAR2    2           	 
	private String info_sort_type;      //CHAR        1           	 
	private String status_sendcycle;    //NUMBER      22          	 
	private String image_sendcycle;     //NUMBER      22          	 
	private String capture_sendcycle;   //NUMBER      22          	 
	private String regist_dt;           //CHAR        14          	 
	private String update_dt;           //CHAR        14          	 
	private String scenario_id;         //CHAR        14          	 
	private String bit_cate_id;         //NUMBER      22          	 
	private String install_stop_id;     //NUMBER      22          	 
	private String provide_group_id;    //NUMBER      22          	 
	private String font_size;           //NUMBER      22          	 
	private String icon_position;       //NUMBER      22          	 
	private String business_id;         //NUMBER      22          	 
	private String use_flag;            //NUMBER      22          	 
	private String bit_install_type;    //NUMBER      22
	private String bit_install_type_name;
	private String company_id;          //NUMBER      22          	 
	private String data_explain;        //VARCHAR2    100         	 
	private String area_code;           //NUMBER      22          	 
	private String local_id;            //NUMBER      22          	 
	
	/* status */
	private String temperature;
	private String humidity;
	private String fan_state;
	private String heater_state;
	private String door_state;
	private String illumination_state;
	private String memory_usage;
	private String action_detect_state;
	private String comm_state;
	private String disp_state;
	private String cam_state;
	private String crash_state;
	private String server_id;
	
	/* categorization */
	private String cate_name;//	varchar2(30 byte)
	private String user_id;//	varchar2(15 byte)

	/* bussiness */
	private String business_title;//	varchar2(50 byte)
	private String st_date;//	varchar2(8 byte)
	private String ed_date;//	varchar2(8 byte)
	private String constructor;//	varchar2(50 byte)
	private String business_year;//	number(4,0)

	/* bit company */
	private String company_name;//	varchar2(30 byte)
	private String tel_number;//	varchar2(30 byte)
	
	/* bit display scinario */
	private String regist_user_id;//	varchar2(15 byte)
	private String last_version;//	varchar2(14 byte)
	
	/* bis display scinario detail */
	private String scenario_ord;//	number(4,0)
	private String disp_st_dt;//	char(14 byte)
	private String disp_ed_dt;//	char(14 byte)
	private String disp_time;//	number(3,0)
	private String disp_data_id;//	number(10,0)
	private String data_version;//	number(10,0)
	
	/* bit scinario data */
	private String disp_data_type;//	char(1 byte)
	private String disp_data_filename;//	varchar2(256 byte)
	
	private String server_name;
	private String total;
	private String ok;
	private String err;
	private String server_state;
	private String ip;
	
	private String com_status;
	private String stop_name;
	private String adm_district_id;
	private String lat;
	private String lng;
	private String bit_type_name;
	private String service_id;
	private String system_name;
	private String stop_id; 
	
	private String bit_no; 
	private String code_explain; 
	
	private String connect_ip;
	
	private String minLat;
	private String maxLat;
	private String minLng;
	private String maxLng;
	
	public String getConnect_ip() {
		return connect_ip;
	}
	public void setConnect_ip(String connect_ip) {
		this.connect_ip = connect_ip;
	}
	
	public String getBit_id() {
		return bit_id;
	}
	public void setBit_id(String bit_id) {
		this.bit_id = bit_id;
	}
	public List<String> getBit_id_list() {
		return bit_id_list;
	}
	public void setBit_id_list(List<String> bit_id_list) {
		this.bit_id_list = bit_id_list;
	}
	public String getBit_type() {
		return bit_type;
	}
	public void setBit_type(String bit_type) {
		this.bit_type = bit_type;
	}
	public String getFirmware_version() {
		return firmware_version;
	}
	public void setFirmware_version(String firmware_version) {
		this.firmware_version = firmware_version;
	}
	public String getVoice_use_flag() {
		return voice_use_flag;
	}
	public void setVoice_use_flag(String voice_use_flag) {
		this.voice_use_flag = voice_use_flag;
	}
	public String getForeign_use_flag() {
		return foreign_use_flag;
	}
	public void setForeign_use_flag(String foreign_use_flag) {
		this.foreign_use_flag = foreign_use_flag;
	}
	public String getSpeaker_volume() {
		return speaker_volume;
	}
	public void setSpeaker_volume(String speaker_volume) {
		this.speaker_volume = speaker_volume;
	}
	public String getScenario_volume() {
		return scenario_volume;
	}
	public void setScenario_volume(String scenario_volume) {
		this.scenario_volume = scenario_volume;
	}
	public String getDisp_st_time() {
		return disp_st_time;
	}
	public void setDisp_st_time(String disp_st_time) {
		this.disp_st_time = disp_st_time;
	}
	public String getDisp_ed_time() {
		return disp_ed_time;
	}
	public void setDisp_ed_time(String disp_ed_time) {
		this.disp_ed_time = disp_ed_time;
	}
	public String getLight_st_time_sm() {
		return light_st_time_sm;
	}
	public void setLight_st_time_sm(String light_st_time_sm) {
		this.light_st_time_sm = light_st_time_sm;
	}
	public String getLight_ed_time_sm() {
		return light_ed_time_sm;
	}
	public void setLight_ed_time_sm(String light_ed_time_sm) {
		this.light_ed_time_sm = light_ed_time_sm;
	}
	public String getLight_st_time_wt() {
		return light_st_time_wt;
	}
	public void setLight_st_time_wt(String light_st_time_wt) {
		this.light_st_time_wt = light_st_time_wt;
	}
	public String getLight_ed_time_wt() {
		return light_ed_time_wt;
	}
	public void setLight_ed_time_wt(String light_ed_time_wt) {
		this.light_ed_time_wt = light_ed_time_wt;
	}
	public String getScenario_sort() {
		return scenario_sort;
	}
	public void setScenario_sort(String scenario_sort) {
		this.scenario_sort = scenario_sort;
	}
	public String getIsm_st_time() {
		return ism_st_time;
	}
	public void setIsm_st_time(String ism_st_time) {
		this.ism_st_time = ism_st_time;
	}
	public String getIsm_remain_time() {
		return ism_remain_time;
	}
	public void setIsm_remain_time(String ism_remain_time) {
		this.ism_remain_time = ism_remain_time;
	}
	public String getIsm_repeat_time() {
		return ism_repeat_time;
	}
	public void setIsm_repeat_time(String ism_repeat_time) {
		this.ism_repeat_time = ism_repeat_time;
	}
	public String getAction_detect_flag() {
		return action_detect_flag;
	}
	public void setAction_detect_flag(String action_detect_flag) {
		this.action_detect_flag = action_detect_flag;
	}
	public String getAction_detect_time() {
		return action_detect_time;
	}
	public void setAction_detect_time(String action_detect_time) {
		this.action_detect_time = action_detect_time;
	}
	public String getFan_min_temperature() {
		return fan_min_temperature;
	}
	public void setFan_min_temperature(String fan_min_temperature) {
		this.fan_min_temperature = fan_min_temperature;
	}
	public String getFan_max_temperature() {
		return fan_max_temperature;
	}
	public void setFan_max_temperature(String fan_max_temperature) {
		this.fan_max_temperature = fan_max_temperature;
	}
	public String getHeater_min_temperature() {
		return heater_min_temperature;
	}
	public void setHeater_min_temperature(String heater_min_temperature) {
		this.heater_min_temperature = heater_min_temperature;
	}
	public String getCrash_detect_flag() {
		return crash_detect_flag;
	}
	public void setCrash_detect_flag(String crash_detect_flag) {
		this.crash_detect_flag = crash_detect_flag;
	}
	public String getHeater_max_temperature() {
		return heater_max_temperature;
	}
	public void setHeater_max_temperature(String heater_max_temperature) {
		this.heater_max_temperature = heater_max_temperature;
	}
	public String getCrash_detect_value() {
		return crash_detect_value;
	}
	public void setCrash_detect_value(String crash_detect_value) {
		this.crash_detect_value = crash_detect_value;
	}
	public String getDefault_illumination_value() {
		return default_illumination_value;
	}
	public void setDefault_illumination_value(String default_illumination_value) {
		this.default_illumination_value = default_illumination_value;
	}
	public String getIncoming_type() {
		return incoming_type;
	}
	public void setIncoming_type(String incoming_type) {
		this.incoming_type = incoming_type;
	}
	public String getIncoming_time() {
		return incoming_time;
	}
	public void setIncoming_time(String incoming_time) {
		this.incoming_time = incoming_time;
	}
	public String getIncoming_stop() {
		return incoming_stop;
	}
	public void setIncoming_stop(String incoming_stop) {
		this.incoming_stop = incoming_stop;
	}
	public String getIncoming_type_wa() {
		return incoming_type_wa;
	}
	public void setIncoming_type_wa(String incoming_type_wa) {
		this.incoming_type_wa = incoming_type_wa;
	}
	public String getIncoming_time_wa() {
		return incoming_time_wa;
	}
	public void setIncoming_time_wa(String incoming_time_wa) {
		this.incoming_time_wa = incoming_time_wa;
	}
	public String getIncoming_stop_wa() {
		return incoming_stop_wa;
	}
	public void setIncoming_stop_wa(String incoming_stop_wa) {
		this.incoming_stop_wa = incoming_stop_wa;
	}
	public String getCrash_send_yn() {
		return crash_send_yn;
	}
	public void setCrash_send_yn(String crash_send_yn) {
		this.crash_send_yn = crash_send_yn;
	}
	public String getFtp_stanby_min() {
		return ftp_stanby_min;
	}
	public void setFtp_stanby_min(String ftp_stanby_min) {
		this.ftp_stanby_min = ftp_stanby_min;
	}
	public String getInfo_sort_type() {
		return info_sort_type;
	}
	public void setInfo_sort_type(String info_sort_type) {
		this.info_sort_type = info_sort_type;
	}
	public String getStatus_sendcycle() {
		return status_sendcycle;
	}
	public void setStatus_sendcycle(String status_sendcycle) {
		this.status_sendcycle = status_sendcycle;
	}
	public String getImage_sendcycle() {
		return image_sendcycle;
	}
	public void setImage_sendcycle(String image_sendcycle) {
		this.image_sendcycle = image_sendcycle;
	}
	public String getCapture_sendcycle() {
		return capture_sendcycle;
	}
	public void setCapture_sendcycle(String capture_sendcycle) {
		this.capture_sendcycle = capture_sendcycle;
	}
	public String getRegist_dt() {
		return regist_dt;
	}
	public void setRegist_dt(String regist_dt) {
		this.regist_dt = regist_dt;
	}
	public String getUpdate_dt() {
		return update_dt;
	}
	public void setUpdate_dt(String update_dt) {
		this.update_dt = update_dt;
	}
	public String getScenario_id() {
		return scenario_id;
	}
	public void setScenario_id(String scenario_id) {
		this.scenario_id = scenario_id;
	}
	public String getBit_cate_id() {
		return bit_cate_id;
	}
	public void setBit_cate_id(String bit_cate_id) {
		this.bit_cate_id = bit_cate_id;
	}
	public String getInstall_stop_id() {
		return install_stop_id;
	}
	public void setInstall_stop_id(String install_stop_id) {
		this.install_stop_id = install_stop_id;
	}
	public String getProvide_group_id() {
		return provide_group_id;
	}
	public void setProvide_group_id(String provide_group_id) {
		this.provide_group_id = provide_group_id;
	}
	public String getFont_size() {
		return font_size;
	}
	public void setFont_size(String font_size) {
		this.font_size = font_size;
	}
	public String getIcon_position() {
		return icon_position;
	}
	public void setIcon_position(String icon_position) {
		this.icon_position = icon_position;
	}
	public String getBusiness_id() {
		return business_id;
	}
	public void setBusiness_id(String business_id) {
		this.business_id = business_id;
	}
	public String getUse_flag() {
		return use_flag;
	}
	public void setUse_flag(String use_flag) {
		this.use_flag = use_flag;
	}
	public String getBit_install_type() {
		return bit_install_type;
	}
	public void setBit_install_type(String bit_install_type) {
		this.bit_install_type = bit_install_type;
	}
	public String getCompany_id() {
		return company_id;
	}
	public void setCompany_id(String company_id) {
		this.company_id = company_id;
	}
	public String getData_explain() {
		return data_explain;
	}
	public void setData_explain(String data_explain) {
		this.data_explain = data_explain;
	}
	public String getArea_code() {
		return area_code;
	}
	public void setArea_code(String area_code) {
		this.area_code = area_code;
	}
	public String getTemperature() {
		return temperature;
	}
	public void setTemperature(String temperature) {
		this.temperature = temperature;
	}
	public String getHumidity() {
		return humidity;
	}
	public void setHumidity(String humidity) {
		this.humidity = humidity;
	}
	public String getFan_state() {
		return fan_state;
	}
	public void setFan_state(String fan_state) {
		this.fan_state = fan_state;
	}
	public String getHeater_state() {
		return heater_state;
	}
	public void setHeater_state(String heater_state) {
		this.heater_state = heater_state;
	}
	public String getDoor_state() {
		return door_state;
	}
	public void setDoor_state(String door_state) {
		this.door_state = door_state;
	}
	public String getIllumination_state() {
		return illumination_state;
	}
	public void setIllumination_state(String illumination_state) {
		this.illumination_state = illumination_state;
	}
	public String getMemory_usage() {
		return memory_usage;
	}
	public void setMemory_usage(String memory_usage) {
		this.memory_usage = memory_usage;
	}
	public String getAction_detect_state() {
		return action_detect_state;
	}
	public void setAction_detect_state(String action_detect_state) {
		this.action_detect_state = action_detect_state;
	}
	public String getComm_state() {
		return comm_state;
	}
	public void setComm_state(String comm_state) {
		this.comm_state = comm_state;
	}
	public String getDisp_state() {
		return disp_state;
	}
	public void setDisp_state(String disp_state) {
		this.disp_state = disp_state;
	}
	public String getCam_state() {
		return cam_state;
	}
	public void setCam_state(String cam_state) {
		this.cam_state = cam_state;
	}
	public String getCrash_state() {
		return crash_state;
	}
	public void setCrash_state(String crash_state) {
		this.crash_state = crash_state;
	}
	public String getServer_id() {
		return server_id;
	}
	public void setServer_id(String server_id) {
		this.server_id = server_id;
	}
	public String getCate_name() {
		return cate_name;
	}
	public void setCate_name(String cate_name) {
		this.cate_name = cate_name;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getBusiness_title() {
		return business_title;
	}
	public void setBusiness_title(String business_title) {
		this.business_title = business_title;
	}
	public String getSt_date() {
		return st_date;
	}
	public void setSt_date(String st_date) {
		this.st_date = st_date;
	}
	public String getEd_date() {
		return ed_date;
	}
	public void setEd_date(String ed_date) {
		this.ed_date = ed_date;
	}
	public String getConstructor() {
		return constructor;
	}
	public void setConstructor(String constructor) {
		this.constructor = constructor;
	}
	public String getBusiness_year() {
		return business_year;
	}
	public void setBusiness_year(String business_year) {
		this.business_year = business_year;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getTel_number() {
		return tel_number;
	}
	public void setTel_number(String tel_number) {
		this.tel_number = tel_number;
	}
	public String getRegist_user_id() {
		return regist_user_id;
	}
	public void setRegist_user_id(String regist_user_id) {
		this.regist_user_id = regist_user_id;
	}
	public String getLast_version() {
		return last_version;
	}
	public void setLast_version(String last_version) {
		this.last_version = last_version;
	}
	public String getScenario_ord() {
		return scenario_ord;
	}
	public void setScenario_ord(String scenario_ord) {
		this.scenario_ord = scenario_ord;
	}
	public String getDisp_st_dt() {
		return disp_st_dt;
	}
	public void setDisp_st_dt(String disp_st_dt) {
		this.disp_st_dt = disp_st_dt;
	}
	public String getDisp_ed_dt() {
		return disp_ed_dt;
	}
	public void setDisp_ed_dt(String disp_ed_dt) {
		this.disp_ed_dt = disp_ed_dt;
	}
	public String getDisp_time() {
		return disp_time;
	}
	public void setDisp_time(String disp_time) {
		this.disp_time = disp_time;
	}
	public String getDisp_data_id() {
		return disp_data_id;
	}
	public void setDisp_data_id(String disp_data_id) {
		this.disp_data_id = disp_data_id;
	}
	public String getData_version() {
		return data_version;
	}
	public void setData_version(String data_version) {
		this.data_version = data_version;
	}
	public String getDisp_data_type() {
		return disp_data_type;
	}
	public void setDisp_data_type(String disp_data_type) {
		this.disp_data_type = disp_data_type;
	}
	public String getDisp_data_filename() {
		return disp_data_filename;
	}
	public void setDisp_data_filename(String disp_data_filename) {
		this.disp_data_filename = disp_data_filename;
	}
	public String getServer_name() {
		return server_name;
	}
	public void setServer_name(String server_name) {
		this.server_name = server_name;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public String getOk() {
		return ok;
	}
	public void setOk(String ok) {
		this.ok = ok;
	}
	public String getErr() {
		return err;
	}
	public void setErr(String err) {
		this.err = err;
	}
	public String getServer_state() {
		return server_state;
	}
	public void setServer_state(String server_state) {
		this.server_state = server_state;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
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
	public String getCom_status() {
		return com_status;
	}
	public void setCom_status(String com_status) {
		this.com_status = com_status;
	}
	public String getStop_name() {
		return stop_name;
	}
	public void setStop_name(String stop_name) {
		this.stop_name = stop_name;
	}
	public String getAdm_district_id() {
		return adm_district_id;
	}
	public void setAdm_district_id(String adm_district_id) {
		this.adm_district_id = adm_district_id;
	}
	public String getBit_type_name() {
		return bit_type_name;
	}
	public void setBit_type_name(String bit_type_name) {
		this.bit_type_name = bit_type_name;
	}
	public String getService_id() {
		return service_id;
	}
	public void setService_id(String service_id) {
		this.service_id = service_id;
	}
	public String getSystem_name() {
		return system_name;
	}
	public void setSystem_name(String system_name) {
		this.system_name = system_name;
	}
	public String getStop_id() {
		return stop_id;
	}
	public void setStop_id(String stop_id) {
		this.stop_id = stop_id;
	}
	public String getLocal_id() {
		return local_id;
	}
	public void setLocal_id(String local_id) {
		this.local_id = local_id;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getBit_install_type_name() {
		return bit_install_type_name;
	}
	public void setBit_install_type_name(String bit_install_type_name) {
		this.bit_install_type_name = bit_install_type_name;
	}
	public String getBit_no() {
		return bit_no;
	}
	public void setBit_no(String bit_no) {
		this.bit_no = bit_no;
	}
	public String getCode_explain() {
		return code_explain;
	}
	public void setCode_explain(String code_explain) {
		this.code_explain = code_explain;
	}
	public String getView_flag() {
		return view_flag;
	}
	public void setView_flag(String view_flag) {
		this.view_flag = view_flag;
	}
	public String getMinLat() {
		return minLat;
	}
	public void setMinLat(String minLat) {
		this.minLat = minLat;
	}
	public String getMaxLat() {
		return maxLat;
	}
	public void setMaxLat(String maxLat) {
		this.maxLat = maxLat;
	}
	public String getMinLng() {
		return minLng;
	}
	public void setMinLng(String minLng) {
		this.minLng = minLng;
	}
	public String getMaxLng() {
		return maxLng;
	}
	public void setMaxLng(String maxLng) {
		this.maxLng = maxLng;
	}
}
