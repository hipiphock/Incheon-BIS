package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.BusstopVO;
import com.bis.vo.re.TbAdmBusstopVO;
import com.bis.vo.re.TbAdmNodeVO;
import com.bis.vo.re.TbBmcBstopbusarrivVO;
import com.bis.vo.re.TbBusstopVO;
import com.bis.vo.re.TbDmsPassingTimeVO;
import com.bis.vo.re.TbOmmBitVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BusstopDAO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * 2019.01.22	박주언		added new method(selectStopListwithCondition, selectStopDetailList,
 * 								selectStopDetailStatistics)
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("busstopDAO")
public class BusstopDAO {

	@Resource
    private SqlSessionTemplate sqlSession;
    
	
	public List<TbAdmBusstopVO> selectBusStopComunication(TbAdmBusstopVO vo) throws SQLException {
		return sqlSession.selectList("STOP.selectBusStopComunication", vo); 
	}
	
	/**
     * 경로에 대한 출발/도착 정류소 정보(v0110)
     */
	public List<TbAdmNodeVO> selectStopsLists(TbAdmNodeVO vo) throws SQLException {
		return sqlSession.selectList("STOP.selectStopsLists", vo); 
	}
	
	/**
     * 시설물유지관리보수(BIT) -  정류소명, 단축 ID, 시설물ID 카테고리 정보 (v0606)
     */
	public List<TbOmmBitVO> selectStopFacilCateList() throws SQLException {
		return sqlSession.selectList("STOP.selectStopFacilCateList"); 
	}
	
    /**
     * (지도)전체 정류장  조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectMapStopList(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectMapStopList", vo);
    }
    
    /**
     * 노드 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmNodeVO> selectMapNodeList(TbAdmNodeVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectMapNodeList", vo);
    }
    
    /**
     * 정류장 목록  조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbBusstopVO> selectStopList(TbBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectStopList", vo);
    }
    
    /**
     * 경유 노선 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectViaRouteList(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectViaRouteList", vo);
    }
    
    /**
     * 경유 노선 도착정보 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectArrivalInfoList(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectArrivalInfoList", vo);
    }
    
    
    /** 
     * 정류장 카테고리 조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectStopCateList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectStopCateList", vo);
	}

	
	/** 
     * 정류장기초정보조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectStopBasicInfoList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectStopBasicInfoList", vo);
	}

	/** 
     * 정류장기초정보수정
     * @param vo
     * @return
     * @throws SQLException
     */
	public int updateStopBasicInfo(TbAdmBusstopVO vo) {
		return sqlSession.update("STOP.updateStopBasicInfo", vo);
	}
    
	/** 
     * 정류소정차노선조회 - 정류소검색
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectSearchStopList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectSearchStopList", vo);
	}
	
	/** 
     * 정류소정차노선조회 - 정차노선검색
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectSearchStopRouteList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectSearchStopRouteList", vo);
	}
    
	/** 
     * 정류소관리 - 지하철역 조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectSearchSubwayList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectSearchSubwayList", vo);
	}
	
	/** 
     * 정류소관리 - 환승지하철역 조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectSearchTransferSubwayList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectSearchTransferSubwayList", vo);
	}
	
	/** 
     * 정류소관리 - 환승지하철역 추가
     * @param vo
     * @return
     * @throws SQLException
     */
	public int insertTransferSubway(TbAdmBusstopVO vo) {
		return sqlSession.insert("STOP.insertTransferSubway",vo);
	}

	/** 
     * 정류소관리 - 환승지하철역 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
	public int deleteTransferSubway(TbAdmBusstopVO vo) {
		 return sqlSession.delete("STOP.deleteTransferSubway", vo);
	}
	
	/** 
     * 정류소통과노선조회 - 정류소전체조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectSearchStopInfoAllList() {
		return sqlSession.selectList("STOP.selectSearchStopInfoAllList");
	}
	
	/** 
     * 정류소통과노선조회 - 정류소조건조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectSearchStopInfoList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectSearchStopInfoList", vo);
	}

	/** 
     * 정류소통과노선조회 - 통과노선조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectStopPassRouteList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectStopPassRouteList", vo);
	}
	

	/**
	 * 운행서비스평가 / 통과시간대비제공정보비교 / 정류소 검색결과
	 * @param vo
	 * @return
	 * @throws SQLException
	 * added by 박주언
	 */
	public List<TbAdmBusstopVO> selectStopListwithCondition(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectStopListwithCondition", vo);
	}
	
	/**
	 * 운행서비스평가 / 통과시간대비제공정보비교 / 정류소제공정보
	 * @param vo
	 * @return
	 * @throws SQLException
	 * added by 박주언
	 */
	public List<TbBmcBstopbusarrivVO> selectStopDetailList(TbBmcBstopbusarrivVO vo) {
		return sqlSession.selectList("STOP.selectStopDetailList", vo);
	}
	
