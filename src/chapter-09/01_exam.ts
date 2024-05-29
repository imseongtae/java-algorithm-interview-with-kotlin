// 20 - Valid Parentheses

class Stack {
  private data: (string | number)[];
  constructor() {
    this.data = [];
  }

  push(value: string | number) {
    const length = this.data.length;
    this.data[length] = value;
  }

  pop() {
    const length = this.data.length;
    const result = this.data[length - 1];
    delete this.data[length - 1];
    this.data.length = this.data.length - 1;
    return result;
  }

  length() {
    return this.data.length;
  }

  print() {
    console.log(this.data);
  }
}

function isValid(s: string): boolean {
  const stack = new Stack();
  const map: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      const value = stack.pop();

      if (value !== map[char]) {
        return false;
      }
    }
  }

  return stack.length() === 0;
}

console.log(isValid('()[]{}'));
