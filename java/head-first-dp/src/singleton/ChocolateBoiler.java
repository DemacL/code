package singleton;

/**
 * 巧克力过了  单例
 * 确保一个类只有一个实例 并提供一个全局访问点 getInstance
 * 此为对象单例
 * 也可以是类单例 方法和变量都声明为静态的 不过初始化控制权掌握在Java手上
 * 有时候由于初始化次序等问题有可能有微妙的bug
 * tips:类加载器引发的问题
 */
public class ChocolateBoiler {

    /**
     * 是否是空的
     */
    private boolean empty;

    /**
     * 是否 煮沸
     */
    private boolean boiled;

    //    public ChocolateBoiler(){
//        empty = true;
//        boiled = false;
//    }

    // 保存唯一的实例引用
//    private  static ChocolateBoiler uniqueInstance = new ChocolateBoiler(); // 1.立即实例化 也可以保证线程安全

    private volatile static ChocolateBoiler uniqueInstance; // 3.代码块同步  保证线程安全


    /**
     * 单例构造函数私有 不允许外部new实例化
     */
    private ChocolateBoiler() {
        empty = true;
        boiled = false;
    }

    /**
     * 暴露给外部的获取唯一实例引用的接口
     * 存在 多线程实例多个对象的情况 需要保证线程同步 同步会降低性能
     * 问题 :而且只有第一次执行此方法时候 才真正需要同步  同步引起的性能下降大概为100倍
     * 一旦唯一实例不为null 多线程情况下也不会实例对个对象的情况出现
     *
     * @return
     */
    public static synchronized ChocolateBoiler getInstance() {// 2.synchronized 保证线程同步 存在以上问题
//        if(uniqueInstance == null){
//            uniqueInstance = new ChocolateBoiler();//  1.延迟实例化 存在多线程问题
//        }

        if (uniqueInstance == null) {
            synchronized (Singleton.class) { //3.代码块同步
                if (uniqueInstance == null) {
                    uniqueInstance = new ChocolateBoiler();
                }
            }
        }


        return uniqueInstance;

    }


    public void fill() {
        if (isEmpty()) {
            empty = false;
            boiled = false;
            System.out.println("fill");
        }

    }

    public void boil() {
        if (!isEmpty() && !isBoiled()) {
            boiled = true;
            System.out.println("boil");
        }

    }

    public void drain() {
        if (!isEmpty() && isBoiled()) {
            empty = true;
            System.out.println("drain");
        }

    }


    public boolean isEmpty() {
        return empty;
    }

    public boolean isBoiled() {
        return boiled;
    }
}
