export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const dataToReturn = this.head.data;
    this.head = this.head.next;
    this.size--;
    return dataToReturn;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.head.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  printStack() {
    let current = this.head;

    if (current === null) {
      console.log("Stack is empty");
      return;
    }

    while (current !== null) {
      console.log(current);

      current = current.next;
    }
  }
}
