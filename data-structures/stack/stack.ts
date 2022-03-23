export interface IStack<T> {
  items: T[];
  top: number;
  max: number;
  peek(): T;
  add(item: T): void;
  delete(): void;
}

export class Stack<T> implements IStack<T> {
  public items: T[];
  public top = 0;
  public max: number;

  constructor(max = Math.pow(2, 32)) {
    this.items = new Array(max - 1);
    this.max = max;
  }

  public peek(): T {
    return this.items[this.top - 1];
  }

  public add(item: T): void {
    if (this.top >= this.max) {
      throw new Error("Stack is overflowed");
    }

    this.items[this.top++] = item;
  }

  public delete(): void {
    if (this.top <= 0) {
      throw new Error("Stack us underflowed");
    }

    this.top--;
    this.items.pop();
  }
}

// const stack = new Stack<number>(64);
// for (let i = 0; i < stack.max; i++) {
//   stack.add(i);
// }

// // 63
// console.log(stack.peek());

// // 64
// console.log(stack.top);

// // 63
// stack.delete();
// console.log(stack.top);