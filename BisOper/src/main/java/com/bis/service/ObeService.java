package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.ObeStatusVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : ObeService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public interface ObeService {

	List<String> selectObeVersionList() throws SQLException;
	List<ObeStatusVO> selectObeStateList(ObeStatusVO vo) throws SQLException;
}
