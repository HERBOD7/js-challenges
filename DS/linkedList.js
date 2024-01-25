class Node {
	constructor(element){
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	addFirst(element) {
		const node = new Node(element);
		node.next = head;
		this.head = node;
		this.size++;
	}

	addLast(element){
		if(this.head === null) {
			this.addFirst(element);
		} else {
			const node = new Node(element);
			this.tail.next = node;
			this.tail = node;
			this.size++;
			// let temp = this.head;
			// while(temp.next !== null) {
			// 	temp = temp.next;
			//}
			// temp.next = node;
			// this.size++
		}
	}

	removeFirst(){
		if(this.head === null) {
			return null;
		}
		
		const temp = this.head;
		if(this.head === this.tail) {
			this.head = this.tail = null;
		} else {
			this.head = this.head.next;
		}

		this.size--;
		return temp;
	}

	removeLast() {
		if(this.head === null) {
			return null;
		}

		if(this.head === this.tail) {
			return this.removeFirst();
		}

		let current = this.head;
		let prev = null;
		while(current !== this.tail) {
			prev = current;
			current = current.next;
		}
		prev.next = null;
		this.tail = prev;
		this.size--;
		return current;
	}

	remove(element) {
		if(this.head === null) {
			return null;
		}
		let current = this.head;
		let prev = null;
		while(current !== tail) {
			if(current.next.element === element){
				if(current === this.head) {
					return this.removeFirst();
				} else if (current === this.tail) {
					return this.removeLast();
				}
				this.size--;
				prev.next = current.next;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return null;
	}
}
