from typing import Literal

GraphType = Literal["directed", "undirected"]

class GraphLinkedList:
    vertices: int
    graphType: GraphType
    linkedList: list[list[int]]

    def __init__(self, vertices: int, graphType: GraphType) -> None:
        self.vertices = vertices
        self.graphType = graphType
        self.linkedList = [[]for _ in range(vertices)]
    
    def addEdge(self, i: int, j: int) -> None:
        self.linkedList[i].append(j)
        if self.graphType == "undirected":
            self.linkedList[j].append(i)
    
    def printGraph(self) -> None:
        for i in range(self.vertices):
            print(i, end='')
            for j in range(len(self.linkedList[i])):
                print(f" -> {self.linkedList[i][j]}", end='')
            print()
