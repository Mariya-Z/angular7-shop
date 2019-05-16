export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  ingredients: string[];
  weight?: number;
}
