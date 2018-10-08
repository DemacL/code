package factory;

public class ChicagoStyleCheesePizza extends  Pizza {

    public  ChicagoStyleCheesePizza(){
        name ="Chicago Style Deep Dish Cheese Pizza";
        dough = "Extra Thick Crust Dough";
        sause = "Plum Tomato Sause";
        toppings.add("Shredded Mozzarella Cheese");

    }

    void cut(){
        System.out.println("Cutting the pizza into square slices");
    }
}
