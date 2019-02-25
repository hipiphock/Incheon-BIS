package com.bis.comm;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class CenterTail {
	private byte CHECK_SUM = 0;


	private byte ETX = 0x03;
	
	
	public int m_nSize = 2;
	
	public byte [] GetTailArray() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		byteBuffer.put(CHECK_SUM);
		byteBuffer.put(ETX);
		return byteBuffer.array();
	}
	
	/**
	 * @return the cHECK_SUM
	 */
	public byte getCHECK_SUM() {
		return CHECK_SUM;
	}
	public void setCHECK_SUM(byte [] param) {
		
		CHECK_SUM = param[0];
		
		for(int i = 1 ; i<(param.length);i++) {
			CHECK_SUM = (byte) (CHECK_SUM ^ param[i]);
		//	System.out.println("CT Check sum = " + String.format("%02x", CHECK_SUM));
		}
	//	System.out.println("CT last Check sum = " + String.format("%02x", CHECK_SUM));
	}
	public void setData(  ByteBuffer byteBuffer    ) {
		CHECK_SUM = byteBuffer.get();
		ETX = byteBuffer.get();
	}
}
