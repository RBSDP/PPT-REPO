
function getSubset(set, index) {
    let allSubsets = [];
    
    if (index < 0) {
        let v = [];
        allSubsets.push(v);
    } else {
        allSubsets = getSubset(set, index - 1);
        let item = set[index];
        let moreSubsets = [];
    
        for (let subset of allSubsets) {
        let newSubset = [];
        for (let it of subset)
            newSubset.push(it);
        newSubset.push(item);
        moreSubsets.push(newSubset);
        }
    
        for (let it of moreSubsets)
        allSubsets.push(it);
    }
    
    return allSubsets;
    }
    
    let set = ["a", "b", "c"];
    let index = set.length - 1;
    let result = getSubset(set, index);
    
    for (let it of result) {
    console.log(" [ " + it.join(",") + " ],");
    }
    