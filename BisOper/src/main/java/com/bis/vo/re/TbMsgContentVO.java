package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : TbMsgContentVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07					김주암					최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbMsgContentVO {
	public static final byte SEPARATOR = 0x10;
	
	private final byte COLOR_RED = 0x22;
	private final byte COLOR_GREEN = 0x23;
	private final byte COLOR_YELLOW = 0x24;
	private final byte FONT_GULIM = 0x01;
	private final byte FONT_DOTUM = 0x02;
	private final byte FONT_BATANG = 0x03;
	private final byte FONT_SIZE16 = 0x11;
	private final byte FONT_SIZE24 = 0x12;
	private final byte FONT_SIZE32 = 0x13;
	private final byte NEW_LINE = 0x41;
	@SuppressWarnings("unused")
	private final byte NEW_PAGE = 0x42;
	
	private String color;
	private String font;
	private String size;
	private String content;
	private int new_line_count = 0;
	private int ord;
	private int mthod;
	
	public void setStyle(byte code) {
		switch (code) {
		case COLOR_RED: setColor("red"); break;
		case COLOR_GREEN: setColor("green"); break;
		case COLOR_YELLOW: setColor("yellow"); break;
		case FONT_GULIM: setFont("Gulim"); break;
		case FONT_DOTUM: setFont("Dotum"); break;
		case FONT_BATANG: setFont("Batang"); break;
		case FONT_SIZE16: setSize("32px"); break;
		case FONT_SIZE24: setSize("48px"); break;
		case FONT_SIZE32: setSize("64px"); break;
		case NEW_LINE: setNew_line_count();
		default: break;
		}
	}
	
	public String getStyle(int seq) {
		byte[] bytes;
		int i = 0;
		if(ord == 1 && seq == 0) {
			bytes = new byte[10 + new_line_count * 2];
		}else if(ord != 1 && seq == 0) {
			bytes = new byte[8 + new_line_count * 2];
		}else {
			bytes = new byte[6 + new_line_count * 2];
		}
		if(ord == 1 && seq == 0) {
			bytes[i++] = SEPARATOR;
			bytes[i++] = 0x51;
			bytes[i++] = SEPARATOR;
			bytes[i++] = (byte)(mthod+0x73);
		}else if(ord != 1 && seq == 0) {
			bytes[i++] = SEPARATOR;
			bytes[i++] = (byte)(mthod+0x73);
		}
		
		bytes[i++] = SEPARATOR;
		switch(color) {
		case "red": bytes[i++] = COLOR_RED; break;
		case "green": bytes[i++] = COLOR_GREEN; break;
		case "yellow": bytes[i++] = COLOR_YELLOW; break;
		}
		
		bytes[i++] = SEPARATOR;
		switch(font) {
		case "Gulim": bytes[i++] = FONT_GULIM; break;
		case "Dotum": bytes[i++] = FONT_DOTUM; break;
		case "Batang": bytes[i++] = FONT_BATANG; break;
		}
		
		bytes[i++] = SEPARATOR;
		switch(size) {
		case "32px": bytes[i++] = FONT_SIZE16; break;
		case "48px": bytes[i++] = FONT_SIZE24; break;
		case "64px": bytes[i++] = FONT_SIZE32; break;
		}
		
		int index = i;
		int line_count = new_line_count;
		while (line_count-- > 0) {
			bytes[index++] = SEPARATOR;
			bytes[index++] = NEW_LINE;
		}
		
		return new String(bytes) + content.replace("\u00a0"," ");
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getFont() {
		return font;
	}

	public void setFont(String font) {
		this.font = font;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getNew_line_count() {
		return new_line_count;
	}

	public void setNew_line_count() {
		this.new_line_count++;
	}

	public int getOrd() {
		return ord;
	}

	public void setOrd(int ord) {
		this.ord = ord;
	}

	public int getMthod() {
		return mthod;
	}

	public void setMthod(int mthod) {
		this.mthod = mthod;
	}
	
	
	
}
