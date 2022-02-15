import * as constants from './constants'

// 初始默认的state
const defaultState = {
    myHeaderData: null
}

const reducer = (state = defaultState, action) => {
    // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
    let newState = Object.assign({}, state)
    switch(action.type) {
        case constants.SET_DATA:
            newState.myHeaderData = action.data
            return newState
        default:
            return state
    }
}

export default reducer