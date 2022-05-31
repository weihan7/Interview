class LazySingleton {
    // 实例作为静态的私有属性
    private static instance: LazySingleton
    public name!: string

    //懒汉式可能存在线程安全问题
    public static getInstance(name:string):LazySingleton{
        // input your code 
        console.log(name);
        if (!this.instance) {
            this.instance = new LazySingleton();
        }
        return this.instance;
    }
}
class HungrySingleton {
    // 实例作为静态的私有属性
    private static instance: HungrySingleton = new HungrySingleton()
    public name!: string

    //饿汉式开始就创建好，防止线程安全问题，建议使用
    public static  getInstance(): HungrySingleton{
        // input your code 
        return this.instance;
    }
}


let lazy_single = LazySingleton.getInstance('LazySingleton')
console.log(lazy_single.name)

let lazy_single2 = LazySingleton.getInstance('LazySingleton2')
console.log(lazy_single === lazy_single2)

lazy_single.name = 'test'
console.log(lazy_single.name)
console.log(lazy_single2.name)


let hungry_single = HungrySingleton.getInstance()
console.log(hungry_single.name)

// 输出 true
let hungry_single2 = HungrySingleton.getInstance()
console.log(hungry_single === hungry_single2)

hungry_single.name = 'test'
console.log(hungry_single.name)
console.log(hungry_single2.name)
