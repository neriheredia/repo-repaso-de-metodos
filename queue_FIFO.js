// FIFO: First In First Outs
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }
  // ADD
  enqueue(data) {
    this.items[this.end] = data;
    this.end++;
  }
  // DELETE
  dequeue() {
    if (this.front === this.end) {
      return null;
    }
    const data = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return data;
  }
  // SIZE
  getSize() {
    return this.end - this.front;
  }
  // ESPACIO
  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }
  // POSICION
  peek() {
    if (this.getSize() === 0) {
      return null;
    }
    return this.items[this.front];
  }
  // PRINT
  print() {
    if (this.getSize() === 0) {
      return null;
    }
    let result = "";
    for (let i = this.front; i < this.end; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}
const queue = new Queue();
queue.enqueue("Hola");
console.log(queue.print());
console.log(queue);
