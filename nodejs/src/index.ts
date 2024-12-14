import GraphAdjMatrix from './graphAdjMatrix';
import GraphLinkedList from './graphLinkedList';

(function () {
    console.log("Graph - Adjacecy Matrix");
    const graphAdjMatrix = new GraphAdjMatrix(4, 'directed');
    graphAdjMatrix.addEdge(0, 2);
    graphAdjMatrix.addEdge(2, 3);
    graphAdjMatrix.addEdge(2, 1);
    graphAdjMatrix.printGraph();

    console.log("Graph - Linked List");
    const graphLinkedList = new GraphLinkedList(4, 'undirected');
    graphLinkedList.addEdge(1,0)
    graphLinkedList.addEdge(0,3)
    graphLinkedList.addEdge(1,2)
    graphLinkedList.printGraph();
})();
