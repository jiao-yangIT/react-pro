import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

/*
 *  当前组件的作用是将header及footer显示出来，同时将main内容空出来
 *  将来传入什么样的JSX，main里就显示什么样的Dom
 */
function Layout(props) {
    return(
        <>
            <Header></Header>
            <div className={'main'}>
                {props.children}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout