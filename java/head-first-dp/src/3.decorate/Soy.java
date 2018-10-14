package decorate;

/**
 * 豆浆 具体装饰者
 */
public class Soy extends  CondimentDecorator{

    /**
     * 抽象饮料 引用 1.用一个实例变量记录饮料（被装饰者）
     */
    Beverage beverage;

    /**
     * 2.通过构造函数让被装饰者记录到实例变量中
     * @param beverage
     */
    public  Soy(Beverage beverage){
        this.beverage = beverage;
    }

    /**
     * 利用委托的做法 然后在原来的基础上附加当前的叙述
     * @return
     */
    @Override
    public String getDescription() {
        return beverage.getDescription() + ", Soy";
    }

    /**
     * 当前调料的价钱加上原来被装饰对象 饮料的价钱
     * @return
     */
    @Override
    public double cost() {
        return .15 + beverage.cost();
    }
}
