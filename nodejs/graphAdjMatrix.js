/**
 * @typedef {('directed'|'undirected')} GraphType
 */

class GraphAdjMatrix {
    /** @type {number} */
    size;
    /** @type {number[][]} */
    matrix;
    /** @type {GraphType} */
    graphType;

    /**
     * @param {number} size 
     * @param {GraphType} graphType 
     */
    constructor(size, graphType) {
        this.size = size;
        this.graphType = graphType;
        this.matrix = Array(size).fill(null).map(() => Array(size).fill(0));
    }

    /**
     * @param {number} i
     * @param {number} j
     */
    addEdge(i, j) {
        this.matrix[i][j] = Number(true);
        if (this.graphType == "undirected")
            this.matrix[j][i] = Number(true);
    }

    printGraph() {
        console.table(this.matrix);
    }
}

module.exports = GraphAdjMatrix;
