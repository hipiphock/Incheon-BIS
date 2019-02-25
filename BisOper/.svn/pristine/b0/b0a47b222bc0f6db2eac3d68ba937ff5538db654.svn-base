package com.bis.comm;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.soc.TcpClient;
import com.bis.soc.UdpClient;

public class BodyChangeParam {
	//Send Buffer
	private int SEND_DATE;                               //전송 일자	전송 일자	YYYYMMDD	4	N					
	private int SEND_TIME;                               //전송 시각	전송 시각	hhmmss	4	N					
	private char [] PARAM_MNUMBER = new char[8];         //파라미터 개정번호	파라미터 정보 테이블의 개정번호(관리번호)		8	-
	private byte VOLUME;                                 //볼륨	음성 스피커 볼륨(0~9단계)	0 ~ 9	1	N
	private byte ARRIVE_TERMS;                           //잠시후도착 조건	시간 기준 : 0 남은정류장 기준 : 1	0 ~ 1	1	N
	private short TERMS_SECOND;	                         //잠시후도착 시간조건(초)	기준 초 미만일 경우 잠시 후 도착( 예 : 180 미만일 경우 잠시 후 도착 표출)	0 ~ 65535	2	N
	private short TERMS_STOP_CNT;                        //잠시후도착 정류장조건	기준 정류장 미만일 경우 잠시 후 도착 (예 : 4 미만일 경우 3번째 정류장부터 잠시 후 도착 표출)	0 ~ 65535	2	N
	private short MONITOR_ON_TIME; 					 //모니터OFF시간	모니터 OFF시간세팅값	0000 ~ 2359	2	N
	private short MONITOR_OFF_TIME; 					 //모니터OFF시간	모니터 OFF시간세팅값	0000 ~ 2359	2	N
	private short PERIOD_SEND_STATUS; 					 //상태정보 전송주기	상태정보 전송주기(초)	0 ~ 65535	2	N
	private short PERIOD_SEND_WEB_CAM; 					 //영상정보 전송주기(web cam)	영상정보 전송주기(default :300초)	0 ~ 65535	2	N
	private short PERIOD_SEND_SCREEN_CAPTURE; 			 //Screen Capture	Screen Capture 전송주기(default :300초)	0 ~ 65535	2	N
	private byte BIT_ORDER_INFO; 					     //BIT정보 정렬방식	0:노선번호 기준, 1: 도착예정정보 기준(default:1)	0 ~ 1	1	N
	private byte BIT_VOICE_SWITCH; 					     //BIT음성정보ON/OFF	0: 음성정보 OFF, 1:음성정보 ON (default:0)	0 ~ 1	1	N
	private byte VIEW_TIME_TRAFFIC_INFO; 				 //교통정보표출시간	교통소통정보 표출 주기(초)–10초기준 (default:2초)	0 ~ 255	1	N
	private byte VIEW_TRAFFIC_INFO; 					 //소통정보표출여부	0:표출안함,  1:표출 (default: 1)	0 ~ 1	1	N
	private short PROMO_IMG_VIEW_TIME; 					 //시정흥보이미지표출	표출시간(5초)	1 ~ 65535	2	N
	private short PROMO_IMG_STANDBY_TIME; 				 //시정흥보이미지대기	표출대기시간(30초)	1 ~ 65535	2	N
	
