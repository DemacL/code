package observer;

public interface Subject {

    public void registerObserver(Observer o);

    public  void removeObserve(Observer o);

    public  void notifyObservers();
}
