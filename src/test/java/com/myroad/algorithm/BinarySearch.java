package com.myroad.algorithm;

public class BinarySearch {
	private int[] datas;
	
	public int search(int target, int low, int high) {
		int mid = (low + high) / 2;
		
		if (low <= high) {
			if (target == datas[mid]) {
				return datas[mid];
			} else if (target < datas[mid]) {
				return search(target, low, mid - 1);
			} else {
				return search(target, mid + 1, high);
			}
		}
		return -1;
	}

	public int[] getDatas() {
		return datas;
	}

	public void setDatas(int[] datas) {
		this.datas = datas;
	}
}
