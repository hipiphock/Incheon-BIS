package com.bis.soc;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.bis.comm.BodyChangeParam;
import com.bis.comm.BodyCtrlStatus;
import com.bis.comm.BodyDownload;
import com.bis.comm.BodyNotice;
import com.bis.comm.ext.BodyChangeParamExt;
import com.bis.comm.ext.BodyControlBitExt;
import com.bis.comm.ext.BodyLcdDownloadExt;
import com.bis.comm.ext.BodyLedDownloadExt;
import com.bis.comm.prev.BodyChangeParamPrev;
import com.bis.comm.prev.BodyControlBitPrev;
import com.bis.comm.prev.BodyLcdDownloadPrev;
import com.bis.comm.prev.BodyLedDownloadPrev;
import com.bis.comm.prev.BodyManualMsgPrev;
import com.bis.comm.wide.BodyControlWide;
import com.bis.comm.wide.BodyDownloadWide;
import com.bis.prop.GrobalProps;
import com.bis.service.BitService;
import com.bis.util.Const;
import com.bis.util.FtpUtil;
import com.bis.vo.re.TbBitScenarioVO;
import com.bis.vo.re.TbIscBitmsgVO;
import com.bis.vo.re.TbNewBitparamVO;
import com.bis.vo.re.TbOmcBitctrlVO;

public class CommServlet extends HttpServlet {
    
    private static final long serialVersionUID = 1L;

    private Logger logger = LogManager.getLogger(this.getClass());
    
    static public Map<String,List<ClientMessage>> mMessageMap = new HashMap<String,List<ClientMessage>>();
   
//    private TcpClient relayClient;     //중계 서버
    private UdpClient mUdpClinet;
    private BitService bitService;
    private GrobalProps grobalProps;
    
    private int nSR_CNT = 1;
    
    private String mStrIp = null;
    private int mPort = 0;
    public void init(ServletConfig config) throws ServletException {
	    
		ServletContext ctx = config.getServletContext();
	    WebApplicationContext webContext = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
	    
	    grobalProps = (GrobalProps)webContext.getBean("propertyHolder");
	    bitService = (BitService)webContext.getBean("bitService");
	 
	    try {
	    	mStrIp = grobalProps.getRelayIp();
	    	mPort = Integer.valueOf(grobalProps.getRelayPort());
	    	
//	    	relayClient = new TcpClient(mStrIp, mPort);
	    	
	    	mUdpClinet = new UdpClient(mStrIp, mPort);
	    	mUdpClinet.InitSocket(mStrIp, mPort,mPort-1);
	    	
		} catch (Exception e) {
			System.out.println("## init except " + e.toString());
		}
	    connect();
	}
    
    public void connect() {
    	System.out.println("#############################################################################");
    	System.out.println("################## [통신 SERVLET START ] ######################################");
    	System.out.println("#############################################################################");
        
//        Thread thread = new Thread(relayClient);
//        thread.start();
    }
    /**************************
     * URL
     * 파라미터전송     : param.soc
     * 상태제어           : reset.soc
     * 시나리오(공지): scenario.soc
     **************************/
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
    	
    	String reqUrl = req.getRequestURI();
        System.out.println("## reqUrl : " + reqUrl);
        
