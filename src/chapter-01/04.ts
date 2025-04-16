function mostCommonWord(paragraph: string, banned: string[]): string {
  if (paragraph.length === 1) {
    return paragraph[0];
  }

  const lowerParagraph = paragraph.toLowerCase().split(/\W+/).join(' ');
  const bannedRegex = new RegExp(`\\b(${banned.join('|')})\\b`, 'gi');
  const sanitizedParagraph = lowerParagraph.replace(bannedRegex, '');

  console.log('lowerParagraph:', lowerParagraph);
  console.log('sanitizedParagraph:', sanitizedParagraph);

  const words = sanitizedParagraph.split(' ').filter(Boolean);
  const temp: { [key: string]: number } = {};

  for (const word of words) {
    if (temp[word]) {
      temp[word]++;
    } else {
      temp[word] = 1;
    }
  }

  console.log('temp:', temp);

  let count = 0;
  let result = '';

  for (const elem in temp) {
    if (temp[elem] > count) {
      count = temp[elem];
      result = elem;
    }
  }

  return result;
}

const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];

console.log('mostCommonWord:', mostCommonWord(paragraph, banned));
