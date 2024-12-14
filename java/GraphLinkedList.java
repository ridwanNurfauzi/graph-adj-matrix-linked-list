import java.util.ArrayList;
import java.util.LinkedList;

public class GraphLinkedList {
    enum GraphType {
        DIRECTED, // Graf terarah
        UNDIRECTED // Graf tidak terarah
    }

    int vertices;
    ArrayList<LinkedList<Integer>> list;
    GraphType graphType;

    GraphLinkedList(int vertices, GraphType graphType) {
        this.vertices = vertices;
        this.graphType = graphType;
        this.list = new ArrayList<>(vertices);
        for (int i = 0; i < vertices; i++)
            list.add(new LinkedList<Integer>());
    }

    void addEdge(int i, int j) {
        list.get(i).add(j);
        if (this.graphType == GraphType.UNDIRECTED)
            list.get(j).add(i);
    }

    public void printGraph() {
        for (int i = 0; i < this.vertices; i++) {
            System.out.print(i);
            for (int j = 0; j < this.list.get(i).size(); j++){
                System.out.print(" -> ");
                System.out.print(this.list.get(i).get(j));
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        GraphLinkedList graph = new GraphLinkedList(5, GraphType.UNDIRECTED);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(1, 4);
        graph.printGraph();
    }
}
