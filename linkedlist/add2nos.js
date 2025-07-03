// Add 2 numbers in LinkedList

// Reason for Reverse Order Storage (1's digit at head):
// 📌 1. Easier to Add Like a Human (From Least Significant Digit)
// When we do addition manually, we start from the right (1’s place), move to 10’s, then 100’s, and so on — because we need to carry over when the sum exceeds 9.

// Storing the 1's digit at the head allows us to simulate this process in forward traversal of the list (which is efficient in singly linked lists).

// 📌 2. Singly Linked Lists Are One-Way (No Backward Traversal)
// In a singly linked list, we can only go forward, not backward.

// If the digits were stored in forward order (i.e., most significant digit first), we'd have to reverse the lists first or use recursion to process them from the end.


// ListNode class definition
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to add two numbers represented by Linked Lists
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}

// Create linked list from array
function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Print linked list
function printLinkedList(head) {
    let current = head;
    let output = "";
    while (current) {
        output += current.val + " -> ";
        current = current.next;
    }
    console.log(output + "null");
}


const l1 = createLinkedList([2, 4, 3]); // represents 342
const l2 = createLinkedList([5, 6, 4]); // represents 465

console.log("Input List 1:");
printLinkedList(l1);
console.log("Input List 2:");
printLinkedList(l2);

const result = addTwoNumbers(l1, l2);

console.log("Sum List:");
printLinkedList(result); // Expected: 7 -> 0 -> 8 -> null (342 + 465 = 807)

