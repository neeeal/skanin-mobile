import { useSession } from '../ctx';
import { BASE_URL } from './urls';

export default async function make_request({ relative_url, HEADERS = {}, body = null, method }) {
    const headers = { 'Content-Type': 'application/json', ...HEADERS };
    const options = {
      method: method,
      headers: headers,
      ...(method === 'POST' || method === 'PUT' ? { body: JSON.stringify(body) } : {})
    };
  
    return fetch(relative_url, options)
      .then(response => {
        return response.json().then(res => {
          if (!response.ok) {
            console.error('Error response:', res);
            throw new Error(res.msg || 'Request failed');
          }
          return { ...res, status: response.status };
        });
      })
      .catch(error => {
        console.error('Error occurred:', error);
        throw error;
      });
  }
  