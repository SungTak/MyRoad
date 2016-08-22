package com.myroad.algorithm;

import static org.junit.Assert.*;

import org.junit.Test;

public class BinarySearchTest {
	@Test
	public void testSearch() throws Exception {
		int[] tests = {1, 2, 4, 7, 10, 11, 13, 17, 25, 34, 50, 100};
		
		BinarySearch sut = new BinarySearch();
		sut.setDatas(tests);
		int result = sut.search(34, 0, tests.length);
		
		assertEquals(result, 34);
	}
	
	@Test
	public void testSearch2() throws Exception {
		int[] tests = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17};
		
		BinarySearch sut = new BinarySearch();
		sut.setDatas(tests);
		int result = sut.search(5, 0, tests.length);
		
		assertEquals(result, 5);
	}

	@Test
	public void testSearchEmpty() throws Exception {
		int[] tests = {1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17};
		
		BinarySearch sut = new BinarySearch();
		sut.setDatas(tests);
		int result = sut.search(5, 0, tests.length);
		
		assertEquals(result, -1);
	}
}
