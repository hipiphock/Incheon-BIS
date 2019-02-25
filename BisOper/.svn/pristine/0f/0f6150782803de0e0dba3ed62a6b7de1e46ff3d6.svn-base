package com.bis.comm;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class CenterHeader {
	private byte STX = 0x02;

	private short SENDER_ID = 200;
	private short RECEIVER_ID = 120;   //중꼐서버 140
	private byte OPCODE = 0;
	private int DATALENGTH = 0;
	
	public int m_nSize = 10;
	
	public byte [] GetHeaderArray() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		byteBuffer.put(STX);
		byteBuffer.putShort(SENDER_ID);
		byteBuffer.putShort(RECEIVER_ID);
		byteBuffer.put((byte)(OPCODE & 0xff));
		byteBuffer.putInt(DATALENGTH);
		return byteBuffer.array();
	}
	public void setData(  ByteBuffer byteBuffer    ) {
		STX = byteBuffer.get();
		SENDER_ID = byteBuffer.getShort();
		RECEIVER_ID = byteBuffer.getShort();
		OPCODE = byteBuffer.get();
		DATALENGTH = byteBuffer.getInt();
	}
	
	public byte getSTX() {
		return STX;
	}

	public void setSTX(byte sTX) {
		STX = sTX;
	}

	public short getSENDER_ID() {
		return SENDER_ID;
	}

	public void setSENDER_ID(short sender_id) {
		SENDER_ID = sender_id;
	}

	public short getRECEIVER_ID() {
		return RECEIVER_ID;
	}

	public void setRECEIVER_ID(short receiver_id) {
		RECEIVER_ID = receiver_id;
	}

	public byte getOPCODE() {
		return OPCODE;
	}

	public void setOPCODE(byte opcode) {
		OPCODE = opcode;
	}

	public int getDATALENGTH() {
		return DATALENGTH;
	}

	public void setDATALENGTH(int datalength) {
		DATALENGTH = datalength;
	}
}
