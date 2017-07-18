import axios from 'axios';
import server from '../../config/server';
import store from 'store';

export default class Fetch {
  constructor (){
    this.config = {
      timeout: 5000
    };

    // request 拦截器
    this.requestInterceptor = request => {
      request => {
        // do something before request
        return request;
      }, error => {
        console.log(error);
        Promise.reject(error);
      }
    }

    // response 拦截器
    this.responseInterceptor = response => {
      const res = response.data;
      if (res.code == 200) {
        // to deal status code

        return response.data;
      }else {
        return Promise.reject(error);
      }
    }, error => {
        console.log(error);
        Promise.reject(error);
      }
  }


  server_1 (config) {
    const service = new axios(Object.assign(this.config, {
      baseURL: server.SERVER_1
    }, config))
    service.interceptors.request.use(this.requestInterceptor)
    service.interceptors.response.use(this.responseInterceptor)

    return service
  }

  server_2(config) {
    const service = new axios(Object.assign(this.config, {
      baseURL: server.SERVER_1
    }, config))
    service.interceptors.request.use(this.requestInterceptor)
    service.interceptors.response.use(this.responseInterceptor)

    return service
  }

}


