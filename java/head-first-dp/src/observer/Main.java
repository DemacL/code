package observer;

public class Main {

    public  static  void main(String[] args){
        Observer1 o1 = new Observer1();
        Observer2 o2 = new Observer2();
        Observer3 o3 = new Observer3();

        WeatherData wd = new WeatherData();
        wd.registerObserver(o1);
        wd.registerObserver(o2);
        wd.registerObserver(o3);


        wd.notifyObservers();
    }
}
