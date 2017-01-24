import Vue from 'vue'

class authApi {
  constructor(parameter) {
    this.parameter = parameter;
    this.successCallback = successCallback;
    this.errorCallback = errorCallback;
  }

  getRoomList() {
    Vue.http.get('/someUrl', this.parameter).then(successCallback, errorCallback);
  }
}
