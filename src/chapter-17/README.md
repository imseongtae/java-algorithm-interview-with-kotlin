# 정렬

정렬 알고리즘의 사전적 정의는 리스트의 엘리먼트를 특정 순서대로 나열하는 알고리즘을 의미, 대개 숫자식 순서 또는 사전식 순서로 정렬함

## Table of contents
1. 버블 정렬 (Bubble Sort)
2. 삽입 정렬 (Insertion Sort)
3. 병합 정렬 (Merge Sort)
4. 퀵 정렬 (Quick Sort)

---

## 1.	버블 정렬 (Bubble Sort)
- 인접한 두 요소를 비교하여 크기가 큰 요소를 뒤로 이동
- 매 반복마다 가장 큰 값이 맨 뒤로 이동
- 시간 복잡도: O(n²) (최악, 평균), O(n) (최선 - 이미 정렬된 경우)

### 수도 코드

```
BubbleSort(arr):
  n = length(arr)
  for i from 0 to n-1:
    for j from 0 to n-i-1:
      if arr[j] > arr[j+1]:
        swap(arr[j], arr[j+1])
```

### javascript

```
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
```

## 2. 삽입 정렬 (Insertion Sort)
- 현재 요소를 정렬된 부분에 알맞은 위치에 삽입
- 시간이 걸리지만 비교적 정렬된 데이터에 빠름
- 시간 복잡도: O(n²) (최악, 평균), O(n) (최선)

### 수도 코드

```
InsertionSort(arr):
  n = length(arr)
  for i from 1 to n-1:
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
      arr[j + 1] = arr[j]
      j = j - 1
    arr[j + 1] = key
```

---

## 3.	병합 정렬 (Merge Sort)
- 분할 정복 방식으로 배열을 반씩 나눈 후 병합하며 정렬
- 안정적인 정렬 알고리즘
- 시간 복잡도: O(n log n) (항상 동일)

### 수도 코드

```
MergeSort(arr):
  if length(arr) ≤ 1:
    return arr
  mid = length(arr) / 2
  left = MergeSort(arr[0:mid])
  right = MergeSort(arr[mid:end])
  return Merge(left, right)

Merge(left, right):
  result = []
  while left is not empty and right is not empty:
    if left[0] ≤ right[0]:
      append left[0] to result
      remove left[0] from left
    else:
      append right[0] to result
      remove right[0] from right
  append remaining elements of left and right to result
  return result
```

---

## 4.	퀵 정렬 (Quick Sort)
- 피벗을 기준으로 작은 값과 큰 값으로 분할 후 정렬
- 평균적으로 빠르지만, 최악의 경우 O(n²)
- 시간 복잡도: O(n log n) (평균, 최선), O(n²) (최악)

### 수도 코드

```
QuickSort(arr):
  if length(arr) ≤ 1:
    return arr
  pivot = arr[length(arr) / 2]
  left = [x for x in arr if x < pivot]
  middle = [x for x in arr if x == pivot]
  right = [x for x in arr if x > pivot]
  return QuickSort(left) + middle + QuickSort(right)
```


## 정리

| 정렬 알고리즘 | 시간 복잡도 (최선) | 시간 복잡도 (평균) | 시간 복잡도 (최악) | 공간 복잡도 | 정렬 방식 |
|--------------|----------------|----------------|----------------|------------|----------|
| 버블 정렬    | O(n)          | O(n²)         | O(n²)         | O(1)       | 비교 정렬 |
| 삽입 정렬    | O(n)          | O(n²)         | O(n²)         | O(1)       | 비교 정렬 |
| 병합 정렬    | O(n log n)    | O(n log n)    | O(n log n)    | O(n)       | 비교 정렬 |
| 퀵 정렬      | O(n log n)    | O(n log n)    | O(n²)         | O(log n)   | 비교 정렬 |