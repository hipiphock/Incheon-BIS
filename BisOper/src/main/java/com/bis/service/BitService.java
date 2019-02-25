package com.bis.service;

import java.sql.SQLException;
import java.util.List;

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
 * Class Name 	  : BitService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public interface BitService {
	
	List<TbIscBitmsgVO> selectManualMsg(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectParamControl(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectFileDownload(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectWbitManual(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbOmmBitparamVO> selectParamCateList() throws SQLException;
	
	List<TbOmmBitparamVO> selectBitScenario(TbOmmBitparamVO vo) throws SQLException;

	List<TbOmmWbitparamVO> selectWBitScenario(TbOmmWbitparamVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectBitInstallLocList() throws SQLException;
	
	List<TbOmmBitVO> selectBitLocation(TbOmmBitVO vo) throws SQLException;
	
	List<TbIscBitstatVO> selectIncheonBitStat() throws SQLException;
	
	List<TbIscBitstatVO> selectOtherBitStat() throws SQLException;
	
	List<TbOmmFacilVO> selectBusTerminal(TbOmmFacilVO vo) throws SQLException;
	
	List<TbOmmFacilVO> selectEquip(TbOmmFacilVO vo) throws SQLException;
	
	int updateGarageIdType(TbOmmFacilVO vo) throws SQLException;

	int updateEquipInfo(TbOmmFacilVO vo) throws SQLException;
	
	int insertGarageap(TbOmmFacilVO vo) throws SQLException;
	
	int insertFacil(TbOmmFacilVO vo) throws SQLException;
	
	List<TbOmmFacilVO> selectOptermEquip(TbOmmFacilVO vo) throws SQLException;
	
	int updateOpterm(TbOmmFacilVO vo) throws SQLException;
	
	TbAdmGarageVO selectMaxOptermid() throws SQLException;
	
	int insertOpterm(TbOmmFacilVO vo) throws SQLException;
	
	int updateMdtCtrl(TbOmcMdtctrlVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectBitAsList(TbOmhFacilfailasVO vo) throws SQLException;

	int updateBitAs(TbOmhFacilfailasVO vo) throws SQLException;
	
	int deleteBitAs(TbOmhFacilfailasVO vo) throws SQLException;
	
	int insertSMSready(TbOmmBitVO vo) throws SQLException;
	
	List<TbOmhFacilfailasVO> selectBitAsBMTList(TbOmhFacilfailasVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectCarInstallLoc() throws SQLException;
	
	List<TbOmmBitVO> selectFacilnmCate() throws SQLException;
	
	List<TbOmhFacilfailasVO> selectWAPAsList(TbOmhFacilfailasVO vo) throws SQLException;
	
	List<TbOmhFacilfailasVO> selectFailStatList(TbOmhFacilfailasVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectStopTerminal(TbOmmBitVO vo) throws SQLException;
	
	List<TbIshBitshockVO> selectColHistory(TbIshBitshockVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectWStopTerminal(TbOmmBitVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectBitList(TbOmmBitVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectMapBitList(TbOmmBitVO vo) throws SQLException;

	List<TbIshBitshockVO> selectShockHisList(TbIshBitshockVO vo) throws SQLException;

	List<TbIscBitstatVO> selectBitStateHisList(TbIscBitstatVO vo) throws SQLException;	

	List<TbIshBitbusarrivVO> selectBitOfferInfoHisList(TbIshBitbusarrivVO vo) throws SQLException;

	List<TbIscBitstatVO> selectBitStateList(TbIscBitstatVO vo) throws SQLException;

	List<TbOmhFacilfailasVO> selectBitFailList(TbOmhFacilfailasVO vo) throws SQLException;
		
	List<TbOmmBitVO> selectBitLocationList(TbOmmBitVO vo) throws SQLException;
	
	List<TbOmhFacilfailasVO> selectFailTreatTypeList(TbOmhFacilfailasVO vo) throws SQLException;
	
	List<TbOmhFacilfailasVO> selectFailTypeList(TbOmhFacilfailasVO vo) throws SQLException;
	
	int updateBitFail(TbOmhFacilfailasVO vo) throws SQLException;
	
	int insertBitFail(TbOmhFacilfailasVO vo) throws SQLException;

	List<TbNewBitparamVO> selectBitParamList(TbNewBitparamVO vo) throws SQLException;
		
	int insertBitParam(TbNewBitparamVO vo) throws SQLException;

	int updateBitParam(TbNewBitparamVO vo) throws SQLException;
	
	int deleteBitParam(TbNewBitparamVO vo) throws SQLException;

	List<TbOmmBitVO> selectBitFaultList(TbOmmBitVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectBitSmsListByRoute(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectBitSmsListByRoad(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectMsgFormList(TbIscBitmsgVO vo) throws SQLException;
	
	int insertMsgForm(TbIscBitmsgVO vo) throws SQLException;
	
	int updateMsgForm(TbIscBitmsgVO vo) throws SQLException;
	
	int deleteMsgForm(TbIscBitmsgVO vo) throws SQLException;

	List<TbIscBitmsgVO> selectBitCurMessageList(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectBitHisMessageList(TbIscBitmsgVO vo) throws SQLException;

	List<TbIscBitmsgVO> selectBitCurParameterList(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectBitHisParameterList(TbIscBitmsgVO vo) throws SQLException;

	List<TbIscBitmsgVO> selectBitCurControlList(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectBitHisControlList(TbIscBitmsgVO vo) throws SQLException;

	List<TbIscBitmsgVO> selectBitCurDownloadList(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectBitHisDownloadList(TbIscBitmsgVO vo) throws SQLException;

	List<TbIscBitmsgVO> selectBitCurWMessageList(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbIscBitmsgVO> selectBitHisWMessageList(TbIscBitmsgVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectBitInstallLoc() throws SQLException;

	List<TbOmmBitVO> selectBitManageList(TbOmmBitVO vo) throws SQLException;

	int insertBitCtrlResult(TbOmcBitctrlVO vo) throws SQLException;
    
    List<TbOmcBitctrlVO> selectBitCtrlResultList(TbOmcBitctrlVO vo) throws SQLException;

    TbNewBitparamVO selectBitParam(TbNewBitparamVO vo) throws SQLException;
    
    int registBit(TbOmmBitVO vo) throws SQLException;
    
    int modBitInfo(TbOmmBitVO vo) throws SQLException;
	
    int insertScenarioDisplay(BitVO vo) throws SQLException;
    
    int insertScenarioText(BitVO vo) throws SQLException;
	
    int updateScenario(BitVO vo) throws SQLException;
	
    List<TbIshBitbusarrivVO> selectBitArrivalList(TbIshBitbusarrivVO vo) throws SQLException;
	
    List<TbAdmBusstopVO> selectBusStopList(TbAdmBusstopVO vo) throws SQLException;
    
    TbOmmBitVO selectAddBitFacilid() throws SQLException;
    
	TbNewBitparamVO selectCtrlBitParam(TbNewBitparamVO vo) throws SQLException;

	List<TbOmcBitfileregVO> selectFtpFileList(TbOmcBitfileregVO vo) throws SQLException;

	int insertFtpFile(TbOmcBitfileregVO vo) throws SQLException;
	
	TbOmhFacilfailasVO selectFaultImg(TbOmhFacilfailasVO vo) throws SQLException;
    
    int insertFaultImg(TbOmhFacilfailasVO vo) throws SQLException;
    
    int deleteFaultImg(TbOmhFacilfailasVO vo) throws SQLException;
	
    List<TbOmhFacilfailasVO> selectFacilitiesCount(TbOmhFacilfailasVO vo) throws SQLException; //시설물상태현황 - 선택된 시설물 카운트

	List<TbOmhFacilfailasVO> selectObstacleSumupList(TbOmhFacilfailasVO vo) throws SQLException; //시설물상태현황 - 선택된 시설물 장애요약
	
	List<TbOmhFacilfailasVO> selectObstacleDetailList(TbOmhFacilfailasVO vo) throws SQLException; //시설물상태현황 - 선택된 시설물 장애현황
	
	
	//##################이하 구버전 소스
	List<BitVO> selectBitStatusList(BitVO vo) throws SQLException;	
	
	List<BitVO> selectBitList2(BitVO vo) throws SQLException;
	
	BitVO selectSelBitInfo(BitVO vo) throws SQLException;
	
	List<BitVO> selectBitInfoList(BitVO vo) throws SQLException;	
	

	List<TbBitScenarioVO> selectScenarioDetailList(TbBitScenarioVO vo) throws SQLException;
	
	List<TbBitScenarioVO>	selectScenarioList(TbBitScenarioVO vo) throws SQLException;
	
	int updateBitScenario(List<BitVO> vo) throws SQLException;
	
	int saveScenario(List<BitVO> vo1, List<BitVO> vo2) throws SQLException;
	
	int saveWideScenario(List<TbBitScenarioVO> list) throws SQLException;
	
	List<BitVO> selectBitGroupList(BitVO vo) throws SQLException;
	
	List<BitVO> selectBitGroupDetailList(BitVO vo) throws SQLException;
	
	List<BitVO> selectBitRightList(BitVO vo) throws SQLException;
	
	int insertBitCate(BitVO vo) throws SQLException;
	
	int deleteBitCate(List<BitVO> vo) throws SQLException;
	
	int updateBitCate(BitVO vo) throws SQLException;
	
	int saveBitCate(List<BitVO> vo, List<BitVO> vo2) throws SQLException;
	
	int deleteBitCateDetail(BitVO vo) throws SQLException;
	
	List<BitVO> selectBusinessList(BitVO vo) throws SQLException;
	
	int insertBusiness(BitVO vo) throws SQLException;
	
	int deleteBusiness(BitVO vo) throws SQLException;
	
	int saveBusiness(List<BitVO> vo) throws SQLException;
	
	int deleteAllBusiness(BitVO vo) throws SQLException;
	
	List<BitVO> selectBitCompanyList(BitVO vo) throws SQLException;
	
	int insertBitCompany(BitVO vo) throws SQLException;
	
	int deleteBitCompany(BitVO vo) throws SQLException;
	
	int saveBitCompany(List<BitVO> vo) throws SQLException;
	
	List<BitVO> selectBitType() throws SQLException;
	
	List<BitVO> selectBitInstallType() throws SQLException;
	
	List<BitVO> selectImageList(BitVO vo) throws SQLException;
	
	List<BitVO> selectVideoList(BitVO vo) throws SQLException;
	
	List<BitVO> selectPromotionList(BitVO vo) throws SQLException;
	
	int insertBitScenario(TbBitScenarioVO vo) throws SQLException;
	
	int deleteBitScenario(TbBitScenarioVO vo) throws SQLException;
	
	List<TbIscBitstatVO> selectBitControlList(TbIscBitstatVO vo) throws SQLException;
	
	int updateBitControl(BitVO vo) throws SQLException;
	
	List<BitVO> selectBitMonitoringList(BitVO vo) throws SQLException;
	
	List<BitVO> selectBitListAll() throws SQLException;
	
	List<BitConnectHistoryVO> selectBitEarlyConnList(BitConnectHistoryVO vo) throws SQLException;

	List<BitVO> selectBitMapList(BitVO vo) throws SQLException;
	
	int selectDisplayDataId() throws SQLException;
		
	
	
	List<ArrivalTrustVO> selectArrivalTrustList(ArrivalTrustVO vo) throws SQLException;

	List<ArrivalTrustVO> selectArrivalTrustInfo(ArrivalTrustVO vo) throws SQLException;
	
	List<ArrivalTrustVO> selectTrustChartList(ArrivalTrustVO vo) throws SQLException;
	
	List<MProcessCurrentVO> selectBitPassTimeList(MProcessCurrentVO vo) throws SQLException;
	
	
	/**
	 * 문자 메시지 전송 결과 등록
	 * @return 도착정보 신뢰도 분석/상세
	 * @throws SQLException
	 */
	int insertBitMsg(TbIscBitmsgVO vo) throws SQLException;

	

	
}
