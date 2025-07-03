// Sort a LinkedList of 0's, 1's and 2's

// Time & Space Complexity:
// Time: O(n) – two passes

// Space: O(1) – in-place (no extra nodes)
// ✅ Space Complexity: O(1)
// Why?
// You are only using a fixed-size count array: let count = [0, 0, 0];

// This array holds the count of 0s, 1s, and 2s — its size is constant, regardless of the input size.

// No additional data structures (like arrays or other linked lists) are used based on the input size.

// So, auxiliary space used is constant → O(1)


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
       
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Function to sort the list of 0s, 1s and 2s
  sortList() {
    let count = [0, 0, 0]; // count[0] = 0s, count[1] = 1s, count[2] = 2s

    let current = this.head;

    // First pass to count
    while (current) {
      count[current.data]++;
      current = current.next;
    }

    current = this.head;
    let i = 0;

    // Second pass to overwrite data based on count
    while (current) {
      if (count[i] === 0) {
        i++;
      } else {
        current.data = i;
        count[i]--;
        current = current.next;
      }
    }
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(0);
list.addNode(1);
list.addNode(2);
list.addNode(0);

console.log("Before sorting:");
list.printList();

list.sortList();

console.log("After sorting:");
list.printList();
