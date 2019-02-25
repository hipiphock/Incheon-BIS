package com.bis.comm;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.soc.TcpClient;
import com.bis.soc.UdpClient;

public class BodyNotice {
	//Send Buffer
	private int SEND_DATE;                               //전송 일자	전송 일자	YYYYMMDD	4	N					
	private int SEND_TIME;                               //전송 시각	전송 시각	hhmmss	4	N					
	
	//RECV BUFFER 재활용
//	private int SEND_DATE;                               //전송 일자	전송 일자	YYYYMMDD	4	N					
//	private int SEND_TIME;                               //전송 시각	전송 시각	hhmmss	4	N					
	private byte STATUS;

	final static int m_nSize = 8;
	
	public Header mHeader = null;
	public Tail mTail  = null;
	
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyNotice(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Header();
		mTail = new Tail();		
		
		cHeader.setOPCODE((byte)0xa2);
		mHeader.setSR_CNT((short) nCount);
		mHeader.setOPCODE( (byte) 0xa2 );
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
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);

		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);	
		bitBuffer.order(ByteOrder.LITTLE_ENDIAN);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize+mTail.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		bitBuffer.put(mHeader.GetHeaderArray());
		bitBuffer.putInt(SEND_DATE);
		bitBuffer.putInt(SEND_TIME);
		
				
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

	public byte getSTATUS() {
		return STATUS;
	}

	public void setSTATUS(byte sTATUS) {
		STATUS = sTATUS;
	} 	
}
