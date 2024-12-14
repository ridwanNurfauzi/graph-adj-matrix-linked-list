package graphLinkedList

import (
	"fmt"
	"slices"
)

// Graph type
const (
	DIRECTED   int = 0 // Graf terarah
	UNDIRECTED int = 1 //Graf tidak terarah
)

var vertices int
var graphType int
var matrix [][]int

func Graph(_vertices int, _graphType int) {
	vertices = _vertices
	graphType = _graphType
	matrix = make([][]int, vertices)
}

func AddEdge(i int, j int) {
	matrix[i] = slices.Insert(matrix[i], len(matrix[i]), j)
	if graphType == UNDIRECTED {
		matrix[j] = slices.Insert(matrix[j], len(matrix[j]), i)
	}
}

func PrintGraph() {
	for i := 0; i < len(matrix); i++ {
		fmt.Print(i)
		for j := 0; j < len(matrix[i]); j++ {
			fmt.Print(" -> ")
			fmt.Print(matrix[i][j])
		}
		fmt.Println()
	}
}
