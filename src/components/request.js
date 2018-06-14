import wx from 'wx'
const domain = 'https://activity.manhua.163.com'

export default function (options) {
  return wx.request2({
    ...options,
    url: `${domain}${options.url}`
  })
}
