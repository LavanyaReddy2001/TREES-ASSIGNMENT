class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

var root = null;

function printPreorder(node) {
	if (node == null)
		return;

	document.write(node.key + " ");
    printPreorder(node.left);
    printPreorder(node.right);
}

	
	root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.right = new Node(5);

	console.log("Preorder traversal of binary tree is ");
	printPreorder(root);

