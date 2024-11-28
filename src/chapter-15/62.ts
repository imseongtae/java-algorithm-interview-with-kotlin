// TrieNode 클래스: 각 노드는 Map 구조를 사용하여 자식을 저장합니다.
class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = new Map(); // 자식 노드들을 저장할 맵
    this.isEnd = false; // 단어의 끝 여부
  }
}

// Trie 클래스: 문자열 저장 및 검색을 위한 트라이 구조
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode(); // 루트 노드 초기화
  }

  // 문자열 삽입 메서드
  insert(word: string): void {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        // 현재 문자의 노드가 없으면 새로 생성
        currentNode.children.set(char, new TrieNode());
      }
      // 다음 노드로 이동
      currentNode = currentNode.children.get(char)!;
    }
    // 단어의 끝 표시
    currentNode.isEnd = true;
  }

  // 문자열 검색 메서드
  search(word: string): boolean {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        // 문자가 없으면 단어가 없는 것
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    // 마지막 노드가 단어의 끝인지 확인
    return currentNode.isEnd;
  }

  // prefix 검색 메서드
  startsWith(prefix: string): boolean {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    // prefix를 모두 찾았으면 true
    return true;
  }
}

// 테스트 코드
function runTrieTests() {
  const trie = new Trie();

  console.log('=== Test: insert() ===');
  trie.insert('apple');
  trie.insert('app');
  trie.insert('banana');

  console.log("Inserted 'apple', 'app', and 'banana' into the trie.\n");

  console.log('=== Test: search() ===');
  console.log(trie.search('apple')); // true, 'apple' is inserted
  console.log(trie.search('app')); // true, 'app' is inserted
  console.log(trie.search('appl')); // false, 'appl' is not a complete word
  console.log(trie.search('banana')); // true, 'banana' is inserted
  console.log(trie.search('bananas')); // false, 'bananas' is not inserted

  console.log('\n=== Test: startsWith() ===');
  console.log(trie.startsWith('app')); // true, 'apple' and 'app' start with 'app'
  console.log(trie.startsWith('ban')); // true, 'banana' starts with 'ban'
  console.log(trie.startsWith('bana')); // true, 'banana' starts with 'bana'
  console.log(trie.startsWith('xyz')); // false, no word starts with 'xyz'
}

// 테스트 실행
runTrieTests();
