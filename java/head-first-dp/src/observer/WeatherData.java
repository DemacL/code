package observer;

import java.util.ArrayList;
import java.util.Random;

public class WeatherData implements Subject {

    private ArrayList<Observer> observers;

    private double temprature;

    private double humidity;

    private double pressure;

    public WeatherData() {
        this.observers = new ArrayList();
    }

    public void registerObserver(Observer o) {
        this.observers.add(o);
    }

    public void removeObserve(Observer o) {
        int index = this.observers.indexOf(o);
        this.observers.remove(index);
    }

    public void notifyObservers() {
        this.temprature = new Random().nextInt(100);
        this.humidity = new Random().nextInt(100);
        this.pressure = new Random().nextInt(100);
        for (int i = 0; i < this.observers.size(); i++) {
            Observer observer = this.observers.get(i);
            observer.update(this.temprature, this.humidity, this.pressure);
        }
    }


}
