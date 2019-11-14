import React from 'react'
import ReactDOM from "react-dom"
import './index.less'
import App from './App'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { message, LocaleProvider, notification } from 'antd'
notification.config({ duration: 2, maxCount: 1 })
message.config({ top: 100, duration: 2, maxCount: 1 })
ReactDOM.render(<LocaleProvider locale={zh_CN}>
    <App />
</LocaleProvider>, document.getElementById("app"))
