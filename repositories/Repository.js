import axios from "axios";

export const baseurl = "http://192.168.1.148:5000";

// export const baseurl = "https://courierapi.vercel.app";

export const apiUrl = `${baseurl}/api/v1`;

export const MAP_API_KEY = "AIzaSyBU9bScpaVDW2ohP3GXK_boB5e87eA4Y5A";
export const OPEN_API_KEY = process.env.NEXT_PUBLIC_OPEN_API_KEY;

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
