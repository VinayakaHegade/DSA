// Queue - Sequential collection of elements that follow FIFO
// Enter from rear/tail leave from front/head
// It is an abstract data type. It is defined by its behavior rather than being a mathematical model.
// Two main operations Enqueue and Deque
// Enqueue - adds at end of the collection
// Deque - remove first element from front and return it.

// Usage , when u have to process in an orderly fashion
// Callback queue in JS runtime
// CPU task scheduling
// Printers

// peek() - To get the element of the queue without removing it
// size() - To get length, i.e, no. ofl elements
// isEmpty - to check if it is empty
// print() - to visualise all elements

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elm) {
    this.items.push(elm);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
