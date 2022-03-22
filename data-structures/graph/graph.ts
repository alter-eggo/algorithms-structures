export interface IGraph<T, R, V> {
  verticies: Map<T, V | undefined>;
  edges: Map<T | R, Map<R | T, V | undefined>>;
  getAdjacent(x: T, y: R): boolean;
  getNeighbors(x: T): Map<T | R, V>;
  addVertex(x: T): void;
  removeVertex(x: T): void;
  getVertexValue(x: T): V;
  setVertexValue(x: T, v: V): void;
  addEdge(x: T, y: R): void;
  removeEdge(x: T, y: R): void;
}

export class Graph<T, R, V> implements IGraph<T, R, V> {
  public readonly verticies: Map<T, V | undefined> = new Map();
  public readonly edges: Map<T | R, Map<R | T, V | undefined>> = new Map();

  public getAdjacent(x: T, y: R): boolean {
    return this.edges.get(x)?.has(y);
  }

  public getNeighbors(x: T): Map<T | R, V> {
    return this.edges.get(x);
  }

  public addVertex(x: T) {
    this.verticies.set(x, undefined);

    if (!this.edges.has(x)) {
      this.edges.set(x, new Map());
    }
  }

  public removeVertex(x: T) {
    this.verticies.delete(x);
    this.edges.delete(x);

    for (const edge of this.edges.values()) {
      if (edge.has(x)) {
        edge.delete(x);
      }
    }
  }

  public getVertexValue(x: T): V {
    return this.verticies.get(x);
  }

  public setVertexValue(x: T, v: V): void {
    this.verticies.set(x, v);
  }

  public addEdge(x: T, y: R): void {
    this.edges.get(x)?.set(y, undefined);
    this.edges.get(y)?.set(x, undefined);
  }

  public removeEdge(x: T, y: R) {
    this.edges.get(x)?.delete(y);
    this.edges.get(y)?.delete(x);
  }

  public getEdgeValue(x: T, y: R): V {
    return this.edges.get(x)?.get(y);
  }

  public setEdgeValue(x: T, y: R, v: V): void {
    this.edges.get(x)?.set(y, v);
  }
}
