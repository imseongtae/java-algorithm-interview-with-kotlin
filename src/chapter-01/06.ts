function longestPalindrome(s: string): number {
  const map: Record<string, number> = {};
  let palindromeLength: number = 0;
  let hasOdd: boolean = false;

  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  for (const count of Object.values(map)) {
    palindromeLength += Math.floor(count / 2) * 2;
    if (count % 2 === 1) {
      hasOdd = true;
    }
  }

  return hasOdd ? palindromeLength + 1 : palindromeLength;
}

// const s = 'babad';
// Output: "bab"

// const s = 'cbbd';
// Output: "bb"

const s = 'abccccdd';
// Output: 7

console.log('longestPalindrome(s):', longestPalindrome(s));
