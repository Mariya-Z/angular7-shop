export class Order {
  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public phone = '',
    public delivery = false,
    public adress?: string,
  ) {}
}
