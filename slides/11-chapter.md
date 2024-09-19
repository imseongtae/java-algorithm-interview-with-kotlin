---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---


# **Chapter-11**

## 2. Jewels and Stones

---

## 문제 이해
S 문자열에서 보석(J에 있는 문자)의 개수를 세어야 함

```ts
J = 'aA', S = 'aAAbbbb'
```

```bash
3
```

---


## 문제 풀이 방법
1. 보석들을 해시맵에 저장
2. stones 문자열을 순회하며 보석의 개수를 세기

---

### Step 1: 해시맵 초기화:

```ts
const jewelsMap: { [key: string]: boolean } = {};
```

---

### Step 2: jewels 문자열의 각 문자를 해시맵에 추가:

```ts
for (let jewel of jewels) {
  jewelsMap[jewel] = true;
}
```

---

### Step 3: stones 문자열을 순회하며 보석의 개수를 셈:
앞쪽과 뒤쪽에 요소를 삽입하는 메서드를 구현

```ts
let count = 0;  // 보석의 개수를 저장할 변수

for (let stone of stones) {
  if (jewelsMap[stone]) {
    count++;  // 보석이면 개수를 증가시킨다.
  }
}
```

---

```bash
# 예시: S = "aAAbbbb"일 때
'a' -> jewelsMap에 있음, count = 1
'A' -> jewelsMap에 있음, count = 2
'A' -> jewelsMap에 있음, count = 3
'b' -> jewelsMap에 없음, count = 3
'b' -> jewelsMap에 없음, count = 3
'b' -> jewelsMap에 없음, count = 3
'b' -> jewelsMap에 없음, count = 3
```

---


## 5. 완주하지 못한 선수
마라톤을 완주하지 못한 단 한 명의 선수 찾기

## 문제 이해
2개의 배열이 주어짐

- 마라톤에 참가한 선수들의 이름이 담긴 배열 **participant**
- 완주한 선수들의 이름이 담긴 배열 **completion**이 주어짐
- **completion**의 길이는 **participant**의 길이보다 1 작음
- 참가자 중에는 동명이인이 있을 수 있음

---

## 문제 풀이 방법
참가자와 완주자의 이름을 비교하여 남는 한 명의 이름을 찾기

1. 해시 맵 생성
1. 참가자 배열을 순회하며 해시 맵에 추가
1. 완주자 배열을 순회하며 해시 맵에서 값 감소
1. 값이 0보다 큰 키를 찾아 반환

---

## Step 1: 해시 맵 생성

```js
const participantMap = new Map();
for (const person of participant) {
  participantMap.set(person, (participantMap.get(person) || 0) + 1);
}
```

---

## Step 2: 참가자 배열을 순회하며 해시 맵에 추가

```js
// 모든 참가자를 해시 맵에 추가
for (const person of participant) {
  // 참가자 이름을 키로, 횟수를 값으로 저장합니다.
  participantMap.set(person, (participantMap.get(person) || 0) + 1);
  // 만약 참가자가 해시 맵에 없으면, 0을 반환하고, 있으면 해당 값에 1을 더함
}
```

---

```bash
# 예시:
첫 번째 순회 - person: "mike", participantMap: {"mike" => 1}
두 번째 순회 - person: "john", participantMap: {"mike" => 1, "john" => 1}
세 번째 순회 - person: "anna", participantMap: {"mike" => 1, "john" => 1, "anna" => 1}
```

---

## Step 3: 완주자 배열을 순회하며 해시 맵에서 값 감소

```js
for (const person of completion) {
  if (participantMap.has(person)) {
    participantMap.set(person, participantMap.get(person) - 1);
  }
}
```

---

```bash
# 예시
첫 번째 순회 - person: "john", participantMap: {"mike" => 1, "john" => 0, "anna" => 1}
두 번째 순회 - person: "anna", participantMap: {"mike" => 1, "john" => 0, "anna" => 0}
```

---

## Step 4: 값이 0보다 큰 키를 찾아 반환

```js
for (const [key, value] of participantMap) {
  if (value > 0) {
    return key; // key: "mike", value: 1 -> "mike" 반환
  }
}
```



