import fetcher from "@/app/helpers/fetcher";
import { url } from "inspector";

type User = {
  "id": number,
  "firstName": string,
  "lastName": string,
  "maidenName": string,
  "age": number,
  "gender": string,
  "email": string,
  "phone": string,
  "username": string,
  "password": string,
  "birthDate": string,
  "image": string,
  "bloodGroup": string,
  "height": number,
  "weight": number,
  "eyeColor": string,
  "hair": {
    "color": string,
    "type": string
  },
  "domain": string,
  "ip": string,
  "address": {
    "address": string,
    "city": string,
    "coordinates": {
      "lat": number,
      "lng": number
    },
    "postalCode": string,
    "state": string
  },
  "macAddress": string,
  "university": string,
  "bank": {
    "cardExpire": string,
    "cardNumber": string,
    "cardType": string,
    "currency": string,
    "iban": string
  },
  "company": {
    "address": {
      "address": string,
      "city": string,
      "coordinates": {
        "lat": number,
        "lng": number
      },
      "postalCode": string,
      "state": string
    },
    "department": string,
    "name": string,
    "title": string
  },
  "ein": string,
  "ssn": string,
  "userAgent": string
};

class Users {
  static readonly API_USERS = 'https://dummyjson.com/users';

  static get() {
    const data = fetcher<UsersResponse>(`${Users.API_USERS}?limit=0`)
      .then((data: UsersResponse) => data.users);
    
    return data;
  }

  static getWith(id: number) {
    const data = fetcher<User>(`${Users.API_USERS}/${id}`)
      .then((data: User) => data);
    
    return data;
  }

  static authenticate(username: string, password: string) {
    const data = fetcher<AuthResponse>(
      'https://dummyjson.com/auth/login',
      'POST',
      {username, password}
    ).then((data: AuthResponse) => data);
    
    return data;
  }

  static delete(id: number): Promise<User> {    
    return fetcher(`${Users.API_USERS}/${id}`, "DELETE");
  }

  static create(product: User) {
    return fetcher(
              `${Users.API_USERS}/add`,
              'POST',
              {...product, id: null}
            );
  }

  static update(product: User) {
    return fetcher(`${Users.API_USERS}/${product.id}`, 'PUT', product);
  }
}

type UsersResponse = {
  "limit": number
  "users": User[]
  "skip": number 
  "total": number
}

type AuthResponse = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token: string
}

export type { User, UsersResponse, AuthResponse }
export default Users