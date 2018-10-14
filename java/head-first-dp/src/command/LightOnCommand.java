package command;

/**
 * 2.实现一个打开电灯的的命令
 */
public class LightOnCommand implements Command {

    Light light;// 接收者 负责接受请求

    public LightOnCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        this.light.On();
    }

    @Override
    public void undo() {
        this.light.Off();
    }
}
