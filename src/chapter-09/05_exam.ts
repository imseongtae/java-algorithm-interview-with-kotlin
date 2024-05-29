// 232 - Implement Queue using Stacks

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyQueue {
  private inputStack: number[] = [];
  private outputStack: number[] = [];

  constructor() {}

  push(x: number): void {
    this.inputStack.push(x);
  }

  pop(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop()!);
      }
    }
    return this.outputStack.pop()!;
  }

  peek(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop()!);
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }

  empty(): boolean {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}
