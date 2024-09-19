---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---


# **Chapter-08**

## 3. Reverse Linked List

---

### 연결 리스트
연결 리스트는 각 노드가 다음 노드를 가리키는 데이터 구조

### Reverse Linked List
역순으로 뒤집는다는 것은 **첫 번째 노드가 마지막 노드**가 되고
**두 번째 노드는 그 이전 노드**를 가리키는 식으로 바뀌는 것

---

#### 출력되어야 하는 예제 모양
첫 번째 노드가 마지막 노드가 되고
두 번째 노드는 그 이전 노드를 가리키도록
...

```
1 -> 2 -> 3 -> 4 -> 5 -> null
```

```
5 -> 4 -> 3 -> 2 -> 1 -> null
```

---

### 문제해결 단계
1. 연결 리스트를 순회하면서 
1. 각 노드의 다음 노드 포인터를 이전 노드를 가리키도록 변경

---

### 연결 리스트 생성 함수
배열을 입력받아 연결 리스트를 생성하는 함수

```ts
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
```

---

### 연결 리스트 역순 함수
prev, current, next 세 개의 포인터

1. next는 현재 노드의 **다음 노드를 저장**
1. 현재 노드의 **next 포인터를 prev로 설정**하여 연결을 반대로 변경
1. **prev를 현재 노드로 업데이트**
1. **current를 next로 업데이트**하여 다음 노드로 이동

---

```ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  // null 이 될때까지 반복
  while (current !== null) {
    let next: ListNode | null = current.next; // 다음 노드를 임시로 저장
    current.next = prev; // 현재 노드의 다음 노드를 이전 노드로 변경
    prev = current; // 이전 노드를 현재 노드로 업데이트
    current = next; // 현재 노드를 다음 노드로 업데이트
  }
  return prev;
}
```
