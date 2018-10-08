package factory;

import java.util.ArrayList;

/**
 * 抽象披萨类
 */
public abstract class Pizza {

    // 名称
    String name;

    // 面团类型
    String dough;

    // 酱料类型
    String sause;

    ArrayList toppings = new ArrayList();

    void prepare() {
        System.out.println("Preparing " + name);
        System.out.println("Tossing dough...");
        System.out.println("Adding sause...");
        System.out.println("Adding toppings:");
        for (int i = 0; i < toppings.size(); i++) {
            System.out.println("  " + toppings.get(i));
        }
    }

    void bake() {
        System.out.println("pizza Bake for 25 minutes at 350");
    }

    void cut() {
        System.out.println("pizza Cutting thr pizza into diagonal slices");
    }


    void box() {
        System.out.println("pizza Place pizza in offcial PizzaStore box");
    }

    public String getName() {
        return name;
    }
}
