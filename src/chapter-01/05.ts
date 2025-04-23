function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 0) {
    return [['']];
  }

  const result: string[][] = [];
  const map: { [key: string]: string[] } = {};

  /**
   * 1. 빈 해시맵 map을 만든다. (key: 정렬된 문자열, value: 애너그램 그룹 배열)
     2. 입력 배열 strs를 순회하면서
        a. 각 문자열을 정렬해서 key로 만든다
        b. 이 key가 map에 없다면 빈 배열로 초기화
        c. 현재 문자열을 해당 key의 배열에 추가
      3. map의 모든 value들을 배열로 반환한다
   */

  for (let i = 0; i < strs.length; i++) {
    const key: string = strs[i].split('').sort().join('');

    if (!map[key]) {
      map[key] = [strs[i]];
    } else {
      const str: string = strs[i];
      map[key].push(str);
    }
    // || 연산자 방식 (논리합)
    // map[key] = map[key] || [];
    // map[key].push(strs[i]);

    // 삼항 연산자 방식
    // map[key] ? map[key].push(strs[i]) : (map[key] = [strs[i]]);
  }

  for (const key in map) {
    result.push(map[key]);
  }

  return result;
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// const output = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

console.log('groupAnagrams():', groupAnagrams(strs));
