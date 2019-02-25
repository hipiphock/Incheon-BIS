package com.bis.soc;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Common {
	
	
	public static byte getStringToByte(String str) {
		byte ret = 0;
		ret = (byte) (Integer.valueOf(str) & 0xff);
		return ret;
	}
	public static short getStringToShort(String str) {
		short ret = 0;
		ret = (short) (Integer.valueOf(str) & 0xffff);
		return ret;
	}
	
	public static String GetDate() {
		long time = System.currentTimeMillis(); 

		SimpleDateFormat dayTime = new SimpleDateFormat("yyyyMMdd");

		String str = dayTime.format(new Date(time));

		System.out.println(str);
		return str;
	}
	public static String GetTime() {
		long time = System.currentTimeMillis(); 

		SimpleDateFormat dayTime = new SimpleDateFormat("hhmmss");

		String str = dayTime.format(new Date(time));

		System.out.println(str);
		return str;
	}
	
	 
	
}
