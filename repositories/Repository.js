import axios from 'axios';
// export const baseurl = "https://medadmin.questioncloud.in/api";
export const baseurl = "https://britishagro.com/api/api";

//export const baseurl = "http://192.168.1.170:5003/api";//JP

 //export const baseurl = "http://192.168.1.165:4567/api/v1";
//export const baseurl = "http://localhost:4567/api/v1";
export const file = "http://localhost:4567/api/v1/user";
export const apiUrl = baseurl;
export const fileUpload = file;
let customHeaders = {
    Accept: 'application/json'
};

let local = typeof window !== 'undefined' ? localStorage : null;
if (local && local.usertoken) {
    customHeaders['x-auth-token'] = `${local.usertoken}`;
}

export default axios.create({
    headers: customHeaders,
});