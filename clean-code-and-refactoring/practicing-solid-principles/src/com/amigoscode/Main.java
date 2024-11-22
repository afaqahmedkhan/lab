package com.amigoscode;

import java.io.*;
import java.lang.reflect.Field;
import java.util.Scanner;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        AreaCalculator areaCalculator = new AreaCalculator();
        Circle circle = new Circle(10);
        Square square = new Square(10);
        List<Shape> shapes = List.of(circle, square);
        int sum = areaCalculator.sum(shapes);
        System.out.println(areaCalculator.json(shapes));


//        File file = createFile("src/foo.txt");
//
//        writeToFile(file, true);
//
//        try {
//            Scanner scanner = new Scanner(file);
//            while (scanner.hasNext()) {
//                System.out.println(scanner.nextLine());
//            }
//        } catch (FileNotFoundException e) {
//            System.out.println(e.getMessage());
//        }
    }

    private static void writeToFile(File file, boolean append) {
        try (
                FileWriter fileWriter = new FileWriter(file, append);
                PrintWriter writer = new PrintWriter(fileWriter);
        ) {
            writer.println("Bianca");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

//        try {
//            FileWriter fileWriter = new FileWriter(file, append);
//            PrintWriter writer = new PrintWriter(fileWriter);
//            writer.println("Jamila");
//            writer.flush();
//            writer.close();
//        } catch (IOException e) {
//            System.out.println(e.getMessage());
//        }
    }

    private static File createFile(String path) {
        try {
            File file = new File(path);
            if (!file.exists()) {
                file.createNewFile();
            }
            return file;
        } catch (IOException e) {
            System.out.println(e.getMessage());
            throw new IllegalStateException(e);
        }
    }
}

