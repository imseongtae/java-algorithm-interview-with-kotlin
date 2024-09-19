# Chapter-08


## Table of contents
1. [Palindrome Linked List](#1-palindrome-linked-list)
1. [Merge Two Sorted Lists](#2-merge-two-sorted-lists)
1. [Reverse Linked List](#3-reverse-linked-list)

---


## 1. Palindrome Linked List

### 문제해결 단계
1. 연결리스트의 중간을 찾기
2. 연결리스트의 후반부를 뒤집기
3. 전반부와 후반부를 비교하여 회문 여부 판단

---

## 2. Merge Two Sorted Lists

### 문제해결 단계
1. 두 리스트의 첫 노드를 비교합니다.
2. 더 작은 값을 가진 노드를 새로운 리스트에 추가합니다.
3. 해당 리스트의 다음 노드로 이동합니다.
4. 두 리스트 중 하나가 끝날 때까지 위 과정을 반복합니다.
5. 하나의 리스트가 끝난 경우, 남은 리스트를 새로운 리스트에 이어 붙입니다.

---

## 3. Reverse Linked List
연결 리스트는 각 노드가 다음 노드를 가리키는 데이터 구조
역순으로 뒤집는다는 것은 첫 번째 노드가 마지막 노드가 되고, 두 번째 노드는 그 이전 노드를 가리키는 식으로 바뀌는 것

### 문제해결 단계
1. 연결 리스트를 순회하면서 
1. 각 노드의 다음 노드 포인터를 이전 노드를 가리키도록 변경하면 됨
  1. 이를 위해 while 루프를 사용합니다.

### 예제 모양

```
1 -> 2 -> 3 -> 4 -> 5 -> null
```

```
5 -> 4 -> 3 -> 2 -> 1 -> null
```
