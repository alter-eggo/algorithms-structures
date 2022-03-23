export interface IQueue<T> {
  items: T[];
  head: number;
  tail: number;
  peek(): T;
  enqueue(item: T): void;
  dequeue(): void;
}

export class Queue<T> implements IQueue<T> {
  public items: T[];
  public head = 0;
  public tail = -1;
  public size = 0;
  private max: number;

  constructor(max = Math.pow(2, 32)) {
    this.items = new Array(max - 1);
    this.max = max;
  }

  public peek(): T {
    return this.items[this.head];
  }

  public enqueue(item: T): void {
    if (this.size === this.max) {
      throw new Error("Queue is overflowed");
    }

    this.tail = (this.tail + 1) % this.max;
    console.log(`Enqueuing #${this.tail}`);

    this.items[this.tail] = item;
    console.log(`Tail #${this.tail}`);

    this.size++;
  }

  public dequeue(): void {
    if (this.size < 0) {
      throw new Error("Queue us underflowed");
    }

    console.log(`Dequeuing #${this.head}`);

    this.head = (this.head + 1) % this.max;
    console.log(`Head #${this.head}`);

    this.size--;
  }
}

// const n = 50;
// const queue = new Queue(n);
// for (let i = 0; i < n; i++) {
//   queue.enqueue(i);
// }

// for (let i = 0; i < n / 2; i++) {
//   queue.dequeue();
// }

// console.log(queue);
// console.log(queue.peek());
