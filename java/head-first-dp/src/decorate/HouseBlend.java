package decorate;

/**
 * 首选咖啡 综合咖啡 具体组件
 */
public class HouseBlend extends Beverage {

    public  HouseBlend(){
        description = "House Blend Coffee";
    }

    public double cost(){
        return  0.89;
    }

}