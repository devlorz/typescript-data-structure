export class Node {
  data: any;
  children: Array<any>;

  constructor(data: any) {
    this.data = data;
    this.children = [];
  }

  add(data: any) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data: any) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

export class Tree {
  root: Node;
  constructor() {
    this.root = null;
  }
}
