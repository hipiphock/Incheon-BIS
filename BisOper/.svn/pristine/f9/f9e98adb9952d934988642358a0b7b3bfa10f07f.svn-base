package com.bis.comm;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class Header {
	private byte STX = 0x02;
	private byte OPCODE = 0;
	private short SR_CNT = 0;
	private int DEVICE_ID = 0;
	private int DATALENGTH = 0;
	
	public int m_nSize = 12;
	
	
	
	public byte getOPCODE() {
		return OPCODE;
	}
	public void setOPCODE(byte oPCODE) {
		OPCODE = oPCODE;
	}
	public short getSR_CNT() {
		return SR_CNT;
	}
	public void setSR_CNT(short sR_CNT) {
		SR_CNT = sR_CNT;
	}
	public int getDEVICE_ID() {
		return DEVICE_ID;
	}
	public void setDEVICE_ID(int dEVICE_ID) {
		DEVICE_ID = dEVICE_ID;
	}
	public int getDATALENGTH() {
		return DATALENGTH;
	}
	public void setDATALENGTH(int dATALENGTH) {
		DATALENGTH = dATALENGTH;
	}
	
	public byte [] GetHeaderArray() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		byteBuffer.put(STX);
		byteBuffer.put((byte)(OPCODE & 0xff));
		byteBuffer.putShort(SR_CNT);
		byteBuffer.putInt(DEVICE_ID);
		byteBuffer.putInt(DATALENGTH);
		System.out.println("STX " + STX);
		
		
		System.out.println("OPCODE " + OPCODE);
		System.out.println("OPCODE " + String.format("%02X",OPCODE) );
		System.out.println("SR_CNT " + SR_CNT);
		System.out.println("DATALENGTH " + DATALENGTH);
		System.out.println("DEVICE_ID " + DEVICE_ID);
		return byteBuffer.array();
	}
	public void setData(  ByteBuffer byteBuffer    ) {
		STX = byteBuffer.get();
		OPCODE = byteBuffer.get();
		SR_CNT = byteBuffer.getShort();
		DEVICE_ID = byteBuffer.getInt();
		DATALENGTH = byteBuffer.getInt();
	}	
}



