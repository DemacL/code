package command;

public class RemoteControl {

    int COMMAND_NUM = 4;

    Command[] onCommands;
    Command[] offCommands;
    Command lastCommand;


    public RemoteControl() {
        onCommands = new Command[COMMAND_NUM];
        offCommands = new Command[COMMAND_NUM];



        Command noCommand = new NoCommand();
        lastCommand = noCommand;
        for (int i = 0; i < COMMAND_NUM; i++) {
            onCommands[i] = noCommand;
            offCommands[i] = noCommand;
        }
    }

    public void setCommand(int slot, Command onCommand, Command offCommand) {
        onCommands[slot] = onCommand;
        offCommands[slot] = offCommand;
    }

    public void onButtonWasPushed(int slot) {
        onCommands[slot].execute();
        lastCommand =  onCommands[slot];
    }

    public void offButtonWasPushed(int slot) {
        offCommands[slot].execute();
        lastCommand =  offCommands[slot];
    }

    public void undoButtonWasPushed() {
        lastCommand.undo();
    }


    public String toString() {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("\n-----Remote Control-----\n");
        for (int i = 0; i < onCommands.length; i++) {
            stringBuffer.append("[slot" + i + "] " + onCommands[i].getClass().getName()
                    + "   " + offCommands[i].getClass().getName() + "\n");
        }
        return stringBuffer.toString();

    }
}
