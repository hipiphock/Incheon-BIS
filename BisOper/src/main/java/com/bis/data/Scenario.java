package com.bis.data;

import java.nio.ByteBuffer;

public class Scenario {
	
	private byte seq = 0x01; 
	private byte type = 0x01;//image 0x01,wmv 0x03
	private byte [] filename = new byte[33];
	
	
	public byte getSeq() {
		return seq;
	}
	public void setSeq(byte seq) {
		this.seq = seq;
	}
	public byte getType() {
		return type;
	}
	public void setType(byte type) {
		this.type = type;
	}
	public byte[] getFilename() {
		return filename;
	}
	public void setFilename(byte[] filename) {
		
		int nSize = filename.length;
		for(int i = 0;i<nSize;i++) 
			this.filename[i] = filename[i];
		this.filename[32] = 0x0a;
	}
	public byte [] GetByteArray() {
		ByteBuffer byteBuffer = ByteBuffer.allocate(35);
		byteBuffer.put(seq);
		byteBuffer.put(type);
		byteBuffer.put(filename);
		return byteBuffer.array();
	}
	
}
