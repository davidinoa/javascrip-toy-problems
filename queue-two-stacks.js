class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }

      if (this.outStack.length === 0) {
        throw new Error('cannot dequeue from an empty queue');
      }
    }
    return this.outStack.pop();
  }
}
