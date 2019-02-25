package com.bis.util;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.awt.image.FilteredImageSource;
import java.awt.image.ImageFilter;
import java.awt.image.ImageProducer;
import java.awt.image.RGBImageFilter;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributeView;
import java.nio.file.attribute.BasicFileAttributes;
import java.nio.file.attribute.FileTime;

import javax.imageio.ImageIO;

import org.apache.commons.io.FileUtils;

/**
* Filename  : ImageConverter.java
* Class     : ImageConverter    
* Function  : BMP이미지를 PNG이미지로 변환하는 클래스 
* Comment   :                   
* @version  1.0
*/
public class ImageUtil {
    
	public static byte[] read(File file) throws IOException {
	    
	    ByteArrayOutputStream ous = null;
	    InputStream ios = null;
	    try {
	        byte[] buffer = new byte[4096];
	        ous = new ByteArrayOutputStream();
	        ios = new FileInputStream(file);
	        int read = 0;
	        while ((read = ios.read(buffer)) != -1) {
	            ous.write(buffer, 0, read);
	        }
	    }finally {
	        try {
	            if (ous != null)
	                ous.close();
	        } catch (IOException e) {
	        }

	        try {
	            if (ios != null)
	                ios.close();
	        } catch (IOException e) {
	        }
	    }
	    return ous.toByteArray();
	}
	
	public static FileTime getCreationTime(File file) throws IOException {
		System.out.println("#GET " + file.getAbsolutePath());
	    Path p = Paths.get(file.getAbsolutePath());
	    BasicFileAttributes view = Files.getFileAttributeView(p, BasicFileAttributeView.class).readAttributes();
	    FileTime fileTime = view.lastModifiedTime();
	    //  also available view.lastAccessTine and view.lastModifiedTime
	    return fileTime;
	}
	
	public static void setFileCreationDate(File file, FileTime time) throws IOException {
		System.out.println("#SET " + file.getAbsolutePath());
	    BasicFileAttributeView attributes = Files.getFileAttributeView(Paths.get(file.getAbsolutePath()), BasicFileAttributeView.class);
	    attributes.setTimes(time, time, time);
	}
	
    public static boolean convertFormat(String inputImagePath, String outputImagePath, String formatName) throws IOException {
        FileInputStream inputStream = new FileInputStream(inputImagePath);
        FileOutputStream outputStream = new FileOutputStream(outputImagePath);
         
        BufferedImage inputImage = ImageIO.read(inputStream);
         
        boolean result = ImageIO.write(inputImage, formatName, outputStream);
         
        outputStream.close();
        inputStream.close();
         
        return result;
    }
  
    public static Image makeColorTransparent(BufferedImage im, final Color color) {
        
        ImageFilter filter = new RGBImageFilter() {
            public int markerRGB = color.getRGB() | 0xFF000000;
            
            public final int filterRGB(int x, int y, int rgb) {
                if ((rgb | 0xFF000000) == markerRGB) {
                    return 0x00000000;
                } else {
                    return rgb;
                }
            }
        };

        ImageProducer ip = new FilteredImageSource(im.getSource(), filter);
        return Toolkit.getDefaultToolkit().createImage(ip);
    }
    
    public static BufferedImage getRenderedImage(Image in) {
        BufferedImage out = new BufferedImage(in.getWidth(null), in.getHeight(null), BufferedImage.TYPE_4BYTE_ABGR);
        Graphics2D g2 = out.createGraphics();
        g2.drawImage(in, 0, 0, null);
        g2.dispose();
        return out;
    }
    
    
    public static void convertImage() {
        //String imagePath = request.getSession().getServletContext().getRealPath("images");
        String imagePath = "";
        String formatName = "PNG";
        try {
            File dir = new File(imagePath + "/form/id_bmp");
            if(dir.isDirectory()) {
                dir.listFiles();
            }
            for(int i=0; i<dir.listFiles().length; i++) {
                File file = dir.listFiles()[i];
                System.out.println("file : " + file.getAbsolutePath());
                String inFileName = file.getName();
                if(inFileName.contains(".bmp")) {
                    String outFileName = inFileName.replace("bmp", "png");
                    BufferedImage bufferImg;
                    if(ImageUtil.convertFormat(file.getAbsolutePath(), imagePath+"/form/id_png/"+ outFileName, formatName)) {
                        File out = new File(imagePath+"/form/id_png/"+ outFileName);
                        bufferImg = ImageIO.read(out);
                        Image convertImg = ImageUtil.makeColorTransparent(bufferImg, Color.black);
                        boolean result1 = ImageIO.write(ImageUtil.getRenderedImage(convertImg), "PNG", out);
                        System.out.println("result1 : "+ result1 + " | " + file.getAbsolutePath());
                    }
                }
            }
            
        } catch (Exception ex) {
            System.out.println("Error during converting image.");
            ex.printStackTrace();
        }
    }
    
    public static void saveImage(byte[] imgByte, String fileName, String path) {
    	
        try {
        	File out = new File(path + fileName + ".bmp");
        	FileUtils.writeByteArrayToFile(out, imgByte);
        } catch (Exception ex) {
            System.out.println("Error during save image.");
            ex.printStackTrace();
        }
    }
    
    public static void deleteImage(String fileName, String path) {
    	
        try {
        	File file = new File(path + "/form/lcs_big/"+ fileName + ".bmp");
        	file.delete();
        } catch (Exception ex) {
            System.out.println("Error delete image.");
            ex.printStackTrace();
        }
    }

    public static boolean saveInciImage(byte[] imgByte, String fileName, String path, String date) {
    	
    	
        try {
        	File dir = new File(path + "/" + date);
        	if(!dir.exists()) dir.mkdirs();
        	File out = new File(path + File.separator + date + File.separator + fileName);
        	FileUtils.writeByteArrayToFile(out, imgByte);
        } catch (Exception ex) {
            System.out.println("Error during save image.");
            ex.printStackTrace();
            return false;
        }
        
        return true;
    }
    
}