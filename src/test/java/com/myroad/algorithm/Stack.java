package com.myroad.algorithm;

public class Stack {
	private int[] datas;
	private int index;
	
	public Stack(int size) {
		datas = new int[size];
		index = 0;
	}
	
	public void add(int number) {
		if (index < datas.length) {
			datas[index] = number;
			
			if (index != datas.length - 1) {
				index++;
			}
		} else {
			throw new RuntimeException("overflow");
		}
	}
	
	public int get() {
		if (index >= 0) {
			int popUpData = datas[index];
			index--;
			return popUpData;
		} else {
			throw new RuntimeException("underflow");
		}
	}
	
	public int getSize(){
		return datas.length;
	}
}
