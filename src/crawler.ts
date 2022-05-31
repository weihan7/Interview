// import http from "http"         // 提示：可选依赖库
import axios from "axios"      // 提示：可选依赖库

function getUrl(i: number): string {
    let prefix: String = "http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/"
    let suffix: String = ".txt"
    return prefix.toString() + i.toString() + suffix.toString()
}

async function getNum() {
    let numArr = [];
    for (let i = 1; i < 11; i++) {
        let url = getUrl(i);
        const result = await axios.get(url);
        if (result.data && result.status === 200) {
            numArr.push(result.data.match(/\d+/g));
        } else {
          new Error(result.data.msg);
        } 
    }
    console.log(numArr);
    let newArr = flatten(numArr);
    console.log(newArr);
    let result = newArr.reduce((x, y) => {
        return x + y
    })
    console.log(result);
    return result;
}

function flatten(array: number[]) {
    return array.toString().split(',').map((item)=>{
        return Number(item);
    })
}
getNum()

// function regexpFromat(str: string): RegExpMatchArray | null {
//  // input your code 
// }

// function syncExecute(): void {
//     // input your code 
// }

// async function asyncExecute(): Promise<number | string> {
//    // input your code 

// }

// async function main(): Promise<number | string> {
//     await asyncExecute()
//     await console.log("------------------")
//     await console.log("------------------")
//     await syncExecute()
// }

// main()



