type Product = {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[]
}

class Products {
  static readonly API_PRODUCTS = 'https://dummyjson.com/products';

  static get() {
    const data = fetch(`${Products.API_PRODUCTS}?limit=0`)
      .then(res => res.json())
      .then((data: ProductsResponse) => data.products);
    
    return data;
  }

  static getCategories() {
    return fetch(`${Products.API_PRODUCTS}/categories`)
      .then(res => res.json())
      .then((categories: string[]) => categories);
  }

  static delete(id: number): Promise<Product> {
    console.log('Delete product with id: ', id);
    
    return fetch(`${Products.API_PRODUCTS}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  static create(product: Product) {
    return fetch(`${Products.API_PRODUCTS}/add`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...product, id: null})
    })
    .then(res => res.json());
  }

  static update(product: Product) {
    return fetch(`${Products.API_PRODUCTS}/${product.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(product)
    })
    .then(res => res.json());
  }
}

type ProductsResponse = {
  "limit": number
  "products": Product[]
  "skip": number 
  "total": number
}

export type { Product, ProductsResponse }
export default Products