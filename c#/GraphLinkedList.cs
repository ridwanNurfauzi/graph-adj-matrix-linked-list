using System.Collections.Generic;

namespace Graph
{
    public class GraphLinkedList
    {
        public enum GraphType
        {
            DIRECTED, // Graf terarah
            UNDIRECTED // Graf tidak terarah
        }
        public static int vertices;
        public static List<List<int>>? list;
        public static GraphType graphType;

        public GraphLinkedList(int vertices, GraphType graphType)
        {
            GraphLinkedList.vertices = vertices;
            GraphLinkedList.graphType = graphType;
            list = [];
            for (int i = 0; i < vertices; i++)
            {
                list.Add([]);
            }
        }

        public void AddEdge(int i, int j)
        {
            if (list != null)
            {
                list[i].Add(j);
                if (graphType == GraphType.UNDIRECTED)
                    list[j].Add(i);
            }
        }

        public void PrintGraph()
        {
            if (list != null)
                for (int i = 0; i < vertices; i++)
                {
                    Console.Write(i);
                    for (int j = 0; j < list[i].Count; j++)
                    {
                        Console.Write(" -> ");
                        Console.Write(list[i][j]);
                    }
                    Console.WriteLine();
                }
        }
    }
}