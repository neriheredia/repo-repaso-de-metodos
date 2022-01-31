class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    }
    // ADD
    push(data) {
        this.top++;
        this.items[this.top] = data;
    }
    // REMOVE
    pop() {
        let deletedData;

        if (this.top) {
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }
    }
    // SIZE
    getSize() {
        return this.top;
    }
    // ESPACIO
    isEmpty() {
        if (!this.getSize()) {
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return null;
        }
        return this.items[this.top];
    }

    print() {
        let result = "";
        for (let i = this.top; i > 0; i--) {
            result += this.items[i] + " ";
        }
    }
}

const stack = new Stack();

stack.push("Plato #1");
// stack.push("Plato #2");
// stack.push("Plato #3");
console.log(stack.pop());
console.log(stack.print());
// console.log(stack);
