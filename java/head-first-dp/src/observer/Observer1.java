package observer;

public class Observer1 implements Observer {

    @Override
    public void update(double temp, double humidity, double pressure) {
        System.out.println("Observe1->" + temp + "->" + humidity + "->" + pressure);
    }
}
