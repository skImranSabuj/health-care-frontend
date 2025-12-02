import axios from "axios";
import { getFromLocalStorage } from "../utils/local-storage";
import { AUTH_KEY } from "../const/const";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000; // 60 seconds

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = getFromLocalStorage(AUTH_KEY)
    if( token){
      config.headers.Authorization = `${token}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => /* This function returns true */}
);

// Add a response interceptor
// @ts-ignore
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const responseObj = {
      data: response?.data?.data,
      meta: response?.data?.meta
    }
    return responseObj;
  }, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const errorResponse = {
      status: error.response?.status || 500,
      
    }
    return Promise.reject(error);
  });


export default instance;
