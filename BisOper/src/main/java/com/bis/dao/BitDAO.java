package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.ArrivalTrustVO;
import com.bis.vo.BitConnectHistoryVO;
import com.bis.vo.BitVO;
import com.bis.vo.MProcessCurrentVO;
import com.bis.vo.re.TbAdmBusstopVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbBitScenarioVO;
import com.bis.vo.re.TbIscBitmsgVO;
import com.bis.vo.re.TbIscBitstatVO;
import com.bis.vo.re.TbIshBitbusarrivVO;
import com.bis.vo.re.TbIshBitshockVO;
import com.bis.vo.re.TbNewBitparamVO;
import com.bis.vo.re.TbOmcBitctrlVO;
import com.bis.vo.re.TbOmcBitfileregVO;
import com.bis.vo.re.TbOmcMdtctrlVO;
import com.bis.vo.re.TbOmhFacilfailasVO;
import com.bis.vo.re.TbOmmBitVO;
import com.bis.vo.re.TbOmmBitparamVO;
import com.bis.vo.re.TbOmmFacilVO;
import com.bis.vo.re.TbOmmWbitparamVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BitDAO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("bitDAO")
public class BitDAO {

	@Resource
    private SqlSessionTemplate sqlSession;
	
	
	/**
	 *안내기통신메시지현황/이력  - 상단과 하단 수동메시지 항목 (v0302)
	 */
    public List<TbIscBitmsgVO> selectManualMsg(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectManualMsg", vo);
    }
	
	
    /**
	 *안내기통신메시지현황/이력  - 상단과 하단 파라미터, 안내기제어  항목 (v0302)
	 */
    public List<TbIscBitmsgVO> selectParamControl(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectParamControl", vo);
    }

	
    /**
	 *안내기통신메시지현황/이력  - 상단과 하단 파일다운로드 항목 (v0302)
	 */
    public List<TbIscBitmsgVO> selectFileDownload(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectFileDownload", vo);
    }
    
    /**
	 *안내기통신메시지현황/이력  - 상단과 하단 광역 BIT 수동메시지 (v0302)
	 */
    public List<TbIscBitmsgVO> selectWbitManual(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectWbitManual", vo);
    }
    
    /**
	 *제공시나리오 관리  - 파라미터ID 카테고리 정보 (v0304)
	 */
      public List<TbOmmBitparamVO> selectParamCateList() throws SQLException {
      	return sqlSession.selectList("BIT.selectParamCateList");
      }
      
      /**
  	 *제공시나리오 관리  - 인천안내기 제공시나리오 검색 (v0304)
  	 */
      public List<TbOmmBitparamVO> selectBitScenario(TbOmmBitparamVO vo) throws SQLException {
      	return sqlSession.selectList("BIT.selectBitScenario", vo);
      }
      
      /**
  	 *제공시나리오 관리  - 광역안내기 제공시나리오 검색 (v0304)
  	 */
      public List<TbOmmWbitparamVO> selectWBitScenario(TbOmmWbitparamVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectWBitScenario", vo);
      }
	 
      /**
  	 *제공정보표출현황조회 - 상단 설치장소, 안내기 ID 카테고리 정보(v0305)
  	 */
	   public List<TbOmmBitVO> selectBitInstallLocList() throws SQLException {
	  return sqlSession.selectList("BIT.selectBitInstallLocList");
	   }

	   /**
  	 *제공정보표출현황조회 - 안내기검색결과 조회(v0305)
  	 */
	   public List<TbOmmBitVO> selectBitLocation(TbOmmBitVO vo) throws SQLException {
	  return sqlSession.selectList("BIT.selectBitLocation", vo);
	   }
	   
	   /**
	 *안내기부가정보조회 - 좌측 인천 안내기 검색 리스트(v0307)
	 */
	   public List<TbIscBitstatVO> selectIncheonBitStat() throws SQLException {
	  return sqlSession.selectList("BIT.selectIncheonBitStat");
	   }
	   
