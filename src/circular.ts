import { LinkedList } from './linkedlist';

export const circular = (list: LinkedList): boolean => {
  let slow = list.getFirst();
  let fast = list.getFirst();

  do {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  } while (fast.next && fast.next.next);

  return false;
};
