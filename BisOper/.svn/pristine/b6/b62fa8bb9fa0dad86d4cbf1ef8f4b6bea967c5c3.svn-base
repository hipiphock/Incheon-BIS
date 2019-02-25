package com.bis.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.file.attribute.FileTime;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;
import org.apache.commons.net.ftp.FTPReply;
import org.springframework.web.multipart.MultipartFile;

import com.bis.prop.GrobalProps;

/**
 * 
 * <PRE>
 * System Name 	  : 인천교통정보센터 - 운영단말
 * Business Name  : 
 * Class Name 	  : FtpUtil.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.08.25	  황중모      최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2016 by Incheon All right reserved.
 */
public class FtpUtil {
	
	private String IP;
	private int    PORT;
	private String ID;
	private String PW;
	
	FTPClient ftpClient;
	
	public FtpUtil(String ip, int port, String id, String pw) {
		this.IP = ip;
		this.PORT = port;
		this.ID = id;
		this.PW = pw;
		ftpClient = new FTPClient();
		ftpClient.setControlEncoding("euc-kr"); //ftp 서버의 한글 인코딩에 따른다.
	}
	
	public FtpUtil(GrobalProps grobalProps, int type) {
		// 120:신규, 121:인천 , 122:인천확대, 123:광역
		switch (type) {
		case 120:
			this.IP = grobalProps.getFtpIp1();
			this.PORT = Integer.valueOf(grobalProps.getFtpPort1());
			this.ID = grobalProps.getFtpId1();
			this.PW = grobalProps.getFtpPw1();
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("euc-kr"); //ftp 서버의 한글 인코딩에 따른다.
			break;
		case 126:
			this.IP = grobalProps.getFtpIp6();
			this.PORT = Integer.valueOf(grobalProps.getFtpPort6());
			this.ID = grobalProps.getFtpId6();
			this.PW = grobalProps.getFtpPw6();
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("euc-kr"); //ftp 서버의 한글 인코딩에 따른다.
			break;
		case 121:
		case 125:
			this.IP = grobalProps.getFtpIp3();
			this.PORT = Integer.valueOf(grobalProps.getFtpPort3());
			this.ID = grobalProps.getFtpId3();
			this.PW = grobalProps.getFtpPw3();
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("euc-kr"); //ftp 서버의 한글 인코딩에 따른다.
			break;
		case 122: 
			this.IP = grobalProps.getFtpIp4();
			this.PORT = Integer.valueOf(grobalProps.getFtpPort4());
			this.ID = grobalProps.getFtpId4();
			this.PW = grobalProps.getFtpPw4();
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("euc-kr"); //ftp 서버의 한글 인코딩에 따른다.
			break;
		case 123: //광역
			this.IP = grobalProps.getFtpIp2();
			this.PORT = Integer.valueOf(grobalProps.getFtpPort2());
			this.ID = grobalProps.getFtpId2();
			this.PW = grobalProps.getFtpPw2();
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("utf-8"); //ftp 서버의 한글 인코딩에 따른다.
			break;
		case 124: //광역2
			this.IP = grobalProps.getFtpIp5();
			this.PORT = Integer.valueOf(grobalProps.getFtpPort5());
			this.ID = grobalProps.getFtpId5();
			this.PW = grobalProps.getFtpPw5();
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("euc-kr"); //ftp 서버의 한글 인코딩에 따른다.
			break;
		default:
			this.IP = grobalProps.getFtpIp1();
			this.PORT = Integer.valueOf(grobalProps.getFtpPort1());
			this.ID = grobalProps.getFtpId1();
			this.PW = grobalProps.getFtpPw1();
			ftpClient = new FTPClient();
			ftpClient.setControlEncoding("euc-kr"); //ftp 서버의 한글 인코딩에 따른다.
			break;
		}
		
	}
	
