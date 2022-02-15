import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import imgLogo from './logo.png'
import Header from '@/components/header'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { apiReqs } from '@/api'
import './login.styl'

function Login(props) {
    const { myLoginData, setData } = props

    // 创建路由钩子
    const navigate = useNavigate()

    // 组件中自维护的实时数据
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')

    // 登录
    const login = () => {
        apiReqs.signIn({
            data: {
                account,
                password,
            },
            success: (res) => {
                console.log(res)
                navigate('/home')
            },
        })
    }

    return (
        <div className="P-login">
            <Header
                title="login"
                info={() => {
                    console.log('info:login')
                }}
            />
            <img src={imgLogo} alt="" className="logo" />
            <div className="ipt-con">login store: myData = {myLoginData}</div>
            <div className="ipt-con">
                <button
                    onClick={() => {
                        setData('123456')
                    }}
                >
                    更改login store的myData
                </button>
            </div>
            <div className="ipt-con">
                <Input
                    placeholder="账号"
                    value={account}
                    onChange={(e) => {
                        setAccount(e.target.value)
                    }}
                />
            </div>
            <div className="ipt-con">
                <Input.Password
                    placeholder="密码"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <div className="ipt-con">
                <Button type="primary" block={true} onClick={login}>
                    登录
                </Button>
            </div>
        </div>
    )
}

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => {
    return {
        // 数组第一个元素的login，对应的是src/store/reducer.js中定义的login分库名称
        myLoginData: state.getIn(['login', 'myLoginData']),
    }
}

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
    setData(data) {
        const action = actionCreators.setData(data)
        dispatch(action)
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
