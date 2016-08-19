package com.myroad.algorithm;

import org.junit.Test;

public class InsertSortTest {
	@Test
	public void testSort() throws Exception {
		int[] nums = {10, 4, 2, 6, 9, 5, 7, 3, 1, 8};
		
		InsertSort sut = new InsertSort();
		int[] result = sut.sort(nums);
		
		for (int num : result) {
			System.out.println(num);
		}
	}
}
