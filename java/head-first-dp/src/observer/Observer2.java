package observer;

public class Observer2 implements Observer , DisplayElement {


    private double temperature;
    private double humidity ;
    private double pressure ;

    Observer2(WeatherData wd){
        wd.registerObserver(this);
    }

    @Override
    public void update(double temperature, double humidity, double pressure) {

        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }


    @Override
    public void display() {
        System.out.println("Observe2->" + this.temperature + "->" + this.humidity + "->" + this.pressure);
    }
}
