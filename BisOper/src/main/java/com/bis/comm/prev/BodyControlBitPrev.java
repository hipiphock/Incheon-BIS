package com.bis.comm.prev;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;



//이전 BIT 제어 0x34
public class BodyControlBitPrev {
	
	
	private byte [] RESET 	= new byte[2]; 
	private byte [] SCREEN 	= new byte[2]; 
	private byte [] FAN 	= new byte[2]; 
	private byte [] HEATER 	= new byte[2]; 
	private byte [] BRIGHTNESS = new byte[2]; 
	private byte VOL_CTRL = 0x31; 
	private short VOLUME = 0;
	private byte 	RESTART = 0x00; 
	
	private int RESERVED1 = 0;
	private int RESERVED2 = 0;
	
	public Pheader mHeader = null;
	public Ptail mTail  = null;
	public short m_nSize = 22;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyControlBitPrev(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Pheader();
		mTail = new Ptail();		
		
		cHeader.setOPCODE((byte)0x34);
		cHeader.setRECEIVER_ID((byte)121);
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
		bitBuffer.putInt(RESERVED1);
		bitBuffer.putInt(RESERVED2);

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
}
