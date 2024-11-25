import React, { Component , Fragment} from "react";

class About extends Component{
    static defaultProps = {
        name: '类组件默认名称',
        age: 100
    }
    // 在类组件存在一个props属性，外部传递过来的数据可通过它来进行访问
    render() {
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
                </div>
            </>
        )
    }
}

export default About