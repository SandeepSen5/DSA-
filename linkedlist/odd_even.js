// To rearrange a linked list such that all nodes at odd positions come first,
//  followed by all nodes at even positions, you can implement the Odd-Even Linked List logic.

// input
// 10 → 20 → 30 → 40 → 50

// Output:
// 10 → 30 → 50 → 20 → 40

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" → "));
    }

    oddEvenRearrange() {
        if (!this.head || !this.head.next) return;

        let odd = this.head;
        let even = this.head.next;
        const evenHead = even;

        while (even && even.next) {
            odd.next = even.next;
            odd = odd.next;

            even.next = odd.next;
            even = even.next;
        }

        odd.next = evenHead; // Connect end of odd list to head of even list
    }
}

// 🔁 Test
const list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
// list.addNode(50);

console.log("Original List:");
list.printList();

list.oddEvenRearrange();

console.log("Odd-Even Rearranged List:");
list.printList();














