package graphAdjMatrix

import (
	"fmt"
)

// Graph type
const (
	DIRECTED   int = 0 // Graf terarah
	UNDIRECTED int = 1 //Graf tidak terarah
)

var size int
var graphType int
var matrix [][]int

func Graph(_size int, _graphType int) {
	size = _size
	graphType = _graphType
	matrix = make([][]int, size)
	for i := 0; i < size; i++ {
		matrix[i] = make([]int, size)
	}
}

func AddEdge(i int, j int) {
	matrix[i][j] = 1
	if graphType == UNDIRECTED {
		matrix[j][i] = 1
	}
}

func PrintGraph() {
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			fmt.Print(matrix[i][j], " ")
		}
		fmt.Println()
	}
}
