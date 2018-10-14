package command;

/**
 * 1.实现命令接口
 */
public interface Command {

    public void execute();

    public void undo();
}
