package com.myroad.algorithm;

public class InsertSort {
	public int[] sort(int[] nums) {
		int length = nums.length;
		if (length == 1) {
			return nums;
		}
		
		for (int i = 1; i < length; i++) {
			for (int j = i; j > 0; j--) {
				int temp = nums[j];
				if (temp < nums[j - 1]) {
					nums[j] = nums[j - 1];
					nums[j - 1] = temp;
				}
			}
		}
		
		return nums;
	}
}
