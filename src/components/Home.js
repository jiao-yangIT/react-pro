import React, { Component } from 'react';
import Layout from "./Layout";
import Y1 from './Y1'

class Home extends Component {
    //类组件中默认存在一个state属性，是一个对象，可以用于保存当前组件的数据
    //之后还可以通过setState方法来修改数据的值，最后修改后的状态会自动显示在DOM界面上

    /*
        *setState的使用
        * 是一个异步函数
        *   可以调用async 与 await来解决setState异步执行的问题
        *   调用setState的时候可以传入回调函数，在它里面就是可以使用修改之后的数据
        * 使用的时候除了可以传入一个对象，也可以传入一个函数
        *   传入对象时，会覆盖之前的对象数据，执行的最后一个，传入函数时，是都会执行；推荐使用函数
     */

    /*
    * this的使用
    */

    state = {
        name: 'YJJ',
        age: 28,
        money: 0
    }

    handleClick = async ()=> {
        this.setState({
            name: this.state.name === 'LH' ? 'YJJ' : 'LH',
            age: this.state.age === 26 ? 28 : 26
        })
    }
    handleClickMoney = async ()=> {
        // 对象
        // await this.setState({
        //     money: this.state.money + 1
        // })
        // this.setState({
        //     money: this.state.money + 1
        // }, ()=> {
        //     console.log(this.state.money);
        // })
        // 函数
        await this.setState((state)=> ({
            money: state.money + 1
        }))
        console.log(this.state.money);
    }

    handleClickThis = function () {
        console.log(this)
        console.log('这是普通函数的方式，使用this')
    }

    // 定义状态的更新方法，当前只负责定义，在想要修改的地方进行调用
    // 传的参若与取得参数一致，可以直接写参数名字，setState中，若接收的参数，与要去的参数一直，则也可以省略 this.setState({name: name, age: age})
    handleToData = ({name, age})=> {
        this.setState({name, age})
    }
    render() {
        return(
            <>
                <Layout>
                    <div  style={{display: 'flex'}}>
                        <div>
                            <h2>数据改变</h2>
                            <p>姓名：{ this.state.name}</p>
                            <p>年龄：{ this.state.age}</p>
                            <button onClick={this.handleClick}>点击改变数据</button>
                        </div>
                        <div>
                            <h2>setState及this</h2>
                            <p>余额：{ this.state.money } W</p>
                            <button onClick={this.handleClickMoney}>点击改变金额</button>
                            <button onClick={()=> {this.handleClickThis()}}>箭头函数this</button>
                            <button onClick={this.handleClickThis.bind(this)}>bind-this</button>
                        </div>
                        <div>
                            <h2>单向数据流程</h2>
                            <Y1 {...this.state} change={this.handleToData}></Y1>
                        </div>
                    </div>
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