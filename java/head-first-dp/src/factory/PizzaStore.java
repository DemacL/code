package factory;

public abstract class PizzaStore {

//    SimplePizzaFactory simplePizzaFactory;

//    public PizzaStore(SimplePizzaFactory simplePizzaFactory) {
//        this.simplePizzaFactory = simplePizzaFactory;
//    }


    public Pizza orderPizza(String type) {
        Pizza pizza;
//        pizza =simplePizzaFactory.createPizza(type);
        pizza = createPizza(type);
        pizza.prepare();

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
