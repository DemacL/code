package singleton;

public class Main {

    public static void main(String[] args) {

//        Singleton s1 = Singleton.getInstnce();
//        Singleton s2 = Singleton.getInstnce();

//        System.out.println(s1 == s2);
//        System.out.println(s1.getName());
//        System.out.println(s2.getName());


        ChocolateBoiler chocolateBoiler = ChocolateBoiler.getInstance();
        chocolateBoiler.boil();
        chocolateBoiler.drain();
        chocolateBoiler.fill();
        chocolateBoiler.boil();
        chocolateBoiler.drain();
    }
}
