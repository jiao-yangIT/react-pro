import React, { Component , Fragment, PureComponent} from "react";

class About extends PureComponent{
    static defaultProps = {
        name: '类组件默认名称',
        age: 10
    }

    state = {
        age: 10
    }
    // 在类组件存在一个props属性，外部传递过来的数据可通过它来进行访问
    render() {
        console.log('about render执行')
        const { name, age } = this.props
        return(
            // 以下三种方式均可实现
            // <div>这是about组件页面的数据</div>
            // <Fragment>这是about组件页面的数据</Fragment>
            <>
                <div style={{background: 'blue', color: '#fff'}}>
                    <p>这是about类组件页面的数据</p>
                    <span>姓名: {name}</span>
                    <span>年龄: {age}</span>
                    { this.props.children }
                    <button onClick={()=> { this.setState({age: Number(this.state.age) + 5})}}>点击按钮</button>
                </div>
            </>
        )
    }
    //不建议子组件使用-shouldComponentUpdate，引用react中的
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('shouldComponentUpdate-about')
    //     if (nextState.age === this.state.age) {
    //         return false
    //     }
    //     return true
    // }

    foo = ()=> {
        console.log('about组件的click事件')
    }
    componentDidMount() {
        //当组件挂载完成之后就可以执行dom操作，此时添加事件监听
        window.addEventListener('click', this.foo)
    }
    // 当前方法在组件卸载之前执行
    componentWillUnmount() {
        window.removeEventListener('click', this.foo)
    }
}

export default About