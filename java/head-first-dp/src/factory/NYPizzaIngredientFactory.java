package factory;

/**
 * 具体创建原料的工厂类
 */
public class NYPizzaIngredientFactory implements  PizzaIngredientFactory {
    @Override
    public Cheese createCheese() {
        return new MarinaraCheese();
    }
}
