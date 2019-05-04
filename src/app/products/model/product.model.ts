export class ProductModel {
  constructor(
    public id: number = null,
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public isAvailable: boolean = true,
    public ingredients: string = '',
    public weight?: number,
  ) {
    this.weight = weight || 0;
  }
}
