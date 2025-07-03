// Remove Nth Node from the end of the LinkedList

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

    function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0); // dummy node to handle edge cases like removing head
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Skip the Nth node from end
    slow.next = slow.next.next;

    return dummy.next;
    }

// Helper to print linked list
function printList(head) {
  let current = head;
  let result = "";
  while (current) {
    result += current.val + " -> ";
    current = current.next;
  }
  console.log(result + "null");
}

// Example Usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

const updatedHead = removeNthFromEnd(head, 2);

console.log("After Removing 2nd Node From End:");
printList(updatedHead);
