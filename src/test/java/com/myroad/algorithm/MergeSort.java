package com.myroad.algorithm;

public class MergeSort {
	public void sort(int[] nums, int low, int high) {
		int mid = (low + high) / 2;
		if (low >= mid) {
			return;
		}
		
		sort(nums, low, mid);
		sort(nums, mid, high);
		merge(nums, low, mid, high);
	}

	private void merge(int[] nums, int low, int mid, int high) {
		int[] mergeNums = new int[high];
		
		int i = low;
		int j = mid;
		int mergeIndex = low;
		while (i < mid && j < high) {
			if (nums[i] < nums[j]) {
				mergeNums[mergeIndex] = nums[i];
				i++;
			} else {
				mergeNums[mergeIndex] = nums[j];
				j++;
			}
			mergeIndex++;
		}
		
		while (i < mid) {
			mergeNums[mergeIndex] = nums[i];
			i++;
			mergeIndex++;
		}
		
		while (j < high) {
			mergeNums[mergeIndex] = nums[j];
			j++;
			mergeIndex++;
		}
		
		for (int k = low; k < high; k++) {
			nums[k] = mergeNums[k];
		}
	}
}
