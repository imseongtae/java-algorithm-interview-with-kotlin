# Chapter-10


## Table of contents
1. [Design HashMap](#1-design-hashmap)
1. [Jewels and Stones](#2-jewels-and-stones)
1. [Longest Substring Without Repeating Characters](#3-longest-substring-without-repeating-characters)
1. [Top K Frequent Elements](#4-top-k-frequent-elements)
1. []()
---


## 1. Design HashMap


### 문제 이해
해시맵이라는 자료구조를 설계하는 것

- 해시맵은 키-값 쌍을 저장하고, 
- 키를 통해 값을 빠르게 찾을 수 있어야 함

### 문제 풀이 방법
- put(key: number, value: number): void: 키와 값을 저장. 이미 존재하는 키라면 업데이트
- get(key: number): number: 키에 대응하는 값을 조회. 만약 키가 존재하지 않는다면 -1을 반환
- remove(key: number): void: 키와 값을 제거

### 문제의 중요한 점


---

## 2. Jewels and Stones

### 문제 이해
S 문자열에서 보석(J에 있는 문자)의 개수를 세어야 함

```ts
J = 'aA', S = 'aAAbbbb'
```

```bash
3
```

### 문제 풀이 방법
1. 보석들을 해시맵에 저장
2. stones 문자열을 순회하며 보석의 개수를 세기

### 문제의 중요한 점


---

## 3. Longest Substring Without Repeating Characters


### 문제 이해

```bash
abcabcbb
```

```bash
3
```

### 문제 풀이 방법

- 슬라이딩 윈도우를 움직이기

### 문제의 중요한 점

---

## 4. Top K Frequent Elements

### 문제 이해

### 문제 풀이 방법

- 입력 배열에서 각 요소의 빈도를 세기
- 요소의 빈도를 기준으로 정렬
- 가장 빈도가 높은 k개의 요소를 반환

### 문제의 중요한 점

---

## 5. 42576


### 문제 이해

### 문제 풀이 방법

### 문제의 중요한 점





