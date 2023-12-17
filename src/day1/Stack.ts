// Stack in Singly Linked list

type Node<T> = {
  value: T,
  prev ?: Node<T>,
}

export default class Stack<T> {
  public length: number;
  private head ?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  // O(1) | O(1)
  push(item: T): void {
    let node = { value: item } as Node<T>;
    this.length++;
    
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  // O(1) | O(1)
  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    
    if(this.length === 0) {
      let head = this.head;
      this.head = undefined;
      return head?.value;
    }

    let head = this.head;
    this.head = head?.prev;
    return head?.value;
  }
  
  // O(1) | O(1)
  peek(): T | undefined {
    return this.head?.value;
  }
}