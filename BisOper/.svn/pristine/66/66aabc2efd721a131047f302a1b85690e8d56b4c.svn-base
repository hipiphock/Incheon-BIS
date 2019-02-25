package com.bis.soc;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
import java.net.UnknownHostException;


public class UdpClient {

	DatagramSocket msock = null;
    int nTimeOut = 100;
    private String mStrip;
    private int nSendPort;
    private int nRecvPort;
    
    public UdpClient(String strIp, int nport) {
    	this.mStrip = strIp;
    	this.nSendPort = nport;
    } 
    
    public void InitSocket(String strIP, int nSend, int nRecv) {
    	mStrip = strIP;
    	nSendPort = nSend;
    	nRecvPort = nRecv;
    	try {
			msock = new DatagramSocket(nRecvPort);
			
		} catch (SocketException e) {
			// TODO Auto-generated catch block
			System.out.println("bind Port("+nRecv+") Error");
			return;
		}
    	System.out.println("bind Port("+nRecv+")");
 	
    }
    
    public void setPort(int nSend,int nRecv)
    {
    	this.nSendPort = nSend;
    	this.nRecvPort = nRecv;
    }
    public int InitSendSocket(String strIP, int nSend)
    {
    	mStrip = strIP;
    	nSendPort = nSend;
    	try {
			msock = new DatagramSocket();
			
		} catch (SocketException e) {
			// TODO Auto-generated catch block
			System.out.println("## create error  ");
			return -1;
		}
    	System.out.println("## success ");
    	return 1;
 	
    }    
    public int InitSendSocket(int nTimeout)
    {

    	try {
			msock = new DatagramSocket(nRecvPort);
			msock.setSoTimeout(nTimeOut);
			
		} catch (SocketException e) {
			// TODO Auto-generated catch block
			System.out.println("bind Port("+nRecvPort+") Error");
			return -1;
		}
    	System.out.println("bind Port("+nRecvPort+")");
    	return 1;
 	
    }      
    
    public int SendData(byte []sendBuff)
    {
    	InetAddress address = null;
    	try {
			address = InetAddress.getByName(mStrip);
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}       	
    	int nRes = 0;
    	DatagramPacket outPacket = new DatagramPacket(sendBuff, sendBuff.length, address, nSendPort);
    	
    	try {
			msock.send(outPacket);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	msock.close();
    	msock = null;   	
    	return nRes;
    }
    public int SendRecvData(byte []sendBuff, byte []recvbuf)
    {
    	InetAddress address = null;
    	try {
			msock.setSoTimeout(nTimeOut);
		} catch (SocketException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			if(InitSendSocket(nTimeOut) < 0 ) 
				return -1;
			
		}
    	System.out.println("send data " + mStrip);
    	System.out.println("send data " + nSendPort);
    	try {
			address = InetAddress.getByName(mStrip);
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}       	
    	int nRes = 0;
    	if(sendBuff == null) {
    	 	System.out.println("send data is null");
        	return -1;
    	}
    	System.out.println("send data " + sendBuff.length);
    	DatagramPacket outPacket = new DatagramPacket(sendBuff, sendBuff.length, address, nSendPort);
    	
    	
    	try {
			msock.send(outPacket);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
       	System.out.println("send data");
    	
    	DatagramPacket inPacket = new DatagramPacket(recvbuf, recvbuf.length);
    	try {
    		msock.setSoTimeout(nTimeOut);
			msock.receive(inPacket);
			System.out.println("RECV SIZE = " +inPacket.getLength());			
			 nRes = inPacket.getLength();
			
			recvbuf =  inPacket.getData();

			 StringBuilder sb = new StringBuilder();
			 int idx=0;
			 for (idx=0;idx<recvbuf.length;idx++) {
			        sb.append(String.format("%02X ", recvbuf[idx]));
			    }
			
			System.out.println("recv : " + sb.toString());
			
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println("Recv Time Out Error " + mStrip);
		}
    	System.out.println("SEND BUFFER SIZE = " +sendBuff.length + "  SOCKET END " + mStrip);
    	return nRes;
    }        
    
}
