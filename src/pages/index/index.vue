<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div>活动介绍</div>
    <img class="banner" src="/static/activity-banner.png" />
    <tabs>
        <tab name="列表">
            <div>
                <div :key="item.id" v-for="item in list">
                  <linker href="/detail" :text="item.nickName" />
                </div>
            </div>
        </tab>
        <tab name="规则">
          <div>这是规则</div>

          <button @click="showToast">toast</button>

        </tab>
    </tabs>
  </div>
</template>

<script>
import wx from 'wx'
import linker from '@/components/linker'
// import {Tab} from '@/components/tabs'
import Tabs from '@/components/tabs/components/Tabs'
import Tab from '@/components/tabs/components/Tab'
import ListItem from '@/components/ListItem'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  computed: {
    list() {
      return this.$store.state.work.list
    }
  },
  name: 'indexPage',
  components: {
    linker,
    Tab,
    Tabs,
    ListItem
  },

  onPageScroll() {
    console.log("page scroll");
  },

  methods: {
    showToast () {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
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
    }
  },

  mounted() {
    this.$store.dispatch('getWorkList', {
      activityId: '5226882625660152610'
    })
  },

  onReachBottom() {
    this.$store.dispatch('getWorkList', {
      activityId: '5226882625660152610'
    })
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style>
.tabs-component-tab {
  text-align: center;
}
</style>


<style >
.banner {
  width: 100%;
}

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
