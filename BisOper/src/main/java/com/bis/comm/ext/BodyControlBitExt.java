package com.bis.comm.ext;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;



//이전 BIT 제어 0x34
public class BodyControlBitExt {
	
	
	private byte [] RESET 	= new byte[2]; 
	private byte [] SCREEN 	= new byte[2]; 
	private byte [] FAN 	= new byte[2]; 
	private byte [] HEATER 	= new byte[2]; 
	private byte [] BRIGHTNESS = new byte[2]; 
	private byte VOL_CTRL = 0x31; 
	private short VOLUME = 0;
	private byte 	RESTART = 0x00; 
	private byte [] TTS_CNT = new byte[3]; 
	private byte [] TTS_VOL = new byte[2]; 
	private byte [] DMB_CHANNEL = new byte[2]; 
	private byte 	SHOCK_CAP = 0x00; 
	private byte [] RESERVED = new byte[28];
	
	public Eheader mHeader = null;
	public Etail mTail  = null;
	public short m_nSize = 50;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyControlBitExt(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Eheader();
		mTail = new Etail();		
		
		cHeader.setOPCODE((byte)0x34);
		cHeader.setRECEIVER_ID((byte)122);
		mHeader.setOPCODE( (byte) 0x34 );
		mHeader.setTRX_ID((short) nCount);
	}
	
	public void setRESET(int reset) {
		RESET[0] = (byte) (0x30 + reset); // 1 reset
		RESET[1] = 0x00; // 1 reset
	}
	public void setSCREEN(int nAuto,int nVal) {
		
		SCREEN[0] = (byte) (0x30 + nAuto);
		SCREEN[1] = (byte) (0x30 + nVal);
	}
	public void setFAN(int nAuto,int nVal) {
		FAN[0] = (byte) (0x30 + nAuto);
		FAN[1] = (byte) (0x30 + nVal);
	}
	public void setHEATER(int nAuto,int nVal) {
		HEATER[0] = (byte) (0x30 + nAuto);
		HEATER[1] = (byte) (0x30 + nVal);
	}
	public void setBRIGHTNESS(int nAuto,int nVal) {
		BRIGHTNESS[0] = (byte) (0x30 + nAuto);
		BRIGHTNESS[1] = (byte) (0x01 & nVal);
	}
	public void setVOLUME(int nAuto,short nVal){
		VOL_CTRL = (byte) (0x30 + nAuto);
		VOLUME = nVal;
	}
	public void setRESTART(byte rESTART) {
		if(rESTART == 0x01) {
			RESTART = 0x31;
		} else 
			RESTART = 0x00;
	}
	public void setTTS_CNT(byte bKor,byte bEng,byte bCha) {
		TTS_CNT[0] = bKor;
		TTS_CNT[1] = bEng;
		TTS_CNT[2] = bCha;
	}
	public void setTTS_VOL(int nAuto,int nVal) {
		TTS_VOL[0] = (byte) (0x30 + nAuto);
		TTS_VOL[1] = (byte) (nVal); // 0~10
	}

	public void setDMB_CHANNEL(int nChannel,int nVolume) {
		DMB_CHANNEL[0] = (byte) (nChannel); // 1~5
		DMB_CHANNEL[1] = (byte) (nVolume); // 0~10
	}
	public void setSHOCK_CAP(byte sHOCK_CAP) {
		SHOCK_CAP = sHOCK_CAP;  // 0~10
	}
	public void setRESERVED(byte[] rESERVED) {
		RESERVED = rESERVED;
	}
	
	public void sendPacket(UdpClient client) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);
		bitBuffer.order(ByteOrder.LITTLE_ENDIAN);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		bitBuffer.put(mHeader.GetHeaderArray());
		bitBuffer.put(RESET);
		bitBuffer.put(SCREEN);
		bitBuffer.put(FAN);
		bitBuffer.put(HEATER);
		bitBuffer.put(BRIGHTNESS);
		bitBuffer.put(VOL_CTRL);
		bitBuffer.putShort(VOLUME);
		bitBuffer.put(RESTART);
		bitBuffer.put(TTS_CNT);
		bitBuffer.put(TTS_VOL);
		bitBuffer.put(DMB_CHANNEL);
		bitBuffer.put(SHOCK_CAP);
		bitBuffer.put(RESERVED);

		byteBuffer.put(bitBuffer.array());
		byteBuffer.put(mTail.GetTailArray());
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		
		
		for (int i = 0; i < byteBuffer.array().length; i++) {
			System.out.println("NUM" + i + "send byte = 0x" + String.format("%02X",byteBuffer.array()[i]));
		}
		
		byte [] recvbuf = new byte[32];
		client.SendRecvData(byteBuffer.array(), recvbuf);
		
		
		for (int i = 0; i < recvbuf.length; i++) {
			System.out.println("recv byte = 0x" + String.format("%02X",recvbuf[i]));
		}		
	}	
}
