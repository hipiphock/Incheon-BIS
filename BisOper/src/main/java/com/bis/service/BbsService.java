package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbDmhBusrunrecVO;
import com.bis.vo.re.TbIchProtestreqVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BbsService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.16    			 주형빈                    최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public interface BbsService {

	List<TbIchProtestreqVO> selectReqtreatcdList(TbIchProtestreqVO vo) throws SQLException; //운행횟수관리-이의신청내역조회

	
}
