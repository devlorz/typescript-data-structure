import { LinkedList, Node } from './linkedlist';

export const fromLast = (list: LinkedList, n: number): Node => {
  let slow = list.getFirst();
  let fast = list.getFirst();

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
