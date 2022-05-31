import http from "http"         // 提示：可选依赖库
import axios from "axios"       // 提示：可选依赖库

function getUrl(i: number): string {
    let prefix: String = "http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/"
    let suffix: String = ".txt"
    return prefix.toString() + i.toString() + suffix.toString()
}

function getNum(url: string): Promise<void> {
    // input your code 
}

function regexpFromat(str: string): RegExpMatchArray | null {
 // input your code 
}

function syncExecute(): void {
    // input your code 

}

async function asyncExecute(): Promise<number | string> {
   // input your code 

}

async function main(): Promise<number | string> {
    await asyncExecute()
    await console.log("------------------")
    await console.log("------------------")
    await syncExecute()
}

main()