	public void connect() {
		try {
			ftpClient.connect(IP, PORT);
			System.out.println("IP = " + IP);
			System.out.println("PORT = " + PORT);
			int reply = ftpClient.getReplyCode();
			
			if(!FTPReply.isPositiveCompletion(reply)) {  //연결거부
				ftpClient.disconnect();
				System.out.println("# 연결거부 ");
				return;
			}
			
		} catch (IOException e) {
			System.out.println("# connect  " + e.toString());
			if(ftpClient.isConnected()) {
				try {
					ftpClient.disconnect();
				} catch (IOException e2) {
				}
			}
		}
	}
	
	public boolean login() {
		try {
			this.connect();
			ftpClient.login(ID, PW);
//			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
			
//			ftpClient.enterLocalPassiveMode();
//			ftpClient.setRemoteVerificationEnabled(false);
		} catch (IOException e) {
			System.out.println("# login " + e.toString());
			return false;
		}
		return true;
	}
	
	public boolean logout() {
		try {
			ftpClient.logout();
			ftpClient.disconnect();
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public void setPassiveMode() {
		ftpClient.enterLocalPassiveMode();
	}
	
	public void changeDirectory(String path) {
		try {
			ftpClient.changeWorkingDirectory(path);
		} catch (IOException e1) {
			System.out.println("## directory not Found");
		}
	}
	
	public boolean makeDirectory(String path) {
		try {
			return ftpClient.makeDirectory(path);
		} catch (IOException e) {
			System.out.println("### makeDirectory  error " + e.toString());
			return false;
		}
	}
		
	public String getFileDate(String file) {
		String time = null;
		try {
			time = ftpClient.getModificationTime(file);
		} catch (IOException e) {
			System.out.println("### getFileDate  error " + e.toString());
		}
		
	    return time.split(" ")[1];
	}
	
	/**
	 * @param dir1 (bit image folder name)
	 * @param dir2 (web cam image folder name)
	 * @return isSuccess
	 */
	public boolean downloadFile(String dir1, String dir2) {
		
		boolean isSuccess = false;
		OutputStream out;

		Date present;
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		
		try {
			File bitDir = new File(dir1);
			File camDir = new File(dir2);
			
			if(!bitDir.exists()) {
				bitDir.mkdirs();
			}
			if(!camDir.exists()) {
				camDir.mkdirs();
			}
			
			present = new Date();
			System.out.println(sdf.format(present)+ " -------[START]---------------------");
		
			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
			FTPFile[] list = ftpClient.listFiles();
			
			for (int i = 0; i < list.length; i++) {
				System.out.println("# " + i +" size[" + list[i].getSize()+ "]- name[" +list[i].getName()+"]");
			
				Calendar cal = list[i].getTimestamp();
				
				Date today = cal.getTime();
				SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd a hh:mm:ss");
				System.out.println("#mod date : " + formatter.format(today));
				
				String name = list[i].getName();
				String destName;
				
				if(name.indexOf("WC_") == 0) {
					destName = dir2 + name;
				}else {
					destName = dir1 + name;
				}
				
				File destFile = new File(destName);
				if(!destFile.exists()) {
					destFile.createNewFile();
				}
				
				
				out = new FileOutputStream(destFile);
				isSuccess = ftpClient.retrieveFile(name, out);
				out.close();
				out.flush();
				ImageUtil.setFileCreationDate(destFile, FileTime.fromMillis(cal.getTimeInMillis()));
				System.out.println("#isSuccess: " + isSuccess + " "+ name);  
			}
			
//			while(!ftpClient.completePendingCommand());
			
			present = new Date();
            System.out.println(sdf.format(present) + " -------[END]---------------------");
			
		}catch (Exception e) {
			System.out.println("###e : " + e.toString());
		}
		return isSuccess;
	}
	
	public FTPFile[] getFileList() {
		try {
			return ftpClient.listFiles();
		} catch (IOException e) {
			return null;
		}
	}
	
	
	/**
	 * @param filetype (CONF:config file, IMG:image file, avi:video file)
	 * @param file (upload file)
	 * @param bitId (bit id)
	 * @return isSuccess
	 */
	public boolean uploadFile(String fileType, File file, String bitId) {
		
		FileInputStream fis = null;
		boolean isSuccess = false;
		try {
			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
			ftpClient.setRemoteVerificationEnabled(false);
			ftpClient.enterLocalPassiveMode();
			
			fis = new FileInputStream(file); // 업로드할 File 생성 
			isSuccess = ftpClient.storeFile(file.getName(), fis); // File 업로드
			
		} catch (Exception e) {
			System.out.println("###e : " + e.toString());
			e.printStackTrace();
		} finally {
			try{ 
				fis.close(); // Stream 닫기 
			} catch(IOException ex){ 
				System.out.println("IO Exception : " + ex.getMessage()); 
			}
		}
		return isSuccess;
	}
	
	/**
	 * 파일 삭제
	 * @param file
	 * @return
	 */
	public boolean deleteFile(File file) {
		boolean is_success = false;
		System.out.println("deleteFile = " + file.getName());
		try {
			is_success = ftpClient.deleteFile(file.getName());
		} catch (Exception e) {
			System.out.println("File delete on FTP Exception " + e.getMessage());
		}
		
		return is_success;
	}
	
	public boolean deleteFileName(String name) {
		boolean is_success = false;
		System.out.println("deleteFile = " + name);
		try {
			is_success = ftpClient.deleteFile(name);
		} catch (Exception e) {
			System.out.println("File delete on FTP Exception " + e.getMessage());
		}
		
		return is_success;
	}
	
	public byte[] getImageFile(String filename) {
		InputStream is = null;
		try {

			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
			
			is = ftpClient.retrieveFileStream(filename);
		
		    int nFileSize = 2048000; 
			if(is == null) return null;
			int bytesRead = 0;
			byte[] readBuffer = new byte[nFileSize];
			
		//	ByteBuffer bBuffer = ByteBuffer.allocate(nFileSize);
			int nOffset = 0;
			while ((bytesRead = is.read(readBuffer, nOffset, nFileSize)) > 0) {
				nOffset+=bytesRead;
				nFileSize-=bytesRead;
				System.out.println("### nOffset " + nOffset + " " + bytesRead);
			}
			is.close();
			while(!ftpClient.completePendingCommand());
            System.out.println("-------[END:]---------------------");
            ByteBuffer by = ByteBuffer.allocate(nFileSize);
            by.put(readBuffer,0,nOffset);
			return by.array();
		} catch (Exception e) {
			System.out.println("###e : " + e.toString());
			try {
				is.close();
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			// TODO: handle exception
			return null;
		}
	}	
	
	
	//========================================================

	public byte[] getImageFullpath(String fullFilePath) {
		InputStream is = null;
		try {

			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
			
			int nFileSize = 0;
			FTPFile file = ftpClient.mlistFile(fullFilePath);
			if(file == null) {
				System.out.println("File not found " +fullFilePath);
				return null;
			} else {
				System.out.println("File found !!!"+fullFilePath);
				nFileSize=(int) file.getSize();
			}
			
			System.out.println("File Size " + nFileSize);
			if(nFileSize <= 0) return null;
			is = ftpClient.retrieveFileStream(fullFilePath);
		
			int bytesRead = 0;
			byte[] readBuffer = new byte[nFileSize];
			
		//	ByteBuffer bBuffer = ByteBuffer.allocate(nFileSize);
			int nOffset = 0;
			while ((bytesRead = is.read(readBuffer, nOffset, nFileSize)) > 0) {
				nOffset+=bytesRead;
				nFileSize-=bytesRead;
				System.out.println("### nOffset " + nOffset + " " + bytesRead);
			}
			is.close();
			while(!ftpClient.completePendingCommand());
            System.out.println("-------[END:]---------------------");
			return readBuffer;
		} catch (Exception e) {
			System.out.println("###e : " + e.toString());
			// TODO: handle exception
			return null;
		}
	}
	
	
	public File multipartToFile(MultipartFile multipart) {
		File convFile = new File(multipart.getOriginalFilename());
	    try {
	    	convFile.createNewFile(); 
	    	FileOutputStream fos = new FileOutputStream(convFile); 
	    	fos.write(multipart.getBytes());
	    	fos.close();
	    } catch (Exception e) {
	    	System.out.println("Multipart to File Exception " + e.getMessage());
	    }
	    
	    return convFile;
	}

	
	
}
