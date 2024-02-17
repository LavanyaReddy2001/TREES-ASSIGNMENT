class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}
	
	let v;
	
	function getNode(data)
	{
		let newNode = new Node(data);
		return newNode;
	}

	function countSubtreesWithSumX(root, x)
	{
		if (root == null)
			return 0;
        let ls = countSubtreesWithSumX(root.left, x);
		let rs = countSubtreesWithSumX(root.right, x);
		let sum = ls + rs + root.data;

		if (sum == x)
			v++;
		return sum;
	}

	function countSubtreesWithSumXUtil(root, x)
	{
		if (root == null)
			return 0;
            v = 0;
		let ls = countSubtreesWithSumX(root.left, x);
        let rs = countSubtreesWithSumX(root.right, x);

		if ((ls + rs + root.data) == x)
			v++;
		return v;
	}
	
	let root = getNode(5);
	root.left = getNode(-10);
	root.right = getNode(3);
	root.left.left = getNode(9);
	root.left.right = getNode(8);
	root.right.left = getNode(-4);
	root.right.right = getNode(7);

let x = 7;

document.write("Count = " +
countSubtreesWithSumXUtil(root, x));

