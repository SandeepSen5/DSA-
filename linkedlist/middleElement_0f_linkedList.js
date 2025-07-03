// To find the middle element of a singly linked list, the most efficient approach is the slow and fast pointer technique.

// ✅ Approach: Slow and Fast Pointer
// Time Complexity: O(n)
// Space Complexity: O(1)

// 🔁 Idea:
// Use two pointers:

// slow moves one step at a time.

// fast moves two steps at a time.

// When fast reaches the end, slow will be at the middle.


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

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow ? slow.data : null;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}


const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

list.printList(); // 1 -> 2 -> 3 -> 4 -> 5 -> null

console.log("Middle element:", list.findMiddle()); // Output: 3


// ✅ Output:
// rust
// Copy
// Edit
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// Middle element: 3