import axios from 'axios';
// export const baseurl = "https://medadmin.questioncloud.in/api";
export const baseurl = "https://britishagro.com/api/";
//export const baseurl = "https://admin.jobslink.in/api/api/v1";



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