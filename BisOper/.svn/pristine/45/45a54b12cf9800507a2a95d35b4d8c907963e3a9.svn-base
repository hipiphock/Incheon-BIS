package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbDmhBusrunrecVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BusCompService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2018.12.28    			 주형빈                    최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public interface BuscompService {

	List<TbAdmBusCompVO> selectBuscompCateList() throws SQLException;

	List<TbAdmBusCompVO> selectCompInfoList(TbAdmBusCompVO vo) throws SQLException;

	List<TbAdmGarageVO> selectGarageInfoList(TbAdmGarageVO vo) throws SQLException;

	List<TbDmhBusrunrecVO> selectCompRunCount(TbDmhBusrunrecVO vo) throws SQLException; //운행횟수관리-버스회사별운행횟수
	
	
	/***************************** 이하 DB 변경 전 *****************************/
	
}