	   /**
		 *안내기부가정보조회 - 좌측 광역, 부천, 김포 안내기(v0307)
		 */
	   public List<TbIscBitstatVO> selectOtherBitStat() throws SQLException {
	  return sqlSession.selectList("BIT.selectOtherBitStat");
	   }
	   
	   /**
		 *차량단말기 기초정보관리 - 차량단말기검색 (v0601)
		 */
	   public List<TbOmmFacilVO> selectBusTerminal(TbOmmFacilVO vo) throws SQLException {
	  return sqlSession.selectList("BIT.selectBusTerminal", vo);
	   }
	   
	   /**
		 *전산장비 기초정보관리 - 전산장비 검색(v0603)
		 */
	   public List<TbOmmFacilVO> selectEquip(TbOmmFacilVO vo) throws SQLException {
	  return sqlSession.selectList("BIT.selectEquip", vo);
	   }
	   
	   /**
		 * 전산장비 기초정보관리 - 전산장비 정보 수정, 차고지명  AP유형(v0603) 
		 */
	    public int updateGarageIdType(TbOmmFacilVO vo) throws SQLException {
	    	return sqlSession.update("BIT.updateGarageIdType", vo);
	    }
	    
	    /**
		 * 전산장비 기초정보관리 - 전산장비 정보 수정(v0603)
		 */
	    public int updateEquipInfo(TbOmmFacilVO vo) throws SQLException {
	    	return sqlSession.update("BIT.updateEquipInfo", vo);
	    }
	    
	    /**
		 * 전산장비 기초정보관리 - 전산장비 신규등록, 시설물id AP유형 차고지명 (v0603)
		 */
	    public int insertGarageap(TbOmmFacilVO vo) throws SQLException {
	    	return sqlSession.insert("BIT.insertGarageap", vo);
	    }
	    
	    /**
		 * 전산장비 기초정보관리 - 전산장비 신규등록, 시설물id AP유형 차고지명 (v0603)
		 */
	    public int insertFacil(TbOmmFacilVO vo) throws SQLException {
	    	return sqlSession.insert("BIT.insertFacil", vo);
	    }
	    
	    /**
		 *전산장비 기초정보관리 - 운영단말기 전산장비 검색(v0603)
		 */
	   public List<TbOmmFacilVO> selectOptermEquip(TbOmmFacilVO vo) throws SQLException {
	  return sqlSession.selectList("BIT.selectOptermEquip", vo);
	   }
	   
	   /**
		 * 전산장비 기초정보관리 - 운영단말기 정보 수정 (v0603)
		 */
	    public int updateOpterm(TbOmmFacilVO vo) throws SQLException {
	    	return sqlSession.update("BIT.updateOpterm", vo);
	    }
	   
	    /**
		 * 전산장비 기초정보관리 - 신규등록 시  쓸  optermid (v0603)
		 */
	    public TbAdmGarageVO selectMaxOptermid() throws SQLException {
	    	return sqlSession.selectOne("BIT.selectMaxOptermid");
	    }
	    
	    /**
		 * 전산장비 기초정보관리 - 운영단말기 신규등록 1(v0603) 
		 */
	    public int insertOpterm(TbOmmFacilVO vo) throws SQLException {
	    	return sqlSession.insert("BIT.insertOpterm", vo);
	    }
	    
		/**
		 * 차량단말기 상태정보조회/제어 - 제어정보입력/전송 (v0604) 
		 */
	    public int updateMdtCtrl(TbOmcMdtctrlVO vo) throws SQLException {
	    	return sqlSession.update("BIT.updateMdtCtrl", vo);
	    }
	    
	    /**
		 *시설물유지보수관리(BIT) - BIT A/S 이력검색 (v0606)
		 */
	   public List<TbOmmBitVO> selectBitAsList(TbOmhFacilfailasVO vo) throws SQLException {
	  return sqlSession.selectList("BIT.selectBitAsList", vo);
	   }
	   
