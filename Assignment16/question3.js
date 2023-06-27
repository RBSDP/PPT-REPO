
function deleteMid(st)
{
	let n = st.length;
	let tempSt=[];
	let count = 0;
	
	
	while (count < (n / 2)-1) {
		let c = st[0];
		st.shift();
		tempSt.unshift(c);
		count++;
	}
	
	
	st.shift();
	
	
	while (tempSt.length!=0) {
		st.unshift(tempSt[0]);
		tempSt.shift();
	}
}

