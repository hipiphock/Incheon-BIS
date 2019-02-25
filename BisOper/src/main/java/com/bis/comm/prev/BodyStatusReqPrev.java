package com.bis.comm.prev;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

import com.bis.comm.CenterHeader;
import com.bis.comm.CenterTail;
import com.bis.comm.ext.Eheader;
import com.bis.comm.ext.Etail;
import com.bis.soc.UdpClient;

public class BodyStatusReqPrev {

	private byte DOOR = 0x30;
	private byte LED_POWER = 0x30;
	private byte FAN_STATUS = 0x30;
	private byte COMM_STATUS = 0x30;
	private byte HEATER_STATUS = 0x30;
	
	private byte HEATER_CTRL_STATUS = 0x30;
	private byte SW_VER = 0x10;
	private byte LED_BRIGHTNESS = 0x30;
	private byte LED_LIGHT = 0x30;
	private byte [] LCD_STATUS = new byte[2];
	
	private byte LCD_FAN_CTRL_STATUS = 0x30;
	private byte LCD_SCREEN_CTRL_STATUS = 0x30;
	private byte LCD_VOL_CTRL_STATUS = 0x30;
	private byte LCD_BRIGHTNESS_CTRL_STATUS= 0x30;
	private short LCD_VOLUME= 0;
	
	private byte [] LCD_TEMPER = new byte[3];
	private byte LED_MODULE_STATUS= 0x30;
	private byte ROUTE_VER = 0x10;
	
	public Eheader mHeader = null;
	public Etail mTail  = null;
	public short m_nSize = 22;
	
