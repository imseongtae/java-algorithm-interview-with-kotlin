// Design HashMap

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyHashMap {
  private size: number;
  private map: Array<[number, number][]>;
  /** 키를 배열 인덱스로 변환 */
  private hashFunction(key: number): number {
    return key % this.size; // 키를 배열의 크기로 나눈 나머지를 인덱스로 사용
  }

  constructor() {
    this.size = 1000;
    this.map = new Array(this.size).fill(null).map(() => []);
  }

  // 키-값 쌍 저장
  put(key: number, value: number): void {
    const index = this.hashFunction(key); // 키를 해시 함수에 입력하여 인덱스 생성
    const bucket = this.map[index]; // 생성된 인덱스를 사용하여 해당 버킷(체인) 가져오기

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // 이미 존재하는 키라면 값 업데이트
        return;
      }
    }
    bucket.push([key, value]); // 새로운 키-값 쌍을 버킷에 추가
  }

  get(key: number): number {
    const index = this.hashFunction(key);
    const bucket = this.map[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]; // 키가 존재하면 값 반환
      }
    }
    return -1; // 키가 없으면 -1 반환
  }

  remove(key: number): void {
    const index = this.hashFunction(key);
    const bucket = this.map[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // 키-값 쌍 제거
        return;
      }
    }
  }
}
