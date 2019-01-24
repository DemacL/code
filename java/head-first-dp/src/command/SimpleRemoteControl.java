package command;

/**
 * 使用命令对象
 */
public class SimpleRemoteControl {

    Command slot; //  一个插槽命令的引用

    public SimpleRemoteControl() {


    }

    // 设置当前命令可以命令的具体行为 可以改变多次调用
    public void setCommand(Command command) {
        slot = command;
    }

    /**
     * 执行插槽关联的命令
     */
    public void buttonWasPressed() {
        slot.execute();
    }


}
