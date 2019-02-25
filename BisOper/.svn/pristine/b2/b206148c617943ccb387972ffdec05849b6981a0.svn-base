package com.bis.util;

import java.nio.ByteBuffer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.StringTokenizer;

import org.apache.commons.net.util.Base64;


public abstract class TypeHelper {
	
	public static final SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyyMMddHHmmss");
	public static final SimpleDateFormat dayFormatter = new SimpleDateFormat("yyyyMMdd");

	public static int unsignedByteToInt(byte srcValue) {
		return (srcValue & 0xFF);
	}

	public static int unsignedShortToInt(short srcValue) {
		return (srcValue & 0xFFFF);
	}

	public static long intToUnsignedInt(int srcValue) {
		return (srcValue & 0xFFFFFFFF);
	}

	public static int UnisignedIntToInt(long srcValue) {
		return (int) (srcValue & 0xFFFFFFFF);
	}

	public static int compareMaskedValue(byte srcValue, int maskValue, int compareValue) {
		int resultValue = unsignedByteToInt(srcValue) & maskValue;
		return ((resultValue == compareValue) ? 0
				: (resultValue > compareValue) ? 1 : -1);
	}

	public static List<String> seperateString(String srcValue, String delimeter) {
		List<String> list = new ArrayList<String>();

		StringTokenizer stringTokenizer = new StringTokenizer(srcValue, delimeter);

		while (stringTokenizer.hasMoreTokens()) {
			list.add(stringTokenizer.nextToken().trim());
		}

		return list;
	}

	public static String convertCustomDateTime(String strDate) {
		String convertDate = strDate;
		if (convertDate.lastIndexOf(".") != -1)
			convertDate = convertDate
					.substring(0, convertDate.lastIndexOf("."));
		return convertDate.replaceAll("-", "").replaceAll(":", "")
				.replaceAll(" ", "");
	}

	public static byte[] hexToByteArray(String hex) {
		
		if ((hex == null) || (hex.length() == 0)) {
			return null;
		}

		byte[] ba = new byte[hex.length() / 2];
		for (int i = 0; i < ba.length; ++i) {
			ba[i] = (byte) Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
		}
		return ba;
	}

	public static String byteArrayToHex(byte[] ba) {
		if ((ba == null) || (ba.length == 0)) {
			return null;
		}

		StringBuffer sb = new StringBuffer(ba.length * 2);

		for (int x = 0; x < ba.length; ++x) {
			String hexNumber = "0" + Integer.toHexString(0xFF & ba[x]);
			sb.append(hexNumber.substring(hexNumber.length() - 2));
		}
		return sb.toString();
	}

	public static int convertNotNullStringToInt(String data) {
		if ((data != null) && (!(data.isEmpty()))) {
			return Long.valueOf(data).intValue();
		}
		return 0;
	}

	public static double convertNotNullStringToDouble(String data) {
		if ((data != null) && (!(data.isEmpty()))) {
			return Double.valueOf(data).doubleValue();
		}
		return 0.0D;
	}

	public static long checkCurrentTimeDiff(String checkTime)
			throws ParseException {
		return ((new Date().getTime() - dateFormatter.parse(checkTime)
				.getTime()) / 1000L);
	}

	public static String extractFilePath(String fullPath) {
		String resultPath = fullPath;

		int lastPathIndex = (resultPath.lastIndexOf("/") != -1) ? resultPath.lastIndexOf("/") : resultPath.lastIndexOf("\\");

		return ((lastPathIndex != -1) ? resultPath.substring(0, lastPathIndex + 1) : resultPath);
	}

	public static String extractFileName(String fullPath) {
		String resultPath = fullPath;
		int lastPathIndex = (resultPath.lastIndexOf("/") != -1) ? resultPath
				.lastIndexOf("/") : resultPath.lastIndexOf("\\");

		return ((lastPathIndex != -1) ? resultPath.substring(lastPathIndex + 1) : resultPath);
	}
	
	public static String byteToBase64(byte[] data) {  
//      Base64.decodeBase64(base64String);
        return Base64.encodeBase64String(data);  
    }  
	
	
	public static byte[] getStringByte(byte[] input) {
	    
	    ByteBuffer byteBuffer = ByteBuffer.allocate(input.length);    
        byteBuffer.clear();
        int cnt = 0;
        for(int i=0; i<input.length; i++) {
            if((input[i] & 0x80) == 0x80) {
                byteBuffer.put(input[i]);
                i++;
                byteBuffer.put(input[i]);
                continue;
            }
            if(input[i]  == 0x00) {
            	cnt = i;
                break;
            }
            byteBuffer.put(input[i]);
        }
        byte[] returns = new byte[cnt];
        System.arraycopy(byteBuffer.array(), 0, returns, 0, cnt);
        return returns;
	 }
	
	
}