	    /**
		 * 시설물유지보수관리(BIT)- BIT A/S 내역 수정  (v0606)
		 */
	    public int updateBitAs(TbOmhFacilfailasVO vo) throws SQLException {
	    	return sqlSession.update("BIT.updateBitAs", vo);
	    }
	    
	    /**
		 *  시설물유지보수관리(BIT)- BIT A/S 내역 삭제 (v0606)
		 */
	    public int deleteBitAs(TbOmhFacilfailasVO vo) throws SQLException {
	    	return sqlSession.update("BIT.deleteBitAs", vo);
	    }
	    
	    /**
		 * 시설물유지보수관리(BIT) - SMS 전송(v0603
		 */
	    public int insertSMSready(TbOmmBitVO vo) throws SQLException {
	    	return sqlSession.insert("BIT.insertSMSready", vo);
	    }
	    
	    /**
		 *시설물유지보수관리(BMT) - BIT A/S 이력검색 (v0607)
		 */
	   public List<TbOmhFacilfailasVO> selectBitAsBMTList(TbOmhFacilfailasVO vo) throws SQLException {
	  return sqlSession.selectList("BIT.selectBitAsBMTList", vo);
	   }
	   
	   /**
	 *시설물유지보수관리(BMT) - 차량번호 카테고리 정보 (v0607)
	 */
	   public List<TbOmmBitVO> selectCarInstallLoc() throws SQLException {
	  return sqlSession.selectList("BIT.selectCarInstallLoc");
	   }
	   
	   /**
	 *시설물유지보수관리(AP무선) - 시설물명 카테고리 정보 (v0608)
	 */
	   public List<TbOmmBitVO> selectFacilnmCate() throws SQLException {
	  return sqlSession.selectList("BIT.selectFacilnmCate");
	   }
	   
	   /**
	 *시설물유지보수관리(AP무선) - 무선AP A/S 이력검색 (v0608)
	 */
 	   public List<TbOmhFacilfailasVO> selectWAPAsList(TbOmhFacilfailasVO vo) throws SQLException {
 	  return sqlSession.selectList("BIT.selectWAPAsList", vo);
 	   }
 	   
 	   /**
	 *장애통계조회  (v0610)
	 */
 	   public List<TbOmhFacilfailasVO> selectFailStatList(TbOmhFacilfailasVO vo) throws SQLException {
 	  return sqlSession.selectList("BIT.selectFailStatList", vo);
 	   }
 	   
 	  /**
	 *BIT외부충격이력 - (인천)정류소안내기검색 (v0611)
	 */
 	   public List<TbOmmBitVO> selectStopTerminal(TbOmmBitVO vo) throws SQLException {
 	  return sqlSession.selectList("BIT.selectStopTerminal", vo);
 	   }
 	   
 	  /**
	 *BIT외부충격이력 - (인천)충격 이력 (v0611)
	 */
 	   public List<TbIshBitshockVO> selectColHistory(TbIshBitshockVO vo) throws SQLException {
 	  return sqlSession.selectList("BIT.selectColHistory", vo);
 	   }
	   
 	  /**
	 *BIT외부충격이력 - (광역) 정류소안내기 검색
	 */
	   public List<TbOmmBitVO> selectWStopTerminal(TbOmmBitVO vo) throws SQLException {
	  return sqlSession.selectList("BIT.selectWStopTerminal", vo);
	   } 
 	   
    /**
     * BIT 목록 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmBitVO> selectBitList(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitList", vo);
    }
	
    /**
     * BIT 목록 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmBitVO> selectMapBitList(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectMapBitList", vo);
    }

    /**
     * BIT 충격감지 이력
     * @return BIT 충격감지 이력 - 조회결과
     * @throws SQLException
     */
    public List<TbIshBitshockVO> selectShockHisList(TbIshBitshockVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectShockHisList", vo);
    }
    
