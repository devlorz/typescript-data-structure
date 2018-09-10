export class Stack {
  private storage: { [key: number]: number };
  private length: number;

  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value: number) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop(): number {
    if (this.length) {
      const lastVal = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return lastVal;
    }
  }

  peek(): number {
    if (this.length) {
      return this.storage[this.length - 1];
    }
  }
}
