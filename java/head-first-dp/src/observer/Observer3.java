package observer;

public class Observer3 implements Observer {

    @Override
    public void update(double temp, double humidity, double pressure) {
        System.out.println("Observe3->" + temp + "->" + humidity + "->" + pressure);
    }
}
