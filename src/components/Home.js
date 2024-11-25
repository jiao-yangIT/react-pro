import React, { Component } from 'react';
import Layout from "./Layout";

class Home extends Component {
    //类组件中默认存在一个state属性，是一个对象，可以用于保存当前组件的数据
    //之后还可以通过setState方法来修改数据的值，最后修改后的状态会自动显示在DOM界面上

    state = {
        name: 'YJJ',
        age: 28
    }

    handleClick = ()=> {
        this.setState({
            name: this.state.name === 'LH' ? 'YJJ' : 'LH',
            age: this.state.age === 26 ? 28 : 26
        })
    }
    render() {
        return(
            <>
                <Layout>
                    <p>姓名：{ this.state.name}</p>
                    <p>年龄：{ this.state.age}</p>
                    <button onClick={this.handleClick}>点击改变数据</button>
                </Layout>
            </>
        )
    }
}

// function Home() {
//     return(
//         <>
//             <Layout>
//                 <p>当前是home页面</p>
//             </Layout>
//         </>
//     )
// }
//
export default Home