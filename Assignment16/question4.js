
	
	let q = [];
	
	
	function checkSorted(n)
	{
		let st = [];
		let expected = 1;
		let fnt;
	
		
		while (q.length != 0)
		{
			fnt = q[0];
			q.shift();
	
			// if front element is
			// the expected element
			if (fnt == expected)
				expected++;
	
			else
			{
				// if stack is empty,
				// push the element
				if (st.length == 0)
				{
					st.push(fnt);
				}
	
				// if top element is less than
				// element which need to be
				// pushed, then return false.
				else if (st.length != 0 &&
						st[st.length - 1] < fnt)
				{
					return false;
				}
	
				// else push into the stack.
				else
					st.push(fnt);
			}
	
			// while expected element are
			// coming from stack, pop them out.
			while (st.length != 0 &&
				st[st.length - 1] == expected)
			{
				st.pop();
				expected++;
			}
		}
		
		// if the final expected element
		// value is equal to initial Queue
		// size and the stack is empty.
		if ((expected - 1) == n && st.length == 0)
			return true;
	
		return false;
    }
