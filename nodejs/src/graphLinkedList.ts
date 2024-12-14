import { stdout } from "node:process";

type GraphType = 'directed' | 'undirected';

class GraphLinkedList {
    public vertices: number;
    public graphType: GraphType;
    public list: number[][];

    public constructor(vertices: number, graphType: GraphType) {
        this.vertices = vertices;
        this.graphType = graphType;
        this.list = Array(vertices).fill(null).map(() => Array());
    }

    public addEdge(i: number, j: number) {
        this.list[i].push(j);
        if (this.graphType == "undirected")
            this.list[j].push(i);
    }

    public printGraph() {
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

export default GraphLinkedList;
