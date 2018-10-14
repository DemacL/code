package observer_bulitin;

import java.util.Observable;
import java.util.Observer;

public class Observer1 implements Observer, observer.DisplayElement {


    Observable observable;

    private  double temperature;
    private  double humidity;
    private  double pressure;



    Observer1(Observable o){
        this.observable = o;
        observable.addObserver(this);
    }

    @Override
    public void update(Observable o, Object arg) {
        if(o instanceof  WeatherData){
            WeatherData wd = (WeatherData)o;
            this.temperature  = wd.getTemperature();
            this.humidity = wd.getHumidity();
            this.pressure = wd.getPressure();
            display();
        }
    }

    @Override
    public void display() {
        System.out.println("Observe1->temperature:" + this.temperature + "->humidity:" + this.humidity + "->pressure:" + this.pressure);
    }
}
