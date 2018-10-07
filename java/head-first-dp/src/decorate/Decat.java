package decorate;

/**
 * 低咖啡因
 */
public class Decat extends Beverage {

    public  Decat(){
        description = "Decat Coffee";
    }

    public double cost(){
        return  1.05;
    }

}