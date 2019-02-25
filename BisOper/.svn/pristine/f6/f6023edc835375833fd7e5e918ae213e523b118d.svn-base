package com.bis.comm.wide;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class Wheader {
	
	private int TERM_ID = 0x02;
	private short TRX_ID = 0;
	private short DATALENGTH = 0;
	private byte OPCODE = 0;
	
	public int m_nSize = 9;
	
	
	public int getTERM_ID() {
		return TERM_ID;
	}

	public void setTERM_ID(int tERM_ID) {
		TERM_ID = tERM_ID;
	}
	
	public byte getOPCODE() {
		return OPCODE;
	}
	public void setOPCODE(byte oPCODE) {
		OPCODE = oPCODE;
	}

	public short getTRX_ID() {
		return TRX_ID;
	}
	public void setTRX_ID(short tRX_ID) {
		TRX_ID = tRX_ID;
	}
	public short getDATALENGTH() {
		return DATALENGTH;
	}
	public void setDATALENGTH(short dATALENGTH) {
		DATALENGTH = dATALENGTH;
	}
	public int getM_nSize() {
		return m_nSize;
	}
	public void setM_nSize(int m_nSize) {
		this.m_nSize = m_nSize;
	}
	public byte [] GetHeaderArray() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(m_nSize);
		byteBuffer.order(ByteOrder.BIG_ENDIAN);
		
		byteBuffer.putInt(TERM_ID);
		byteBuffer.putShort(TRX_ID);
		byteBuffer.putShort(DATALENGTH);
		byteBuffer.put((byte)(OPCODE & 0xff));
		
		
		System.out.println("TERM_ID " + TERM_ID );
		System.out.println("OPCODE " + String.format("%02X",OPCODE) );
		System.out.println("TRX_ID " + TRX_ID);
		System.out.println("DATALENGTH " + DATALENGTH);

		return byteBuffer.array();
	}
	public void setData(  ByteBuffer byteBuffer    ) {
		OPCODE = byteBuffer.get();
		TRX_ID = byteBuffer.getShort();
		DATALENGTH = byteBuffer.getShort();
	}
}
