class Node_ {
  val: any;
  next: typeof this | null;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: Node_ | null;
  tail: Node_ | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: any) {
    const node = new Node_(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }
  pop() {
    if (!this.head) return;
    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }
  shift() {
    if (!this.head) return;
    const currentNode = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentNode;
  }
  unShift(val: any) {
    const node = new Node_(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }
  get(index: number): Node_ {
    if (index < 0 || this.length - 1 < index) {
      return null;
    }

    let count = 0;
    let resultNode = this.head;

    while (count < index) {
      resultNode = resultNode.next;
      count++;
    }

    return resultNode;
  }
  set(index: number, val: any) {
    const targetNode = this.get(index);
    if (!targetNode) return false;

    targetNode.val = val;
    return true;
  }
  insert(index: number, val: any) {
    if (index < 0 || this.length < index) return false;
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unShift(val);
    }

    const node = new Node_(val);
    const targetNodePrev = this.get(index - 1);

    node.next = targetNodePrev.next;
    targetNodePrev.next = node;

    this.length++;

    return true;
  }
  remove(index: number) {
    if (index < 0 || this.length <= index) return;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    const prevNode = this.get(index - 1);
    const targetNode = prevNode.next;
    prevNode.next = targetNode.next;

    this.length--;
    return targetNode;
  }
  reverse() {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    let cnt = 0;

    while (cnt < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      cnt++;
    }

    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("THERE");
list.push("GOODBYE");
list.push("SEE");
list.push("YOU");
list.push("LATER");
list.push("!");

console.log(list.reverse());