	private byte MOTION_SENSOR_USE_YN; 					 //동작감지센서 사용여부	동작감지센서 사용여부(0:사용안함, 1:사용)	0 ~ 1	1	N
	private byte SHOCK_SENSOR_USE_YN;	
	private short MOTION_SENSOR_USE_TIME; 				 //동작감지 사용시간	동작감지 후 LCD ON 지속시간( 초)	0 ~ 65535	2	N
	private byte FAN_MAX; 					             //팬동작 온도조건(MAX)	팬동작 온도조건 (최대치)	-127 ~ 127	1	N
	private byte FAN_MIN; 					             //팬동작 온도조건(MIN)	팬동작 온도조건 (최소치) 	-127 ~ 127	1	N
	private byte HEATER_MAX; 					         //히터동작 온도조건(MAX)	히터동작 온도조건(최대치) 	-127 ~ 127	1	N
	private byte HEATER_MIN; 					         //히터동작 온도조건(MIN)	히터동작 온도조건(최소치) ( -127 ~ 127)	-127 ~ 127	1	N
	private byte VIEW_WEATHER; 					         //날씨정보 표출여부	0:표출안함,  1:표출 (default: 1)	0 ~ 1	1	N
	private byte VIEW_NEWS; 					         //뉴스정보 표출여부	0:표출안함,  1:표출 (default: 1)	0 ~ 1	1	N
	private int RESERVED; 					             //예약	(개발자 임의 사용)		4	H	

	//RECV BUFFER 재활용
//	private int SEND_DATE;                               //전송 일자	전송 일자	YYYYMMDD	4	N					
//	private int SEND_TIME;                               //전송 시각	전송 시각	hhmmss	4	N					
//	private char [] PARAM_MNUMBER = new char[8];         //파라미터 개정번호	파라미터 정보 테이블의 개정번호(관리번호)		8	-
//	private byte STATUS; 
	
	
	public int m_nSize = 54;
	
