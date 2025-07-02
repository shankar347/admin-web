import axios from 'axios';
// export const baseurl = "https://britishagro.com/api/api/v1";
export const baseurl = "http://192.168.1.141:5006/api/v1";

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