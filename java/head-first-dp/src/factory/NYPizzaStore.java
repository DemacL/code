package factory;

/**
 * 具体创建者类
 */
public class NYPizzaStore extends PizzaStore {


//    public NYPizzaStore(SimplePizzaFactory simplePizzaFactory) {
//        super(simplePizzaFactory);
//    }

//    @Override
//    Pizza createPizza(String type) {
//
//        Pizza pizza = null;
//
//        if (type.equals("cheese")) {
//            pizza = new NYStyleCheesePizza();
//        } else if (type.equals("pepperoni")) {
//            pizza = new PepperoniPizza();
//        } else if (type.equals("clam")) {
//            pizza = new ClamPizza();
//        }else if (type.equals("veggie")) {
//            pizza = new VeggiePizza();
//        }
//        return  pizza;
//    }

    @Override
    Pizza createPizza(String type) {

        Pizza pizza = null;
        PizzaIngredientFactory pizzaIngredientFactory =
                new NYPizzaIngredientFactory();

        if (type.equals("cheese")) {
//            pizza = new NYStyleCheesePizza();
            pizza = new CheesePizza(pizzaIngredientFactory);
        } else if (type.equals("pepperoni")) {
            pizza = new PepperoniPizza();
        } else if (type.equals("clam")) {
            pizza = new ClamPizza();
        } else if (type.equals("veggie")) {
            pizza = new VeggiePizza();
        }
        return pizza;
    }
}
