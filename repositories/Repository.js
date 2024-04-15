import axios from 'axios';
export const baseurl = "https://britishagro.com/api/api";
// export const baseurl = "http://localhost:3001/api/v1";

export const apiUrl = baseurl;

let customHeaders = {
    Accept: 'application/json'
};

let local = typeof window !== 'undefined' ? localStorage : null;
if (local && local.usertoken) {
    customHeaders['authorization'] = `Bearer ${local.usertoken}`;
}

export default axios.create({
    headers: customHeaders,
}); 