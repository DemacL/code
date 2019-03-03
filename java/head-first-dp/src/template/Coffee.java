package template;

/**
 * 模板方法模式
 * 咖啡类
 */
public class Coffee {

    void prepareRecipe(){
        boilWater();
        brewCoffeeGrinds();
        pourInCup();
        addSugarAndMilk();
    }


    public void boilWater(){
        System.out.println("Boiling water 把水煮沸");
    }

    public  void brewCoffeeGrinds(){
        System.out.println("Driping Coffee througn filter 冲泡咖啡");
    }

    public  void pourInCup(){
        System.out.println("Pouring into cup");
    }

    public void addSugarAndMilk(){
        System.out.println("Adding Sugar and milk.");
    }
}
