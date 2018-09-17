import { Node, LinkedList } from './linkedlist';
export const midpoint = (list: LinkedList): Node => {
  let slow: Node = list.getFirst();
  let fast: Node = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
