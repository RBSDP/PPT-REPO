function findDifference(nums1, nums2) {
  
    let set1 = new Set(nums1),
            set2 = new Set(nums2);
    
        let a = [],
            b = [];
        for (let e of set1) if (!set2.has(e)) a.push(e);
        for (let e of set2) if (!set1.has(e)) b.push(e);
    
        return [a, b];
    }