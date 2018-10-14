package observer_bulitin;

import java.util.Observable;
import java.util.Observer;

public class Observer2 implements Observer, observer.DisplayElement {


    Observable observable;

    private double currentPressure = 29.92;
    private double lastPressure;


    Observer2(Observable o) {
        this.observable = o;
        observable.addObserver(this);
    }

    @Override
    public void update(Observable o, Object arg) {
        if (o instanceof WeatherData) {
            lastPressure = currentPressure;
            currentPressure = ((WeatherData) o).getPressure();
            display();
        }
    }

    @Override
    public void display() {
        System.out.println("Observe2->lastPressure：" + lastPressure + "->currentPressure：" + currentPressure);
    }
}