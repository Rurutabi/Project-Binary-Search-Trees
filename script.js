// Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    this.arr = this.mergeSort(arr, 0, arr.length - 1);
    this.root = this.buildTree(arr);
  }

  mergeSort(arr, first, last) {
    if (first < last) {
      let mid = Math.trunc((first + last) / 2);
      let tempArr = [];
      this.mergeSort(arr, first, mid);
      this.mergeSort(arr, mid + 1, last);
      this.merge(arr, tempArr, first, mid, last);
    }

    const mergeUnique = [...new Set(arr)];

    return mergeUnique;
  }

  merge(arr, tempArr, first, mid, last) {
    let i = first;
    let j = mid + 1;
    let k = first;

    while (i <= mid && j <= last) {
      if (arr[i] <= arr[j]) {
        tempArr[k] = arr[i];
        i++;
      } else {
        tempArr[k] = arr[j];
        j++;
      }
      k++;
    }

    if (i > mid) {
      while (j <= last) {
        tempArr[k] = arr[j];
        j++;
        k++;
      }
    } else {
      while (i <= mid) {
        tempArr[k] = arr[i];
        i++;
        k++;
      }
    }

    for (let s = first; s <= last; s++) {
      arr[s] = tempArr[s];
    }
  }

  buildTree(arr) {
    let start = 0;
    let end = arr.length - 1;

    if (start > end) return null;

    let mid = Math.trunc((start + end) / 2);

    let root = new Node(arr[mid]);

    // root.left = this.buildTree(arr);

    return 'will come back on this method';
  }
}

let sortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const firstTree = new Tree(sortedArray);

// firstTree.mergeSort(sortedArray, 0, sortedArray.length - 1);

console.log(firstTree);
