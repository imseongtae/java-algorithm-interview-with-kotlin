function solution(scoville: number[], K: number): number {
  // Min-heap을 사용하기 위해 scoville 배열을 힙으로 변환
  const heap: number[] = [];

  function heapify(arr: number[]) {
    for (const num of arr) {
      heapPush(heap, num);
    }
  }

  function heapPush(heap: number[], value: number) {
    heap.push(value);
    let index = heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (heap[parent] <= heap[index]) break;
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
    }
  }

  function heapPop(heap: number[]): number | null {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop() as number;
    const top = heap[0];
    heap[0] = heap.pop() as number;
    let index = 0;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;
      if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
      if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
      if (smallest === index) break;
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      index = smallest;
    }
    return top;
  }

  heapify(scoville);

  let mixCount = 0;

  while (heap.length > 1 && heap[0] < K) {
    const first = heapPop(heap);
    const second = heapPop(heap);

    if (first === null || second === null) break;

    const newScoville = first + second * 2;
    heapPush(heap, newScoville);
    mixCount++;
  }

  if (heap[0] < K) return -1;

  return mixCount;
}
