package com.bis.comm.ext;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;

public class BodyLcdDownloadExt {
	private byte DATACODE = 0x00;
	private byte [] DATA_PATH = null;
	private byte DATAVERSION = 0x00;

	public byte getDATACODE() {
		return DATACODE;
	}
	public void setDATACODE(byte dATACODE) {
		DATACODE = dATACODE;
	}
	public byte[] getDATA_PATH() {
		return DATA_PATH;
	}
	public void setDATA_PATH(byte[] dATA_PATH) {
		DATA_PATH = new byte[40];
		int nSize = 40;
		if(dATA_PATH.length<40)
			nSize = dATA_PATH.length;
		for(int i = 0 ; i< nSize;i++)
			DATA_PATH[i] = dATA_PATH[i];
	}
	public byte getDATAVERSION() {
		return DATAVERSION;
	}
	public void setDATAVERSION(byte dATAVERSION) {
		DATAVERSION = dATAVERSION;
	}
	public Eheader mHeader = null;
	public Etail mTail  = null;
	public short m_nSize = 42;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyLcdDownloadExt(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Eheader();
		mTail = new Etail();		
		
		cHeader.setRECEIVER_ID((short) 122);
		cHeader.setOPCODE((byte)0x32);
		
		mHeader.setOPCODE( (byte) 0x32 );
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
		
		bitBuffer.put(DATACODE);
		bitBuffer.put(DATA_PATH);
		bitBuffer.put(DATAVERSION);

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
}
