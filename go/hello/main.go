package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func add(x int, y int) int {
	return x + y
}

func swap(x, y string) (string, string) {
	return y, x // returning multiple vars
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

var a, b, c bool

func main() {

	names := [4]string{
		"Kim",
		"Jong",
		"Ring",
		"Lord",
	}

	sli := names[0:2]
	sli[0] = "Tomato"

	fmt.Println(names)

	fmt.Println("Hello")

	fmt.Println("The time is", time.Now())

	fmt.Println("My favorite number is", rand.Intn((19)))

	fmt.Println(math.Pi)

	fmt.Println(add(23, 23))

	fmt.Println(swap("hello", "world"))

	fmt.Println((split(2)))

	var i int

	j := 1

	fmt.Println(i, a, b, c, j)
}
