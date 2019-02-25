package com.bis.data;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayList;

public class ScenarioData {
	private int nDateTime = 0;
	private byte bTotalCount = 0;
	private byte bCurrentNum = 0;
	private Scenario [] scenario = null;
	

	ArrayList<Scenario> obj = new ArrayList<Scenario>();

	public byte getbTotalCount() {
		return bTotalCount;
	}
	public void setbTotalCount(byte bTotalCount) {
		scenario = new Scenario[bTotalCount];
		this.bTotalCount = bTotalCount;
		bCurrentNum = 0;
		long t = System.currentTimeMillis();
		nDateTime = (int) (t/1000);
		System.out.println("Time = " + t);
	}
	public void addScenario(byte type ,byte [] filename) {
		if(bCurrentNum>=bTotalCount) return;
		
		scenario[bCurrentNum] = new Scenario(); 
		scenario[bCurrentNum].setSeq((byte) (bCurrentNum + 1)); 
		scenario[bCurrentNum].setType(type);
		scenario[bCurrentNum].setFilename(filename);
		bCurrentNum++;
	}	
	public byte [] GetByteArray() {
		ByteBuffer byteBuffer = ByteBuffer.allocate((bTotalCount*35)+5);
		byteBuffer.order(ByteOrder.BIG_ENDIAN);
		byteBuffer.putInt(nDateTime);
		byteBuffer.put(bTotalCount);

		for(int i = 0;i<bTotalCount;i++) {
			byteBuffer.put(scenario[i].GetByteArray());
		}
		return byteBuffer.array();
	}
	
}
