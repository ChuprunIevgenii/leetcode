/**
 * 707. Design Linked List
 * 
 * Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
 * A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
 * If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
 * 
 * Implement the MyLinkedList class:
 * MyLinkedList() Initializes the MyLinkedList object.
 * int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
 * void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * void addAtTail(int val) Append a node of value val as the last element of the linked list.
 * void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
 * void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 * 
 * 
 * Example 1:
 * Input
 * ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
 * 
 * [[], [1], [3], [1, 2], [1], [1], [1]]
 * 
 * Output
 * [null, null, null, null, 2, null, 3]
 * Explanation
 * MyLinkedList myLinkedList = new MyLinkedList();
 * myLinkedList.addAtHead(1);
 * myLinkedList.addAtTail(3);
 * myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
 * myLinkedList.get(1);              // return 2
 * myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
 * myLinkedList.get(1);              // return 3
 */

class Node {
    constructor(val, next, prev) {
        this.val = val;
        this.next = next || null;
        this.prev = prev || null;
    }
}


class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    get(index) {
        let node = this._find(index);
        return node && node.val;
    }

    addAtHead(value) {
        let newNode =  new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    addAtTail(value) {
        let newNode =  new Node(value);

        if(!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    addAtIndex(index, value) {
        if(index > this.size || index < 0) return;

        if(index === 0) {
            this.addAtHead(value);
            return;
        }

        if(index === this.size) {
            this.addAtTail(value);
            return;
        }
       
        let newNode =  new Node(value);
        let node = this._find(index);
        
        newNode.prev = node.prev;
        newNode.next = node;

        node.prev.next = newNode;
        node.prev = newNode;

        this.size++;

    }

    deleteAtIndex(index) {
        if(index < 0 || index >= this.size) return;
        else if(index === 0 && this.size === 1) {
            this.head = null;
            this.tail = null;
        } else if(index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if(index === this.size -1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let node = this._find(index);

            node.next.prev = node.prev;
            node.prev.next = node.next;
        
        }

        this.size--;
    }
    _find(index) {
        if(index < 0 || index >= this.size) {
            return null;
        }

        let result = this.head;

        for(let i = 0; i < this.size; i++) {
            
            if(i === index) return result;
            else result = result.next;
        }
    }
}