package com.bis.vo;

public class TableSpaceVO {

	private String tablespace_name;
	private String current_size;
	private String free_size;
	private String used_size;
	private String free_rate;
	private String used_rate;
	private String max_size;
	private String size_warning;
	private String current_usage;
	
	public String getTablespace_name() {
		return tablespace_name;
	}
	public void setTablespace_name(String tablespace_name) {
		this.tablespace_name = tablespace_name;
	}
	public String getCurrent_size() {
		return current_size;
	}
	public void setCurrent_size(String current_size) {
		this.current_size = current_size;
	}
	public String getFree_size() {
		return free_size;
	}
	public void setFree_size(String free_size) {
		this.free_size = free_size;
	}
	public String getUsed_size() {
		return used_size;
	}
	public void setUsed_size(String used_size) {
		this.used_size = used_size;
	}
	public String getFree_rate() {
		return free_rate;
	}
	public void setFree_rate(String free_rate) {
		this.free_rate = free_rate;
	}
	public String getUsed_rate() {
		return used_rate;
	}
	public void setUsed_rate(String used_rate) {
		this.used_rate = used_rate;
	}
	public String getMax_size() {
		return max_size;
	}
	public void setMax_size(String max_size) {
		this.max_size = max_size;
	}
	public String getSize_warning() {
		return size_warning;
	}
	public void setSize_warning(String size_warning) {
		this.size_warning = size_warning;
	}
	public String getCurrent_usage() {
		return current_usage;
	}
	public void setCurrent_usage(String current_usage) {
		this.current_usage = current_usage;
	}
	
	
}
