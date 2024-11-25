import React, { Component } from 'react';
import Layout from "./Layout";
import Y1 from './Y1'

class Home extends Component {
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

    handleChangeFormVal = (ev)=> {
        const prop = ev.target.name
        this.setState({
            [prop]: ev.target.value
        })
    }
    render() {
        return(
            <>
                <Layout>
                    <div  style={{display: 'flex'}}>
                        <div>
                            {/*//类组件中默认存在一个state属性，是一个对象，可以用于保存当前组件的数据*/}
                            {/*//之后还可以通过setState方法来修改数据的值，最后修改后的状态会自动显示在DOM界面上*/}
                            <h2>数据改变</h2>
                            <p>姓名：{ this.state.name}</p>
                            <p>年龄：{ this.state.age}</p>
                            <button onClick={this.handleClick}>点击改变数据</button>
                        </div>
                        <div>
                            {/**setState的使用*/}
                            {/** 是一个异步函数*/}
                            {/**   可以调用async 与 await来解决setState异步执行的问题*/}
                            {/**   调用setState的时候可以传入回调函数，在它里面就是可以使用修改之后的数据*/}
                            {/** 使用的时候除了可以传入一个对象，也可以传入一个函数*/}
                            {/**   传入对象时，会覆盖之前的对象数据，执行的最后一个，传入函数时，是都会执行；推荐使用函数*/}
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
                        <div>
                            {/** react中使用表单元素*/}
                            {/**   受控表单： 表单元素的值全部由react来进行管理，此时表单元素的值都放在state中，所以表单元素的值也要从state中进行获取*/}
                            {/**   非受控表单：不受react管理，表单元素的数据由DOM元素本身进行管理，表单元素的值也是放在DOM元素中，获取的时候需要操作DOM元素*/}
                            {/** 受控表单值绑定与数据同步*/}
                            {/**   将state状态与表单的value进行绑定 value={this.state.name}*/}
                            {/**   更新状态值： onchange={方法} ev.target.value*/}
                            {/**   ev.target.name === [prop]: this.setState({})*/}
                            {/** value={***}的控制台报错：如果没有change事件，则有defaultValue/readonly属性来避免报错*/}
                            <h2>表单元素的使用</h2>
                            <input name={'name'} value={this.state.name} onChange={this.handleChangeFormVal.bind(this)} />
                            <input value={this.state.age} onChange={(e)=> {this.setState({age: e.target.value})}} />
                            <input type="text" defaultValue={this.state.money} readOnly/>
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