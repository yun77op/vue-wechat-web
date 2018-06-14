const promisify = (wx, method) => {
  const originMethod = wx[method]

  wx[method + '2'] = function({fail, success, ...args}) {
    return new Promise((resolve, reject) => {
      originMethod({
        ...args,
        fail: (resp) => {
          if (fail) {
            fail(resp)
          }
          reject(resp)
        },
        success: (resp) => {
          if (success) {
            success(resp)
          }
          resolve(resp)
        }
      })
    })
  }
}

promisify(wx, 'request')

export default wx
