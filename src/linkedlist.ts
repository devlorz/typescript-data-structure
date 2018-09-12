export class Node {
  constructor(public data: any, public next: any = null) {}
}

export class LinkedList implements Iterable<Node> {
  public head: Node;
  public tail: Node;

  constructor();
  constructor(value?: any) {
    this.head = (value && new Node(value)) || null;
    this.tail = this.head;
  }

  insertFirst(value: any) {
    const node = new Node(value, this.head);
    this.head = node;
    if (this.size() === 1) {
      this.tail = this.head;
    }
  }

  insertLast(value: any) {
    const node = new Node(value);
    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  size(): number {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.tail || !this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;

    while (node.next !== this.tail) {
      node = node.next;
    }

    node.next = null;
    this.tail = node;
  }

  getAt(index: number): Node {
    let counter = 0;
    let node = this.head;

    while (counter < index && node) {
      node = node.next;
      counter++;
    }

    return node;
  }

  removeAt(index: number) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(value: any, index: number) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(value, previous.next);
    previous.next = node;
  }

  forEach(fn: Function) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
