package adapter;

/**
 * 适配器模式：讲一个类的接口转换成客户期望的另一个接口
 * 适配器让原本接口不兼容的类可以合作无间
 */
public class Main {
    public static void main(String[] args) {

        Turkey turkey = new WildTurkey();
        Duck duck = new MallardDuck();

        TurkeyAdapter turkeyAdapter = new TurkeyAdapter(turkey);
        DuckAdapter duckAdapter = new DuckAdapter(duck);
        // Duck duck = new TurkeyAdapter(turkey);


        testTurkey(duckAdapter);
        testTurkey(turkey);
        testDuck(turkeyAdapter);
        testDuck(duck);
    }

    public static void testDuck(Duck duck) {
        duck.fly();
        duck.quack();
    }

    public static void testTurkey(Turkey turkey) {
        turkey.fly();
        turkey.gobble();
    }

}
