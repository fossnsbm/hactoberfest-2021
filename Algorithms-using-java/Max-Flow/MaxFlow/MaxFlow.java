
import java.io.File;
import java.io.FileNotFoundException;
import java.util.LinkedList;
import java.util.Scanner;

public class MaxFlow {
// adjacency matrix for represent the node and capacity
        static int[][] graph = null;

        // number of vertisers
        static int numberOfNode = 0;

        MaxFlow(int v){
            this.numberOfNode = v;
            graph = new int[v][v];
        }

        //add node to graph 
    public void addNode(int u, int v, int capacity){
        graph[u][v] = capacity;
    }
    
   // delete node from graph
    public void deleteNode(int u, int v){
        graph[u][v] = 0;
    }
    
    // search node capacity
    public int searchNode(int u , int v){
        try{
            return graph[u][v];
        }catch(Exception e){
            return 0;
        }
    }
    
    
    public static void main(String[] args) {
        MaxFlow runner = null ;
        // read the text file and add data to array
        try {
            // read the file
            File myObj = new File("src/testFiles/ladder_2.txt");
            Scanner myReader = new Scanner(myObj);
            int readLine = 0;
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                if (readLine == 0) {
                
                    int v = Integer.parseInt(data.split(" ")[0]);
                    runner = new MaxFlow(v);
                
                } else {
                    
                    String[] edgesAndCpacity = data.split(" ");
                    int uNode = Integer.parseInt(edgesAndCpacity[0]);
                    int vNode = Integer.parseInt(edgesAndCpacity[1]);
                    int capcity = Integer.parseInt(edgesAndCpacity[2]);
                    runner.addNode(uNode, vNode, capcity);
                }
                readLine++;
            }
            

            long start = System.nanoTime();
            int b = runner.fordFulkerson(graph, 0, numberOfNode - 1, numberOfNode);
            long now = System.nanoTime();
            double elapsed =  (now - start)/1000000.00;
            System.out.println("number of nodes : "+ numberOfNode);
            System.out.println("number of edges : "+ (readLine-1));
            System.out.println("max flow node 0 to node " + (numberOfNode - 1) + " : " + b);
            System.out.println();
            System.out.println("Elapsed time = " + elapsed + " milliseconds");

        } catch (FileNotFoundException | NumberFormatException e) {
            System.out.println("An error occurred.");
        }

    }
    
    public void printGraph(){
        for(int i = 0; i < numberOfNode;i ++){
            for(int j = 0; j < numberOfNode;j ++){
                System.out.print(graph[i][j]);
        } 
            System.out.println();
        }
    }

    boolean breadthFirstSearch(int[][] resdGraph, int s, int t, int[] parentNodes, int numOfNodes) {
        // visited nodes
        boolean[] visitedNodes = new boolean[numOfNodes];
        // set all items in visitedNode to false
        for (int i = 0; i < numOfNodes; ++i)
            visitedNodes[i] = false;

        LinkedList<Integer> queue = new LinkedList<Integer>();
        queue.add(s);
        visitedNodes[s] = true;
        parentNodes[s] = -1;

        while (queue.size() != 0) {
            int u = queue.poll();

            for (int v = 0; v < numOfNodes; v++) {
                if (!visitedNodes[v]
                        && resdGraph[u][v] > 0) {
                    if (v == t) {
                        parentNodes[v] = u;
                        return true;
                    }
                    queue.add(v);
                    parentNodes[v] = u;
                    visitedNodes[v] = true;
                }
            }
        }

        return false;
    }


    int fordFulkerson(int[][] graph, int s, int t, int numOfNodes) {
        // u = parent node , v = child node
        int u, v;
        int[] parentNodes = new int[numOfNodes];

        // max flow
        int max_flow = 0;

        // find a augment flow path loop it while breadthFirstSearch method return false
        // the breadthFirstSearch method return true when it find path otherwise it return false

        while (breadthFirstSearch(graph, s, t, parentNodes, numOfNodes)) {
            int currentPathFlow = Integer.MAX_VALUE;
            for (v = t; v != s; v = parentNodes[v]) {
                u = parentNodes[v];
                currentPathFlow = Math.min(currentPathFlow, graph[u][v]);
            }

            // set the parentNodes and augment the path
            for (v = t; v != s; v = parentNodes[v]) {
                u = parentNodes[v];
                graph[u][v] -= currentPathFlow;
                graph[v][u] += currentPathFlow;
            }
            // increase the max flow
            max_flow += currentPathFlow;
        }

        return max_flow;
    }
    
}
