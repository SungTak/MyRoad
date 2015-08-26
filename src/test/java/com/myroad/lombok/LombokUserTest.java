package com.myroad.lombok;

import org.junit.Before;
import org.junit.Test;

/**
 * Created by Taky on 2015-08-26.
 */
public class LombokUserTest {
    private LombokUser sut;

    @Before
    public void setUp() {
        sut = new LombokUser();
    }

    @Test
    public void testLombok() {
        sut.setName("aaa");
    }
}
