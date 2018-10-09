package factory;

/**
 * 创建各种原料的抽象工厂类   抽象工厂模式
 */
public interface PizzaIngredientFactory {

    /**
     * 创建奶酪原料
     * @return
     */
    public  Cheese createCheese();
}
