import React from 'react'
import Home from "./components/Home";
// import List from "./components/List";

/*
* 组件状态：状态即数据，因此组件状态指的是某一个组件自己的数据
* 数据驱动DOM，当我们修改某一条数据时，界面上的DOM中数据展示也会自动更新
* 组件状态管理
* props的数据是只读的。
 */
function App() {
    return(
        <>
            <div className={'app-page'}>
                <Home></Home>
                {/*<List></List>*/}
            </div>
        </>
    )
}

export default App