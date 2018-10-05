package observer;

public class Observer2 implements Observer {

    @Override
    public void update(double temp, double humidity, double pressure) {
        System.out.println("Observe2->" + temp + "->" + humidity + "->" + pressure);
    }
}
