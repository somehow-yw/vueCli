(function () {
    let req = {}
    let send = function (obj, method, url, data, callback, header) {
      if (!obj) return
      let reqOption = {}
      reqOption.method = method
      reqOption.url = url + '?r=' + Math.random()
      if (method === 'post' || method === 'POST') {
        reqOption.body = data
      } else {
        reqOption.params = data  // vue中应该为params
      }
      if (header) {
        reqOption.header = header
      }
      let request = obj.$http(reqOption).then((res) => {
        callback.call(this, res.data ? res.data : res.body)
      })
  
      return request
    }
       // 获取用户信息
    req.getUserInfo = function (obj, data, callback) {
      return send(obj, 'get', '/user/info', data, callback, 'Accept:application/json');
    }
  
    window.req = req
  })()
  