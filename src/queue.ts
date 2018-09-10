export class Queue {
  private storage: { [key: number]: number };
  private length: number;
  private headIndex: number;

  constructor() {
    this.storage = {};
    this.length = 0;
    this.headIndex = 0;
  }

  add(value: number) {
    this.storage[this.length + this.headIndex] = value;
    this.length++;
  }

  remove(): number {
    if (this.length) {
      const firstVal = this.storage[this.headIndex];
      delete this.storage[this.headIndex];
      this.length--;
      this.headIndex++;
      return firstVal;
    }
  }

  peek(): number {
    if (this.length) {
      return this.storage[this.headIndex];
    }
  }
}
