/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function getIntersectionNodeHashMap(headA, headB) {
    
    let set = new Set();
    
    while(headA) {
        set.add(headA);
        headA = headA.next;
    }

    while(headB) {
        if(set.has(headB)) return headB;

        headB = headB.next;
    }

};

function getIntersectionNode(headA, headB) {
    let p1 = headA;
    let p2 = headB;

    while(p1 !== p2) {
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }

    return p1;

};