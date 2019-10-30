import React from 'react'
import ReactDom from 'react-dom'

import Nav from './Nav'
import { CartList } from './components'
 
import store from './store'

window.store = store
console.log(store)

ReactDom.render(
    <div>
        <Nav />
        <CartList store={store} /> 
    </div>,
    document.querySelector('#root')
)