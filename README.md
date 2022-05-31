# Test Problems

### 笔试规则：
- 使用typescript语法完成，不得使用javascript兼容写法
- 开卷，时间不应超过一个工作日
- 建议将代码新建一个remote repo关联，并提交到 master 分支
- 推荐使用commit和markdown 记录和分享笔试过程的思考

1. 所有题目使用typescript 4.0以上版本来编写代码，不能采用javascript兼容模式

    提示：

    ```sh
    npm install # 下载依赖，依赖定义在package.json
    ./node_modules/.bin/ts-node src/singleton.ts # 运行ts文件
    ```

2. 提交格式：在代码文件中编写完成函数或代码

## 1. 请用2种方式实现单例模式(singleton.ts)
lazy / hungry
## 2. 编写 quicksort (quickSort.ts)
参见QuickSort.ts文件，确保代码能在1000毫秒内通过测试

## 3. 实现一个二叉树，以及插入、查询、删除操作的定义 (bstTree.ts)
```javascript
class Tree {
// implement your code
}

let t = new Tree()
t.add(2)
t.hasValue(2)  // true
t.add(4)
t.add(4)
t.add(3)
t.print()      // 升序输出，[2, 3, 4], 要求去重
t.remove(2)    // [3, 4]
```

## 4. 从多个网页爬取内容，然后进行解析（crawler.ts)

有10个网页，1.txt 到 10.txt

http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/1.txt

```xml
<abc> <def>data : 1992; name : agent 1 </def></abc>
```

0. 格式有可能有区别
1. 用 promise, async, await 分别实现并发、串行爬取
2. 网页下载使用nodejs的http即可
3. 使用正则表达式获取data后面的字段，将10个文件的data值全部获取，并相加

## 5.最短环路算法 (cycle.ts)
```
欧几里得平面坐标系XoY上有n个点（3<=n<=8),把他们连成一个环，要求这个环的边长之和是所有连接成环的方式中最短的，输出这个最短值

例如：
n=4
点1:（0, 1）
点2: (1, 0)
点3:（1, 1)
点4:（0，0）
那么 1-3-2-4-1 这种方式连成正方形是最优的解，答案为1+1+1+1=4

请把题目测试数据的答案输出给我们以验证

```

[node官方文档](https://nodejs.org/en/)

[typescript文档](https://www.tslang.cn/)

建议使用**visual studio code**进行编写。
