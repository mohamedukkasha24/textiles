import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Saree',
    price: 2500,
    images: ['/assets/img/saree1.jpg'],
    category: 'Saree',
    colors: ['Red', 'Green', 'Blue'],
    sizes: [],
    description: 'Elegant silk saree with rich embroidery for festive occasions.',
    inStock: true
  },
  {
    id: '2',
    name: 'Cotton Shirt',
    price: 799,
    images: ['/assets/img/shirt1.jpg'],
    category: 'Shirt',
    colors: ['White', 'Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Comfortable cotton shirt, perfect for office and casual wear.',
    inStock: true
  },
  {
    id: '3',
    name: 'Kids Party Wear',
    price: 1200,
    images: ['/assets/img/kids1.jpg'],
    category: 'Kids',
    colors: ['Pink', 'Yellow'],
    sizes: ['2Y', '4Y', '6Y'],
    description: 'Trendy kids party wear outfit made with premium fabric.',
    inStock: false
  },
  {
    id: '4',
    name: 'Custom Fabric',
    price: 450,
    images: ['/assets/img/fabric1.jpg'],
    category: 'Fabric',
    colors: ['Brown', 'Grey'],
    sizes: [],
    description: 'Custom fabrics sold per meter. Soft & durable.',
    inStock: true
  }
];
