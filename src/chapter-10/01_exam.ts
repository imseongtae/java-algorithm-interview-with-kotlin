class MyCircularDeque {
  private deque: number[];
  private front: number;
  private rear: number;
  private capacity: number;

  constructor(k: number) {
    this.capacity = k + 1; // 공간을 하나 더 사용하여 포인터가 겹치지 않게 함
    this.deque = new Array<number>(this.capacity);
    this.front = 0;
    this.rear = 0;
  }

  isEmpty(): boolean {
    return this.front === this.rear;
  }

  isFull(): boolean {
    return (this.rear + 1) % this.capacity === this.front;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.deque[this.front] = value;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.deque[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) return -1;
    return this.deque[this.front];
  }

  getRear(): number {
    if (this.isEmpty()) return -1;
    return this.deque[(this.rear - 1 + this.capacity) % this.capacity];
  }
}
