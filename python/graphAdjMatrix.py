from typing import Literal

GraphType = Literal["directed", "undirected"]

class GraphAdjMatrix:
    size: int
    matrix: list[list[int]]
    graphType: GraphType

    def __init__(self, size: int, graphType: GraphType) -> None:
        self.size = size
        self.graphType = graphType
        self.matrix = [[0 for _ in range(size)] for _ in range(size)]

    def addEdge(self, i: int, j: int) -> None:
        self.matrix[i][j] = 1
        if self.graphType == "undirected":
            self.matrix[j][i] = 1

    def printGraph(self) -> None:
        for i in range(self.size):
            for j in range(self.size):
                print(self.matrix[i][j], end=' ')
            print()
            
