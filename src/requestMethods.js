import axios from "axios";

const BASE_URL = "https://long-suspenders-duck.cyclic.app/api/";
//const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU4YTM4N2RjNDIxYmZlZGQzOTU3ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDgwMDc0NywiZXhwIjoxNjgxMDU5OTQ3fQ.1T5gFD61OpPGaxLS6kNU1wGX9G2Ra3h-ptqmUxGbMvY"
 const TOKEN =  JSON.parse(localStorage.getItem("persist:root"))?.user?.currentUser?.accessToken ?? "";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token: `Bearer ${TOKEN}`},

});
