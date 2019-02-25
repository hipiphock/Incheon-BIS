package com.bis.comm.ext;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;

public class BodyLedDownloadExt {
	private byte FRAMENUM = 0x00;
	private byte FRAMECNT = 0x00;
	private byte DATACODE = 0x00;
	private byte FILENUM = 0x00;
	private byte [] PATCHDATE = null;

	private byte [] DATAFILE = null;

	public byte getFRAMENUM() {
		return FRAMENUM;
	}
	public void setFRAMENUM(byte fRAMENUM) {
		FRAMENUM = fRAMENUM;
	}
	public byte getFRAMECNT() {
		return FRAMECNT;
	}
	public void setFRAMECNT(byte fRAMECNT) {
		FRAMECNT = fRAMECNT;
	}
	public byte getDATACODE() {
		return DATACODE;
	}
	public void setDATACODE(byte dATACODE) {
		DATACODE = dATACODE;
	}
	public byte getFILENUM() {
		return FILENUM;
	}
	public void setFILENUM(byte fILENUM) {
		FILENUM = fILENUM;
	}
	public byte[] getPATCHDATE() {
		return PATCHDATE;
	}
	public void setPATCHDATE(byte[] pATCHDATE) {
		PATCHDATE = new byte[10];
		for(int i = 0 ; i< 10;i++)
			PATCHDATE[i] = pATCHDATE[i];	
	}
	public byte[] getDATAFILE() {
		return DATAFILE;
	}
	public void setDATAFILE(byte[] dATAFILE) {
		DATAFILE = new byte[dATAFILE.length];
		for(int i = 0 ; i< dATAFILE.length;i++)
			DATAFILE[i] = dATAFILE[i];
		m_nSize = (short) (14+dATAFILE.length);
	}
	public Eheader mHeader = null;
	public Etail mTail  = null;
	public short m_nSize = 14;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyLedDownloadExt(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Eheader();
		mTail = new Etail();		
		
		cHeader.setRECEIVER_ID((short) 122);
		cHeader.setOPCODE((byte)0x37);
		
		mHeader.setOPCODE( (byte) 0x37 );
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
		
		bitBuffer.put(FRAMENUM);
		bitBuffer.put(FRAMECNT);
		bitBuffer.put(DATACODE);
		bitBuffer.put(FILENUM);
		bitBuffer.put(PATCHDATE);
		bitBuffer.put(DATAFILE);

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
