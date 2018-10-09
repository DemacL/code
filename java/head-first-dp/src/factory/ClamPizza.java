package factory;

public class ClamPizza extends  Pizza {


    @Override
    void prepare() {
        this.cheese = new MarinaraCheese();
    }
}
