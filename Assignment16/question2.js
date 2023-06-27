
		let tmpStack = [];
		while (input.length > 0)
		{
			
			let tmp = input.pop();

			
			while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] < tmp)
			{
				
				input.push(tmpStack[tmpStack.length - 1]);
				tmpStack.pop()
			}

			
			tmpStack.push(tmp);
		}
		return tmpStack;

