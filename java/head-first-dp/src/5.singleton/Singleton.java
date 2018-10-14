package singleton;

public class Singleton {

    private static Singleton uniqueSingleton;

    private String name = "lizc";

    private Singleton() {
    }


    public static Singleton getInstnce() {
        if (Singleton.uniqueSingleton == null) {
            Singleton.uniqueSingleton = new Singleton();
        }

        return Singleton.uniqueSingleton;
    }

    public String getName() {
        return name;
    }
}
