package com.bis.soc;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

import com.bis.comm.BodyFred;
import com.bis.util.TypeHelper;


/**
 * <PRE>
 * System Name 	  : 강남순환도시고속도로 - 운영단말
 * Business Name  : 
 * Class Name 	  : TcpClient.java
 * Description 	  : 
 * Modification History 
 *   수정일        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2016.04.25	  황중모      최초생성
 * </PRE>
 * @version 1.0
 * @see tps.ftms.communication.TcpClient
 * @author Copyright (C) 2016 by topis.seoul.go.kr All right reserved.
 */
public class TcpClient implements Runnable {
    
	private Socket msock;
	private int nTimeOut = 3000;
	private OutputStream mSender;
	private InputStream mReceiver;
	private String mStrip;
	private int nPort;
    
	private int nFredSeq = 100000;
    public TcpClient() {
 	    	
    }
    
    public TcpClient(String strIp, int nport) {
    	this.mStrip = strIp;
    	this.nPort = nport;
    }    

    public int Connect() {
    	System.out.println("Try Connect " + mStrip );
    	try {
    		if(msock != null) msock.close();
			msock =  new Socket(mStrip, nPort);
			msock.setSoTimeout(nTimeOut);
		}
    	catch (Exception e) {
			e.printStackTrace();
			return -1;
		}    	
    	try {
			mSender = msock.getOutputStream();
			mReceiver = msock.getInputStream();
		} catch (IOException e) {
			e.printStackTrace();
			return -2;
		}
    	return 1;
    	
    }
    
    public synchronized int SendData(byte []sendBuff,byte []recvbuf) {
    	if(msock == null || msock.isConnected() == false || msock.isClosed() == true) {
    		if(msock != null) System.out.println("Try Connect isCon = " +msock.isConnected() + " isClosed  = " +msock.isClosed() + " IP = " + mStrip );
    		Connect();
    	}
    	int nRes = 0;
    	try {
			mSender.write(sendBuff);
		} catch (IOException e) {
			e.printStackTrace();
			Connect();
			return -1;
		}
        try{
//        	int nSize = mReceiver.read(recvbuf);
//        	System.out.println(" Read byte Size = " + nSize+"  Recv = " + String.valueOf(recvbuf) );
        } catch(Exception e) {
        	System.out.println("Time Read Error = "+e.getMessage());
        }
    	return nRes;
    } 
    
    public synchronized int SendRecvData(byte []sendBuff,byte []recvbuf) {
    	
    	if(msock == null || msock.isConnected() == false || msock.isClosed() == true) {
    		if(msock != null) System.out.println("Try Connect isCon = " +msock.isConnected() + " isClosed  = " +msock.isClosed() + " IP = " + mStrip );
    		Connect();
    	}
    	
    	try {
			mSender.write(sendBuff);
		} catch (IOException e) {
			System.out.println(" send IOException : " + e.toString() );
			e.printStackTrace();
			Connect();
			return -1;
		}
    	int nSize = 0;
    	for(int i = 0;i<1;i++) {
			try {
				nSize = mReceiver.read(recvbuf);
				if(recvbuf[5] == 0x01) { //FRED PACKET
					BodyFred fred = new BodyFred(nFredSeq++);
					fred.allocPacket(nSize, recvbuf);
					mSender.write(fred.getPacket());
				}
				System.out.println(" Read byte Size = " + nSize + "  Recv = " + TypeHelper.byteArrayToHex(recvbuf) );
			} catch (IOException e) {
				System.out.println("Time Read Error = "+e.toString());
				e.printStackTrace();
				return -1;
			}
    	}
            	
    	return nSize;
    }
    
	@Override
	public void run() {
        System.out.println("###################################################################################");
        System.out.println("################## IP = "+ this.mStrip  + " PORT= " + this.nPort+ " ################################");
        System.out.println("###################################################################################\n");

        while (true) {
        	if(msock == null || msock.isConnected() == false || msock.isClosed() == true) {
        		if(msock != null)System.out.println("Try Connect isCon = " +msock.isConnected() + " isClosed  = " +msock.isClosed() + " IP = " + mStrip );
        		Connect();
        	}
        	try {
				Thread.sleep(60000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
        }
	}     
}
