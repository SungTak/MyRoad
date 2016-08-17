package com.myroad.algorithm;

public class BubbleSort {
	public int[] sort(int[] nums) {
		int n = nums.length;

		for (int count = 0; count < n; count++) {
			for (int i = 0; i < n - 1 - count; i++) {
				if (nums[i] > nums[i + 1]) {
					int temp = nums[i];
					nums[i] = nums[i + 1];
					nums[i + 1] = temp;
				}
			}
		}

		return nums;
	}
}