	/**
	 * BIT 상태 이력
	 * @return BIT 상태 이력
	 * @throws SQLException
	 */
	public List<TbIscBitstatVO> selectBitStateHisList(TbIscBitstatVO vo) throws SQLException {
		return sqlSession.selectList("BIT.selectBitStateHisList", vo);
	}
	   
    /**
     * 이력/통계  - BIT 제공정보 이력 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIshBitbusarrivVO> selectBitOfferInfoHisList(TbIshBitbusarrivVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitOfferInfoHisList", vo);
    }

	/**
	 * BIT 상태 리스트 조회
	 * @return BIT 상태 리스트 조회
	 * @throws SQLException
	 */
	public List<TbIscBitstatVO> selectBitStateList(TbIscBitstatVO vo) throws SQLException {
		return sqlSession.selectList("BIT.selectBitStateList", vo);
	}

    /**
     * BIT 장애 이력 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmhFacilfailasVO> selectBitFailList(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitFailList", vo);
    }

    /**
     * BIT 장애 이력조회 - BIT지점목록
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmBitVO> selectBitLocationList(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitLocationList", vo);
    }
    
    /**
     * BIT 장애 이력조회 - BIT 장애 처리유형
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmhFacilfailasVO> selectFailTreatTypeList(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectFailTreatTypeList", vo);
    }
    
    /**
     * BIT 장애 이력조회 - BIT 장애 유형
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmhFacilfailasVO> selectFailTypeList(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectFailTypeList", vo);
    }
    
    /**
     * BIT 장애 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateBitFail(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateBitFail", vo);
    }
    
    /**
     * BIT 장애 등록
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertBitFail(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitFail", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 노선별 문자메세지 전송
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitSmsListByRoute(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitSmsListByRoute", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 도로별 문자메세지 전송
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitSmsListByRoad(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitSmsListByRoad", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 문자메세지 - 메세지폼리스트
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectMsgFormList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectMsgFormList", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 메세지폼 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertMsgForm(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertMsgForm", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 메세지폼 수정
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateMsgForm(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateMsgForm", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 메세지폼 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteMsgForm(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteMsgForm", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 수동메세지
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitCurMessageList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitCurMessageList", vo);
    }
    
    /**
     * BIT제공정보 이력조회 - 수동메세지 이력
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitHisMessageList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitHisMessageList", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 파라미터
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitCurParameterList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitCurParameterList", vo);
    }
    
    /**
     * BIT제공정보 이력조회 - 파라미터 이력
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitHisParameterList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitHisParameterList", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 안내기 제어
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitCurControlList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitCurControlList", vo);
    }
    
    /**
     * BIT제공정보 이력조회 - 안내기 제어 이력
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitHisControlList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitHisControlList", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 파일 다운로드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitCurDownloadList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitCurDownloadList", vo);
    }
    
    /**
     * BIT제공정보 이력조회 - 파일 다운로드 이력
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitHisDownloadList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitHisDownloadList", vo);
    }
    
    /**
     * BIT제공정보 현황조회 - 광역수동메세지
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitCurWMessageList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitCurWMessageList", vo);
    }
    
    /**
     * BIT제공정보 이력조회 - 광역수동메세지 이력
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIscBitmsgVO> selectBitHisWMessageList(TbIscBitmsgVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitHisWMessageList", vo);
    }
    
    /**
     * BIT 설치 위치 조회
     * @return
     * @throws SQLException
     */
    public List<TbOmmBitVO> selectBitInstallLoc() throws SQLException {
    	return sqlSession.selectList("BIT.selectBitInstallLoc");
    }
    
    /**
     * BIT 정보관리 조회
     * @return
     * @throws SQLException
     */
    public List<TbOmmBitVO> selectBitManageList(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitManageList", vo);
    }

    /**
     * BIT 제어이력 등록
     * @return
     * @throws SQLException
     */
    public int insertBitCtrlResult(TbOmcBitctrlVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitCtrlResult", vo);
    }
    
    /**
     * BIT 제어이력 등록
     * @return
     * @throws SQLException
     */
    public int deleteBitCtrlResult(TbOmcBitctrlVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteBitCtrlResult", vo);
    }
    
