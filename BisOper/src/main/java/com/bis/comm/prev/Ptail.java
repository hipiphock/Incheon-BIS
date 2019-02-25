package com.bis.comm.prev;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class Ptail {
	private byte ETX = 0x20;
	

	public int m_nSize = 1;
	
	public byte [] GetTailArray() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		byteBuffer.put(ETX);
		return byteBuffer.array();
	}
	public void setData(  ByteBuffer byteBuffer    ) {
		ETX = byteBuffer.get();
	}
}
