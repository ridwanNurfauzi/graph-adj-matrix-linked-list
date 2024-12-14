#include <iostream>
#include <vector>

using namespace std;

enum GraphType
{
    DIRECTED,  // Graf Terarah
    UNDIRECTED // Graf Tidak Terarah
};

class GraphLinkedList
{
public:
    int vertices;
    vector<vector<int>> list;
    GraphType graphType;

    GraphLinkedList(int vertices, GraphType graphType)
    {
        this->vertices = vertices;
        this->graphType = graphType;
        for (int i = 0; i < vertices; i++)
            this->list.push_back(vector<int>());
    }

    void addEdge(int i, int j)
    {
        this->list[i].push_back(j);
        if (this->graphType == GraphType::UNDIRECTED)
            this->list[j].push_back(i);
    }

    void printGraph()
    {
        for (int i = 0; i < this->vertices; i++)
        {
            cout << i;
            for (int j = 0; j < this->list[i].size(); j++)
            {
                cout << " -> ";
                cout << this->list[i][j];
            }
            cout << endl;
        }
    }
};

int main(int argc, char const *argv[])
{
    GraphLinkedList graph(4, GraphType::UNDIRECTED);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.printGraph();

    return 0;
}
