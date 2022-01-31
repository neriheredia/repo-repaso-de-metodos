class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(data) {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node();
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
}

const BST = new BinarySearchTree();

BST.insert(16)
BST.insert(15)
BST.insert(12)
BST.insert(9)
BST.insert(6)
BST.insert(20)
BST.insert(12)
BST.insert(3)

console.log(BST);
