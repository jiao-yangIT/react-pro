import React, { Component } from 'react';
import Layout from "./Layout";
import Y1 from './Y1'
import Form from "./Form";
import About from "../About";
import axios from 'axios'
import Counter from './Counter';

class Home extends Component {

    // this.***.bind(this)更换-代码简洁
    constructor() {
        console.log('constructor执行')
        super()
        // this.*** = this.***.bind(this)
    }

    state = {
        name: 'YJJ',
        age: 28,
        money: 0,
        selectValue: 'LH',
        checkedValue: [],
        radioValue: 'man',
        dataSource: [],
        isShow: true,
        users: [],
    }

    handleClick = async ()=> {
        this.setState({
            name: this.state.name === 'LH' ? 'YJJ' : 'LH',
            age: this.state.age === 26 ? 28 : 26,
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

    // 复选框数据
    checkBoxDatas = [
        {
            id: 1,
            title: '复选框1',
            isChecked: true,
        },
        {
            id: 2,
            title: '复选框2',
            isChecked: true,
        },
        {
            id: 3,
            title: '复选框3',
            isChecked: false,
        }
    ]

    handleChangeCheckBox(index, ev) {
        this.checkBoxDatas[index] = ev.target.checked
    }

    handleSubmit(ev) {
        ev.preventDefault();
        this.state.checkedValue = this.checkBoxDatas.filter(e => e.isChecked).map(m=> m.id)
        let submitData = this.state
        console.log(submitData)
    }

    getUsers = async ()=> {
        const users = await axios.get('/api/users.json').then((res)=> res.data);
        this.setState({ users })
    }

    removeData = (index)=> {
        // 核心：找到要删除行的索引数据index,将它从原数据中拿出来，最后再将处理过的数据重新setState给state，页面重新渲染
        // 对数据进行深拷贝
        const dataSource = JSON.parse(JSON.stringify(this.state.dataSource))
        // 从拷贝的数据中将要删除的索引找出
        const index1 = dataSource.findIndex(find => find.index === index)
        // 利用index将目标项从数组中删除
        dataSource.splice(index, 1)
        // 数据更新
        this.setState({ dataSource }, ()=> {
            console.log(this.state.dataSource)
        })
    }
    render() {
        console.log('render执行')
        return(
            <>
                <Layout>
                    <div  style={{display: 'flex',flexWrap: "wrap"}}>
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
                            <form onSubmit={(ev)=> {this.handleSubmit(ev)}}>
                                <input name={'name'} value={this.state.name} onChange={this.handleChangeFormVal.bind(this)} />
                                <input value={this.state.age} onChange={(e)=> {this.setState({age: e.target.value})}} />
                                <input type="text" defaultValue={this.state.money} readOnly/>
                                <br />
                                <select value={this.state.selectValue} onChange={(e)=> {
                                    this.setState({selectValue: e.target.value})
                                }}>
                                    <option value="YJJ">YANGJJ</option>
                                    <option value="LH">LIHU</option>
                                </select>
                                <input name='radioValue' type="radio" value={'man'} defaultChecked={this.state.radioValue === 'man'} onChange={(ev)=> { this.setState({radioValue: ev.target.value})}}/> 男
                                <input name='radioValue' value={'woman'} type="radio" defaultChecked={this.state.radioValue === 'woman'} onChange={(ev)=> { this.setState({radioValue: ev.target.value})}}/> 女
                                {
                                    this.checkBoxDatas.map((d, index)=> {
                                        return(
                                            <label key={d.id}>
                                                <input type="checkbox" defaultChecked={d.isChecked} onChange={this.handleChangeCheckBox.bind(this, index)}/>{ d.title}
                                            </label>
                                        )
                                    })
                                }
                                <br />
                                <input type='submit' />
                            </form>
                        </div>
                        <div>
                            {/** 非受控组件指的是 就某一个元素里的数据不受react的管理， 可以直接从DOM元素本身进行获取(获取DOM元素，获取具体的值)*/}
                            <h2>非受控表单</h2>
                            <Form />
                        </div>
                        <div>
                            {/*挂载组件-组件被创建然后插入到DOM当中*/}
                            {/*生命周期方法
                                constructor         设置组件的初始配置
                                render              解析JSX,在界面显示
                                componentDidMount   组件挂在完成--发送网络请求；添加定时器；添加事件监听；获取DOM元素
                             */}
                            <h2>react生命周期-挂载阶段</h2>
                            <input value={this.state.money} readOnly/>
                        </div>
                        <div>
                            {/*组件更新阶段-当数据更新之后，数据需要被重新渲染；外部传入的props以及自身管理的状态*/}
                            {/*生命周期方法
                                shouldComponentUpdate(nextProps, nextState)         组件是否更新
                                    默认返回true；如果此方法返回的是false，则后续方法就不会再执行
                                render              解析JSX,在界面显示；渲染DOM组件
                                componentDidUpdate   组件更新完成后执行
                             */}
                            <h2>react生命周期-更新阶段</h2>
                            {this.state.age}<button onClick={()=> { this.setState({age: this.state.age + 1})}}>父点击按钮</button>
                            <About />
                        </div>
                        <div>
                            {/*组件卸载阶段-将组件从DOM中删除*/}
                            {/*生命周期方法
                                componentWillUnMount
                             */}
                            <h2>react生命周期-卸载阶段</h2>
                            {this.state.age}<button onClick={()=> { this.setState({age: this.state.age + 1})}}>父点击按钮</button>
                            <button onClick={()=> { this.setState({isShow: !this.state.isShow})}}>子组件显隐切换</button>
                            {this.state.isShow && <About />}
                        </div>
                        <div>
                            {/*请求转发:避免跨域问题*/}
                            {/*react如何实现请求转发：
                                package.json 配置 proxy代理地址：http://localhost:3100
                                使用第三方服务：http-proxy-middleware --setupProxy.js文件
                            */}
                            {/*服务器与服务端不存在跨域问题*/}
                            {/*客户端应用发请求到对应同源的服务端，服务端将请求转发API服务器端，API服务器端将数据处理后返回给...客户端应用*/}
                            <h2>发起请求/请求转发</h2>
                            当前年龄为{this.state.age}
                        </div>
                        <div>
                            <h2>mock 数据-适用于get请求</h2>
                            <button onClick={this.getUsers}>获取用户数据</button>
                            <ul>
                                {
                                    this.state.users.map((user)=>(
                                        <li key={user.id}>{user.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            {/*Redux-可进行组件之间传值*/}
                            {/*Redux是一个数据管理框架，提供了一个叫store的统一数据存储的仓库*/}
                            {/*store是一个数据管理的中间人，让组件之前无需在进行数据传递*/}
                            <h2>redux 使用</h2>
                            <Counter />
                        </div>
                    </div>
                </Layout>
            </>
        )
    }

    async componentDidMount() {
        // url: 直接写： http://localhost:3100/api/component
        // url: 代理写： /api/component
        // const data = await axios.get('/component').then((res)= res.data)
        // this.setState({ age: data.age})
        console.log('componentDidMount执行了')
/*        setInterval(()=> {
            this.setState({
                money: this.state.money + 1
            })
        }, 1000)*/
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