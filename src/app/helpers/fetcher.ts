type Method = "GET" | "POST" | "PUT" | "DELETE";

const fetcher = <T>(url: string, method: Method = 'GET', body?: {}) => fetch(url, {
  method: method,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window?.sessionStorage.getItem('token')
  },
  body: JSON.stringify(body)
}).then((res) => res.json()).then((data: T) => data);

export default fetcher;