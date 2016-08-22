package com.myroad.algorithm;

import static org.junit.Assert.*;

import org.junit.Test;

public class StackTest {
	@Test
	public void testStack() throws Exception {
		Stack sut = new Stack(5);
		sut.add(30);
		sut.add(10);
		sut.add(20);
		sut.add(60);
		sut.add(5);
		
		assertEquals(5, sut.get());
		assertEquals(60, sut.get());
		assertEquals(20, sut.get());
		assertEquals(10, sut.get());
		assertEquals(30, sut.get());
	}
}
