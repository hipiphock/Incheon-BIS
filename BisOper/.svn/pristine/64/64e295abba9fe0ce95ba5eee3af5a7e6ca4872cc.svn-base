package com.bis.comm.wide;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.soc.UdpClient;

public class BodyControlWide {


	private byte CTRL_CODE = 0;
	private byte CTRL_VAL1 = 0;
	private short CTRL_VAL2 = 0;
	
	private byte [] TIME_VAL = new byte[3];
	
	
	public Wheader mHeader = null;
	public short m_nSize = 2;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyControlWide(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Wheader();
		
		cHeader.setRECEIVER_ID((short) 123);
		mHeader.setTRX_ID((short) nCount);
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
		
		if(m_nSize == 2) {
			bitBuffer.put(CTRL_VAL1);
		} else if(m_nSize == 3) {
			bitBuffer.putShort(CTRL_VAL2);
		} else if(m_nSize == 4) {
			bitBuffer.putShort(TIME_VAL[0]);
			bitBuffer.putShort(TIME_VAL[1]);
			bitBuffer.putShort(TIME_VAL[2]);
		}
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
	
	public void SetCtrlValue(int nCode,int nVal) {
		cHeader.setOPCODE((byte)0x8E);
		mHeader.setOPCODE( (byte) 0x8E );		
		CTRL_CODE = (byte) nCode;
		if(nCode == 21) {
			CTRL_VAL2 = (short) nVal;
			m_nSize = 3;
		} else {
			CTRL_VAL1 = (byte) nVal;
			m_nSize = 2;
		}
	}
	public void SetCtrlReset(int nCode) {
		cHeader.setOPCODE((byte)0x8F);
		mHeader.setOPCODE( (byte) 0x8F );		
		CTRL_CODE = (byte) nCode;
		m_nSize = 1;
	}
	public void SetLanguage(int nVal) {
		cHeader.setOPCODE((byte)0x92);
		mHeader.setOPCODE( (byte) 0x92 );		
		CTRL_CODE = (byte) nVal;
		m_nSize = 1;
	}	
	public void SetTemperature(int nVal) {
		cHeader.setOPCODE((byte)0x99);
		mHeader.setOPCODE( (byte) 0x99 );		
		CTRL_CODE = (byte) nVal;
		m_nSize = 4;
	}	
	public void SetLcdOnOff(int nVal1,int nVal2) {
		cHeader.setOPCODE((byte)0x9c);
		mHeader.setOPCODE( (byte) 0x9c );		
		CTRL_CODE = (byte) (nVal1/100);
		TIME_VAL[0] = (byte) (nVal1%100);
		TIME_VAL[1] = (byte) (nVal2/100);
		TIME_VAL[2] = (byte) (nVal2%100);
		m_nSize = 4;
	}	
}
