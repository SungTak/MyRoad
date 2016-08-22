package com.myroad.algorithm;

import org.junit.Test;

public class QuickSortTest {
	@Test
	public void testSort() throws Exception {
		int[] testCase = {3, 2, 1};

		QuickSort sut = new QuickSort();
		int[] result = sut.sort(testCase, 0, testCase.length - 1);
		
		
		for (int num : result) {
			System.out.println(num);
		}
	}

	@Test
	public void testSort10() throws Exception {
		int[] testCase = {3, 2, 1, 6, 9, 10, 5, 4, 8, 7};
		
		QuickSort sut = new QuickSort();
		int[] result = sut.sort(testCase, 0, testCase.length - 1);
		
		
		for (int num : result) {
			System.out.println(num);
		}
	}
}
