import { Stack } from './stack';
export class QFS {
  private first: Stack;
  private second: Stack;

  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record: number) {
    this.first.push(record);
  }

  remove(): number {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const value = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return value;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const value = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return value;
  }
}
