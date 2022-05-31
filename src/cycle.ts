interface Point {
    x: number,
    y: number
}


// 提示：可穷举、递归

function calculateMinimunCycle(points: Point[]): number {
    if (points.length < 3 || points.length > 8) {
        throw new Error("Invalid input data")
    } else {
        // your code here
    }
}

// 测试数据
// 请把补充代码后的执行输出结果拷贝给我们以验证

let value = 0
const case1: Point[] = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 4}]
value += calculateMinimunCycle(case1)
const case2: Point[] = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 2, y: 1}, {x: 1, y: 2}]
value += calculateMinimunCycle(case2)
const case3: Point[] = [{x :-31, y: 231}, {x :-365, y: 455}, {x :50, y: 463}]
value += calculateMinimunCycle(case3)
const case4: Point[] = [{x :139, y: -364}, {x :315, y: 195}, {x :-217, y: -58}, {x :-1, y: 330}]
value += calculateMinimunCycle(case4)
const case5: Point[] = [{x :-20, y: -110}, {x :309, y: 261}, {x :487, y: 369}, {x :-413, y: -26}, {x :-459, y: 445}]
value += calculateMinimunCycle(case5)
const case6: Point[] = [{x :-437, y: -175}, {x :-45, y: -363}, {x :462, y: 328}, {x :396, y: 338}, {x :173, y: -87}, {x :-259, y: 140}]
value += calculateMinimunCycle(case6)
const case7: Point[] = [{x :-76, y: 225}, {x :-304, y: -359}, {x :195, y: -482}, {x :-390, y: -256}, {x :172, y: 23}, {x :-329, y: -366}, {x :206, y: -408}]
value += calculateMinimunCycle(case7)
const case8: Point[] = [{x :284, y: 398}, {x :-340, y: 104}, {x :-157, y: -302}, {x :-341, y: 30}, {x :365, y: -175}, {x :137, y: 133}, {x :-65, y: -112}, {x :312, y: -477}]
value += calculateMinimunCycle(case8)
const case9: Point[] = [{x :-24, y: -138}, {x :423, y: -14}, {x :-495, y: 373}, {x :301, y: -129}, {x :93, y: 17}, {x :54, y: 302}, {x :15, y: -475}, {x :-105, y: 467}]
value += calculateMinimunCycle(case9)
const case10: Point[] = [{x :-300, y: -118}, {x :-220, y: 247}, {x :213, y: 123}, {x :-348, y: 321}, {x :-257, y: -18}, {x :-108, y: -180}, {x :432, y: 56}, {x :154, y: -460}]
value += calculateMinimunCycle(case10)
const case11: Point[] = [{x :88, y: 283}, {x :173, y: 70}, {x :176, y: 282}, {x :-157, y: -16}, {x :330, y: 156}, {x :-436, y: -143}, {x :298, y: -429}, {x :216, y: -391}]
value += calculateMinimunCycle(case11)
const case12: Point[] = [{x :-38, y: 121}, {x :216, y: 200}, {x :-363, y: 467}, {x :158, y: -293}, {x :-342, y: -225}, {x :77, y: 7}, {x :114, y: -35}, {x :45, y: 212}]
value += calculateMinimunCycle(case12)
const case13: Point[] = [{x :-221, y: 348}, {x :444, y: 479}, {x :403, y: -330}, {x :156, y: 231}, {x :435, y: 331}, {x :12, y: 489}, {x :-90, y: -375}, {x :-359, y: -237}]
value += calculateMinimunCycle(case13)
const case14: Point[] = [{x :54, y: -483}, {x :192, y: 32}, {x :311, y: -160}, {x :-67, y: -287}, {x :309, y: -106}, {x :200, y: 365}, {x :-310, y: 371}, {x :-465, y: -3}]
value += calculateMinimunCycle(case14)
const case15: Point[] = [{x :184, y: -398}, {x :-227, y: -473}, {x :-180, y: 171}, {x :289, y: -219}, {x :444, y: 275}, {x :181, y: -423}, {x :377, y: 6}, {x :462, y: 327}]
value += calculateMinimunCycle(case15)
const case16: Point[] = [{x :-493, y: -34}, {x :331, y: 431}, {x :-324, y: -361}, {x :-450, y: 291}, {x :373, y: 39}, {x :75, y: -96}, {x :39, y: -129}, {x :76, y: 142}]
value += calculateMinimunCycle(case16)
const case17: Point[] = [{x :-376, y: 81}, {x :279, y: 265}, {x :160, y: 309}, {x :376, y: 28}, {x :-15, y: -28}, {x :439, y: 256}, {x :337, y: 380}, {x :-92, y: 72}]
value += calculateMinimunCycle(case17)
const case18: Point[] = [{x :-319, y: 390}, {x :480, y: 357}, {x :255, y: 199}, {x :-401, y: 209}, {x :-390, y: -341}, {x :364, y: 58}, {x :-67, y: -333}, {x :144, y: -183}]
value += calculateMinimunCycle(case18)
const case19: Point[] = [{x :8, y: 441}, {x :-2, y: -480}, {x :160, y: 367}, {x :-288, y: 420}, {x :212, y: -282}, {x :-107, y: -196}, {x :421, y: 69}, {x :305, y: 284}]
value += calculateMinimunCycle(case19)

// 请把补充代码后的执行输出结果拷贝给我们以验证
console.log(value)
