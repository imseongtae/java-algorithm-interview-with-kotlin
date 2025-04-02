function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap: { [key: string]: number } = {};
  const tMap: { [key: string]: number } = {};

  // s 문자열에 대한 Map 만들기
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (sMap[char]) {
      sMap[char]++;
    } else {
      sMap[char] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (tMap[char]) {
      tMap[char]++;
    } else {
      tMap[char] = 1;
    }
  }

  console.log('sMap:', sMap);
  console.log('tMap:', tMap);

  console.log('=========== 키맵 값 비교 ===========');

  console.log('Object.keys(sMap):', Object.keys(sMap));
  const sMapKeys = Object.keys(sMap);

  console.log('🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖');

  for (const key of sMapKeys) {
    if (sMap[key] !== tMap[key]) {
      console.log(
        'sMap[key] === tMap[key]:',
        `${sMap[key]} === ${tMap[key]} is ${sMap[key] === tMap[key]}`,
      );
      return false;
    }
  }

  return true;
}

// const s = 'anagram';
// const t = 'nagaram';
const s = 'rat';
const t = 'car';

console.log('isAnagram(s, t):', isAnagram(s, t));
