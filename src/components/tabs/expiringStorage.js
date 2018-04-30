import wx from 'wx'

class ExpiringStorage {
  get(key) {
      const cached = wx.getStorageSync(key)

      if (! cached) {
          return null;
      }

      const expires = new Date(cached.expires);

      if (expires < new Date()) {
          wx.removeStorageSync(key)
          return null;
      }

      return cached.value;
  }

  set(key, value, lifeTimeInMinutes) {
      const currentTime = new Date().getTime();

      const expires = new Date(currentTime + lifeTimeInMinutes * 60000);

      wx.setStorageSync(key, { value, expires })
  }
}

export default new ExpiringStorage();
