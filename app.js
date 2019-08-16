//app.js
import request from "./utils/request.js";
App({
  onLaunch: function () {
    // 初始化基准路劲
    request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1";
  }
})