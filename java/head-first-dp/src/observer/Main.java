package observer;

public class Main {

    public  static  void main(String[] args){


        WeatherData wd = new WeatherData();
        Observer1 o1 = new Observer1(wd);
        Observer2 o2 = new Observer2(wd);
        Observer3 o3 = new Observer3(wd);
//        wd.registerObserver(o1);
//        wd.registerObserver(o2);
//        wd.registerObserver(o3);


        wd.notifyObservers();
    }
}
