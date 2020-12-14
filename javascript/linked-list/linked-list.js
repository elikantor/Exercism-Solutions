class Node{
  constructor(val=0, next=null, previous=null) {
    this.val = val
    this.next = next 
    this.previous = previous
  }
}

export class LinkedList {
  constructor(head=null, tail=null, size=0) {
    this.head = head
    this.tail = tail
    this.size = size
  }

  push(val) {
    return this.add(val, 'tail')
  }

  unshift(val) {
    return this.add(val, 'head')
  }

  pop() {
    return this.delete(this.tail.val)
  }

  shift() {
    return this.delete(this.head.val)
  }

  add(val, position) {
    const node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = node
    } else if (position === 'tail') {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    } else {
      this.head.previous = node 
      node.next = this.head 
      this.head = node
    }
    this.size++
  }

  delete(val) {
    let node = this.find(val)
    if(!node) { 
      return 
    } else if (this.size === 1) {
      this.head = null
      this.tail = null
    } else if (node === this.head) {
      this.head = node.next
      node.next = null
      this.head.previous = null
    } else if (node === this.tail) {
      this.tail = node.previous
      node.previous = null
      this.tail.next = null
    } else {
      let prevNode = node.previous
      let nextNode = node.next
      prevNode.next = nextNode
      nextNode.previous = prevNode
      node.next = null
      node.previous = null
    }
    this.size--
    return node.val
  }

  count() {
    return this.size
  }

  find(val) {
    let node = this.head
    while(node){
      if(node.val === val) return node
      else node = node.next
    }
  }
}
