export class HashTable {
  private storage: Array<Array<[string, number]>>;
  private tableSize: number;

  constructor(size: number) {
    this.storage = [];
    this.tableSize = size;
  }

  insert(key: string, value: number) {
    const index = this.hash(key, this.tableSize);

    if (!this.storage[index]) {
      this.storage[index] = [];
    }
    this.storage[index].push([key, value]);
  }

  remove(key: string) {
    const index = this.hash(key, this.tableSize);

    if (this.storage[index]) {
      const element = this.storage[index].find(item => item[0] === key);

      if (element) {
        this.storage[index].splice(this.storage[index].indexOf(element), 1);
      }
    }
  }

  retrieve(key: string): number {
    const index = this.hash(key, this.tableSize);

    if (this.storage[index]) {
      const element = this.storage[index].find(item => item[0] === key);

      return element ? element[1] : 0;
    }
    return 0;
  }

  private hash(text: string, n: number): number {
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i) * 3;
    }

    return sum % n;
  }
}
