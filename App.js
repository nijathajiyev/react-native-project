import React, {useState} from 'react'
import {Auth} from "./src/Auth";
import {store} from './src/store'
import {Provider} from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <Auth/>
        </Provider>
    )
}

export default App

