function isPalindrome(s: string): boolean {
  const sanitizedStr = s.replace(/[^a-z0-9]/gi, '');
  const lowerAlphanumericStr = sanitizedStr.toLocaleLowerCase();

  const mirrorStr = lowerAlphanumericStr.split('').reverse().join('');

  return lowerAlphanumericStr === mirrorStr;
}

const str = 'A man, a plan, a canal: Panama';

console.log('isPalindrome:', isPalindrome(str));
