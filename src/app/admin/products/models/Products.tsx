import fetcher from "@/app/helpers/fetcher";

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
    const data = fetcher<ProductsResponse>(`${Products.API_PRODUCTS}?limit=0`)
      .then((data: ProductsResponse) => data.products);
    
    return data;
  }

  static getWith(id: number) {
    return fetcher<Product>(`${Products.API_PRODUCTS}/${id}`).then((data: Product) => data);
  }

  static getCategories() {
    return fetcher<string[]>(`${Products.API_PRODUCTS}/categories`)
      .then((categories: string[]) => categories);
  }

  static delete(id: number): Promise<Product> {
    return fetcher(`${Products.API_PRODUCTS}/${id}`, 'DELETE');
  }

  static create(product: Product) {
    return fetcher<Product>(
      `${Products.API_PRODUCTS}/add`,
      'POST',
      {...product, id: null}
    );
  }

  static update(product: Product) {
    return fetcher<Product>(`${Products.API_PRODUCTS}/${product.id}`, 'PUT', product);
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