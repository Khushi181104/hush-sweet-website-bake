
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Strawberry Delight',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Fresh strawberry cupcake with cream cheese frosting and strawberry chunks on top.',
    category: 'Fruity'
  },
  {
    id: 2,
    name: 'Chocolate Heaven',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Rich chocolate cupcake with chocolate ganache frosting and chocolate shavings.',
    category: 'Chocolate'
  },
  {
    id: 3,
    name: 'Mint Madness',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Chocolate cupcake with mint buttercream frosting and chocolate chips.',
    category: 'Chocolate'
  },
  {
    id: 4,
    name: 'Red Velvet',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1614707267169-067936b3a3af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Classic red velvet cupcake with cream cheese frosting and red velvet crumbs.',
    category: 'Classic'
  },
  {
    id: 5,
    name: 'Vanilla Dream',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Light vanilla cupcake with vanilla buttercream and rainbow sprinkles.',
    category: 'Classic'
  },
  {
    id: 6,
    name: 'Lemon Zest',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1519869491916-8ca6f615d6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Tangy lemon cupcake with lemon buttercream and candied lemon peel.',
    category: 'Fruity'
  },
  {
    id: 7,
    name: 'Caramel Swirl',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Vanilla cupcake with caramel core, caramel buttercream, and caramel drizzle.',
    category: 'Special'
  },
  {
    id: 8,
    name: 'Cookies & Cream',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Chocolate cupcake with cookies and cream frosting and cookie crumbles.',
    category: 'Chocolate'
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));