	/**
	 * 운행서비스평가 / 통과시간대비제공정보비교 / 정류소제공정보(통계 결과만 보기)
	 * @param vo
	 * @return
	 * added by 박주언
	 */
	public List<TbDmsPassingTimeVO> selectStopDetailStatistics(TbDmsPassingTimeVO vo) {
		return sqlSession.selectOne("STOP.selectStopDetailStatistics", vo);
	}
	

	/** 
     * 정류소기초인허가정보 - 정류소인허가검색
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusstopVO> selectSearchPermissionList(TbAdmBusstopVO vo) {
		return sqlSession.selectList("STOP.selectSearchPermissionList", vo);
	}
	
	/** 
     * 정류소기초인허가정보 - 마스터 적용
     * @param vo
     * @return
     * @throws SQLException
     */
	public int updateMasterPermstat(TbAdmBusstopVO vo) {
		return sqlSession.update("STOP.updateMasterPermstat", vo);
	}
	
	
	
	
	
	

    //////////////////////
    /////////////////////////
    /////////////////////
    
    /**
     * 선택 노선의 정류장 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<BusstopVO> selectRouteStopList(BusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectRouteStopList", vo);
    }
    
    //#############v305
    /**
     * 노선도모니터링 버스클릭팝업
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusPopup(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectBusPopup", vo);
    }
    /**
     * 노선도모니터링 정류소클릭팝업
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectStopPopup(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectStopPopup", vo);
    }
    /**
     * 노선도모니터링 메시지
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateMsg(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.update("STOP.updateMsg", vo);
    }
    //#############v306
    /**
     * 정류소제공정보조회 왼쪽 그리드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBstopList(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectBstopList", vo);
    }
    
    /**
     * 정류소제공정보조회 오른쪽 그리드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBstopInfo(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectBstopInfo", vo);
    }
    
    /**
     * bittpcdList 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBittpcdList() throws SQLException {
    	return sqlSession.selectList("STOP.selectBittpcdList");
    }
    
    //#############v706
    /**
     * 차량별 수집현황조회 그리드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusEvent(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectBusEvent", vo);
    }
    
  //#############v707
    /**
     * 정류소별 수집현황조회 그리드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusStopEvent(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectBusStopEvent", vo);
    }
    
    
    //#############v708
    /**
     * 버스회사조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectCompList() throws SQLException {
    	return sqlSession.selectList("STOP.selectCompList");
    }  
    
    /**
     * 노선조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectRouteListWithComp(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectRouteListWithComp", vo);
    }
    
    /**
     * 차량번호조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectCarRegNo(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectCarRegNo", vo);
    }
    /**
     * 차량별 통신수집이력 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusEventLog(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectBusEventLog", vo);
    }
    
    //############v709
    
    /**
     * 노선별 평균수집율 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectRouteAvgPercnt(TbAdmBusstopVO vo) throws SQLException {
    	return sqlSession.selectList("STOP.selectRouteAvgPercnt", vo);
    }
    /**
     * 차량별 수집율 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusAvgPercnt(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusAvgPercnt", vo);
    }
    
  //###########v611
    /**
     * 차량단말기 제공이력조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusMdtEvent(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusMdtEvent", vo);
    }
    
    //###########v612
    /**
     * 차량단말기 수집이력조회
     * @param vo
     * @return
     * @throws SQLException
     */
    
    public List<TbAdmBusstopVO> selectRouteList() throws SQLException {
        return sqlSession.selectList("STOP.selectRouteList");
    }
    public List<TbAdmBusstopVO> selectBusListWithBusrun(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusListWithBusrun", vo);
    }
    public List<TbAdmBusstopVO> selectBusMdtCollEvent(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusMdtCollEvent", vo);
    }
    
    
    
  //###########v614
    /**
     * 노선별 운행대수 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    
    public List<TbAdmBusstopVO> selectRouteRunList(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectRouteRunList", vo);
    }
    
    public List<TbAdmBusstopVO> selectBusRunList(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusRunList", vo);
    }
    
    //###########v615
    /**
     * 회차별운행이력 왼쪽그리드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusWithStat(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusWithStat", vo);
    }
    /**
     * 회차별운행이력 오른쪽그리드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusRunEvent(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusRunEvent", vo);
    }
    

    //###########v616
    /**
     * 정류소별운행이력 왼쪽그리드
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectBusWithStat2(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectBusWithStat2", vo);
    }
    /**
     * 정류소별운행이력 오른쪽그리드
     * 정류소별 출발도착시간조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusstopVO> selectStartArrivTimeList(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectList("STOP.selectStartArrivTimeList", vo);
    }
    
    public int selectTestResult(TbAdmBusstopVO vo) throws SQLException {
        return sqlSession.selectOne("STOP.selectTestResult", vo);
    }
}
