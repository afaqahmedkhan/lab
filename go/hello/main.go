package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	fmt.Println("Hello")

	fmt.Println("The time is", time.Now())

	fmt.Println("My favorite number is", rand.Intn((19)))
}
