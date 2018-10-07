package observer_bulitin;


import java.util.Random;

public class Main {
    public static void main(String[] args) {


        WeatherData wd = new WeatherData();
        Observer1 o1 = new Observer1(wd);
        Observer2 o2 = new Observer2(wd);

        for (int i = 0; i < 10; i++) {
            double temperature = new Random().nextInt(100);
            double humidity = new Random().nextInt(100);
            double pressure = new Random().nextInt(100);
            wd.setMeasurements(temperature, humidity, pressure);
        }

    }
}
