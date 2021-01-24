/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryOver=0
    let listNode = new ListNode()
    while(l1!=null||l2!=null)
    {
        listNode.val=(l1.val+l2.val+carryOver)%10
        carryOver=l1.val+l2.val+carryOver-(l1.val+l2.val+carryOver)%10
        l1=l1.next 
        l2=l2.next
        listNode=listNode.next
    }
    return listNode
};
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
console.log(addTwoNumbers({val:1,next:null},{val:1,next:null}))