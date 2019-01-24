package command;

public class NoCommand implements Command {
    @Override
    public void execute() {
        System.out.println("该按钮暂时不做任何事情");
    }

    @Override
    public void undo() {
        System.out.println("该按钮暂时不做任何事情");
    }
}
