package template;

public class Tea {

    void prepareRecipe(){
        boilWater();
        steepTeaBag();
        addLemon();
        pourInCup();
    }


    public void boilWater(){
        System.out.println("Boiling water 把水煮沸");
    }

    public  void steepTeaBag(){
        System.out.println("Driping Coffee througn filter 冲泡咖啡");
    }

    public  void addLemon(){
        System.out.println("Adding Lemon");
    }

    public void pourInCup(){
        System.out.println("Pouring into cup.");
    }
}