        if(reqUrl.contains("param.soc")) {  //파라미터 전송
        	reqBitParameter(req, resp);
    	}else if(reqUrl.contains("paramCtrl.soc")) { //제어
    		reqBitCtrl(req, resp);
    	}else if(reqUrl.contains("reset.soc")) { //reset
    		reqBitReset(req, resp);
    	}else if(reqUrl.contains("scenario.soc")) { //시나리오
    		reqBitScenario(req, resp);
    	}else if(reqUrl.contains("download.soc")) { //파일다운로드
    		reqFileDownload(req, resp);
    	}else if(reqUrl.contains("msgDownload.soc")) { //수동메시지 다운로드
    		reqMsgDownload(req, resp);
    	}
    }
    
    /****************
     * 파라미터 전송 
     ***************/
    protected void reqBitParameter(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
    	String strIds = req.getParameter("bitid"); 
    	String paramId = req.getParameter("paramid");
//    	String strBitTps = req.getParameter("bittp");
    	String servertp = req.getParameter("servertp");
    	
    	System.out.println("### strIds : " + strIds);
    	System.out.println("### paramId : " + paramId);
    	
    	TbNewBitparamVO vo = new TbNewBitparamVO();
    	vo.setParamid(paramId);
    	vo.setServertp(servertp);
    	TbNewBitparamVO reqVO = null;
    	
    	try {
			reqVO = bitService.selectBitParam(vo);
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
    	int serverId = Integer.valueOf(servertp);
    	
    	if(servertp.equals("121") || servertp.equals("125")) {  //인천
    		System.out.println("##인천 파라미터");
    		
           	String[] arrIds = strIds.split(",");
           	
//        	String[] arrBitTp = strBitTps.split(","); //LCD, LED 구분
        	for(int  i=0 ;i<arrIds.length;i++) {
        		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
        		BodyChangeParamPrev packet = new BodyChangeParamPrev(nSR_CNT++);
	    		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
	    		packet.setRETRY_CNT           ((byte)(Integer.valueOf(reqVO.getComm_retrycnt()) & 0xff));
	    		packet.setTIME_OUT            ((byte)(Integer.valueOf(reqVO.getComm_tmout())& 0xff));
	    		packet.setSCREEN_ON           (Integer.valueOf(reqVO.getDisp_onhms().substring(0,4)));  
	    		packet.setSCREEN_OFF          (Integer.valueOf(reqVO.getDisp_offhms().substring(0,4))); 
	    		packet.setROTATION			 ((byte)(Integer.valueOf(reqVO.getDispcycl()) & 0xff));
	    		packet.setFAN_TEMP_LED       ((byte)(Integer.valueOf(reqVO.getFan_temper()) & 0xff));
	    		packet.setHEATER_TEMP_LED    ((byte)(Integer.valueOf(reqVO.getHeat_temper()) & 0xff));
	    		packet.setBUSINFO_FONT_LED    (Integer.valueOf(reqVO.getRoute_font()),Integer.valueOf(reqVO.getArrive_font()),Integer.valueOf(reqVO.getBstop_font()));  
	    		packet.setBUSINFO_COLOR_LED   (Integer.valueOf(reqVO.getRoute_fontcolor()),Integer.valueOf(reqVO.getArrive_fontcolor()),Integer.valueOf(reqVO.getBstop_fontcolor()));  
	    		packet.setFAN_TEMP_LCD        (Integer.valueOf(reqVO.getLcd_fan_temper()),Integer.valueOf(reqVO.getLcd_fan_temper_1())); 
	    		packet.setHEATER_TEMP_LCD     (Integer.valueOf(reqVO.getLcd_heat_temper()),Integer.valueOf(reqVO.getLcd_heat_temper_1())); 
	    		
	    		packet.setVOLUME_LCD(Integer.valueOf(reqVO.getVolume_day_hms().substring(0,4)), Integer.valueOf(reqVO.getDay_volume())
	    							, Integer.valueOf(reqVO.getVolume_night_hms().substring(0,4)), Integer.valueOf(reqVO.getNight_volume()));
	    		packet.setBRIGHTNESS_LCD(Integer.valueOf(reqVO.getBright_day_hms().substring(0,4)),Integer.valueOf(reqVO.getDay_bright())
	    				,Integer.valueOf(reqVO.getBright_night_hms().substring(0,4)),Integer.valueOf(reqVO.getNight_bright())); 
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);
        	}    		
    		
    	}else if(servertp.equals("122")) { //인천 확대
    		System.out.println("##확대 파라미터");
           	String[] arrIds = strIds.split(",");
//        	String[] arrBitTp = strBitTps.split(","); //LCD, LED 구분
        	for(int  i=0 ;i<arrIds.length;i++) {
        		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
	    		BodyChangeParamExt packet = new BodyChangeParamExt(nSR_CNT++);
	    		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
	    		packet.setRETRY_CNT           ((byte)(Integer.valueOf(reqVO.getComm_retrycnt()) & 0xff));
	    		packet.setTIME_OUT            ((byte)(Integer.valueOf(reqVO.getComm_tmout())& 0xff));
	    		packet.setSCREEN_ON           (Integer.valueOf(reqVO.getDisp_onhms().substring(0,4)));  
	    		packet.setSCREEN_OFF          (Integer.valueOf(reqVO.getDisp_offhms().substring(0,4))); 
	    		packet.setROTATION			 ((byte)(Integer.valueOf(reqVO.getDispcycl()) & 0xff));
	    		packet.setFAN_TEMP_LED       ((byte)(Integer.valueOf(reqVO.getFan_temper()) & 0xff));
	    		packet.setHEATER_TEMP_LED    ((byte)(Integer.valueOf(reqVO.getHeat_temper()) & 0xff));
	    		packet.setBUSINFO_FONT_LED    (Integer.valueOf(reqVO.getRoute_font()),Integer.valueOf(reqVO.getArrive_font()),Integer.valueOf(reqVO.getBstop_font()));  
	    		packet.setBUSINFO_COLOR_LED   (Integer.valueOf(reqVO.getRoute_fontcolor()),Integer.valueOf(reqVO.getArrive_fontcolor()),Integer.valueOf(reqVO.getBstop_fontcolor()));  
	    		packet.setFAN_TEMP_LCD        (Integer.valueOf(reqVO.getLcd_fan_temper()),Integer.valueOf(reqVO.getLcd_fan_temper_1())); 
	    		packet.setHEATER_TEMP_LCD     (Integer.valueOf(reqVO.getLcd_heat_temper()),Integer.valueOf(reqVO.getLcd_heat_temper_1())); 
	    		
	    		packet.setVOLUME_LCD(Integer.valueOf(reqVO.getVolume_day_hms().substring(0,4)), Integer.valueOf(reqVO.getDay_volume())
	    							, Integer.valueOf(reqVO.getVolume_night_hms().substring(0,4)), Integer.valueOf(reqVO.getNight_volume()));
	    		packet.setBRIGHTNESS_LCD(Integer.valueOf(reqVO.getBright_day_hms().substring(0,4)),Integer.valueOf(reqVO.getDay_bright())
	    				,Integer.valueOf(reqVO.getBright_night_hms().substring(0,4)),Integer.valueOf(reqVO.getNight_bright())); 
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);
        		
        	}
    		
    	}else { //신규 120
    		BodyChangeParam packet = new BodyChangeParam(nSR_CNT++);
        	String[] arrIds = strIds.split(",");
//        	String[] arrBitTp = strBitTps.split(","); //LCD, LED 구분
        	
        	System.out.println("# serverId "+ serverId);
        	for(int  i=0 ;i<arrIds.length;i++) {
        		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
        		packet.cHeader.setRECEIVER_ID((short)serverId);
        		packet.mHeader.setDEVICE_ID(Integer.valueOf(arrIds[i]));
        		packet.setSEND_DATE(Integer.valueOf(Common.GetDate()));
        		packet.setSEND_TIME(Integer.valueOf(Common.GetTime()));
//        		char []param = new char[8];
        		packet.setPARAM_MNUMBER(reqVO.getParamid().toCharArray());  
        	
        		int vol = Integer.valueOf(reqVO.getE_volume());
        		packet.setVOLUME((byte)vol);                          
        		
        		int incomeType = Integer.valueOf(reqVO.getE_incoming_type());
        		packet.setARRIVE_TERMS((byte)incomeType); 
        		
        		int incomeTime = Integer.valueOf(reqVO.getE_incoming_time());
        		packet.setTERMS_SECOND((short)incomeTime);	
        		
        		int incomeStop = Integer.valueOf(reqVO.getE_incoming_stop());
        		packet.setTERMS_STOP_CNT((short)incomeStop);     
        		
        		int monitorOn = Integer.valueOf(reqVO.getE_monitor_on());
        		packet.setMONITOR_ON_TIME((short)monitorOn); 	
        		
        		int monitorOff = Integer.valueOf(reqVO.getE_monitor_off());
        		packet.setMONITOR_OFF_TIME((short)monitorOff); 	
        		
        		int statusCy = Integer.valueOf(reqVO.getE_send_status_cycle());
        		packet.setPERIOD_SEND_STATUS((short)statusCy); 	
        		
        		packet.setPERIOD_SEND_WEB_CAM((short)300); 	//default
        		
        		int captureCy = Integer.valueOf(reqVO.getE_send_capture_cycle());
        		packet.setPERIOD_SEND_SCREEN_CAPTURE((short)captureCy); 	
        		
        		int orderType = Integer.valueOf(reqVO.getE_bit_sort_type());
        		packet.setBIT_ORDER_INFO((byte)orderType);
        		
        		int volumeYn = Integer.valueOf(reqVO.getE_volume_yn());
        		packet.setBIT_VOICE_SWITCH((byte)volumeYn);
        		
        		packet.setVIEW_TIME_TRAFFIC_INFO((byte)2); //default		
        		packet.setVIEW_TRAFFIC_INFO((byte)1);  //default 	
        		
        		int scenarioT = Integer.valueOf(reqVO.getE_scenario_time());
        		packet.setPROMO_IMG_VIEW_TIME((short)scenarioT); 	
        		
        		int arrivalT = Integer.valueOf(reqVO.getE_arrv_info_time());
        		packet.setPROMO_IMG_STANDBY_TIME((short)arrivalT);
        		
        		packet.setMOTION_SENSOR_USE_YN((byte)0); //default		
        		packet.setSHOCK_SENSOR_USE_YN((byte)1); //충격감지영상 사용 여부		
        		packet.setMOTION_SENSOR_USE_TIME((short)1); //default
        		
        		int fanMax = Integer.valueOf(reqVO.getE_fan_max_temper());
        		packet.setFAN_MAX((byte)fanMax); 	
        		
        		int fanMin = Integer.valueOf(reqVO.getE_fan_min_temper());
        		packet.setFAN_MIN((byte)fanMin); 					      
        		
        		int heaterMax = Integer.valueOf(reqVO.getE_heater_max_temper());
        		packet.setHEATER_MAX((byte)heaterMax); 					  
        		
        		int heaterMin = Integer.valueOf(reqVO.getE_heater_min_temper());
        		packet.setHEATER_MIN((byte)heaterMin); 					  
        		
        		packet.setVIEW_WEATHER((byte)1); 		//default 			  
        		packet.setVIEW_NEWS((byte) 1);    //default
        		
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);
        		
        		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
        		resultVO.setBitid(arrIds[i]);
        		resultVO.setParamid(reqVO.getParamid());
        		resultVO.setCtrltpcd("2"); 
        		resultVO.setSndrsltcd("2");

        		try {
    				bitService.insertBitCtrlResult(resultVO);
    			} catch (SQLException e) {
    				logger.error("파라미터 전송 result insert SQLException " + e.toString());
    			}
        	}   
    	}
    	
    	
    	
    	
    	JSONObject obj = new JSONObject();
    	obj.put("result",Const.SQL_SUCCESS);
		resp.setContentType("application/x-json; charset=UTF-8");
		try {
			resp.getWriter().print(obj);
		} catch (IOException e) {
			logger.error("파라미터 전송 resp write IOException " + e.toString());
			System.out.println("###### 파라미터 err " + e.toString());
		}    	
   	}
    
    /****************
     * 파라미터 제어
     ***************/
    protected void reqBitCtrl(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
    	
    	String servertp = req.getParameter("servertp");
    	String strIds = req.getParameter("bitid"); 
    	
    	String[] arrIds = strIds.split(",");
    	System.out.println("### strIds : " + strIds);
    	
    	int serverId = Integer.valueOf(servertp);
    	
    	if(servertp.equals("121") || servertp.equals("125")) {  //인천
    		System.out.println("##인천 제어");
    		int nVal1 = 0,nVal2 =0,nVal3= 0 ;
        	for(int  i=0 ;i<arrIds.length;i++) {
        		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
        		
        		
        		BodyControlBitPrev packet = new BodyControlBitPrev(nSR_CNT++);
	    		
        		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
	    		nVal1 = Integer.valueOf(req.getParameter("i_reset"));
	    		System.out.println("### i_reset : " + nVal1); 
	    		packet.setRESET(nVal1);
	    		nVal1 = Integer.valueOf(req.getParameter("i_power_mode"));
	    		System.out.println("### i_power_mode : " + nVal1); 
	    		nVal2 = Integer.valueOf(req.getParameter("i_monitor_onoff"));
	    		System.out.println("### i_monitor_onoff : " + nVal2); 
	    		packet.setSCREEN(nVal1, nVal2); // 수동일때 값 올라와야 함
	    		nVal1 = Integer.valueOf(req.getParameter("i_fan_mode"));
	    		nVal2 = Integer.valueOf(req.getParameter("i_fan_onoff"));
	    		packet.setFAN(nVal1, nVal2);
	    		nVal1 = Integer.valueOf(req.getParameter("i_heater_mode"));
	    		nVal1 = Integer.valueOf(req.getParameter("i_heater_onoff"));
	    		packet.setHEATER(nVal1, nVal2);
	    		
	    		nVal1 = Integer.valueOf(req.getParameter("i_light_mode"));
	    		nVal2 = Integer.valueOf(req.getParameter("i_light_value"));
	    		nVal3 = Integer.valueOf(req.getParameter("i_led_light"));
	    		if(req.getParameter("i_led_light").equalsIgnoreCase("LCD"))
	    			packet.setBRIGHTNESS(nVal1, nVal2);
	    		else
	    			packet.setBRIGHTNESS(nVal1, nVal3);
	    		nVal1 = Integer.valueOf(req.getParameter("i_volume_mode"));
	    		nVal2 = Integer.valueOf(req.getParameter("i_volume"));
	    		packet.setVOLUME(nVal1, (short) nVal2);
	    		
	
	    		nVal1 = Integer.valueOf(req.getParameter("i_lcs_operCtrl"));
	    		
	    		packet.setRESTART((byte) nVal1);
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);    
        		
        		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
        		resultVO.setBitid(arrIds[i]);
//        		resultVO.setParamid(reqVO.getParamid());
        		resultVO.setCtrltpcd("1"); 
        		resultVO.setSndrsltcd("2");

        		try {
    				bitService.insertBitCtrlResult(resultVO);
    			} catch (SQLException e) {
    				logger.error("파라미터 전송 result insert SQLException " + e.toString());
    			}
        	}
    	}else if(servertp.equals("122")) { //인천 확대
    		System.out.println("##확대 제어");
    		int nVal1 = 0,nVal2 =0,nVal3= 0 ;
        	for(int  i=0 ;i<arrIds.length;i++) {
        		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
        		
        		BodyControlBitExt packet = new BodyControlBitExt(nSR_CNT++);
	    		
        		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
	    		nVal1 = Integer.valueOf(req.getParameter("i_reset"));
	    		packet.setRESET(nVal1);
	    		nVal1 = Integer.valueOf(req.getParameter("i_power_mode"));
	    		nVal2 = Integer.valueOf(req.getParameter("i_monitor_onoff"));
	    		packet.setSCREEN(nVal1, nVal2); // 수동일때 값 올라와야 함
	    		nVal1 = Integer.valueOf(req.getParameter("i_fan_mode"));
	    		nVal2 = Integer.valueOf(req.getParameter("i_fan_onoff"));
	    		packet.setFAN(nVal1, nVal2);
	    		nVal1 = Integer.valueOf(req.getParameter("i_heater_mode"));
	    		nVal1 = Integer.valueOf(req.getParameter("i_heater_onoff"));
	    		packet.setHEATER(nVal1, nVal2);
	    		
	    		nVal1 = Integer.valueOf(req.getParameter("i_light_mode"));
	    		nVal2 = Integer.valueOf(req.getParameter("i_light_value"));
	    		nVal3 = Integer.valueOf(req.getParameter("i_led_light"));
	    		if(req.getParameter("i_led_light").equalsIgnoreCase("LCD"))
	    			packet.setBRIGHTNESS(nVal1, nVal2);
	    		else
	    			packet.setBRIGHTNESS(nVal1, nVal3);
	    		nVal1 = Integer.valueOf(req.getParameter("i_volume_mode"));
	    		nVal2 = Integer.valueOf(req.getParameter("i_volume"));
	    		packet.setVOLUME(nVal1, (short) nVal2);
	
	    		nVal1 = Integer.valueOf(req.getParameter("i_lcs_operCtrl"));
	    		
	    		packet.setRESTART((byte) nVal1);
	       		
	       		nVal1 = Integer.valueOf(req.getParameter("i_tts_volume"));
	       		packet.setTTS_VOL(0, nVal1);
	       		nVal1 = Integer.valueOf(req.getParameter("i_kr"));
	      		nVal2 = Integer.valueOf(req.getParameter("i_en"));
	      		nVal3 = Integer.valueOf(req.getParameter("i_ch"));
	      		packet.setTTS_CNT((byte)nVal1, (byte)nVal2, (byte)nVal3);
	      		
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);
        		
        		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
        		resultVO.setBitid(arrIds[i]);
//        		resultVO.setParamid(reqVO.getParamid());
        		resultVO.setCtrltpcd("1"); 
        		resultVO.setSndrsltcd("2");

        		try {
    				bitService.insertBitCtrlResult(resultVO);
    			} catch (SQLException e) {
    				logger.error("파라미터 전송 result insert SQLException " + e.toString());
    			}
        		
        	}    		
    	}else if(servertp.equals("123")) { //광역
//    		bitid              : ids,
//			servertp           : type,
//			opcode1            : codes[1],
//			opcode2            : codes[2],
//			value              : val
    		String opcode1 = req.getParameter("opcode1");
    		String opcode2 = req.getParameter("opcode2"); //0x8e 에만 해당
    		String value = req.getParameter("value"); // "_" 로 구분
    		
    		System.out.println(" opcode1  =" +opcode1 );
    		System.out.println(" opcode2  =" +Integer.parseInt(opcode2) );
    		System.out.println(" value  =" +value );
    		
			for(int  i=0 ;i<arrIds.length;i++) {
				BodyControlWide packet = new BodyControlWide(nSR_CNT++);
        		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
        		
				if(opcode1.equalsIgnoreCase("0x8E")) {
					packet.SetCtrlValue(Integer.parseInt(opcode2),Integer.parseInt(value));
				} else if(opcode1.equalsIgnoreCase("0x8F")) {
					packet.SetCtrlReset(Integer.parseInt(value));
				} else if(opcode1.equalsIgnoreCase("0x92")) {
					packet.SetLanguage(Integer.parseInt(value));
				} else if(opcode1.equalsIgnoreCase("0x99")) {
					packet.SetTemperature(Integer.parseInt(value));
				} else if(opcode1.equalsIgnoreCase("0x9C")) {
					String[] values = value.split("_");
					packet.SetLcdOnOff(Integer.parseInt(values[0]),Integer.parseInt(values[1]));
				} else {
					System.out.println("invalid opcode1  =  " +opcode1 );
					continue;
				}
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);  	
        		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
        		resultVO.setBitid(arrIds[i]);
//        		resultVO.setParamid(reqVO.getParamid());
        		resultVO.setCtrltpcd("1"); 
        		resultVO.setSndrsltcd("2");

        		try {
    				bitService.insertBitCtrlResult(resultVO);
    			} catch (SQLException e) {
    				logger.error("파라미터 전송 result insert SQLException " + e.toString());
    			}        		
			}
    		
    	}else { //신규 120, 126
    		BodyChangeParam packet = new BodyChangeParam(nSR_CNT++);
        	
        	for(int  i=0 ;i<arrIds.length;i++) {
        		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
        		packet.cHeader.setRECEIVER_ID((short)serverId);
        		packet.mHeader.setDEVICE_ID(Integer.valueOf(arrIds[i]));
        		packet.setSEND_DATE(Integer.valueOf(Common.GetDate()));
        		packet.setSEND_TIME(Integer.valueOf(Common.GetTime()));
//        		char []param = new char[8];
        		packet.setPARAM_MNUMBER("00000000".toCharArray());  
        		
        		int vol = Integer.valueOf(req.getParameter("e_volume"));
        		packet.setVOLUME((byte)vol);                          
        		
        		int incomeType = Integer.valueOf(req.getParameter("e_incoming_type"));
        		packet.setARRIVE_TERMS((byte)incomeType); 
        		
        		int incomeTime = Integer.valueOf(req.getParameter("e_incoming_time"));
        		packet.setTERMS_SECOND((short)incomeTime);	
        		
        		int incomeStop = Integer.valueOf(req.getParameter("e_incoming_stop"));
        		packet.setTERMS_STOP_CNT((short)incomeStop);     
        		
        		int monitorOn = Integer.valueOf(req.getParameter("e_monitor_on"));
        		packet.setMONITOR_ON_TIME((short)monitorOn); 	
        		
        		int monitorOff = Integer.valueOf(req.getParameter("e_monitor_off"));
        		packet.setMONITOR_OFF_TIME((short)monitorOff); 	
        		
        		int statusCy = Integer.valueOf(req.getParameter("e_send_status_cycle"));
        		packet.setPERIOD_SEND_STATUS((short)statusCy); 	
        		
        		packet.setPERIOD_SEND_WEB_CAM((short)300); 	//default
        		
        		int captureCy = Integer.valueOf(req.getParameter("e_send_capture_cycle"));
        		packet.setPERIOD_SEND_SCREEN_CAPTURE((short)captureCy); 	
        		
        		int orderType = Integer.valueOf(req.getParameter("e_bit_sort_type"));
        		packet.setBIT_ORDER_INFO((byte)orderType);
        		
        		int volumeYn = Integer.valueOf(req.getParameter("e_volume_yn"));
        		packet.setBIT_VOICE_SWITCH((byte)volumeYn);
        		
        		packet.setVIEW_TIME_TRAFFIC_INFO((byte)2); //default		
        		packet.setVIEW_TRAFFIC_INFO((byte)1);  //default 	
        		
        		int scenarioT = Integer.valueOf(req.getParameter("e_scenario_time"));
        		packet.setPROMO_IMG_VIEW_TIME((short)scenarioT); 	
        		
        		int arrivalT = Integer.valueOf(req.getParameter("e_arrv_info_time"));
        		packet.setPROMO_IMG_STANDBY_TIME((short)arrivalT);
        		
        		packet.setMOTION_SENSOR_USE_YN((byte)0); //default		
        		packet.setSHOCK_SENSOR_USE_YN((byte)1); //충격감지영상 사용 여부		
        		packet.setMOTION_SENSOR_USE_TIME((short)1); //default
        		
        		int fanMax = Integer.valueOf(req.getParameter("e_fan_max_temper"));
        		packet.setFAN_MAX((byte)fanMax); 	
        		
        		int fanMin = Integer.valueOf(req.getParameter("e_fan_min_temper"));
        		packet.setFAN_MIN((byte)fanMin); 					      
        		
        		int heaterMax = Integer.valueOf(req.getParameter("e_heater_max_temper"));
        		packet.setHEATER_MAX((byte)heaterMax); 					  
        		
        		int heaterMin = Integer.valueOf(req.getParameter("e_heater_min_temper"));
        		packet.setHEATER_MIN((byte)heaterMin); 					  
        		
        		packet.setVIEW_WEATHER((byte)1); 		//default 			  
        		packet.setVIEW_NEWS((byte) 1);    //default
        		
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);
        		
        		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
        		resultVO.setBitid(arrIds[i]);
//        		resultVO.setParamid(reqVO.getParamid());
        		resultVO.setCtrltpcd("1"); 
        		resultVO.setSndrsltcd("2");

        		try {
    				bitService.insertBitCtrlResult(resultVO);
    			} catch (SQLException e) {
    				logger.error("파라미터 전송 result insert SQLException " + e.toString());
    			}
        	}
    	}
    	
    	JSONObject obj = new JSONObject();
    	obj.put("result",Const.SQL_SUCCESS);
		resp.setContentType("application/x-json; charset=UTF-8");
		try {
			resp.getWriter().print(obj);
		} catch (IOException e) {
			logger.error("파라미터 전송 resp write IOException " + e.toString());
			System.out.println("###### 파라미터 err " + e.toString());
		}    	
   	}
    
    
    /****************
     * 리셋 요청 
     ***************/
    protected void reqBitReset(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
    	
    	String strIds = req.getParameter("bitid"); 
    	String sysCtrl = req.getParameter("system"); //0:변화없음, 1:리셋
    	String lcdCtrl = req.getParameter("lcd");    //0: off, 1: on
    	
    	String serverType = req.getParameter("servertp");
    	
    	int serverId = Integer.valueOf(serverType);
    	
    	System.out.println("### strIds : " + strIds);
    	System.out.println("### sysCtrl : " + sysCtrl);
    	System.out.println("### lcdCtrl : " + lcdCtrl);
    	
    	if(serverType.equals("120") || serverType.equals("126")) {
    		BodyCtrlStatus packet = new BodyCtrlStatus(nSR_CNT++);
        	String[] arrIds = strIds.split(",");
        	for(int  i=0 ;i<arrIds.length;i++) {
        		
        		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
        		packet.cHeader.setRECEIVER_ID((short)serverId);
        		packet.mHeader.setDEVICE_ID(Integer.valueOf(arrIds[i]));
        		packet.setSYSTEM_CTRL((byte) (0xff&Integer.valueOf(sysCtrl)));
        		packet.setLCD_CTRL((byte) (0xff&Integer.valueOf(lcdCtrl)));
        		packet.setSEND_DATE(Integer.valueOf(Common.GetDate()));
        		packet.setSEND_TIME(Integer.valueOf(Common.GetTime()));
        		packet.sendPacket(mUdpClinet);

        		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
        		resultVO.setBitid(arrIds[i]);
        		resultVO.setCtrltpcd("1"); 
        		resultVO.setSndrsltcd("2");
        		
        		try {
    				bitService.insertBitCtrlResult(resultVO);
    			} catch (SQLException e) {
    				logger.error("파라미터 전송 result insert SQLException " + e.toString());
    			}
        	}  
    	}else { //광역
    		// sysCtrl << value
//    		0:메인보드 재시동
//    		1:제어보드 재시동
//    		2:BIT 프로세스 제시동
//    		4: 주통신장치 리셋
//    		5: 보조통신장치 리셋
    		
        	String[] arrIds = strIds.split(",");
			for(int  i=0 ;i<arrIds.length;i++) {
				BodyControlWide packet = new BodyControlWide(nSR_CNT++);
        		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
        		packet.SetCtrlReset(Integer.parseInt(sysCtrl));
        		packet.sendPacket(mUdpClinet);
        		
        		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
        		resultVO.setBitid(arrIds[i]);
        		resultVO.setCtrltpcd(sysCtrl); 
        		
        		try {
    				bitService.insertBitCtrlResult(resultVO);
    			} catch (SQLException e) {
    				logger.error("파라미터 전송 result insert SQLException " + e.toString());
    			}
        	}
    		
    	}
    	//TODO 제어이력 작성
//    	CTRLTPCD	1	실시간제어
//    	SNDRSLTCD	0	준비
//    	SNDRSLTCD	1	송신성공
//    	SNDRSLTCD	2	수신성공
//    	SNDRSLTCD	3	송신실패
    	JSONObject obj = new JSONObject();
    	obj.put("result",Const.SQL_SUCCESS);
		resp.setContentType("application/x-json; charset=UTF-8");
		try {
			resp.getWriter().print(obj);
		} catch (IOException e) {
			logger.error("리셋요청 resp write IOException " + e.toString());
		}
   	}
    
    /****************
     * 시나리오 전송 
     ***************/
    protected void reqBitScenario(HttpServletRequest req, HttpServletResponse resp) throws ServletException {

    	String[] arrIds = req.getParameter("bitid").split(","); 
    	String scenarioId = req.getParameter("scenarioid"); 
    	String servertp = req.getParameter("servertp"); 
    
    	int serverId = Integer.valueOf(servertp);
    	System.out.println("### arrIds : " + arrIds[0]);
    	System.out.println("### scenarioId : " + scenarioId);
    	System.out.println("### servertp : " + servertp);
    	
    	
    	try {
    		File file = null; //시나리오 업로드파일
    		FtpUtil ftpUtil = new FtpUtil(grobalProps, Integer.valueOf(servertp));
    		if(serverId == 120 || serverId == 126) {
    			TbBitScenarioVO vo = new TbBitScenarioVO();
        		vo.setSnr_id(scenarioId);
        		vo.setServertp(servertp);
        		List<TbBitScenarioVO> resultList = bitService.selectScenarioDetailList(vo);
        		
        		String txt = "";
        		for(int i=0; i<resultList.size(); i++) {
        			TbBitScenarioVO sc = resultList.get(i);
        			System.out.println("##########################################" );
        			System.out.println("## data type : " + sc.getData_type() +" ## 1:이미지, 2:동영상, 3:텍스트");
        			System.out.println("## disp st_dt : " + sc.getDisp_st_dt() );
        			System.out.println("## disp ed_dt : " + sc.getDisp_ed_dt() );
        			System.out.println("## disp file name : " + sc.getFile_name() );
        			txt += sc.getData_type().trim()+"$"
        			    +  sc.getFile_name()+"$"
        				+  sc.getDisp_st_dt()+"$"
        			    +  sc.getDisp_ed_dt()+System.lineSeparator();
        		}
        		//파일 생성
        		file = new File(grobalProps.getTempfile());
        		if(file.exists()) {
        			file.delete();
        		}
        		try {
    				file.createNewFile();
    				FileWriter fw = new FileWriter(file, true) ;
    				fw.write(txt);
    				fw.flush();
    				fw.close();
    			} catch (IOException e) {
    				System.out.println("## file create except " + e.toString());
    				logger.error("local config 파일 생성  IOException " + e.toString());
    			}
        		if(ftpUtil.login()) {
    		    	for(int i=0; i<arrIds.length; i++){
    		    		boolean success = ftpUtil.makeDirectory("/NOTICE/CONFIG/"+arrIds[i]);
    		    		System.out.println("##makeDirectory "+success+"  " + arrIds[i]);
    		    		ftpUtil.changeDirectory("/NOTICE/CONFIG/"+arrIds[i]);
    		    		ftpUtil.uploadFile("", file, arrIds[i]);
    		    	}
    			}
    		    ftpUtil.logout();
    		    BodyNotice packet = new BodyNotice(nSR_CNT++);
    	    	for(int  i=0 ;i<arrIds.length;i++) {
    	    		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
    	    		packet.cHeader.setRECEIVER_ID((short)serverId);
    	    		packet.mHeader.setDEVICE_ID(Integer.valueOf(arrIds[i]));
    	    		packet.setSEND_DATE(Integer.valueOf(Common.GetDate()));
    	    		packet.setSEND_TIME(Integer.valueOf(Common.GetTime()));
    	    		packet.sendPacket(mUdpClinet);
    	    		
    	    		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
    	    		resultVO.setBitid(arrIds[i]);
    	    		resultVO.setCtrltpcd("1"); 
    	    		resultVO.setSndrsltcd("2");
    	    		
    	    		try {
    					bitService.insertBitCtrlResult(resultVO);
    				} catch (SQLException e) {
    					logger.error("시나리오 전송 result insert SQLException " + e.toString());
    				}
    	    	}   
    		}else {
    			//TODO 광역 시나리오 파일 생성 및 업로드
    			//TODO 패킷 전송
    			
    			for(int  i=0 ;i<arrIds.length;i++) {
    				
    				BodyDownloadWide packet = new BodyDownloadWide(nSR_CNT++);
            		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
            		
            		packet.setCTRL_CODE((byte) 0x00); //0 :download 1: Upload 2: delete
               		packet.setFILE_TYPE((byte) 0x01); // 0 : Master Data 1:scenario 2 :rsc 3:news 4 notice 5 weather 6 ism schedule 100 main app 101 firmware 
               		packet.setFILE_VERSION(Integer.valueOf(scenarioId));
            		packet.setID_MODE((byte) 0x01);// Master Data 일 경우만 사용 0 Full id 1: Mapped ID
            		String filename = "BIS\\DOWN\\SNR\\"+ scenarioId+".BCDB";
            		byte[] fileByte = filename.getBytes();
            		packet.setFILE_LENGTH((byte)(fileByte.length)); //파일명 길이
            		
            		packet.setFILE_NAME(fileByte);

            		System.out.println("Try Send......" + i);
            		packet.sendPacket(mUdpClinet);
            		System.out.println("Try Sended......" + i);  	
            		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
            		resultVO.setBitid(arrIds[i]);
//            		resultVO.setParamid(reqVO.getParamid());
            		resultVO.setCtrltpcd("1"); 
            		resultVO.setSndrsltcd("2");

            		try {
        				bitService.insertBitCtrlResult(resultVO);
        			} catch (SQLException e) {
        				logger.error("파라미터 전송 result insert SQLException " + e.toString());
        			}        		
    			}    			
    		}
    		
    		//TODO 이력 ftp
    		
		    
    		
		} catch (SQLException e) {
			logger.error("시나리오 전송 SQLException " + e.toString());
		} catch (Exception e) {
			logger.error("시나리오 전송 Exception " + e.toString());
		}
    	
    			

    	//TODO 제어이력 작성
//    	CTRLTPCD	1	실시간제어
//    	SNDRSLTCD	0	준비
//    	SNDRSLTCD	1	송신성공
//    	SNDRSLTCD	2	수신성공
//    	SNDRSLTCD	3	송신실패
    	JSONObject obj = new JSONObject();
    	obj.put("result",Const.SQL_SUCCESS);
		resp.setContentType("application/x-json; charset=UTF-8");
		try {
			resp.getWriter().print(obj);
		} catch (IOException e) {
			logger.error("시나리오 전송 resp write IOException " + e.toString());
		}
   	}
    
    /****************
     * 파일 다운로드 요청 
     ***************/
    protected void reqFileDownload(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
		
    	String strIds = req.getParameter("bitid"); 
    	String strTypes = req.getParameter("bittpcd"); 
    	String servertp = req.getParameter("servertp");
    	String filetpcd = req.getParameter("filetpcd");
    	String filever = req.getParameter("filever");
    	String fileloc = req.getParameter("fileloc");
    	String filenm = req.getParameter("filenm");
    	String startdt = req.getParameter("startdt").substring(2);
    	
       	System.out.println("### strIds : " + strIds);
       	System.out.println("### startdt : " + startdt);
		
    	String[] arrIds = strIds.split(",");
    	String[] arrTypes = strTypes.split(",");
    	int serverId = Integer.valueOf(servertp);
    	int fileType = Integer.valueOf(filetpcd);
    	int fileVer = Integer.valueOf(filever);
    	
    	JSONObject obj = new JSONObject();
    	
    	switch (serverId) {
		case 120: //
		case 126:
			for(int  i=0 ; i<arrIds.length; i++) {
				BodyDownload packet = new BodyDownload(nSR_CNT++);
	    		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
	    		packet.cHeader.setRECEIVER_ID((short)serverId);
	    		packet.mHeader.setDEVICE_ID(Integer.valueOf(arrIds[i]));
	    		packet.setSEND_DATE(Integer.valueOf(Common.GetDate()));
	    		packet.setSEND_TIME(Integer.valueOf(Common.GetTime()));
	    		packet.setFILE_TYPE((byte)0x02);
	    		packet.sendPacket(mUdpClinet);

	    		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
	    		resultVO.setBitid(arrIds[i]);
	    		resultVO.setCtrltpcd("1"); 
	    		resultVO.setSndrsltcd("2");
	    		
	    		try {
	    			//TODO TB_OMC_BITUPD 작성
					bitService.insertBitCtrlResult(resultVO);
					obj.put("result",Const.SQL_SUCCESS);
				} catch (SQLException e) {
					obj.put("result",Const.SQL_ERROR);
					logger.error("파일다운로드 result insert SQLException " + e.toString());
				}
	    	}   		
			break;
		case 121: //인천 
		case 125:
			for(int  i=0 ; i<arrIds.length; i++) {
	    		int type = Integer.valueOf(arrTypes[i]);
//	    		 -- 30, 31, 32, 50, 55, 56, 59
	    		if((type >= 30 && type <= 32) || (type == 50 || type == 55 || type == 56 || type == 59)) {
	    			//LED
	    			
	    			BodyLedDownloadPrev packet = new BodyLedDownloadPrev(nSR_CNT++);
		    		System.out.println("# BodyLedDownloadPrev strIds "+ i +" : "  + arrIds[i]);
		    		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
//		    		String fileloc = req.getParameter("fileloc");
//		        	String filenm = req.getParameter("filenm");
//		        	String startdt = req.getParameter("startdt");
		    		String path = "";
		    		if(fileloc.equals("/")) {
		    			path = fileloc+filenm+startdt;
		    		}else {
		    			path = fileloc+"/"+filenm+startdt;
		    		}
		    		packet.setFRAMENUM((byte) 0x01);
		    		packet.setFRAMECNT((byte) 0x01);
		    		packet.setDATACODE(getFileCode(fileType));
		    		packet.setFILENUM((byte) 0x01);
		    		packet.setPATCHDATE(startdt.getBytes());
		    		packet.setDATAFILE(path.getBytes());
		    		packet.sendPacket(mUdpClinet);

	    		}else {
	    			//LCD
	    			BodyLcdDownloadPrev packet = new BodyLcdDownloadPrev(nSR_CNT++);
		    		System.out.println("# BodyLcdDownloadPrev strIds "+ i +" : "  + arrIds[i]);
		    		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
		    		String path = "";
		    		if(fileloc.equals("/")) {
		    			path = fileloc+filenm+"_"+startdt;
		    		}else {
		    			path = fileloc+"/"+filenm+"_"+startdt;
		    		}
		    		
		    		packet.setDATACODE(getFileCode(fileType));
		    		packet.setDATA_PATH(path.getBytes());
		    		packet.setDATAVERSION((byte)fileVer);
		    		packet.sendPacket(mUdpClinet);		    		
		    		
		    	}
	    		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
	    		resultVO.setBitid(arrIds[i]);
	    		resultVO.setCtrltpcd("1"); 
	    		resultVO.setSndrsltcd("2");
	    		
	    		try {
	    			//TODO TB_OMC_BITUPD 작성
					bitService.insertBitCtrlResult(resultVO);
					obj.put("result",Const.SQL_SUCCESS);
				} catch (SQLException e) {
					obj.put("result",Const.SQL_ERROR);
					logger.error("파일다운로드 result insert SQLException " + e.toString());
				}
	    		
	    	}   
			break;
		case 122: //확대
			for(int  i=0 ; i<arrIds.length; i++) {
	    		int type = Integer.valueOf(arrTypes[i]);
//	    		 -- 30, 31, 32, 50, 55, 56, 59
	    		if((type >= 30 && type <= 32) || (type == 50 || type == 55 || type == 56 || type == 59)) {
	    			//LED
	    			BodyLedDownloadExt packet = new BodyLedDownloadExt(nSR_CNT++);
		    		System.out.println("# BodyLedDownloadExt strIds "+ i +" : "  + arrIds[i]);
		    		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
		    		String path = "";
		    		if(fileloc.equals("/")) {
		    			path = fileloc+filenm+startdt;
		    		}else {
		    			path = fileloc+"/"+filenm+startdt;
		    		}
		    		packet.setFRAMENUM((byte) 0x01);
		    		packet.setFRAMECNT((byte) 0x01);
		    		packet.setDATACODE(getFileCode(fileType));
		    		packet.setFILENUM((byte) 0x01);
		    		packet.setPATCHDATE(startdt.getBytes());
		    		packet.setDATAFILE(path.getBytes());
		    		packet.sendPacket(mUdpClinet);	    			
	    		}else {
	    			//LCD
	    			BodyLcdDownloadExt packet = new BodyLcdDownloadExt(nSR_CNT++);
		    		System.out.println("# BodyLcdDownloadExt strIds "+ i +" : "  + arrIds[i]);
		    		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));
		    		String path = "";
		    		if(fileloc.equals("/")) {
		    			path = fileloc+filenm+"_"+startdt;
		    		}else {
		    			path = fileloc+"/"+filenm+"_"+startdt;
		    		}
		    		
		    		packet.setDATACODE(getFileCode(fileType));
		    		packet.setDATA_PATH(path.getBytes());
		    		packet.setDATAVERSION((byte)fileVer);
		    		packet.sendPacket(mUdpClinet);		    
	    		}
	    		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
	    		resultVO.setBitid(arrIds[i]);
	    		resultVO.setCtrltpcd("1"); 
	    		resultVO.setSndrsltcd("2");
	    		
	    		try {
	    			//TODO TB_OMC_BITUPD 작성
					bitService.insertBitCtrlResult(resultVO);
					obj.put("result",Const.SQL_SUCCESS);
				} catch (SQLException e) {
					obj.put("result",Const.SQL_ERROR);
					logger.error("파일다운로드 result insert SQLException " + e.toString());
				}
	    		
	    	}  
			break;
			
		case 123: //광역
			for(int  i=0 ; i<arrIds.length; i++) {
				BodyDownloadWide packet = new BodyDownloadWide(nSR_CNT++);
				packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));

				packet.setCTRL_CODE((byte) 0x00); //0 :download 1: Upload 2: delete
				packet.setFILE_TYPE((byte) 0x00); // 0 : Master Data 1:scenario 2 :rsc 3:news 4 notice 5 weather 6 ism schedule 100 main app 101 firmware 
			
				
				packet.setID_MODE((byte) 0x00);// Master Data 일 경우만 사용 0 Full id 1: Mapped ID
				int idx = filenm.indexOf(".");
				String name = "MASTER\\"+filenm.substring(0, idx)+"\\"+ filenm;
        		byte[] fileByte = name.getBytes();
        		packet.setFILE_LENGTH((byte)(fileByte.length)); //파일명 길이
        		packet.setFILE_NAME(fileByte);
				
        		String strDate = filenm.substring(0, idx) + " 00:00:00,000"; 
        		SimpleDateFormat dt = new SimpleDateFormat("yyyyMMdd HH:mm:ss,SSS"); 
        		Date date;
				try {
					date = dt.parse(strDate);
					long millisecond = date.getTime() / 1000L;
					System.out.println("### ver long " + millisecond);
					System.out.println("### ver int " + (int)millisecond);
					packet.setFILE_VERSION((int)millisecond);
				} catch (ParseException e1) {
					e1.printStackTrace();
				} 
        		
        		System.out.println("Try Send......" + i);
        		packet.sendPacket(mUdpClinet);
        		System.out.println("Try Sended......" + i);  
				
	    		TbOmcBitctrlVO resultVO = new TbOmcBitctrlVO();
	    		resultVO.setBitid(arrIds[i]);
	    		resultVO.setCtrltpcd("1"); 
	    		resultVO.setSndrsltcd("2");
	    		
	    		try {
	    			//TODO TB_OMC_BITUPD 작성
					bitService.insertBitCtrlResult(resultVO);
					obj.put("result",Const.SQL_SUCCESS);
				} catch (SQLException e) {
					obj.put("result",Const.SQL_ERROR);
					logger.error("파일다운로드 result insert SQLException " + e.toString());
				}
	    	}   		
			break;
		}
    	
		resp.setContentType("application/x-json; charset=UTF-8");
		try {
			resp.getWriter().print(obj);
		} catch (IOException e) {
			logger.error("리셋요청 resp write IOException " + e.toString());
		}
   	}
    
    /****************
     * 수동메시지  다운로드 요청 
     ***************/
    protected void reqMsgDownload(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
    	
    	String strIds = req.getParameter("bitid"); 
    	String formId = req.getParameter("formid");
    	String systemtp = req.getParameter("servertp"); 
    	
    	//정렬 가운데 정렬 
    	String dispOrder = req.getParameter("dispOrder"); 
    	
    	//표출 방법 static, shift up.....
    	String dispMethod = req.getParameter("dispMethod"); 
    	
    	System.out.println("### 수동메시지 다움로드 요쳥 ##");
    	System.out.println("### strIds : " + strIds);
    	System.out.println("### formId : " + formId);
    	
    	TbIscBitmsgVO vo = new TbIscBitmsgVO();
    	vo.setFormid(formId);
    	String msg = null;
    	try {
    		List<TbIscBitmsgVO> resultList = bitService.selectMsgFormList(vo);
    		msg = resultList.get(0).getDisp_msgcontent();
			
		} catch (Exception e) {
			JSONObject obj = new JSONObject();
	    	obj.put("result",Const.SQL_ERROR);
			resp.setContentType("application/x-json; charset=UTF-8");
			try {
				resp.getWriter().print(obj);
			} catch (IOException e1) {
				logger.error("리셋요청 resp write IOException " + e1.toString());
			}
			return;
		}
    	vo.setMsgcontent(msg);
    	// op 0x33 인천, 인천확대 두군데만 사용
    	BodyManualMsgPrev packet = new BodyManualMsgPrev(nSR_CNT++);
    	String[] arrIds = strIds.split(",");
    	for(int  i=0 ;i<arrIds.length;i++) {
    		
    		System.out.println("# strIds "+ i +" : "  + arrIds[i]);
    		packet.cHeader.setRECEIVER_ID((short) Integer.parseInt(systemtp));
    		packet.mHeader.setTERM_ID(Integer.valueOf(arrIds[i]));

    		System.out.println("전송 Message = "  + msg);
    		
    		if(dispMethod == null) dispMethod="1";
    		if(dispOrder == null) dispOrder="0";
    		try {
				packet.setMESSAGE_DATA(msg.getBytes("euc-kr"));
			} catch (UnsupportedEncodingException e1) {
				e1.printStackTrace();
			}
    		packet.sendPacket(mUdpClinet);
    		
    		try {
				vo.setSndrsltcd("2");
				vo.setBitid(arrIds[i]);
				vo.setPageseq("1");
				bitService.insertBitMsg(vo);
				
			} catch (SQLException e) {
				logger.error("수동메시지 전송 결과 insert SQLException " + e.toString());
			}
    	}   		
    	JSONObject obj = new JSONObject();
    	obj.put("result",Const.SQL_SUCCESS);
		resp.setContentType("application/x-json; charset=UTF-8");
		try {
			resp.getWriter().print(obj);
		} catch (IOException e) {
			logger.error("리셋요청 resp write IOException " + e.toString());
		}
   	}
 
    private byte getFileCode(int type) {
//    	14	노선경로	0x03
//    	61	운영프로그램	
//    	62	감시프로그램	
//    	31	이미지	0x01
//    	34	폼아이콘	
//    	73	광역BIT운영프로그램	
//    	44	스케줄	0x04
//    	71	광역BIT펌웨어(거치)	
//    	72	광역BIT펌웨어(독립)	

    	
    	byte ret = 0x00;
    	switch (type) {
    	
		case 14: //노선경로
			ret = 0x03;
			break;
			
		case 61: //감시프로그램
//			ret = 0x03;
			break;
			
		case 62: //노선경로
//			ret = 0x03;
			break;
			
		case 31: //이미지
			ret = 0x01;
			break;
			
		case 34: //폼아이콘
//			ret = 0x03;
			break;
			
		case 73: //광역BIT운영프로그램
//			ret = 0x03;
			break;
			
		case 44: //스케줄
			ret = 0x04;
			break;
			
		case 71: //광역BIT펌웨어(거치)
//			ret = 0x03;
			break;
			
		case 72: //광역BIT펌웨어(독립)
//			ret = 0x03;
			break;
			
		default:
			break;
		}
    	
    	
    	return ret;
    }
}
