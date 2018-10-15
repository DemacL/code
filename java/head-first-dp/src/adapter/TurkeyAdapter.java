package adapter;

/**
 * 适配器类 将火鸡适配鸭子
 */
public class TurkeyAdapter implements  Duck {

    Turkey turkey;

    public  TurkeyAdapter(Turkey turkey){
        this.turkey = turkey;
    }

    @Override
    public void quack() {
        this.turkey.gobble();
    }

    @Override
    public void fly() {
        this.turkey.fly();
    }
}
