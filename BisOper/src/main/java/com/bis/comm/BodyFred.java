package com.bis.comm;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class BodyFred {

	public int nSequence;
	public int m_nSize = 4;
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyFred(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		
		cHeader.setOPCODE((byte)0x01);
		
	}
	
	public byte[] getPacket() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize + m_nSize + cTail.m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		cHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		byteBuffer.putInt(nSequence );
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		return byteBuffer.array();
	}
	
	@SuppressWarnings("unused")
	public void allocPacket(int nSize,byte [] recv) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		for(int i = 0 ;i<nSize;i++) 
			byteBuffer.put(recv[i]);
		byteBuffer.position(0);
		byte STX = byteBuffer.get();
		

		short SENDER_ID = byteBuffer.getShort();
		
		short RECEIVER_ID = byteBuffer.getShort();   //중꼐서버 140
		byte OPCODE = byteBuffer.get();
		int DATALENGTH = byteBuffer.getInt();
		
		cHeader.setRECEIVER_ID(SENDER_ID);
		
		nSequence = byteBuffer.getInt();
		return;
	}
	
}
