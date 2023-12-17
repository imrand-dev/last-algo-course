// Queue in Singly Linked list

type Node<T> = {
  value : T,
  next ?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head ?: Node<T>;
  private tail ?: Node<T>;

  constructor() {
    this.tail = this.head = undefined;
    this.length = 0;
  }

  // O(1) | O(1)
  enqueue(item: T): void {
    let node = {value: item} as Node<T>;
    this.length++;
    
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }
    
    this.tail.next = node;
    this.tail = node;
  }

  // O(1) | O(1)
  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    let head = this.head;
    this.head = this.head.next;
    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }
    
    return head.value;
  }

  // O(1) | O(1)
  peek(): T | undefined {
    return this.head?.value;
  }
}