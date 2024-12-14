package main

import (
	"graph_go/graphAdjMatrix"
	"graph_go/graphLinkedList"
)

func main() {
	println("Graph - Adjacency Matrix")
	graphAdjMatrix.Graph(4, graphAdjMatrix.UNDIRECTED)
	graphAdjMatrix.AddEdge(2, 3)
	graphAdjMatrix.AddEdge(3, 1)
	graphAdjMatrix.AddEdge(0, 1)
	graphAdjMatrix.PrintGraph()
	print("\n")

	println("Graph - Linked List")
	graphLinkedList.Graph(4, graphLinkedList.UNDIRECTED)
	graphLinkedList.AddEdge(2, 3)
	graphLinkedList.AddEdge(2, 1)
	graphLinkedList.AddEdge(0, 1)
	graphLinkedList.PrintGraph()
}
