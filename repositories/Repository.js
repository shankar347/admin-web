import axios from "axios";

export const baseurl = "http://192.168.1.148:5000/api/v1";
// export const baseurl = "https://courierapi.vercel.app/api/v1";

export const apiUrl = baseurl;

export const googleApi = "AIzaSyBU9bScpaVDW2ohP3GXK_boB5e87eA4Y5A";

let customHeaders = {
  Accept: "application/json",
};

let local = typeof window !== "undefined" ? localStorage : null;
if (local && local.usertoken) {
  customHeaders["authorization"] = `Bearer ${local.usertoken}`;
}

export default axios.create({
  headers: customHeaders,
});
