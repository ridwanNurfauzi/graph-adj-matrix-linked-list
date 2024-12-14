public class GraphAdjMatrix {
    enum GraphType {
        DIRECTED, // Graf terarah
        UNDIRECTED // Graf tidak terarah
    }

    public int size;
    public int[][] matrix;
    public GraphType graphType;

    public GraphAdjMatrix(int size, GraphType graphType) {
        this.size = size;
        this.graphType = graphType;
        this.matrix = new int[size][size];
    }

    public void addEdge(int i, int j) {
        this.matrix[i][j] = 1;
        if (this.graphType == GraphType.UNDIRECTED)
            this.matrix[j][i] = 1;
    }

    public void printGraph() {
        for (int i = 0; i < this.size; i++) {
            for (int j = 0; j < this.size; j++)
                System.out.print(this.matrix[i][j] + " ");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        GraphAdjMatrix graph = new GraphAdjMatrix(5, GraphType.DIRECTED);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        graph.printGraph();
    }
}
