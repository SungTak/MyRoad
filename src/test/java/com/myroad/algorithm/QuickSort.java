package com.myroad.algorithm;

public class QuickSort {
	public int[] sort(int[] nums, int low, int high) {
		if (low  < high) {
			int pivotIndex = partition(nums, low, high);

			sort(nums, low, pivotIndex - 1);
			sort(nums, pivotIndex + 1, high);
		}

		return nums;
	}

	private int partition(int[] nums, int low, int high) {
		int pivot = nums[low];
		int i = low;
		int j = high;

		while (i < j) {

			while (nums[j] > pivot) { //pivot보다 작은 값을 찾기 위해 j부터 움직어야한다.
				j--;
			}

			while (i < j && nums[i] <= pivot) { //pivot보다 큰 값을 찾기위해..
				i++;
			}


			int temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
		}

		nums[low] = nums[i];
		nums[i] = pivot;
		return i;
	}
}
