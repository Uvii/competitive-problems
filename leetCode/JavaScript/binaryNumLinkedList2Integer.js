/**
 * leet code problem No : 1290. Convert Binary Number in a Linked List to Integer
 * Concept              : Linked List
 * Problem Statement    : https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 */

/**
 * Following getDecimalValue method is only the one going to be used as a solution in leetcode all the other declarations are initializations are inbuilt
 * 
 */

function getDecimalValue(head) {
    let result = 0;
    while (head) {
        result = result * 2 + head.val;
        head = head.next;
    }
    return result;
};

/**
 * In detail solution for the above problem statement as follows
 */

class binaryLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append (value) {
        let node = {val: value, next: null};

        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        if (!this.head) {
            this.head = node;
        }
    }

    getDecimalValue () {
        let result = 0;
        let newNode = this.head;
        while (newNode) {
            result = 2 * result + newNode.val;
            newNode = newNode.next;
        }
        return result;
    }
}

let list = new binaryLinkedList()

// Creating linked list with the inputs given, consider [1,0,1] is the input for this problem statement 
list.append(1)
list.append(0)
list.append(1)

// This would result you the decimal value for the input passed
console.log(list.getDecimalValue())

/**
 * If you want to list all the elements in an array then use the following method in the above binaryLinkedList method 
 */

// toArray () {
//     let elements = [];
//     let newNode = this.head;
//     while (newNode) {
//         elements.push(newNode);
//         newNode = newNode.next;
//     }
//     return elements;
// }
// console.log(list.toArray())
