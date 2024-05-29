# Chapter-09


## Table of contents
1. [Palindrome Linked List](#1-palindrome-linked-list)
1. [Remove Duplicate Letters](#2-remove-duplicate-letters)
1. [Daily Temperatures](#3-daily-temperatures)
1. [Implement Stack using Queues](#4-implement-stack-using-queues)
1. [Implement Queue using Stacks](#5-implement-queue-using-stacks)
1. [Design Circular Queue](#6-design-circular-queue)
---


## 1. Valid Parentheses

### 문제
열린 괄호와 닫힌 괄호의 꼴이 같은지 확인하는 문제

```bash
()[]{} # true
```

```bash
(] # false
```

### 문제해결 과정
1. 문자열을 순회하며 
2. 열린 괄호의 요소의 경우, 바로 이어지는 문자가 같은 꼴의 닫힌 괄호인지 확인 
3. 확인한 내용을 응답

---


## 2. Remove Duplicate Letters

### 문제
중복된 문자를 제외하고, 사전식 순서로 나열

```bash
dbacdcbc # true
```

```bash
acdb # false
```

## 3. Daily Temperatures

### 문제
매일의 온도 리스트를 입력 받아서, 더 따듯한 날씨를 위해서 며칠을 기다려야 하는지

```bash
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
```

```bash
[1, 1, 4, 2, 1, 1, 0, 0]
```

### 문제해결 과정
1. 각 온도에 대해, 더 따뜻한 날이 오기까지 며칠을 기다려야 하는지를 계산
2. 온도 배열을 순회하면서 현재보다 높은 온도 찾기
3. 배열의 각 요소에 대해 결과를 저장할 배열을 만들기

## 4. Implement Stack using Queues
스택과 큐는 둘 다 선형 자료구조지만, 동작 방식이 다름. 

- 스택은 LIFO(Last In, First Out)
- 큐는 FIFO(First In, First Out)


## 5. Implement Queue using Stacks
스택을 이용해 아래의 연산을 지원하는 큐를 구현

- push(x): 요소 x를 큐 마지막에 추가
- pop(): 큐 처음에 있는 요소를 제거
- top(): 큐 첫 번째 요소를 조회
- empty(): 큐가 비어 있는지 여부 반환

## 6. Design Circular Queue

### 원형큐
원형 큐는 큐의 한 형태로, 선형 큐와 달리 마지막 위치의 다음 위치가 첫 번째 위치와 연결되어 있는 형태. 

- enQueue(value): 큐에 요소를 추가. 성공적으로 추가하면 true, 큐가 가득 찼으면 false를 반환
- deQueue(): 큐에서 요소를 제거. 성공적으로 제거하면 true, 큐가 비어있으면 false를 반환
- Front(): 큐의 첫 번째 요소를 조회. 큐가 비어있으면 -1을 반환
- Rear(): 큐의 마지막 요소를 조회. 큐가 비어있으면 -1을 반환
- isEmpty(): 큐가 비어있는지 확인
- isFull(): 큐가 가득 찼는지 확인


