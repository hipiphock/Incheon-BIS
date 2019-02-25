package com.bis.comm.wide;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;

public class BodyDownloadWide {
	private byte CTRL_CODE = 0;
	private byte FILE_TYPE = 0;
	private int FILE_VERSION = 0;
	private byte ID_MODE = 0;
	private byte FILE_LENGTH = 0;

	private byte [] FILE_NAME = null;
	
	public byte getCTRL_CODE() {
		return CTRL_CODE;
	}

	public void setCTRL_CODE(byte cTRL_CODE) {
		CTRL_CODE = cTRL_CODE;
	}

	public byte getFILE_TYPE() {
		return FILE_TYPE;
	}

	public void setFILE_TYPE(byte fILE_TYPE) {
		FILE_TYPE = fILE_TYPE;
	}

	public int getFILE_VERSION() {
		return FILE_VERSION;
	}

	public void setFILE_VERSION(int fILE_VERSION) {
		FILE_VERSION = fILE_VERSION;
	}

	public byte getID_MODE() {
		return ID_MODE;
	}

	public void setID_MODE(byte iD_MODE) {
		ID_MODE = iD_MODE;
	}

	public byte getFILE_LENGTH() {
		return FILE_LENGTH;
	}

	public void setFILE_LENGTH(byte fILE_LENGTH) {
		FILE_LENGTH = fILE_LENGTH;
	}

	public byte[] getFILE_NAME() {
		return FILE_NAME;
	}

	public void setFILE_NAME(byte[] fILE_NAME) {
		FILE_LENGTH = (byte) fILE_NAME.length;
		FILE_NAME = new byte[FILE_LENGTH];
		if(getFILE_TYPE() == 0)
			m_nSize = (short) (8+(short)FILE_LENGTH);
		else
			m_nSize = (short) (7+(short)FILE_LENGTH);
		for(int i=0;i< FILE_LENGTH; i++)
			FILE_NAME[i] = fILE_NAME[i];
	}
	
	public Wheader mHeader = null;
	public short m_nSize = 8;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyDownloadWide(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Wheader();
		
		cHeader.setRECEIVER_ID((short) 123);
		mHeader.setTRX_ID((short) nCount);
		cHeader.setOPCODE((byte)0x86);
		mHeader.setOPCODE( (byte) 0x86 );	
	}
	
	public void sendPacket(UdpClient client) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(cHeader.m_nSize+mHeader.m_nSize+m_nSize + cTail.m_nSize);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		
		ByteBuffer bitBuffer = ByteBuffer.allocate(mHeader.m_nSize+m_nSize);
		bitBuffer.order(ByteOrder.BIG_ENDIAN);
		cHeader.setDATALENGTH(m_nSize+mHeader.m_nSize);
		mHeader.setDATALENGTH(m_nSize);
		
		byteBuffer.put(cHeader.GetHeaderArray());
		bitBuffer.put(mHeader.GetHeaderArray());
		
		bitBuffer.put(CTRL_CODE);
		bitBuffer.put(FILE_TYPE);
		bitBuffer.putInt(FILE_VERSION);
		if(getFILE_TYPE() == 0)
			bitBuffer.put(ID_MODE);
		bitBuffer.put(FILE_LENGTH);
		bitBuffer.put(FILE_NAME);

		byteBuffer.put(bitBuffer.array());
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
