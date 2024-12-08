export interface ProductType {
  id: string;
  name: string;
  legend: string;
  currentPrice: number;
  oldPrice: number;
  img: string;
  altImg: string;
  discount: number;
  mainDescription: string;
  addDescription: string[];
}
