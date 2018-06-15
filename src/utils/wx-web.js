import axios from 'axios';
import Toast from '../components/Toast'
import Modal from '../components/Modal'
import Vue from 'vue'

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

wx.request2 = (options) => {
  return axios(options)
}

let toast

wx.showToast = (options) => {
  if (toast) {
    Object.assign(toast.vm, {
      visible: true,
      ...options
    })
  } else {
    const ToastConstructor = Vue.extend(Toast)

    toast = new ToastConstructor({})
    toast.$on('update:visible', (value) => {
      toast.vm.visible = value
    })
    toast.vm = toast.$mount()
    Object.assign(toast.vm, {
      visible: true,
      ...options
    })
    document.body.appendChild(toast.$el)
  }
}


let modal

wx.showModal = (options) => {
  if (modal) {
    Object.assign(modal.vm, {
      visible: true,
      ...options
    })
  } else {
    const ModalConstructor = Vue.extend(Modal)

    modal = new ModalConstructor({})
    modal.$on('update:visible', (value) => {
      modal.vm.visible = value
    })
    modal.vm = modal.$mount()
    Object.assign(modal.vm, {
      visible: true,
      ...options
    })
    document.body.appendChild(modal.$el)
  }
}

wx.setNavigationBarTitle = ({title}) => {
  document.title = title
}

export default wx
