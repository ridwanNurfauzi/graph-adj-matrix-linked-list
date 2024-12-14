#include <iostream>
#include <vector>

using namespace std;

enum GraphType
{
    DIRECTED, // Graf Terarah
    UNDIRECTED // Graf Tidak Terarah
};

class GraphAdjMatrix
{
public:
    int size;
    vector<vector<int>> matrix;
    GraphType graphType;

    GraphAdjMatrix(int size, GraphType graphType)
    {
        this->size = size;
        this->graphType = graphType;
        for (int i = 0; i < size; i++)
        {
            this->matrix.push_back(vector<int>());
            for (int j = 0; j < size; j++)
                this->matrix[i].push_back(0);
        }
    }

    void addEdge(int i, int j)
    {
        this->matrix.at(i).at(j) = 1;
        if (this->graphType == GraphType::UNDIRECTED)
            this->matrix.at(j).at(i) = 1;
    }

    void printGraph()
    {
        for (int i = 0; i < this->size; i++)
        {
            for (int j = 0; j < this->size; j++)
                cout << matrix[i][j] << ' ';
            cout << endl;
        }
    }
};

int main(int argc, char const *argv[])
{
    GraphAdjMatrix graph(4, GraphType::DIRECTED);
    graph.addEdge(1, 2);
    graph.addEdge(0, 2);
    graph.printGraph();

    return 0;
}
