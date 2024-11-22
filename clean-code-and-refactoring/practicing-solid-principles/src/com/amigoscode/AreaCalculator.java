package com.amigoscode;

import java.util.List;

public class AreaCalculator implements IAreaCalculator {

    @Override
    public int sum(List<Shape> shapes) {
        int sum = 0;
        for (int i = 0; i < shapes.size(); i++) {
            sum += shapes.get(i).area();
        }
        return sum;
    }

    /**
     * This method breaks the single responsibility principle
     * Each class should have only one sole purpose,
     * This method is moved to ShapesPrinter class for the
     * sake of single responsibility principle
     * @param shapes
     * @return
     */
    public String json(List<Shape> shapes) {
        return "{sum: %d}".formatted(sum(shapes));

    }

    /**
     * This method breaks the single responsibility principle
     * Each class should have only one sole purpose,
     * This method is moved to ShapesPrinter class for the
     * sake of single responsibility principle
     * @param shapes
     * @return
     */
    public String csv(List<Shape> shapes) {
        return "sum,%s".formatted(sum(shapes));

    }

}
