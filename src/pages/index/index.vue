<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <tabs>
        <tab name="First tab">
            This is the content of the first tab
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            This is the content of the second tab
            <button @click="onClick">Button</button>
            <div>This is the content of the second tab</div>
            <button @click="onClick">Button</button>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
            <div>This is the content of the second tab</div>
        </tab>

        <tab name="Second tab">
            This is the content of the second tab
            <button @click="onClick">Button</button>
        </tab>
    </tabs>

     <!--  <linker href="/logs" text="link to logs page" /> -->
  </div>
</template>

<script>
import card from '@/components/card'
import wx from 'wx'
import linker from '@/components/linker'
// import {Tab} from '@/components/tabs'
import Tabs from '@/components/tabs/components/Tabs'
import Tab from '@/components/tabs/components/Tab'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  name: 'indexPage',

  components: {
    card,
    linker,
    Tab,
    Tabs
  },

  onPageScroll() {
    console.log("page scroll");
  },

  methods: {

    onClick() {
      console.log('onclick');
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()

    console.log('page created')
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