	public CenterHeader cHeader = null;
	public CenterTail 	 cTail = null;
	public BodyStatusReqPrev(int nCount ) {
		
		cHeader = new CenterHeader();
		cTail = new CenterTail();
		mHeader = new Eheader();
		mTail = new Etail();		
		
		cHeader.setRECEIVER_ID((short) 121);
		cHeader.setOPCODE((byte)0x36);
		
		mHeader.setOPCODE( (byte) 0x36 );
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
		bitBuffer.put(DOOR);
		bitBuffer.put(LED_POWER);
		bitBuffer.put(FAN_STATUS);
		bitBuffer.put(COMM_STATUS);
		bitBuffer.put(HEATER_STATUS);
		bitBuffer.put(HEATER_CTRL_STATUS);
		bitBuffer.put(SW_VER);
		bitBuffer.put(LED_BRIGHTNESS);
		bitBuffer.put(LED_LIGHT);
		bitBuffer.put(LCD_STATUS);
		bitBuffer.put(LCD_FAN_CTRL_STATUS);
		bitBuffer.put(LCD_SCREEN_CTRL_STATUS);
		bitBuffer.put(LCD_VOL_CTRL_STATUS);
		bitBuffer.put(LCD_BRIGHTNESS_CTRL_STATUS);
		bitBuffer.putShort(LCD_VOLUME);
		bitBuffer.put(LCD_TEMPER);
		bitBuffer.put(LED_MODULE_STATUS);
		bitBuffer.put(ROUTE_VER);

		byteBuffer.put(bitBuffer.array());
		byteBuffer.put(mTail.GetTailArray());
		cTail.setCHECK_SUM(byteBuffer.array());
		byteBuffer.put(cTail.GetTailArray());
		
		
		for (int i = 0; i < byteBuffer.array().length; i++) {
			System.out.println("NUM" + i + "send byte = 0x" + String.format("%02X",byteBuffer.array()[i]));
		}
		
		byte [] recvbuf = new byte[cHeader.m_nSize+mHeader.m_nSize+m_nSize + mTail.m_nSize+ cTail.m_nSize];
		client.SendRecvData(byteBuffer.array(), recvbuf);
		
		setData(recvbuf);
		
		if(cHeader.getRECEIVER_ID() == 121)
		{
			for (int i = 0; i < recvbuf.length; i++) {
				System.out.println("recv byte = 0x" + String.format("%02X",recvbuf[i]));
			}	
			cHeader.setRECEIVER_ID((short) 125);
			sendPacket(client);
		}	
	}	
	public void setData(byte [] bdata) {
		ByteBuffer byteBuffer = ByteBuffer.allocate(bdata.length);
		byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
		byteBuffer.put(bdata);
		byteBuffer.position(0);
		
		cHeader.setData(byteBuffer);
		mHeader.setData(byteBuffer);
		
		DOOR                        = byteBuffer.get();
		LED_POWER                   = byteBuffer.get();
		FAN_STATUS                  = byteBuffer.get();
		COMM_STATUS                 = byteBuffer.get();
		HEATER_STATUS               = byteBuffer.get();
		HEATER_CTRL_STATUS          = byteBuffer.get();
		SW_VER                      = byteBuffer.get();
		LED_BRIGHTNESS              = byteBuffer.get();
		LED_LIGHT                   = byteBuffer.get();
		LCD_STATUS[0]               = byteBuffer.get();
		LCD_STATUS[1]               = byteBuffer.get();
		
		LCD_FAN_CTRL_STATUS         = byteBuffer.get();
		LCD_SCREEN_CTRL_STATUS      = byteBuffer.get();
		LCD_VOL_CTRL_STATUS         = byteBuffer.get();
		LCD_BRIGHTNESS_CTRL_STATUS  = byteBuffer.get();
		LCD_VOLUME             		= byteBuffer.getShort();
		LCD_TEMPER[0]               = byteBuffer.get();
		LCD_TEMPER[1]               = byteBuffer.get();
		LCD_TEMPER[2]               = byteBuffer.get();
		LED_MODULE_STATUS           = byteBuffer.get();
		ROUTE_VER                   = byteBuffer.get();

		mTail.setData(byteBuffer);
		cTail.setData(byteBuffer);
	}
	
	
	public byte getDOOR() {
		return (byte) (DOOR & 0x01);
	}
	public byte getLED_POWER() {
		return (byte) (LED_POWER & 0x01);
	}
	public byte getFAN_STATUS() {
		return (byte) (FAN_STATUS & 0x01);
	}
	public byte getCOMM_STATUS() {
		return (byte) (COMM_STATUS & 0x01);
	}
	public byte getHEATER_STATUS() {
		return (byte) (HEATER_STATUS & 0x01);
	}
	public byte getHEATER_CTRL_STATUS() {
		return (byte) (HEATER_CTRL_STATUS & 0x01);
	}
	public byte getSW_VER() {
		return SW_VER;
	}
	public byte getLED_BRIGHTNESS() {
		return (byte) (LED_BRIGHTNESS & 0x01);
	}
	public byte getLED_LIGHT() {
		return (byte) (LED_LIGHT & 0x01);
	}
	public byte getLCD_STATUS0() {
		return (byte) (LCD_STATUS[0] & 0x01);
	}
	public byte getLCD_STATUS1() {
		return (byte) (LCD_STATUS[1] & 0x01);
	}	
	public byte getLCD_FAN_CTRL_STATUS() {
		return (byte) (LCD_FAN_CTRL_STATUS & 0x01);
	}
	public byte getLCD_SCREEN_CTRL_STATUS() {
		return (byte) (LCD_SCREEN_CTRL_STATUS & 0x01);
	}
	public byte getLCD_VOL_CTRL_STATUS() {
		return (byte) (LCD_VOL_CTRL_STATUS & 0x01);
	}
	public byte getLCD_BRIGHTNESS_CTRL_STATUS() {
		return (byte) (LCD_BRIGHTNESS_CTRL_STATUS & 0x01);
	}
	public short getLCD_VOLUME() {
		return LCD_VOLUME;
	}
	public int getLCD_TEMPER() {
		String s = new String(LCD_TEMPER);

		return Integer.valueOf(s);
	}
	public byte getLED_MODULE_STATUS() {
		return (byte) (LED_MODULE_STATUS & 0x01);
	}
	public byte getROUTE_VER() {
		return ROUTE_VER;
	}
	public void setDOOR(byte val) {
		DOOR = val;
	}
	public void setLED_POWER(byte val) {
		LED_POWER = val;
	}
	public void setFAN_STATUS(byte val) {
		FAN_STATUS = val;
	}
	public void setCOMM_STATUS(byte val) {
		COMM_STATUS = val;
	}
	public void setHEATER_STATUS(byte val) {
		HEATER_STATUS = val;
	}
	public void setHEATER_CTRL_STATUS(byte val) {
		HEATER_CTRL_STATUS = val;
	}
	public void setSW_VER(byte val) {
		SW_VER = val;
	}
	public void setLED_BRIGHTNESS(byte val) {
		LED_BRIGHTNESS = val;
	}
	public void setLED_LIGHT(byte val) {
		LED_LIGHT = val;
	}
	public void setLCD_STATUS(byte[] val) {
		LCD_STATUS = val;
	}
	public void setLCD_FAN_CTRL_STATUS(byte val) {
		LCD_FAN_CTRL_STATUS = val;
	}
	public void setLCD_SCREEN_CTRL_STATUS(byte val) {
		LCD_SCREEN_CTRL_STATUS = val;
	}
	public void setLCD_VOL_CTRL_STATUS(byte val) {
		LCD_VOL_CTRL_STATUS = val;
	}
	public void setLCD_BRIGHTNESS_CTRL_STATUS(byte val) {
		LCD_BRIGHTNESS_CTRL_STATUS = val;
	}
	public void setLCD_VOLUME(short val) {
		LCD_VOLUME = val;
	}
	public void setLCD_TEMPER(byte[] val) {
		LCD_TEMPER = val;
	}
	public void setLED_MODULE_STATUS(byte val) {
		LED_MODULE_STATUS = val;
	}
	public void setROUTE_VER(byte val) {
		ROUTE_VER = val;
	}
}
