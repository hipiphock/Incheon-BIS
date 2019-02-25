package com.bis.comm;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.soc.TcpClient;
import com.bis.soc.UdpClient;

public class BodyCtrlStatus {

	//Send Buffer
	private int SEND_DATE;                               //전송 일자	전송 일자	YYYYMMDD	4	N					
	private int SEND_TIME;                               //전송 시각	전송 시각	hhmmss	4	N					
	private byte SYSTEM_CTRL;         //시스템제어	0:변화없음 1:리셋 	0 ~ 1	1	H
	private byte LCD_CTRL;                                 //LCD 제어	0:OFF 1:ON	0 ~ 1	1	H
	
	//RECV BUFFER 재활용
//	private int SEND_DATE;                               //전송 일자	전송 일자	YYYYMMDD	4	N					
//	private int SEND_TIME;                               //전송 시각	전송 시각	hhmmss	4	N					
	private byte STATUS;
	public Header mHeader = null;
	public Tail mTail  = null;
	public int m_nSize = 10;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyCtrlStatus(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Header();
		mTail = new Tail();		
		
		cHeader.setOPCODE((byte)0xa1);
		mHeader.setSR_CNT((short) nCount);
		mHeader.setOPCODE( (byte) 0xa1 );
	}
	public byte[] getPacket() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		byteBuffer.put(mHeader.GetHeaderArray());
		byteBuffer.putInt(SEND_DATE);
		byteBuffer.putInt(SEND_TIME);
		byteBuffer.put(SYSTEM_CTRL);
		byteBuffer.put(LCD_CTRL);
		mTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(mTail.GetTailArray());
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		
		return byteBuffer.array();
	}
	
	public void sendPacket(TcpClient client) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);
		bitBuffer.order(ByteOrder.LITTLE_ENDIAN);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		bitBuffer.put(mHeader.GetHeaderArray());
		bitBuffer.putInt(SEND_DATE);
		bitBuffer.putInt(SEND_TIME);
		bitBuffer.put(SYSTEM_CTRL);
		bitBuffer.put(LCD_CTRL);
		mTail.setCHECK_SUM(bitBuffer.array());
		
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
	public void sendPacket(UdpClient client) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);
		bitBuffer.order(ByteOrder.LITTLE_ENDIAN);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		bitBuffer.put(mHeader.GetHeaderArray());
		bitBuffer.putInt(SEND_DATE);
		bitBuffer.putInt(SEND_TIME);
		bitBuffer.put(SYSTEM_CTRL);
		bitBuffer.put(LCD_CTRL);
		mTail.setCHECK_SUM(bitBuffer.array());
		
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
	public int getSEND_DATE() {
		return SEND_DATE;
	}

	public void setSEND_DATE(int sEND_DATE) {
		SEND_DATE = sEND_DATE;
	}

	public int getSEND_TIME() {
		return SEND_TIME;
	}

	public void setSEND_TIME(int sEND_TIME) {
		SEND_TIME = sEND_TIME;
	}

	public byte getSYSTEM_CTRL() {
		return SYSTEM_CTRL;
	}

	public void setSYSTEM_CTRL(byte sYSTEM_CTRL) {
		SYSTEM_CTRL = sYSTEM_CTRL;
	}

	public byte getLCD_CTRL() {
		return LCD_CTRL;
	}

	public void setLCD_CTRL(byte lCD_CTRL) {
		LCD_CTRL = lCD_CTRL;
	}

	public byte getSTATUS() {
		return STATUS;
	}

	public void setSTATUS(byte sTATUS) {
		STATUS = sTATUS;
	} 	
	
}
