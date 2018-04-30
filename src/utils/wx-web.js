const wx = {}

wx.getStorageSync = (name) => {
  try {
    const item = window.localStorage.getItem(name)
    return JSON.parse(item)
  } catch (e) {

  }

  return null
}

wx.setStorageSync = (name, value) => {
  try {
    window.localStorage.setItem(name, JSON.stringify(value))
  } catch (e) {

  }
}

wx.removeStorageSync = (name) => {
  try {
    window.localStorage.removeItem(name)
  } catch (e) {

  }
}


wx.login = ({success}) => {

}

export default wx
