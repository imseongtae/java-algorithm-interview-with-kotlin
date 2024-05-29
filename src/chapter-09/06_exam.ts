// 622 - Design Circular Queue

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyCircularQueue {
  private queue: number[]; // 큐를 저장할 배열
  private front: number; // 큐의 앞쪽 인덱스
  private rear: number; // 큐의 뒤쪽 인덱스
  private size: number; // 현재 큐에 있는 요소의 개수
  private capacity: number; // 큐의 최대 크기

  constructor(k: number) {
    this.capacity = k;
    this.queue = new Array<number>(k).fill(0);
    this.front = -1; // front 초기화
    this.rear = -1; // rear 초기화
    this.size = 0;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;
    if (this.size === 0) this.front = this.rear;
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    this.size--;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.rear];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }
}