	public Header mHeader = null;
	public Tail mTail  = null;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyChangeParam(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Header();
		mTail = new Tail();		
		
		cHeader.setOPCODE((byte)0xe5);
		mHeader.setSR_CNT((short) nCount);
		mHeader.setOPCODE( (byte) 0xe5 );
	}
	
	
	public void sendPacket(TcpClient client) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize);
		
		int nSSS = cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize;
		
		System.out.println("NUM 1 = " + nSSS);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);
		bitBuffer.order(ByteOrder.LITTLE_ENDIAN);
		nSSS = mHeader.m_nSize+m_nSize;
		System.out.println("NUM 2 = " + nSSS); 
		System.out.println("NUM 2 = " + PARAM_MNUMBER.length);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		bitBuffer.put(mHeader.GetHeaderArray());
		bitBuffer.putInt(SEND_DATE);
		bitBuffer.putInt(SEND_TIME);
		bitBuffer.put(CharToBytes(PARAM_MNUMBER,8));
		bitBuffer.put(VOLUME);
		bitBuffer.put(ARRIVE_TERMS);
		bitBuffer.putShort(TERMS_SECOND);	
		bitBuffer.putShort(TERMS_STOP_CNT);
		bitBuffer.putShort(MONITOR_ON_TIME);	
		bitBuffer.putShort(MONITOR_OFF_TIME);					
		bitBuffer.putShort(PERIOD_SEND_STATUS);					
		bitBuffer.putShort(PERIOD_SEND_WEB_CAM);					
		bitBuffer.putShort(PERIOD_SEND_SCREEN_CAPTURE);			
		bitBuffer.put(BIT_ORDER_INFO);				
		bitBuffer.put(BIT_VOICE_SWITCH);			
		bitBuffer.put(VIEW_TIME_TRAFFIC_INFO);		
		bitBuffer.put(VIEW_TRAFFIC_INFO);			
		bitBuffer.putShort(PROMO_IMG_VIEW_TIME);		
		bitBuffer.putShort(PROMO_IMG_STANDBY_TIME);	
		bitBuffer.put(MOTION_SENSOR_USE_YN);		
		bitBuffer.putShort(MOTION_SENSOR_USE_TIME);	
		bitBuffer.put(FAN_MAX);					
		bitBuffer.put(FAN_MIN);					
		bitBuffer.put(HEATER_MAX);					
		bitBuffer.put(HEATER_MIN);					
		bitBuffer.put(VIEW_WEATHER);				
		bitBuffer.put(VIEW_NEWS);	
		
		System.out.println("NUM 5555 = " + bitBuffer.capacity());  
		bitBuffer.putInt(RESERVED);					
		
		mTail.setCHECK_SUM(bitBuffer.array());
		byteBuffer.put(bitBuffer.array());
		byteBuffer.put(mTail.GetTailArray());
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		byte [] recvbuf = new byte[32];
		client.SendRecvData(byteBuffer.array(), recvbuf);
	}
	public void sendPacket(UdpClient client) {

		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize);
		
		int nSSS = cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize;
		
		System.out.println("NUM 1 = " + nSSS);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);
		bitBuffer.order(ByteOrder.LITTLE_ENDIAN);
		nSSS = mHeader.m_nSize+m_nSize;
		System.out.println("NUM 2 = " + nSSS); 
		System.out.println("NUM 2 = " + PARAM_MNUMBER.length);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		bitBuffer.put(mHeader.GetHeaderArray());
		bitBuffer.putInt(SEND_DATE);
		bitBuffer.putInt(SEND_TIME);
		bitBuffer.put(CharToBytes(PARAM_MNUMBER,8));
		bitBuffer.put(VOLUME);
		bitBuffer.put(ARRIVE_TERMS);
		bitBuffer.putShort(TERMS_SECOND);	
		bitBuffer.putShort(TERMS_STOP_CNT);
		bitBuffer.putShort(MONITOR_ON_TIME);	
		bitBuffer.putShort(MONITOR_OFF_TIME);					
		bitBuffer.putShort(PERIOD_SEND_STATUS);					
		bitBuffer.putShort(PERIOD_SEND_WEB_CAM);					
		bitBuffer.putShort(PERIOD_SEND_SCREEN_CAPTURE);			
		bitBuffer.put(BIT_ORDER_INFO);				
		bitBuffer.put(BIT_VOICE_SWITCH);			
		bitBuffer.put(VIEW_TIME_TRAFFIC_INFO);		
		bitBuffer.put(VIEW_TRAFFIC_INFO);			
		bitBuffer.putShort(PROMO_IMG_VIEW_TIME);		
		bitBuffer.putShort(PROMO_IMG_STANDBY_TIME);	
		bitBuffer.put(MOTION_SENSOR_USE_YN);	
		bitBuffer.put(SHOCK_SENSOR_USE_YN);
		bitBuffer.putShort(MOTION_SENSOR_USE_TIME);	
		bitBuffer.put(FAN_MAX);					
		bitBuffer.put(FAN_MIN);					
		bitBuffer.put(HEATER_MAX);					
		bitBuffer.put(HEATER_MIN);					
		bitBuffer.put(VIEW_WEATHER);				
		bitBuffer.put(VIEW_NEWS);	
		
		System.out.println("NUM 5555 = " + bitBuffer.capacity());  
		bitBuffer.putInt(RESERVED);					
		
		mTail.setCHECK_SUM(bitBuffer.array());
		byteBuffer.put(bitBuffer.array());
		byteBuffer.put(mTail.GetTailArray());
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		byte [] recvbuf = new byte[32];
		client.SendRecvData(byteBuffer.array(), recvbuf);
	}	
	public byte[] CharToBytes(char[] param) {
		byte[] ret = new byte[param.length];
		for(int i = 0; i < ret.length; i++) {
			ret[i] = (byte) param[i];
		}
		return ret;
	}

	public byte[] CharToBytes(char[] param,int nSize) {
		byte[] ret = new byte[nSize];
		for(int i = 0; i < nSize; i++) {
			ret[i] = (byte) param[i];
		}
		return ret;
	}
	
	/**
	 * @return the sEND_DATE
	 */
	public int getSEND_DATE() {
		return SEND_DATE;
	}
	/**
	 * @param sEND_DATE the sEND_DATE to set
	 */
	public void setSEND_DATE(int sEND_DATE) {
		SEND_DATE = sEND_DATE;
	}
	/**
	 * @return the sEND_TIME
	 */
	public int getSEND_TIME() {
		return SEND_TIME;
	}
	/**
	 * @param sEND_TIME the sEND_TIME to set
	 */
	public void setSEND_TIME(int sEND_TIME) {
		SEND_TIME = sEND_TIME;
	}
	/**
	 * @return the pARAM_MNUMBER
	 */
	public char[] getPARAM_MNUMBER() {
		return PARAM_MNUMBER;
	}
	/**
	 * @param pARAM_MNUMBER the pARAM_MNUMBER to set
	 */
	public void setPARAM_MNUMBER(char[] pARAM_MNUMBER) {
		PARAM_MNUMBER = pARAM_MNUMBER;
	}
	/**
	 * @return the vOLUME
	 */
	public byte getVOLUME() {
		return VOLUME;
	}
	/**
	 * @param vOLUME the vOLUME to set
	 */
	public void setVOLUME(byte vOLUME) {
		VOLUME = vOLUME;
	}
	/**
	 * @return the aRRIVE_TERMS
	 */
	public byte getARRIVE_TERMS() {
		return ARRIVE_TERMS;
	}
	/**
	 * @param aRRIVE_TERMS the aRRIVE_TERMS to set
	 */
	public void setARRIVE_TERMS(byte aRRIVE_TERMS) {
		ARRIVE_TERMS = aRRIVE_TERMS;
	}
	/**
	 * @return the tERMS_SECOND
	 */
	public short getTERMS_SECOND() {
		return TERMS_SECOND;
	}
	/**
	 * @param tERMS_SECOND the tERMS_SECOND to set
	 */
	public void setTERMS_SECOND(short tERMS_SECOND) {
		TERMS_SECOND = tERMS_SECOND;
	}
	/**
	 * @return the tERMS_STOP_CNT
	 */
	public short getTERMS_STOP_CNT() {
		return TERMS_STOP_CNT;
	}
	/**
	 * @param tERMS_STOP_CNT the tERMS_STOP_CNT to set
	 */
	public void setTERMS_STOP_CNT(short tERMS_STOP_CNT) {
		TERMS_STOP_CNT = tERMS_STOP_CNT;
	}
	
	/**
	 * @return the mONITOR_OFF_TIME
	 */
	public short getMONITOR_ON_TIME() {
		return MONITOR_ON_TIME;
	}
	/**
	 * @param mONITOR_OFF_TIME the mONITOR_OFF_TIME to set
	 */
	public void setMONITOR_ON_TIME(short monitor_on_time) {
		MONITOR_ON_TIME = monitor_on_time;
	}
	
	
	/**
	 * @return the mONITOR_OFF_TIME
	 */
	public short getMONITOR_OFF_TIME() {
		return MONITOR_OFF_TIME;
	}
	/**
	 * @param mONITOR_OFF_TIME the mONITOR_OFF_TIME to set
	 */
	public void setMONITOR_OFF_TIME(short mONITOR_OFF_TIME) {
		MONITOR_OFF_TIME = mONITOR_OFF_TIME;
	}
	/**
	 * @return the pERIOD_SEND_STATUS
	 */
	public short getPERIOD_SEND_STATUS() {
		return PERIOD_SEND_STATUS;
	}
	/**
	 * @param pERIOD_SEND_STATUS the pERIOD_SEND_STATUS to set
	 */
	public void setPERIOD_SEND_STATUS(short pERIOD_SEND_STATUS) {
		PERIOD_SEND_STATUS = pERIOD_SEND_STATUS;
	}
	/**
	 * @return the pERIOD_SEND_WEB_CAM
	 */
	public short getPERIOD_SEND_WEB_CAM() {
		return PERIOD_SEND_WEB_CAM;
	}
	/**
	 * @param pERIOD_SEND_WEB_CAM the pERIOD_SEND_WEB_CAM to set
	 */
	public void setPERIOD_SEND_WEB_CAM(short pERIOD_SEND_WEB_CAM) {
		PERIOD_SEND_WEB_CAM = pERIOD_SEND_WEB_CAM;
	}
	/**
	 * @return the pERIOD_SEND_SCREEN_CAPTURE
	 */
	public short getPERIOD_SEND_SCREEN_CAPTURE() {
		return PERIOD_SEND_SCREEN_CAPTURE;
	}
	/**
	 * @param pERIOD_SEND_SCREEN_CAPTURE the pERIOD_SEND_SCREEN_CAPTURE to set
	 */
	public void setPERIOD_SEND_SCREEN_CAPTURE(short pERIOD_SEND_SCREEN_CAPTURE) {
		PERIOD_SEND_SCREEN_CAPTURE = pERIOD_SEND_SCREEN_CAPTURE;
	}
	/**
	 * @return the bIT_ORDER_INFO
	 */
	public byte getBIT_ORDER_INFO() {
		return BIT_ORDER_INFO;
	}
	/**
	 * @param bIT_ORDER_INFO the bIT_ORDER_INFO to set
	 */
	public void setBIT_ORDER_INFO(byte bIT_ORDER_INFO) {
		BIT_ORDER_INFO = bIT_ORDER_INFO;
	}
	/**
	 * @return the bIT_VOICE_SWITCH
	 */
	public byte getBIT_VOICE_SWITCH() {
		return BIT_VOICE_SWITCH;
	}
	/**
	 * @param bIT_VOICE_SWITCH the bIT_VOICE_SWITCH to set
	 */
	public void setBIT_VOICE_SWITCH(byte bIT_VOICE_SWITCH) {
		BIT_VOICE_SWITCH = bIT_VOICE_SWITCH;
	}
	/**
	 * @return the vIEW_TIME_TRAFFIC_INFO
	 */
	public byte getVIEW_TIME_TRAFFIC_INFO() {
		return VIEW_TIME_TRAFFIC_INFO;
	}
	/**
	 * @param vIEW_TIME_TRAFFIC_INFO the vIEW_TIME_TRAFFIC_INFO to set
	 */
	public void setVIEW_TIME_TRAFFIC_INFO(byte vIEW_TIME_TRAFFIC_INFO) {
		VIEW_TIME_TRAFFIC_INFO = vIEW_TIME_TRAFFIC_INFO;
	}
	/**
	 * @return the vIEW_TRAFFIC_INFO
	 */
	public byte getVIEW_TRAFFIC_INFO() {
		return VIEW_TRAFFIC_INFO;
	}
	/**
	 * @param vIEW_TRAFFIC_INFO the vIEW_TRAFFIC_INFO to set
	 */
	public void setVIEW_TRAFFIC_INFO(byte vIEW_TRAFFIC_INFO) {
		VIEW_TRAFFIC_INFO = vIEW_TRAFFIC_INFO;
	}
	/**
	 * @return the pROMO_IMG_VIEW_TIME
	 */
	public short getPROMO_IMG_VIEW_TIME() {
		return PROMO_IMG_VIEW_TIME;
	}
	/**
	 * @param pROMO_IMG_VIEW_TIME the pROMO_IMG_VIEW_TIME to set
	 */
	public void setPROMO_IMG_VIEW_TIME(short pROMO_IMG_VIEW_TIME) {
		PROMO_IMG_VIEW_TIME = pROMO_IMG_VIEW_TIME;
	}
	/**
	 * @return the pROMO_IMG_STANDBY_TIME
	 */
	public short getPROMO_IMG_STANDBY_TIME() {
		return PROMO_IMG_STANDBY_TIME;
	}
	/**
	 * @param pROMO_IMG_STANDBY_TIME the pROMO_IMG_STANDBY_TIME to set
	 */
	public void setPROMO_IMG_STANDBY_TIME(short pROMO_IMG_STANDBY_TIME) {
		PROMO_IMG_STANDBY_TIME = pROMO_IMG_STANDBY_TIME;
	}
	/**
	 * @return the mOTION_SENSOR_USE_YN
	 */
	public byte getMOTION_SENSOR_USE_YN() {
		return MOTION_SENSOR_USE_YN;
	}
	/**
	 * @param mOTION_SENSOR_USE_YN the mOTION_SENSOR_USE_YN to set
	 */
	public void setMOTION_SENSOR_USE_YN(byte mOTION_SENSOR_USE_YN) {
		MOTION_SENSOR_USE_YN = mOTION_SENSOR_USE_YN;
	}
	/**
	 * @return the mOTION_SENSOR_USE_TIME
	 */
	public short getMOTION_SENSOR_USE_TIME() {
		return MOTION_SENSOR_USE_TIME;
	}
	/**
	 * @param mOTION_SENSOR_USE_TIME the mOTION_SENSOR_USE_TIME to set
	 */
	public void setMOTION_SENSOR_USE_TIME(short mOTION_SENSOR_USE_TIME) {
		MOTION_SENSOR_USE_TIME = mOTION_SENSOR_USE_TIME;
	}
	/**
	 * @return the fAN_MAX
	 */
	public byte getFAN_MAX() {
		return FAN_MAX;
	}
	/**
	 * @param fAN_MAX the fAN_MAX to set
	 */
	public void setFAN_MAX(byte fAN_MAX) {
		FAN_MAX = fAN_MAX;
	}
	/**
	 * @return the fAN_MIN
	 */
	public byte getFAN_MIN() {
		return FAN_MIN;
	}
	/**
	 * @param fAN_MIN the fAN_MIN to set
	 */
	public void setFAN_MIN(byte fAN_MIN) {
		FAN_MIN = fAN_MIN;
	}
	/**
	 * @return the hEATER_MAX
	 */
	public byte getHEATER_MAX() {
		return HEATER_MAX;
	}
	/**
	 * @param hEATER_MAX the hEATER_MAX to set
	 */
	public void setHEATER_MAX(byte hEATER_MAX) {
		HEATER_MAX = hEATER_MAX;
	}
	/**
	 * @return the hEATER_MIN
	 */
	public byte getHEATER_MIN() {
		return HEATER_MIN;
	}
	/**
	 * @param hEATER_MIN the hEATER_MIN to set
	 */
	public void setHEATER_MIN(byte hEATER_MIN) {
		HEATER_MIN = hEATER_MIN;
	}
	/**
	 * @return the vIEW_WEATHER
	 */
	public byte getVIEW_WEATHER() {
		return VIEW_WEATHER;
	}
	/**
	 * @param vIEW_WEATHER the vIEW_WEATHER to set
	 */
	public void setVIEW_WEATHER(byte vIEW_WEATHER) {
		VIEW_WEATHER = vIEW_WEATHER;
	}
	/**
	 * @return the vIEW_NEWS
	 */
	public byte getVIEW_NEWS() {
		return VIEW_NEWS;
	}
	/**
	 * @param vIEW_NEWS the vIEW_NEWS to set
	 */
	public void setVIEW_NEWS(byte vIEW_NEWS) {
		VIEW_NEWS = vIEW_NEWS;
	}
	/**
	 * @return the rESERVED
	 */
	public int getRESERVED() {
		return RESERVED;
	}
	/**
	 * @param rESERVED the rESERVED to set
	 */
	public void setRESERVED(int rESERVED) {
		RESERVED = rESERVED;
	}


	public byte getSHOCK_SENSOR_USE_YN() {
		return SHOCK_SENSOR_USE_YN;
	}


	public void setSHOCK_SENSOR_USE_YN(byte sHOCK_SENSOR_USE_YN) {
		SHOCK_SENSOR_USE_YN = sHOCK_SENSOR_USE_YN;
	}


}

 					  
					      
