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

func main() {
	fmt.Println("Hello")

	fmt.Println("The time is", time.Now())

	fmt.Println("My favorite number is", rand.Intn((19)))

	fmt.Println(math.Pi)

	fmt.Println(add(23, 23))
}