    /**
     * BIT 제어 결과 목록 조회
     * @return
     * @throws SQLException
     */
    public List<TbOmcBitctrlVO> selectBitCtrlResultList(TbOmcBitctrlVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitCtrlResultList", vo);
    }
    
    /**
     * BIT 파라미터 한건
     * @return
     * @throws SQLException
     */
    public TbNewBitparamVO selectBitParam(TbNewBitparamVO vo) throws SQLException {
    	return sqlSession.selectOne("BIT.selectBitParam", vo);
    }
    
    /**
     * 시나리오 화면 자료 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertScenarioDisplay(BitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertScenarioDisplay", vo);
    }
    
    /**
     * 시나리오 화면 자료 추가(text)
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertScenarioText(BitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertScenarioText", vo);
    }
    
    /**
     * BIT 제공파라미터 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbNewBitparamVO> selectBitParamList(TbNewBitparamVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitParamList", vo);
    }
    
    /**
     * BIT 제공파라미터(시나리오) 등록
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertBitParam(TbNewBitparamVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitParam", vo);
    }
    
    /**
     * BIT 제공파라미터(시나리오) 수정
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateBitParam(TbNewBitparamVO vo) throws SQLException {
    	return sqlSession.insert("BIT.updateBitParam", vo);
    }
    
    /**
     * BIT 제공파라미터(시나리오) 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteBitParam(TbNewBitparamVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteBitParam", vo);
    }
    
    /**
     * BIT 제공정보 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbIshBitbusarrivVO> selectBitArrivalList(TbIshBitbusarrivVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitArrivalList", vo);
    }
    
	/**
     * BIT 이상 목록 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmBitVO> selectBitFaultList(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitFaultList", vo);
    }
    
    /**
     * BIT 지점등록 - 정류장 리스트 조회
     * @param vo
     * @return 지점 리스트
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusStopList(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBusStopList", vo);
    }
    
    /**
     * BIT 등록 - 신규 아이디 조회
     * @param vo
     * @return 
     * @throws SQLException
     */
    public TbOmmBitVO selectAddBitFacilid() throws SQLException {    	
    	return sqlSession.selectOne("BIT.selectAddBitFacilid");
    }
    /**
     * BIT 제어된 파라미터 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public TbNewBitparamVO selectCtrlBitParam(TbNewBitparamVO vo) throws SQLException {
    	return sqlSession.selectOne("BIT.selectCtrlBitParam", vo);
    }
    
    /**
     * FTP 등록 파일 목록 조회 
     * @param vo
     * @return 지점 리스트
     * @throws SQLException
     */
    public List<TbOmcBitfileregVO> selectFtpFileList(TbOmcBitfileregVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectFtpFileList", vo);
    }
    
    /**
     * FTP 파일 등록 
     * @param vo
     * @throws SQLException
     */
    public int insertFtpFile(TbOmcBitfileregVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertFtpFile", vo);
    }
    
    /**
     * BIT 장애 이미지 조회 
     * @param vo
     * @throws SQLException
     */
    public TbOmhFacilfailasVO selectFaultImg(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.selectOne("BIT.selectFaultImg", vo);
    }
    
    /**
     * BIT 장애 이미지 등록 
     * @param vo
     * @throws SQLException
     */
    public int insertFaultImg(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertFaultImg", vo);
    }
    
    /**
     * BIT 장애 이미지 삭제 
     * @param vo
     * @throws SQLException
     */
    public int deleteFaultImg(TbOmhFacilfailasVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteFaultImg", vo);
    }
    
    /**
     * 시설물상태현황 - 선택된 시설물 카운트
     * @param vo
     * @throws SQLException
     */
    public List<TbOmhFacilfailasVO> selectFacilitiesCount(TbOmhFacilfailasVO vo) {
    	return sqlSession.selectList("BIT.selectFacilitiesCount", vo);
	}

