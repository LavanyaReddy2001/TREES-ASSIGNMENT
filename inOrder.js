class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

var root = null;
	
function printInorder(node) {
	if (node == null)
		return;
        printInorder(node.left);
	console.log(node.key + " ");
	printInorder(node.right);
}

	
	root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.right = new Node(5);

	console.log("Inorder traversal of binary tree is ");
	printInorder(root);

