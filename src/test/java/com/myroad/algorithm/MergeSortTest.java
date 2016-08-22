package com.myroad.algorithm;

import org.junit.Test;

public class MergeSortTest {
	@Test
	public void testSort() throws Exception {
		int[] nums = {10, 4, 2, 6, 9, 5, 7, 3, 1, 8};
		
		MergeSort sut = new MergeSort();
		sut.sort(nums, 0, nums.length);
		
		for (int num : nums) {
			System.out.println(num);
		}
	}
}
