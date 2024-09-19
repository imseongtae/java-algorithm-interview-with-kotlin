# Chapter-12

그래프(Graph)는 **노드(Node)**와 **간선(Edge)**로 이루어진 자료구조로, 여러 객체 간의 관계를 나타내는 데 유용합니다. 흔히 쓰이는 예로는 소셜 네트워크, 지도에서 경로 찾기, 웹 페이지 간의 링크 구조 등이 있습니다.

## Table of contents
1. [그래프의 등장 배경](#그래프의-등장-배경)
1. [그래프 순회]()

---

## 그래프의 등장 배경

### 20세기 수학 분야의 가장 놀라운 사건
20세기 수학 분야에서 일어난 가장 놀라운 사건으로 위상수학의 출현을 들 수 있음
위상수학이란 연속변환에 대해 불변인 기하학적 객체의 특성을 연구하는 수학의 한 분야

위상수학은 다른 수학 분야의 기초를 이루며 자연과학과 이론 물리학, 전자공학 등에 상당한 영향을 끼치고 있음

> 위상수학(位相數學, 영어: topology)은 연속적인 변환에 대해 불변인 성질들을 다루는 수학의 한 분야이다. 더 정확하게, 쌍연속 함수에 대해 불변인 성질을 다룬다. 이러한 성질들에는 연결성, 콤팩트성, 분리성, 호모토피 군, 호몰로지 군 등이 있다.

### 재미난 놀이 - 쾨니히스베르크의 다리 문제
위상수학의 등장에 큰 기여를 한 것은 18세기의 한 재미난 놀이이다.

지금으로부터 300여 년 전 프로이센 공국의 쾨니히스베르크에는 프레겔강이 흐르고 있었다. 프레겔강에는 2개의 큰 섬이 있었고, 섬과 도시를 잇는 7개의 다리가 놓여있었다.

어느 날 도시 시민 한 명이 "7개의 다리를 한 번씩만 건너서 모두 지나갈 수 있을까?"라는 문제를 냈다.
쉽게 풀릴 것 같은 문제를 풀 수 있는 이는 아무도 없었다

### 그래프 이론의 시작
'수학의 모차트르'라 불리는 레온하르트 오일러가 '쾨니히스베르크의 다리' 문제를 조사했는데, 이 문제가 도형 문제처럼 보이지만 당시까지 알려진 기하학으로는 풀 수 없고, 미지의 영역에 해법이 있음을 천재적인 직관으로 간파했다. 

위상수학의 출현을 이끈 그래프 이론은 이렇게 시작됐다.

![img](https://t1.daumcdn.net/cfile/tistory/2165353754929F9704)

### 그래서 그래프란?
위키백과에 따르면 그래프란 수학에서, 좀 더 구체적으로 말하자면 그래프 이론에서, 객체의 일부 쌍(Pair)들이 '연관되어' 있는 객체 집합 구조를 말한다. 


### 오일러 경로
모든 간선을 한 번씩 방문하는 유한 그래프를 오릴러 경로라고 일컬으며, 다른 말로 '한붓그리기'라고 한다. 글자 그대로 한 번도 붓을 떼지 않고 모든 간선을 한 번씩 그릴 수 있는지를 의미한다.

1. 모든 꼭짓점에 연결된 변의 개수가 짝수인 경우
2. 두 개의 꼭짓점에 연결된 변수의 개수가 홀수인 경우

### 쾨니히스베르크의 다리 문제 풀이
쾨니히스베르크의 다리 문제는 한붓그리기가 가능한지 확인하기 위해 꼭짓점에 연결된 변의 개수를 세어보면 모든 정점이 짝수 개의 차수를 갖지 않으므로 오일려 경로가 아니다

- A: 3개
- B: 5개
- C: 3개
- D: 3개

---

## 그래프 순회
그래프 순회란 그래프 탐색이라고도 하며, 그래프의 각 정점을 방문하는 과정을 말한다.
이 방문 과정에는 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS) 이렇게 2가지 알고리즘이 있다.

### DFS
DFS는 미로 찾기 풀이를 위한 전략을 찾다가 고안한 것으로 알려져 있는데, DFS는 주로 스택으로 구현하거나 재귀로 구현하며, 이후 살펴볼 백트래킹을 통해 뛰어난 효용을 보인다.

### BFS
BFS는 주로 큐로 구현하며, 그래프의 최단 경로를 구하는 문제 등에 사용한다.

```java
// 순회를 위한 그래프
Map <Integer, List<Integer>> graph = new HashMap<>();

graph.put(1, Arrays.asList(2, 3, 4));
graph.put(2, Arrays.asList(5));
graph.put(3, Arrays.asList(5));
graph.put(4, Arrays.asList());
graph.put(5, Arrays.asList(6, 7));
graph.put(6, Arrays.asList());
graph.put(7, Arrays.asList(3));
```

---

### 백트래킹
백트래킹은 해결책에 대한 후보를 구축해 나가다 가능성이 없다고 판단되는 즉시 후보를 포기해 정답을 찾아가는 범용적인 알고리즘으로 제약 충족 문제 등에 유용하다.

- 백트래킹은 탐색을 하다가 더 갈 수 없으면 왔던 길을 되돌아가 다른 길을 찾는다는 데서 유래
- DFS와 같은 방식으로 탐색하는 모든 방법을 뜻하며, 알고리즘마다 DFS 변형이 조금씩 일어나지만 기본적으로 DFS 범주에 속함
- 운이 좋으면 시행착오를 덜 거치고 목적지에 도달하지만, 최악의 경우에 모든 경우를 다 거침

---


## Reference
- [위상수학 - 위키백과](https://ko.wikipedia.org/wiki/%EC%9C%84%EC%83%81%EC%88%98%ED%95%99)
- [쾨니히스베르크의 다리와 일필휘지(一筆揮之)](https://www.mathpark.com/312)
- [수학이 건네는 위로 15화 - 첫사랑에게 닿을 수 있을까?](https://brunch.co.kr/@stigma7942/211)