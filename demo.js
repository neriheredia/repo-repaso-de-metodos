function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

var array = [16, 6, 23, 2, 17, 31, 14, 5];

var generateBST = function (array) {
  var root = array.shift(array[0]);
  return console.log(root);
};

generateBST([16, 6, 23, 2, 17, 31, 14, 5]);
