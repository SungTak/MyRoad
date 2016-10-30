package com.myroad.java8;

import org.junit.Test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by SungTak on 16. 10. 30.
 */
public class ListTest {
    @Test
    public void testListLamda() {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        final String result = list.stream()
                .map(String::valueOf) // map은 일반적인 key-value가 아니라 type을 다르게 mapping해준다는 의미
                .collect(Collectors.joining(" : "));

        System.out.println(result);
    }
}
