export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category:
    | 'Saree'
    | 'Shirt'
    | 'Kids'
    | 'Fabric'
    | 'Jeans'
    | 'T-Shirt'
    | 'Kurti'
    | 'Lehenga'
    | 'Pants'
    | 'Accessories'
    | 'Shoes'
    | 'Winter Wear'
    | 'Shorts'
    | 'Other';
  colors?: string[];
  sizes?: string[];
  description?: string;
  inStock?: boolean;
}
