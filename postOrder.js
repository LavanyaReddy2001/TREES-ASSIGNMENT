class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

var root = null;
	
function printPostorder(node) {
	if (node == null)
		return;
	printPostorder(node.left);
    printPostorder(node.right);
	console.log(node.key + " ");
}

	
	root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.right = new Node(5);

	console.log("Postorder traversal of binary tree is ");
	printPostorder(root);

