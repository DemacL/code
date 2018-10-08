package factory;

/**
 * 创建者类 Creator
 * 抽象创建者类 --PizzaStore
 * 定义一个抽象的工厂方法----createPizza
 * 让子类实现此方法制造对象
 * 工厂方法让类把示例化推迟到子类
 */
public abstract class PizzaStore {

//    SimplePizzaFactory simplePizzaFactory;

//    public PizzaStore(SimplePizzaFactory simplePizzaFactory) {
//        this.simplePizzaFactory = simplePizzaFactory;
//    }


    public Pizza orderPizza(String type) {
        Pizza pizza;
//        pizza =simplePizzaFactory.createPizza(type);
        pizza = createPizza(type);

        return pizza;
    }


    /**
     * 工厂方法  子类实现用于处理具体对象的生成
     * 工厂方法必须返回一个具体的产品对象。超类中定义的方法通常使用到工厂方法的返回值
     * @param type
     * @return
     */
    abstract Pizza createPizza(String type);


}
