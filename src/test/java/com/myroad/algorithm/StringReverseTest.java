package com.myroad.algorithm;

import static org.junit.Assert.*;

import org.junit.Test;

public class StringReverseTest {
	@Test
	public void testName() throws Exception {
		StringReverse sut = new StringReverse();
		String result = sut.reverse("abcdefghij");
		
		assertEquals("jihgfedcba", result);
	}
}
