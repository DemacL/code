package command;

public class Main {

    public static void main(String[] args) {

//        // 调用者 传入一个命令对象 用于发出请求--遥控器
//        SimpleRemoteControl simpleRemoteControl = new SimpleRemoteControl();
//
//        // 请求的接收者 灯
//        Light light = new Light();
//
//        // 创建一个命令就接收者传入11111111111111111
//        LightOnCommand lightOnCommand = new LightOnCommand(light);
//
//        // 把命令传给调用者
//        simpleRemoteControl.setCommand(lightOnCommand);
//
//        // 模拟按下的按钮
//        simpleRemoteControl.buttonWasPressed();
//
//        GarageDoor garageDoor = new GarageDoor();
//        GarageDoorOpenCommand garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
//
//        simpleRemoteControl.setCommand(garageDoorOpenCommand);
//        simpleRemoteControl.buttonWasPressed();

        // 遥控器
        RemoteControl remoteControl = new RemoteControl();
        Light light = new Light("Living Room");
        LightOnCommand lightOnCommand = new LightOnCommand(light);
        LightOffCommand lightOffCommand = new LightOffCommand(light);
        remoteControl.setCommand(0, lightOnCommand, lightOffCommand);

        GarageDoor garageDoor = new GarageDoor();
        GarageDoorOpenCommand garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
        GarageDoorCloseCommand garageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);
        remoteControl.setCommand(1, garageDoorOpenCommand, garageDoorCloseCommand);

        Light light1 = new Light("Kitchen");
        LightOnCommand lightOnCommand1 = new LightOnCommand(light1);
        LightOffCommand lightOffCommand1 = new LightOffCommand(light1);
        remoteControl.setCommand(2, lightOnCommand1, lightOffCommand1);

        System.out.println(remoteControl.toString());


        remoteControl.onButtonWasPushed(0);
        remoteControl.undoButtonWasPushed();
        remoteControl.undoButtonWasPushed();
        remoteControl.undoButtonWasPushed();

        remoteControl.offButtonWasPushed(0);

        remoteControl.onButtonWasPushed(1);
        remoteControl.undoButtonWasPushed();
        remoteControl.offButtonWasPushed(1);
        remoteControl.undoButtonWasPushed();

        remoteControl.onButtonWasPushed(2);
        remoteControl.offButtonWasPushed(2);

        remoteControl.onButtonWasPushed(3);
        remoteControl.offButtonWasPushed(3);

    }
}
