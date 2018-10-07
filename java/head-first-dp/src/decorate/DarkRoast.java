package decorate;

/**
 * 焦炒咖啡 深度烘焙
 */
public class DarkRoast  extends Beverage {

    public  DarkRoast(){
        description = "Dark Roast Coffee";
    }

    public double cost(){
        return  0.99;
    }

}