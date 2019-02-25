package com.bis.comm.prev;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;

public class BodyManualMsgPrev {

	private byte[] MESSAGE_DATA = null;
	
	public byte[] getMESSAGE_DATA() {
		return MESSAGE_DATA;
	}
	public void setMESSAGE_DATA(byte[] mESSAGE_DATA) {
		m_nSize = (short) mESSAGE_DATA.length;
		MESSAGE_DATA = new byte[m_nSize];
		for(int i = 0 ;i<m_nSize ;i++) {
			if(mESSAGE_DATA[i] == 0x10)
				MESSAGE_DATA[i] = 0x2f;
			else
				MESSAGE_DATA[i] = mESSAGE_DATA[i];
		}
		
	}
	public Pheader mHeader = null;
	public Ptail mTail  = null;
	public short m_nSize = 0;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyManualMsgPrev(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Pheader();
		mTail = new Ptail();		
		
		cHeader.setRECEIVER_ID((short) 121);
		cHeader.setOPCODE((byte)0x33);
		
		mHeader.setOPCODE( (byte) 0x33 );
		mHeader.setTRX_ID((short) nCount);
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
		
		bitBuffer.put(MESSAGE_DATA);

		byteBuffer.put(bitBuffer.array());
		byteBuffer.put(mTail.GetTailArray());
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		
		
		for (int i = 0; i < byteBuffer.array().length; i++) {
			System.out.println("NUM" + i + "send byte = 0x" + String.format("%02X",byteBuffer.array()[i]));
		}
		
		byte [] recvbuf = new byte[32];
		client.SendRecvData(byteBuffer.array(), recvbuf);
		System.out.println("send data to " + cHeader.getRECEIVER_ID());
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
