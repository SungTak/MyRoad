package com.myroad.java8.functional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

/**
 * Created by SungTak on 16. 10. 30.
 */
public class FunctionalExample {
    public static void main(String[] args) {
        // input type -> return type
        Function<String, Integer> function = (value) -> Integer.parseInt(value);

        int result = function.apply("100");

        System.out.println(result);

        // identity는 입력한 것 그대로 다시 출력하는 것을 의미
        Function<Integer, Integer> identity = Function.identity();
        int idResult = identity.apply(999);

        System.out.println(idResult);


        // Consumer input type -> void (Function은 리턴타입이 반드시 있어야한다.)
        Consumer<Integer> consumer = (value) -> System.out.println(value);
        consumer.accept(555);



        // Predicate input type -> 무조건 boolean type (Function<T, Boolean>)
        Predicate<Integer> test = (value) -> value > 0;
        System.out.println(test.test(10));
        System.out.println(test.test(0));
        System.out.println(test.test(-10));

        List<Integer> numbers = Arrays.asList(-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5);
        System.out.println(filter(numbers, test));
        System.out.println(filter(numbers, (value) -> value < 3));



        // Suppiler void -> return type (lazy evaluation)
        long startTime = System.currentTimeMillis();
        printValue(0, getVeryExpensive("seongtak"));
        printValue(1, getVeryExpensive("seongtak"));
        printValue(-1, getVeryExpensive("seongtak"));
        // 0, -1은 애초에 조건에 안 맞아서 굳이 수행안해도 되는데 수행하는 바람에 9초나 걸린다.
        System.out.println((System.currentTimeMillis() - startTime) / 1000);

        // use Suppiler
        startTime = System.currentTimeMillis();
        printValue(0, () -> getVeryExpensive("seongtak"));
        printValue(1, () -> getVeryExpensive("seongtak"));
        printValue(-1, () -> getVeryExpensive("seongtak"));
        System.out.println((System.currentTimeMillis() - startTime) / 1000);


        // functional interface는 무조건 추 메서드가 1개여야함
        // @FunctionalInterface를 사용하면 인터페이스에 무조건 메서드가 1개만 있는지 컴파일러가 체크할 수 있다.
        printCustom(1, 2, 3, (t1, t2, t3) -> String.valueOf(t1 + t2 + t3));
        printCustom("hihi", 2, 3, (t1, t2, t3) -> String.valueOf(t1 + t2 + t3));
    }

    // Predicate test method area
    private static <T> List<T> filter(List<T> list, Predicate<T> filter) {
        List<T> result = new ArrayList<>();

        for (T item : list) {
            if (filter.test(item)) {
                result.add(item);
            }
        }

        return result;
    }

    // suppiler test methods area
    private static String getVeryExpensive(String value) {
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return value;
    }

    private static void printValue(Integer number, String value) {
        if (number > 0) {
            System.out.println("HELLO" + value);
        } else {
            System.out.println("INVALID");
        }
    }

    private static void printValue(Integer number, Supplier<String> value) {
        if (number > 0) {
            System.out.println("HELLO SUPPLY" + value.get());
        } else {
            System.out.println("INVALID SUPPLY");
        }
    }



    // custom function
    private static <T1, T2, T3> void printCustom(T1 t1, T2 t2, T3 t3, CustomFunction<T1, T2, T3, String> function) {
        System.out.println(function.apply(t1, t2, t3));
    }
}

// custom function
@FunctionalInterface
interface CustomFunction <T1, T2, T3, R> {
    R apply(T1 t1, T2 t2, T3 t3);
}
