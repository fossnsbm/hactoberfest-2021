public class DFS {
    private static final int V = 8;

    //	Adjacency Matrix for a Sample Graph
    private static final int[][] GRAPH = {
            //	       A  B  C  D  E  F  G  H
            /*	A */ {0, 1, 1, 1, 0, 0, 0, 0},
            /*	B */ {1, 0, 0, 0, 1, 1, 0, 0},
            /*	C */ {1, 0, 0, 1, 0, 0, 0, 0},
            /*	D */ {1, 0, 0, 1, 0, 0, 1, 0},
            /*	E */ {0, 1, 1, 1, 0, 0, 0, 1},
            /*	F */ {0, 1, 0, 0, 0, 0, 0, 1},
            /*	G */ {0, 0, 0, 1, 0, 0, 0, 1},
            /*	H */ {0, 0, 0, 0, 1, 1, 1, 0}
    };
    private static final int GRAPH_ROOT = 0;

    // to keep track of visited node
    private static final boolean[] VERTEX_VISITED = new boolean[V];

    public static void DFS(int v) {

        VERTEX_VISITED[v] = true;
        System.out.println("Visited V" + v);

        for (int u = 0; u < V; u++) {

            // check for an edge between u and v
            if (GRAPH[u][v] == 1) {
                // check if this has been visited already
                if (!VERTEX_VISITED[u]) {
                    DFS(u);
                }
            }
        }
    }

    public static void main(String[] s) {

        for (int v = 0; v < V; v++) {
            // set all vertices to NOT_VISITED
            VERTEX_VISITED[v] = false;
        }

        System.out.println("\nDFS Traversal ::\n");
        DFS(GRAPH_ROOT);
    }
}
