class TreeNode {
    // input your code
}

class SearchTree {
    private root!: TreeNode | null;
    private traversal: number[] = [];

    // 添加节点
    public add(key: number) {
       // input your code
    }

    private insertNode(node: TreeNode, newNode: TreeNode) {
       // input your code
    }

    public hasValue(value: number): boolean {
        // input your code
        return true
    }

    public print() {
        // input your code
    }
    public remove(value: number) {
        // input your code
    }

}

let t = new SearchTree()
t.add(2)
t.hasValue(2)  // true
t.add(4)
t.add(4)
t.add(3)
t.print()      // 升序输出，[2, 3, 4, 4]
t.remove(2)