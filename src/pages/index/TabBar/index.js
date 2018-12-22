import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTabBar } from 'taro-ui'


@inject('TabBarStore')
@observer
class Index extends Component {

  tabBarHandler = (i) => {
    const { TabBarStore: { navigateToTab } } = this.props;

    switch (i) {
      case 1:
        navigateToTab(i);
        break;

      default:
        navigateToTab(0);
        break;
    }
  }

  render() {
    const { TabBarStore: { currentTab } } = this.props;

    return (
      <View>
        <AtTabBar
          fixed
          tabList={[
            { title: 'Counter', iconType: 'add' },
            { title: 'Profile', iconType: 'user', text: 'new' },
          ]}
          onClick={this.tabBarHandler}
          current={currentTab}
        />
      </View>
    );
  }
}

export default Index
