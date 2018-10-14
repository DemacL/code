package command;

public class Light {

    private String lightName;

    public Light(String lightName) {
        this.lightName = lightName;
    }

    public void On() {
        System.out.println(lightName + " Light On...");
    }

    public void Off() {
        System.out.println(lightName + " Light Off...");
    }
}
