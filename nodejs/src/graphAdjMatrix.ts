type GraphType = 'directed'|'undirected';

class GraphAdjMatrix {
    public size: number;
    public matrix: number[][];
    public graphType: GraphType;

    public constructor(size: number, graphType: GraphType) {
        this.size = size;
        this.graphType = graphType;
        this.matrix = Array(size).fill(null).map(() => Array(size).fill(0));
    }

    public addEdge(i: number, j: number) {
        this.matrix[i][j] = Number(true);
        if (this.graphType == "undirected")
            this.matrix[j][i] = Number(true);
    }

    public printGraph() {
        console.table(this.matrix);
    }
}

export default GraphAdjMatrix;
