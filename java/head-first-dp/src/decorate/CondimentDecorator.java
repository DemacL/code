package decorate;

/**
 * 所有的调理装饰者都必须重新实现该方法   抽象装饰者
 */
public abstract class CondimentDecorator extends  Beverage{

    public abstract  String getDescription();
}
