// To find the intersection point of two singly linked lists (Y-shaped), we need to identify the node at which the two lists converge (i.e., share the same reference, not just the same value).

// ✅ Efficient Approach: Two Pointer Technique
// Time Complexity: O(m + n)
// Space Complexity: O(1) (no extra space)

// 🔁 Idea:
// Use two pointers a and b starting at the heads of the two lists.

// Traverse both lists. When a pointer reaches the end, redirect it to the head of the other list.

// If there's an intersection, the pointers will meet at the intersecting node.

// If there's no intersection, both will eventually be null.

// 📌 Why this works?
// Both pointers traverse the same total distance: m + n (length of both lists).

// It compensates for length differences between the two lists.


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a; // or b, both are same at intersection
}


// Shared nodes
let common = new Node(8);
common.next = new Node(10);

// List A: 3 -> 7 -> 8 -> 10
let headA = new Node(3);
headA.next = new Node(7);
headA.next.next = common;

// List B: 99 -> 1 -> 8 -> 10
let headB = new Node(99);
headB.next = new Node(1);
headB.next.next = common;

// Find intersection
let intersection = getIntersectionNode(headA, headB);
if (intersection) {
  console.log("Intersection at node with data:", intersection.data);
} else {
  console.log("No intersection");
}



// ✅ Output:
// sql
// Copy
// Edit
// Intersection at node with data: 8

