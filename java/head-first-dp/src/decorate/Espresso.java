package decorate;

/**
 * 浓缩咖啡继承饮料
 */
public class Espresso extends Beverage {

    public  Espresso(){
        description = "Espresso";
    }

    public double cost(){
        return  1.99;
    }

}
