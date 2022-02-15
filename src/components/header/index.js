import { connect } from 'react-redux'
import './header.styl'

function Header(props) {
    // 接收来自父组件及Redux的数据
    const { title, info, myLoginData } = props

    // 如果info存在，则执行info()
    info && info()

    return (
        <div className="M-header">
            Header:{title}{' '}
            <span style={{ marginLeft: 20 }}>myLoginData:{myLoginData}</span>
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
export default connect(mapStateToProps, null)(Header)
