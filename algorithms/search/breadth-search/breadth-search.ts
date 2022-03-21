export function breadthSearch(
  graph: { [key: string]: string[] },
  start: string,
  end: string
) {
  let queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    }

    queue = [...queue, ...graph[current]];
  }

  return false;
}

// const graph: { [key: string]: string[] } = {};
// graph.a = ["b", "c"];
// graph.b = ["f"];
// graph.c = ["d", "e"];
// graph.d = ["f"];
// graph.e = ["f"];
// graph.f = ["g"];
// console.log("first", breadthSearch(graph, "a", "b"));
