using Graph;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Graph - Adjacency Matrix");
        GraphAdjMatrix graphAdjMatrix = new(5, GraphAdjMatrix.GraphType.UNDIRECTED);
        graphAdjMatrix.AddEdge(1, 2);
        graphAdjMatrix.AddEdge(0, 2);
        graphAdjMatrix.AddEdge(2, 4);
        graphAdjMatrix.PrintGraph();

        Console.WriteLine("\nGraph - Linked List");
        GraphLinkedList graphLinkedList = new(5, GraphLinkedList.GraphType.DIRECTED);
        graphLinkedList.AddEdge(0, 2);
        graphLinkedList.AddEdge(1, 3);
        graphLinkedList.AddEdge(2, 1);
        graphLinkedList.AddEdge(2, 4);
        graphLinkedList.PrintGraph();
    }
}
