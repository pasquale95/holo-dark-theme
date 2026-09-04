package com.example;

import java.util.List;

@Service
public final class Greeter<T extends Comparable<T>> implements Runnable {
    private static final int MAX = 10;
    private final List<T> items;

    public Greeter(List<T> items) {
        this.items = items;
    }

    @Override
    public void run() {
        for (T t : items) {
            if (t == null)
                throw new IllegalStateException("null");
            System.out.printf("%s%n", t);
        }
    }
}

// Line comment
/** Javadoc {@link List} */
