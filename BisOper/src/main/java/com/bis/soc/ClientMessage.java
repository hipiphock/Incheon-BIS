package com.bis.soc;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : ClientMessage.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class ClientMessage {

	public String strId;
	public String strMessage;
	
	public void SetMessage(String str) {
		SimpleDateFormat sd = new SimpleDateFormat("HH:mm:ss:SSS");
		strMessage = String.format("%s: %s", sd.format(new Date()),str);
	}
	
}
