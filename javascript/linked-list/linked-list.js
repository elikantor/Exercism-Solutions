class Node{
  constructor(val=0, next=null, previous=null) {
    this.val = val,
    this.next = next, 
    this.previous = previous
  }
}

export class LinkedList {
  constructor(head=null, tail=null, size=0) {
    this.head = head,
    this.tail = tail,
    this.size = size
  }

  push(val) {
    this.add(val, 'back')
  }

  unshift(val) {
    this.add(val, "front")
  }

  pop() {
    this.remove('back')
  }

  shift() {
    this.remove()
  }

  remove(direction) {
    if(this.size === 1) {
      this.head = null
      this.tail = null
    } else if (direction === 'back') {
      this.tail = node.previous
      node.previous = null
    } else {
      this.head = node.next
      node.next = null
    }
    this.size--
  }

  add(val, direction) {
    const node = new Node(val)
    if(!this.head) {
      this.head = node
      this.tail = node
    } else if (direction === 'back') {
      let prevTail = this.tail
      prevTail.next = node
      node.previous = prevTail
      this.tail = node
    } else {
      this.head.previous = node 
      node.next = this.head 
      this.head = node
    }
    this.size++
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
