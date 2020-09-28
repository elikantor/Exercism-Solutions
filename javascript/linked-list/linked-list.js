function Node(val=0, next=null, previous=null) {
  this.val = val,
  this.next = next, 
  this.previous = previous
}



export class LinkedList {
  constructor(head=null, tail=null, size=0) {
    this.head = head,
    this.tail = tail,
    this.size = size
  }
  push(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = node
      this.size = 1
    } else {
      let prevTail = this.tail
      prevTail.next = node
      node.previous = prevTail
      this.tail = node
      this.size++
    }
  }

  pop() {
    let node = this.tail
    if(this.size === 1) {
      this.tail = null
      this.head = null
    } else {
      this.tail = node.previous
      node.previous = null
    }
    this.size--
    return node.val
  }

  shift() {
    let node = this.head
    if(this.size ===1) {
      this.head = null
      this.tail = null
    } else {
      this.head = node.next
      node.next = null
    }
    this.size--
    return node.val
  }

  unshift(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = node
      this.size++
    } else {
      this.head.previous = node 
      node.next = this.head 
      this.head = node
      this.size++
    }
  }

  delete(val) {
    let node = this.traverse(val)
    if(!node) return
    if(this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      if(node.previous && node.next) {
        let prevNode = node.previous
        let nextNode = node.next
        prevNode.next = nextNode
        nextNode.previous = prevNode
        node.next = null
        node.previous = null
      } else if (!node.previous) {
        this.head = node.next
        node.next = null
        this.head.previous = null
      } else {
        this.tail = node.previous
        node.previous = null
        this.tail.next = null
      }
    }
    this.size--
    return node.val
  }

  count() {
    return this.size
  }

  traverse(val) {
    let node = this.head
    while(node){
      if(node.val === val) return node
      else node = node.next
    }
    return undefined
  }
}
