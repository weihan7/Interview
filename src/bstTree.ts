class TreeNode {
    public key: number;
    public left!: TreeNode | null;
    public right!: TreeNode | null;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class SearchTree {
    private root: TreeNode | null = null;
    private traversal: number[] = [];

    // 添加节点
    public add(key: number) {
       let newNode = new TreeNode(key);
       if (this.root === null) {
            this.root = newNode;
       } else {
            this.insertNode(this.root, newNode);
       }
       console.log(this.root);
    }

    private insertNode(node: TreeNode | null, newNode: TreeNode) {
        if (node === null) {
            return node;
        }
        //如果新节点值小于当前节点，插入左侧子节点
       if (newNode.key < node.key) {
           if (node.left === null) {
               node.left = newNode;
           } else {
               this.insertNode(node.left, newNode);
           }
       } else {
        //如果新节点值大于当前节点，插入右侧子节点
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
       }
    }

    public hasValue(key: number): boolean {
        return this.searchNode(this.root, key);
    }

    public searchNode(node: TreeNode | null, key: number): boolean {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return this.searchNode(node.left, key)
        } else if (key > node.key) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }


    public print() {
       let arr = this.printTree(this.root);
       let set = new Set(arr);
       let setArr = Array.from(set);
       console.log(setArr);
       setArr.sort((a: number, b: number) => {
            return a-b;
       })
       return setArr;
    }

    public printTree(root: TreeNode | null) {
        if (root === null) {
            return this.traversal;
        }
        if (root.left !== null) {
            this.printTree(root.left);
        } else {
            this.traversal.push(root.key);
        }
        if(root.right !== null) {
            this.printTree(root.right);
        } else {
            this.traversal.push(root.key);
        }
        return this.traversal;
    }

    public remove(key: number) {
       let root = this.removeNode(this.root, key);
       console.log(root);
        
    }
    public removeNode(node: TreeNode | null, key: number) {
        if(node === null) { return null }
        if(key < node.key) {
            node.left = this.removeNode(node.left, key) 
            return node;
        } else if(key > node.key) {
             node.right = this.removeNode(node.right, key) 
             return node;
        } else { 
            // 一个叶节点
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // 只有一个子节点的节点
            if(node.left === null) { 
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }
            // 有两个子节点的节点情况 
            let aux = this.findMinNode(node.right);
            if (aux !== null) {
                node.key = aux.key;
                node.right = this.removeNode(node.right, aux.key);
            }
            return node;
        }
    }
            

    public findMinNode(node: TreeNode | null) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left; 
            } 
            return node
        }
        return null
    }

}



let t = new SearchTree()
t.add(2)
t.add(3)
t.hasValue(2)  // true
t.add(4)
t.add(4)
t.add(3)
t.print()      // 升序输出，[2, 3, 4, 4] 需去重
t.remove(2)