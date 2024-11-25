import React from 'react';
import PropTypes from 'prop-types'

function Header(props) {
    // {name, title}可改为props;对应的span为{props.name}
    return(
        <div style={{background: 'red'}}>
            <p>这是函数组件</p>
            <span>name： {props.name}</span>
            <span>age：{props.age}</span>
            { props.children }
        </div>
    )
}

Header.defaultProps = {
    name: '函数组件默认名称',
    age: 20,
}

Header.propTypes = {
    name: PropTypes.string.isRequired, //名字为string类型且不能为空
    age: PropTypes.number
}
export default Header