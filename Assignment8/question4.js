function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  const tree2str = function(root) {
    if (!root) {
      return "";
    }
  
    const left = tree2str(root.left);
    const right = tree2str(root.right);
  
    if (left === "" && right === "") {
      return `${root.val}`;
    }
  
    if (right === "") {
      return `${root.val}(${left})`;
    }
  
    return `${root.val}(${left})(${right})`;
  };
  
