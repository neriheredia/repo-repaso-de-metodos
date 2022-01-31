class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //   Agrega un node
    add(data) {
        const newNode = new Node(data, null);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    //   Agrega un valor en cualquier lugar
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    //   Remover 1 elemento
    removeData(data) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }
    //   Remove con un indices
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        let current = this.head;
        let previous = null;

        if (index == 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    // Imprimir
    print() {
        if (!this.size) {
            return null;
        }
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data += " -> ";
            current = current.next;
        }
        result += "null";
        return result;
    }

    //   EMPTY
    isEmpty = function () {
        if (this.size === 0) {
            return true;
        } else {
            return false;
        }
    };

    //   TAMAÑO
    getSize = function () {
        return this.size;
    };
}

const link = new LinkedList();
link.add(12);
// link.add(19);
// link.add(57);
// link.add(99);
// link.add(99);
// link.add(99);
// console.log(link.removeFrom(3));
// console.log(link.removeFrom(0));
// console.log(link.removeFrom(5))
console.log(link.isEmpty());
console.log(link.print());

console.log(link.getSize());
