
/*
 * JSX-1
 * JSX JS语言的扩展 不是一个字符串也不是HTML
 * 具备了JS所有的功能 还可以被转为HTML 在界面上进行显示（react react-dom）
 *
 * 动态显示数据 {}
 * 调用方法-自定义 + 内置
 * 支持表达式
 * 模板字符串
 */

/*
*JSX-2
* JSX本身是一个表达式
* JSX添加属性
*   字符串属性。直接用双引号包裹 title="自定义标题"
*   动态属性 title={title}
* JSX 添加子元素 例如<p>
* JSX 只能有一个父元素
* 使用单标签时要正确关闭
*/

/*
*JSX-3
* 事件绑定-驼峰命名直接添加 onClick={handleClick}
* 事件监听传参
*   利用箭头函数内部调用事件监听的时候传参
*   利用bind方法返回一个新的函数在事件发生时调用，进行传参
* 获取事件对象
*   默认情况下不需要接收参数，且直接执行后事件监听，此时他的第一个参数默认就是ev
*   利用箭头函数执行事件监听的时候，需要通过箭头函数将ev对象传递给事件监听函数进行使用
*   利用bind方法执行时，如果有参数，那么最后一个参数默认接收到的就是ev
*
 */

/*
 *JSX-4数据循环
 */
/*
 *JSX-5样式
 * 内联样式
 *  设置样式的时候应该将键值对放置于 {}
 *  内联样式无法默认支持伪类及媒体查询样式设置(媒体查询需要再index.js使用StyleRoot)
 *  radium
 *      导入Radium 函数将当前需要支持伪类操作的组件包裹后再导出
 * 外联样式
 *  全局外联样式--所有组件当中都可以直接使用
 *  组件级别的外联样式-只有某个组件进行使用--组件名：**.module.css
 */
/*
* 组件传值
*   在组件身上添加属性然后传值
*   将数据统一管理，然后 利用 ... 操作直接传递给对应的组件
*   函数组件：在函数组件上可以接上外部的数据，内部直接访问即可{ name: ***, age: ***}
*   类组件：在类组件的内部存在一个props属性，外部传递的数据放在这里保存，可以直接进行使用
*/

/*
* 默认值及类型校验
*   针对函数组件来说，如果想要设置默认的props属性值，则直接通过 组件名称.defaultProps 来设置一个对象
*   针对类组件来说，我们可以直接定于static defaultProps 来管理需要设置的属性默认值
*/

// import Radium from 'radium'
import style from './index.module.css'
import styled from 'styled-components'
import About from './About'
import Header from './Header';

const name = 'YJJ-react-pro项目'
const flag = false
const title='这是动态属性的值'

const obj = {
    name: 'YJJ', age: 28, title: title
}
function fnc() {
  return 'YJJ-SAY-HELLO 杨说你好'
}

const handleClick1 =()=>{
    console.log('这是普通点击事件')
}

const handleClick2 = (a, b)=> {
    console.log(a, b)
    console.log('事件监听传参')
}

const handleClick3 = (ev)=> {
    console.log(ev)
    console.log('获取事件对象')
}

const loopArr = [
    {
        id: 1,
        name: 'YJJ',
        age: 28,
        salary: 100000
    },
    {
        id: 2,
        name: 'LH',
        age: 26,
        salary: 200000
    },
]

const styleObj = {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    ":hover": { backgroundColor: 'orange'},
    "@media(max-width: 1000px)": {width: 200}
}

const ContentDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: brown;
`

const btn = {
    base: {
        width: 150,
        height: 40,
        fontSize: 15,
        background: 'green',
        fontColor: '#fff',
    },
    login: {
        borderColor: 'red'
    }
}
function App() {
    const loopData = loopArr.map(i=> {
        return (
            <li key={i.id}>
                <span>{i.name}</span>-
                <span>{i.age}</span>-
                <span>{i.salary}</span>-
            </li>
        )
    })
  return (
    <div className={'page'}>
        <div>
            <h2>react - 基本语法</h2>
            <p>{name}{/*name渲染*/}</p>
            <p>{fnc()}{/*函数*/}</p>
            <p>{`hello, ${name}`}</p>
            <p>{flag ? '现在是true' : '现在是false'}</p>
            <p>{JSON.stringify(obj)}</p>
            <p title="静态属性的值">静态属性</p>
            <p title={title}>动态属性</p>
            <img />
        </div>
        <div>
            <h2>事件操作</h2>
            <button style={{...btn.base, ...btn.login}} onClick={handleClick1}>普通点击事件</button>
            <button onClick={()=> {handleClick2(1, 2)}}>箭头函数传参</button>
            <button onClick={handleClick2.bind(null, 1, 2)}>bind函数传参</button>
            <button onClick={(ev)=> {handleClick3(ev)}}>箭头函数事件对象</button>
            <button onClick={handleClick3.bind(null)}>bind函数事件对象</button>
        </div>
        <div>
            <h2>数据循环</h2>
            <ul>{loopData}</ul>
        </div>
        <div>
            <h2>样式</h2>
            <div style={{display: 'flex', margin: '10px'}}>
                <span className={'content'}>外联样式模块-引用的是全局文件</span>
                <span className={style.indexContent}>外联样式模块-引用的是组件样式</span>
                <ContentDiv>这是styled-components的样式</ContentDiv>
            </div>
        </div>
        <div>
            <h2>组件引用及传值</h2>
            <About {...obj} />
            <Header {...obj} />
        </div>
        <div>
            <h2>默认值及类型校验</h2>
            <About />
            <Header />
        </div>
        <div>
            <h2>向组件传递JSX</h2>
            <About>
                <p>这是类组件的P标签</p>
                <span>这是类组件的span标签</span>
            </About>
            <Header {...obj}>
                <p>这是函数组件的P标签</p>
                <span>这是函数组件的span标签</span>
            </Header>
        </div>
    </div>
  );
}

export default App;
