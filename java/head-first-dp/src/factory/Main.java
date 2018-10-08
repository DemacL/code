package factory;

public class Main {
    public static void main(String[] args) {

        //  具体的披萨店示例
        PizzaStore nyPizzaStore = new NYPizzaStore();

        //生成披萨示例
        Pizza pizza = nyPizzaStore.orderPizza("cheese");

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

    }
}
