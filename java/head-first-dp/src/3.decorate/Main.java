package decorate;


public class Main {
    public  static  void main(String[] args){



        Espresso espresso = new Espresso();
        System.out.println(espresso.getDescription()+ espresso.cost());

        Mocha espressoWithMocha = new Mocha(espresso);
        System.out.println((espressoWithMocha.getDescription() + espressoWithMocha.cost()));

        Soy espressoWithMochaAndSoy = new Soy(espressoWithMocha);
        System.out.println((espressoWithMochaAndSoy.getDescription() + espressoWithMochaAndSoy.cost()));

        Whip espressoWithMochaAndSoyAndWhip = new Whip(espressoWithMochaAndSoy);
        System.out.println((espressoWithMochaAndSoyAndWhip.getDescription() + espressoWithMochaAndSoyAndWhip.cost()));

    }

}
