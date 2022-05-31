function quickSort(arr: number[], start: number, end: number): number[] {
    if (end - start < 1) {
        return arr;
    }
    const target = arr[start];
    let l = start;
    let r = end;
    while (l < r) {
        while (l < r && arr[r] >= target) {
        r--;
        }
        arr[l] = arr[r];
        while (l < r && arr[l] < target) {
        l++;
        }
        arr[r] = arr[l];
    }
    arr[l] = target;
    quickSort(arr, start, l - 1);
    quickSort(arr, l + 1, end);
    return arr
}

function generateCases(length: number, step: number = 1): number[] {
    const a: number[] = []
    let value = 0
    for (let i = 0; i < length; i++) {
        a.push(value)
        value += step
    }
    let tmp: number
    for (let i = 0; i < length; i++) {
        const f = Math.random() * (length - i)
        const r = i + Math.floor(f)
        tmp = a[r]
        a[r] = a[i]
        a[i] = tmp
    }
    return a
}

function checkRes(arr: number[], step: number): boolean {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + step !== arr[i+1]) return false
    }
    return true
}


function testQuickSort() {
    for (let i = 6; i <= 100000; i = i * 2) {
        const randomStep = Math.ceil(Math.random() * 10)
        const arr = generateCases(i, randomStep)
        const start = Date.now()
        const ret = quickSort(arr, 0 ,arr.length - 1)
        const end = Date.now()
        console.log(`Quick sort for ${i} numbers costs ${end - start}ms`)
        if (!checkRes(ret, randomStep)){
            console.log(`Fail`)
            return false
        } else {
            console.log("Passed")
        }
    }
    return true
}

testQuickSort()
//quickSort([ 60, 66, 90, 30, 96, 42, 6, 84, 0, 24, 18, 54, 48, 78, 102, 36, 72, 12 ])
