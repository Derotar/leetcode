class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const newSort = (a: number, b: number) => {
  return a - b;
};

const ListNodeToArray = (list: ListNode | null): Array<number> => {
  const arr: number[] = [];
  let currentList: ListNode | null = list;
  while (currentList) {
    arr.push(currentList.val);
    currentList = currentList.next;
  }
  return arr;
};

const ArrayToListNode = (arr: number[]): ListNode | null => {
  let prev: ListNode | null = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!prev) prev = new ListNode(arr[i], null);
    else prev = new ListNode(arr[i], prev);
  }
  return prev;
};

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const arr1 = ListNodeToArray(list1);
  const arr2 = ListNodeToArray(list2);

  const arr = [...arr1, ...arr2].sort(newSort);

  return ArrayToListNode(arr);
}

const a: ListNode = new ListNode(4);
const b: ListNode = new ListNode(2, a);
const list1: ListNode = new ListNode(1, b);

const d: ListNode = new ListNode(4);
const e: ListNode = new ListNode(3, d);
const list2: ListNode = new ListNode(1, e);
console.log(mergeTwoLists(list1, list2));

console.log(ListNodeToArray(list1), ListNodeToArray(list2));
console.log(ArrayToListNode(ListNodeToArray(list1)));

console.log([1, 4, 5, -3, -6].sort());
console.log([1, 4, 5, -3, -6].sort(newSort));