    /**
     * 시설물상태현황 - 선택된 시설물 장애요약
     * @param vo
     * @throws SQLException
     */
	public List<TbOmhFacilfailasVO> selectObstacleSumupList(TbOmhFacilfailasVO vo) {
		return sqlSession.selectList("BIT.selectObstacleSumupList", vo);
	}
	
	/**
     * 시설물상태현황 - 선택된 시설물 장애현황
     * @param vo
     * @throws SQLException
     */
	public List<TbOmhFacilfailasVO> selectObstacleDetailList(TbOmhFacilfailasVO vo) {
		return sqlSession.selectList("BIT.selectObstacleDetailList", vo);
	}
    
	
	
    
    //################
	//############# 이하 구버전 코드
    
    
    /**
     * 테이블 스페이스 및 상태 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<BitVO> selectBitStatusList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitStatusList", vo);
    }
    
    
    
    /**
     * BIT 목록 조회2
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<BitVO> selectBitList2(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitList2", vo);
    }
    
    /**
     * 선택된 BIT 정보 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public BitVO selectSelBitInfo(BitVO vo) throws SQLException {
    	return sqlSession.selectOne("BIT.selectSelBitInfo", vo);
    }

    /**
     * BIT 정보 관리 리스트 조회
     * @param vo
     * @return BIT 정보 리스트
     * @throws SQLException
     */
    public List<BitVO> selectBitInfoList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitInfoList", vo);
    }
    
    /**
     * BIT 등록 - TB_OMM_BIT
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertBitInfo(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitInfo", vo);
    }
    
    /**
     * BIT 등록 - TB_OMM_FACIL
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertBitInfoFacil(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitInfoFacil", vo);
    }
    
    /**
     * BIT 정보관리(BIT) 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int updateBitInfo(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateBitInfo", vo);
    }
    
    /**
     * BIT 정보관리(FACIL) 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int updateBitInfoFacil(TbOmmBitVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateBitInfoFacil", vo);
    }
    
    
    /**
     * BIT 적용중인 시나리오 조회
     * @param vo
     * @return 선택된 BIT에 적용된 시나리오 상세목록
     * @throws SQLException
     */
    public List<TbBitScenarioVO> selectScenarioDetailList(TbBitScenarioVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectScenarioDetailList", vo);
    }
    
    /**
     * BIT 선택 된 시나리오 조회
     * @param vo
     * @return 사용 중인 시나리오 목록 조회
     * @throws SQLException
     */
    public List<TbBitScenarioVO> selectScenarioList(TbBitScenarioVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectScenarioList", vo);
    }
    
    /**
     * BIT 시나리오 업데이트
     * @param vo
     * @throws SQLException
     */
    public void updateBitScenario(BitVO vo) throws SQLException {
    	sqlSession.update("BIT.updateBitScenario", vo);
    }
    
    /**
     * BIT 그룹 조회
     * @param vo
     * @return BIT 그룹
     * @throws SQLException
     */
    public List<BitVO> selectBitGroupList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitGroupList", vo);
    }
    
    /**
     * BIT 그룹 상세 조회
     * @param vo
     * @return BIT 그룹 상세 리스트
     * @throws SQLException
     */
    public List<BitVO> selectBitGroupDetailList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitGroupDetailList", vo);
    }
    
    /**
     * BIT 정보관리 - BIT 그룹 - 우측 BIT 리스트
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<BitVO> selectBitRightList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitRightList", vo);
    }
    
    /**
     * BIT 그룹 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertBitCate(BitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitCate", vo);
    }
    
    /**
     * BIT 그룹 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteBitCate(BitVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteBitCate", vo);
    }
    
    /**
     * BIT 그룹 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int updateBitCate(BitVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateBitCate", vo);
    }
    
    /**
     * BIT 그룹 상세 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteBitCateDetail(BitVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteBitCateDetail", vo);
    }
    
    /**
     * BIT 그룹 상세 추가
     * @param map
     * @return
     * @throws SQLException
     */
    public final int insertBitCateDetail(BitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitCateDetail", vo);
    }
    
    /**
     * BIT 테이블 BIT_CATE_ID column 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int updateBitCateId(BitVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateBitCateId", vo);
    }
    
    /**
     * BIT 사업 조회
     * @param vo
     * @return BIT 사업
     * @throws SQLException
     */
    public List<BitVO> selectBusinessList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBusinessList", vo);
    }
    
    /**
     * BIT 사업 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertBusiness(BitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBusiness", vo);
    }
    
    /**
     * BIT 사업 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteBusiness(BitVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteBusiness", vo);
    }
    
    /**
     * BIT 사업 전체 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteAllBusiness(BitVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteAllBusiness", vo);
    }
    
    /**
     * BIT 제조사 조회
     * @param vo
     * @return BIT 제조사
     * @throws SQLException
     */
    public List<BitVO> selectBitCompanyList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitCompanyList", vo);
    }
    
    /**
     * BIT 제조사 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertBitCompany(BitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitCompany", vo);
    }
    
    /**
     * BIT 제조사 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteBitCompany(BitVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteBitCompany", vo);
    }
    
    /**
     * BIT 제조사 전체 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteAllBitCompanyList(BitVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteAllBitCompanyList", vo);
    }
    
    /**
     * BIT type 조회
     * @return BIT type
     * @throws SQLException
     */
    public List<BitVO> selectBitType() throws SQLException {
    	return sqlSession.selectList("BIT.selectBitType");
    }
    
    /**
     * 시나리오 이미지 리스트 조회
     * @param vo
     * @return 시나리오 이미지 리스트
     * @throws SQLException
     */
    public List<BitVO> selectImageList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectImageList", vo);
    }
    
    /**
     * BIT 설치 유형 조회
     * @return BIT 설치 유형 조회
     * @throws SQLException
     */
    public List<BitVO> selectBitInstallType() throws SQLException {
    	return sqlSession.selectList("BIT.selectBitInstallType");
    }
    
    /**
     * 시나리오 영상 리스트 조회
     * @param vo
     * @return 시나리오 영상 리스트
     * @throws SQLException
     */
    public List<BitVO> selectVideoList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectVideoList", vo);
    }
    
    /**
     * 시나리오 홍보 리스트 조회
     * @param vo
     * @return 시나리오 홍보 리스트
     * @throws SQLException
     */
    public List<BitVO> selectPromotionList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectPromotionList", vo);
    }
    
    /**
     * 시나리오 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertBitScenario(TbBitScenarioVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertBitScenario", vo);
    }
    
    /**
     * 시나리오 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteBitScenario(TbBitScenarioVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteBitScenario", vo);
    }
 
    /**
     * 시나리오 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int updateScenario(BitVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateScenario", vo);
    }
    
    /**
     * 시나리오 상세목록 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int deleteScenarioDetail(BitVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteScenarioDetail", vo);
    }
    
    /**
     * 시나리오 상세목록 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int insertScenarioDetail(BitVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertScenarioDetail", vo);
    }
    
    /**
     * 시나리오 화면 자료 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int updateScenarioDisplay(BitVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateScenarioDisplay", vo);
    }
    
    /**
     * 시나리오 화면 자료 ID
     * @return
     * @throws SQLException
     */
    public final int selectDisplayDataId() throws SQLException {
    	return sqlSession.selectOne("BIT.selectDisplayDataId");
    }
    
    /**
     * 광역 시나리오 데이터 등록
     * @return
     * @throws SQLException
     */
    public final int insertWideScenarioData(TbBitScenarioVO vo) throws SQLException {
    	return sqlSession.insert("BIT.insertWideScenarioData", vo);
    }
    
    public final int updateWideScenarioInfo(TbBitScenarioVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateWideScenarioInfo", vo);
    }
    
    /**
     * 광역 시나리오 데이터 삭제
     * @return
     * @throws SQLException
     */
    public final int deleteWideScenarioData(TbBitScenarioVO vo) throws SQLException {
    	return sqlSession.delete("BIT.deleteWideScenarioData", vo);
    }
    
    /**
     * BIT 제어 목록 조회
     * @param vo
     * @return BIT 제어 목록
     * @throws SQLException
     */
    public List<TbIscBitstatVO> selectBitControlList(TbIscBitstatVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitControlList", vo);
    }
    
    /**
     * BIT 제어 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public final int updateBitControl(BitVO vo) throws SQLException {
    	return sqlSession.update("BIT.updateBitControl", vo);
    }
    
    /**
     * BIT 모니터링 리스트 조회
     * @param vo
     * @return BIT 모니터링 리스트
     * @throws SQLException
     */
    public List<BitVO> selectBitMonitoringList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitMonitoringList", vo);
    }
    
    /**
     * 전체 BIT 리스트 조회
     * @return 전체 BIT
     * @throws SQLException
     */
    public List<BitVO> selectBitListAll() throws SQLException {
    	return sqlSession.selectList("BIT.selectBitListAll");
    }

	/**
     * BIT (지도표출용) 목록 조회
     * @throws SQLException
     */
    public List<BitVO> selectBitMapList(BitVO vo) throws SQLException {
    	return sqlSession.selectList("BIT.selectBitMapList", vo);
    } 

	/**
	 * BIT 초기 접속 이력
	 * 
	 * @return BIT 초기 접속 이력
	 * @throws SQLException
	 */
	public List<BitConnectHistoryVO> selectBitEarlyConnList(BitConnectHistoryVO vo) throws SQLException {
		return sqlSession.selectList("BIT.selectBitEarlyConnList", vo);
	}
	
	/**
	 * 분석/가공 - 도착정보 신뢰도 분석
	 * 
	 * @return 도착정보 신뢰도 분석
	 * @throws SQLException
	 */
	public List<ArrivalTrustVO> selectArrivalTrustList(ArrivalTrustVO vo) throws SQLException {
		return sqlSession.selectList("BIT.selectArrivalTrustList", vo);		
	}

	/**
	 * 분석/가공 - 도착정보 신뢰도 분석/상세
	 * 
	 * @return 도착정보 신뢰도 분석/상세
	 * @throws SQLException
	 */
	public List<ArrivalTrustVO> selectArrivalTrustInfo(ArrivalTrustVO vo) throws SQLException {
		return sqlSession.selectList("BIT.selectArrivalTrustInfo", vo);
	}

	/**
	 * 분석/가공 - 도착정보 신뢰도 분석 - 그래프 용
	 * 
	 * @return 도착정보 신뢰도 분석/상세
	 * @throws SQLException
	 */
	public List<ArrivalTrustVO> selectTrustChartList(ArrivalTrustVO vo) throws SQLException {
		return sqlSession.selectList("BIT.selectTrustChartList", vo);
	}
	
	/**
	 * 분석/가공 - 통행 시간
	 * @return 도착정보 신뢰도 분석/상세
	 * @throws SQLException
	 */
	public List<MProcessCurrentVO> selectBitPassTimeList(MProcessCurrentVO vo) throws SQLException {
		return sqlSession.selectList("BIT.selectBitPassTimeList");
	}
	
	/**
	 * 문자 메시지 전송 결과 등록
	 * @return 도착정보 신뢰도 분석/상세
	 * @throws SQLException
	 */
	public int insertBitMsg(TbIscBitmsgVO vo) throws SQLException {
		return sqlSession.insert("BIT.insertBitMsg", vo);
	}
	
	/**
	 * 문자 메시지 전송 결과 삭제
	 * @return 도착정보 신뢰도 분석/상세
	 * @throws SQLException
	 */
	public int deleteBitMsg(TbIscBitmsgVO vo) throws SQLException {
		return sqlSession.delete("BIT.deleteBitMsg", vo);
	}




	

}
