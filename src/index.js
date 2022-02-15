import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import './mock'
// 全局样式
import '@/common/stylus/frame.styl'

const antdConfig = {
    locale: zhCN,
}
ReactDOM.render(
    <ConfigProvider {...antdConfig}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
)
