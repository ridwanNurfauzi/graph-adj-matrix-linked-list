namespace Graph
{
    public class GraphAdjMatrix
    {
        public enum GraphType
        {
            DIRECTED, // Graf terarah
            UNDIRECTED // Graf tidak terarah
        }
        public static int size;
        public static int[,]? matrix;
        public static GraphType graphType;

        public GraphAdjMatrix(int size, GraphType graphType)
        {
            GraphAdjMatrix.size = size;
            GraphAdjMatrix.graphType = graphType;
            matrix = new int[size, size];
            for (int i = 0; i < size; i++)
                for (int j = 0; j < size; j++)
                    matrix[i, j] = 0;
        }

        public void AddEdge(int i, int j)
        {
            if (matrix != null)
            {
                matrix[i, j] = 1;
                if (graphType == GraphType.UNDIRECTED)
                    matrix[j, i] = 1;
            }
        }

        public void PrintGraph()
        {
            if (matrix != null)
                for (int i = 0; i < size; i++)
                {
                    for (int j = 0; j < size; j++)
                    {
                        Console.Write(matrix[i, j] + " ");
                    }
                    Console.WriteLine();
                }
        }
    }
}