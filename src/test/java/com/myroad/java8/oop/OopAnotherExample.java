package com.myroad.java8.oop;

/**
 * Created by SungTak on 16. 10. 30.
 */
public class OopAnotherExample {

    public static void main(String[] args) {
        CalculatorService sut = new CalculatorService();
        int sum = sut.calculate((a, b) -> a + b, 1, 2);
        int sub = sut.calculate((a, b) -> a - b, 1, 2);
        int multiple = sut.calculate((a, b) -> a * b, 1, 2);
        int division = sut.calculate((a, b) -> a / b, 20, 2);

        System.out.println(sum);
        System.out.println(sub);
        System.out.println(multiple);
        System.out.println(division);

        Calculation cal = (a, b) -> ((a + b) * 2); // 이렇게도 가능하다. 익명 클래스랑 동일
        System.out.println(cal.calculate(10, 5));
    }
}

interface Calculation {
    public int calculate(int a, int b);
}

class CalculatorService {
    public int calculate(Calculation calculation, int a, int b) {
        return calculation.calculate(a, b);
    }
}
