import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNoticebar, AtButton } from 'taro-ui'

import './index.scss'


class Index extends Component {

  discoveryBtnHandler = () => {
    Taro.navigateTo({
      url: '/pages/discovery/index'
    })
  }

  requestBtnHandler = () => {
    Taro.request({
      url: 'http://localhost:8001/api/users/',
      method: 'GET',
    }).then(res => console.log(res.data))
  }

  render() {
    return (
      <View className='profile'>
        <AtNoticebar>个人主页上线了！赶紧体验看看吧</AtNoticebar>
        <View className='doc-body'>
          <View className='profile-btn'>
            <AtButton type='primary' onClick={this.discoveryBtnHandler}>
              去看看发现页
            </AtButton>
          </View>
          <View className='profile-btn'>
            <AtButton type='secondary' onClick={this.requestBtnHandler}>
              发个网络请求
            </AtButton>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
