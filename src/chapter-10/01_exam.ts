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

  /** 덱이 비어있는지 확인 */
  isEmpty(): boolean {
    // front 포인터와 rear 포인터가 같은 위치에 있을 때 덱이 비어있다고 판단
    return this.front === this.rear;
  }

  /** 덱이 꽉 찼는지 확인 */
  isFull(): boolean {
    return (this.rear + 1) % this.capacity === this.front;
  }

  /** 덱의 앞쪽에 요소를 삽입 */
  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.deque[this.front] = value;
    return true;
  }

  /** insertLast */
  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.deque[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    return true;
  }

  /** 덱의 앞쪽 요소를 삭제 */
  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    return true;
  }

  /** 덱의 뒤쪽 요소를 삭제 */
  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    return true;
  }

  /** 덱의 앞쪽 요소를 가져오기 */
  getFront(): number {
    if (this.isEmpty()) return -1;
    return this.deque[this.front];
  }

  /** 덱의 뒤쪽 요소를 가져오기 */
  getRear(): number {
    if (this.isEmpty()) return -1;
    return this.deque[(this.rear - 1 + this.capacity) % this.capacity];
  }
}
