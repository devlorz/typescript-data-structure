import { HashTable } from '../hash-table';

test('HashTable is working', () => {
  const myHashTable = new HashTable(25);

  myHashTable.insert('a', 1);
  myHashTable.insert('b', 2);
  expect(myHashTable.retrieve('a')).toBe(1);
  expect(myHashTable.retrieve('b')).toBe(2);

  myHashTable.remove('b');
  expect(myHashTable.retrieve('b')).toBe(0);

  myHashTable.remove('a');
  expect(myHashTable.retrieve('a')).toBe(0);
});
