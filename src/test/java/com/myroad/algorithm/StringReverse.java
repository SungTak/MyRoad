package com.myroad.algorithm;

import java.util.Stack;

public class StringReverse {
	public String reverse(String text) {
		char[] words = text.toCharArray();
		StringBuilder reverseText = new StringBuilder();
		
		Stack<Character> stack = new Stack<Character>();
		for (char word : words) {
			stack.push(word);
		}
		
		while (stack.empty() == false) {
			reverseText.append(stack.pop());
		}

		return reverseText.toString(); 
	}
}
