---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---


# **Chapter-09**

## 1. Design Circular Deque

---

## 문제 이해
원형 덱을 설계하는 문제이며, 원형 덱은 아래의 연산을 지원해야 함

### Deq
덱은 Double-ended Queue의 약자로, 양쪽 끝에서 삽입과 삭제가 가능한 자료 구조

---

### 원형 덱
원형 덱은 아래의 연산을 지원해야 함

- insertFront(): 덱의 앞쪽에 요소를 삽입
- insertLast(): 덱의 뒤쪽에 요소를 삽입
- deleteFront(): 덱의 앞쪽 요소를 삭제
- deleteLast(): 덱의 뒤쪽 요소를 삭제
- getFront(): 덱의 앞쪽 요소를 가져오기
- getRear(): 덱의 뒤쪽 요소를 가져오기
- isEmpty(): 덱이 비어있는지 확인
- isFull(): 덱이 꽉 찼는지 확인

---

## 문제 풀이 방법

---

### Step 1: 클래스 정의와 생성자

```ts
class MyCircularDeque {
  private deque: number[];
  private front: number;
  private rear: number;
  private capacity: number;

  constructor(k: number) {
    this.capacity = k + 1; // 공간을 하나 더 사용하여 포인터가 겹치지 않게 함
    this.deque = new Array(this.capacity);
    this.front = 0;
    this.rear = 0;
  }
}
```

---

### Step 2: isEmpty()와 isFull() 구현
덱이 비어있는지와 꽉 찼는지를 확인하는 메서드를 구현

```
isEmpty(): boolean {
  // front 포인터와 rear 포인터가 같은 위치에 있을 때 덱이 비어있다고 판단
  return this.front === this.rear;
}
```

### Step 3: insertFront()와 insertLast() 구현
앞쪽과 뒤쪽에 요소를 삽입하는 메서드를 구현

---

### Step 4: deleteFront()와 deleteLast() 구현
앞쪽과 뒤쪽에서 요소를 삭제하는 메서드를 구현

### Step 5: getFront()와 getRear() 구현
앞쪽과 뒤쪽의 요소를 가져오는 메서드를 구현

---

## 문제의 중요한 점
배열을 원형으로 사용하기 위해 포인터를 적절히 관리하는 것.

- 이를 위해 모듈로 연산을 사용하여 포인터가 배열의 끝에서 다시 처음으로 돌아올 수 있도록 설정
- 이 방법을 사용하면 배열의 크기를 초과하지 않고도 원형 덱을 효율적으로 구현할 수 있음


