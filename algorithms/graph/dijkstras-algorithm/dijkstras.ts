interface IGraphNode {
  [key: string]: number;
}
interface ISimpleGraph {
  [key: string]: IGraphNode;
}

export function shortPath(graph: ISimpleGraph, start: string, end: string) {
  const costs = {};
  const processed = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || Infinity;
    }
  });

  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }

  return costs;
}

function findNodeLowestCost(costs: IGraphNode, processed: string[]) {
  let lowestCost = Infinity;
  let lowestNode: string;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

// const graph: ISimpleGraph = {};
// graph.a = { b: 2, c: 1 };
// graph.b = { f: 7 };
// graph.c = { d: 5, e: 2 };
// graph.d = { f: 2 };
// graph.e = { f: 1 };
// graph.f = { g: 1 };
// graph.g = {};

// console.log("first", shortPath(graph, "a", "g"));
