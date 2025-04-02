/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // const length = Math.round(s.length / 2); // 3
  let temp = '';
  for (let i = 0; i < s.length / 2; i++) {
    temp = s[s.length - (i + 1)]; // o, l, l, l, o

    // s[i]; // h, e, l, e, h
    s[s.length - (i + 1)] = s[i]; // 뒤 요소 자리에 앞 요소를 할당
    s[i] = temp; // 앞 요소 자리에 뒤 요소를 할당
  }
}

const s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log('s:', s);

// temp = s[s.length - (i + 1)]; // 0: o, 1: l, 2: l, 3: l, 4: o
// s[i]; // s[0]: h, s[1]: e, s[2]: l, s[3]: e, s[4]: h

// 1. ["h","e","l","l","o"] -> ["o","e","l","l","h"]
// 2. ["o","e","l","l","h"] -> ["o","l","l","e","h"]
// 3. ["o","l","l","e","h"] -> ["o","l","l","e","h"]
// ====== 중간 이후를 계속 순회하면 원래 배열이 됨 ======
// 4. ["o","l","l","e","h"] -> ["o","e","l","l","h"]
// 5. ["o","e","l","l","h"] -> ["h","e","l","l","o"]
