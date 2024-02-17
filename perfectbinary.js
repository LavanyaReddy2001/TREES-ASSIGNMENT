
	function sumNodes(l)
	{
		let leafNodeCount = Math.pow(2, l - 1);
		let vec = [];
       
        for (let i = 1; i <= l; i++)
		{
			vec.push([]);
		}

		for (let i = 1; i <= leafNodeCount; i++)
		{
			vec[l - 1].push(i);
		}

		for (let i = l - 2; i >= 0; i--)
		{
			let k = 0;
			while (k < vec[i + 1].length - 1)
			{
				vec[i].push(vec[i + 1][k] + vec[i + 1][k + 1]);
				k += 2;
			}
		}

		let sum = 0;
		for (let i = 0; i < l; i++)
		{
			for (let j = 0; j < vec[i].length; j++)
			{
				sum += vec[i][j];
			}
		}

		return sum;
	}
	
let l = 3;
document.write(sumNodes(l));
