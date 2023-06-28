
	function mergeArrays(a , b , n , m)
	{

		
		var mp = new Map();

		
		for (i = 0; i < n; i++) {
			mp.set(a[i], true);
		}
		for (i = 0; i < m; i++) {
			mp.set(b[i], true);
		}
		var a = [];
	
		for ( me of mp.keys()) {
			a.push(me);
		}
		a.sort();
		for ( me of a) {
			document.write(me + " ");
		}
	}

