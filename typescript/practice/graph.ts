import { range } from "../utils"

type BinGraphNode = {
    readonly value: number;
    readonly left?: BinGraphNode;
    readonly right?: BinGraphNode;
}

const dfs = (searchFor: BinGraphNode["value"], graph?: BinGraphNode): boolean => {
    if (!graph) {
        return false;
    }
    return graph.value === searchFor ? true : (dfs(searchFor, graph.left) || dfs(searchFor, graph.right));
}

const bfs = (searchFor: BinGraphNode["value"], graph?: BinGraphNode): boolean => {
    let nodeQueue: BinGraphNode[] = [graph]

    while (nodeQueue.length !== 0) {
        const currNode = nodeQueue[0];
        if (currNode.value === searchFor)
            return true;

        if (currNode.left)
            nodeQueue.push(currNode.left);
        if (currNode.right)
            nodeQueue.push(currNode.right);

        nodeQueue = nodeQueue.slice(1);
    }
    return false;
}


const graph = [
    [0, 2, 8, 4, -1, -1],
    [2, 0, -1, -1, 11, 3],
    [8, -1, 0, -1, 3, 2],
    [4, -1, -1, 0, 6, -1],
    [-1, 11, 3, 6, 0, -1],
    [-1, 3, 2, -1, -1, 0]
]

/**
 * Time complexity: list -> O(n^2)
 *                  minPrioQueue -> O(m + n*log(n))
 *                      m as we need to check each edge, n*log(n) as we need to check each node, and at each one
 *                      we insert a new value into our minPrioQueue, which is log(n)
 */
const dijkstras = (graph: number[][]) => {
    const distances = range(0, graph.length).map(i => i === 0 ? 0 : Number.MAX_VALUE);
    let unvisited = range(0, graph.length);
    let currNode = 0;

    while (unvisited.length > 0) {
        graph[currNode].forEach((distToNode, node) => {
            if (distToNode !== -1)
                distances[node] = Math.min(distances[node], distances[currNode] + distToNode)
        })

        // remove current node from unvisisted
        unvisited.splice(unvisited.indexOf(currNode), 1);

        currNode = unvisited.length !== 0 ? unvisited.reduce((closestNode, i) => (
            distances[closestNode] > distances[i] ? i : closestNode
        )) : -1
    }

    distances.forEach((dist, i) => {
        console.log(`Distance from start to ${i} is ${dist}`);
    })
}



const exampleData: BinGraphNode = {
    value: 1,
    left: { value: 2, left: { value: 4 }, right: { value: 5 } },
    right: { value: 3, left: { value: 6 }, right: { value: 7 } }
}



dijkstras(graph);
console.log(dfs(3, exampleData));
console.log(bfs(7, exampleData));

