import { useSession } from '../ctx';
import { BASE_URL } from './urls';

export default async function make_request ({ relative_url, HEADERS = {}, body = null, method, save_context = false }) {
    const headers = { 'Content-Type': 'application/json', ...HEADERS }
    const options = {
        method: method,
        headers: headers,
        ...(method === 'POST' || method === 'PUT') && { body: JSON.stringify(body) }
    };
    url = relative_url;

    // Await the fetch request and parse the JSON response
    console.log("inside everything", relative_url)
    const response = await fetch(url, options);
    const res = await response.json();
    

    if (response.status === 200) {
        return {...res, status: response.status  };
    }
    // Check if the response is ok
    // console.log(res.msg)
    if (res.msg.includes('Client Error')) {
        throw new Error(res.msg);
    }

    if (res.msg.includes('Internal Server Error')) {
        throw new Error('Internal Server Error');
    }
}