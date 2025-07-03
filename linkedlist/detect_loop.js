// To detect a loop (cycle) in a singly linked list, the most efficient method is Floyd’s Cycle Detection Algorithm, also known as the Tortoise and Hare algorithm.

// ✅ Approach: Floyd's Algorithm (Slow and Fast Pointer)
// Time Complexity: O(n)
// Space Complexity: O(1)

// 🔁 Idea:
// Use two pointers:

// slow moves one step at a time.

// fast moves two steps at a time.

// If there is a cycle, they will eventually meet.

// If there’s no cycle, fast will reach the end (null).



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
        return newNode; // Return the new node (useful for cycle creation)
    }

    hasCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true; // Cycle detected
            }
        }

        return false; // No cycle
    }
}



const list = new LinkedList();
const node1 = list.addNode(1);
const node2 = list.addNode(2);
const node3 = list.addNode(3);
const node4 = list.addNode(4);

// Creating a cycle: node4.next points back to node2
node4.next = node2;

console.log("Cycle detected:", list.hasCycle()); // Output: true


//  Output:

// Cycle detected: true