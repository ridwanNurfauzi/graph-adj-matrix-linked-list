from graphAdjMatrix import GraphAdjMatrix
from graphLinkedList import GraphLinkedList

graphAdjMatrix =  GraphAdjMatrix(6, "directed")
graphLinkedList = GraphLinkedList(5, "undirected")

def main() -> None:
    print("Graph - Adjacency Matrix")
    graphAdjMatrix.addEdge(1, 2)
    graphAdjMatrix.addEdge(3, 2)
    graphAdjMatrix.addEdge(3, 0)
    graphAdjMatrix.addEdge(4, 0)
    graphAdjMatrix.printGraph()
    print()
    print("Graph - Linked List")
    graphLinkedList.addEdge(1, 2)
    graphLinkedList.addEdge(1, 0)
    graphLinkedList.addEdge(1, 4)
    graphLinkedList.addEdge(3, 4)
    graphLinkedList.printGraph()

if __name__ == "__main__":
    main()
