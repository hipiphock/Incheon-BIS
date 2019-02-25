package com.bis.comm.prev;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;

public class BodyChangeParamPrev {

	private byte RETRY_CNT 	= 1; //1~5
	private byte TIME_OUT = 3; //1~10
	
	private byte [] SCREEN_ON = new byte[4];
	private byte [] SCREEN_OFF = new byte[4];
	private byte ROTATION = 0x03;	
	private byte FAN_TEMP_LED;
	private byte HEATER_TEMP_LED;
	private byte [] BUSINFO_FONT_LED 	= new byte[4];
	private byte [] BUSINFO_COLOR_LED 	= new byte[4];
	
	private byte [] FAN_TEMP_LCD 	= new byte[6];
	private byte [] HEATER_TEMP_LCD 	= new byte[6];
	
	private byte [] VOLUME_DAY_LCD 	= new byte[4];
	private short VOLUME_DAY_VAL = 0;
	private byte [] VOLUME_NIGHT_LCD 	= new byte[4];
	private short VOLUME_NIGHT_VAL = 0;
	
	private byte [] BRIGHTNESS_DAY_LCD 	= new byte[4];
	private byte BRIGHTNESS_DAY_VAL = 0;
	private byte [] BRIGHTNESS_NIGHT_LCD 	= new byte[4];
	private byte BRIGHTNESS_NIGHT_VAL = 0;
	
	
	public Pheader mHeader = null;
	public Ptail mTail  = null;
	public short m_nSize = 55;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyChangeParamPrev(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Pheader();
		mTail = new Ptail();		
		
		cHeader.setRECEIVER_ID((short) 121);
		cHeader.setOPCODE((byte)0x35);
		
		mHeader.setOPCODE( (byte) 0x35 );
		mHeader.setTRX_ID((short) nCount);
	}
	
	public void setRETRY_CNT(byte rETRY_CNT) {
		RETRY_CNT = rETRY_CNT;
	}
	public void setTIME_OUT(byte tIME_OUT) {
		TIME_OUT = tIME_OUT;
	}
	public void setSCREEN_ON(int sCREEN_ON) {
		SCREEN_ON = String.format("%04d", sCREEN_ON).getBytes();
	}
	public void setSCREEN_OFF(int sCREEN_OFF) {
		SCREEN_OFF = String.format("%04d", sCREEN_OFF).getBytes();
	}
	public void setFAN_TEMP_LED(byte fAN_TEMP_LED) {
		FAN_TEMP_LED = fAN_TEMP_LED;
	}
	public void setHEATER_TEMP_LED(byte hEATER_TEMP_LED) {
		HEATER_TEMP_LED = hEATER_TEMP_LED;
	}
	public void setBUSINFO_FONT_LED(int p1,int p2,int p3) {
		BUSINFO_FONT_LED[0] = (byte)(p1 | 0x30);
		BUSINFO_FONT_LED[1] = (byte)(p2 | 0x30);
		BUSINFO_FONT_LED[2] = (byte)(p3 | 0x30);
	}
	public void setBUSINFO_COLOR_LED(int p1,int p2,int p3) {
		BUSINFO_COLOR_LED[0] = (byte)(p1 | 0x30);
		BUSINFO_COLOR_LED[1] = (byte)(p2 | 0x30);
		BUSINFO_COLOR_LED[2] = (byte)(p3 | 0x30);	
	}
	public void setFAN_TEMP_LCD(int nOn,int nOff) {
		char on = '+';
		char off = '+';
		if(nOn<0) on = '-';
		if(nOff<0) off = '-';
		FAN_TEMP_LCD = String.format("%c%02d%c%02d", on,Math.abs(nOn),off,Math.abs(nOff)).getBytes();
	}
	public void setHEATER_TEMP_LCD(int nOn,int nOff) {
		char on = '+';
		char off = '+';
		if(nOn<0) on = '-';
		if(nOff<0) off = '-';
		HEATER_TEMP_LCD = String.format("%c%02d%c%02d", on,Math.abs(nOn),off,Math.abs(nOff)).getBytes();
	}
	
	public void setVOLUME_LCD(int dayTime,int dayVal,int nightTime,int nightVal) {
		VOLUME_DAY_LCD = String.format("%04d", dayTime).getBytes();
		VOLUME_DAY_VAL = (short) dayVal;
		VOLUME_NIGHT_LCD = String.format("%04d", nightTime).getBytes();
		VOLUME_NIGHT_VAL = (short) nightVal;
	}
	public void setBRIGHTNESS_LCD(int dayTime,int dayVal,int nightTime,int nightVal) {
		BRIGHTNESS_DAY_LCD = String.format("%04d", dayTime).getBytes();
		BRIGHTNESS_DAY_VAL = (byte) dayVal;
		BRIGHTNESS_NIGHT_LCD = String.format("%04d", nightTime).getBytes();
		BRIGHTNESS_NIGHT_VAL = (byte) nightVal;
	}
	public void sendPacket(UdpClient client) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);
		bitBuffer.order(ByteOrder.LITTLE_ENDIAN);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		System.out.print("cur pos = " + bitBuffer.position());
		bitBuffer.put(mHeader.GetHeaderArray());

		bitBuffer.put(RETRY_CNT);
		bitBuffer.put(TIME_OUT);
		bitBuffer.put(SCREEN_ON);
		bitBuffer.put(SCREEN_OFF);
		
		bitBuffer.put(ROTATION);
		bitBuffer.put(FAN_TEMP_LED);
		bitBuffer.put(HEATER_TEMP_LED);
		bitBuffer.put(BUSINFO_FONT_LED);//4
		bitBuffer.put(BUSINFO_COLOR_LED);//4
		bitBuffer.put(FAN_TEMP_LCD);//6
		bitBuffer.put(HEATER_TEMP_LCD);//6
		
		bitBuffer.put(VOLUME_DAY_LCD);
		bitBuffer.putShort(VOLUME_DAY_VAL);
		bitBuffer.put(VOLUME_NIGHT_LCD);
		bitBuffer.putShort(VOLUME_NIGHT_VAL);
		
		bitBuffer.put(BRIGHTNESS_DAY_LCD);
		bitBuffer.put(BRIGHTNESS_DAY_VAL);
		bitBuffer.put(BRIGHTNESS_NIGHT_LCD);
		bitBuffer.put(BRIGHTNESS_NIGHT_VAL);
		
		byteBuffer.put(bitBuffer.array());
		byteBuffer.put(mTail.GetTailArray());
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		
		
		for (int i = 0; i < byteBuffer.array().length; i++) {
			System.out.println("NUM" + i + "send byte = 0x" + String.format("%02X",byteBuffer.array()[i]));
		}
		
		byte [] recvbuf = new byte[32];
		client.SendRecvData(byteBuffer.array(), recvbuf);
		
		
		if(cHeader.getRECEIVER_ID() == 121)
		{
			for (int i = 0; i < recvbuf.length; i++) {
				System.out.println("recv byte = 0x" + String.format("%02X",recvbuf[i]));
			}	
			cHeader.setRECEIVER_ID((short) 125);
			sendPacket(client);
		}
	}

	public byte getROTATION() {
		return ROTATION;
	}

	public void setROTATION(byte rOTATION) {
		ROTATION = rOTATION;
	}
}
