import React from 'react'
import ReactDom from 'react-dom'


class App extends React.Component{
    render(){
        return <h1>这是一个react组件</h1>
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)