
class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}

	function insert(value) {
		if(value <= this.data) {
			if(this.left == null) {
				this.left = new Node(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if(this.right == null) {
				this.right = new Node(value);
			} else {
				this.right.insert(value);
			}
		}
	}

	function contains(value) {
		if(value == this.data) {
			return true;
		} else if (value < this.data){
			if(this.left == null) {
				return false;
			} else {
				return this.left.contains(value);
			}
		} else {
			if(this.right == null) {
				return false;
			} else {
				return right.contains(value);
			}
		}
	}
}
