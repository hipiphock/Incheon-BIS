package com.bis.util;

import java.lang.reflect.Array;
import java.util.List;
import java.util.Map;

/**
* Filename  : ParameterUtil.java
* Class     : ParameterUtil    
* Function  : 파라미터 필터링을 수행하는 클래스 
* Comment   :                 	
* @version  1.0
*/
public class ParameterUtil {

	/**
	 * 문자열 파라미터 처리
	 * 
	 * @param strParam 파라미터
	 * @return String
	 */
	public static String getStrParameter(String strParam) {
		String strReturn = "";
		strReturn = (strParam!=null && !strParam.equals("")) ? replaceString("<", "&lt;", strParam.trim()) : "";
		strReturn = replaceString(">", "&gt;",strReturn);
		strReturn = replaceString("(", "&#40;",strReturn);
		strReturn = replaceString(")", "&#41;",strReturn);
		strReturn = replaceString("#", "&#35;",strReturn);
		strReturn = replaceString("&", "&#38;",strReturn);
		strReturn = replaceString("\"", "&quot;",strReturn);
		
		
		strReturn = strReturn.trim();
		return strReturn;
	}
	
	/**
	 * 문자열 파라미터 처리, NULL의 경우 strReplace로 대체
	 * 
	 * @param strParam   파라미터
	 * @param strReplace 대체할 문자열
	 * @return String
	 */
	public static String getStrParameter(String strParam, String strReplace) {
		String strReturn = "";
		strReturn = (strParam!=null && !strParam.equals("")) ? replaceString("<", "&lt;", strParam.trim()) : strReplace;
		strReturn = replaceString(">", "&gt;",strReturn);
		strReturn = replaceString("(", "&#40;",strReturn);
		strReturn = replaceString(")", "&#41;",strReturn);
		strReturn = replaceString("#", "&#35;",strReturn);
		strReturn = replaceString("&", "&#38;",strReturn);
		strReturn = replaceString("\"", "&quot;",strReturn);
		return strReturn;
	}

	/**
	 * 문자열 파라미터 처리 - 문자변환 없음
	 * 
	 * @param strParam 파라미터
	 * @return String
	 */
	public static String getStrOriginalParameter(String strParam) {
		String strReturn = "";
		strReturn = (strParam!=null && !strParam.equals("")) ? strParam : "";
		return strReturn;
	}
	
	/**
	 * 문자열 파라미터 처리, NULL의 경우 strReplace로 대체 - 문자변환 없음
	 * 
	 * @param strParam   파라미터
	 * @param strReplace 대체할 문자열
	 * @return String
	 */
	public static String getStrOriginalParameter(String strParam, String strReplace) {
		String strReturn = "";
		strReturn = (strParam!=null && !strParam.equals("")) ? strParam : strReplace;
		return strReturn;
	}

	
	/**
	 * 배열 파라미터 처리
	 * 
	 * @param strParam 파라미터
	 * @return String[]
	 */
	public static String[] getStrArrParameter(String[] strParam) {
		if(strParam == null) return null;
		
		for(int i=0;i<strParam.length;i++){
			strParam[i] = replaceString("<", "&lt;", strParam[i].trim());
			strParam[i] = replaceString(">", "&gt;",strParam[i].trim());
			strParam[i] = replaceString("(", "&#40;",strParam[i].trim());
			strParam[i] = replaceString(")", "&#41;",strParam[i].trim());
			strParam[i] = replaceString("#", "&#35;",strParam[i].trim());
			strParam[i] = replaceString("&", "&#38;",strParam[i].trim());
			strParam[i] = replaceString("\"", "&quot;",strParam[i].trim());
		}
		return strParam;
	}
	
	/**
	 * 문자열 변환 처리
	 * 
	 * @param strParam 파라미터
	 * @return String
	 */
	public static String replaceString(String strSearch, String strReplace, String strSource) {
		int spot;
		String returnString;
		String origSource = new String(strSource);
		spot = strSource.indexOf(strSearch);
		if (spot > -1) { returnString = ""; }
		else { returnString = strSource; }
		while (spot > -1) {
			if (spot == strSource.length() + 1) {
				returnString = returnString.concat(strSource.substring(0, strSource.length() - 1).concat(strReplace));
				strSource = "";
			}
			else if (spot > 0) {
				returnString = returnString.concat(strSource.substring(0, spot).concat(strReplace));
				strSource = strSource.substring(spot + strSearch.length(), strSource.length());
			}
			else {
				returnString = returnString.concat(strReplace);
				strSource = strSource.substring(spot + strSearch.length(), strSource.length());
			}
			spot = strSource.indexOf(strSearch);
		}
		if (!strSource.equals(origSource)) { return returnString.concat(strSource); }
		else { return returnString; }
	}
	
	/**
	  * Object type 변수가 비어있는지 체크
	  * 
	  * @param obj 
	  * @return Boolean : true / false
	  */
	 @SuppressWarnings("rawtypes")
	public static Boolean empty(Object obj) {
	  if (obj instanceof String) return obj == null || "".equals(obj.toString().trim());
	  else if (obj instanceof List) return obj == null || ((List) obj).isEmpty();
	  else if (obj instanceof Map) return obj == null || ((Map) obj).isEmpty();
	  else if (obj instanceof Object[]) return obj == null || Array.getLength(obj) == 0;
	  else return obj == null;
	 }
	 
	 /**
	  * Object type 변수가 비어있지 않은지 체크
	  * 
	  * @param obj
	  * @return Boolean : true / false
	  */
	 public static Boolean notEmpty(Object obj) {
	  return !empty(obj);
	 }


	
}

