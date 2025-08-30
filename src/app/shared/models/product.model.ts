export interface Product {
id: string;
name: string;
price: number;
images: string[];
category: 'Saree' | 'Shirt' | 'Kids' | 'Fabric' | 'Other';
colors?: string[];
sizes?: string[];
description?: string;
inStock?: boolean;
}