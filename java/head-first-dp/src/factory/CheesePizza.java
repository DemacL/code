package factory;

public class CheesePizza extends Pizza {

    /**
     * 生产披萨的原料工厂类
     */
    PizzaIngredientFactory pizzaIngredientFactory;

    public CheesePizza(PizzaIngredientFactory pizzaIngredientFactory) {
        this.pizzaIngredientFactory = pizzaIngredientFactory;
    }

    @Override
    void prepare() {

        cheese = this.pizzaIngredientFactory.createCheese();// 从具体的工厂获取对应的原料

    }
}
