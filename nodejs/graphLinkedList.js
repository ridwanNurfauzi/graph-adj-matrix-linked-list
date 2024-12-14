const { stdout } = require("node:process");

/**
 * @typedef {('directed'|'undirected')} GraphType
 */

class GraphLinkedList {
    /** @type {number} */
    vertices;
    /** @type {GraphType} */
    graphType;
    /** @type {number[][]} */
    list;

    /**
     * @param {number} vertices
     * @param {GraphType} graphType
     */
    constructor(vertices, graphType) {
        this.vertices = vertices;
        this.graphType = graphType;
        this.list = Array(vertices).fill(null).map(() => Array());
    }

    /**
     * @param {number} i
     * @param {number} j
     */
    addEdge(i, j) {
        this.list[i].push(j);
        if (this.graphType == "undirected")
            this.list[j].push(i);
    }

    printGraph() {
        for (let i = 0; i < this.list.length; i++) {
            stdout.write(`${i}`);
            (this.list[i]).forEach((e, j) => {
                stdout.write(" -> ");
                stdout.write(`${e}`);
            });
            stdout.write('\n');
        }
    }
}

module.exports = GraphLinkedList;
