package com.myroad.algorithm;

import org.junit.Test;

public class BubbleSortTest {
	@Test
	public void testSort() throws Exception {
		int[] nums = {4, 1, 5, 3, 2, 7, 9, 8, 10, 6};
		
		BubbleSort sut = new BubbleSort();
		int[] result = sut.sort(nums);
		
		for (int num : result) {
			System.out.println(num);
		}
	}
}
