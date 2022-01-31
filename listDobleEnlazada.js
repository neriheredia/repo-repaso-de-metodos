class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // Agregar desde la cabezera
  addToHead(data) {
    const newNode = new Node(data, this.head, null);
    // Si this.head exists?
    if (this.head) {
      //La referencia al node siguiente que acabamos de crear va a ser la cabezera
      newNode.next = this.head;
      //   El valor anterior a la cabezera es igual a nuevo node
      this.head.prev = newNode;
      //   La cabezera de la lista enlazada ya no va a ser la anterior, si no va a ser el nuevo node que acabamos de crear
      this.head = newNode;
    } else {
      // Si la cabezera no tiene node, entonces el nuevo node que acabamos de crear va a ser la cabezera
      this.head = newNode;
      //   Y la cola hace referencia al nuevo node asi que la cola es igual al nuevo node que creamos
      this.tail = newNode;
    }
    // Incrementamos nuestro contador
    this.size++;
  }
  //   Agregar desde la cola
  addToTail(data) {
    const newNode = new Node(data, null, this.tail);
    if (this.tail) {
      newNode.prev = this.tail;

      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    const newNode = new Node(data, null, null);
    let current = this.head;
    let previous;
    if (index === 0) {
      newNode.next = current;
      current.prev = newNode;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
    }
    this.size++;
  }
  // Remove de la cabezera
  removeFrontHead() {
    if (!this.head) return null;

    const valueToReturn = this.head.data;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return valueToReturn;
  }
  // Remove de la Cola
  removeToTail() {
    if (!this.tail) return null;

    const valueToReturn = this.tail.data;

    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return valueToReturn;
  }

  removeData(data) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.data === data) {
        if (!previous) {
          return this.removeFrontHead();
        } else if (!current.next) {
          return this.removeToTail();
        } else {
          previous.next = current.next;
          current.next.prev = previous;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }

    return null;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }
    return (result += " x ");
  }

  reversePrint() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }
    return (result += " x ");
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addToHead(3);
doubleLinkedList.addToHead(6);
doubleLinkedList.addToHead(9);
doubleLinkedList.addToTail(5);
doubleLinkedList.addToTail(2);
doubleLinkedList.addToTail(10);
doubleLinkedList.insertAt(0, 3);
// console.log(doubleLinkedList.removeFrontHead());
// console.log(doubleLinkedList.removeToTail());
// doubleLinkedList.removeData();
console.log(doubleLinkedList.print());
console.log(doubleLinkedList.reversePrint());
console.log(doubleLinkedList);
